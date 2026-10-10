# OpenAI Dots(닷츠) 조사 노트 (기준일: 2026-10-10)

담당: X4. 대상: 2026-09-29 DevDay에서 발표된 ChatGPT의 상시 작동 에이전트 "Dots".

## 근거 등급 표기
- **[공식-열람]**: 회사 공식 페이지를 이번 조사에서 직접 열어 확인함
- **[보도-검색요약]**: 웹 검색 결과 요약에서만 확인함 (원문 미열람)
- **[보도-열람]**: 언론 보도 원문을 직접 열람 (00-landscape.md에서 메트로신문 열람)

## 접근 결과
- openai.com (`/index/introducing-dots/`, `/ko-KR/index/introducing-dots/`, `/chatgpt/pricing/`): 재시도해도 HTTP 403 (Cloudflare 챌린지). 열람 실패.
- help.openai.com: 지시대로 시도 대상에서 제외(403 알려짐). 열람 안 함.
- **developers.openai.com**: 열람 성공. Dots 공식 문서가 `/codex/dots` 아래에 있음 (첫 화면 사이드바에서 링크 발견). 영어 문서.
- apps.apple.com/kr (ChatGPT 앱 등록 페이지): 열람 성공. Google Play 한국어 페이지: HTTP 200이나 본문 파싱 안 함.
- 한국어판 공식 Dots 문서: 확인하지 못함 (문서는 영어).

## 열람한 공식 페이지 [공식-열람]
- https://developers.openai.com/codex/dots (Meet dots)
- https://developers.openai.com/codex/dots/getting-started
- https://developers.openai.com/codex/dots/channels (Message your dot)
- https://developers.openai.com/codex/dots/tasks-and-memory
- https://developers.openai.com/codex/dots/computers-and-apps
- https://developers.openai.com/codex/dots/controls
- https://developers.openai.com/codex/enterprise/dots-admin-guide
- https://developers.openai.com/codex/pricing (Pro $100/$200/$500)
- https://apps.apple.com/kr/app/chatgpt/id6448311069 (한국 App Store)
- (참고) learn.chatgpt.com/docs/dots 는 위 문서와 같은 내용(같은 크기)으로 응답.

## 사실 정리 (공식 문서 기준)

**무엇인가**
- "Your dot is an always-on agent that keeps work moving across your tools and projects." 대화를 이어가는 동안에도 작업하고, 결과나 결정이 필요한 일이 있으면 먼저 연락함. GPT-6 Astra 기반. 클라우드에 있고 자체 컴퓨터와 브라우저를 가짐. 내 컴퓨터가 꺼져 있어도 작업 계속. 조사, 데이터 분석, 문서 작성, 소프트웨어 개발.
- 용어: 제품군 이름 Dots(복수), 사용자가 만드는 개별 에이전트가 "dot". 이름을 정하면 핸들이 `@이름-dot` 형태(예: Alfred라는 dot의 핸들은 `@tibo-alfred`; 정확한 규칙은 문서 예시 수준).
- 상태 표시: 관리자 가이드에서 "Use dots (Beta)"라고 표기 → 공식적으로 베타.
- 출시일: 공식 문서에는 날짜 없음. 2026-09-29 DevDay는 보도 기준 (뉴스/검색요약 다수: SiliconANGLE 2026-09-29 URL 날짜, AI Weekly, Android Authority 등). 문서 사이드바에서 "Dots are rolling out gradually".

