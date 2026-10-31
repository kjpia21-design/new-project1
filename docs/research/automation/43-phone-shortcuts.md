# 43. 휴대폰 단축어로 AI 바로 부르기 (N3, 2026-10-31 조사)

방법: curl로 한 번에 한 페이지씩. support.apple.com/guide/shortcuts의 본문 페이지는 페이지 번호가 포함된 URL(목차에서 확인)로 열었다. 앱별 공식 지원 범위만 사용. 확인 못 한 앱은 본문에서 제외.

## 확인한 출처와 사실
### Apple (iOS 27 기준 안내서, 페이지 상단 버전 선택기에 iOS 14~27)
- https://support.apple.com/guide/shortcuts/welcome/ios : 단축어 = 앱 작업을 빠르게 처리, 액션 = 한 단계, Gallery에서 추가.
- .../run-shortcuts-with-siri-apd07c25bb38/ios : 단축어 이름을 말하면 Siri가 실행. 기기가 잠겨 있고 앱을 여는 단축어면 잠금 해제를 요청. 단축어 이름이 Siri 기본 명령과 같으면 단축어가 우선 실행.
- .../run-shortcuts-with-the-action-button-apdfea15680b/ios : iPhone 15 Pro 이상 Action 버튼. 설정 > Action Button > Shortcut > Choose a Shortcut.
- .../run-shortcuts-from-control-center-apd06a9201d4/ios : 제어 센터에서 Add a Control > Shortcut > Choose.
- .../run-shortcuts-tapping-iphone-apd897693606/ios : 설정 > 손쉬운 사용(Accessibility) > 터치(Touch) > 뒷면 탭(Back Tap) > Double/Triple Tap > Shortcuts 영역에서 선택.
- .../use-apple-intelligence-in-shortcuts-tpg3vrvwmclv/ios : Use Model 액션. 모델 선택지: On-Device, Cloud, Cloud Pro(Private Cloud Compute), Extension Model(ChatGPT 사용). Follow Up 체크 시 최종 응답 전 수정 가능. iOS 27 이상 Apple Intelligence는 iPhone 15 Pro/15 Pro Max/16 이후 모델 등에서 사용 가능, 모든 언어·지역에서 되는 것은 아님, 사용 한도 있을 수 있음. Gallery의 Apple Intelligence 카테고리.
### Claude (support.claude.com)
- https://support.claude.com/en/articles/10263469-use-claude-app-intents-shortcuts-and-widgets-on-ios (갱신 2026-07-09 표기): iOS 18 이상. "Ask Claude" 앱 인텐트(Spotlight, Siri, 공유 메뉴, 인텐트 지원 앱), 단축어 앱에서 "Ask Claude" 액션 사용 가능(요약 예시: Share 액션 + Ask Claude + 프롬프트 "Please summarize the following text: [Shortcut Input]"). 앱을 열었을 때 보이는 기본 모델이 사용됨. 메시지는 사용 한도에 포함. Claude 위젯, "Analyze Photo with Claude" 컨트롤.
- https://support.claude.com/en/articles/10302511-access-claude-for-ios-on-your-lock-screen-control-center-and-action-button : iOS 18 이상. 잠금 화면/제어 센터/Action 버튼에 "Open Claude" 추가.
- https://support.claude.com/en/articles/10534883-use-the-claude-widget-on-android : Android 8.0 이상, 홈 화면 위젯(새 채팅, 카메라, 음성 받아쓰기). 위젯 사용도 사용 한도에 포함.
- https://support.claude.com/en/articles/11869629-use-claude-with-android-apps : Claude가 Android 시스템 앱(메시지·이메일 초안, 캘린더, 알람·타이머, 지도 등)과 연동. 미리보기 후 사용자가 직접 전송. 알림(Reminders)은 iOS 전용. 건강 연동은 베타·미국 한정(본문 제외).
### Google Gemini (support.google.com/gemini)
- https://support.google.com/gemini/answer/14554984 (Get started with the Gemini mobile app, Android): 기본 어시스턴트로 Gemini 선택 시 전원 버튼 길게 누르기/화면 모서리 스와이프/"Hey Google"로 호출(기기·언어·국가별 차이). 기본 디지털 어시스턴트 앱이 Google 앱이어야 함(설정 > 앱 > 기본 앱 > 디지털 어시스턴트 앱). 일부 Android 기기는 기본 탑재. iOS는 Gemini 앱만 (어시스턴트 호출 방식 문서 없음).
- https://support.google.com/gemini/answer/15274899 (Gemini Live): "Hey Google, let's talk Live" 또는 하단 Live.

## 확인하지 못한 것 / 본문에서 뺀 것
- ChatGPT 앱의 단축어·Siri 지원: learn.chatgpt.com 인덱스(llms.txt)에서 찾지 못함. Apple 안내서의 "Extension Model: ChatGPT"만 사용(ChatGPT 앱 자체의 단축어 지원은 아님). 제목·본문에서 ChatGPT 앱은 제외.
- Gemini의 iOS 단축어/Siri 연동, Android의 Gemini 앱 전용 위젯·단축어: 확인 못 함 → 제외.
- Android 일반 자동화 앱(Tasker 등), Samsung Bixby 루틴 등: 공식 확인 안 함 → 제외.
- 한국어 Siri/Apple Intelligence 지원 범위(Apple 문서가 모든 언어·지역 불가라고만 안내), iOS 26 이하 버전의 Use Model 액션 유무.
- Gemini Android 전원 버튼 호출의 정확한 설정 경로(기기별).
