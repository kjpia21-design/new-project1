# 02. 회의록·긴 문서 요약, 할 일 뽑기

## 핵심 사실
- 업로드 가능 형식: PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, XLSX(XLSX는 코드 실행·파일 생성 켜기 필요), 이미지(JPEG/PNG/GIF/WebP). (출처: https://support.claude.com/en/articles/8241126-upload-files-to-claude)
- 채팅 업로드: 파일당 500MB, 채팅당 최대 20개, PDF 최대 1000쪽. PDF 100쪽 이하는 텍스트와 시각 요소 분석, 101~1000쪽은 텍스트만, 1000쪽 초과는 거부("Uploaded file is too large"). 비PDF 문서는 텍스트만 추출(내장 이미지 못 읽음). (출처: https://support.claude.com/en/articles/8241126-upload-files-to-claude)
- 프로젝트 파일은 파일당 30MB, 개수 무제한이나 전체 내용이 컨텍스트 윈도우에 들어가야 함. (출처: https://support.claude.com/en/articles/8241126-upload-files-to-claude)
- 컨텍스트 윈도우는 모델별: 유료 플랜 최신 모델은 최대 1M 토큰, 그 외 500K 또는 200K. 일부는 응답용으로 예약. 코드 실행이 켜져 있으면 한계 근처에서 이전 메시지를 자동 요약(전체 기록은 보존). (출처: https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work)
- 사용량 절약: 길어지면 새 대화, 프로젝트 지침은 짧게, 안 쓰는 프로젝트 파일 제거, 불필요한 확장 사고·커넥터·웹 검색 끄기. (출처: https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work)
- 프로젝트: 지식에 문서를 올려 모든 대화에서 배경으로 사용, 유료는 RAG로 용량 확장. (출처: https://support.claude.com/en/articles/9517075-what-are-projects, C05 노트)
- 긴 문서는 위, 질문은 아래, <documents> 구조. (출처: C04 노트의 공식 가이드)
- Word 문서 변환·요약 등 파일 출력: .docx/.pptx/.xlsx/PDF 생성 가능, 파일당 30MB. (출처: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)

## 따라하기 절차
회의록 붙여넣기/업로드 → 구조화 요약(결정·할 일 표: 담당자·기한·근거 문장) → 근거 대조 → 불명확 항목을 "확인 필요"로 표기 → 후속 메일 초안. (필자 구성)

## 확인 못 함
- 업로드 파일이 컨텍스트/사용량에 어떻게 계산되는지 공식 문서에 설명 없음(U4).
- 음성 파일 업로드는 지원 형식에 없음(U1); 녹음→텍스트는 media/14에서 다룸.
- ChatGPT·Gemini 업로드 한도: 열람 불가.

## 출처 목록
- https://support.claude.com/en/articles/8241126-upload-files-to-claude / https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work / https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude / Projects / Prompting best practices — 확인일 2026-10-10
