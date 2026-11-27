# 작업 명세 — 36단계: 레이아웃·구조 1단계 정리 (P1 quick wins)

작성: 기획 담당 · 구현: 코딩 에이전트 2명 (L1, L2)

배경: 사이트 주인이 "눈에 잘 들어오지 않는다"고 했다. 구조 검토 결과 진단은 다음과 같다.
- 홈이 소개 페이지처럼 길고, 시작점이 너무 많다(배너 2개, 링크 칩 약 180개).
- 사이드바가 208개 링크로 길고, 현재 글이 화면 밖에 있다.
- 튜토리얼의 단계가 2~4화면 아래에서 시작한다.
- 메뉴 이름이 겹친다.

이번 단계는 **작은 수정으로 큰 효과**만 낸다. 대시보드 홈·상단 메뉴·섹션 허브는 다음 단계(P2)라 하지 않는다.

공통 규칙:
- URL(폴더·슬러그)은 바꾸지 않는다. 화면 이름만 바꾼다.
- 영어·한국어 두 언어를 똑같이 반영한다. 문구는 `src/lib/i18n.ts`의 `t()`와 사이드바 `translations`를 쓴다.
- `src/components/Head.astro`의 스크립트·메타(첫 방문 리디렉트, 네이버 메타, Cloudflare 비컨, og, JSON-LD, RSS, apple-touch-icon)는 건드리지 않는다. 단, `SECTION_NAMES_KO/EN` 표시 이름은 새 이름으로 맞춰도 된다.
- `claude-news.mdx`·`weekly.mdx` 본문은 루틴이 관리하므로 건드리지 않는다. 사이드바 라벨만 바꾼다.
- 빌드는 `npx astro build --outDir /tmp/build-<담당>`으로 한다. 공유 `.astro` 캐시 충돌이나 다른 에이전트의 작업 중 파일 때문에 오류가 나면 잠시 후 재시도한다.
- git 커밋·푸시는 금지한다.

## L1 — 탐색 구조·홈·시작 페이지

1. **사이드바 재구성** (`astro.config.mjs`). 순서와 이름은 아래와 같다.

   | 순서 | 그룹 (영어 / 한국어) | 펼침 | 들어가는 항목 |
   | --- | --- | --- | --- |
   | 1 | What's new / 새 소식 | 펼침 | This week in AI / 이번 주 AI 변경점 (`weekly`), Claude news / Claude 소식 (`claude-news`), Site changelog / 사이트 수정 기록 (`updates`) |
   | 2 | Learn / 배우기 | 접힘 | Learning path: Beginner / 학습 경로: 입문 (`start/beginner`), Learning path: Practitioner / 학습 경로: 실무, Learning path: Advanced / 학습 경로: 고급, All tutorials / 전체 튜토리얼 (`tutorials`) |
   | 3~10 | 주제 8개 (모두 최상위, 접힘) | 접힘 | 아래 주제 표 참고 |
   | 11 | AI by Job Role / 직무별 AI 활용 | 접힘 | 지금과 같다 |
   | 12 | Toolbox / 도구함 | 접힘 | Ready-to-use prompts / 바로 쓰는 프롬프트 모음, AI glossary / AI 용어 사전, About / 소개 |

   - 주제 8개는 "분야별 튜토리얼" 래퍼 없이 최상위에 둔다. 순서와 이름은 다음과 같다.
     1. AI First Steps / AI 첫걸음
     2. Mastering Claude / Claude 완전 정복 (Claude news 항목은 빼고 autogenerate만)
     3. Chat AI Basics / 대화형 AI 기본기
     4. Personal AI Agents / 개인 AI 에이전트 (`agents`, 옛 "화제의 AI 에이전트")
     5. Image, Video & Voice / 이미지·영상·음성
     6. Automation & Productivity / 업무 자동화·생산성
     7. Coding Tools / 코딩 도구 (`coding`, 옛 "코딩·에이전트")
     8. Advanced for Developers / 개발자 심화
   - 시작하기 그룹 안에 있던 중복 "직무별로 찾기" 항목은 없앤다.
2. **이름 일관성.**
   - 옛 이름("화제의 AI 에이전트", "Trending AI Agents", "코딩·에이전트", "Coding & Agents", "최근 업데이트", "Recent updates", "분야별 튜토리얼" 등)을 `src/` 전체에서 grep한다. 화면에 보이는 곳은 모두 새 이름으로 바꾼다. 대상은 다음과 같다.
     - `CategoryCards`
     - `i18n.ts`
     - 섹션 index 페이지의 title
     - `Head.astro`의 SECTION_NAMES
     - `updates.mdx`의 title (두 언어; 본문 기록은 그대로)
   - 튜토리얼 본문 속 옛 이름 언급은 링크 문구에 한해서만 바꾼다. 과도하게 바꾸지 않는다.
   - og 이미지 생성 스크립트(`scripts/og-images.mjs`)에도 이름이 있으면 맞춘다. package.json 스크립트로 이미지를 다시 만들 수 있으면 다시 만들고, 안 되면 보고만 한다.
