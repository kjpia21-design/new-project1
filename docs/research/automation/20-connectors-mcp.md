# 커넥터(MCP) 공통 개념 (2026-10-10 조사)

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
