# 03. 엑셀·CSV 데이터 분석

## 핵심 사실
- 코드 실행·파일 생성 기능: Free/Pro/Max 기본 켜짐, Team 기본 켜짐(Owner가 끌 수 있음), Enterprise 신규 조직 기본 켜짐. 켜는 곳: Settings > Capabilities > "Code execution and file creation"(Team/Enterprise는 Organization settings > Capabilities). (출처: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)
- 데이터 분석용 업로드로 CSV, TSV 명시. 출력: .xlsx, .pptx, .docx, PDF, 분석용 Python 스크립트, PNG 차트 등. 업로드·다운로드 파일당 30MB. (출처: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)
- XLSX 업로드는 코드 실행·파일 생성이 켜져 있어야 함. CSV는 일반 문서로 취급. (출처: https://support.claude.com/en/articles/8241126-upload-files-to-claude)
- 샌드박스 격리 컨테이너에서 실행. 외부 파일/웹사이트에 숨겨진 악성 지시가 Claude로 하여금 신뢰할 수 없는 코드를 실행하거나 대화 데이터를 제3자에게 보내게 할 수 있음. Claude가 기능을 쓰는 동안 지켜보고 예기치 않은 데이터 접근 시 중단. "All domains" 네트워크 옵션이 가장 위험, 네트워크 egress를 끄면 샌드박스 밖 전송 차단. MCP 통합은 egress 설정과 무관하게 외부 통신 가능. (출처: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)
- 개인정보: 소비자 플랜(Free/Pro/Max)에서 사용자가 허용하면 채팅이 Claude 개선에 쓰임, 시크릿 채팅은 제외, 설정은 언제든 변경. 금융 정보·건강 기록·비밀번호·기밀 문서는 주의. (출처: https://support.claude.com/en/articles/8325621-i-would-like-to-input-sensitive-data-into-my-chats-with-claude-who-can-view-my-conversations)
- 가격 페이지 모델 학습 항목: Free/Pro/Max "Opt-out", Team/Enterprise "None by default". (출처: https://claude.com/pricing)
- 예시 프롬프트 공식: "Extract all the data from this PDF into an Excel spreadsheet and create a summary chart." (출처: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)

## 따라하기 절차
샘플 CSV(가상 매출) 업로드 → 열 구조 설명 요청 → 정제 규칙 확인 → 질문 → 근거 코드/계산 보여달라 → 엑셀에서 샘플 검산 → 차트·보고용 xlsx 받기. 개인정보는 비식별화(필자 구성).

## 확인 못 함
- Claude 엑셀/시트 애드인 기능 세부는 미확인(검색 요약만).
- ChatGPT 데이터 분석 기능·한도·학습 정책: 열람 불가(openai.com 403).
- Gemini(원문 확인 2026-10-10): 업로드한 스프레드시트로 차트 생성 가능, 프롬프트당 파일 10개·100MB (https://support.google.com/gemini/answer/14903178). 학습 정책은 Keep Activity 기준 (https://support.google.com/gemini/answer/13594961).
- 행 수 상한 등 공식 수치 없음.

## 출처 목록
- https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude / https://support.claude.com/en/articles/8241126-upload-files-to-claude / https://support.claude.com/en/articles/8325621-i-would-like-to-input-sensitive-data-into-my-chats-with-claude-who-can-view-my-conversations / https://claude.com/pricing — 확인일 2026-10-10

## 6단계 재점검 (2026-10-10)
- 출처: learn.chatgpt.com(OpenAI ChatGPT 문서; developers.openai.com/llms.txt가 안내) 및 developers.openai.com. help.openai.com·openai.com은 403.
- 확인: ChatGPT Work는 "파일 읽기, 데이터 분석, 코드·셸 실행, 문서/프레젠테이션/스프레드시트/PDF 생성"을 한다고 설명 (https://learn.chatgpt.com/docs/use-chatgpt.md , https://learn.chatgpt.com/docs/artifacts-viewer.md). `@Visualize`(Plugins 아래)는 차트·지도·다이어그램 요청용이고 계정에 따라 단계적 제공 (https://learn.chatgpt.com/docs/visualizations.md).
- 확인: 작업 중 사용 정보에 ChatGPT data controls가 적용됨, 설정 위치 Settings > Data controls (llms-full.txt 해당 절). Business: "No training on your business data by default" (https://learn.chatgpt.com/docs/pricing.md). 임시 채팅 존재(단축키 표).
- 못 찾음: ChatGPT 업로드 파일 크기·행 수 한도, 개인 계정 학습 기본값·보관 기간, 임시 채팅의 상세 처리 방식.
- 본문 변경: Summary, 참조표(ChatGPT 2행), 개인정보 절 ChatGPT 항목 교체. 채워진 빈칸 3, 남은 빈칸 3. 이 편에는 "확인 중" Aside가 원래 없음.
