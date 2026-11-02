# 46. AI로 식단·레시피 계획하기 — 2026-11-02 기준 (W3)

## 확인한 공식 페이지 (curl, 한 페이지씩)
- Claude 파일 업로드: https://support.claude.com/en/articles/8241126-uploading-files-to-claude (기본 curl은 301 → `-L`로 따라가 .../8241126-upload-files-to-claude 에서 200. 리다이렉트 추적 외 옵션 없음)
  - 이미지 형식 JPEG·PNG·GIF·WebP. "+" > "Add files or photos", 끌어다 놓기, 클립보드 붙여넣기. 대화당 최대 20개, 파일당 500MB, 이미지 최대 8000x8000px, 1000x1000 이상 권장. (갱신일 July 23, 2026 표기)
- Gemini 파일 업로드: https://support.google.com/gemini/answer/14903178
  - 웹: Add files > Upload Files. 프롬프트당 최대 10개(제공 상황에 따라), 영상 2GB·그 외 100MB, 로그인 필요, Google AI 플랜은 한도 상향. Chrome의 Gemini는 웹페이지 이미지 끌어다 놓기·복사 붙여넣기. 이미지 형식 목록은 페이지에 없음("대부분의 파일 형식").
- ChatGPT 이미지 입력: https://learn.chatgpt.com/docs/image-inputs.md (llms.txt에서 경로 확인; /docs/file-uploads 는 404, /llms.txt 는 307 → /docs/llms.txt)
  - 웹 입력창에 이미지 첨부·붙여넣기·끌어다 놓기. 무엇을 살펴보고 어떤 결과를 원하는지 설명하라고 안내. 이미지 생성은 별도 기능.

## 확인하지 못한 것
- 사진 속 음식·분량·신선도 인식 정확도(시험하지 않음).
- 레시피·칼로리·영양소·식료품 가격 전용 기능 또는 정확도(공식 페이지에 설명 없음).
- 알레르기·치료식·식품 안전 규칙 처리 방식.
- ChatGPT의 이미지 형식·개수·크기 한도, Gemini의 이미지 형식별 목록, 플랜별 차이.
- 각 서비스의 음식 사진이나 개인정보(얼굴·주소) 처리 정책.

## 본문 반영
- 의료·영양 조언 아님을 Summary와 caution Aside에 명시. 알레르기·질환은 의사·영양사 상담.
- 프롬프트는 "써 보는 방법"이며 공식 확인 사실 아님. 실행 시험 없음.
- 연결: basics/03·04·05, chat/01, automation/46, chat/45. (basics/04·05는 명세 지침)
