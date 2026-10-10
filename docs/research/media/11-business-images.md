# 11. 업무용 이미지 생성 (Gemini 앱, ChatGPT) — 2026-10-10 기준

> 5단계 원문 대조(2026-10-10): Google 페이지(support.google.com, gemini.google, blog.google)는 curl로 원문을 열어 확인했다. OpenAI·Adobe 페이지는 403/미접속이라 "(검색 요약)" 표시를 유지한다. 아래 핵심 사실 중 Gemini 항목은 "원문 확인"이 우선이다.

## 핵심 사실
- Gemini 웹 앱은 70개 이상 언어, 230개 이상 국가·지역에서 쓸 수 있고 한국어와 대한민국이 목록에 있다. 모바일 앱은 150개 이상 국가, 한국어·대한민국 포함. (검색 요약) https://support.google.com/gemini/answer/13575153?hl=en , https://support.google.com/gemini/answer/14579026
- Gemini 앱 이미지 생성/편집 도움말: Nano Banana 계열 모델. 무료로 쓸 수 있고 Google AI 요금제 가입자는 더 새로운 모델(Nano Banana 2.1/Pro)을 쓴다. 일일 한도가 있다. (검색 요약) https://support.google.com/gemini/answer/14286560 , https://gemini.google/overview/image-generation/
- 이미지 생성·편집 연령 조건은 페이지마다 다르게 요약되어 확인 불확실(13세 이상 vs 18세 이상). 공식 페이지 확인 필요. (검색 요약) 위 동일
- Gemini 도움말은 Google 서비스 약관과 금지된 사용 정책(Prohibited Use Policy) 준수를 명시하고, 생성물을 공개·사용하기 전에 저작권과 개인정보에 대한 판단은 사용자 책임이라고 안내한다. (검색 요약) https://support.google.com/gemini/answer/14286560
- Gemini 생성 이미지에는 보이지 않는 SynthID 워터마크가 들어가고, 보이는 워터마크는 요금제·표면에 따라 다르다(자료끼리 상충). Gemini 앱에 이미지를 올려 Google AI로 만들었는지 확인할 수 있다. Nano Banana Pro 이미지에는 C2PA 메타데이터가 포함된다. (검색 요약) https://blog.google/innovation-and-ai/products/ai-image-verification-gemini-app/ , https://blog.google/innovation-and-ai/products/nano-banana-pro/
- 캐릭터 일관성(여러 이미지에서 같은 인물·캐릭터 유지) 기능 설명이 있다. 실존 인물 생성 규칙은 확인 못 함. (검색 요약) https://support.google.com/gemini/answer/14286560
- ChatGPT: 이용약관상 사용자가 입력(Input)에 대한 권리를 유지하고 출력(Output)을 소유하며, OpenAI는 출력에 대해 가진 권리가 있다면 사용자에게 양도한다. 콘텐츠가 법과 약관을 위반하지 않도록 할 책임은 사용자에게 있다. (검색 요약) https://openai.com/policies/row-terms-of-use/
- 계약상 소유가 곧 저작권 보호를 뜻하지는 않는다는 점은 약관이 해결하지 않는다(검색 요약의 해석). 국가별 AI 생성물 저작권 판단은 다르다. Canva 도움말도 같은 취지를 언급(12편 참고).
- ChatGPT 이미지에는 C2PA 콘텐츠 자격 증명과 SynthID 워터마크가 들어가며, 메타데이터는 플랫폼·편집·스크린샷 과정에서 제거될 수 있다. openai.com/verify로 확인 가능. (검색 요약) https://help.openai.com/en/articles/8912793-c2pa-in-chatgpt-images
- ChatGPT 무료 플랜은 이미지 생성에 별도 사용 한도가 있고 구체적 수치는 공식 페이지에 없다. (검색 요약) https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq
- OpenAI 사용 정책: 동의 없이 실존 인물의 초상(사실적 이미지·음성)을 혼동 가능한 방식으로 쓰는 것을 금지. 서비스 약관: 이미지 입력으로 사람을 식별하거나 동의·권리 없이 초상을 재현하는 것을 금지. GPT-4o 이미지 소개글: 실존 인물이 맥락에 있을 때 제한 강화. (검색 요약) https://openai.com/policies/usage-policies/ , https://openai.com/policies/service-terms/ , https://openai.com/index/introducing-4o-image-generation/
- 대안: Adobe Firefly는 자사 모델이 Adobe Stock·저작권 만료 콘텐츠로 학습되어 "상업적으로 안전"하다고 설명하나 베타 기능은 개인용으로 제한될 수 있고, 한국어 도움말 여부는 확인 못 함. (검색 요약) https://www.adobe.com/products/firefly.html , https://helpx.adobe.com/in/firefly/how-to/introduction-to-firefly.html

