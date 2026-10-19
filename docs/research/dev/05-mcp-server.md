# D3-05. MCP 서버 직접 만들어 Claude에 연결하기 (조사 노트)

확인일 2026-10-11. 이 노트의 "직접 실행" 표시는 이 컨테이너에서 실제로 돌려 본 것이다.

## 출처 읽기 상태
- modelcontextprotocol.io 도메인은 WebFetch와 curl 모두 호스트를 찾지 못함(ENOTFOUND). 그래서 build-server, security_best_practices는 이번에 직접 읽지 못했다. 보안 원칙은 docs/research/automation/20-connectors-mcp.md(이전 단계에서 원문 확인)의 요약과, 아래 SDK 저장소·Claude 공식 문서로 대신했다.
- 읽은 것: python-sdk README(raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md), typescript-sdk README와 docs/get-started/first-server.md(main), py.sdk.modelcontextprotocol.io/get-started/ (소개 페이지만, 하위 페이지는 404), code.claude.com/docs/en/mcp (앞 100,000자), support.claude.com 커스텀 커넥터 문서.

## 핵심 사실
### SDK (드리프트 주의)
- Python SDK `mcp`는 현재 v2 계열. `pip install "mcp[cli]"`로 설치하면 2.3.0이 깔림(직접 실행). Python 3.10 이상. 서버 클래스는 `from mcp.server import MCPServer`(예전 튜토리얼의 `FastMCP`가 아님). README 예제: `mcp = MCPServer("Demo")`, `@mcp.tool()`. 출처: python-sdk README.
- `MCPServer.run(transport="stdio"|"sse"|"streamable-http", **kwargs)`. 기본 stdio. streamable-http는 host="127.0.0.1", port=8000, 경로 `/mcp`가 기본(설치된 패키지 시그니처에서 확인, 직접 실행).
- `@mcp.tool(annotations=ToolAnnotations(readOnlyHint=True))`: `from mcp.types import ToolAnnotations`(직접 실행).
- 오류: 예상한 실패는 `from mcp.server.mcpserver.exceptions import ToolError`를 raise하면 메시지가 모델에게 전달(is_error=True). 그 외 예외(ValueError 포함)는 "Error executing tool <이름>"만 전달되고 원문은 서버 로그에만 남는다(패키지 docstring과 직접 실행으로 확인).
- 반환 타입이 `list[dict]`면 structured_content가 `{'result': [...]}`로 나온다(직접 실행).
- 인-메모리 테스트: `from mcp import Client; async with Client(mcp) as c: await c.call_tool(...)` (py.sdk 소개 페이지, 직접 실행).
- 개발 검사: `uv run mcp dev server.py` (MCP Inspector). README 기준, 직접 실행은 안 함.
- TypeScript SDK는 main이 v2: 패키지 `@modelcontextprotocol/server`, `McpServer`, `registerTool(name, {description, inputSchema: z.object(...)}, handler)`, `serveStdio(createServer)` from `@modelcontextprotocol/server/stdio`, zod v4(`zod/v4`). Node 20+, ESM(`type=module`). v1(`@modelcontextprotocol/sdk`)은 v1.x 브랜치에서 유지(릴리스 2026-07-27 이후 최소 6개월 버그·보안 수정). v2는 2026-07-28 MCP 스펙 구현. 출처: typescript-sdk README, first-server.md. 직접 실행: tsx로 stdio 서버를 띄워 initialize와 tools/call 응답 확인(isError 예제 포함).
- stdio 서버는 stdout이 프로토콜 채널이므로 로그는 stderr로(TS first-server.md의 경고: `console.log` 하나가 JSON-RPC 스트림을 깬다). Python 예제도 로그를 stderr로.

### Claude Code 연결 (code.claude.com/docs/en/mcp)
- 원격 HTTP: `claude mcp add --transport http <name> <url>`; 로컬 stdio: `claude mcp add [options] <name> -- <command> [args...]`; `--env KEY=value`; `--header "Authorization: Bearer ..."`. SSE는 deprecated.
- 범위: local(기본, `~/.claude.json`), project(`.mcp.json`, git 공유), user. 우선순위 local > project > user > plugin > claude.ai 커넥터.
- `.mcp.json`에서 `${VAR}`, `${VAR:-default}` 확장 가능(command, args, env, url, headers).
- 관리: `claude mcp list`/`get`/`remove`, 세션에서 `/mcp`. 상태 표시: Connected / Needs authentication / Failed to connect / Pending approval.
- 직접 실행: stdio 서버를 `--scope project`로 추가하면 `.mcp.json`이 생기고 `claude mcp list`가 "Pending approval (run `claude` to approve)"로 표시. local 범위로 추가하면 "Connected". HTTP 서버(`--transport http http://127.0.0.1:8000/mcp`)도 Connected, 서버를 끄면 "Failed to connect — ECONNREFUSED". Claude Code 2.1.296.
- 보안(공식): 서버 신뢰 확인, 외부 콘텐츠를 가져오는 서버는 프롬프트 인젝션 위험. project `.mcp.json` 서버는 대화형에서 승인 질문, 헤드리스(`claude -p`)·Agent SDK·클라우드 세션은 묻지 않고 로드. `headersHelper`는 임의 셸 명령을 실행.
- 출력 한도: 도구 출력 10,000토큰 초과 시 경고, `MAX_MCP_OUTPUT_TOKENS` 기본 25,000, 텍스트 결과 50,000자 초과는 파일로 저장 후 참조, HTTP/SSE 응답 본문 16MB 초과 시 실패. 서버가 도구별로 `_meta["anthropic/maxResultSizeChars"]`로 최대 500,000자까지 올릴 수 있음.
- 도구 이름 규칙은 권한 규칙·훅 매처에서 `mcp__<서버>__<도구>` 형태(플러그인 번들 서버는 `mcp__plugin_<플러그인>_<서버>__<도구>`).

