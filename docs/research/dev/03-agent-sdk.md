# D2-03 Claude Agent SDK로 나만의 에이전트 만들기 - 조사 노트 (2026-10-11)

## 출처 (직접 읽음, WebFetch)
- https://code.claude.com/docs/en/agent-sdk/overview
- https://code.claude.com/docs/en/agent-sdk/quickstart
- https://code.claude.com/docs/en/agent-sdk/python (앞 100,000자까지: query, ClaudeSDKClient, ClaudeAgentOptions, tool, create_sdk_mcp_server, AgentDefinition, ResultMessage)
- https://code.claude.com/docs/en/agent-sdk/custom-tools
- https://code.claude.com/docs/en/agent-sdk/permissions
- https://code.claude.com/docs/en/agent-sdk/hooks
- https://code.claude.com/docs/en/agent-sdk/subagents
- https://code.claude.com/docs/en/agent-sdk/sessions
- https://code.claude.com/docs/en/agent-sdk/claude-code-features
- https://code.claude.com/docs/en/agent-sdk/hosting
- claude-api 스킬(2026-10-11 로드본): Agent SDK는 별도 제품이며 `claude-agent-sdk` / `@anthropic-ai/claude-agent-sdk`. 모델 ID·가격 기준.
- 패키지 존재 확인: PyPI `claude-agent-sdk` 0.2.165, npm `@anthropic-ai/claude-agent-sdk` 0.3.296 (임시 venv/디렉터리에 설치해 확인, 2026-10-11).

## 확인한 사실
### 무엇인가 / Claude Code와의 관계
- "Claude Code를 라이브러리로": Claude Code와 같은 도구, 에이전트 루프, 컨텍스트 관리를 Python·TypeScript로 프로그래밍. (overview)
- 비교 표(overview): Agent SDK = 내 프로세스에서 Claude Code 에이전트를 임베드 / CLI = 터미널 대화형 / Client SDK = API 직접 호출(도구 루프는 직접 또는 tool runner) / Managed Agents = Anthropic이 호스팅.
- 패키지: Python `claude-agent-sdk`, TypeScript `@anthropic-ai/claude-agent-sdk`. 둘 다 네이티브 Claude Code 바이너리를 번들해 대부분 별도 Claude Code 설치 불필요. (예외: pip가 sdist를 설치하는 ARM64 Windows 등, `npm ci --omit=optional`) (quickstart)
- 요구 사항: Node.js 18+ 또는 Python 3.10+. (quickstart)
- SDK는 `claude` CLI 하위 프로세스를 띄워 stdio로 통신. 세션 1개 = 프로세스 1개. 세션 기록(JSONL)은 로컬 디스크 `~/.claude/projects/`. (hosting, sessions)
- 이전 이름(Claude Code SDK)에서 이전: 공식 Migration guide가 있음(overview 링크). 본문에서 상세는 다루지 않음.
- 인증: `ANTHROPIC_API_KEY` 환경변수. `.env`는 자동 로드하지 않음. Bedrock/Vertex/Foundry/Claude Platform on AWS는 환경변수(`CLAUDE_CODE_USE_BEDROCK=1` 등)로. **제3자 개발자는 사전 승인 없이 claude.ai 로그인이나 claude.ai 한도를 자기 제품에 제공할 수 없음** -> API 키 방식 사용. (overview, quickstart)
- 기본 동작: `setting_sources`를 생략하면 user, project, local 설정(CLAUDE.md, `.claude/` 스킬·에이전트·명령, 훅)을 Claude Code CLI처럼 읽음. 끄려면 `[]`. 관리형 정책 설정, `~/.claude.json`, auto memory, claude.ai MCP 커넥터는 이 옵션과 무관하게 읽힐 수 있음(멀티 테넌트는 `settingSources: []` + `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`). (claude-code-features)
- 권한 모드 생략 시: settings의 `permissions.defaultMode`, 없으면 내장 기본값(auto 모드일 수 있음). TS SDK v0.3.286 이전에는 생략 = default. 넓은 allow 규칙에 의존하면 `default`를 명시. (permissions)

