# 다국어 사이트 구조와 규칙 (영어 기본, 한국어 /ko/)

## 구조
- 2026-10-31부터 **영어가 루트(`/`)**, **한국어는 `/ko/`** 아래에 있다. `astro.config.mjs`의 `locales`: `root`(en), `ko`.
- 영어 콘텐츠: `src/content/docs/<경로>.mdx`. 한국어 콘텐츠: `src/content/docs/ko/<같은 경로>.mdx`. 파일명·폴더는 두 언어가 같다.
- 한 언어에만 있는 페이지는 Starlight 기본 폴백(기본 언어 내용 + 안내 문구)이 다른 언어 경로에 자동 생성된다. 그래도 항상 두 언어를 함께 만든다.
- 예전 영문 주소(`/en/...`)는 `astro.config.mjs`의 `legacyEnRedirects()`가 만든 리다이렉트 페이지로 같은 영문 페이지(`/...`)에 연결된다. 예전 한국어 주소(`/claude/...` 등)는 이제 영문 페이지다(헤더의 언어 전환으로 한국어판 이동).
- 사이트 제목은 `title: { en, ko }`. hreflang(en/ko/x-default)은 Starlight가 자동 출력하고, `og:locale`은 `src/routeMiddleware.ts`가 en_US/ko_KR로 바꾼다.
- 사이드바 라벨은 영어가 기본(`label`), 한국어는 `translations: { ko }`.
- 편수는 TutorialCount 컴포넌트로 자동 표시 — 숫자를 직접 쓰지 않는다 (`<TutorialCount section="basics" />`, 섹션 생략 시 전체). frontmatter description에도 편수 숫자를 쓰지 않는다.

## 코드
- `src/lib/i18n.ts`: `getLang(Astro)`(경로가 `/ko`·`/ko/...`이면 `'ko'`, 나머지 `'en'`), `t(lang, key)` 문구 사전, 날짜 포맷.
- `src/lib/tutorials.ts`: `url(path, lang)`(한국어면 `/ko` 접두사), `getTutorials({ lang })`, `getRecentlyVerified(limit, lang)`. `isTutorial`은 `ko/` 접두사를 처리한다. `entryUrl(id)`는 `ko/...` id를 그대로 `/ko/...`로 만든다.
- 컴포넌트는 모두 `getLang(Astro)`로 언어를 정한다. 새 UI 문구는 `i18n.ts` 사전에 ko/en을 함께 추가한다.
- `src/components/Header.astro`: 좁은 화면 전용 언어 전환 버튼(같은 페이지의 다른 언어판으로 이동, 선택 기억).

## 새 페이지·수정 규칙
1. 영어 파일은 `src/content/docs/<경로>.mdx`, 한국어 파일은 `src/content/docs/ko/<경로>.mdx`로 둘 다 만든다.
2. 컴포넌트 import 깊이: 영어는 `../../components/`(폴더 1단계), 한국어는 한 단계 더 깊게.
3. 내부 링크: 영어는 `/claude/...`, 한국어는 `/ko/claude/...`.
4. 한쪽을 고치면 반드시 다른 쪽도 같은 커밋에서 고친다.

## 첫 방문 언어 안내 (`Head.astro` 인라인 스크립트)
- 홈 경로가 정확히 `/`일 때만 실행. 깊은 페이지는 절대 이동하지 않는다.
- 검색엔진·미리보기 봇(UA에 bot|crawl|spider|slurp|bingpreview|facebookexternalhit|kakaotalk-scrap|yeti)은 이동하지 않는다.
- `localStorage['lang-pref']`가 `'ko'`면 `/ko/`로, `'en'`이면 그대로.
- 값이 없으면 `navigator.languages`에 `ko`로 시작하는 값이 있을 때만 `/ko/`로 이동.
- 언어 선택기(넓은 화면)나 헤더 언어 버튼(좁은 화면)으로 고른 언어는 `lang-pref`에 저장된다.
