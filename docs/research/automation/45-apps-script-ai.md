# 45. Apps Script와 AI로 구글 시트 자동화 (2026-11-01 조사, Q3)

방법: curl로 공식 페이지를 한 번에 한 장씩 열람(developers.google.com, support.google.com, platform.claude.com의 markdown 응답). 직접 실행하지 않음(코드는 문서 기반 조립, 본문에 명시).

## 확인한 출처와 사실
- https://developers.google.com/apps-script/guides/sheets — 확장 프로그램 > Apps Script로 바운드 스크립트 생성; 바운드 스크립트는 UI 변경·파일 열 때 반응 가능; getActiveSheet/getDataRange/getValues 예제; 실행 로그.
- https://developers.google.com/apps-script/guides/menus — 메뉴는 바운드 스크립트만, onOpen에 작성, createMenu/addItem/addToUi.
- https://developers.google.com/apps-script/guides/properties — Script/User/Document properties; 문자열 키-값; 프로젝트 설정 > 스크립트 속성에서 수동 추가(최대 50개); getProperty/setProperty. 누가 읽을 수 있는지는 문서에서 확인 못 함.
- https://developers.google.com/apps-script/guides/services/external — UrlFetch로 API 호출, JSON.parse/stringify, OAuth 라이브러리, 서비스 계정.
- https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app — fetch 고급 매개변수: contentType, headers, method, payload, muteHttpExceptions, timeoutSeconds(기본 360초); 권한 범위 script.external_request.
- https://developers.google.com/apps-script/guides/sheets/functions — 사용자 지정 함수 30초 제한(#ERROR!), 사용자 승인이 필요한 서비스는 쓸 수 없고 메뉴 사용 권장; URL Fetch는 허용 서비스 목록에 있음. 반복 호출 위험은 사이트의 주의로 표시(공식 아님).
- https://developers.google.com/apps-script/guides/services/authorization — 코드 스캔으로 스코프 결정, 승인 대화상자, 권한 해제 가능, 사용자 지정 함수는 익명 사용자로 실행.
- https://developers.google.com/apps-script/guides/services/quotas — 스크립트 6분, 사용자 지정 함수 30초, URL Fetch 20,000(개인)/100,000(Workspace)/일, 응답 50MB, 트리거 90분/6시간 일.
- https://developers.google.com/apps-script/guides/gemini — 편집기 Gemini 사이드 패널(코드 생성·수정·디버그), Gemini 베타 프로그램 고객 한정, 라이선스·관리자 설정 조건.
- https://support.google.com/docs/answer/14356410?hl=en — 시트의 Gemini 기능 목록, 자격 있는 Workspace/Google AI 요금제 필요(자동화 23편에서 이미 확인한 내용과 동일).
- https://platform.claude.com/docs/en/api/overview — 헤더 x-api-key(레거시 폴백, 여전히 지원)/Authorization Bearer, anthropic-version, content-type; Messages API POST /v1/messages.
- https://platform.claude.com/docs/en/api/versioning — 최신 버전 2026-10-21 권장; 이 버전에서 temperature/top_p/top_k 제거(보내면 400).
- https://platform.claude.com/docs/en/build-with-claude/working-with-messages — 요청 예시, 응답 content[].type="text", text.
- https://platform.claude.com/docs/en/about-claude/models/overview — claude-sonnet-5-5 등 모델 ID.

## 확인하지 못한 것
- 한국어 UI에서의 Apps Script/프로젝트 설정 메뉴 이름(본문은 영어 UI 기준으로 옮김, 이를 본문에 명시).
- Claude API 가격: 미기재(가격 페이지 미열람, 본문은 "따로 청구, 직접 확인"으로 처리).
- 스크립트 속성의 접근 권한 범위(편집자가 볼 수 있는지).
- 사용자 지정 함수 재계산 시 API 호출이 반복되는지: 공식 확인 못 함(사이트 주의로 표시).
- SpreadsheetApp.getActiveRange/Range.offset/setValues 레퍼런스 페이지는 열지 않음(일반 Spreadsheet 서비스 메서드, Sheets 가이드의 getValues 예제와 같은 계열).
- Claude API 호출을 포함한 예제 코드를 실제 실행한 결과: 없음(API 키·시트 계정 없음). 본문에 "실행하지 않음" 표기.
- 한국어 프롬프트 처리 품질 등 AI 응답 정확도: 해당 없음.
