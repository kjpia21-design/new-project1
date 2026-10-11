# D2-04 Managed Agents로 서버에서 에이전트 돌리기 - 조사 노트 (2026-10-11)

## 출처 (직접 읽음, WebFetch)
- https://platform.claude.com/docs/en/managed-agents/overview.md
- https://platform.claude.com/docs/en/managed-agents/quickstart.md
- https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration.md (동적 워크플로 절)
- https://platform.claude.com/docs/en/managed-agents/workflow-runs.md (한도·완료 판단·예산 절)
- https://platform.claude.com/docs/en/managed-agents/budgets.md
- https://platform.claude.com/docs/en/managed-agents/reference.md (이벤트 유형, 속도 제한)
- https://platform.claude.com/docs/en/about-claude/pricing.md (Managed Agents 가격 절)
- https://code.claude.com/docs/en/agent-sdk/overview, /hosting (Agent SDK와의 비교)
- claude-api 스킬(2026-10-11): shared/managed-agents-overview.md, multiagent.md, python/managed-agents/README.md
- SDK 설치본으로 확인: `anthropic` 1.13.0 (`client.beta.agents/environments/sessions`, `sessions.create(budget=)`, `agents.create(multiagent=)`), `@anthropic-ai/sdk` 0.133.0 (tsc 통과)

## 확인한 사실
### 무엇인가
- "미리 만들어진, 설정 가능한 에이전트 하니스를 관리형 인프라에서 실행." 장시간·비동기 작업에 적합. 에이전트 루프, 도구 실행, 런타임을 직접 만들 필요 없음. 프롬프트 캐싱, 컴팩션 등 내장. (overview)
- 개념 4개: Agent(모델, 시스템 프롬프트, 도구, MCP 서버, 스킬) / Environment(세션이 도는 곳: Anthropic 관리 클라우드 샌드박스 또는 내 인프라의 self-hosted 샌드박스) / Session(환경 안에서 도는 에이전트 인스턴스) / Events(앱과 에이전트가 주고받는 메시지). (overview)
- 흐름: 에이전트 만들기(한 번) -> 환경 만들기 -> 세션 시작 -> 이벤트 전송, SSE로 스트리밍 -> 중간 개입·중단. 이벤트 기록은 서버에 저장됨. (overview)
- 에이전트는 **버전이 있는 저장 객체**. 세션은 에이전트 ID(또는 `{type:"agent", id, version}`)만 가리킴. `model`/`system`/`tools`는 세션 생성에 넣지 않음. 매 실행마다 `agents.create()`를 부르지 않는다. (스킬 overview, quickstart)
- 내장 도구: Bash, 파일 작업(읽기·쓰기·편집·glob·grep), 웹 검색·가져오기(도메인 허용/차단 목록 가능), MCP 서버. 도구 묶음 `agent_toolset_20260401`. (overview, quickstart)
- 언제 쓰나(overview): 장시간 실행, 클라우드 인프라(샌드박스), self-hosted 실행(규정·데이터 위치), 인프라 최소화, 상태 있는 세션(파일 시스템·대화 기록 유지), 크론 스케줄 실행(scheduled deployments).
- Messages API는 "맞춤 에이전트 루프와 세밀한 제어"용, Managed Agents는 "장시간·비동기 작업"용. Agent SDK는 내 프로세스에서 Claude Code 에이전트를 돌리는 라이브러리이고, 호스팅 부담이 싫으면 Managed Agents를 고려하라고 hosting 문서가 안내. (overview, agent-sdk hosting)
- 베타: 모든 엔드포인트에 `managed-agents-2026-04-01` 베타 헤더 필요, SDK가 자동 설정. 모든 API 계정에서 기본 활성화. MCP tunnels와 dreaming은 더 제한된 research preview. 동작이 릴리스 사이에 바뀔 수 있음. (overview)
- **ZDR과 HIPAA BAA 적용 대상이 아님**(상태 저장 설계). 세션과 업로드 파일은 API로 삭제 가능. (overview)
- Claude Platform on AWS에서도 쓸 수 있으나 기능·세션 동작에 차이가 있음. Bedrock/Vertex/Foundry에서는 미지원(스킬 SKILL 본문). (overview, 스킬)