3. **홈 정리** (`src/content/docs/index.mdx`, `ko/index.mdx`).
   - `HomeToc`(전체 목차 칩 벽)를 없애고, 그 자리에 "전체 튜토리얼 목록 보기 →" 링크 한 줄을 둔다.
   - `ClaudeBanner`·`AgentsBanner`를 홈에서 뺀다. 컴포넌트 파일은 남겨도 된다.
   - `CategoryCards` 순서를 위 주제 순서에 맞춘다. Claude 카드는 은은한 강조색으로 구분한다.
   - 홈 섹션 사이 여백이 과하면(약 100px) 44~56px로 줄인다. 큰 히어로 제목은 너무 크면 줄여도 된다. 이어 보기 카드(HomeHero)는 유지한다.
4. **현재 글 위치 보이기.** 페이지 로드 때 사이드바의 `a[aria-current="page"]`가 사이드바 스크롤 영역에서 보이지 않으면 `scrollIntoView({ block: 'center' })`로 보이게 한다. 이미 보이면 아무것도 하지 않는다. `Footer.astro`의 기존 인라인 스크립트에 작은 함수로 추가한다. 모바일 메뉴를 열 때도 동작하면 좋다.
5. **시작 페이지 중복 제거** (`start/beginner|practical|advanced.mdx`, 두 언어).
   - 같은 글 목록이 여러 번 나오는 부분을 정리한다. LearningPath 카드는 유지한다. 단계별 목록이 경로와 중복되면 하나만 남긴다.
   - 제목은 사이드바와 맞춰 "학습 경로: 입문" 등으로 맞춰도 된다. 검색 노출을 위해 seoTitle은 유지하거나 알맞게 둔다.
   - 헤딩 안에 TutorialCount 컴포넌트는 넣지 않는다.
6. **수정 범위.** L1이 고치는 파일은 `astro.config.mjs`, 위 컴포넌트·페이지, `i18n.ts`, `Footer.astro`, `Head.astro`의 이름 맵이다. `TutorialMeta.astro`, `Summary.astro`, `src/styles/custom.css`는 L2 담당이라 건드리지 않는다. 스타일이 필요하면 컴포넌트 안의 `<style>`을 쓴다.

## L2 — 튜토리얼 윗부분 압축

목표: PC(1440×900)와 모바일(390×844) 첫 화면에서 "단계별 따라 하기"의 시작이 보이거나 거의 보이게 한다.

1. **`TutorialMeta.astro` 메타를 한 줄로.**
   - 레벨 배지 · 소요 시간 · 핵심 요구 플랜(있을 때) · 확인일을 한 줄에 둔다.
   - 그 아래 `<details>` 한 줄로 "준비물 N · 사용 도구 N · 먼저 볼 글 N편 ▾"를 둔다. 펼치면 지금처럼 준비물, 도구, 먼저 볼 글(requires 링크), 학습 경로 소속이 나온다.
   - 오른쪽 끝에 "완료로 표시" 버튼을 둔다. 기존 진행 상태 스크립트(Footer.astro, `atc:progress:v1`, `.atc-done-btn` 또는 `[data-slug]` 바인딩)를 재사용한다. 새 저장 키는 만들지 않는다. Footer 스크립트를 반드시 고쳐야 하면 L1과 겹치지 않게 최소한으로, 별도 함수로 추가한다.
2. **`Summary.astro`.**
   - 강한 코랄 배경을 중립 배경(surface)으로 바꾸고, 왼쪽에 4px 코랄 선을 둔다.
   - 항목 4개째부터는 접고 "더 보기(N개)" 버튼으로 펼친다. JS가 꺼져 있으면 전부 보인다.
   - 제목은 한국어 "3줄 요약", 영어 "In short"(또는 지금 문구 유지)로 한다.
3. **"이 글을 마치면"·"먼저 알아둘 개념"** 같은 큰 블록이 컴포넌트로 되어 있어 단계 앞을 차지한다면 `<details>`로 접는다. 본문 mdx 178편을 일괄 수정하지는 않는다. 컴포넌트·CSS 수준에서만 처리한다.
4. **CSS** (`src/styles/custom.css`). 끝에 `/* step36 tutorial top */` 블록으로 추가한다. 모바일 H1이 3줄이 되지 않게 24~25px, line-height 1.25로 한다.
5. **검증.** Playwright(설치돼 있음, `require('playwright')`, 설치 명령 금지)로 대표 글 2개를 찍는다. 대상은 `/ko/claude/c30-claude-meetings/`와 `/ko/basics/` 아래 아무 글이다. 각각 1440×900과 390×844 첫 화면을 `docs/` 밖 임시 폴더에 저장하고, 단계 시작 위치(y 좌표)를 수정 전과 후로 보고한다. 다크 모드도 한 장 확인한다.

## 보고
- 바꾼 파일 목록
- 남은 문제
- 빌드 결과(페이지 수)
- L2는 첫 화면 y 좌표 비교
