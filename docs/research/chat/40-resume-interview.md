# 40. AI로 자기소개서·이력서 다듬고 면접 연습하기 (M3, 2026-10-31 조사)

방법: curl로 공식 페이지를 한 번에 한 장씩 열람(`curl -sL -m 20 -A "Mozilla/5.0"`). 새 사실은 최소화하고, 사이트 기존 노트(basics/05, chat/02, chat/31)를 재확인해 연결.

## 확인한 출처와 사실
- Claude 파일 업로드 https://support.claude.com/en/articles/8241126-upload-files-to-claude (2026-10-31 열람): 지원 문서 PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, XLSX(코드 실행·파일 생성 켜야 함), 이미지 JPEG/PNG/GIF/WebP. 채팅 업로드 파일당 500MB, 채팅당 20개, PDF 1000쪽. 입력창 + > "Add files or photos". 비PDF 문서는 텍스트만 추출.
- Claude 음성 모드 https://support.claude.com/en/articles/11101966-using-voice-mode (2026-10-31 열람): 베타, 모든 플랜(Free, Pro, Max, Ultra, Team, Enterprise), 모바일·데스크톱·웹, 휴대폰에서 가장 잘 동작. 핸즈프리(기본)/푸시투토크. 음성 대화도 일반 사용량 한도에 포함. 웹·데스크톱은 입력창 오른쪽 아래 음파 기호, 모바일은 입력창의 음파 기호. (한국어 지원 여부는 이 요약에서 확인 못 함; chat/31 노트에서도 한국어 명시 없음.)
- Gemini 파일 업로드 https://support.google.com/gemini/answer/14903178 (열람): 문서·스프레드시트·사진·동영상 등 업로드, 웹앱 "Add files" > Upload files, Drive에서 추가 가능(Keep Activity 필요 안내), 한도 상향은 Google AI 요금제. 구체 수치는 chat/02 노트(프롬프트당 10개, 100MB 등, 2026-10-10 확인)를 인용만.
- Gemini Live https://support.google.com/gemini/answer/15274899 (열람): Android 폰·태블릿의 Gemini 모바일 앱, 웹앱에서는 안 됨. "Practice aloud: Rehearse for important moments" 문구. 지원 언어·플랜은 이 페이지에 없음.
- ChatGPT https://learn.chatgpt.com/docs/use-chatgpt.md (열람): 문서·프레젠테이션·스프레드시트·PDF·이미지 첨부 가능, 초안 작성·수정, 파일 요약 지원. ChatGPT Voice는 chat/31 노트 기준 https://learn.chatgpt.com/docs/features/voice (데스크톱 앱, Plus·Pro·Business·Edu·Enterprise; 휴대폰 앱 음성과 무료 플랜은 확인 못 함).
- 개인정보·학습 설정: 사이트 basics/05 노트(2026-10-26 재확인분)를 인용. Claude "Model Improvement" 설정과 시크릿 채팅, Gemini Keep Activity와 임시 채팅 72시간, ChatGPT Settings > Data controls와 임시 채팅. 이번 조사에서 새로 열지는 않음.
- roles/student 가이드(사이트 내): 자소서는 실제 경험만, 지어낸 성과 금지, 연락처·주민번호 금지, 모의 면접 프롬프트. 본문은 이 원칙을 확장.

## 확인하지 못한 것
- 각 서비스가 한국어 면접 음성 대화를 얼마나 잘 지원하는지(Claude 음성의 한국어 명시, Gemini Live 언어 목록, ChatGPT 휴대폰 음성). 본문에서 "직접 써 보고 판단"으로 처리.
- ChatGPT 앱의 파일 업로드 한도 수치(공식 도움말 help.openai.com은 접근 불가 대상, learn.chatgpt.com에 수치 없음).
- AI 첨삭이 합격률을 높인다는 근거, 기업 채용 시 AI 사용 허용 기준(기업·공고마다 다름 → 공고·지원 안내 확인 권고만).
- 채용 서류 AI 활용 규정의 한국 법·지침은 조사하지 않음(본문에 쓰지 않음).
