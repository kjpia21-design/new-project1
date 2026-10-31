# 작업 명세 — 17단계: 튜토리얼 6편 추가 (5차)

작성: 기획 담당 · 구현: 코딩 에이전트 3명 (M1~M3, 각 2편)

규칙은 `docs/specs/step13-more-tutorials.md`의 "공통 규칙"을 그대로 따른다. 날짜는 `2026-10-31`. 제목에는 공식 문서로 확인한 서비스만 넣는다.

**사이드바 라벨 번호 규칙(18단계 이후 변경)**: 각 분야 안에서 1부터 연속 번호다. 새 편의 `sidebar.label` 번호는 해당 폴더 기존 편 수 + 1로 매긴다. Claude 편은 "C20. …" 형식이다.

| 담당 | 파일 | 제목(안) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- |
| M1 | `claude/c20-claude-design.mdx` | Claude Design으로 시안·프로토타입 만들기 | practical | support.claude.com (Claude Design 문서) |
| M1 | `claude/c21-office-agents.mdx` | Claude for Excel·PowerPoint: 오피스 안에서 Claude 쓰기 | practical | claude.com/docs/office-agents, support.claude.com |
| M2 | `dev/11-usage-cost-api.mdx` | 사용량·비용 분석 API로 팀 사용 현황 대시보드 만들기 | advanced | platform.claude.com/docs (Usage & Cost / 분석 API, 릴리스 노트) |
| M2 | `basics/11-choose-ai-tool.mdx` | 어떤 AI를 써야 할까? 목적별 도구 고르기 | beginner | 사이트 기존 편 + 각 서비스 공식 페이지 |
| M3 | `chat/40-resume-interview.mdx` | AI로 자기소개서·이력서 다듬고 면접 연습하기 | beginner | support.claude.com, learn.chatgpt.com, support.google.com/gemini |
| M3 | `automation/41-slack-ai.mdx` | 업무 메신저에 AI 붙이기: Slack AI와 Claude 연동 | practical | slack.com/help, support.claude.com |

## 편별 지침
- M1: C1·C2·C6·C8과 사실·용어를 맞추고 겹치는 설명은 링크로. 플랜 제한·베타 여부를 반드시 확인. `claude/index.mdx` 편수 문구와 `docs/PLAN.md` Claude 표(C20, C21 두 줄)를 갱신.
- M2 / dev/11: 엔드포인트·필요 권한(Admin 키 등)·베타 헤더는 공식 문서 그대로. 샘플 코드는 짧게, 실행하지 않았으면 그 사실을 적는다. dev/02(비용 최적화)와 연결.
- M2 / basics/11: 새 사실보다 **길잡이** 역할. "하고 싶은 일 → 추천 도구 → 사이트 튜토리얼" 표 중심. 도구 품질 순위는 매기지 않고, 무료로 시작 가능 여부 등 확인된 사실만. basics/08과 겹치지 않게.
- M3 / chat/40: 개인정보(주민번호·연락처 등) 넣지 않기, 사실 부풀리기 금지, 기업 AI 사용 정책 확인 권고. roles/student와 연결. 프롬프트 5개 이상.
- M3 / automation/41: Slack AI 기능·플랜은 공식 도움말로 확인된 것만. Claude 앱의 Slack 연동은 support.claude.com 기준. 공식 문서가 막히면 범위를 줄이고 제목에서 뺀다.

## 공통
- 자기 파일·조사 노트(`docs/research/<분야>/`)만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>` (공유 캐시 충돌 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
