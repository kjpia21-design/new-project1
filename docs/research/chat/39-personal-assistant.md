# 대화 39. AI를 개인 비서처럼 (L3, 2026-10-15)

기존 조사 노트(claude/C07, C09, automation/17)의 Claude 사실은 재사용하되, 아래 공식 페이지는 이번에 다시 열어 확인했다. 한 번에 한 페이지씩 curl.

## 확인한 출처와 사실

### Claude
- Google Workspace 커넥터 https://support.claude.com/en/articles/10166901-use-google-workspace-connectors (2026-10-15 확인, 페이지 "Updated over 2 weeks ago")
  - Gmail, Google Calendar, Google Drive 커넥터는 "available for all users on Claude and Claude Desktop".
  - Calendar: 일정·캘린더 보기(공유 캘린더 포함), 일정 생성·수정·삭제, 참석자 간 공통 가능 시간 찾기, 참석자 목록 관리와 초대 응답, 반복 회의 설정.
  - Gmail: 검색·읽기, 초안, 전송·답장·전달(기본적으로 매번 승인), 첨부파일은 메타데이터만(내용 아님), 라벨.
  - "By default, each action Claude takes on your behalf requires your explicit approval." (How to use 절). 응답에 어떤 메일·일정·문서를 근거로 썼는지 인용이 붙는다.
  - Team/Enterprise는 Owner가 먼저 조직 차원에서 활성화.
- 채팅 검색과 메모리 https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context (2026-10-15 확인)
  - 메모리는 Free/Pro/Max에서 웹·데스크톱·모바일 기본 켜짐. Team/Enterprise는 Owner가 제어, 멤버별로 꺼진 상태에서 시작.
  - Settings > Memory > "Generate memory from chats" 토글. 끄면 Pause memory / (Reset) 선택지. 시크릿 채팅은 새 채팅 오른쪽 위 유령 아이콘, 모든 요금제(무료 포함).
  - 지난 대화 검색은 유료 플랜(Pro, Max, Team, Enterprise).
  - 레거시 메모리 내보내기는 2026-09-09까지 안내(지난 안내).
- 나머지(커넥터 연결 절차, 프로젝트, 루틴)는 기존 노트 C07/C09/C05/C18 재사용. 본문은 해당 편 링크로 대체.

### Gemini (support.google.com/gemini, 한국어 hl=ko)
- 캘린더 일정 생성 및 관리하기 https://support.google.com/gemini/answer/15305236?hl=ko
  - Google Calendar, HONOR/OPPO/삼성/TECNO/Xiaomi 캘린더에서 일정 만들기·찾기·수정 요청 가능.
  - Gemini 모바일 앱 로그인 + **활동 기록 보관** 사용 설정 필요(꺼져 있으면 연결 불가). Google 메시지의 Gemini에서는 캘린더 앱 사용 불가.
  - Google Calendar를 쓰려면 Gemini 앱에 Google Workspace를 연결. 프롬프트에 `@Google Calendar`로 지정 가능. 보조·공유 캘린더 가능, 지정 없으면 기본 캘린더.
  - **할 수 없는 일**: 일정에 사용자 추가·초대, 기존 일정의 위치·설명 추가·수정. 참석자·위치·설명은 캘린더 앱에서.
  - 실행 취소: 확인 알림의 "실행취소" 또는 대답 아래 일정을 열어 수정. 참석자에게 보낸 이메일 등 일부는 취소 불가. Gemini Live 백그라운드로 만든 일정은 Gemini가 취소 못 함.
  - 할루시네이션/오래된 정보 가능, 출처 클릭해 검토하라는 안내.
  - 예시 프롬프트: "[요일, 날짜] [시간]에 [활동]에 대한 일정 만들어 줘", "오늘 내 일정이 어떻게 돼?", "이번 주말 일정이 어떻게 돼?", "다음 회의 취소해 줘" 등.
- 연결된 앱 사용 및 관리하기 https://support.google.com/gemini/answer/13695044?hl=ko
  - 연결은 언제든 설정에서 연결/해제. 모바일: 메뉴 > 맞춤설정 > 커넥터. 웹: 설정 및 도움말 > 연결된 앱(보이지 않으면 개인 인텔리전스 > 연결된 앱). 앱 지정은 프롬프트에서 @ 입력. 메뉴 이름이 기기·계정에 따라 다름.
  - 활동 기록 보관이 꺼지면 gemini.google.com, iOS, 스마트시계에서 연결된 앱 사용 불가.
