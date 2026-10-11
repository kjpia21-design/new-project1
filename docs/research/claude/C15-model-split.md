# 작업별 모델 나눠 쓰기 (Opus 계획 / Sonnet 구현 / Haiku 서브에이전트)

## 핵심 사실
- 공식 선택 매트릭스: 최고 성능 필요 -> Fable 5.1(몇 시간 도는 에이전트 세션, 다단계 딥 리서치); 복잡한 에이전트형 코딩·엔터프라이즈 업무 -> Opus 5.5; 일상적 코딩·에이전트·엔터프라이즈 워크로드의 속도+성능 -> Sonnet 5.5; 최저 지연·최저 가격 -> Haiku 5.5(실시간, 대량 처리, 서브에이전트 작업). "대부분의 워크로드는 Opus 5.5로 시작". (출처: https://platform.claude.com/docs/en/about-claude/models/choosing-a-model)
- 두 가지 시작 전략: 효율 우선(Haiku 5.5로 시작해 부족하면 올림) / 성능 우선(Opus 5.5로 시작해 effort를 낮추거나 모델을 내려 최적화; xhigh/max에서도 부족하면 Fable 5.1). (출처: 동일)
- "effort를 조정하는 것이 모델을 바꾸는 것보다 나은 수단인 경우가 많다." (출처: 동일)
- 모델 조합 패턴 2가지: 어려운 판단을 advisor에게 올리는 executor, 대량 작업을 저비용 worker에게 위임하는 orchestrator. 자세한 내용은 "Optimizing for cost and intelligence" 문서. (출처: 동일)
- Claude Code 비용 가이드: "Sonnet은 대부분의 코딩 작업을 잘 처리하고 Opus보다 저렴하다. Opus는 복잡한 아키텍처 결정이나 다단계 추론에 아껴 써라." 단순한 서브에이전트는 `model: haiku`. (출처: https://code.claude.com/docs/en/costs)
- 주의: `/model`로 Opus로 바꾸면 그 모델을 상속하는 서브에이전트에도 적용된다. 큰 모델 상속을 피하려면 위임 전에 전환하거나, 서브에이전트 정의에 `model`을 명시. (출처: https://code.claude.com/docs/en/model-config)
- `opusplan` 별칭: "플랜 모드에서는 opus, 실행 단계에서는 sonnet"으로 자동 전환. (출처: 동일) -> 사용자가 말한 "Opus로 계획 / Sonnet으로 구현" 패턴의 공식 내장 구현.
- 서브에이전트 모델 결정 순서: (1) 호출 시 지정한 model 파라미터 (2) 정의의 `model` frontmatter (3) 환경변수 `CLAUDE_CODE_SUBAGENT_MODEL` (4) 메인 대화 모델. `CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1`이면 모든 서브에이전트에 한 모델 강제. `/tasks`로 실행 중 모델 확인. (출처: https://code.claude.com/docs/en/sub-agents)
- Explore 서브에이전트는 구독/Console/게이트웨이에서 `opus` 별칭 모델로 돌아간다. `Explore`라는 이름의 사용자 서브에이전트를 `model: haiku`로 정의해 덮어쓸 수 있다. (출처: 동일)
- 에이전트 팀: 팀원은 Sonnet 권장, 팀은 작게. 플랜 모드 팀원은 표준 세션 대비 약 7배 토큰. (출처: https://code.claude.com/docs/en/costs)
- 비용 수치: 엔터프라이즈 평균 개발자당 활성일 약 $13, 월 $150-250, 90%는 활성일 $30 미만. (출처: 동일)
- API 가격 차이(100만 토큰): Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Haiku 5.5 $0.10~/$0.50~, Fable 5.1 $10/$50. 즉 Sonnet은 Opus의 절반, Fable은 Opus의 2.5배. (출처: https://platform.claude.com/docs/en/about-claude/models/overview)
- 구독 사용량도 모델·effort에 영향받음: 사용량은 대화 길이, 기능, 모델, effort에 좌우된다. (출처: https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work)
- 모델별 한도 메시지("Opus limit", "Sonnet limit")가 나오면 다른 계열 모델로 /model 전환 시 계속 작업 가능. 반면 세션/주간 한도는 전 모델 공통이라 전환으로 회복되지 않는다. (출처: https://code.claude.com/docs/en/costs)

## 따라하기에 쓸 수 있는 절차
1. 가장 쉬운 분업: `/model opusplan` (계획=Opus, 실행=Sonnet). (출처: https://code.claude.com/docs/en/model-config)
2. 서브에이전트별 모델: 정의 파일에 `model: haiku`(검색/로그 분석) 또는 `model: sonnet`(리뷰) 지정. (출처: https://code.claude.com/docs/en/sub-agents)
3. 전체 서브에이전트 일괄 지정: 환경변수 `CLAUDE_CODE_SUBAGENT_MODEL=haiku`(+ 강제하려면 `CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1`). (출처: 동일)
4. 비용 점검: `/usage`의 attribution(스킬/서브에이전트/MCP별 비중)을 확인. (출처: https://code.claude.com/docs/en/costs)

## 확인 못 함 / 주의
- "Optimizing for cost and intelligence" 문서의 측정 사례는 읽지 않았다.
- opusplan이 정확히 어느 Opus/Sonnet 버전으로 풀리는지 구체 버전은 확인 못 함(별칭이 최신으로 풀린다는 설명만).

## 출처 목록
- [Choosing the right model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model) — 확인일 2026-10-10
- [Manage costs effectively](https://code.claude.com/docs/en/costs) — 확인일 2026-10-10
- [Model configuration](https://code.claude.com/docs/en/model-config) — 확인일 2026-10-10
- [Custom subagents](https://code.claude.com/docs/en/sub-agents) — 확인일 2026-10-10
- [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview) — 확인일 2026-10-10


## 6단계 재점검 (2026-10-10)
- code.claude.com/docs/en/model-config: opusplan = plan 모드 opus, 실행 sonnet. Anthropic API에서 opus=Opus 5.5, sonnet=Sonnet 5.5(Bedrock/Foundry는 다름).

## 2026-10-11 업데이트 반영
확인일 2026-10-11. 출처: [Advisor](https://code.claude.com/docs/en/advisor), [Commands](https://code.claude.com/docs/en/commands), [Workflows](https://code.claude.com/docs/en/workflows), [Model configuration](https://code.claude.com/docs/en/model-config), [Environment variables](https://code.claude.com/docs/en/env-vars), [CHANGELOG.md](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md).
- `CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL`(v2.1.296): "워크플로 에이전트를 한 모델로, 다른 서브에이전트는 각자 모델 유지"(CHANGELOG). 환경변수 문서, workflows 문서에서는 이 변수명을 찾지 못함. 값 형식은 확인 못 함(본문에 그 사실을 밝힘). 참고로 `CLAUDE_CODE_SUBAGENT_MODEL`은 워크플로 에이전트의 기본 모델도 정한다고 env-vars 문서에 적혀 있음.
- `/advisor [model|off]`, `--advisor <model>`, `advisorModel` 설정. 서버측 advisor 도구, Anthropic API 전용, 실험 기능. 조언 모델은 메인 모델 이상 등급(표는 Advisor 문서). 비용은 조언 모델 요금, 구독은 한도 합산. 텍스트 형태 `/advisor`는 v2.1.260 이상.
- 미반영: Haiku 5.5의 advisor 조건(v2.1.293), Fable advisor의 usage credits 동의는 본문에 쓰지 않음.
