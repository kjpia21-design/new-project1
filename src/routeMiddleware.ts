import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { isTutorial } from './lib/tutorials';

type HeadEntry = { tag: string; attrs?: Record<string, string | boolean | undefined>; content?: string };

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** 검색 결과에 보이는 제목 길이 기준(접미사 " | 사이트 이름" 포함). 넘으면 seoTitle만 쓴다. */
const MAX_TITLE = 60;

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const { head, lang, entry, siteTitle } = route;
  const isEn = lang.startsWith('en');
  const findMeta = (key: 'property' | 'name', value: string) =>
    (head as HeadEntry[]).findIndex((h) => h.tag === 'meta' && h.attrs?.[key] === value);
  const setMeta = (key: 'property' | 'name', value: string, content: string) => {
    const i = findMeta(key, value);
    if (i >= 0) head[i] = { ...head[i], attrs: { ...head[i].attrs, content } };
    else head.push({ tag: 'meta', attrs: { [key]: value, content } });
  };

  // 1) og:locale: Starlight는 'ko'/'en'처럼 언어 코드만 내보낸다. Open Graph 형식(ko_KR/en_US)으로 바꾸고 대체 언어를 덧붙인다.
  const idx = findMeta('property', 'og:locale');
  const tags = [
    { tag: 'meta' as const, attrs: { property: 'og:locale', content: isEn ? 'en_US' : 'ko_KR' } },
    { tag: 'meta' as const, attrs: { property: 'og:locale:alternate', content: isEn ? 'ko_KR' : 'en_US' } },
  ];
  if (idx >= 0) head.splice(idx, 1, ...tags);
  else head.push(...tags);

  // 2) 검색 결과용 짧은 제목·설명(frontmatter seoTitle/seoDescription). 화면의 H1은 바꾸지 않는다.
  const { seoTitle, seoDescription, lastVerified } = entry.data;
  if (seoTitle) {
    const full = `${seoTitle} | ${siteTitle}`;
    const titleIdx = (head as HeadEntry[]).findIndex((h) => h.tag === 'title');
    const content = escapeHtml(full.length <= MAX_TITLE ? full : seoTitle);
    if (titleIdx >= 0) head[titleIdx] = { ...head[titleIdx], content };
    setMeta('property', 'og:title', seoTitle);
  }
  if (seoDescription) {
    setMeta('name', 'description', seoDescription);
    setMeta('property', 'og:description', seoDescription);
  }

  // 3) og:type: 홈(/, /ko/)은 website, 나머지는 Starlight 기본값 article 유지.
  const path = context.url.pathname;
  if (path === '/' || path === '/ko/' || path === '/ko') setMeta('property', 'og:type', 'website');

  // 4) 튜토리얼은 마지막 확인일을 article:modified_time으로 알린다.
  if (lastVerified && isTutorial(entry.id)) {
    head.push({ tag: 'meta', attrs: { property: 'article:modified_time', content: lastVerified.toISOString() } });
  }
});
