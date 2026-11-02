# 작업 명세 — 29단계: 16차 튜토리얼 4편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 4명 (A1~A4)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, `-L` 허용, 우회 금지)을 따른다. 날짜 `2026-11-02`, `lastVerified: 2026-11-02`, `status: published`. PromptBox 안에는 중괄호를 쓰지 않는다.

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| A1 | `agents/08-deep-research-agents.mdx` | 8 | Compare deep research agents / 딥 리서치 에이전트 비교하기 | practical | support.claude.com (Research), support.google.com/gemini (Deep Research), learn.chatgpt.com (deep research) |
| A2 | `dev/19-prompt-caching.mdx` | 19 | Cut cost and latency with prompt caching / 프롬프트 캐싱으로 비용·지연 줄이기 | advanced | platform.claude.com/docs (prompt caching, pricing) |
| A3 | `chat/49-writing-feedback.mdx` | 20 | Get useful feedback on your writing / AI에게 글 피드백 제대로 받기 | beginner | 각 서비스 공식 도움말 + 사이트 기존 편 |
| A4 | `coding/44-git-with-claude-code.mdx` | 17 | Commit, branch and open PRs with Claude Code / Claude Code로 커밋·브랜치·PR 다루기 | practical | code.claude.com/docs (common workflows, GitHub) |

## 편별 지침
- A1: C10(Claude Research)·chat/22(AI 검색)와 겹치지 않게 "세 서비스 비교 + 결과 검수" 중심. 플랜·한도는 공식 확인분만. 막힌 페이지는 확인 못 함으로.
- A2: dev/02에 캐싱 요약이 있으므로 깊이 있게(캐시 위치·TTL·최소 길이·무효화 조건·usage 필드). 수치는 공식 문서 그대로, 가격 "as of 2026-11-02". 짧은 예제, 실행 여부 명시.
- A3: chat/42(이메일)·chat/04(보고서)와 연결. 과제·공모전 AI 사용 규칙 확인, 내 목소리 유지. 피드백 프롬프트 6개 이상.
- A4: 커밋 메시지·브랜치·PR 작성, 되돌리기, 푸시 전 확인. coding/40·coding/42·coding/08 연결. 실행 여부 명시. coding/06 링크 문구는 "1. Getting started with Claude Code" / "1. Claude Code 시작하기".

## 공통
- 자기 파일(두 언어)·조사 노트만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