## 따라하기 절차
1. Gemini 앱(웹/모바일)에서 로그인, 이미지 만들기 선택(메뉴 이름은 화면 안내 따름).
2. 구체적 프롬프트(주제, 용도, 비율, 분위기, 텍스트 최소화)로 생성, 이어서 대화로 수정 요청.
3. 결과 저장 전 점검: 실존 인물/로고/캐릭터 포함 여부, 글자 깨짐, 라벨(AI 생성 표시) 결정.

## 확인 못 함
- Gemini/ChatGPT 이미지의 상업적 이용을 직접 허용하는 문장의 원문(약관 전문 미열람).
- 한국에서의 요금제 가격과 무료 일일 한도.
- 이미지 생성 연령 조건 최종값.
- 정확한 메뉴·버튼 이름.

## 출처 목록
- https://support.google.com/gemini/answer/14286560 (확인일 2026-10-10, 검색 요약)
- https://support.google.com/gemini/answer/13575153 (검색 요약)
- https://gemini.google/overview/image-generation/ (검색 요약)
- https://blog.google/innovation-and-ai/products/ai-image-verification-gemini-app/ (검색 요약)
- https://openai.com/policies/row-terms-of-use/ (검색 요약)
- https://openai.com/policies/usage-policies/ (검색 요약)
- https://help.openai.com/en/articles/8912793-c2pa-in-chatgpt-images (검색 요약)
- https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq (검색 요약)
- https://www.adobe.com/products/firefly.html (검색 요약)

## 5단계 원문 대조 결과 (2026-10-10)
원문 확인(Google):
- Gemini 웹 앱: 70개 이상 언어, 230개 이상 국가·지역, 목록에 Korean과 South Korea 있음 (13575153). 모바일 앱 수치(150개국)는 이번에 확인하지 않음 → 본문에서 사용 안 함.
- 이미지 도움말(14286560): 모델은 Nano Banana 2(기본), 유료 구독자는 Nano Banana Pro로 "Redo with Pro"(More 메뉴), Nano Banana 2 Lite도 있음. 컴퓨터에서 gemini.google.com → 왼쪽 위 Open Sidebar → Images. 편집은 Library에서 이미지 선택 → Chat. 다운로드는 "Download full size", 해상도는 Google AI 요금제 2K, 없으면 1K. 일일 한도(quota)가 있으나 수치 없음.
- 연령: 이미지 생성은 13세(또는 해당 국가 연령) 이상, 이미지 편집은 18세 이상 (개인 계정). 검색 요약의 "상충" 해소.
- 약관: Google 서비스 약관·금지된 사용 정책 동의, "타인의 저작권·개인정보 권리를 침해하지 말 것, 생성물을 쓰기·게시 전 재량으로 판단" 문구.
- 소개 페이지(gemini.google/overview/image-generation): Nano Banana 2 무료, Nano Banana 2.1은 Google AI 요금제. 도움말(2 / Pro)과 모델 이름 불일치 → 본문에서 둘 다 언급하되 단정하지 않음. 보이지 않는 SynthID와 보이는 워터마크를 쓴다고 설명. 도구 메뉴 "Create images" 안내.
- 검증 블로그: 이미지를 Gemini에 올려 Google AI 생성 여부 확인(SynthID), Nano Banana Pro 이미지에 C2PA 메타데이터.
수정한 사실: 연령 조건 확정, 메뉴 경로(Images, Library, Redo with Pro) 채움, 모델 이름과 무료/유료 구분 서술 교정, 보이는 워터마크 서술을 소개 페이지 문구로 교정(적용 범위는 미확인).
미확인(403): OpenAI 이용약관, 사용 정책, 서비스 약관, C2PA 도움말, 무료 FAQ, GPT-4o 이미지 소개글 → 본문에 "검색 결과 기준, 원문 미확인"으로 표시. Adobe Firefly 페이지는 미열람.
Aside: "확인 중인 튜토리얼" 제거, 대신 "ChatGPT·Adobe 부분은 원문 미확인" 안내로 구체화.
