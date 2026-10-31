# 41. 업무 메신저에 AI 붙이기: Slack AI와 Claude Tag (M3, 2026-10-31 조사)

방법: curl로 공식 페이지를 한 번에 한 장씩 열람. slack.com/help 접근 가능(차단 없음)이라 범위 축소 없이 진행. 단 Claude의 Slack 연동은 2026-08-03부터 "Claude Tag"로 바뀌었음을 공식 문서에서 확인 → 제목·본문에 반영(옛 "Claude in Slack" 설명 아님).

## 확인한 출처와 사실
### Slack (slack.com/help)
- https://slack.com/help/articles/25076892548883-Guide-to-AI-features-in-Slack (열람): AI 기능은 Slack 플랜·역할(멤버/게스트)·관리자 제한에 따라 다름. AI 응답은 내가 볼 수 있는 정보(공개 채널, 내가 속한 비공개 채널·DM)만 사용. 기능: 대화(채널·DM·스레드) 요약(안 읽은 메시지/최근 7일/직접 기간(데스크톱)), 자연어 검색 필터 자동 적용, 검색 답변(출처 인용), 리캡(Recap, 매일 아침 선택한 채널 요약), 파일 요약(.pdf .docx .pptx .xlsx), 메시지 번역(번역 언어 설정, 나에게만 보임), 허들 노트, 워크플로 자동화, 캔버스 콘텐츠 생성, Slackbot. 메뉴: 채널 위 점 세 개 > Summarize channel/conversation; 스레드 위 Summarize; 검색창에 질문; 사이드바 Recap; 프로필 > Preferences > AI / Language & region.
- 플랜표(같은 페이지, Pro / Business+ / Enterprise+): 대화 요약·허들 노트·자동 검색 필터는 3개 모두. 검색 답변·리캡·파일 요약·번역·워크플로 자동화·캔버스 생성은 Business+와 Enterprise+(표 텍스트의 체크 2개 행, 열 정렬은 텍스트로만 확인). Slackbot은 Business+·Enterprise+, Pro는 제한적 미리보기("may be available to preview in a limited capacity for workspaces on the free and Pro plans"). 엔터프라이즈 검색은 Enterprise+. 구버전 Business+/AI 애드온 없는 Enterprise Grid는 Pro 기능만.
- https://slack.com/help/articles/39264531104275-Updates-to-feature-availability-and-pricing-for-Slack-plans (열람): 2025-06 발표, Business+ 가격 변경·Enterprise+ 신설, 대화·스레드 요약과 허들 노트는 모든 유료 플랜, Slack AI 애드온은 웹사이트에서 더는 판매 안 함, Free 열에도 대화·스레드 요약 체크가 있으나 표 텍스트에서 열 정렬이 불분명해 본문엔 쓰지 않음(가격은 pricing 페이지/영업팀 안내). 가격 수치는 확인·기재 안 함.
- https://slack.com/help/articles/48167543695379-A-reintroduction-to-Slackbot (열람, 제목은 "How to work with Slackbot"): 모든 멤버가 기본 사용 가능(플랜 업그레이드나 관리자 제한이 있으면 안 보임). 응답은 내가 볼 수 있는 정보만. 데스크톱은 오른쪽 위/사이드바 Slackbot, 모바일은 Home 탭 Slackbot. 마이크 받아쓰기(영어에 최적화). 캔버스 수정 시 Confirm 필요. Tasks(반복 작업, 작업당 하루 최대 3회), Skills, Deep research(+ 버튼). 메시지 수·기능은 플랜별(Slackbot limits and credit usage 페이지 참조, 열지 않음). 좋은 프롬프트 예시 표(짧고 정확하게, 채널·링크 등 맥락 포함).
- https://slack.com/help/articles/28310650165907-Security-for-AI-features-in-Slack (열람): 고객 데이터는 Slack 제어 인프라를 벗어나지 않고 LLM 학습에 쓰이지 않음. RAG로 필요한 데이터만 추론 시 전달. 요약·검색 답변은 일시적(저장 안 됨), 리캡 데이터는 90일 보관, 워크플로가 만든 채널 요약은 조직 보관 정책을 따름. 출처 인용. 소유자·관리자가 기능 제한 가능.
- https://slack.com/help/articles/28244420881555-Manage-access-to-AI-features-in-Slack (열람): 소유자·관리자가 AI 기능 접근을 제한하거나 끌 수 있음(Workspace settings > Manage permissions > Feature access > AI 경로는 요약 페이지 쪽 안내, 본문엔 "관리자가 설정" 수준만 사용). 플랜표 재확인(AI 워크플로 단계, 제안 사이드바 섹션 항목 있음).
### Claude (Claude Tag)
- https://support.claude.com/en/articles/15594475-what-is-claude-tag (열람, 옛 article id로 안내): "Claude in Slack"은 2026-08-03에 Claude Tag로 전환. Claude Tag는 Team·Enterprise 플랜, 베타. 세 접점: 채널에서 @Claude 태그, Claude와 DM, Slack AI 어시스턴트 패널의 Claude 아이콘. 채널 태그는 조직의 정체성·관리자가 설정한 도구 권한으로 일하고 조직에 과금, DM·패널은 내 Claude 계정의 기능으로 일함. 설치 후 Primary Owner 또는 Owner(Admin 역할 불가)가 설정. Member Access 3모드(Enterprise에서 역할 기반). 소비 기반 과금, 조직 한도·채널별 한도, 75%/95% 알림. 비공개 채널·게스트 채널 설정(게스트 채널 기본 Restrict). 메모리는 채널·워크스페이스별로 보관, 소유자가 보고 수정·삭제 가능. Slack 대화는 Claude 대화 기록과 분리, Slack 보관 정책을 따름, 연동 해제·앱 삭제 시 30일 내 삭제.
- https://claude.com/docs/claude-tag/overview (열람, Public Beta): Team·Enterprise만, Free·Pro·Max·Ultra 및 서드파티 배포 불가. Slack 사용자마다 Claude 좌석이 필요하지 않음, 채널 작업은 사용량 기반으로 조직 사용 잔액에서 차감, 좌석당 추가 요금 없음. 작업은 임시 샌드박스에서 실행. 시작 문구: "@Claude what can you access from this channel?". 설정: claude.ai/admin-settings/claude-tag에서 Owner가 Slack 워크스페이스 페어링(@Claude connect). 시작 시 외부 시스템 접근 없음, 연결은 관리자가 추가. 활용 예(모니터링, 트리아지, 문서 답변, 데이터 질문, 스레드→문서·티켓, 버그 수정 PR).
- https://claude.com/claude-in-slack (열람, 마케팅 페이지): Claude Enterprise·Team 고객용. Teams는 "coming soon / waitlist". 후기 문구는 근거로 쓰지 않음.
- 관련(열지 않음): code.claude.com/docs/en/slack (Claude Code in Slack, 제목만 확인).

## 확인하지 못한 것
- Slack AI 한국어 지원 범위(요약·검색 답변의 언어). Slack 한국어 도움말 URL은 존재하나 지원 언어 표는 열지 않음 → 본문은 "직접 확인".
- 플랜별 월 가격(Slack Pro/Business+/Enterprise+), Slackbot 메시지 한도·크레딧(별도 페이지 미열람), 한국 제공 여부 개별 확인.
- Free 플랜의 AI 기능 범위(표 열 정렬 불명확).
- Claude Tag 상세(setup guide, 보안 페이지, 지원 지역 표), 한국 사용 가능 여부 → 열지 않음/미확인.
- 개인 Slack 사용자용 "Claude 앱 연동"은 Claude Tag가 Team/Enterprise 전용이라 개인 플랜 사용자는 해당 없음(공식 문서 기준). 개인 플랜에서 Slack과 연동하는 별도 공식 경로는 확인하지 못함(음성 모드 문서에 Slack 커넥터 언급만 있음).
