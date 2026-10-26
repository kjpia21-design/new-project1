# Claude 앱 (웹, 데스크톱, 모바일)

## 핵심 사실
- Claude를 쓰는 방법은 웹(claude.ai), 데스크톱 앱(Mac/Windows), 모바일 앱(iOS/Android) 세 가지. 사용 조건: 만 18세 이상, 지원 지역. (출처: https://support.claude.com/en/articles/8114491-get-started-with-claude)
- 입력창 왼쪽 아래 "+" 버튼 또는 "/"로 추가 기능·명령을 연다. 현재 모델은 입력창 아래(웹·데스크톱) 또는 화면 상단(모바일)에 표시되며 모델 선택기로 바꾼다. effort와 확장 사고도 조절 가능. (출처: 동일)
- 무료 플랜은 5시간마다 리셋되는 세션 기반 한도가 있다. (출처: 동일)
- 데스크톱 지원 OS: macOS 11(Big Sur) 이상, Windows 10 이상, Linux(베타; Ubuntu 22.04+ / Debian 12+, x64·arm64). 다운로드는 claude.ai/download. 채팅은 모든 플랜, Claude Code와 Cowork는 유료 플랜 필요. (출처: https://support.claude.com/en/articles/10065433-install-claude-desktop)
- 데스크톱 전용 기능: 데스크톱 확장(Settings > Extensions의 큐레이션 디렉터리로 로컬 파일·캘린더·메일 등 연결), Quick Entry 단축키, Cowork(격리 VM에서 코드 실행, 연결한 폴더만 읽고 쓰기), 컴퓨터 사용. Linux 베타에서는 컴퓨터 사용·받아쓰기 불가. (출처: 동일)
- 데스크톱 앱에는 Code 탭이 있어 Claude Code를 쓸 수 있다(유료 구독 필요). Local/Cloud 선택, 여러 세션 병렬, 시각적 diff 검토, 스케줄 작업. (출처: https://code.claude.com/docs/en/overview)
- 모바일: iOS 18.0 이상(iPadOS 18.0 이상, App Store "Claude by Anthropic"), Android 8.0 Oreo 이상(Google Play). (출처: 지원센터 검색 결과 요약, https://support.claude.com/en/articles/9266462-install-claude-for-ios , https://support.claude.com/en/articles/9612887-install-claude-for-android — 본문은 직접 열람하지 못하고 검색 요약만 확인)
- 모바일 앱의 Code 탭에서 클라우드 세션을 시작·확인할 수 있다. (출처: https://code.claude.com/docs/en/claude-code-on-the-web)
- "Cowork와 채팅은 하나의 Claude": Cowork(다단계 에이전트 작업)와 채팅이 한 대화로 통합되는 중. Pro/Max의 웹·데스크톱·모바일부터 단계적 롤아웃, Team/Enterprise는 이후(Enterprise는 최소 30일 사전 공지). 통합 후 되돌릴 수 없음. 로컬 파일 접근, 내장 브라우저, 컴퓨터 사용은 Claude Desktop이 열려 있을 때만 작동. 한 표면에서 시작한 작업이 다른 표면에도 나타나며 모바일에서 클라우드 작업을 시작 가능. (출처: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude)
- 통합 경험에서는 웹 검색 토글이 없고(필요할 때 자동 검색), Research는 `/deep-research` 또는 "+" 버튼, 전역 지침은 Settings > General의 "Instructions for Claude". (출처: 동일)
- 요약 차이: 웹=설치 없이 즉시, 데스크톱=로컬 파일/확장/컴퓨터 사용/Claude Code, 모바일=이동 중 채팅과 클라우드 작업 확인/시작.

## 따라하기에 쓸 수 있는 절차
1. claude.ai 접속 → 가입/로그인(만 18세 이상). (출처: https://support.claude.com/en/articles/8114491-get-started-with-claude)
2. 데스크톱: claude.ai/download에서 OS 맞는 버전 다운로드 → 설치 → 로그인. (출처: https://support.claude.com/en/articles/10065433-install-claude-desktop)
3. 모바일: App Store/Google Play에서 "Claude" 설치 → 같은 계정으로 로그인. (출처: 위 설치 문서 제목 기준)
4. 모델 바꾸기: 입력창 아래 모델 선택기 클릭. (출처: get-started 문서)

## 확인 못 함 / 주의
- iOS/Android 설치 문서 본문은 직접 읽지 못함(검색 요약만).
- 앱별 모델 선택기에 플랜별로 어떤 모델이 표시되는지, 모바일/웹 기능 차이표는 확인 못 함.
- Cowork 통합 롤아웃 상태는 계정마다 다르다(미이전 계정은 Chat/Cowork 분리 표시).
- "Dispatch"(폰에서 데스크톱 세션 생성)는 통합 문서에서 신규 사용자에게 불가로 서술.

## 출처 목록
- [Get started with Claude](https://support.claude.com/en/articles/8114491-get-started-with-claude) — 확인일 2026-10-10
- [Install Claude Desktop](https://support.claude.com/en/articles/10065433-install-claude-desktop) — 확인일 2026-10-10
- [Claude Cowork and chat are one Claude](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude) — 확인일 2026-10-10
- [Claude Code overview](https://code.claude.com/docs/en/overview) — 확인일 2026-10-10


## 2026-10-11 업데이트 반영
- 2026-09-16 릴리스 노트: Cowork 기능을 어느 대화에서나 사용(Pro·Max부터 순차 롤아웃), 디자인·슬라이드·문서 생성도 어느 대화에서나(유료 플랜 베타, Enterprise는 소유자가 켜기 전까지 기본 꺼짐). 출처: https://support.claude.com/en/articles/12138966-release-notes, https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
- 본문의 "통합되는 중" 표현을 위 내용으로 교체. Team 시점은 "More plans will follow soon"뿐이라 미확인.

## 2026-10-19 점검 반영
- 데스크톱 설치 도움말(10065433)에서 최소 OS가 macOS 13(Ventura) 이상으로 확인되어 본문의 macOS 11을 고침. Windows 10+, Linux 베타(Ubuntu 22.04+/Debian 12+, x64·arm64), iOS/iPadOS 18.0+, Android 8.0+ 변동 없음. 시작 가이드: 18세 이상, 지원 지역 조건 그대로.

## 2026-10-26 점검 반영
- 시작 가이드(8114491), 데스크톱(10065433: macOS 13+, Windows 10+, Linux 베타 Ubuntu 22.04+/Debian 12+), iOS 18.0+(9266462), Android 8.0+(9612887), Cowork 통합(16761823) 다시 읽음. 변동 없음 — 단, 전역 지침 위치가 Settings > Your Claude(예전: Settings > Account)로 확인되어 본문 "설정 > 일반(General)"을 고침. 릴리스 노트 최신 항목(2026-10-21 Claude Duet 연구 프리뷰, Pro/Max)은 본문 미반영.
