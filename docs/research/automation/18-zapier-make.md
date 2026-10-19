# Zapier / Make 자동화 (2026-10-10 조사)

## 5단계 원문 대조 (2026-10-10)
- 원문 확인(zapier.com/pricing): Free $0, 월 100 task, Two-step Zaps, 폴링 15분(Professional 2분, Team/Enterprise 1분), Professional부터 Multi-step. 폴링은 task를 쓰지 않고 동작이 성공할 때만 task 소모. 통화 목록에 KRW 없음(USD 기본).
- 원문 확인(help.zapier.com): 새 계정 14일 무료 체험 자동 시작, 카드 불필요, 자동 유료 전환 없음. "Zapier is only available in English" 확인.
- 원문 확인(zapier.com/apps/gmail/...): New Email, New Labeled Email, Create Spreadsheet Row.
- 원문 확인(help.make.com): 시나리오 기본 15분 실행, 최소 간격은 플랜별, On demand/Run once 존재. 크레딧: 일반 앱 1 operation = 1 credit, 크레딧이 operations를 대체한 청구 단위. 2025-11-06 크레딧 한도·추가 크레딧 가격 조정 공지.
- 원문 미확인: www.make.com(가격·연동 페이지는 Cloudflare 403), Make 무료 플랜 1,000 크레딧·최소 15분, Make의 Watch emails/Add a Row 모듈명, Make 한국어 UI, Zapier 한도 도달 시 Zap 중단 동작(커뮤니티 답변 근거였음; 본문에서 단정 삭제).

(아래는 4단계 당시 기록)

조사 방식 주의: WebFetch가 외부 사이트에 접속하지 못해, WebSearch가 반환한 공식 도메인(zapier.com, help.zapier.com, help.make.com, make.com) 검색 결과 요약에 기반한다. 메뉴 문구는 직접 확인하지 못했다.

