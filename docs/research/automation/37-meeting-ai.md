# 37. 온라인 회의 AI 비교 — Google Meet·Zoom·Teams (2026-10-15 조사, L2)

방법: curl -sL -m 20 -A "Mozilla/5.0"로 공식 페이지를 한 번에 한 장씩 열람. 페이지 URL 탐색에 WebSearch 사용(검색 요약은 근거로 쓰지 않고 원문을 열어 확인). Zoom 도움말은 스크립트 렌더링이라 HTML에 내장된 articleBody JSON에서 본문을 읽음.

## 확인한 출처와 사실
### Google Meet
- https://support.google.com/meet/answer/14754931 ("Take notes for me")
  - 적격 Google Workspace 에디션 또는 Google AI 요금제 필요. 회의 구어는 영어·프랑스어·독일어·이탈리아어·일본어·한국어·포르투갈어·스페인어. 한 번에 한 언어만(다중 언어 미지원).
  - 15분~최대 8시간 회의 권장. Calendar의 Video call options > Meeting records > "Take notes with Gemini", Meet 안의 "Take notes for me" 버튼으로 켬. Host Management가 켜져 있으면 호스트/공동 호스트만 켜고 끔.
  - 시작하면 모든 참가자에게 알림(연필 아이콘). 조직 내 참가자는 언제든 멈출 수 있어 민감한 논의는 요약에서 뺄 수 있음.
  - 관리자가 녹음·전사·노트 시작 전 명시적 동의를 요구하도록 설정 가능(기본 꺼짐). Start/Join/Continue/Leave.
  - 노트 길이 Standard/Longer, 섹션(Summary, Decisions, Next steps, Details) 선택은 일부 Beta. 노트 문서는 주최자 Drive의 "Google Meet" 폴더에 저장, Calendar 이벤트에 첨부, 탭 2개(Quick notes, Full notes). 공유 대상 선택(초대된 모든 게스트/조직 내/호스트만).
  - 요약이 불완전·부정확하거나 생성 안 될 수 있음(연결 문제, 15분 미만 등). 늦게 들어오면 "Summary so far".
- https://support.google.com/meet/answer/9308681 (Record a video meeting)
  - 컴퓨터/Android에서만 녹화. 가능한 Workspace 에디션 목록(Business Standard/Plus, Essentials, Enterprise 등, Google One 2TB 이상 구독자 포함). 호스트에게 권한이 있어야 함.
  - 녹화 시작·종료 시 조직 외부·모바일 사용자도 알림을 받음(제어 불가). 녹화는 주최자 Drive "Google Meet" 폴더.
  - Record captions 선택 시 자막 포함.
- https://support.google.com/meet/answer/12849897 (Transcripts)
  - 컴퓨터/노트북/Android만. 지원 에디션: Business Standard/Plus, Enterprise Starter/Standard/Plus, Teaching and Learning Upgrade, Education Plus, Workspace Individual. 언어: 영어·프랑스어·독일어·이탈리아어·일본어·한국어·포르투갈어·스페인어.
  - 음성 대화만 포함(채팅은 녹화로). 모두가 나가면 자동 중지. 전사 파일은 시작할 때마다 별도.
  - 트랜스크립트 링크는 호스트·공동 호스트·켠 사람에게 이메일, Calendar 이벤트 첨부.
### Zoom
- https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058013 (Using Meeting Summary with AI Companion; 열람 시 페이지 수정일 2026-10-15)
  - 유료 사용자: Zoom Workplace Pro, Pro Plus, Business, Business Plus, Enterprise, Enterprise Plus 또는 Enterprise Bundle 계정의 라이선스 사용자. Meeting Summary 설정이 켜져 있어야 함. 일부 업종·지역에서는 AI 기능이 제한될 수 있음.
  - 호스트·공동 호스트만 인-미팅 컨트롤(Zoom AI 아이콘 > Meeting summary 체크 > Start Zoom AI)로 시작/중지. 일반 참가자는 호스트에게 요청 가능. 참가자는 Zoom 로그인 상태여야 요약을 자동 수신. 소그룹 회의실(breakout room)에서는 불가.
  - 요약은 이메일로, 회의 전용 그룹 채팅이 켜져 있으면 Chat에도 게시. 웹 포털 My account > Summaries에서 공유·편집·삭제.
  - 시작하면 참가자에게 AI 기능 활성 표시(다이아몬드 색 변경). 중지 시 "Delete meeting assets" 옵션.
  - 한국어 등 영어 외 언어는 자막(caption) 언어 설정을 맞추면 품질이 좋아짐.
