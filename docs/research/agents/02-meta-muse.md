# Meta Muse 조사 노트 (기준일: 2026-10-10)

담당: X2. 00-landscape.md의 Muse 항목을 공식 출처로 다시 확인했다.

## 근거 등급 표기
- **[공식-열람]**: 회사 공식 페이지 본문을 이번에 curl로 직접 열어 확인함
- **[공식-검색요약]**: 회사 공식 페이지(Meta 도움말센터 등)가 JS 렌더링이라 본문을 못 읽고, 검색 결과의 공식 페이지 요약으로만 확인함
- **[보도]**: 언론/블로그. 본문에서 "언론 보도 기준"으로 밝혀야 함

## 열람한 공식 페이지
1. https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/ (2026-09-08 게시, 09-30 수정) [공식-열람]
2. https://muse.ai (랜딩 페이지) [공식-열람]
3. https://introducing.muse.ai ("How We Designed Muse", 2026-09) [공식-열람]
4. https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse ("How We Built Safety Into Muse", 2026-09-08, security.muse.ai가 여기로 이동) [공식-열람]
5. https://muse.ai/terms (Muse Supplemental Terms of Service) [공식-열람]
6. https://muse.ai/privacy [공식-열람]
7. https://about.fb.com/news/2026/09/introducing-muse-small-business/ (2026-09-29) [공식-열람]
8. https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/ (Connect 2026 정리) [공식-열람]
9. https://ai.meta.com/muse/ (제품 소개 FAQ, 일부 문장만 HTML에서 추출) [공식-부분열람]
10. Meta 도움말센터 "About Muse subscriptions" https://www.meta.com/help/subscriptions/1021145227643680/ , "How to get started with Muse" https://www.meta.com/help/artificial-intelligence/1331373868832401/ : 본문이 JS 렌더링이라 직접 못 읽음. 검색 결과 요약으로만 확인 [공식-검색요약]
- muse.ai/help, /pricing, /faq 등은 HTTP 401. WebFetch는 호스트 해석 실패(ENOTFOUND)로 사용 불가.

## 1. 무엇인가 [공식-열람]
- Meta의 개인 AI 에이전트. "질문에 답하는 데서 그치지 않고 실제로 일을 한다." 목표를 말하면 계획을 세우고 스스로 진행한다. 이메일 보내기, 여행 예약, 브라우저 열기, 양식 작성, 협상 등. (about.fb.com)
- 모델: Muse Spark 기반. 안전 글에서는 "Muse Spark 1.3"이라고 표기. (about.fb.com, research.meta.ai)
- 설계 글: 하나의 긴 대화(main chat)와 사이드 채팅(side chats), Goals 탭, Ideas 탭, 활동 로그, 메모리 파일(MEMORY.md)을 읽고 수정 가능, 아바타와 이름 짓기, 문서·PDF·웹페이지·대시보드 같은 "Artifacts" 생성. (introducing.muse.ai, privacy)
- 상시 작동: 앱을 닫아도 일정에 따라, 또는 관련 이벤트에 반응해 계속 일하고, "의미 있게 새롭거나 입력이 필요할 때만" 알린다. 먼저 메시지를 보낼 수도 있고 끄거나 줄일 수 있다. (introducing.muse.ai, ai.meta.com/muse)

## 2. 누가, 언제 [공식-열람]
- Meta Platforms. 2026-09-08 발표, 미국에서 롤아웃. 수정일 09-30.
- 2026-09-23 Connect 2026: AI 글라스 지원 예정("coming months"), 음성 모드, 커넥터 추가, Muse 전용 이메일 주소(예정), 포켓형 기기 "Muse Charm"(연말 이후 추가 소식 예정). 
- 2026-09-29: Muse for Small Business(커넥터와 스킬 확대).
- 00 노트의 "9월 23일 비디오 아바타, macOS 앱 제어" 등은 이번에 공식 확인하지 못함. 다만 muse.ai 랜딩이 "Muse app on mobile, Mac, or directly in WhatsApp"이라고 적어 Mac 앱 존재는 공식 확인됨.
- "10월 7일 iPad 앱"은 공식 확인 못함 [보도, 미확인].

