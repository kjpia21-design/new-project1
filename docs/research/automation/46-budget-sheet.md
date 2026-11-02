# 46. AI로 가계부·영수증 정리 (2026-11-02 조사, S4)

방법: curl로 공식 페이지를 한 번에 한 장씩 열람. 실제 영수증으로 실행하지 않음(본문에 명시).

## 확인한 출처와 사실
- https://support.claude.com/en/articles/8241126-uploading-files-to-claude (July 23, 2026 표기) — 문서 형식(PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, XLSX*; XLSX는 코드 실행·파일 생성 활성화 필요), 이미지(JPEG, PNG, GIF, WebP), + 버튼 > Add files or photos, 끌어놓기, 클립보드 붙여넣기; 채팅 업로드 파일당 500MB·채팅당 20개·이미지 8000x8000px·PDF 1000쪽; 이미지 팁(1000x1000px 이상 권장).
- https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude ("Updated this week") — Free/Pro/Max/Ultra/Team/Enterprise 모두 웹·데스크톱·모바일에서 사용; Free/Pro/Max/Ultra는 Settings > Capabilities의 "Code execution and file creation"(새 설정 화면에서는 "Create and edit files"); Team/Enterprise는 Organization settings > Capabilities.
- https://support.google.com/gemini/answer/14903178?hl=en — Gemini 파일 업로드: 프롬프트당 최대 10개(제공 상황에 따라), 동영상 외 개당 100MB, Add files 버튼, 업로드한 스프레드시트로 차트 생성, "파일이 있는 채팅" 기간별 한도, Google AI 요금제로 한도 상향.
- https://support.google.com/docs/answer/14356410?hl=en — Sheets의 Gemini: Ask Gemini, 표·수식·분석·차트, 자격 있는 Workspace/Google AI 요금제 필요, .xlsx는 Save as Google Sheets 권장.
- https://learn.chatgpt.com/docs/image-inputs.md — 웹 입력창에 이미지 첨부·붙여넣기·끌어놓기, 무엇을 볼지·원하는 결과를 프롬프트에 적기.
- https://learn.chatgpt.com/docs/artifacts-viewer.md — 웹에서 원본 파일을 첨부하고 스프레드시트 등을 만들어 내려받기, 열·시트·확인 기준을 구체적으로 설명.
- 사이트 내 기존 편(automation/23, coding/38, basics/05, 12, 13, chat/03)의 내용과 일치시킴.

## 확인하지 못한 것
- ChatGPT 일반 계정 파일 업로드 한도: help.openai.com/.../file-uploads-faq 가 403 (우회하지 않음). learn.chatgpt.com은 개발자(Codex) 중심이라 소비자 한도 문서 없음.
- 세 서비스의 영수증 인식 정확도, 한국어 영수증 정확도, 손글씨 처리: 공식 수치 없음.
- 한국어 UI의 버튼 이름.
- 임시/시크릿 채팅의 서비스별 메뉴 위치는 이번에 재확인하지 않음(basics/12 참고).
- 실제 영수증 업로드 실습: 하지 않음.