**할 수 있는 일**
- 책임(responsibility)을 맡기면 대화 사이에도 진행 상황을 추적하고 다음 할 일을 스스로 판단. 스스로 "멈췄다 깨어나기" 가능(고정 스케줄 불필요). 백그라운드 에이전트 병렬 실행.
- 고정 일정 지정 가능("평일 오전 9시 Central, 4주간" 식으로 시간대와 기간 명시, 저장 후 확인 요청 권장). 연결된 서비스가 지원하면 이벤트 기반(예: Slack 채널에 새 버그 리포트) 실행.
- 진행 알림 위치 지정(ChatGPT/Slack). 통화(음성) 가능: 대화에서 전화 버튼. 통화 중에도 타이핑 가능. "dot이 먼저 거는 전화"는 출시 후 예정. 문자(texting)는 "coming soon".
- 클라우드 컴퓨터: 리서치, 파일, 소프트웨어 실행. "Take over"(내가 조작) / "Return control". 클라우드 브라우저는 내 브라우저와 별도 세션. 일부 웹사이트는 클라우드 브라우저를 막음 → 연결된 내 컴퓨터로 시도 요청 가능.
- 웹사이트 로그인: ChatGPT Work와 같은 비공개 로그인 흐름(자격증명이 대화 밖 브라우저로 전달). "Save to Passwords" 선택 시 저장, 저장된 로그인 재사용은 사용자 확인 필요.
- 내 컴퓨터 연결(선택): 데스크톱 앱 dot 프로필 > Computers > Your computer > Allow access. 한 번에 한 대. 컴퓨터가 온라인이고 ChatGPT 앱이 열려 있어야 사용 가능. Codex 연결/Work Sync와는 별개 권한. 로컬 스킬은 컴퓨터 연결 필요.
- 플러그인(앱) 연동: Gmail, Google Drive, GitHub 등 지원 플러그인을 계정에 설치·연결해야 사용. 기존 ChatGPT 앱 권한 적용(예: 메일 읽기만 허용, 보내기는 불허). 문서에 앱 개수는 없음("4,000개 이상"은 보도 수치).
- ChatGPT Work/Codex에 작업 위임: 로컬 Work/Codex 작업 생성, 기존 로컬 Codex 작업 이어가기, 준비된 Codex 클라우드 환경에서 클라우드 코딩 작업 생성. 위임 작업은 데스크톱 앱 dot 프로필 > Activity에서 확인.
- 메모리: ChatGPT 메모리 + dot 자체 노트(ChatGPT 저장 메모리와 별개, 대화 전체 기록 아님). 채널을 바꿔도 같은 dot, 같은 노트. 비공개 대화 내용을 다른 사람에게 공유하기 전 허락 확인.
- 능동적 리서치: 연결된 앱을 읽기 전용으로 살펴 도움 될 일을 찾음. 이 도구는 메시지 전송, 앱 내용 변경, 브라우저/컴퓨터 제어 불가.

**플랫폼**
- 만들기/대화: ChatGPT 모바일 앱(최신 버전), 데스크톱 앱, 데스크톱 브라우저. **모바일 웹은 미지원.** 같은 dot을 기기 간에 이어서 사용.
- 연락 채널: ChatGPT(메시지, 통화), Slack(DM 또는 채널 멘션), Microsoft Teams. 채널 추가만으로 앱/컴퓨터 접근이 생기지 않음.
- 컴퓨터 연결과 Activity/Scheduled 화면은 데스크톱 앱 중심으로 설명됨.

**요금제·접근 (공식 "Access" 절)**
- Pro 100 / Pro 200 / Pro 500: "18세 이상, EEA·영국·스위스 제외 지역 사용자".
- Business Premium: 전 세계 순차 제공.
- Enterprise: 전 세계 순차 제공, **기본 꺼짐**, 워크스페이스 관리자가 켜야 함.
- "점진적 롤아웃. 플랜이 해당돼도 바로 안 보일 수 있음."
- dot과의 대화는 ChatGPT 사용 한도에 포함되지 않음. dot이 시작·관리하는 Work/Codex 작업은 해당 제품 한도에 포함. 플랜에 "더 깊은 작업용 허용량" 포함, 출시 후 첫 달은 확장 한도.
- Pro 가격(공식 developers.openai.com/codex/pricing): "From $100/month", 플랜 $100/$200/$500 USD. 원화 가격은 미확인.
- Plus, Free, Business(Premium 아닌 것), Edu 등의 지원 여부: 공식 문서에 Plus/Free 언급 없음 → 접근 대상에 없는 것으로 읽힘(명시적 "미지원" 문구는 못 봄). Edu/Healthcare 베타는 보도-검색요약에만 있음.