## 3. 할 수 있는 일 [공식-열람]
- 브라우저로 검색, 사이트 탐색, 양식 작성, 예약, 구매. 전용 파일 시스템과 터미널로 자체 코드·도구 작성, 문서·PDF·웹페이지 생성. (introducing.muse.ai)
- 목표 관리(Goals), 아이디어 제안(Ideas), 모니터링(예: 날씨 알림), 리마인더. (ai.meta.com/muse, introducing.muse.ai)
- 기억: 한 번 언급한 정보도 기억해 먼저 제안. 인스타그램 릴스 레시피를 장보기 목록으로 바꾸는 예. "forget"으로 특정 내용 삭제 요청 가능. (about.fb.com, privacy)
- 커넥터: 이메일, 캘린더, 인스타그램 등. 서드파티 API/CLI가 있으면 자체 커스텀 커넥터도 작성 가능. 설정 앱에서 전체 목록 확인. (muse.ai, research.meta.ai, small-business 글)
  - Small Business 글: Asana, Box, Canva, Dropbox, Figma, Granola, HighLevel, Intuit QuickBooks, Klaviyo, Lovable, Notion, Shopify, Slack, Stripe, Zoom, Facebook/Instagram 비즈니스 계정.
  - Connect 글: Walmart, Best Buy, American Eagle, DICK'S, Fanatics, Gap, Michael Kors, Sephora, Ulta, Wayfair 추가, 결제는 Shop Pay와 PayPal 추가, Expedia는 "coming soon", Instacart, Notion, Granola, GitHub, Box.
- 대화 채널: Muse 앱(모바일, Mac)과 WhatsApp 안에서 대화. (about.fb.com, muse.ai)

## 4. 플랫폼 [공식-열람]
- iOS, Android, 웹(muse.ai), Mac 앱, WhatsApp. AI 글라스는 "coming soon / coming months". (about.fb.com, muse.ai, Connect 글)
- Windows 앱은 공식 언급 없음.

## 5. 요금 [공식-열람 + 공식-검색요약]
- 공식 발표: "대부분의 용도는 무료, 더 하고 싶은 사람을 위한 구독 플랜." (about.fb.com)
- ai.meta.com/muse: "사용량 한도가 있는 무료로 제공. 무료 한도에 닿으면 유료 구독으로 올리거나 한도가 갱신될 때까지 기다릴 수 있음."
- 도움말센터 "About Muse subscriptions" [공식-열람, 2026-10-12 재확인: 가격·토큰·제한적 테스트·18세 이상·지원 국가 거주 조건 모두 동일. 한국 언급 없음]: Power 월 $20(주당 5억 Muse 토큰), Maximum 월 $100(주당 30억 토큰). 월 단위 자동 갱신. 구독하려면 Muse가 제공되는 국가에 있어야 하고 18세 이상이어야 함. "Muse와 Muse 구독은 제한적 테스트 중이며 모든 지역에서 제공되지 않음", "혜택과 제공 여부는 지역과 계정에 따라 다를 수 있음".
  - 00 노트의 "Power/Maximum" 명칭은 도움말센터 표기가 "Maximum"(일부 매체는 "Max")이므로 Maximum으로 쓴다.
- 무료 주간 한도 수치: 공식 미공개. "약 1억 토큰"은 테스터 보고, 메트로신문 [보도]. 본문에 쓰지 않거나 "언론 보도 기준"으로만.
- 추가 AI 사용량(additional paid AI usage) 구매 옵션이 있을 수 있다고 약관에 명시. 크레딧은 환불·현금 교환 불가. [공식-열람 terms]
- Meta는 무료 제공 중단·변경 권리를 약관에 유보. [공식-열람 terms]

