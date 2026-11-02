# chat 43 확인 노트 (2026-11-02)

## 확인한 공식 출처 (curl, 한 페이지씩)
- Claude Help "Upload files to Claude" https://support.claude.com/en/articles/8241126-upload-files-to-claude (페이지 날짜 July 23, 2026): 형식 PDF/DOCX/CSV/TXT/HTML/ODT/RTF/EPUB/JSON/XLSX*(코드 실행·파일 생성 필요)와 이미지. "+" > Add files or photos. 채팅 업로드: 파일당 500MB, 채팅당 20개, PDF 1000쪽. 프로젝트 파일: 파일당 30MB, 개수 무제한(컨텍스트 내), 텍스트 추출만. PDF 100쪽 이하는 텍스트+시각 요소, 101~1000쪽은 텍스트만, 초과 시 "Uploaded file is too large". 팁: 큰 문서는 작은 구간으로 나누기, 비PDF 문서는 텍스트만 추출.
- Gemini Apps Help "Upload & analyze files in Gemini Apps" https://support.google.com/gemini/answer/14903178 : 프롬프트당 최대 10개(제공 여부에 따름), 동영상 2GB·그 외 100MB. Add files > Upload Files. 업로드가 너무 크면 연결·세부를 놓칠 수 있고 작은 파일 권장, Google AI Pro/Ultra는 1M 토큰 컨텍스트. "chats with files" 한도는 기간별(rolling).
- ChatGPT docs "Use ChatGPT" https://learn.chatgpt.com/docs/use-chatgpt (.md 버전으로 읽음): 문서·프레젠테이션·스프레드시트·PDF·이미지·데이터 내보내기를 업로드/첨부해 요약·비교 등.
- ChatGPT docs "Projects and chats" https://learn.chatgpt.com/docs/projects (.md): 프로젝트의 Sources 섹션에 업로드 파일, 프로젝트 지침이 모든 프로젝트 채팅에 적용.

## 사이트 내부 근거
- 저작권: basics/09(한국 저작권위원회 안내 기반) — 기존 기준 적용, 나만 쓰기 vs 공개 구분. 본문은 이 범위를 넘지 않음.

## 확인 못 함
- ChatGPT 앱의 파일 수·크기·쪽수 한도(공개 문서에 수치 없음) → 본문에 수치 미기재.
- 책 전체를 AI 서비스에 올리는 것의 허용 여부에 대한 각 서비스·기관의 공식 설명 → 허용/불허를 단정하지 않고 "찾지 못함"으로 표기.
- Gemini 프로젝트(대화 넘어 자료 유지) 기능은 읽은 페이지에 없음 → "설명 없음"으로 표기.
- 독서 노트 형식(프롬프트 구성)은 필자 제안이며 공식 출처 없음.
