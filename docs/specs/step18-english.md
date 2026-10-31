# 작업 명세 — 18단계: 영문 사이트 (/en/) 전체 번역 + 브라우저 언어 기반 첫 방문 안내

작성: 기획 담당 · 구현: 인프라 에이전트 1명(E-INFRA) + 번역 에이전트 12명(T1~T12)

## 목표
- 한국어는 지금처럼 루트(`/`), 영어는 `/en/` 아래. Starlight i18n(`locales: root=ko, en`).
- 모든 페이지를 영어로 번역(약 105페이지).
- 첫 방문 시 **홈(`/`)에서만**, 브라우저 언어가 한국어가 아니면 `/en/`으로 이동. 사용자가 언어 선택기로 고른 언어는 기억해서 존중. 검색엔진 봇은 이동시키지 않음. 깊은 페이지는 절대 자동 이동하지 않음.

## E-INFRA (인프라) — 수정 가능: astro.config.mjs, src/components/**, src/lib/**, src/styles/**, src/content.config.ts, src/content/docs/404.mdx, src/content/docs/en/404.mdx(신규)
1. `astro.config.mjs`: `locales: { root: { label: '한국어', lang: 'ko' }, en: { label: 'English', lang: 'en' } }`. 사이드바 모든 그룹·항목 label에 `translations: { en: '...' }` 추가(autogenerate는 언어별 폴더를 자동으로 씀). 사이트 description도 언어별로 가능하면 처리.
2. `src/lib/i18n.ts` 신설: `getLang(Astro)`(경로가 `/en/`로 시작하면 'en', 아니면 'ko'), UI 문구 사전 `t(lang, key)`. 날짜 포맷(ko: 2026년 10월 31일 / en: Oct 31, 2026), 수준 라벨(입문/실무/고급 ↔ Beginner/Practical/Advanced), 분야 라벨 영문.
3. `src/lib/tutorials.ts`: 언어 인식. `isTutorial`은 `en/` 접두사도 처리, `getTutorials({ lang })`는 해당 언어 콘텐츠만, URL 헬퍼는 언어 접두사 반영. 분야 라벨 영문 추가.
4. 한국어가 하드코딩된 **모든 컴포넌트**(TutorialMeta, Summary, Checklist, PromptBox, FlowSteps, ScreenshotPlaceholder, Sources, Footer, PageTitle, HomeHero, HeroIllustration, HomeToc, CategoryCards, LevelCards, TutorialGrid, RecentUpdates, ClaudeBanner, AgentsBanner, NewsItem, Illustration의 aria 문구, diagrams/*)를 현재 언어에 맞게 표시. 다이어그램 안 한국어 텍스트도 영문 버전 제공(언어 감지로 분기).
5. HomeToc·CategoryCards 등 링크는 현재 언어 경로로. 영문 페이지가 아직 없는 경우에 대비해 Starlight 기본 폴백(한국어 표시 + 안내)이 동작하게 둔다.
6. 첫 방문 이동 스크립트(Head 오버라이드, 인라인, 아주 작게):
   - 현재 경로가 정확히 `/` 일 때만 실행.
   - `localStorage['lang-pref']`가 있으면 그것을 따름('en'이면 `/en/`으로, 'ko'면 그대로).
   - 없으면 `navigator.languages`(없으면 `navigator.language`)에 `ko`로 시작하는 값이 하나도 없을 때만 `location.replace('/en/')`.
   - UA에 bot|crawl|spider|slurp|bingpreview|facebookexternalhit|kakaotalk-scrap|Yeti 등이 있으면 실행 안 함.
   - localStorage 접근은 try/catch.
   - 언어 선택기(starlight-lang-select의 select) 변경 시 선택값('ko'/'en')을 `lang-pref`에 저장하는 작은 스크립트 추가.
7. `og:locale`을 언어별(ko_KR/en_US)로. hreflang alternate는 Starlight가 자동 출력하는지 확인하고, 없으면 추가.
8. 404: 한국어 404는 유지, `src/content/docs/en/404.mdx` 영문판 작성(같은 구성).
9. 검증: `npx astro build --outDir /tmp/build-infra` 통과(번역 에이전트가 동시에 `src/content/docs/en/`에 파일을 만들고 있으니, 그들의 파일 오류로 실패하면 보고만). Playwright로 `/`(ko 브라우저 → 머무름, en-US 브라우저 → /en/ 이동, lang-pref=ko 저장 시 머무름), `/en/`, 영문 튜토리얼 1편, 언어 선택기 전환을 확인. Chromium은 /opt/pw-browsers, `playwright install` 금지, pkill 금지(`npx astro preview stop`). 스크래치: /tmp/claude-0/-home-user-new-project1/899c231a-447f-5eba-b940-f751b36c7171/scratchpad/en-infra/
10. `docs/guides/english-site.md`에 구조·규칙 요약(번역 추가 방법, 이동 규칙).

## T1~T12 (번역) — 수정 가능: 자기 담당의 `src/content/docs/en/...` 파일만
**파일 대응**: `src/content/docs/<경로>.mdx` → `src/content/docs/en/<같은 경로>.mdx`. 파일명·폴더 그대로.

**번역 규칙**
- 자연스럽고 친근한 영어(미국식). 직역 금지, 의미와 정보는 빠짐없이. 표·목록·컴포넌트 구조 그대로.
- **frontmatter**: `title`, `description`, `sidebar.label`, `prerequisites`, `duration`(예: '20분' → '20 min')을 번역. `level`, `category`, `tools`, `status`, `lastVerified`, `sources`(URL과 제목)는 그대로 둔다(출처 제목이 한국어면 영어로 번역 가능). sidebar.label 번호 형식 유지(예: "C3. Getting started", "7. Using AI search well").
- **import 경로**: 한 단계 깊어지므로 `../../components/` → `../../../components/`, `../components/` → `../../components/`처럼 깊이를 맞춘다. 빌드로 반드시 확인.
- **내부 링크**: 사이트 내부 링크는 모두 `/en/` 접두사(`/claude/c01-overview/` → `/en/claude/c01-overview/`, `/` → `/en/`). 앵커(#…)가 한국어 제목에서 생성된 경우, 영어 제목 기준 앵커로 바꾸거나 앵커를 뺀다(빌드 링크 검사가 잡아줌).
- **외부 링크**: 그대로. 단, 한국어 공식 문서 링크(예: `?hl=ko`, `/ko/`)는 영어판이 있으면 영어판으로 바꿔도 좋다(확실할 때만).
- **한국 특화 내용**(원화 가격, 한국 기관 112/1332, 네이버·카카오 등): 지우지 말고 번역하되, 필요한 곳에 "(for users in Korea)" 같은 맥락을 짧게 붙인다. 원화 가격은 그대로 두고 통화 표기(KRW)를 명확히.
- PromptBox 안의 프롬프트는 **영어 사용자용 영어 프롬프트**로 번역(대괄호 자리표시 유지).
- "2026-10-14 기준" → "as of 2026-10-14". "확인하지 못했어요" → "We couldn't confirm this in official documentation."
- 컴포넌트 props의 한국어 문자열(Summary title, Checklist items, FlowSteps steps, ScreenshotPlaceholder caption/officialLabel, Aside title 등)도 번역.
- 사실을 추가하거나 바꾸지 않는다(번역만). 원문 오류가 보이면 보고만.

**검증**: 각자 `npx astro build --outDir /tmp/build-<담당>` (다른 에이전트·인프라 작업과 공유 캐시가 충돌하면 잠시 후 재시도). 자기 파일에서 나온 링크·import 오류는 반드시 고친다. git 커밋·푸시 금지.

**보고**: 번역한 파일 수, 남은 문제(빌드 오류가 다른 사람 파일 탓인지 포함), 원문에서 발견한 오류.

| 담당 | 범위 (src/content/docs/ 기준) |
| --- | --- |
| T1 | index.mdx, about.mdx, tutorials.mdx, updates.mdx, claude-news.mdx, start/*, roles/* (404·components-preview 제외) |
| T2 | basics/* |
| T3 | claude/index.mdx, c01~c07 |
| T4 | claude/c08~c14 |
| T5 | claude/c15~c19 (c20·c21이 생겨 있으면 함께) |
| T6 | agents/* |
| T7 | dev/index.mdx, dev/01~05 |
| T8 | dev/06~10 (dev/11이 생겨 있으면 함께) |
| T9 | chat/* |
| T10 | coding/* |
| T11 | media/* |
| T12 | automation/* |