### 최소 예제
- 설치: `pip install anthropic` / `npm install @anthropic-ai/sdk`, CLI `ant`(`brew install anthropics/tap/ant`). 환경변수 `ANTHROPIC_API_KEY`.
- 에이전트: `client.beta.agents.create(name, model, system, tools=[{"type":"agent_toolset_20260401"}])` -> `agent.id`, `agent.version`.
- 환경: `client.beta.environments.create(name, config={"type":"cloud","networking":{"type":"limited","allow_package_managers":True}})`.
- 세션: `client.beta.sessions.create(agent=agent.id, environment_id=environment.id, title=...)`.
- 메시지·스트림: **스트림을 먼저 연 뒤** `client.beta.sessions.events.send(session.id, events=[{"type":"user.message","content":[{"type":"text","text":...}]}])`. 이벤트: `agent.message`, `agent.tool_use`, `session.status_idle`(끝). 스트림은 열린 뒤 발생한 이벤트만 전달. (quickstart)
- 종료 판단: `session.status_idle`의 `stop_reason.type`이 `requires_action`이면 내 응답(도구 승인·커스텀 도구 결과)을 기다리는 중이므로 계속 듣는다. `session.status_terminated`도 종료. (스킬 python README)
- 스트림이 끊기면 재연결 후 이벤트 목록을 조회해 중복 제거(SSE는 재전송 없음). 본문에서는 한 줄만. (스킬 overview)
- `limited` 네트워킹에서는 `allowed_hosts`가 웹 검색·가져오기에도 적용됨: 호스트를 나열하지 않으면 두 도구는 결과를 못 가져옴. 퀵스타트는 웹 도구가 필요 없는 예제. (quickstart)
- 산출물은 세션의 `/mnt/session/outputs/`에 쓰면 `files.list(scope_id=session.id)`로 조회·다운로드 가능(인덱싱 지연 1~3초). 본문에서는 경로만 언급. (스킬 python README)

### 동적 워크플로 (베타)
- 에이전트가 **워크플로(여러 에이전트를 단계별로 돌려 결과를 합치는 프로그램)**를 직접 작성하고 서버가 백그라운드 **워크플로 실행(run)**으로 돌림. 수백 문서 검토처럼 조각이 많은 일에 적합. 병렬이라 더 빨리 끝날 수 있음. (multiagent-orchestration)
- 켜기: 에이전트의 `multiagent: {"type": "multiagent_20261001", "workflows": {"type": "enabled"}}`. 이 타입은 `workflows`와 `subagents`(위임)가 모두 기본 켜짐. 끄기: `{"type":"disabled"}`; `null`을 보내면 기본값(켜짐)이 됨. 세션은 생성 시점의 설정을 복사하므로 에이전트를 나중에 바꿔도 기존 세션은 안 바뀜. (multiagent-orchestration)
- 시작 방식: 별도 API 호출 없음. `user.message`로 일을 설명하면 에이전트가 run 시작 여부를 판단. 시스템 프롬프트에 "언제 run을 쓰고 언제 직접 하는지"를 적어 유도(공식 예: 계약서 몇 건 초과면 run, 한두 건은 직접). 모든 run의 에이전트는 토큰을 쓰므로 필요한 작업에만 쓰게 한다. (multiagent-orchestration)
- 모델: 인라인 에이전트는 세션 에이전트의 모델을 씀. 다른 모델을 쓰려면 에이전트를 만들어 `workflows.predefined_agents`(최대 20)에 나열. 같은 블록에 `subagents.predefined_agents`(최대 20), `advisor`. `multiagent`가 설정된 에이전트는 다른 에이전트의 목록에 넣을 수 없음(자기 자신 `{"type":"self"}`은 가능). `ant__` 접두사 도구 이름 예약. (multiagent-orchestration)
- 이벤트: `workflow_run.created / status_running / status_idle / status_ended / error / phase_started / phase_ended`. (reference)
- 한도(workflow-runs, "API가 보장하는 수치는 아님, 바뀔 수 있음"): 한 run에서 동시 작업 스레드 64, run 전체에서 시작할 수 있는 에이전트 1,000(초과 시 `thread_limit_error`), run 수명 기본 24시간(`timeout_error`), 세션당 동시에 열린 run 10(기본, 초과 시 `max_workflow_runs_error`). 세션당 자식 스레드 25(워크플로 스레드와 advisor 스레드는 제외 - 스킬).
- 완료 판단: 만든 run마다 `workflow_run.status_ended`가 도착하고, 그 뒤에 내가 일으키지 않은 `session.status_idle(end_turn)`이 와야 끝. idle만으로는 끝이 아님(예산 정지 등). (workflow-runs)
- run은 이벤트로 끝낼 수 없음(`user.interrupt`는 run을 끝내지 않음). 세션 보관(archive)으로만 끝날 수 있음. (workflow-runs, reference)
- run 자체의 가격은 없음. 쓴 토큰은 각 모델 요금으로 청구되고 세션 예산에 합산. 같은 일에 스레드가 둘 이상 생길 수 있으니 도구는 두 번 불려도 안전하게. (workflow-runs)
- 속도 제한: run의 모델 요청은 조직의 Messages API 속도 제한에 합산. (workflow-runs)

