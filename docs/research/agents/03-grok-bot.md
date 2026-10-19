# Grok Bot 조사 (기준일: 2026-10-10, 담당 X3)

대상: xAI(사이트 표기 "SpaceXAI")의 상시 작동 에이전트 **Grok Bot**. X에서 멘션하는 챗봇 @grok, 일반 Grok 챗봇과는 **별개 제품**.

## 근거 등급 표기
- **[공식-열람]**: 회사 공식 페이지를 이번에 curl로 직접 열어 본문을 확인함
- **[스토어-열람]**: 공식 앱스토어 등록 페이지를 직접 열어 확인함
- **[보도]**: 언론 보도 (00-landscape.md에서 이월, 이번에 재확인하지 않음)
- **[미확인]**: 확인 못함

열람 방법: WebFetch는 호스트 해석 실패, `curl -sL -m 20 -A "Mozilla/5.0"`로 한 페이지씩 열람. x.ai/bot, x.ai/changelog/bot, x.ai/pricing, x.ai/news, x.ai/legal/*, help.x.com은 HTTP 403(Cloudflare)이라 열람하지 못했다.

## 1. 열람한 공식 페이지

| 페이지 | 날짜/표기 | 결과 |
|---|---|---|
| https://x.ai/news/introducing-grok-bot | 2026-08-11 | 열람 |
| https://x.ai/news/grok-bot-more-plans | 2026-08-26 | 열람 |
| https://docs.x.ai/grok-bot/overview | Last updated 2026-10-07 | 열람 (".md" 주소로 하위 문서도 열람) |
| https://docs.x.ai/grok-bot/get-started, mobile, faq, computer-and-apps, approvals-security-and-privacy, security, skills-routines-and-automations, tag-on-x, troubleshooting, settings-and-notifications | 최신 | 열람 |
| https://cursor.com/help/grok-bot/plans (docs.x.ai가 가리키는 "Plans and billing") | 최신 | 열람 |
| https://cursor.com/pricing | 최신 | 열람 (Pro $20/월, Teams $40/사용자/월, 둘 다 "Grok Bot access" 체크) |
| App Store 한국 https://apps.apple.com/kr/app/grok-bot/id6794501026 | 버전 1.14.0 | 열람 |
| Google Play 한국 https://play.google.com/store/apps/details?id=ai.x.grok.bot&hl=ko&gl=KR | - | 열람 (등록 확인, 한국어 설명) |
| x.ai/bot, x.ai/changelog/bot, x.ai/pricing, x.ai/legal/bot-sharing-terms, help.x.com about-bot | - | 403, **열람 실패** |

중요 발견: 운영은 **Cursor 계정과 Cursor 백엔드**로 이뤄진다. 로그인은 "Sign In with Cursor", 사용량은 Cursor 계정에서 계량, 개인정보 설정도 Cursor 계정 설정을 따른다. [공식-열람: docs.x.ai get-started, cursor.com plans]

## 2. 사실 정리

### 무엇인가
- "AI teammates you can give real work to." 이름 붙인 Bot을 여러 개 만들어 메시지로 일을 맡긴다. 각 Bot은 **지속되는 클라우드 컴퓨터**(브라우저, 파일시스템, 터미널)에서 일하며 앱을 닫아도 계속 작동한다. [공식-열람: 8/11 공지, overview]
- 커넥터가 있으면 커넥터를, 없으면 컴퓨터 사용(웹사이트 직접 조작)으로 일한다. [공식-열람: overview]
- 사내 프로토타입으로 시작해 외부에 공개. [공식-열람: 8/11 공지]

### 시기
- 2026-08-11 베타 출시 (SuperGrok 계열, Cursor Pro/Pro+/Ultra, Cursor Teams Standard/Premium, 데스크톱과 iOS). [공식-열람]
- 2026-08-26 "more plans" 공지 (제목은 더 많은 플랜 포함). 이 공지 시점의 데스크톱 다운로드 버튼은 macOS만 표기. [공식-열람]
- 문서는 2026-10-07 갱신. 이 시점 문서는 macOS/Windows/Linux 데스크톱과 iOS/Android를 모두 지원한다고 기술. [공식-열람]
- 00-landscape.md의 8/21 vs 8/26 불일치는 공식 페이지(8/26)로 정리됨. 8/11 공지 본문은 "beta"라고 하고, 10월 문서는 beta 표기가 보이지 않음 (정식 전환 공지는 못 찾음) [미확인].

### 할 수 있는 일 (공식)
- 문자 스레드식 대화(데스크톱, 모바일 동기화), 음성 받아쓰기, 음성 채팅, Bot이 보내는 음성 메모. [공식-열람: overview, faq, mobile]
- 여러 Bot 병렬 실행, 그룹 채팅에서 Bot끼리 작업 전달. [공식-열람]
- 스킬(재사용 지침)과 루틴(일정/이벤트 실행). 한 번 시연하면 스킬로 저장하는 "Teach a task"(점진 배포, 녹화 10분 제한, 마이크 미녹음). 루틴은 Bot당 최대 50개, 최소 간격 5분, 실행 기록 루틴당 최근 20개. [공식-열람: skills-routines]
- Marketplace에서 플러그인(커넥터)과 스킬 설치. 채팅에서 `@`로 커넥터, `/`로 스킬 호출. [공식-열람: computer-and-apps]
- X의 공개 글 검색/읽기는 X 계정 연결 없이 가능(읽기 전용). DM, 북마크 등은 X 플러그인 필요. [공식-열람]
- **X에서 @bot 태그**로 작업 시작. 영국, EU, 호주 등은 미지원. 한국은 지원 불가 목록에 없음("대부분 국가"). X 계정에 기록된 국가 기준이며 VPN 무관. 영상/GIF 포함 글, @grok 동시 태그 글에는 응답 안 함. [공식-열람: tag-on-x]
- 첨부 파일: 25MB 이하, 영상 200MB, 데스크톱에서 한 번에 6개. [공식-열람: troubleshooting]
- 공식 예시 업무(8/26 공지): 영업 prospecting(발송은 사용자 승인), 웹사이트 제작/도메인 구매/배포, 메일/구독 정리(사용자가 허락할 때만 삭제/구독 해지), 고객지원 환불(정책 범위), 회의 대리 참석과 요약 등. [공식-열람]
- 한계: 사이트가 자동화를 막거나 세션이 만료되거나 사람 확인이 필요하면 Bot이 사용자에게 넘긴다. Bot은 한 번에 컴퓨터 사용 작업 하나. [공식-열람: overview, faq]

### 플랫폼 (공식 문서, 2026-10-07 갱신)
- macOS(Apple 칩/Intel), Windows(x64/Arm64), Linux(x64/Arm64; deb/rpm/AppImage). [공식-열람: get-started, faq]
- iPhone/iPad iOS·iPadOS 18 이상, Android 9 이상. [공식-열람: mobile]
- Bot의 컴퓨터는 Cursor 클라우드(미국)에서 실행. [공식-열람: overview, security "computers run in the United States today"]
- 주의: 8/26 공지 화면은 macOS만 표기. 문서 쪽이 더 새롭다고 판단하고, 글에서는 "공식 문서 기준"으로 쓴다.

### 요금 (공식)
- 별도 Grok Bot 구독은 없다. **Cursor 유료 개인 플랜(Pro, Pro+, Ultra) 또는 Cursor Teams 포함**, 또는 개인 **SuperGrok / SuperGrok Plus / SuperGrok Heavy / X Premium+ 구독을 Cursor 계정에 연결**, 또는 self-serve Grok Business 좌석. SuperGrok Lite는 미포함. [공식-열람: cursor.com plans]
  - 주의: 8/26 x.ai 공지는 X Premium+를 나열하지 않았으나 Cursor 도움말에는 포함됨. 최신 근거는 Cursor 도움말.
- Grok Bot 전용 **주간 사용량**이 따로 있고 매주 초기화. 소진 시 on-demand(종량제) 사용량이 Cursor로 청구될 수 있음(Teams는 기본 켜짐). [공식-열람]
- Cursor 플랜과 SuperGrok/X Premium+ 연결은 **합산되지 않는다**. 둘 다 있으면 사용량이 더 많은 쪽을 쓴다. 연결은 **영구적이라 해제/다른 Cursor 계정으로 이동 불가**. [공식-열람: plans, faq]
- 무료 체험: 사용량 크레딧 방식, 7일 창도 적용, 사용 후 복구 안 됨. [공식-열람: plans]
- 가격 숫자: Cursor Pro $20/월, Teams $40/사용자/월은 cursor.com/pricing에서 확인. Pro+/Ultra 금액과 SuperGrok 금액은 이번에 못 열어 **쓰지 않는다**. 사용량의 구체 수치(토큰, 횟수)도 공식 공개 없음. [공식-열람/미확인]
- 메트로신문의 "슈퍼그록 월 $30"은 보도, 미확인이라 사용 안 함.
- 기업(Enterprise): 대기자 명단/영업 문의. 공식 문서에서도 "rolling out". [공식-열람]

### 한국 제공 여부와 한국어
- **App Store 한국 등록 확인**: 한국 스토어에 "Grok Bot 앱", 제공자 X Corp., 무료 + 앱 내 구입, iOS 18.0 이상, 버전 1.14.0. [스토어-열람]
- **App Store 지원 언어 11개에 한국어 포함** (한국어, 독일어, 스페인어, 영어, 일본어, 중국어 간체/번체, 포르투갈어, 폴란드어, 프랑스어, 힌두어). 이는 **앱 화면 언어**다. [스토어-열람]
- 공식 문서: 데스크톱 앱 언어 선택에 한국어 포함("more than 20 languages, including ... Korean"). 모바일은 목록이 더 짧음(한국어 포함 여부는 문서에 명시 없음). [공식-열람: settings-and-notifications]
- **Google Play 한국 등록 확인**: 한국어 설명("실제 작업을 수행하는 AI 에이전트..."). [스토어-열람] (설치 가능 기기 조건, 다운로드 수는 미확인)
- **Bot이 한국어로 일하는 품질(한국어 대화, 한국어 사이트 조작)에 관한 공식 보증/문구는 없다.** 한국어로 말해도 되는지, 품질은 어떤지는 [미확인]. 글에서는 "앱 화면은 한국어 지원, 대화 품질은 공식 확인 없음"으로 구분한다.
- 한국에서의 **결제/계정**: 한국 청구 통화, 가격, 한국에서 SuperGrok/Cursor 구독 가능 여부는 이번에 확인 못 함 [미확인].
  - 2026-10-12 재확인: 한국 App Store 앱 내 구입 목록에 Pro ₩44,000 / Pro+ ₩129,000 / Ultra ₩449,000 표시 [스토어-열람]. SuperGrok·X Premium+ 한국 청구는 여전히 미확인. 나머지 공식 문서(overview, get-started, approvals, plans, tag-on-x, skills)는 기존 내용과 일치.
- 공식 서비스 지역 제한 문구(국가 목록)는 어느 문서에서도 못 찾았다. 다만 "준비된 국가 목록이 없음"이 "모든 국가 제공"의 증거는 아니다. @bot 태그만 지역 제한을 명시. 한국 스토어 등록이 있으므로 한국 사용자가 공식 경로로 설치/로그인하는 것은 문제 없어 보임. [스토어-열람 + 공식-열람]

### 보안, 권한, 개인정보 (공식)
- **하나의 클라우드 컴퓨터를 모든 Bot이 공유**: 파일, 브라우저 세션, 명령줄 자격 증명 공유. "Bot을 보안 경계로 쓰지 말 것". 컴퓨터는 사용자 계정 단위. [공식-열람: overview, computer-and-apps, approvals]
- 승인 구조: 민감/중대한 작업은 승인 카드(Allow once, Always allow, Deny). **Auto Review**(모델 기반 사전 점검)와 규칙(Ask first가 Allow automatically보다 우선). 문서가 "Auto Review는 모델 기반이므로 최소 권한과 명시적 승인을 대체하지 않는다"고 명시. [공식-열람]
- 루틴/트리거/다른 Bot에서 시작된 작업의 승인은 약 10분 후 **만료**되어 실행되지 않음. [공식-열람]
- 비밀번호, 패스키, 2단계 인증, CAPTCHA, **결제 확인**은 사용자가 **Agent Computer에서 직접 인수**해서 입력. 일반 채팅에 비밀번호/일회용 코드를 보내지 말 것. 지원되는 연결은 "secure secret request"(가려짐, 대화 기록과 모델에서 제외). [공식-열람]
- 내 로컬 컴퓨터 명령 실행: 기본 **Ask every time**, Always allow / Never allow 선택 가능. 클라우드 컴퓨터와 별개. [공식-열람]
- 문서 권고: 구매, 금융 이체, 삭제, 권한 변경, 운영 변경, 약관 동의는 요청에서 명시적으로 경계를 정할 것. 승인은 이미 끝난 작업을 되돌리지 못함. [공식-열람]
- **전용 결제 수단/지출 상한 기능은 문서에서 못 찾았다.** 결제는 사용자가 직접 입력/확인하는 방식. 도메인 구매 예시는 8/26 공지에 있음. 지출 상한 기능 유무는 [미확인]; 글에서는 "공식 문서에 지출 상한 설정이 있다고 확인되지 않음"으로 쓴다.
- 공유 링크로 Bot을 공유하면 **구성(설정)** 이 노출되고 컴퓨터/로그인은 공유되지 않음. 비밀, 고객 정보, 내부 URL을 넣지 말 것. 공유된 Bot 추가 시 제3자 Bot 약관 동의(약관 원문은 403으로 미열람). [공식-열람: faq, approvals]
- 데이터: Grok Bot은 **클라우드 데이터 저장이 필수**라 Cursor의 Legacy Privacy Mode 계정은 시작 불가. 학습 거부는 Cursor 계정/개인정보 설정을 따름. Bot 삭제는 공유 컴퓨터의 파일/브라우저 세션을 지우지 않음. [공식-열람]
- 컴퓨터는 현재 **미국**에서 실행되고 Cursor의 US-only 데이터 거주 프로그램은 기본 적용되지 않음. 백엔드 보존은 Cursor 약관 따름. [공식-열람: security]
- 보안 인증: security 문서에 Anysphere(Cursor 운영사)가 ISO/IEC 27001, 42001 보유로 기술. SOC 2 여부는 이번에 확인 못 함. (00 노트의 "SOC2 미공시"는 2차 자료였으므로 쓰지 않음.) 일부 Enterprise 전용 통제(네트워크 정책, 감사 로그, SCIM 등)는 self-serve에 없음. [공식-열람]
- 모든 Bot이 `/workspace` 및 컴퓨터를 공유하므로 서비스에서 로그아웃, 임시 파일 정리, 커넥터 승인 해제 권고. 접근 회수 절차(루틴 중지, 로그아웃, 커넥터 해제, 파일 삭제)가 문서에 나열됨. [공식-열람]

### 다른 에이전트와 다른 점 (공식 주장 + 구조)
- 공식 주장: 워크플로를 먼저 만들 필요 없이 메시지로 시작, 여러 Bot을 팀처럼 운용, 시연으로 루틴 학습, 사용자 앱에 로그인해 실제 도구에서 작업(API/MCP가 없는 플랫폼 포함). [공식-열람: 8/11 공지]
- 구조상 차이: 사용 권한과 청구가 xAI가 아니라 **Cursor 계정**에 묶임. 모든 Bot이 한 컴퓨터를 공유. 모든 사용량이 별도 주간 한도. 이 점들은 공식 문서 기반.
- 타 제품(Muse, Dots, Claude)과의 비교는 X5가 한다. 이 노트는 Grok Bot 사실만 기록.

## 3. 숫자 사용 지침
- 사용 가능: 8/11, 8/26, 10/7(문서 갱신), 앱 버전 1.14.0(스토어 기준, 바뀔 수 있음), iOS 18+/Android 9+, 25MB/200MB/6개, 루틴 50개/5분/20개 기록, 승인 만료 약 10분, 녹화 10분, Cursor Pro $20/월·Teams $40/사용자/월.
- 쓰지 않음: 이용자 40만(출처 불명), SuperGrok 월 $30, SuperGrok Heavy 약 $300 (공식 미확인), 사용량 한도 수치.

## 4. 남은 불확실성
1. Bot의 한국어 대화/작업 품질에 대한 공식 문구 없음.
2. 한국에서의 요금 청구, 통화, SuperGrok/Cursor 구독 가능 여부 미확인.
3. 베타 종료 시점 (10월 문서에는 beta 표기가 없지만 정식 전환 공지는 못 찾음).
4. 결제 상한/지출 제한 기능 유무.
5. Pro+/Ultra 금액, SuperGrok 금액 (x.ai/pricing 403).
6. x.ai/bot 제품 페이지, 변경 이력(changelog) 열람 불가. Google Play 설치 요건 미확인.
7. 제3자 Bot 공유 약관 원문 미열람.

---

## 비교표용 요약 (X5용)

| 항목 | 내용 | 근거 |
|---|---|---|
| 출시일 | 2026-08-11 베타 출시 (미국 등 지역 한정 언급 없음). 8/26 포함 플랜 확대 | [공식-열람] x.ai/news |
| 플랫폼 | macOS, Windows, Linux 데스크톱 앱 + iPhone/iPad(iOS 18+), Android 9+. 작업은 클라우드 컴퓨터에서 실행. (8/26 공지 화면은 macOS만 표기, 10/7 문서 기준) | [공식-열람] docs.x.ai |
| 요금 | 별도 구독 없음. Cursor Pro·Pro+·Ultra 또는 Teams 포함, 또는 SuperGrok/Plus/Heavy·X Premium+ 연결. 전용 주간 사용량, 초과분은 종량제 청구. Cursor Pro $20/월, Teams $40/사용자/월. 이 외 금액은 미확인 | [공식-열람] cursor.com |
| 한국 제공 | 한국 App Store와 Google Play에 등록 확인. 국가 제한 목록은 못 찾음 (@bot 태그만 일부 지역 제외, 한국은 제외 목록에 없음) | [스토어-열람] + [공식-열람] |
| 한국어 | 앱 화면 한국어 지원(App Store 지원 언어에 포함, 데스크톱 문서에도 포함). Bot의 한국어 작업 품질은 공식 문구 없음 | [스토어-열람] + [공식-열람], 품질 [미확인] |
| 상시 작동 여부 | 예. 전용 클라우드 컴퓨터에서 앱/노트북을 닫아도 계속 작동, 루틴 실행 | [공식-열람] |
| 외부 서비스 연동 | Marketplace 플러그인(커넥터) + 커넥터 없는 사이트는 컴퓨터 사용으로 직접 조작. Gmail, Slack 등 사용 예 공식 공지. X는 공개글 읽기 기본 제공, @bot 태그 | [공식-열람] |
| 결제 기능 | 전용 결제 수단/지출 상한 기능은 문서에서 확인 안 됨. 구매 작업은 가능(도메인 구매 예시)하나 결제 확인은 사용자가 직접 컴퓨터를 인수해 입력. 구매/이체는 요청에서 경계 지정 및 승인 권고 | [공식-열람] |
| 확인 수준 | 공식 공지, 공식 문서(2026-10-07 갱신), Cursor 도움말, 한국 스토어 두 곳 직접 열람. 한국어 품질, 한국 청구, 베타 종료, 지출 상한은 미확인 | - |
  - 2026-10-12: docs.x.ai/grok-bot/security 에 Anysphere ISO/IEC 27001, 42001 보유, Grok Bot 범위 포함 명시. Bot 컴퓨터는 현재 미국 [공식-열람]

## 2026-10-19 재확인
- cursor.com/help/grok-bot/plans: 접근 경로에 "The X Subscription"(Premium·Super·Ultra 포함, Plus·Free 제외, Grok·Cursor 공유 주간 풀, 초과분은 선불 크레딧)이 새로 나오고 Cursor Pro/Pro+/Ultra/Teams는 "legacy"로 표기. 본문(03) 플랜 표에 반영. 가격은 Cursor pricing 페이지 URL이 404라 재확인 못 해 기존 값 유지.
- 한국 App Store 목록: 한국어 지원, Pro ₩44,000 / Pro+ ₩129,000 / Ultra ₩449,000 그대로.
- cursor.com/help/the-x-subscription/overview 읽음. 한국 제공 여부는 이 페이지들에 여전히 언급 없음.
