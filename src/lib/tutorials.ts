import { getCollection, type CollectionEntry } from 'astro:content';

export type Level = 'beginner' | 'practical' | 'advanced';
export type Category = 'claude' | 'chat' | 'coding' | 'media' | 'automation' | 'agents';

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
};

export const categoryOrder: Category[] = ['claude', 'agents', 'chat', 'coding', 'media', 'automation'];

/** 사이트 base 경로(`/new-project1`)를 붙인 내부 링크를 만든다. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function entryUrl(id: string): string {
  return url(`/${id.replace(/\/index$/, '').replace(/^index$/, '')}/`.replace(/\/\/$/, '/'));
}

export type Tutorial = CollectionEntry<'docs'>;

/** 튜토리얼 = 분야 폴더 안의 index가 아닌 페이지 */
export function isTutorial(id: string): boolean {
  return /^(claude|agents|chat|coding|media|automation)\/(?!index$)/.test(id);
}

export async function getTutorials(
  opts: { level?: Level; category?: Category } = {},
): Promise<Tutorial[]> {
  const all = await getCollection('docs');
  return all
    .filter((e) => isTutorial(e.id))
    .filter((e) => !opts.level || e.data.level === opts.level)
    .filter((e) => !opts.category || e.data.category === opts.category)
    .sort((a, b) => a.id.localeCompare(b.id));
}

export async function getRecentlyVerified(limit = 5): Promise<Tutorial[]> {
  const list = await getTutorials();
  return list
    .filter((e) => e.data.lastVerified)
    .sort((a, b) => b.data.lastVerified!.getTime() - a.data.lastVerified!.getTime())
    .slice(0, limit);
}

export function formatDate(d?: Date): string {
  if (!d) return '';
  return `${d.getUTCFullYear()}년 ${d.getUTCMonth() + 1}월 ${d.getUTCDate()}일`;
}
