# 영문 사이트(/en/) 구조와 규칙

## 구조
- 한국어는 루트(`/`), 영어는 `/en/` 아래. `astro.config.mjs`의 `locales`: `root`(ko), `en`.
- 영문 콘텐츠는 `src/content/docs/en/<한국어와 같은 경로>.mdx`. 파일명·폴더는 한국어와 동일.
- 영문 페이지가 없으면 Starlight 기본 폴백(한국어 내용 + 안내 문구)이 `/en/...`에 자동 생성된다.
- 사이드바 라벨은 `astro.config.mjs`의 각 항목 `translations: { en: '...' }`. `autogenerate`는 언어별 폴더를 자동으로 쓴다.
- 사이트 제목은 `title: { ko, en }`. hreflang(ko/en/x-default) 링크는 Starlight가 자동 출력한다. `og:locale`은 `Head.astro`가 언어별로 출력한다.

## 코드
- `src/lib/i18n.ts`: `getLang(Astro)`(경로가 `/en`·`/en/...`이면 `'en'`), `t(lang, key)` 문구 사전, `formatDateLang`(ko: 2026년 10월 31일 / en: Oct 31, 2026).
- `src/lib/tutorials.ts`: `url(path, lang)`, `getTutorials({ lang })`, `getRecentlyVerified(limit, lang)`, `getLevelLabel`, `getCategoryLabel`. `isTutorial`은 `en/` 접두사를 처리한다. `entryUrl(id)`는 `en/...` id를 그대로 `/en/...`로 만든다.
- 컴포넌트는 모두 `getLang(Astro)`로 현재 언어를 정해 문구를 바꾼다. 새 UI 문구는 `i18n.ts` 사전에 ko/en을 함께 추가한다. 다이어그램(`components/diagrams/*`)은 파일 안의 `en` 표에 영문을 추가한다.
- 클라이언트 스크립트(Checklist, PromptBox, TutorialGrid)는 서버가 data 속성으로 넘긴 문구를 쓴다.

## 번역 추가 방법
1. `src/content/docs/en/` 아래에 같은 경로로 파일을 만든다.
2. frontmatter의 `title`, `description`, `sidebar.label`, `prerequisites`, `duration`을 번역한다. 나머지(`level`, `category`, `tools`, `status`, `lastVerified`, `sources`)는 그대로.
3. 컴포넌트 import 경로는 한 단계 깊게(`../../../components/...`). 내부 링크는 `/en/` 접두사.
4. `npx astro build --outDir /tmp/build-x`로 링크·import 오류 확인.

## 첫 방문 언어 이동 (Head.astro의 인라인 스크립트)
- 홈 경로가 정확히 `/`일 때만 실행. 깊은 페이지, `/en/`은 절대 이동하지 않는다.
- UA에 bot|crawl|spider|slurp|bingpreview|facebookexternalhit|kakaotalk-scrap|yeti가 있으면 실행하지 않는다.
- `localStorage['lang-pref']`가 `'en'`이면 `/en/`으로, `'ko'`이면 그대로 둔다.
- 값이 없으면 `navigator.languages`(없으면 `navigator.language`)에 `ko`로 시작하는 값이 하나도 없을 때만 `location.replace('/en/')`.
- 언어 선택기(`starlight-lang-select`의 select)를 바꾸면 선택한 언어(`ko`/`en`)를 `lang-pref`에 저장한다. 이후 홈 방문에서 그 선택을 따른다.
- localStorage 접근은 모두 try/catch.