### 비용·제한
- 과금 두 축: 토큰 + 세션 런타임. 토큰은 Messages API 모델 가격 그대로, 캐시 배수도 동일. 웹 검색은 1,000회당 $10. 세션 런타임 **$0.08/세션-시간**, `running` 상태 시간만(idle, rescheduling, terminated는 제외), 밀리초 단위. 런타임은 코드 실행 컨테이너-시간 과금을 대체하므로 중복 과금 없음. (pricing)
- **Batch API 할인은 Managed Agents에 적용되지 않음**(세션이 상태 있고 대화형이라 배치 모드 없음). `inference_geo`를 us로 고정하면 토큰 1.1배. fast 모드 프리미엄은 에이전트 `model.speed: "fast"`일 때. (pricing)
- 공식 계산 예시는 Opus 5($5/$25) 기준. 본문은 Opus 5.5($4/$20, 캐시 읽기 $0.20/MTok)로 다시 계산: 입력 50,000토큰 $0.20 + 출력 15,000토큰 $0.30 + 런타임 1시간 $0.08 = $0.58. 캐시 읽기 40,000토큰이면 입력 10,000 x $4 = $0.04, 캐시 읽기 40,000 x $0.20 = $0.008, 출력 $0.30, 런타임 $0.08 = $0.428.
- 세션 예산: 세션 **생성 시에만** `budget={"type":"limit","max_list_cost":{"amount":"200","currency":"USD"}}`. `amount`는 센트 단위 정수 문자열(`"125"` = $1.25, `"25.00"`은 거부), 통화는 USD만. 공개 정가 기준 list cost(토큰, 웹 검색 $10/1,000회, 런타임 $0.08/시간)로 계산. 한도에 닿으면 새 모델 요청을 멈추고 세션이 idle + `stop_reason: budget_reached`. 진행 중인 요청은 끝나므로 약간 넘을 수 있음. 한도에서는 `user.tool_confirmation`, `user.tool_result`, `user.custom_tool_result`, `user.interrupt`만 받음(`user.message`는 400). 예산을 올리거나 제거하면 재개. 예산 제거는 되돌릴 수 없음(다시 달 수 없음). 기존 세션에 새로 달 수 없음(400). 협상 가격이 아닌 정가 기준이라 실제 청구는 더 낮을 수 있음. (budgets)
- 모니터링: 세션 객체 `usage.list_cost`, `usage.active_seconds`; `session.usage` 이벤트(idle 직전 항상 1회). (budgets)
- 속도 제한(조직당): 생성 엔드포인트(에이전트, 세션, 환경 등) 분당 300, 읽기(retrieve, list, stream) 분당 1,200. 조직의 지출 한도·티어별 속도 제한도 적용. (reference)
- 브랜딩: 파트너 제품에서 "Claude Code", "Claude Cowork" 이름 사용 불가. (reference; 본문에서는 생략)

## 확인 못 한 것 / 주의
- 실제 API 호출은 하지 않음(키 없음). 코드는 문법, 설치본 SDK의 메서드·파라미터 존재 확인, TS는 tsc 통과까지만.
- 베타라 수치와 필드가 바뀔 수 있음. 한도(64/1,000/24시간/10)는 공식 문서가 "보장하지 않는다"고 적음.
- 에이전트 도구 권한 정책(`always_allow`/`always_ask`/`auto`)의 기본값은 이번에 문서 원문으로 확인하지 못함. 본문은 정책 페이지를 안내만 하고 기본값을 단정하지 않음. (스킬 예제는 `auto` 정책을 쓰고 대기 중 호출을 사람이 승인해야 함을 설명.)
- 동적 워크플로가 Opus 5.5 외 모델에서 어떻게 동작하는지, 워크플로 안에서 에이전트가 쓰는 정확한 프로그래밍 형식(스크립트 API)은 문서에서 확인하지 못함. 본문은 "에이전트가 작성한다"까지만 쓰고 형식은 단정하지 않음.
- 스킬 문서는 `agents.create`의 `model`에 `claude-opus-5-5`, 퀵스타트도 같음. `claude-sonnet-5-5`를 Managed Agents 에이전트 모델로 쓰는 것은 퀵스타트에 직접 예시가 없음(스킬은 Sonnet 5.5를 워커 에이전트로 제안). 본문 예제에서 `ma_setup`은 Sonnet 5.5를 쓰므로 실행 확인 불가 항목으로 명시.