### Claude 앱(claude.ai·Desktop·Cowork) 커스텀 커넥터 (support.claude.com 11175166)
- 커스텀 커넥터 = 원격 MCP 서버. Free/Pro/Max/Team/Enterprise 모두 가능, Free는 1개.
- Pro/Max: Customize > Connectors > + Add > Add custom connector > 이름과 서버 URL > Continue > 인증 확인(Sign in now / Sign in when needed / No sign in) > OAuth client > Request headers(고정 자격 증명) > Add.
- Team/Enterprise: Owner 또는 Primary Owner가 Organization settings > Connectors > Add > Custom > Web에서 추가, 구성원은 Customize > Connectors에서 Connect. Enterprise는 Libraries 관리 권한이 있는 커스텀 역할도 추가 가능.
- 대화에서는 + > Connectors에서 켜고 끔. 수정은 제거 후 다시 추가.
- 인증: OAuth(세 가지 클라이언트 옵션), 고정 헤더 자격 증명, 인증 없음.
- 연결은 사용자 기기가 아니라 Anthropic 클라우드에서 나가므로 서버가 공용 인터넷에서 닿아야 함. 사설망이면 Anthropic IP 대역 허용(platform.claude.com/docs/en/api/ip-addresses). VPN·사설망 뒤 서버는 연결 불가.
- `claude_desktop_config.json`의 로컬 MCP 서버는 Cowork·claude.ai에서 쓸 수 없음. 고급 리서치는 로컬 MCP 서버 도구를 호출할 수 없음.
- 보안(공식): Anthropic이 검증하지 않음, 신뢰하는 서버만, 프롬프트 인젝션, 서버 개발자가 도구 동작을 바꿀 수 있음, "Allow always" 지양, 필요 없는 도구 끄기, 리서치 중에는 승인 없이 도구 호출 가능하므로 쓰기 도구 끄기, 공유 자격 증명이면 모든 사용자가 그 권한을 가짐.
- 콜백 URL 목록, 전송 방식 세부는 문서에 없음. 공식 디렉터리 제출은 다른 절차(claude.com/docs/directory/publish).

## 직접 검증한 코드
- Python 서버(`server.py`, 도구 2개, readOnlyHint, ToolError): py_compile 통과, 인-메모리 Client로 list_tools/call_tool/오류 경로 확인, stdio JSON-RPC initialize 응답 확인, streamable-http로 기동해 Client(URL) 호출 성공.
- TS 서버: tsx 실행, initialize·tools/call 정상.
- 작업 폴더: scratchpad/d3/ (가상환경 v/, server.py, ts/).

## 확인 못 함
- modelcontextprotocol.io 원문(build-server, security_best_practices, 최신 스펙 페이지) 직접 재확인.
- Python SDK의 OAuth 토큰 검증(`auth`/`token_verifier`) 사용법. 생성자 인자로 존재하는 것만 확인.
- Claude 앱에서 실제 커스텀 커넥터 연결 화면(계정 필요).
- 공개 HTTPS 배포 방법(호스팅은 사용자 환경에 따라 다름).

## 2026-10-12 재확인
- modelcontextprotocol.io가 이번에는 `.md` 경로로 읽힘(security_best_practices.md 직접 읽음). 기존 '직접 읽지 못함' 해소. 새로 반영: 토큰은 자기에게 발급된 것만 수락(MUST NOT accept tokens not issued for the server), token passthrough 금지, 스코프 최소화, 로컬 서버는 stdio 또는 인증 토큰/제한된 IPC. 본문 보안 체크리스트에 2행 반영.
- github.com 저장소 페이지는 curl 403(raw README로 대체 확인): Python SDK README는 `from mcp.server import MCPServer`, `uv add "mcp[cli]"`; TS README main은 v2(`@modelcontextprotocol/server`), first-server.md는 Node 20+, zod/v4, serveStdio — 본문과 일치. PyPI mcp 2.3.0(>=3.10) 일치.

## 2026-10-19 재검증
- 변경: Python SDK 요구 버전. python-sdk README(main)와 py.sdk.modelcontextprotocol.io가 "Python 3.11+", pyproject.toml도 `requires-python >=3.11`. (PyPI mcp 2.3.0 메타데이터는 아직 `>=3.10`.) 본문의 "Python 3.10 이상"을 "3.11 이상"으로 수정.
- 확인 유지: MCPServer/`from mcp.server import MCPServer`, TS SDK v2(`@modelcontextprotocol/server`, Node 20+), `claude mcp add` 문법·범위, 커스텀 커넥터 경로(Pro/Max: Customize > Connectors; Team/Enterprise: Organization settings > Connectors), Free 1개 제한, MCP 보안 문서(token passthrough 금지).
