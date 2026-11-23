// RSS 피드 공통 로직: src/pages/rss.xml.ts(영어), src/pages/ko/rss.xml.ts(한국어)가 쓴다.
// 본문 전체(content)는 넣지 않는다. 튜토리얼이 모두 컴포넌트를 쓰는 MDX라 엔드포인트에서 HTML로 렌더하기 어렵기 때문에 설명(description)만 쓴다.
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getTutorials, entryUrl, getCategoryLabel } from './tutorials';
import { t, type Lang } from './i18n';

/** 피드에 넣을 최신 글 수 */
const LIMIT = 50;

const FEED_DESC: Record<Lang, string> = {
  en: 'Newly added and re-verified tutorials on the latest AI tools, explained step by step in plain language.',
  ko: '최신 AI 도구를 쉽게 설명하는 단계별 튜토리얼 중 새로 올리거나 다시 확인한 글이에요.',
};

export async function tutorialFeed(context: APIContext, lang: Lang) {
  const site = context.site!;
  const items = (await getTutorials({ lang }))
    // 사이트와 같은 기준: 분야 폴더의 튜토리얼, Starlight draft 제외. 날짜가 없는 글은 넣지 않는다.
    .filter((e) => !e.data.draft && e.data.lastVerified)
    .sort((a, b) => b.data.lastVerified!.getTime() - a.data.lastVerified!.getTime() || a.id.localeCompare(b.id))
    .slice(0, LIMIT);
  return rss({
    title: t(lang, 'site.name'),
    description: FEED_DESC[lang],
    site: new URL(lang === 'ko' ? '/ko/' : '/', site).href,
    customData: `<language>${lang}</language>`,
    items: items.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      link: new URL(entryUrl(e.id), site).href,
      pubDate: e.data.lastVerified!,
      ...(e.data.category ? { categories: [getCategoryLabel(e.data.category, lang)] } : {}),
    })),
  });
}
