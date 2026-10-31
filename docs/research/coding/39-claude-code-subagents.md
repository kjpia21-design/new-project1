# 조사 노트 — coding 39: 나만의 Claude Code 서브에이전트 만들기

조사일: 2026-11-01 / 조사: Q2. https://code.claude.com/docs/en/sub-agents (`.md` 주소) 한 페이지만 읽음.

## 확인한 사실
- 서브에이전트: 자기 컨텍스트 창, 시스템 프롬프트, 도구 접근, 독립 권한. 요청은 메인 대화와 같은 사용량 한도에 합산.
- 파일: YAML 프런트매터 + 마크다운 본문(시스템 프롬프트). 필수 `name`, `description`. 서브에이전트는 본문 프롬프트와 기본 환경 정보만 받음.
- 위치/우선순위: 관리 설정(1) > `--agents`(2) > `.claude/agents/`(3) > `~/.claude/agents/`(4) > 플러그인 `agents/`(5). 재귀 스캔, 하위 폴더 가능, 식별은 name만.
- 감시: 파일 추가·수정은 몇 초 내 반영. 세션 시작 시 없던 agents 디렉터리의 첫 파일은 재시작 필요.
- 프런트매터: name, description, tools, disallowedTools, model, permissionMode, maxTurns, autoCompactWindow, skills, mcpServers, hooks, memory, background, omitClaudeMd, effort, isolation, color, initialPrompt, experimental. 모르는 필드는 오류 없이 무시. 플러그인 서브에이전트는 hooks/mcpServers/permissionMode 무시.
- 건너뛰는 파일: name 없음, 첫 줄이 `---` 아님, name이 `-` 시작/`:` 포함/256자 초과, description 없음, YAML 오류. 확인: `claude --debug`(v2.1.296+ "does not recognize or apply"), `claude plugin validate <dir>`(v2.1.233+).
- 모델: sonnet/opus/haiku/fable/전체 ID/inherit. 결정 순서 4단계(호출별 → 프런트매터 → CLAUDE_CODE_SUBAGENT_MODEL → 메인 모델).
- 도구: tools(허용)·disallowedTools(차단, 먼저 적용). 지정자 있는 disallowedTools 항목도 도구 전체 제거. MCP `mcp__서버__*`.
- 호출: 자연어, @멘션(`@"name (agent)"`, `@agent-name`), `--agent <name>`/설정 `agent`(CLI 우선).
- `/agents`: 현재는 안내만 출력, v2.1.197 이하는 대화형 마법사.
- 기본: Claude가 띄운 서브에이전트는 백그라운드. 동시 20개(`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`), 중첩 기본 3층(`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`). description 합계 15,000토큰 초과 시 경고.
- 메인 대화 vs 서브에이전트 선택 기준, 예제(code-reviewer 등)는 공식 문서 참고.

## 직접 해 본 것 (Claude Code 2.1.316, 임시 폴더)
- 본문의 두 파일(doc-reviewer, test-runner)을 `claude plugin validate .claude/agents`로 검증: "Validation passed".
- `claude -p "Use the doc-reviewer subagent to review README.md"`: 세 묶음(Must fix/Should fix/Nice to have)으로 답, 파일 수정 없음. 위임 줄(`doc-reviewer(...)`) 자체는 `-p` 출력에서 확인하지 못함.

## 확인하지 못한 것
- test-runner 실제 실행, `--agent`/`agent` 설정, @멘션(대화형 기능), `--agents` JSON, memory/hooks/skills 필드 동작.
- 서브에이전트 사용량이 플랜별로 얼마나 소모되는지(문서는 "같은 한도에 합산"만).
