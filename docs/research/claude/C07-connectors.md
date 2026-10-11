# 커넥터 (Google Workspace, Notion, MCP)

## 핵심 사실
- 커넥터 = Claude가 내 앱·서비스에 접근해 데이터를 가져오고 작업을 수행하게 하는 연결. Claude는 각 서비스에서 내 권한을 그대로 상속하므로 내가 볼 수 없는 것은 볼 수 없다. (출처: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)
- 찾는 곳: 채팅의 "+" 또는 "/" 메뉴 -> Connectors, 또는 설정 Customize > Connectors의 커넥터 디렉터리. 연결: 디렉터리에서 커넥터 선택 -> Connect/Install -> 인증 -> 권한 조정. 대화마다 "+" > Connectors에서 켜고 끈다. (출처: 동일)
- Google Workspace: Gmail(검색·읽기, 초안 작성, 전송·답장·전달, 라벨 관리; 첨부 파일 내용은 못 봄), Google Calendar(일정 조회·생성·수정·삭제, 공통 가능 시간 찾기, 참석자·RSVP), Google Drive(Docs/Sheets/Slides/PDF 등 검색·읽기, 업로드, 폴더 생성, 공유·이동·삭제, 권한 확인). Docs/Sheets/Slides 커넥터(베타)는 채팅 옆 창에서 파일을 직접 편집(Drive 커넥터와 별개). (출처: https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)
- 기본적으로 전송·답장·전달·공유·이동·삭제 전에 사용자 승인을 요청한다. Gmail·Drive·Calendar 커넥터 데이터로는 모델을 학습하지 않는다. Google이 접근을 막으면 Workspace 관리자가 API 컨트롤에서 Claude를 신뢰 앱으로 설정(약 15분 대기). (출처: 동일)
- Team/Enterprise에서는 Owner/Primary Owner가 먼저 조직에 커넥터를 켜야 하고(Organization settings > Connectors > Browse connectors > Add to your team) 이후 멤버가 개별 인증. Owner는 커넥터 도구를 Always allow / Needs approval / Blocked으로 설정할 수 있다. (출처: 11176164 문서)
- Notion: claude.com/connectors/notion에 Notion 커넥터가 있고 URL은 `https://mcp.notion.com/mcp`, 로그인 필요. Claude Code에서는 `claude mcp add --transport http notion https://mcp.notion.com/mcp` 후 `/mcp`로 OAuth 인증. MCP 도구는 연결한 사용자의 권한으로 동작. (출처: 웹 검색 결과 요약 https://claude.com/connectors/notion , https://developers.notion.com/docs/mcp ; Claude Code 명령은 https://code.claude.com/docs/en/mcp 에서 직접 확인)
- MCP와의 관계: 커스텀 커넥터는 원격 MCP 서버를 연결하는 기능이다. Customize > Connectors > Add > Custom(웹)에서 서버 URL 입력, 인증 방식(Sign in now / when needed / No sign in), 필요 시 요청 헤더. Free는 커스텀 커넥터 1개. 연결은 Anthropic 클라우드에서 나가므로 서버가 공용 인터넷에서 접근 가능해야 한다. (출처: 11176164, https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)
- 커스텀 커넥터는 Anthropic이 검증하지 않으므로 신뢰하는 서버만 연결. 프롬프트 인젝션에 주의하고 필요 없는 도구는 끈다. 고급 리서치는 커넥터 도구를 추가 승인 없이 호출할 수 있으므로 쓰기 도구는 미리 끈다. (출처: 11175166 문서)
- Claude Code와의 관계: claude.ai에 추가한 커넥터는 Claude Code에 로그인하면 `/mcp`에 자동 표시. `claude mcp add`로 로컬에 추가한 서버는 claude.ai 계정에 저장되지 않아 루틴에서 쓰려면 claude.ai에 커넥터로 추가해야 한다. (출처: https://code.claude.com/docs/en/mcp , https://code.claude.com/docs/en/routines)
- 데이터 보호: 전송 암호화, 서드파티 서비스는 자체 인프라·약관 적용(미국 밖일 수 있음). 사용하지 않는 서비스는 연결 해제 권장. (출처: 11176164 문서)

## 따라하기에 쓸 수 있는 절차
1. 채팅 입력창 "+" -> Connectors -> Google Drive/Gmail/Calendar 선택 -> Google 계정 로그인·동의. (출처: https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)
2. 대화에서 켜고 사용: "이번 주 캘린더에서 비는 시간 찾아줘". 전송·삭제 같은 쓰기 작업은 승인 팝업 확인. (출처: 동일)
3. 커스텀: Customize > Connectors > Add > Custom > Web -> 원격 MCP URL 입력(예: Notion `https://mcp.notion.com/mcp`). (출처: 11175166 문서, Notion URL은 위 검색 요약)
4. 연결 문제 시 Customize > Connectors에서 연결 해제 후 재연결. (출처: 11176164 문서)

## 확인 못 함 / 주의
- Notion 연결의 클릭 단계별 공식 도움말(support.claude.com)은 찾지 못했다. Notion 관련 정보는 검색 결과 요약 기반이라 UI 문구는 직접 확인되지 않음.
- 도구/커넥터 수와 디렉터리 전체 목록은 확인 못 함.
- 메뉴 위치가 "Customize > Connectors"(최신 문서)와 이전의 "Settings > Connectors"로 혼재할 수 있다.

## 출처 목록
- [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) — 확인일 2026-10-10
- [Use Google Workspace connectors](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors) — 확인일 2026-10-10
- [Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) — 확인일 2026-10-10
- [Claude Code MCP](https://code.claude.com/docs/en/mcp) — 확인일 2026-10-10
- [Notion connector](https://claude.com/connectors/notion) — 확인일 2026-10-10 (검색 결과로만 확인)


## 6단계 재점검 (2026-10-10)
- 커넥터 도움말(11176164): 디렉터리 개수 미기재, Notion 전용 단계 없음, 메뉴는 Customize > Connectors 또는 + > Connectors > Manage connectors.