**통제·안전 (공식)**
- 계정에 영향을 주거나 정보를 공유하는 행동 전에 자동 검토가 지침, 권한, 사용자 규칙, 내장 안전 요건을 확인해 "진행 / 승인 필요 / 사용자가 직접 할 단계(예: 비밀번호 변경)"로 판단.
- 지침: "초안을 보여 주고 보내지 마" 식. "초안 작성"은 "발송 권한"이 아님. 구체적 지침은 범위 내 미래 행동까지 포괄할 수 있음.
- 사용자 규칙: 설정 > 개인 설정 > 권한 > Custom rules. 4가지: 묻지 않고 실행 / 내가 말할 때 실행 / 실행 전 확인 / 나에게 넘기기. 규칙은 "dot이 따르려 하는 지침이며 실수할 수 있다", 앱·컴퓨터 접근을 부여하지 않고 내장 안전 요건을 덮어쓰지 않음.
- 중지: Pause는 현재 주 작업만 멈춤(위임 작업, 예약 실행은 별도). Activity에서 위임 작업 중지, Scheduled에서 반복 작업 삭제. 통화 종료가 작업 중단은 아님. 중지해도 이미 완료한 행동은 되돌려지지 않음.
- 삭제: dot 삭제 가능(되돌릴 수 없음). 연결 앱에서 이미 한 변경이나 이미 보낸 메시지는 되돌리지 않음.
- 데이터: ChatGPT 데이터 제어가 적격 대화와 작업에 적용. 능동적 리서치와 비공개 노트로는 모델을 직접 학습시키지 않음.
- 문서가 직접 경고: "Your dot can make mistakes", 완료된 실행이 결과 달성을 보장하지 않으니 오류와 결과 확인.
- 기업 관리자: 역할별 Use dots, Add dots to Slack, 로컬 컴퓨터 접근(별도 opt-in), 사용자 규칙 사용, 클라우드 브라우저/네트워크/컴퓨터 사용, 비밀번호 관리자 사용 권한 제어.

**결제 기능**
- 공식 Dots 문서에서 결제·구매 전용 기능은 찾지 못함. 사이트 로그인과 "Save to Passwords"만 언급. 쇼핑/결제 기능 유무는 **확인 못 함**(없다고 단정하지 않음). 보도마다 다를 수 있음.

## 한국 제공 여부 (충돌 정리)
| 출처 | 내용 | 등급 |
| --- | --- | --- |
| OpenAI 개발자 문서 Access | Pro는 18세 이상, EEA·영국·스위스 **제외**. 한국은 제외 목록에 없음. 한국을 명시하지도 않음. | 공식-열람 |
| 메트로신문 2026-10-01 | 한국에서 순차 제공 중, 최초 생성은 데스크톱 앱/웹 | 보도-열람(00 노트) |
| 영어 매체(검색요약) | EEA/스위스/영국 제외, "eligible markets", 한국 언급 없음 | 보도-검색요약 |
- 판단: 공식 문서상 **한국이 제외 지역은 아니다**(그래서 Pro/Business Premium/Enterprise 계정이면 대상일 수 있음). 그러나 "한국 제공 확정"을 명시한 공식 문장은 못 찾음. 롤아웃이 점진적이라 계정에 따라 안 보일 수 있음. 따라서 사이트에서는 "한국이 제외 지역 목록에 없고 국내 보도는 순차 제공으로 전함 / 내 계정에 보이는지는 앱에서 직접 확인" 식으로 서술. help.openai.com 지원 지역 문서는 열람 못 함.
- ChatGPT 앱 자체의 한국 제공: 한국 App Store에 한국어 등록(KO + 59개 언어) [공식-열람].
- 우회 가입(VPN 등)은 안내하지 않음. 해당 없음(한국은 제외 목록에 없음).