## 6. 한국 제공 / 한국어
- **제공 국가**: 
  - 9/08 공식 발표: "rolling out in the US" [공식-열람].
  - 9/29 Small Business 공식 글: "a personal AI agent available in the US and Canada" [공식-열람]. 즉 캐나다는 공식 글에서 확인됨.
  - 멕시코 추가(9/18)라는 주장은 단일 검색 요약뿐 [보도, 미확인].
  - 도움말센터: 지원 국가 목록 없음, "limited testing, not available in all locations yet" [공식-검색요약].
  - 한국은 어느 공식 페이지에도 없음. 한국 출시 일정 공식 발표 없음. 국내 언론도 "미정" [보도: 검색 결과 요약].
- **한국어**: 지원 언어 목록을 공식 페이지에서 찾지 못함. 확인된 것: Meta 뉴스룸(about.fb.com) 사이트 자체는 한국어 번역 버튼이 있으나 이는 뉴스룸 번역일 뿐 Muse 지원과 무관. 공식 확인 불가로 처리.
- **연령**: 18세 이상(또는 해당 국가가 요구하는 더 높은 연령). [공식-열람 terms]
- **우회 가입**: 약관은 "관련 법률상 서비스 수령이 금지된 경우 사용 불가"를 명시. VPN 우회 안내 글이 다수 있으나 이 사이트는 안내하지 않는다. 약관 위반 가능성, 계정 정지(약관 17조에 정지·종료 권한 명시), 결제 수단·본인확인 문제를 짚는다.
- 결제/개인정보 측면: 미국 외 거주자가 쓰면 미국 약관과 분쟁 해결(중재) 조항이 적용될 수 있음. 약관은 "미국·캐나다 거주자는 중재", "그 외 거주자는 Meta 이용약관에 따름"이라고 구분. (법률 해석은 하지 않는다)

## 7. 시작하는 법 (미국 등 제공 지역 기준, 한국 사용자에게는 안내하지 않음)
- muse.ai에서 "Log in or create an account": 휴대폰 번호 또는 이메일 입력(필수) 후 Continue. 휴대폰 번호 입력 시 SMS 알림을 받을 수 있다고 표기. [공식-열람 muse.ai]
- 앱: iOS/Android 앱, Mac 앱, WhatsApp. 도움말센터 "How to get started with Muse" 본문은 열람 못함.
- 한국 출시 전에는 이 절차가 한국에서 공식 제공되지 않으므로, 본문에서는 단계별 따라하기 대신 "출시되면 확인할 것"을 안내한다.

## 8. 결제 · 권한 · 개인정보 [공식-열람]
**결제**
- Stripe Link로 결제. 일회용 카드 번호 발급으로 실제 카드 정보는 판매자와 에이전트에게 숨겨짐. Muse는 Link의 구매자 보호(손상·분실 환불, 가격 하락, 무료 반품, 반품 보장)를 받는 "첫 AI 에이전트"라고 Meta가 표현. "적격 구매"에 한정. (about.fb.com, muse.ai)
- Shop Pay는 "coming soon"(9/08), Connect 글(9/23)에서 Shop Pay와 PayPal 결제 추가를 언급. 1Password 지원은 "coming soon".
- 이미 결제 수단이 저장된 사이트에서는 결제 페이지를 감지해 구매 세부 내용을 매번 사람이 승인하도록 한다. (research.meta.ai)

