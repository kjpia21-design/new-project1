# automation/51 PDF·청구서 데이터 추출 조사 노트 (2026-11-04, B4)

## (a) 확인됨 (curl 기본 옵션, -L, 한 페이지씩)
- https://support.claude.com/en/articles/8241126-uploading-files-to-claude (200, 페이지 날짜 July 23, 2026) : 문서 PDF/DOCX/CSV/TXT/HTML/ODT/RTF/EPUB/JSON/XLSX(XLSX는 코드 실행·파일 생성 필요), 이미지 JPEG/PNG/GIF/WebP. 채팅 업로드: 파일당 500MB, 대화당 20개, 이미지 8000x8000px, PDF 1000쪽. 프로젝트 파일: 30MB, 텍스트 추출만(멀티모달 PDF 예외). PDF 100쪽 이하는 텍스트+시각 요소, 101~1000쪽은 텍스트만, 1000쪽 초과 불가("Uploaded file is too large"). 팁: 이미지 1000x1000 이상, 큰 문서는 나누기, 비PDF 문서는 텍스트만(삽입 이미지 못 읽음).
- https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude (200) : 코드 실행·파일 생성은 모든 플랜, Excel/PowerPoint/Word/PDF 생성, Google Drive 저장 가능, 업로드·다운로드 파일당 최대 30MB, 30MB 초과 PDF는 컴퓨팅 환경에서 처리 가능, CSV/TSV 분석. Free~Ultra는 Settings > Capabilities 토글.
- https://support.google.com/gemini/answer/14903178?hl=en (200) : 한 프롬프트에 파일 최대 10개(제공 상황에 따라), 영상 2GB·그 외 100MB, ZIP 10개·100MB(영상·음성 불가), 롤링 한도(Google AI Pro/Ultra에서 상향), 분석 실패 시 재업로드, 너무 큰 업로드는 세부 누락 가능, 업로드한 스프레드시트로 차트 생성.
- https://learn.chatgpt.com/docs/artifacts-viewer.md (200) : 웹에서 원본 파일 첨부 또는 문서·프레젠테이션·스프레드시트·PDF 생성 요청, 채팅에서 검토·다운로드, 수정 요청 시 쪽·시트·표 지정.
- https://learn.chatgpt.com/docs/image-inputs.md (200) : 웹 입력창에 이미지 첨부·붙여넣기·끌어다 놓기, 무엇을 볼지·원하는 결과를 프롬프트에 적기.
- 시도했으나 404: https://learn.chatgpt.com/docs/file-uploads.md (존재하지 않음, 글에 사용 안 함). https://learn.chatgpt.com/llms.txt (200)에서 파일 업로드 전용 페이지는 찾지 못함.

## (b) 확인하지 못함 / 글에서 주장하지 않음
- Claude 업로드 문서(500MB)와 파일 생성 문서(30MB)의 파일 크기 한도 불일치. 어느 쪽이 적용되는지 미확인, 글에 양쪽을 명시.
- ChatGPT 일반 계정의 파일 형식·크기·개수 한도(help.openai.com은 읽지 않음).
- 세 서비스 모두 청구서·표 추출 정확도 공식 수치, 스캔 PDF·한국어 문서 정확도.
- 문서 추출 전문 서비스(OCR 도구 등) 공식 도움말은 읽지 않음.
- 실제 계정에서 단계를 실행하지 않음. 예시 프롬프트는 사이트 자체 예시.
