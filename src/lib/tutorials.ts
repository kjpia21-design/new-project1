import { getCollection, type CollectionEntry } from 'astro:content';
import { t, formatDateLang, langPrefix, langOfId, type Lang } from './i18n';

export type Level = 'beginner' | 'practical' | 'advanced';
export type Category = 'claude' | 'chat' | 'coding' | 'media' | 'automation' | 'agents' | 'dev' | 'basics';

/** 한국어 라벨(기본). 영어는 `getLevelLabel`/`getCategoryLabel` 또는 `levelLabelsFor(lang)` 사용. */
export const levelLabels: Record<Level, string> = {
  beginner: '입문',
  practical: '실무',
  advanced: '고급',
};

export const categoryLabels: Record<Category, string> = {
  claude: 'Claude 완전 정복',
  chat: '대화형 AI 기본기',
  coding: '코딩·에이전트',
  media: '이미지·영상·음성',
  automation: '업무 자동화·생산성',
  agents: '화제의 AI 에이전트',
  dev: '개발자 심화',
  basics: 'AI 첫걸음',
};

export const getLevelLabel = (level: Level, lang: Lang = 'ko') => t(lang, `level.${level}`);
export const getCategoryLabel = (cat: Category, lang: Lang = 'ko') => t(lang, `cat.${cat}`);

export const categoryOrder: Category[] = ['basics', 'claude', 'agents', 'dev', 'chat', 'coding', 'media', 'automation'];

/** 사이트 base 경로(`/`, 도메인 연결 후)를 붙인 내부 링크를 만든다. lang을 주면 한국어는 `/ko` 접두사를 붙인다. */
export function url(path: string, lang: Lang = 'en'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${langPrefix(lang)}${clean}`;
}

/** 문서 id로 URL을 만든다. 한국어 문서 id(`ko/...`)는 그대로 `/ko/...`가 된다. */
export function entryUrl(id: string): string {
  return url(`/${id.replace(/\/index$/, '').replace(/^index$/, '')}/`.replace(/\/\/$/, '/'));
}

export type Tutorial = CollectionEntry<'docs'>;

/** 튜토리얼 = 분야 폴더 안의 index가 아닌 페이지 (한국어는 `ko/` 접두사 허용) */
export function isTutorial(id: string): boolean {
  return /^(ko\/)?(basics|claude|agents|dev|chat|coding|media|automation)\/(?!index$)/.test(id);
}

export async function getTutorials(
  opts: { level?: Level; category?: Category; lang?: Lang } = {},
): Promise<Tutorial[]> {
  const lang = opts.lang ?? 'en';
  const all = await getCollection('docs');
  return all
    .filter((e) => langOfId(e.id) === lang)
    .filter((e) => isTutorial(e.id))
    .filter((e) => !opts.level || e.data.level === opts.level)
    .filter((e) => !opts.category || e.data.category === opts.category)
    .sort((a, b) => a.id.localeCompare(b.id));
}

export async function getRecentlyVerified(limit = 5, lang: Lang = 'ko'): Promise<Tutorial[]> {
  const list = await getTutorials({ lang });
  return list
    .filter((e) => e.data.lastVerified)
    .sort((a, b) => b.data.lastVerified!.getTime() - a.data.lastVerified!.getTime())
    .slice(0, limit);
}

export function formatDate(d?: Date, lang: Lang = 'ko'): string {
  return formatDateLang(d, lang);
}
