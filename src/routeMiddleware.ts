import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// Starlight는 og:locale을 'ko'/'en'처럼 언어 코드만 내보낸다. Open Graph 형식(ko_KR/en_US)으로 바꾸고 대체 언어를 덧붙인다.
export const onRequest = defineRouteMiddleware((context) => {
  const { head, lang } = context.locals.starlightRoute;
  const isEn = lang.startsWith('en');
  const idx = head.findIndex((h) => h.tag === 'meta' && h.attrs?.property === 'og:locale');
  const tags = [
    { tag: 'meta' as const, attrs: { property: 'og:locale', content: isEn ? 'en_US' : 'ko_KR' } },
    { tag: 'meta' as const, attrs: { property: 'og:locale:alternate', content: isEn ? 'ko_KR' : 'en_US' } },
  ];
  if (idx >= 0) head.splice(idx, 1, ...tags);
  else head.push(...tags);
});
