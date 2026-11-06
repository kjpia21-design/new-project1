# 작업 명세 — 33단계: 20차 튜토리얼 6편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (E1~E6)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, `-L` 허용, 우회 금지)을 따른다. 날짜 `2026-11-06`, `lastVerified: 2026-11-06`, `status: published`. PromptBox 안에는 중괄호를 쓰지 않는다. `claude-news.mdx`는 루틴이 관리하므로 건드리지 않는다.

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| E1 | `agents/11-agents-small-business.mdx` | 11 | Use AI agents for a small business's routine work / 1인·소상공인 반복 업무에 AI 에이전트 쓰기 | practical | support.claude.com(Cowork), learn.chatgpt.com, support.google.com/gemini |
| E2 | `agents/12-multi-agent-basics.mdx` | 12 | Multi-agent setups explained: subagents and teams / 멀티 에이전트 쉽게 이해하기: 서브에이전트와 팀 | beginner | code.claude.com/docs(subagents), anthropic.com(engineering 글), platform.claude.com/docs |
| E3 | `claude/c29-team-admin-basics.mdx` | C29 | Claude for Team and Enterprise admins: security and settings basics / Team·Enterprise 관리자를 위한 Claude 보안·설정 기본 | practical | support.claude.com (관리자 설정, SSO, 보안), claude.com/pricing |
| E4 | `automation/52-customer-faq.mdx` | 22 | Build a customer FAQ and reply templates with AI / AI로 고객 FAQ·답변 템플릿 만들기 | practical | 각 서비스 공식 도움말(Projects 등) + 사이트 기존 편 |
| E5 | `media/42-storyboards.mdx` | 19 | Plan videos with AI storyboards and shot lists / AI로 영상 스토리보드·촬영 목록 만들기 | beginner | 각 서비스 이미지 생성·Canvas 공식 도움말 |
| E6 | `dev/22-admin-api.mdx` | 22 | Manage your organization with the Claude Admin API / Claude Admin API로 조직 관리하기 | advanced | platform.claude.com/docs (Admin API, API keys, usage/cost) |

## 편별 지침
- E1: roles/solo-business·agents/10(지시서)·agents/05(안전)와 연결. 예약·견적·재고 정리 등 예시, 결제·고객 개인정보는 사람이 확인. 기능·플랜은 공식 확인분만.
- E2: coding/39(서브에이전트)·dev/03(Agent SDK)과 겹치면 링크하고 개념 설명 중심. 비용·토큰 증가 주의는 공식 근거가 있을 때만 수치로.
- E3: 11-05 Enterprise 보안 기능(보안 센터 등, 일부 베타)은 공식 페이지 확인분만. SSO·도메인 확인·데이터 보존·역할은 공식 문서 그대로. C2·C24·C28 연결. PLAN.md Claude 표에 C29 한 줄 추가.
- E4: C5(프로젝트)·automation/50(템플릿)·roles/sales-support 연결. 고객 정보 마스킹, 정책·환불 조건은 회사가 확정, AI 답변은 검토 후 발송.
- E5: media/13(홍보 영상)·media/34(AI 영상 생성)와 연결. 저작권·초상권(basics/09·10).
- E6: Admin API 키와 일반 API 키 구분, 권한·엔드포인트·베타 헤더는 공식 문서 그대로. 키 보관 주의. dev/11(사용량·비용 API) 연결. 짧은 예제, 실행 여부 명시.

## 공통
- 자기 파일(두 언어)·조사 노트만 수정(E3만 PLAN.md 한 줄). 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
