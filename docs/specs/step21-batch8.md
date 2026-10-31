# 작업 명세 — 21단계: 8차 튜토리얼 6편 (영어·한국어 동시)

작성: 기획 담당 · 구현: 코딩 에이전트 3명 (Q1~Q3, 각 2편 × 2개 언어)

언어 구조·공통 규칙: `docs/guides/english-site.md`, `docs/specs/step19-batch6-bilingual.md`("언어 구조"·"공통 규칙"), `docs/specs/step13-more-tutorials.md`("공통 규칙"). 날짜 `2026-11-01`. 편수 숫자는 쓰지 않는다(TutorialCount가 자동 표시). index·about·start 페이지는 수정하지 않는다. `sidebar.label` 번호는 해당 분야 기존 편 수 + 1.

| 담당 | 파일 (두 언어) | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- |
| Q1 | `chat/41-personalize-answers.mdx` | Make AI answer your way: custom instructions, styles and saved preferences in Claude, ChatGPT and Gemini / 내 방식대로 답하게: Claude·ChatGPT·Gemini 개인 맞춤 설정 | beginner | support.claude.com (styles, profile preferences), learn.chatgpt.com (personalize), support.google.com/gemini (saved info/instructions) |
| Q1 | `basics/15-follow-up-questions.mdx` | Get better answers with follow-up questions / 다시 묻기로 더 좋은 답 얻는 법 | beginner | docs.claude.com·platform.claude.com의 프롬프트 가이드, 각 서비스 공식 도움말 |
| Q2 | `dev/13-structured-outputs.mdx` | Get reliable JSON from Claude with structured outputs / 구조화 출력으로 Claude에게 정확한 JSON 받기 | advanced | platform.claude.com/docs (structured outputs, tool use strict) |
| Q2 | `coding/39-claude-code-subagents.mdx` | Create your own Claude Code subagents / 나만의 Claude Code 서브에이전트 만들기 | practical | code.claude.com/docs (subagents) |
| Q3 | `automation/45-apps-script-ai.mdx` | Automate Google Sheets with Apps Script and AI / Apps Script와 AI로 구글 시트 자동화 | practical | developers.google.com/apps-script, support.google.com/docs, (Claude API 호출 시) platform.claude.com/docs |
| Q3 | `claude/c22-desktop-app.mdx` | Get more out of the Claude desktop app / Claude 데스크톱 앱 제대로 쓰기 | practical | support.claude.com (desktop app, quick entry, shortcuts 등) |

## 편별 지침
- Q1 / chat/41: 각 서비스의 개인 맞춤 기능 위치·이름은 공식 문서에 있는 것만. Claude는 C9(메모리·개인 설정)와 겹치면 링크로 대신하고, 여기서는 세 서비스 비교·따라하기 중심. 개인정보 주의(basics/05, 12).
- Q1 / basics/15: 초보자용 후속 질문 패턴(더 짧게, 예시 들어, 표로, 근거 대기, 반대 의견 등). 공식 프롬프트 가이드에 근거한 부분과 사이트 권장 사항을 구분. PromptBox 6개 이상. basics/03·04, C4와 연결.
- Q2 / dev/13: 구조화 출력 사용법(파라미터·지원 모델·제한)은 공식 문서 그대로. 짧은 예제, 실행 여부 명시. dev/01·12와 연결.
- Q2 / coding/39: 서브에이전트 파일 위치·형식·도구 제한·호출 방법은 공식 문서 그대로. C14와 겹치면 링크, 여기서는 직접 만드는 따라하기 중심. 실행 여부 명시.
- Q3 / automation/45: Apps Script 기본(시트에서 확장 프로그램 열기), 시트의 Gemini 기능과 직접 API 호출 방식 구분. API 키는 스크립트 속성에 저장 등 보안. automation/23과 연결. 실행 여부 명시.
- Q3 / claude/c22: Claude 데스크톱 앱(macOS·Windows)의 공식 문서로 확인되는 기능만(빠른 입력, 단축키, 파일 첨부, 데스크톱 전용 기능 등). C3·C19(Cowork)·C11과 겹치면 링크. `docs/PLAN.md` Claude 표에 C22 한 줄 추가, `claude/index.mdx`(두 언어)의 소개 문장에 데스크톱 앱 언급이 필요하면 숫자 없이 추가.

## 공통
- 자기 파일·조사 노트(`docs/research/<분야>/`)만 수정(Q3는 PLAN.md·claude/index 포함). 빌드 `npx astro build --outDir /tmp/build-<담당>`. git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
