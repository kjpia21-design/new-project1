# 작업 명세 — 20단계: 7차 (튜토리얼 4편 + 직무 가이드 2편 + 편수 자동화), 영어·한국어 동시

작성: 기획 담당 · 구현: 코딩 에이전트 4명 (P1~P4)

언어 구조·규칙은 `docs/guides/english-site.md`와 `docs/specs/step19-batch6-bilingual.md`의 "언어 구조"·"공통 규칙"을 그대로 따른다(영어 `src/content/docs/…`, 한국어 `src/content/docs/ko/…`, 두 언어 동시 작성, 공식 문서만, 한 페이지씩 curl, 추측 금지). 날짜 `2026-11-01`. **index·about·start 페이지의 편수 숫자는 P4만 손댄다**(다른 에이전트는 수정 금지).

| 담당 | 파일 (두 언어) | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- |
| P1 | `basics/14-ai-for-families.mdx` | AI for families: age rules, teen accounts and homework help / 아이와 함께 AI 쓰기: 나이 제한·청소년 계정·숙제 도움 | beginner | 각 서비스 공식 이용약관·연령 정책·가족/청소년 도움말 (Anthropic, learn.chatgpt.com, support.google.com/gemini) |
| P1 | `media/34-ai-video-generation.mdx` | Make short AI videos with Google's video tools / 구글 영상 생성 도구로 짧은 AI 영상 만들기 | practical | support.google.com/gemini, Google Flow/Veo 공식 도움말 (확인되는 것만) |
| P2 | `coding/38-data-analysis-claude-code.mdx` | Analyze CSV and Excel data with Claude Code / Claude Code로 CSV·엑셀 데이터 분석하고 보고서 만들기 | practical | code.claude.com/docs |
| P2 | `automation/44-power-automate-copilot.mdx` | Automate Microsoft 365 work with Power Automate and Copilot / Power Automate와 Copilot으로 M365 업무 자동화 | practical | learn.microsoft.com (Power Automate, Copilot in Power Automate) |

## 편별 지침
- P1 / basics/14: 각 서비스 최소 연령(공식 약관에 적힌 그대로), 청소년 계정·보호자 기능이 있으면 공식 문서 기준으로, 숙제에 쓸 때의 원칙(답 베끼기 대신 설명 요청), 개인정보. basics/05·12와 연결. 확인 안 된 서비스 기능은 넣지 않는다.
- P1 / media/34: Google의 영상 생성(Gemini 앱의 영상 생성, Flow 등) 중 공식 도움말로 확인되는 것만. 제공 플랜·지역·워터마크(SynthID)·길이 제한. media/13·33과 겹치면 링크. 확인 안 되면 제목을 일반화.
- P2 / coding/38: coding/35(파일 자동화)·chat/03(데이터 분석)과 겹치지 않게 Claude Code에서 분석 스크립트 작성→실행→차트·요약 보고서 생성 흐름. 백업·원본 보존 주의. 실제 실행했으면 그 결과, 안 했으면 그렇다고 명시.
- P2 / automation/44: Power Automate의 Copilot(자연어로 흐름 만들기) 등 learn.microsoft.com에서 확인된 기능·라이선스만. automation/24(M365 Copilot)와 연결.

## P3 — 직무별 가이드 2편 추가 (두 언어)
- `roles/researcher.mdx` (Researchers & grad students / 연구자·대학원생), `roles/sales-support.mdx` (Sales & customer support / 영업·고객 지원).
- 기존 직무 페이지(예: roles/office)와 같은 6개 구성(이런 분께 / TOP 5 + 프롬프트 / 하루 시나리오 FlowSteps / 추천 학습 경로 / 주의할 점 / 다음 단계). **새 사실은 쓰지 않고** 사이트의 기존 튜토리얼로 연결하는 길잡이.
- `roles/index.mdx`(두 언어) 카드에 2개 추가.
- `astro.config.mjs`의 사이드바 "AI by Job Role" 그룹에 2개 항목 추가(영어 label + `translations: { ko }`, 기존 항목 형식 그대로). 이 파일은 P3만 수정.

## P4 — 편수 자동 표시
- `src/components/TutorialCount.astro` 신설: props `section?`(basics|claude|agents|dev|chat|coding|media|automation, 없으면 전체). 현재 언어(`getLang`)의 `status: published` 튜토리얼 수를 숫자로만 출력. `src/lib/tutorials.ts`의 `getTutorials({ lang, category })` 재사용.
- 다음 페이지(두 언어)의 하드코딩 편수를 이 컴포넌트로 바꾼다: `about.mdx`, 각 분야 `index.mdx`(basics, claude, agents, dev, chat, coding, media, automation), `start/beginner.mdx`, `start/advanced.mdx`, `start/practical.mdx`(있으면). frontmatter `description`의 숫자는 컴포넌트를 쓸 수 없으니 숫자를 빼고 문장을 다듬는다(예: "입문 튜토리얼 모음").
- 예: `**AI First Steps** (<TutorialCount section="basics" /> tutorials)`, `튜토리얼은 모두 <TutorialCount />편이에요`.
- 결과 숫자가 실제 개수와 같은지 빌드 결과 HTML로 확인.

## 공통
- 자기 담당 파일만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>` (공유 캐시 충돌 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든/고친 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