### 첫 에이전트 (quickstart)
- Python: `from claude_agent_sdk import query, ClaudeAgentOptions, AssistantMessage, ResultMessage`; `async for message in query(prompt=..., options=ClaudeAgentOptions(allowed_tools=[...], permission_mode="acceptEdits"))`.
- TS: `import { query } from "@anthropic-ai/claude-agent-sdk"`; `for await (const message of query({prompt, options:{allowedTools, permissionMode}}))`; assistant 메시지는 `message.message.content`, 결과는 `message.type === "result"`.
- `query()`는 호출마다 새 세션. 이어 가려면 `continue_conversation`/`resume`.
- 결과 메시지: `ResultMessage.subtype` = `success`, `error_during_execution`, `error_max_turns`, `error_max_budget_usd`, `error_max_structured_output_retries`; `total_cost_usd`, `num_turns`, `session_id`, `result`, `model_usage`(비용 계산에 권장). 단발 `query()`는 에러 결과를 낸 뒤 예외를 던지므로 try/except로 감싼다. (python 레퍼런스, subagents/sessions 예제)

### 도구·권한
- `allowed_tools`는 자동 승인 목록이지 **제한이 아님**. 목록에 없는 도구도 쓸 수 있고 승인이 필요하면 권한 모드로 넘어감. 도구를 아예 없애려면 `disallowed_tools=["Bash"]`(이름만) 또는 `tools=[...]`(내장 도구 집합 지정, `[]`이면 내장 도구 모두 제거, MCP 도구는 영향 없음). (permissions, custom-tools)
- `disallowed_tools=["Bash(rm *)"]` 같은 범위 규칙은 `bypassPermissions`에서도 거부. (python 레퍼런스, permissions)
- 평가 순서: 훅 -> deny 규칙 -> ask 규칙 -> 권한 모드 -> allow 규칙 -> `canUseTool` 콜백. (permissions)
- 모드: `default`, `dontAsk`(승인 필요한 호출은 거부, 콜백 호출 안 함), `acceptEdits`, `bypassPermissions`, `plan`, `auto`. (permissions)
- `bypassPermissions`: Linux/macOS에서 root나 sudo로는 샌드박스 밖에서 시작 거부. `allowed_tools`는 이 모드를 제한하지 않음. 서브에이전트는 부모가 bypass일 때만 bypass를 상속. (permissions)
- 잠긴 에이전트 패턴: `allowedTools: ["Read","Glob","Grep"]` + `permissionMode: "dontAsk"`. (permissions)
- 훅: `PreToolUse`에서 `hookSpecificOutput.permissionDecision: "deny"`와 `permissionDecisionReason`을 반환하면 차단. `{}` 반환 = 허용. 우선순위 deny > defer > ask > allow. Python 훅 이벤트는 PreToolUse, PostToolUse, PostToolUseFailure, UserPromptSubmit, Stop, SubagentStart/Stop, PreCompact, PermissionRequest, Notification만. SessionStart/End는 TS 전용. (hooks)
- 훅 콜백 시그니처(Python): `async def f(input_data, tool_use_id, context)`; 등록은 `hooks={"PreToolUse":[HookMatcher(matcher="Bash", hooks=[f])]}`. 매처는 도구 이름만 매칭(파일 경로는 콜백 안에서 확인). (hooks)

### 사용자 정의 도구
- Python: `@tool(name, description, input_schema)` + `create_sdk_mcp_server(name=, version=, tools=[...])`; TS: `tool(name, desc, zodShape, handler, {annotations})` + `createSdkMcpServer({name, version, tools})`. 서버는 **같은 프로세스 안**에서 동작. (custom-tools)
- 등록: `mcp_servers={"서버키": server}`, 도구 이름 `mcp__{서버키}__{도구}`, `allowed_tools`에 넣거나 `mcp__서버__*`. (custom-tools)
- 오류: 핸들러가 던진 예외는 오류 결과로 변환되어 루프가 계속됨. 직접 문구를 주려면 `is_error: True`(Python) / `isError: true`(TS). (custom-tools)
- 주의: Python `@tool`은 `content`와 `is_error`만 전달(`structuredContent` 불가). `readOnlyHint: true`이면 읽기 전용 도구끼리 병렬 호출 가능. 툴 서치가 기본으로 켜져 SDK MCP 도구는 지연 로드. (custom-tools)