## 한국어 지원
- ChatGPT iOS 앱: 한국 App Store 등록, 지원 언어에 Korean 포함 [공식-열람]. 한국어 설명 문구 존재.
- **Dots 자체의 한국어 지원**(한국어 대화 품질, 한국어 음성 통화, 한국어 UI 문구): 공식 문서에 언어 정보 없음 → 확인 못 함. 문서는 영어만 열람. 한국어 음성이 아직 어색하다는 유튜버 후기만 존재(메트로신문 인용, 보도).
- 한국 App Store ChatGPT 앱 "새로운 기능" 노트는 "버그 수정 및 작은 개선"뿐이고 Dots 언급 없음(버전 1.2026.265, 9/29 등) [공식-열람]. 즉 앱 스토어 등록 페이지에서는 Dots 제공 근거를 얻지 못함.

## 보도 기준(참고만, 수치 사용 주의)
- GPT-6 Astra, "4,000개 이상 앱", Pro/Business Premium에서 시작, 에이전트 1개 포함, EEA·스위스·영국 Pro 제외, Enterprise/Edu/Healthcare는 관리자를 통한 베타 [보도-검색요약: DataCamp, SiliconANGLE, Android Authority, AI Weekly, MindStudio 등 제목 수준]. 공식 문서와 겹치는 부분(GPT-6 Astra, 지역 제외)은 공식으로 확인됨. "4,000개 앱", Edu/Healthcare는 공식 미확인.
- ChatGPT Space(팀 협업 공간)은 별도 제품 보도. 이번 편에서 다루지 않음.

## 확인 못 한 것
1. 공식 한국어 발표문/도움말(openai.com, help.openai.com 403).
2. 한국 제공 확정 문구와 지원 지역 도움말 문서.
3. Dots의 한국어 지원 수준(텍스트·음성).
4. Pro 외 플랜(Plus, 일반 Business, Edu)의 정확한 지원 여부.
5. 원화 가격.
6. 결제/구매 기능 유무.
7. 정확한 출시 날짜(공식 문서에는 날짜 없음, 2026-09-29는 보도).
8. dot 개수 제한(보도는 1개 포함이라 하나 공식 문서에서 못 봄).
9. Google Play 한국 페이지의 Dots 언급 여부(본문 미분석).

## 비교표용 요약
| 항목 | 내용 | 근거 |
| --- | --- | --- |
| 출시일 | 2026-09-29 DevDay 발표(보도 기준). 공식 문서는 날짜 없이 "점진적 롤아웃", 관리자 가이드에서 "Beta" | 보도 + 공식 |
| 플랫폼 | ChatGPT 모바일 앱, 데스크톱 앱, 데스크톱 브라우저(모바일 웹 불가). 대화 채널: ChatGPT, 통화, Slack, Teams. 문자는 "곧 지원" | 공식 |
| 요금 | 별도 요금 없음. ChatGPT Pro(월 $100/$200/$500), Business Premium, Enterprise에 포함. dot과의 대화는 ChatGPT 한도 미차감, Work/Codex 작업은 해당 한도 차감 | 공식 |
| 한국 제공 | 공식 문서의 제외 지역은 EEA·영국·스위스(Pro 기준)이고 한국은 목록에 없음. 한국 제공 확정 문구는 못 찾음. 국내 보도는 순차 제공. 점진적 롤아웃이라 계정마다 다름 | 공식(제외 목록) + 보도 |
| 한국어 | ChatGPT 앱은 한국어 지원(한국 App Store). Dots의 한국어 지원은 공식 확인 못 함 | 공식(앱) / 미확인(Dots) |
| 상시 작동 여부 | 예. 클라우드에서 계속 동작, 내 컴퓨터가 꺼져도 가능. 스스로 깨어나 이어서 일함 | 공식 |
| 외부 서비스 연동 | 플러그인(Gmail, Google Drive, GitHub 등), Slack, Teams, 내 컴퓨터(선택, 한 대), Work/Codex 위임 | 공식 |
| 결제 기능 | 공식 문서에서 결제·구매 기능 확인 못 함(웹 로그인과 비밀번호 저장만 언급) | 공식(미확인) |
| 확인 수준 | 기능·접근·안전: developers.openai.com 공식 문서 열람. 한국 제공·한국어·출시일: 보도 의존 | - |
