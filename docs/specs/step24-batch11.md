# 작업 명세 — 24단계: 11차 튜토리얼 6편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (U1~U6)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절을 그대로 따른다(두 언어 동시 작성, 공식 문서만 한 페이지씩 curl, 추측 금지, 편수 숫자 금지, index·about·start·roles·astro.config.mjs 수정 금지). 날짜 `2026-11-02`, `lastVerified: 2026-11-02`, `status: published`.

**sidebar.label 번호**: 아래 표의 번호를 쓴다(10차 작업과 겹치지 않게 미리 정함).

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| U1 | `claude/c24-sharing-projects.mdx` | C24 | Share Claude projects and chats with your team / Claude 프로젝트·대화를 팀과 공유하기 | practical | support.claude.com (project sharing, chat sharing, Team plan) |
| U2 | `basics/17-chat-history.mdx` | 17 | Find, organize and export your AI chat history / AI 대화 기록 찾기·정리·내보내기 | beginner | support.claude.com, privacy.claude.com, learn.chatgpt.com, support.google.com/gemini (검색·삭제·내보내기) |
| U3 | `agents/07-reviewing-agent-work.mdx` | 7 | How to check an AI agent's work before you trust it / AI 에이전트가 한 일을 믿기 전에 검수하는 법 | practical | Anthropic·OpenAI·Google 공식 에이전트 안전 문서(Claude in Chrome·Cowork safety 등) |
| U4 | `media/35-logo-icon-drafts.mdx` | 12 | Draft logos and icons with AI / AI로 로고·아이콘 시안 만들기 | beginner | support.claude.com(Claude Design), support.google.com/gemini(이미지 생성) |
| U5 | `dev/15-streaming.mdx` | 15 | Stream Claude API responses in real time / Claude API 응답을 실시간 스트리밍으로 받기 | advanced | platform.claude.com/docs (streaming) |
| U6 | `automation/47-airtable-ai.mdx` | 17 | Organize data with Airtable AI / Airtable AI로 데이터 정리하기 | practical | support.airtable.com (Airtable AI) |

## 편별 지침
- U1: C5(프로젝트)·C23과 겹치면 링크. 공유 범위·권한·플랜 조건은 공식 문서 그대로. 개인정보 주의.
- U2: 세 서비스의 대화 검색·삭제·데이터 내보내기 위치는 공식 문서 확인분만. basics/12와 연결.
- U3: agents/05(안전)와 겹치지 않게 "결과 검수" 체크리스트 중심. 공식 안전 권고 인용 + 사이트 권장 구분.
- U4: 상표·저작권 주의(basics/09), 최종 로고는 전문가 검토 권장. media/30, C20과 연결.
- U5: SSE 이벤트 종류, SDK 스트리밍 예제, 도구 사용과 함께 쓸 때 주의는 공식 문서 그대로. 짧은 예제, 실행 여부 명시. dev/01·13과 연결.
- U6: Airtable AI 기능·플랜·크레딧은 공식 문서 확인분만. 막히면 범위를 줄이고 제목에서 일반화. automation/16(Notion AI)과 비교 링크.

## 공통
- 자기 파일(두 언어)·조사 노트만 수정. U1은 `docs/PLAN.md` Claude 표에 C24 한 줄 추가. 빌드 `npx astro build --outDir /tmp/build-<담당>`. git 커밋·푸시 금지.