### 서브에이전트
- `agents={"이름": AgentDefinition(description, prompt, tools, model, ...)}`; 부모의 `allowed_tools`에 `"Agent"`가 있어야 호출(스트림에서는 `Agent`, system:init 도구 목록에서는 `Task`로 보임).
- `AgentDefinition` 필드: description, prompt, tools, disallowedTools, model('sonnet','opus','haiku','fable','inherit' 또는 전체 ID), skills, memory, mcpServers, initialPrompt, maxTurns, background, effort, permissionMode. **Python 필드명 중 일부는 camelCase 그대로**(`disallowedTools`, `maxTurns`, `permissionMode`, `mcpServers`). (subagents) 설치본에서 `dataclasses.fields`로 확인함.
- 서브에이전트는 새 컨텍스트로 시작하고 부모에게는 최종 메시지만 돌아옴. 부모 대화·도구 결과·시스템 프롬프트는 못 봄.
- 서브에이전트가 또 서브에이전트를 만들 수 있음. 제한: `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`(기본 3), `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`(기본 20), `max_budget_usd`(서브에이전트 요청 포함해 집계; 한도 도달 시 새 서브에이전트 생성 거부 + 쿼리 종료). TS의 `env`는 하위 프로세스 환경을 **대체**하므로 `...process.env`를 펼치고, Python은 병합. (subagents; v0.3.219/v0.2.127 이상)
- Opus 5는 서브에이전트에 위임을 더 자주 함 -> 한도 설정이 중요. (subagents)
- 대규모(수십~수백 에이전트)는 TS SDK의 `Workflow` 도구(v0.3.149+, `allowedTools`에 `Workflow`). (subagents; 본문에서는 한 줄만)

### 세션
- 세션 = 프롬프트, 도구 호출·결과, 응답을 담은 대화 기록. 디스크에 자동 저장. **대화만 저장하고 파일 시스템은 저장하지 않음**(파일은 file checkpointing). (sessions)
- 같은 프로세스 다턴: Python `ClaudeSDKClient`(`async with`, `client.query()`, `client.receive_response()`), TS `continue: true`. 가장 최근 세션 이어가기: `continue_conversation=True`. 특정 세션: `resume=session_id`. 분기: `fork_session=True`(+`resume`). (sessions)
- `session_id`는 `ResultMessage.session_id`에서. (sessions)
- 다른 호스트에서 이어가려면 `SessionStore` 어댑터 또는 파일 이동. (sessions, hosting)
- `ClaudeSDKClient` 반복 중 `break`로 일찍 나오면 asyncio 정리 문제가 생길 수 있음. (python 레퍼런스)

### 호스팅·비용
- 자체 호스팅: 장기 실행 프로세스. 출발점 1 GiB RAM, 5 GiB 디스크, CPU 1개/에이전트. 아웃바운드 HTTPS `api.anthropic.com`. 컨테이너 샌드박스 권장. (hosting)
- 문서 문장: "Anthropic 토큰 비용이 컨테이너 비용보다 대개 한 자릿수 이상 큼. 최소 컨테이너는 시간당 약 $0.05, 긴 에이전트 세션 하나는 토큰으로 수 달러를 쓸 수 있음." (hosting)
- `max_budget_usd`는 **클라이언트 쪽 비용 추정**이 한도에 닿으면 중단, 추정치가 한도를 넘을 수 있어 여유를 둔다. `max_turns`는 도구 왕복 상한. 세션 자체 타임아웃은 없음. (python 레퍼런스, hosting)
- 플랜 포함 월 API 크레딧(Max/Team)은 Agent SDK에 쓸 수 있음(사이트 C2 본문 근거).
- Agent SDK 자체 요금제는 문서에서 별도로 확인하지 못함. 호출한 모델의 API 토큰 요금이 청구된다고 이해(위 hosting 문장). 단정은 피하고 "공식 문서 기준 토큰 비용이 대부분"으로 표현.
- 모델 ID/가격: C16과 일치(Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Haiku 5.5 $0.10/$0.50~).

## 확인 못 한 것 / 주의
- 실제 API 호출은 하지 않음(키 없음). 코드는 문법과 SDK 타입(설치본 import, dataclass 필드, tsc)만 검증.
- Python 레퍼런스 페이지의 뒷부분(100,000자 이후: HookMatcher 상세 등)은 읽지 못함 -> hooks 가이드 예제로 대체.
- `model="claude-sonnet-5-5"` 같은 전체 모델 ID를 Agent SDK 옵션에 쓸 수 있는지: `AgentDefinition.model` 문서에 "전체 모델 ID" 허용이 명시됨. `ClaudeAgentOptions.model`은 `str | None`으로만 확인(전체 ID 허용은 일반적이나 실행 확인은 못 함).
- 번들 CLI 버전과 SDK 최신 사이 신기능(예: `Workflow` 도구) 정확한 가용성은 변할 수 있음.
- `permission_mode="dontAsk"`의 Python Literal 지원은 공식 레퍼런스에 명시(PermissionMode 목록). 실행 확인은 못 함.