## 핵심 사실: Zapier
- 구조: 트리거(Zap을 시작하는 이벤트)와 액션(Zap이 수행하는 이벤트). (출처: https://zapier.com/blog/connect-gmail-with-google-sheets/ 검색 요약)
- Gmail 트리거 "New Email"(메일함에 새 메일 도착, 폴링), Gmail "New Labeled Email" 예시. Google Sheets 액션 "Create Spreadsheet Row". (출처: https://zapier.com/apps/gmail/integrations/google-sheets , https://zapier.com/apps/gmail/integrations/google-sheets/9991/add-new-labeled-gmail-emails-to-rows-in-google-sheets)
- 테스트: 트리거 테스트(Test Trigger)로 샘플 메일을 가져오고, 액션 테스트(Test step)로 시트에 실제 행을 만든다. 테스트 후 게시(Publish)하면 새 항목마다 실행. (출처: 검색 요약, 오래된 자료라 문구 변동 가능)
- Free 플랜(공식 가격 페이지 검색 요약): $0, 월 100 task, 2단계 Zap만(트리거+액션 1개), 폴링 15분(Professional은 2분). task는 성공한 동작에 대해 소모, 일부 앱은 한 번에 여러 task 소모, 실패한 동작은 소모 안 함. 한도에 도달하면 다음 결제 주기까지 Zap이 꺼진다(커뮤니티 직원 답변, 공식 가격 페이지 아님). (출처: https://zapier.com/pricing , https://help.zapier.com/hc/en-us/articles/8496197192461-Get-started-with-your-free-Zapier-trial 검색 요약)
- 언어: Zapier 도움말은 "제품이 영어로만 제공된다"고 안내(브라우저 번역 사용 권장). Translate by Zapier 단계는 데이터 번역 기능(UI 현지화 아님). (출처: https://help.zapier.com/hc/en-us/articles/35201074788877-Can-I-change-the-language-of-my-Zapier-account)
- Slack 알림은 Slack "Send Channel Message" 액션(가격 Free는 2단계 한정이므로 3단계 구성은 유료). (출처: https://zapier.com/apps/google-sheets/integrations/slack)

## 핵심 사실: Make
- Scenario = 모듈로 만든 워크플로. 모듈 = 앱에서 수행하는 동작. 라우터는 모듈 뒤에서 데이터를 분기. (출처: https://help.make.com/step-1-plan-your-scenario , 검색 요약)
- Gmail "Watch emails" 트리거(새 메일 수신). Google Sheets "Add a Row"(맨 아래에 행 추가). Slack "Create a Message" 모듈명은 확인 못 함. (출처: https://www.make.com/en/integrations/google-email/google-sheets)
- 공식 튜토리얼: 이메일 → Text Parser(정규식으로 값 추출) → Google Sheets. (출처: https://www.help.make.com/en/help/tutorials/how-to-connect-email,-text-parser-and-google-sheets)
- 스케줄: 기본 15분마다 실행, 간격 최소값은 플랜별. Free는 최소 15분. On demand는 Run once 버튼/API로만 실행; Run once 때 스케줄 설정은 무시되고 1회 실행. (출처: https://help.make.com/schedule-a-scenario , https://academy-content.make.com/courses/make-basics-modules/05-scheduling-your-scenario/)
- 과금: 2025년 operations에서 크레딧 기반으로 전환. Free 월 1,000 크레딧($0), 모듈 동작 하나가 1크레딧(일부 AI 기능은 더 소모). Core $12, Pro $21(10,000크레딧 구간) 검색 요약이나 구 자료와 상충하니 가격 페이지 확인. (출처: https://www.make.com/en/pricing , https://help.make.com/adjustments-to-plans-and-pricing)
- Google Sheets 모듈 연결은 Google 로그인으로 연결 생성. (출처: https://apps.make.com/google-sheets)
- 한국어 UI 지원 여부는 확인 못 함.

## 따라하기 절차 (공통 패턴)
1. 전용 Gmail 라벨 "주문" 같은 것과 시트(열: 받은 시각, 보낸 사람, 제목, 링크) 준비.
2. Zapier: 트리거 Gmail New Labeled Email → 액션 Google Sheets Create Spreadsheet Row → 테스트 → Publish. (알림 단계는 유료 플랜 또는 대안)
3. Make: Gmail Watch emails → Google Sheets Add a Row → (Slack 등 알림 모듈 추가) → Run once → 스케줄 켜기.
4. 첫 실행 확인, 실패 시 실행 기록 확인.

## 확인 못 함
- 두 도구의 현재 메뉴/버튼 이름 전체, 현재 가격(공식 페이지에서 확인 필요), 한국어 UI, Make의 Slack 모듈 정확한 이름, 국내 메신저(카카오 등) 지원.

## 출처 목록
위 URL 전체 (zapier.com/pricing, zapier.com/apps/gmail/integrations/google-sheets, help.zapier.com 2건, make.com/en/pricing, help.make.com 3건, apps.make.com/google-sheets).

## 6단계 재점검 (2026-10-10)
- 접근: help.make.com, apps.make.com은 curl로 열림(WebFetch는 호스트 해석 실패). www.make.com 가격 페이지는 여전히 접근 불가.
- 확인함: Free 플랜 월 1,000 크레딧 (https://help.make.com/cancel-your-subscription, 문서 갱신 2026-08-31). 크레딧 기본 규칙 1 operation = 1 credit (https://help.make.com/credits).
- 확인함: 모듈 이름 Gmail > Watch emails(트리거), Google Sheets > Add a Row (https://apps.make.com/gmail-modules, https://apps.make.com/google-sheets-modules). Slack은 Send a Message(모듈 설명), 같은 문서의 권한 표에는 Create a Message도 있음.
- 확인함: 스케줄 최소 간격은 "플랜에 따라 다르다"(https://help.make.com/schedule-a-scenario). Free의 구체적 값은 찾지 못함. 기존 노트의 "Free 최소 15분"은 근거를 못 찾아 본문에 쓰지 않음.
- 못 찾음: Make 한국어 UI 지원, Free 최소 간격, Free 활성 시나리오 수 제한.
- 본문 조치: "Make 쪽은 아직 확인 중" caution Aside 삭제, 남은 미확인 항목은 note Aside에 유지.

## 2026-10-12 재확인
- 재확인(WebFetch): zapier.com/pricing(Free 100 task, Two-step, 15분; Professional 2분 Multi-step; Team 1분; 19개 통화에 KRW 없음), Gmail+Sheets 연동 페이지(New Email, New Labeled Email, Create Spreadsheet Row), help.zapier.com 2건(영어만).
- 재확인(curl, help.make.com / apps.make.com): credits(1 operation = 1 credit), schedule-a-scenario(기본 15분, 최소 간격은 플랜별), cancel-your-subscription(Free 월 1,000 크레딧), adjustments-to-plans-and-pricing(2025-11-06), step-1-plan-your-scenario, gmail/google-sheets/slack-modules(Watch emails, Add a Row, Send a Message + 권한표의 Create a Message). 변동 없음.
- 변경: Zapier 체험 도움말이 세분화됨 → 신규 계정 Pro 체험은 Free로 복귀, Free에서 직접 시작한 체험/Team 체험은 자동 유료 전환 가능으로 본문 보강.
- 여전히 미확인: www.make.com 가격 페이지(봇 차단), Make 한국어 UI, Make Free 최소 간격, 국내 메신저 연동, Zapier 한도 도달 시 동작.

## 2026-10-19 재확인
- Zapier 가격(Free 100 task, 2단계, 15분 / Professional 2분, KRW 없음, 14일 Pro 체험·카드 불필요·자동 유료 전환 없음), task 계산·한도 도움말, 영어 전용 안내, Make 크레딧/스케줄(기본 15분, 최소 간격은 플랜별 미기재)/해지 시 Free 월 1,000 크레딧, 앱 모듈 이름(Watch emails, Add a Row, Send a Message) 모두 재확인. 변경 없음(날짜 표기만 갱신).
