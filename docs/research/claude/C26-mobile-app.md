# C26. 모바일 앱 제대로 쓰기 (조사 노트, 2026-11-02)

## 확인한 출처 (curl 기본 옵션, 한 페이지씩)
- https://support.claude.com/en/articles/9266462-install-claude-for-ios
- https://support.claude.com/en/articles/9612887-install-claude-for-android
- https://support.claude.com/en/articles/11101966-use-voice-mode
- https://support.claude.com/en/articles/10065434-use-dictation-on-claude-mobile
- https://support.claude.com/en/articles/10263469-use-claude-app-intents-shortcuts-and-widgets-on-ios (dateModified 2026-07-09)
- https://support.claude.com/en/articles/11869629-use-claude-with-android-apps (dateModified 2026-10-30)
- https://support.claude.com/en/articles/8241126-upload-files-to-claude
- 추측한 URL 11869619-using-claude-on-ios, 9869573-using-claude-on-android, 11101966-using-voice-mode는 301/404였고 사용하지 않음.

## 확인한 사실
- 설치: App Store/Play Store "Claude by Anthropic". iOS 18.0+, iPadOS 18.0+, Android 8.0 Oreo+. 미지원 지역·기기·OS면 안 보일 수 있음. iOS에는 Intune 조직용 "Claude for Intune"도 있음. 앱 삭제해도 구독은 자동 해지되지 않음.
- 받아쓰기: 모든 플랜, iOS/Android. 마이크 아이콘, 화살표 전송, X 취소. 언어 12개(영어, 프랑스어, 독일어, 힌디어, 이탈리아어, 일본어, 한국어, 포르투갈어, 러시아어, 스페인어, 튀르키예어, 우크라이나어), 영어 외 베타. 이니셜 > Speech Input Language. 변환 후 녹음 삭제, 사본 미보관, 생성 모델 학습에 미사용.
- 음성 모드: 베타, 모든 플랜, 모바일·데스크톱·웹(휴대폰에서 최적). 핸즈프리(기본)/눌러서 말하기. 사용 한도에서 차감. 텍스트 전사본이 채팅 기록에 저장. 웹 검색·연결 도구(Gmail, Calendar, Docs, Slack) 사용 가능, Free는 도구 1개. 음성 언어는 Settings > Capabilities > Voice > Spoken language(또는 Settings > General > Voice > Language). Cowork/Claude Code에서는 받아쓰기만. Enterprise는 Support 문의로 비활성화. 특정 모델 하나는 음성 모드 미지원(문서 표기).
- iOS(iOS 18+): 위젯(새 대화, 받아쓰기로 앱 열기, 사진), "Ask Claude" 인텐트(Spotlight, Siri, 공유, 단축어), "Analyze Photo with Claude" 컨트롤(제어 센터·잠금 화면). 기본 모델 사용, 사용 한도 차감.
- Android 앱 연동: 모든 플랜. 메시지·이메일 초안, 위치·지도, 캘린더 읽기·생성, 알람·타이머, Health Connect(베타, Pro/Max/Ultra, Android 14+, 미국 한정, 읽기 전용). 미리 알림은 iOS 전용. 연락처 직접 접근 없음. 기존 메시지·이메일은 읽지 않음. Team/Enterprise는 위치 도구 불가. 의료기기 아님 안내.
- 업로드: 이미지 JPEG/PNG/GIF/WebP, 문서 PDF/DOCX/CSV/TXT/HTML/ODT/RTF/EPUB/JSON/XLSX(코드 실행·파일 생성 필요). 채팅 파일당 500MB, 20개, 이미지 8000x8000, PDF 1000쪽(100쪽 이하는 시각 요소 분석).

## 확인하지 못한 것
- 휴대폰 앱에서 사진·파일을 붙이는 정확한 메뉴(업로드 문서는 데스크톱 "+" 기준 설명).
- iOS용 "앱 연동"(캘린더·메시지·건강) 문서: 읽은 범위에서 없음. 본문에서 주장하지 않음.
- 한국어 음성 모드 품질, 목소리 개수, 한국 내 Health 지원: 확인하지 못함.
- 직접 설치·실행하지 않음(공식 문서 기반). basics/07, C22, C7, C23, basics/05는 사이트 내 기존 글, 재조사하지 않음.