- 작업 예약하기 https://support.google.com/gemini/answer/16316416?hl=ko
  - 일일/주간/월간 반복 작업 예약. 개인 Google 계정 대상 점진 출시("아직 사용할 수 없는 계정도 있습니다"), 요건 충족 Workspace 계정도 가능. 활동 기록 보관 필요.
  - 활성 예약 작업은 최대 10개. 입력창에 시간·빈도를 적어 요청 -> Gemini가 요약. 관리는 설정 및 도움말 > 예약된 작업(수정/일시중지/삭제).
  - 예시에 "캘린더, 할 일 목록, 이메일의 일일 요약"이 있음.
  - 대답은 미리 준비돼서 주식 가격 같은 빠르게 바뀌는 정보는 수신 시 최신이 아닐 수 있음. 완료 시간 전 준비 시점은 Google AI 요금제 여부에 따라 다름(미가입: 최대 몇 시간 전, 가입: 1시간 이내).
  - 알림: 웹은 채팅 목록에 읽지않음 표시, 모바일은 기기 알림.
- 도움말 목록에서 제목만 확인(열지 않음): "Gemini 앱에서 일일 브리핑 시작하기"(17077455), "Gemini 앱에서 할 일 확인 및 관리하기"(17094196, 에이전트 작업 기능, 일부 사용자만).

### ChatGPT (learn.chatgpt.com, help.openai.com 등은 403이라 열지 않음)
- 예약된 작업 https://learn.chatgpt.com/docs/automations.md : 웹/모바일/데스크톱에서 반복 작업을 백그라운드로 예약. 웹에서는 작업 공간에서 예약이 활성화돼 있을 때 Chat 또는 ChatGPT Work에서 만들고 **Scheduled**에서 관리. 사용 가능한 요금제 범위는 "eligible plans"로만 적혀 있어 **어느 플랜인지 확인 못 함**. 웹 작업은 업로드 파일·연결 도구·플러그인 사용 가능하지만 내 컴퓨터 폴더는 못 씀. 먼저 일반 채팅에서 프롬프트를 시험하고 처음 몇 번 실행 결과를 검토하라고 안내. 앱 이벤트 트리거(Gmail 새 메일 등)는 해당 플랜에서 웹·모바일만.
- 개인 설정 https://learn.chatgpt.com/docs/personalize.md : 웹 Settings > Personalization > Base style and tone, 사용자 지정 지침, 메모리(memories)로 이전 대화의 맥락을 이어감. 설정에서 개인화 기능을 켜고 끌 수 있음.
- 플러그인 https://learn.chatgpt.com/docs/plugins.md : 웹·데스크톱에서 Plugins 탭으로 탐색·설치, 모바일에서는 계정에 있는 플러그인 사용. 예시로 Gmail 플러그인(Gmail 작업), Google Drive 플러그인, Slack. 설치 중 또는 첫 사용 때 인증. **Google Calendar 플러그인은 이 페이지에서 확인하지 못함.**

## 확인하지 못한 것 (본문에서 단정하지 않음)
- ChatGPT의 Google Calendar 연동 여부, 예약 작업의 요금제·한국 제공 범위, 모바일 UI 문구.
- Gemini 할 일 기능(Google Tasks/Keep)의 상세: 해당 도움말을 열지 않음 -> 쓰지 않음.
- Gemini "일일 브리핑" 상세: 열지 않음 -> 쓰지 않음.
- Claude의 예약 실행(루틴/Cowork) 상세는 기존 노트 의존 -> 링크로 대체.
- 요금제별 가격·한도: 이 편에서 다루지 않음(basics/08 참고).
- 항공권·숙소·식당 예약 대행 기능: 확인하지 않음 -> 본문은 "계획 초안과 확인 목록 만들기"까지만.

## 출처 목록
- https://support.claude.com/en/articles/10166901-use-google-workspace-connectors
- https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
- https://support.google.com/gemini/answer/15305236?hl=ko
- https://support.google.com/gemini/answer/13695044?hl=ko
- https://support.google.com/gemini/answer/16316416?hl=ko
- https://learn.chatgpt.com/docs/automations.md
- https://learn.chatgpt.com/docs/personalize.md
- https://learn.chatgpt.com/docs/plugins.md
