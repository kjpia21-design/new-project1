# 작업 명세 — 19단계: 튜토리얼 6편 추가 (6차, 영어·한국어 동시 작성)

작성: 기획 담당 · 구현: 코딩 에이전트 3명 (N1~N3, 각 2편 × 2개 언어)

## 언어 구조 (2026-10-31 이후)
- 영어가 기본: `src/content/docs/<분야>/<파일>.mdx` → `/<분야>/<slug>/`
- 한국어: `src/content/docs/ko/<분야>/<파일>.mdx` → `/ko/<분야>/<slug>/`
- 자세한 규칙: `docs/guides/english-site.md`. 기존 편 하나를 영어·한국어로 각각 열어 import 깊이·링크 형식을 그대로 따라 한다.
- **각 편은 두 언어를 모두 만든다.** 사실·날짜·출처는 같게. 영어는 자연스러운 미국식 영어, 한국어는 친근한 존댓말. 프롬프트(PromptBox)는 각 언어 사용자가 바로 쓸 수 있게.
- 내부 링크: 영어 `/claude/...`, 한국어 `/ko/claude/...`. 실제로 있는 페이지만.
- `sidebar.label` 번호는 해당 분야의 기존 편 수 + 1 (두 언어 같은 번호).

## 공통 규칙
`docs/specs/step13-more-tutorials.md`의 "공통 규칙"을 따른다(9개 섹션 구조, 공식 문서만, 한 페이지씩 curl, 추측 금지, 확인 못 한 것은 그렇게 표시, 대량 다운로드 금지, 차단 우회 금지). 날짜 `2026-10-31`, `lastVerified: 2026-10-31`, `status: published`. 조사 노트는 `docs/research/<분야>/<번호>-<slug>.md` (한국어 또는 영어 자유).

## 추가할 튜토리얼

| 담당 | 파일명 (두 언어 공통) | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- |
| N1 | `basics/12-privacy-settings.mdx` | Turn off AI training on your chats: privacy settings in Claude, ChatGPT and Gemini / 내 대화가 AI 학습에 쓰이지 않게: Claude·ChatGPT·Gemini 개인정보 설정 | beginner | support.claude.com, privacy.claude.com, learn.chatgpt.com, support.google.com/gemini |
| N1 | `basics/13-sensitive-questions.mdx` | Asking AI about health, legal and money questions safely / 건강·법률·돈 문제를 AI에 물을 때 주의할 점 | beginner | 각 서비스 공식 이용 정책·도움말 (사용 정책, 의료·법률 관련 안내) |
| N2 | `dev/12-web-search-fetch-tools.mdx` | Let Claude search and read the web via the API: web search and web fetch tools / API로 Claude에게 웹 검색·웹 페이지 읽기 맡기기 | advanced | platform.claude.com/docs (web search tool, web fetch tool, 릴리스 노트의 10월 web fetch 제어 항목) |
| N2 | `coding/37-claude-code-hooks.mdx` | Automate checks with Claude Code hooks / Claude Code 훅으로 자동 검사·정리 붙이기 | practical | code.claude.com/docs (hooks, hooks guide) |
| N3 | `automation/42-n8n-ai.mdx` | Build AI workflows with n8n / n8n으로 AI 자동화 워크플로 만들기 | practical | docs.n8n.io |
| N3 | `automation/43-phone-shortcuts.mdx` | Call AI from your phone's shortcuts (iPhone Shortcuts, Android) / 휴대폰 단축어로 AI 바로 부르기 | beginner | support.apple.com (Shortcuts), 각 AI 앱의 공식 도움말 (Siri/Shortcuts·Android 연동 문서) |

## 편별 지침
- N1 / basics/12: 각 서비스의 "모델 학습에 내 데이터 사용" 설정 위치, 기본값, 임시/비공개 채팅, 기록 삭제, 기업·팀 플랜 차이. basics/05와 겹치지 않게 **설정 따라하기** 중심. 메뉴 경로는 공식 문서에 있는 것만.
- N1 / basics/13: 공식 사용 정책 근거로 "AI는 전문가 대체 아님", 사실 확인(basics/04 연결), 개인정보, 긴급 상황 연락처(국가별로 단정하지 말고 "지역 응급번호"로 일반화; 한국어판은 한국 번호를 공식 출처로 확인된 것만). 겁주지 않는 실용 체크리스트.
- N2 / dev/12: 도구 정의, 도메인 허용/차단, 비용, 인용(citations), 10월에 추가된 web fetch 제어 등 공식 문서 그대로. 샘플 코드는 짧게, 실행 여부 명시. dev/01·dev/09와 연결.
- N2 / coding/37: 훅 이벤트 종류, 설정 파일 위치, 예시(포맷터 실행, 위험 명령 차단), 보안 주의. C14와 겹치면 링크.
- N3 / automation/42: n8n 셀프호스팅 vs 클라우드(가격은 공식 페이지 확인된 것만), AI 노드(Claude/OpenAI 등) 연결, 간단한 예시 워크플로. automation/18(Zapier/Make)과 비교 링크.
- N3 / automation/43: iPhone 단축어/Siri와 Android에서 AI 앱을 부르는 **공식 지원 범위만**. 각 AI 앱이 단축어를 지원하는지 공식 문서로 확인 안 되면 그 앱은 빼고 제목·본문에서 일반화. basics/07 연결.

## 공통
- 자기 파일(두 언어)·조사 노트만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>` (공유 캐시 충돌 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든 파일(두 언어), 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