- https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0078144 (Supported languages for Zoom AI features): Meeting summary 행 지원 언어에 Korean 포함.
### Microsoft Teams
- https://support.microsoft.com/en-us/teams/copilot/catch-up-on-meetings-with-microsoft-365-copilot-in-teams
  - 회의 중·후 핵심 논점 요약, 액션 아이템 제안, 질문 답변. 주최자가 "Allow Copilot and Facilitator" 옵션(전사 필요 / 회의 중에만 / 끔)을 정함. 끔이면 녹화·전사도 비활성.
  - 전사 없이 켤 수 있으나(회의 중에만) 회의 후 질문이나 기록 보존은 전사가 필요. 조직 외부가 연 회의에서는 Copilot 불가. 5분 넘게 늦으면 요약 제안. 회의 후 Recap 탭.
  - 응답 1300자 초과 시 Word로, 표는 Excel로 열기 가능(민감도 레이블이 내보내기를 막으면 불가).
- https://support.microsoft.com/en-us/teams/meetings-events/welcome-to-copilot-in-microsoft-teams: "Microsoft 365 and a Microsoft Copilot license" 필요(Copilot in Teams). 전사 또는 녹화 켜야 하며 모든 참가자에게 전사 알림. Meet Now 포함. 회의 종료 10분 전 노트·액션 제안.
- https://support.microsoft.com/en-us/teams/meetings-events/recap-a-teams-meeting: 회의 채팅 > Recap 탭 > Copilot > View prompts > Recap the meeting. AI 결과는 검증하라는 안내.
- https://support.microsoft.com/en-us/office/record-a-meeting-in-microsoft-teams-34dfbe7f-b07d-4a27-b4c6-de62f1348c24: 녹화 시작 시 모든 참가자에게 알림, "Depending on your region, you may need everyone's permission before you can record them." 주최자가 녹화 소유, 기본적으로 주최자·공동 주최자만 다운로드/삭제. 녹화 가능 라이선스 목록(Office 365 E1/E3/E5/F3/A1/A3/A5, M365 Business 계열). 한 번에 한 사람만 녹화.
- https://support.microsoft.com/en-us/microsoft-365-copilot/supported-languages-for-microsoft-365-copilot (Last updated September 2026): 회사·학교 계정 목록 등에 Korean 포함. 이 페이지는 Teams 회의 요약 단독 지원 여부를 따로 밝히지 않음.

## 확인하지 못한 것
- Teams 회의 Copilot의 한국어 구어 인식 범위(기능별), 가격. Google "Take notes for me"에 해당하는 구체 플랜 이름/가격(링크된 "Gemini features and plans" 페이지는 열지 않음).
- Zoom 무료 계정에서 AI Companion 사용 가능 여부(이 페이지의 요구 사항 목록에는 유료 플랜만 나열됨, 무료 플랜 언급은 확인 못 함).
- Meet 모바일 요약 세부, Zoom/Teams 한국어 UI 버튼명.
- 한국 법률상 녹음 동의 요건(공식 근거 없음, 일반 권고로만 기술).

## 2026-10-19 재확인
- Meet(Take notes for me, 녹화, 전사), Zoom(Meeting summary, 지원 언어 Korean 포함), Teams(Copilot 회의 도움말, Recap 절차, 녹화 안내, 언어 목록) 재확인. 본문과 모순 없음, 변경 없음.
- 참고(본문 미반영): Zoom 도움말에 "산업·지역에 따라 AI 기능을 쓸 수 없을 수 있다"는 문구, Teams Recap 도움말은 회의 채팅의 Recap 탭만 언급(Calendar 이벤트 언급 없음, 모순은 아님). 한국 지역 제공 여부는 여전히 미확인.

## 2026-10-26 재확인
- 재확인: Meet 14754931(Take notes for me, 8개 언어 Korean 포함, 15분~8시간, Drive Google Meet 폴더), 9308681(녹화 요건, 동의 설정 기본 꺼짐), 12849897(전사 Korean 포함, 기존 Meet Recordings 폴더는 2026-07부터 Legacy Meet Recordings로 이름 변경 안내), Zoom KB0058013(플랜 목록, Start Zoom AI, 소그룹 회의실 불가), KB0078144(Meeting summary 언어에 Korean), Teams Copilot 회의 도움말(라이선스, 외부 주최 회의 불가), catch-up 도움말(Allow Copilot and Facilitator 3가지 옵션 문구), Recap 도움말(Recap 탭 > Copilot > View prompts), 녹화 도움말(지역별 동의 문구). 본문과 모순 없음.
- 변경: Zoom 도움말의 "일부 산업·지역 고객은 AI 기능 미제공 가능" 문구를 본문 "확인하지 못한 점"에 한 문장 추가(이전 노트에서는 미반영). 한국 제공 여부는 여전히 미확인.
- 이번에 다시 읽지 않음: supported-languages-for-microsoft-365-copilot, Teams welcome-to-copilot-in-microsoft-teams의 세부(Meet Now, 10분 전 제안만 확인), 상세 Zoom 한국어 목록 원문 전체.