**승인과 권한**
- 이메일 발송, 구매 같은 민감 작업은 사람의 승인을 거친다. 승인 카드는 대화가 아니라 클라이언트 UI에서 별도로 뜸. 승인 범위: 1회, 세션, 작업 단위, 기간 제한, 영구 중에서 Sentinel이 선택지를 제시. (research.meta.ai, ai.meta.com/muse "allow once, always allow, deny")
- 기본값은 일반 탐색은 허용하고 되돌리기 어려운 동작에서 멈춤. 더 느슨하게/엄격하게 바꿀 수 있음. (introducing.muse.ai)
- 서비스별로 읽기와 쓰기 권한 분리(서비스가 지원하는 경우). 이메일 커넥터는 일회용 코드, 비밀번호 재설정 링크, 매직 로그인 링크를 걸러냄. (research.meta.ai)
- 활동 로그(audit trail)로 한 일과 할 일을 확인. 언제든 접근 변경·연결 해제 가능. (about.fb.com, muse.ai)
- 약관: 사용자가 Muse의 모든 행동에 대한 책임을 진다. "상태를 바꾸는 행동(메시지 발송, 금융 거래, 데이터 삭제, 설정 변경)은 사전 사람 검토 없이 하지 말 것"을 명시하고, 사전 승인(pre-authorization)을 주는 것도 신중하라고 함. Meta는 AI 행동 관련 청구권을 포기하도록 규정하고 책임 한도를 "$250 또는 12개월간 지불액 중 큰 쪽"으로 제한. 정확성 경고: 출력과 행동이 틀릴 수 있음. (terms)
- Muse가 만든 산출물(웹사이트 등)의 호스팅·내용에 대한 책임도 사용자에게 있음. (terms)

**구조적 안전장치**
- 사용자별 전용 클라우드 VM(Muse Secure VM). 격리된 Linux, 전체 브라우저, 사용자가 언제든 개입. (muse.ai)
- 별도 Sentinel 에이전트가 커넥터 행동과 모든 네트워크 외부 통신의 유일한 허가 주체. 에이전트는 실제 자격 증명을 보지 못하고 대리 토큰만 봄. (about.fb.com, research.meta.ai)
- 비밀번호 직접 입력은 보안 저장소로 바로 가고 Muse는 보지 못함. 사용자가 브라우저를 직접 조작하는 동안 에이전트는 멈춤. (research.meta.ai)
- 프롬프트 인젝션: 모델 훈련, 외부 데이터 "신뢰 불가" 표시, 분류기 앙상블, 사람 승인의 다층 방어. Meta 스스로 "Muse는 실수를 할 것이다"라고 밝힘. 버그 바운티 최대 $300,000. (research.meta.ai)
- Muse Confidential VM(Meta도 접근 불가한 암호화)은 "올해 후반 도입 예정". **현재 구조는 Meta가 필요할 때 데이터에 접근하는 것을 막지 않는다**고 명시. (research.meta.ai)

**개인정보**
- 학습 활용: 상호작용을 AI 학습에 쓰는 설정이 **처음 사용 시 켜져 있음(on)**. 설정(Settings) > 데이터 컨트롤(Data controls)에서 끌 수 있고, 끄면 이전 상호작용에도 적용. 켜 둔 경우에도 이름, 이메일, 전화번호, 주민번호(SSN) 등 일부 개인정보를 제거하고 계정과 분리한다고 설명. (privacy) — 00 노트의 "opt-out 가능" 표현을 "기본 켜짐, 끌 수 있음"으로 정정.
- 광고: 대화와 VM 데이터는 Meta 광고 시스템과 공유하지 않음. 단, Muse의 웹 활동은 본인 활동처럼 보이므로 (예: 셔츠 사이트 방문) 간접적으로 광고에 영향을 줄 수 있다고 Meta가 인정. (about.fb.com, research.meta.ai)
- 삭제: 메시지, 사이드 채팅, VM 파일 삭제 가능. Reset Muse는 모든 Muse 데이터 삭제. 삭제 후에도 학습한 내용을 "기억"할 수 있어 Forget 스킬을 쓰거나 MEMORY.md 확인. (privacy)
- 기억/데이터 확인: MEMORY.md 등을 직접 읽고 편집, 다운로드. VM은 지속 백업. (research.meta.ai, introducing.muse.ai)
- OAuth 토큰은 Meta 중앙 인프라가 아니라 사용자 VM에 저장. (research.meta.ai)
- "거부한 메시지 DB가 동기화됐다" 같은 논란은 미검증. 본문에 쓰지 않음.

