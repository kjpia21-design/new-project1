# 11. 업무용 이미지 생성 (Gemini 앱, ChatGPT) — 2026-10-10 기준

> 조사 방법 주의: 이 세션에서는 WebFetch가 DNS 오류(ENOTFOUND)로 동작하지 않아 공식 페이지 원문을 직접 열지 못했다. 아래 사실은 WebSearch가 반환한 공식 도메인(support.google.com, gemini.google, blog.google, help.openai.com, openai.com) 결과 요약에 근거한다. 모두 "검색 요약"이며 본문에서는 단정을 피하고 공식 페이지 확인을 안내한다.

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
