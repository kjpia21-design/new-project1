# 커넥터(MCP) 공통 개념 (2026-10-10 조사)

## 5단계 원문 대조 (2026-10-10)
- 원문 확인: modelcontextprotocol.io intro(USB-C 비유, 오픈소스 표준, Claude·ChatGPT 예시), 2025-06-18 architecture(host-client-server, 클라이언트-서버 1:1, JSON-RPC 기반), 2025-03-26 스펙 보안 원칙(도구 호출 전 명시적 동의, annotation은 신뢰된 서버가 아니면 신뢰 금지), security_best_practices 페이지 열림.
- 원문 확인: geminicli.com/docs/tools/mcp-server — mcpServers, url/httpUrl/headers, includeTools/excludeTools(exclude 우선), `gemini mcp add`.
- 원문 확인: notion.com/help/notion-agent — All sources > MCP servers > Add MCP server, Settings > Connections > Discover.
- 원문 미확인: help.openai.com (curl 403) — ChatGPT Developer mode/플랜 조건은 검색 요약 유지. Claude 쪽(support.claude.com, code.claude.com)은 이번 담당 범위 밖.

(아래는 4단계 당시 기록)

Claude 쪽 사실은 docs/research/claude/C07-connectors.md 를 재사용. 아래는 Claude 외 도구와 MCP 일반 개념 보강. WebFetch가 외부 접속이 안 되어 WebSearch 검색 요약에 기반.

