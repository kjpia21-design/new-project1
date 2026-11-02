# 작업 명세 — 23단계: 10차 튜토리얼 6편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (S1~S6)

언어 구조·공통 규칙: `docs/guides/english-site.md`, `docs/specs/step19-batch6-bilingual.md`("언어 구조"·"공통 규칙"), `docs/specs/step13-more-tutorials.md`("공통 규칙"). 날짜 `2026-11-02`, `lastVerified: 2026-11-02`, `status: published`. 편수 숫자는 쓰지 않는다. index·about·start·roles 페이지와 astro.config.mjs는 수정하지 않는다. `sidebar.label` 번호 = 해당 분야 현재 편 수 + 1 (basics 16, claude 22(C23), chat 13, coding 12, media 11, automation 15, dev 13 기준). 같은 분야를 두 에이전트가 동시에 쓰는 경우(chat) 번호는 S2=14, S3=15.

| 담당 | 파일 (두 언어) | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- |
| S1 | `claude/c23-google-workspace.mdx` | Use Claude with Gmail, Calendar and Drive / Claude에 Gmail·캘린더·드라이브 연결해 일하기 | practical | support.claude.com (Google Workspace 커넥터 문서) |
| S2 | `chat/43-reading-notes.mdx` | Summarize books and long reads into study notes / 책·긴 글을 요약해 독서 노트 만들기 | beginner | 각 서비스 파일 업로드·한도 공식 도움말 |
| S3 | `chat/44-presentation-rehearsal.mdx` | Rehearse presentations and speeches with AI / AI와 발표·스피치 연습하기 | beginner | 음성 모드 공식 도움말(Claude, ChatGPT, Gemini Live) |
| S4 | `automation/46-budget-sheet.mdx` | Organize household budgets and receipts with AI / AI로 가계부·영수증 정리하기 | beginner | 각 서비스 파일/이미지 업로드·스프레드시트 공식 도움말 |
| S5 | `dev/14-token-counting.mdx` | Estimate costs with the token counting API / 토큰 세기 API로 비용 미리 계산하기 | advanced | platform.claude.com/docs (token counting, pricing) |
| S6 | `coding/40-settings-permissions.mdx` | Tune Claude Code settings and permissions safely / Claude Code 설정·권한을 안전하게 다듬기 | practical | code.claude.com/docs (settings, permissions, permission modes) |

## 편별 지침
- S1: C7(커넥터)·automation/38(메일 AI)와 겹치는 설명은 링크. 연결 방법, 할 수 있는 일(읽기/쓰기 범위), 플랜 조건, 개인정보·권한 주의는 공식 문서 그대로.
- S2: chat/02(문서 요약)·chat/21(Gemini Notebook)와 겹치지 않게 "독서 노트·학습 노트" 결과물 중심. 저작권(책 전문 업로드 등) 주의, basics/09 연결.
- S3: basics/07, chat/31(외국어 공부)와 연결. 음성 모드 지원 범위는 공식 문서 확인분만. 대본 다듬기·예상 질문·피드백 프롬프트.
- S4: 금융 조언이 아님 명시. 영수증 사진 업로드 시 개인정보(카드번호 등) 가리기. automation/23(시트 AI)·coding/38 연결. 가계부 템플릿 만들기 프롬프트.
- S5: 토큰 세기 엔드포인트·요청 형식·무료 여부·한도는 공식 문서 그대로, 가격은 공식 가격 페이지 "as of 2026-11-02". dev/02·dev/11과 연결. 짧은 예제, 실행 여부 명시.
- S6: settings 파일 위치·우선순위, allow/deny 규칙 예시, 권한 모드, 민감 파일 보호. C14·coding/37(훅)과 연결. 실행했으면 결과, 안 했으면 명시.

## 공통
- 자기 파일(두 언어)·조사 노트(`docs/research/<분야>/`)만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
