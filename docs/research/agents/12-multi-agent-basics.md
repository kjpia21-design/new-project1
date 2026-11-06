# agents/12 조사 노트 (멀티 에이전트 기초)

확인일 2026-11-06. 한 페이지씩 기본 curl(-L)로 열람(모두 HTTP 200). 차단 우회 없음. HTML에서 텍스트만 추출해 읽음.

## 열람한 공식 페이지
- https://code.claude.com/docs/en/sub-agents
- https://code.claude.com/docs/en/agent-teams
- https://platform.claude.com/docs/en/agent-sdk/subagents (307 -> https://code.claude.com/docs/en/agent-sdk/subagents, 200)
- https://www.anthropic.com/engineering/multi-agent-research-system (2025-06-13 게시)
- https://www.anthropic.com/engineering/building-effective-agents (2024-12-19 게시, 상단에 "도구 환경이 많이 바뀌었다"는 안내 있음)
- 사이트 내: agents/01·05·07·08·09, coding/39, dev/03

## 확인한 사실 (2026-11-06)
- 서브에이전트: 자기 컨텍스트 창·시스템 프롬프트·도구 접근·권한. 자체 요청이 메인 대화와 같은 사용 한도에 포함. 결과 요약만 반환. 이점 4가지(컨텍스트 분리, 병렬, 전문 지시, 도구 제한)는 SDK 페이지.
- 에이전트 팀: 실험 기능, 기본 꺼짐(CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1). 서브에이전트 대비 표(컨텍스트·소통·조율·토큰 비용). "토큰을 훨씬 많이 씀", 팀원 수에 비례. 3~5명 시작 권장. 제한: in-process 재개 불가, 세션당 팀 1개, 중첩 팀 없음, 리드 고정.
- 서브에이전트 기본: 중첩 3겹, 동시 20개(CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS로 변경), 새 컨텍스트로 시작.
- Anthropic 연구 글: 에이전트 약 4배, 멀티 에이전트 약 15배 토큰(자체 데이터). Opus 4 리드 + Sonnet 4 서브에이전트가 단일 Opus 4보다 내부 연구 평가에서 90.2% 높음. 초기 버전이 단순 질문에 서브에이전트 50개. 서브에이전트에게 목표·출력 형식·도구/출처·경계 필요. 병렬화로 복잡한 질의 시간 최대 90% 단축. 글에는 90.2% 등은 사용하지 않음(2025년 시스템 수치).
- building effective agents: 워크플로 vs 에이전트 정의, 가장 단순한 해법부터, orchestrator-workers 패턴.

## 확인하지 못함
- 서브에이전트·팀 사용 시 플랜별 실제 추가 비용(Claude Code 문서의 "agent team token costs" 절은 본문에서 구체 수치를 확인하지 못함; 글에서는 수치 없이 "훨씬 많이"만 인용).
- 4배·15배가 현재 모델·제품에도 적용되는지(2025년 글 기준, 글에 한정 명시).
- ChatGPT·Gemini의 멀티 에이전트 구조(이번 글은 Claude 문서 중심, 다른 서비스는 다루지 않음).
- 커스텀 서브에이전트의 도구 상속 기본값(글에서 단정하지 않음).
- 직접 실행 안 함(예시 프롬프트 미실행, 글에 명시).

## 파일
- src/content/docs/agents/12-multi-agent-basics.mdx, src/content/docs/ko/agents/12-multi-agent-basics.mdx