## 9. 다른 에이전트와 다른 점 (공식 주장 기준)
- 사용자별 전용 클라우드 VM + 별도 Sentinel 구조. Meta는 "다른 에이전트가 제공하지 않는 보호"라고 주장(자사 주장임을 밝힐 것).
- WhatsApp 안에서 대화 가능. 인스타그램, 페이스북 등 Meta 앱 커넥터.
- 구매 보호가 붙은 Stripe Link 결제(적격 구매 한정).
- 개인 사용자 대상이며 "무료 + 사용량 한도" 구조. 개발자 대상 Claude Code와 달리 코드를 모르는 일반 사용자 지향.

## 10. 숫자·주장 검증 결과
| 항목 | 결과 |
|---|---|
| 미국 다운로드 250만+ (Sensor Tower) | 공식 확인 못함. 본문에 쓰지 않음 |
| Power $20 / Maximum $100 | 도움말센터 [공식-검색요약]. 가격은 "2026-10-10 기준, 미국 달러, 지역마다 다를 수 있음" 표기 |
| 주간 토큰 5억/30억 | 위와 동일 |
| 무료 주간 1억 토큰 | 공식 미공개, 보도(테스터 보고). 쓰지 않음 |
| 캐나다 제공 | 공식 Small Business 글에서 확인 |
| 한국 출시 | 공식 언급 없음 |
| 한국어 지원 | 공식 확인 불가 |
| 10/07 iPad 앱, 비디오 아바타, macOS 앱 제어 | 공식 확인 못함 (Mac 앱 존재만 확인) |

## 11. 남은 불확실성
1. Meta 도움말센터 본문(구독, 시작하기, 지원 국가)을 직접 못 읽음. 검색 요약 의존.
2. 지원 언어, 한국어 UI·이해 수준. 
3. 무료 한도의 공식 수치. 
4. 앱스토어 등록 페이지(미국 계정 한정으로 추정). 
5. Mac 앱의 정확한 기능과 출시 시점.
6. 개인정보: 한국 거주자에게 적용될 약관 지역 조항.
7. 한국 출시 일정.

## 비교표용 요약
| 항목 | 내용 | 확인 수준 |
|---|---|---|
| 출시일 | 2026-09-08 (미국). 캐나다는 9/29 공식 글에서 확인 | 공식 열람 |
| 플랫폼 | iOS, Android, 웹(muse.ai), Mac 앱, WhatsApp 대화. AI 글라스는 예정 | 공식 열람 |
| 요금 | 사용량 한도가 있는 무료. 유료 Power 월 $20(주 5억 토큰), Maximum 월 $100(주 30억 토큰). 제한적 테스트 중, 지역·계정마다 다를 수 있음 | 무료/구독 존재는 공식 열람, 가격은 도움말센터 검색 요약 |
| 한국 제공 | 아니오. 공식 제공 지역은 미국(및 캐나다). 한국 일정 미정. 우회 가입 비권장 | 공식 열람(한국 언급 없음) |
| 한국어 | 공식 확인 불가 | 확인 못 함 |
| 상시 작동 여부 | 예. 앱을 닫아도 일정·이벤트에 따라 클라우드 VM에서 계속 작업 | 공식 열람 |
| 외부 서비스 연동 | 예. 이메일, 캘린더, 인스타그램, Shopify, Slack, Notion, GitHub 등 커넥터와 커스텀 커넥터 | 공식 열람 |
| 결제 기능 | 예. Stripe Link 일회용 카드(적격 구매 보호), Shop Pay와 PayPal 추가 발표. 구매 전 사람 승인 | 공식 열람 |
| 확인 수준 | 공식 페이지 다수 직접 열람. 도움말센터 요금·지역 본문은 검색 요약 수준 | — |

## 2026-10-19 재확인
- 변경 없음. Newsroom 발표문은 미국 롤아웃만 언급(한국·언어 언급 없음, 9/30 업데이트 표기 있으나 내용 미상). 도움말센터: 무료/Power $20 5억 토큰/Maximum $100 30억 토큰, "limited testing, not available in all locations" 동일.
