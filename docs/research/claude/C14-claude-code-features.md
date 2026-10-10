# Claude Code 핵심 기능 (CLAUDE.md, 슬래시 명령, 훅, 서브에이전트, MCP, 권한, 플랜 모드)

## 핵심 사실
### CLAUDE.md / 메모리
- 세션은 매번 새 컨텍스트로 시작한다. 지식을 이어주는 장치는 두 가지: 내가 쓰는 CLAUDE.md(또는 AGENTS.md)와 Claude가 스스로 쓰는 auto memory. 둘 다 "강제 설정이 아니라 컨텍스트"로 취급되며, 확실한 차단은 PreToolUse 훅으로 한다. (출처: https://code.claude.com/docs/en/memory)
- CLAUDE.md 위치: 관리자 정책(macOS `/Library/Application Support/ClaudeCode/CLAUDE.md`, Linux `/etc/claude-code/CLAUDE.md`), 사용자 `~/.claude/CLAUDE.md`, 프로젝트 `./CLAUDE.md` 또는 `./.claude/CLAUDE.md`, 개인 프로젝트용 `./CLAUDE.local.md`(.gitignore 권장). 상위 디렉터리의 파일은 시작 시 로드되고, 하위 디렉터리 파일은 해당 폴더 파일을 읽을 때 로드된다. 서로 덮어쓰지 않고 이어붙여진다. (출처: 동일)
- `/init`이 코드베이스를 분석해 시작용 CLAUDE.md를 생성(이미 있으면 개선안 제안). 파일당 200줄 미만 권장. `@path/to/file` 구문으로 다른 파일 가져오기, `.claude/rules/`로 경로별 규칙. (출처: 동일)
- Auto memory: 기본 켜짐(로컬 세션). 시작 시 첫 200줄 또는 25KB 로드. `/memory`에서 토글(`autoMemoryEnabled`). (출처: 동일)
### 슬래시 명령 (출처: https://code.claude.com/docs/en/commands)
- `/init`(CLAUDE.md 생성), `/model`(모델 전환), `/effort`, `/clear`(새 대화), `/compact [지시]`(요약으로 컨텍스트 확보), `/context`(컨텍스트 사용량), `/memory`, `/agents`, `/mcp`, `/hooks`, `/permissions`, `/config`, `/resume`, `/rewind`(체크포인트로 되돌리기), `/plan`, `/usage`(= `/cost`), `/usage-credits`, `/status`, `/skills`, `/loop`, `/schedule`(루틴), `/teleport`, `/desktop`, `/web-setup`, `/autofix-pr`, `/review`(= `/code-review`), `/security-review`, `/doctor`, `/login`, `/help`.
- 커스텀 명령은 스킬로 통합됨: `.claude/commands/deploy.md`와 `.claude/skills/deploy/SKILL.md` 모두 `/deploy`를 만든다. (출처: https://code.claude.com/docs/en/skills)
### 훅 (출처: https://code.claude.com/docs/en/hooks-guide)
- 훅은 Claude Code 수명주기의 특정 시점에 자동 실행되는 사용자 정의 셸 명령으로, LLM의 선택에 맡기지 않고 "항상" 실행되게 한다. 판단이 필요하면 프롬프트 기반/에이전트 기반 훅도 가능.
- 설정은 settings 파일(`~/.claude/settings.json`, `.claude/settings.json`)의 `hooks` 블록. 이벤트 예: `Notification`, `PreToolUse`, `PostToolUse`, `SessionStart`. `/hooks`로 확인.
- 예(저장 후 자동 포맷): `PostToolUse` + matcher `Edit|Write` + command `jq -r '.tool_input.file_path' | xargs npx prettier --write`.
- 보호 파일 차단 예: PreToolUse 훅 스크립트가 stderr로 이유를 출력하고 `exit 2`로 차단.
### 서브에이전트 (출처: https://code.claude.com/docs/en/sub-agents)
- 서브에이전트 = 자체 컨텍스트 창, 맞춤 시스템 프롬프트, 도구 권한을 가진 전문 보조 에이전트. 장황한 출력이 메인 대화를 오염시키지 않고 요약만 돌려준다.
- 정의 파일: Markdown + YAML frontmatter. 위치 우선순위: 관리 설정 > `--agents` 플래그 > `.claude/agents/` > `~/.claude/agents/` > 플러그인. 필수 필드는 `name`, `description`뿐.
- `model` 필드 값: `sonnet`, `opus`, `haiku`, `fable`, 전체 모델 ID(예: `claude-opus-5-5`), `inherit`. `effort` 필드: low/medium/high/xhigh/max. `tools`, `permissionMode`, `memory`, `isolation: worktree` 등도 있음.
- 내장: Explore(읽기 전용 탐색), Plan(플랜 모드용), General-purpose, statusline-setup(Sonnet), claude-code-guide(Haiku).
- 예시 정의: `name: code-reviewer`, `description: Reviews code for quality and best practices`, `tools: Read, Glob, Grep`, `model: sonnet`.
- `/agents`는 현재 안내 문구만 출력(v2.1.197 이하는 대화형 마법사). 보통 Claude에게 만들어 달라고 하거나 파일을 직접 작성.
### MCP (출처: https://code.claude.com/docs/en/mcp)
- MCP = 외부 도구·데이터 소스를 연결하는 개방형 표준. 추가: `claude mcp add --transport http notion https://mcp.notion.com/mcp`; stdio는 `claude mcp add --transport stdio airtable --env KEY=... -- npx -y airtable-mcp-server`. SSE는 deprecated.
- 범위: local(기본, `~/.claude.json`), project(`.mcp.json`, 팀 공유), user(모든 프로젝트). `/mcp`로 상태 확인·OAuth 인증. claude.ai 계정으로 로그인하면 claude.ai/customize/connectors의 커넥터가 `/mcp`에 자동 표시(Team/Enterprise는 관리자만 추가).
- 신뢰할 수 있는 서버만 연결(프롬프트 인젝션 위험).
### 권한 / 플랜 모드 (출처: https://code.claude.com/docs/en/permission-modes)
- 모드: `default`(Manual; 읽기만 자동), `acceptEdits`(파일 편집·기본 파일 명령 자동), `plan`(읽기만; 탐색 후 계획 제안, 승인 전 편집 차단), `auto`(분류기가 백그라운드로 안전 검사), `dontAsk`(사전 승인 도구만; CI용), `bypassPermissions`(격리 컨테이너/VM 전용).
- 전환: CLI에서 Shift+Tab, 시작 시 `claude --permission-mode plan`, 세션 중 `/plan`. v2.1.283 이상에서는 auto가 터미널·VS Code 대화형 세션의 내장 시작 모드.
- deny 규칙은 모든 모드(bypass 포함)에서 차단. `.env` 등 보호 경로는 auto 승인되지 않음.

## 따라하기에 쓸 수 있는 절차
1. 프로젝트 폴더에서 `claude` 실행 → `/init` → 생성된 CLAUDE.md를 200줄 미만으로 다듬기. (출처: https://code.claude.com/docs/en/memory)
2. 복잡한 작업 전 `claude --permission-mode plan` 또는 Shift+Tab으로 플랜 모드 → 계획 검토·승인 후 구현. (출처: https://code.claude.com/docs/en/permission-modes)
3. 서브에이전트 만들기: `.claude/agents/code-reviewer.md`에 frontmatter(`name`, `description`, `tools`, `model: sonnet`)와 시스템 프롬프트 작성. (출처: https://code.claude.com/docs/en/sub-agents)
4. 자동 포맷 훅: `.claude/settings.json`에 PostToolUse 훅(위 JSON) 추가 → `/hooks`로 확인. (출처: https://code.claude.com/docs/en/hooks-guide)
5. MCP 연결: `claude mcp add --transport http notion https://mcp.notion.com/mcp` → 세션에서 `/mcp` → 브라우저 인증. (출처: https://code.claude.com/docs/en/mcp)

## 확인 못 함 / 주의
- 훅 이벤트 전체 목록·JSON 스키마는 hooks 레퍼런스를 읽지 않아 일부만 기재.
- permission-modes, hooks-guide, memory, commands 페이지는 길어서 일부 구간만 확인.
- 서브에이전트 문서의 마지막 약 8천 자(영속 메모리 등)는 읽지 못함.

## 출처 목록
- [How Claude remembers your project](https://code.claude.com/docs/en/memory) — 확인일 2026-10-10
- [Commands](https://code.claude.com/docs/en/commands) — 확인일 2026-10-10
- [Hooks guide](https://code.claude.com/docs/en/hooks-guide) — 확인일 2026-10-10
- [Custom subagents](https://code.claude.com/docs/en/sub-agents) — 확인일 2026-10-10
- [MCP](https://code.claude.com/docs/en/mcp) — 확인일 2026-10-10
- [Permission modes](https://code.claude.com/docs/en/permission-modes) — 확인일 2026-10-10
- [Skills](https://code.claude.com/docs/en/skills) — 확인일 2026-10-10
