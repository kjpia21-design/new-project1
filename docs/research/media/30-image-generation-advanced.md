# 30. 이미지 생성 심화: Midjourney·Gemini·ChatGPT — 2026-10-14 기준 (J2)

`curl -sL -m 20 -A "Mozilla/5.0"`로 한 번에 한 페이지씩 열었다.

## 열어 확인한 페이지
- https://support.google.com/gemini/answer/14286560 (200): 모델 Nano Banana 2 Lite/2/Pro. 기능: 캐릭터 일관성, Local edits, 글자 표현 개선, 복잡한 지시 따르기, 2K(Google AI 요금제)/1K 다운로드. 생성 13세+, 편집 18세+. 경로: gemini.google.com → Open Sidebar → Images; 편집: Open Sidebar → Library → 이미지 → Chat. Redo with Pro(More 메뉴, 유료, Nano Banana 2 일일 한도 도달 시 불가). Nano Banana 2 Lite는 다중 참고·다중 편집용이 아님. 프롬프트 팁: draw/generate/create로 시작, 스타일 명시, 상세 시각 묘사. 약관: 서비스 약관+금지된 사용 정책, 타인 저작권·개인정보 침해 금지, 결과물 사용 전 재량 판단, 업무·학교 계정은 약관 상이.
- https://gemini.google/overview/image-generation/ (200): 프롬프트 공식 "<만들어줘> <주제> <행동> <장면>", 구도·스타일·품질·비율(예: 2:3 aspect ratio) 고려. 모델 Nano Banana 2.1은 Google AI 요금제. 보이지 않는 SynthID+보이는 워터마크. 업로드로 Google AI 생성 여부 확인(이미지·오디오·비디오).
- https://learn.chatgpt.com/docs/image-generation(.md) (200): 프롬프트 5요소(목적·대상, 주제·상황, 배경·구도·스타일, 프레이밍·조명·색, 제약), 막연한 표현 대신 구체적 시각 표현, 작고 구체적인 수정 한 요소씩, 영역 선택 후 변경 설명, 편집 시 "바꿀 것/유지할 것" 명시, 다중 참고 이미지는 순서로 구분, 이미지 속 글자는 짧게·따옴표·위치 지정·검수, 인포그래픽은 디자인 도구로 마무리, 실존 인물은 허락 확인, 브랜드·작가 모방 대신 원본 요청, OpenAI 크레딧 표기 불필요, 조직 지침과 OpenAI 사용 정책 준수. 웹의 이미지 가용성·한도는 플랜·워크스페이스에 따름.
- https://policies.google.com/terms/generative-ai (200): 2024-05-22 Google 서비스 약관에 통합되어 사업 파트너 계약 외에는 더 이상 적용되지 않음. 출력물 소유 조항 없음(사용 제한, 면책만). 본문에서는 소유권 근거로 쓰지 않고 출처 목록에만 둠.
- https://www.midjourney.com/ (200): 소개 페이지만(연구소 소개). 사용법·요금·약관 정보 없음.
- https://www.midjourney.com/terms-of-service (200, 4.9KB): 본문 텍스트 없음(SPA), 내용 확인 불가.

## 차단/미확인 (우회하지 않음)
- https://docs.midjourney.com/hc/en-us 및 하위 2건 (403, Cloudflare 확인 페이지): Midjourney 명령어, 비율 파라미터, 캐릭터 참조, 부분 수정, 요금제, 상업 이용 조건, 한국어 지원 모두 확인 못 함. 본문에 사실 서술 없이 "확인하지 못했어요"로 표기.
- ChatGPT 이용약관 출력물 소유 조항(openai.com 차단): 확인 못 함.
- Gemini/ChatGPT 결과물 상업 이용을 직접 허용하는 문장: 못 찾음.
- Gemini 무료 일일 한도 숫자, ChatGPT 무료 한도 숫자, 한국어 글자 정확도 수치: 못 찾음.
- 보이는 워터마크의 요금제별 적용 범위: 못 찾음(11편과 동일).

## 11편과의 차별점
11편은 첫 생성, 점검, AI 표시 확인 중심. 30편은 프롬프트 5단 구조, 비율·스타일, 부분 수정, 캐릭터 시리즈, 참고 이미지, 글자 지정을 다룸.

## 재점검 (2026-10-19)
- Gemini 이미지 도움말·소개 페이지, learn.chatgpt.com 이미지 문서(영역 선택 편집, Image 1/Image 2 지정, 글자 지정, 크레딧 표기 불필요)는 본문과 동일. 변경: policies.google.com/terms/generative-ai 페이지가 'Google 서비스 약관이 2024-05-22에 AI 항목을 포함하도록 개정되어 이 추가 약관은 파트너 서명 계약이 없으면 더는 적용되지 않는다'고 안내 → 출처 제목에 반영(본문은 이 약관을 인용하지 않음). midjourney.com 소개 페이지는 열렸고 docs.midjourney.com은 계속 403.

## 재확인 2026-10-26
- Gemini 이미지 도움말·소개 페이지(2:3 예시, Local edits, Library > Chat, Redo with Pro, 2K/1K), ChatGPT 이미지 문서(영역 선택 편집, Image 1/2 지정, 크레딧 표기 선택), Google 생성형 AI 약관 페이지를 다시 열어 본문과 일치 확인(변경 없음). docs.midjourney.com은 여전히 403, midjourney.com 소개 페이지만 열림.