## 핵심 사실
- MCP(Model Context Protocol)는 AI 애플리케이션을 외부 시스템에 연결하는 오픈소스 표준. 공식 문서는 USB-C 포트에 비유. 연결 대상: 로컬 파일, 데이터베이스, 검색 엔진, 계산기, 전문 프롬프트 등. Claude, ChatGPT, VS Code, Cursor 등이 지원. (출처: https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)
- 구조: 호스트(LLM 앱) 안에 클라이언트가 있고 서버가 맥락과 기능을 제공. 서버가 제공하는 것: 리소스(맥락용 데이터), 프롬프트(템플릿), 도구(모델이 호출하는 함수). 메시지는 JSON-RPC 2.0. (출처: https://modelcontextprotocol.io/specification/2025-06-18/architecture)
- 보안: 호스트는 도구 호출 전에 사용자의 명시적 동의를 받아야 하고, 도구 설명·annotation은 신뢰된 서버가 아니면 신뢰하지 말아야 한다. 프로토콜이 보안 원칙을 강제하지 못하며 구현 책임. (출처: https://modelcontextprotocol.io/specification/2025-03-26 , https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices)
- Claude: 커넥터 = 내 권한 상속, 커스텀 커넥터 = 원격 MCP 서버. 절차는 C7. (출처: C07 노트)
- Claude Code: `claude mcp add --transport http notion https://mcp.notion.com/mcp`, `/mcp`로 인증. (출처: https://code.claude.com/docs/en/mcp)
- ChatGPT: Developer mode 및 MCP 앱. 전체 MCP(쓰기 포함)는 Business/Enterprise/Edu 베타, 웹 전용; Pro는 읽기/가져오기 권한으로 MCP 연결. 워크스페이스 관리자가 Permissions & Roles에서 켠다. 도움말에 "기능·UI·권한이 바뀔 수 있다" 명시. (출처: https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)
- Gemini CLI: `~/.gemini/settings.json`(또는 프로젝트 `.gemini/settings.json`)의 `mcpServers`. stdio는 command/args/env, 원격은 `url`(SSE) 또는 `httpUrl`(streamable HTTP), `headers`. includeTools/excludeTools(제외가 우선). `gemini mcp add` 명령. 변경 후 재시작. (출처: https://geminicli.com/docs/tools/mcp-server/ , https://geminicli.com/docs/reference/configuration/)
- Notion Agent: All sources > MCP servers > Add MCP server 또는 Settings > Connections > Discover로 앱 연결. (출처: https://www.notion.com/help/notion-agent 검색 요약)
- Zapier에도 MCP 관련 제품이 있다는 언급만 확인(상세 미확인).

## 시나리오 (일반 원칙, 절차는 도구별 공식 문서)
읽기 전용 브리핑, 회의 후 노트 정리(Notion/Drive), 파일 조회, 일정 조율 초안. 쓰기 도구는 승인 확인.

## 확인 못 함
- 지원 클라이언트 전체 목록, 각 도구의 최신 UI 문구, MCP 최신 스펙 버전(문서에 여러 버전 존재: 2025-03-26, 2025-06-18, 2025-11-25, 2026-07-28), Gemini 앱/Workspace에서의 MCP 지원 여부.

## 출처 목록
위 URL 전체.

## 6단계 재점검 (2026-10-10)
- 출처: learn.chatgpt.com(docs/plugins.md, docs/enterprise/apps-and-connectors.md, docs/migrate-custom-gpts.md), developers.openai.com/plugins/deploy/connect-chatgpt.md, developers.openai.com/plugins/build/mcp-server.md. help.openai.com은 여전히 403.
- 확인: ChatGPT는 "앱·커넥터"를 플러그인(Plugins)으로 통합. 플러그인은 스킬과 MCP 서버를 포함하고 웹·데스크톱·모바일의 Chat/Work에서 쓰며 IDE 확장은 미지원. 관리자 문서는 "app"과 "MCP server"를 같은 뜻으로 사용.
- 확인: 커스텀 MCP 서버 연결 절차 = chatgpt.com/plugins > + > Add custom MCP server > 이름·설명 > Connection(공개 HTTPS URL의 /mcp 또는 Secure MCP Tunnel) > 인증 설정 > 위험 경고 "I understand and want to continue" > Create as a plugin. "Account and workspace policies apply to adding and using custom MCP servers." 설치 후 새 대화에서 @로 플러그인 선택.
- 확인: 관리 권한 Upload plugins / Upload plugins with custom MCP servers, Share plugins, Publish plugins to workspace, Use plugins; Workspace apps의 Action control·App permissions. 도구 주석 readOnlyHint/destructiveHint, "쓰기 작업은 확인을 요구" 권고.
- 못 찾음: 예전 "Developer mode" 명칭의 현재 존재 여부, 커스텀 MCP 서버 연결이 가능한 요금제 목록(문서에 플랜별 표 없음). 기존 본문의 "Business·Enterprise·Edu 베타, 웹 전용, Pro 읽기 전용" 문장은 검색 요약 기반이라 현재 문서와 맞지 않아 삭제.
- 본문 변경: "확인 중" caution Aside를 지우고 note Aside(이름 변경 안내)로 교체, 비교표 ChatGPT 행, 용어표, 단계 1, 문제 해결 문장 수정. 채워진 빈칸 4, 남은 빈칸 1(플랜 조건).

## 2026-10-12 재확인
- 재확인: modelcontextprotocol.io(intro 2026-07-28, architecture 2025-06-18, spec 2025-03-26, security_best_practices), geminicli.com mcp-server, notion-agent, support.claude.com 2건, code.claude.com/docs/en/mcp, learn.chatgpt.com(plugins, enterprise/apps-and-connectors, migrate-custom-gpts), developers.openai.com(connect-chatgpt, mcp-server). help.openai.com은 사용하지 않음.
- 변경: (1) "도구 설명은 신뢰된 서버가 아니면 믿지 말라"는 문장은 security_best_practices 페이지가 아니라 2025-03-26 규격의 Tool Safety 원칙에 있음 → 출처 표기 수정. (2) Claude 커넥터 연결 위치를 현재 도움말 표기(Customize > Connectors)로, 승인 대상은 현재 도움말 기준 Gmail 전송·답장·전달로 수정. (3) 관리자 권한 "Upload plugins with custom MCP servers"는 현재 apps-and-connectors 문서에서 확인되지 않음(Permissions & roles, Workspace apps, Action control, App permissions만 언급) → 본문 표현 완화.
- 변동 없음: ChatGPT 커스텀 MCP 서버 절차(chatgpt.com/plugins > + > Add custom MCP server, /mcp, Secure MCP Tunnel, "I understand and want to continue", Create as a plugin), 플러그인 사용처(웹·데스크톱·모바일 Chat/Work, Codex; IDE 확장 미지원), Gemini CLI 설정, Notion 경로.
- 새로 알게 됨(미반영): migrate-custom-gpts — 커스텀 GPT가 플러그인으로 전환 중, 커스텀 액션은 이전되지 않음. 최신 MCP 스펙은 2026-07-28(보안 문서는 이 버전 기준: 프로토콜 수준 세션 없음). 플랜별 커스텀 MCP 서버 지원 목록은 여전히 문서에 없음.
