# 조사 노트 — coding 41: Claude Code에 MCP 서버 연결하기

조사일: 2026-11-02 / 조사: V4. code.claude.com/docs 페이지를 기본 옵션 `curl -sS -L`로 한 페이지씩 받아(HTML, 헤더·UA 변경 없음) 텍스트로 변환해 읽음.

## 확인한 공식 URL과 사실
### https://code.claude.com/docs/en/mcp (HTTP 200, 본문 전체 중 설치·범위·인증·예제·JSON·Desktop 가져오기·출력 한도·도구 승인·관리형 안내 절을 읽음)
- 원격 HTTP: `claude mcp add --transport http <name> <url>`, "recommended option". 토큰은 `--header "Authorization: Bearer ..."`. `streamable-http`는 `http`의 별칭. `url`만 있고 `type`이 없는 JSON 항목은 설정 오류(type 없으면 stdio로 읽음).
- SSE는 deprecated. HTTP로 추가하면 HTTP를 먼저 시도하고 SSE로 전환(v2.1.265 이상).
- stdio: `claude mcp add [options] <name> -- <command> [args...]`. `--`가 Claude 옵션과 서버 명령을 구분. `--env`는 여러 KEY=value를 받고, 서버 이름이 `--env` 바로 뒤에 오면 안 됨. 종료 시 macOS/Linux는 SIGINT, 100ms 후 SIGTERM, 400ms 후 SIGKILL.
- WebSocket: `type: "ws"`, `.mcp.json`/`add-json`으로만, `--transport`는 ws 불가, OAuth 미지원(헤더 인증만).
- 관리: `claude mcp list/get/remove`, `/mcp`. 원격 서버 삭제 시 OAuth 토큰·클라이언트 등록 삭제, 인증 서버 쪽 취소는 안 함(`claude mcp logout <name>` 먼저).
- 상태: ✔ Connected, ! Needs authentication, ✘ Failed to connect, ⏸ Pending approval, ✘ Rejected, ⊘ Disabled for this project, ✘ Blocked by enterprise managed policy.
- 범위 표: Local(기본, 현재 프로젝트만, 공유 안 됨, `~/.claude.json`), Project(`.mcp.json`, 버전 관리로 공유), User(`~/.claude.json`, 모든 프로젝트). MCP의 local은 `.claude/settings.local.json`과 다름. 우선순위: local > project > user > 플러그인 > claude.ai 커넥터, 항목 전체를 쓰고 필드 병합 없음.
- 프로젝트 범위 서버는 대화형에서 승인 프롬프트(`claude mcp reset-project-choices`로 초기화). `claude -p`, Agent SDK, 일부 클라우드 세션은 묻지 않고 로드 -> `disabledMcpjsonServers`, `--setting-sources`, `--strict-mcp-config`(v2.1.246 이상 승인 건너뜀 관련).
- `.mcp.json`의 `${VAR}`, `${VAR:-default}` 확장. 설정 안 된 변수는 경고.
- 보안 문구: "Verify you trust each server before connecting it. Servers that fetch external content can expose you to prompt injection risk."
- OAuth: `/mcp`에서 인증, `claude mcp login/logout <name>`, 토큰은 안전하게 저장·자동 갱신, `claude -p`는 `/mcp` 패널이 없어 먼저 대화형으로 로그인. 동적 클라이언트 등록 미지원 서버는 사전 등록 자격 증명 필요(미설명).
- 예제: GitHub는 fine-grained PAT를 헤더로(`https://api.githubcopilot.com/mcp/`), PostgreSQL은 `@bytebase/dbhub` + 읽기 전용 계정 권고. `claude mcp add` 는 자격 증명을 검증하지 않음.
- `add-json`, `add-from-claude-desktop`(macOS와 WSL만).
- 출력: 10,000토큰 초과 경고, 기본 최대 25,000, `MAX_MCP_OUTPUT_TOKENS`, 큰 결과는 파일로 저장.
- 서버 제작자용 `_meta["anthropic/requiresUserInteraction"]`로 도구별 매 호출 승인 가능(튜토리얼 본문에는 미포함).
- 관리형 MCP(`managed-mcp.json`, `managedMcpServers`, `allowedMcpServers`, `deniedMcpServers`)는 별도 페이지로 안내.
### https://code.claude.com/docs/en/mcp-quickstart (HTTP 200, 중간 이후 읽음: 상태 표, claude-code-docs 서버, 설정 파일 위치, 범위 변경, Playwright, Sentry, .mcp.json, 다른 화면)
- 빠른 시작 예: `claude mcp add --transport http claude-code-docs https://code.claude.com/docs/mcp`, 프롬프트 "Use the claude-code-docs server to look up what MCP_TIMEOUT does", 삭제 `claude mcp remove claude-code-docs`.
- Playwright: `claude mcp add playwright -- npx -y @playwright/mcp@latest`, Node.js 18 이상, 첫 확인에서 Failed to connect가 날 수 있음.
- Sentry: `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`, 추가 직후 Needs authentication은 정상.
- 연결된 서버는 도구 이름과 안내가 컨텍스트에 로드되어 공간을 차지.

## 로컬 시험
- 실행하지 않음. `claude mcp add` 등을 임시 HOME에서 시험하려 했으나 환경의 자동 권한 분류기가 외부 코드(npx) 실행으로 보고 거부해 우회하지 않음. 본문에 "실행하지 않았다"고 명시.

## 확인하지 못한 것
- 모든 명령의 실제 출력과 `/mcp` 화면 모양(문서 기준).
- 도구 검색(tool search), 채널, MCP 작업(tasks), elicitation, 리소스·프롬프트, claude.ai 커넥터 연동, 관리형 MCP 상세 절은 읽지 않았거나 본문에서 다루지 않음.
- 미리 등록한 OAuth 자격 증명, `headersHelper` 상세는 훑기만 함.
- 문서 페이지는 버전별로 바뀌며 최신 Claude Code 버전과의 일치는 확인하지 못함.
