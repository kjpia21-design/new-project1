// 학습 경로·선행 글(requires) 도우미와 빌드 검사.
import { getCollection } from 'astro:content';
import { paths, type LearningPathDef, type PathId } from '../data/paths';
import { langOfId, type Lang } from './i18n';
import { isTutorial, tutorialSlug, type Tutorial } from './tutorials';

type Index = Record<Lang, Map<string, Tutorial>>;
let indexPromise: Promise<Index> | undefined;

/** 언어별 slug → 튜토리얼 표. 처음 부를 때 한 번만 만들고, 그때 경로와 requires를 검사한다. */
function getIndex(): Promise<Index> {
  indexPromise ??= (async () => {
    const all = await getCollection('docs');
    const idx: Index = { en: new Map(), ko: new Map() };
    for (const e of all) if (isTutorial(e.id)) idx[langOfId(e.id)].set(tutorialSlug(e.id), e);
    validate(idx);
    return idx;
  })();
  return indexPromise;
}

function validate(idx: Index) {
  const errors: string[] = [];
  const missing = (slug: string) => (['en', 'ko'] as Lang[]).filter((l) => !idx[l].has(slug));
  for (const p of paths) {
    if (p.steps.length === 0) errors.push(`learning path "${p.id}" has no steps`);
    if (new Set(p.steps).size !== p.steps.length) errors.push(`learning path "${p.id}" lists the same step twice`);
    for (const s of p.steps) {
      const m = missing(s);
      if (m.length) errors.push(`learning path "${p.id}" step "${s}" has no tutorial in: ${m.join(', ')} (src/data/paths.ts)`);
    }
  }
  for (const lang of ['en', 'ko'] as Lang[]) {
    for (const [slug, e] of idx[lang]) {
      for (const r of e.data.requires) {
        const m = missing(r);
        if (m.length) errors.push(`"requires" in ${e.id} points to "${r}", which has no tutorial in: ${m.join(', ')}`);
        if (r === slug) errors.push(`"requires" in ${e.id} lists the page itself`);
      }
      const other = idx[lang === 'en' ? 'ko' : 'en'].get(slug);
      if (lang === 'en' && other && other.data.requires.join('|') !== e.data.requires.join('|')) {
        errors.push(`"requires" differs between ${e.id} [${e.data.requires.join(', ')}] and ${other.id} [${other.data.requires.join(', ')}]`);
      }
    }
  }
  if (errors.length) throw new Error(`Learning path / requires check failed:\n  - ${errors.join('\n  - ')}`);
}

export interface PathStep {
  slug: string;
  title: string;
  level?: Tutorial['data']['level'];
  duration?: string;
  minutes?: number;
}

/** "15 min", "15분", "1 hour", "1시간 30분", "1.5 h" → 분. 읽을 수 없으면 undefined. */
export function parseMinutes(s?: string): number | undefined {
  if (!s) return undefined;
  const h = s.match(/(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|h|시간)(?![a-z])/i);
  const m = s.match(/(\d+)\s*(?:minutes?|mins?|m|분)(?![a-z])/i);
  if (!h && !m) return undefined;
  return Math.round((h ? parseFloat(h[1]) * 60 : 0) + (m ? parseInt(m[1], 10) : 0));
}

/** 분 → "2 h 45 min" / "2시간 45분" (5분 단위로 반올림) */
export function formatMinutes(total: number, lang: Lang): string {
  const r = Math.max(5, Math.round(total / 5) * 5);
  const h = Math.floor(r / 60), m = r % 60;
  if (lang === 'ko') return [h ? `${h}시간` : '', m ? `${m}분` : ''].filter(Boolean).join(' ');
  return [h ? `${h} h` : '', m ? `${m} min` : ''].filter(Boolean).join(' ');
}

export async function getPath(id: PathId, lang: Lang) {
  const idx = await getIndex();
  const def = paths.find((p) => p.id === id);
  if (!def) throw new Error(`Unknown learning path "${id}". Known: ${paths.map((p) => p.id).join(', ')}`);
  const steps: PathStep[] = def.steps.map((slug) => {
    const e = idx[lang].get(slug)!;
    return { slug, title: e.data.title, level: e.data.level, duration: e.data.duration, minutes: parseMinutes(e.data.duration) };
  });
  const minutes = steps.reduce((a, s) => a + (s.minutes ?? 0), 0);
  const unknown = steps.filter((s) => s.minutes === undefined).length;
  return { def, steps, minutes, unknown };
}

/** 이 튜토리얼이 들어 있는 학습 경로와 몇 번째 단계인지 */
export async function getPathsFor(slug: string): Promise<{ def: LearningPathDef; index: number }[]> {
  await getIndex();
  return paths.flatMap((def) => {
    const index = def.steps.indexOf(slug);
    return index >= 0 ? [{ def, index }] : [];
  });
}

/** requires slug → 현재 언어의 제목 */
export async function getRequired(slugs: string[], lang: Lang): Promise<{ slug: string; title: string }[]> {
  const idx = await getIndex();
  return slugs.map((slug) => ({ slug, title: idx[lang].get(slug)!.data.title }));
}

/** 빌드 검사만 하고 싶을 때 */
export async function validatePaths(): Promise<void> {
  await getIndex();
}
