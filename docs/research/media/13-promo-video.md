# 13. AI 영상 생성으로 짧은 홍보 영상 — 2026-10-10 기준

> 5단계 원문 대조(2026-10-10): Google 페이지는 curl로 원문 확인. Canva·OpenAI·Adobe는 403으로 "(검색 요약)" 유지.

## 핵심 사실
- Gemini 앱 영상 생성 도움말: Veo 3.1로 짧은 영상 생성, Gemini 앱에서 생성한 영상은 8초. Veo 3.1 영상 수에 상한이 있고 한도에 가까워지면 알림, AI Pro는 Ultra로 업그레이드하거나 초기화를 기다림, Ultra가 한도 더 높음. 고정 일일 수치는 공식 요약에 없음. (검색 요약) https://support.google.com/gemini/answer/16126339
- gemini.google 영상 생성 소개 페이지는 "Gemini Omni"가 Gemini 앱에서 Veo를 대체할 최신 영상 생성·편집 모델이라고 안내하나, 도움말은 아직 Veo 3.1을 설명해 문서 간 불일치. 본문에서는 모델 이름을 단정하지 않는다. (검색 요약) https://gemini.google/overview/video-generation/
- Gemini 앱에서 만든 모든 영상에는 보이지 않는 SynthID 워터마크가 들어가며 Gemini는 업로드한 파일에서 이를 확인할 수 있다(Google AI 콘텐츠만 인식). (검색 요약) https://support.google.com/gemini/answer/16722517
- 영상 생성은 유료 Google AI 요금제 기능으로 소개됨. 일부 영상 편집용 업로드는 EEA·스위스·영국 등에서 제한. 한국에서의 제공 여부는 이 조사로 확정 못 함 → 공식 페이지 확인. (검색 요약) https://gemini.google/subscriptions/
- Gemini 앱 한도는 연산량 기반이며 미디어 생성이 더 많이 소모, 5시간마다 갱신, 주간 한도 존재, AI 크레딧 구매 가능. (검색 요약) https://support.google.com/gemini/answer/16275805
- Sora: OpenAI 공식 페이지 여러 곳에 "2026-04-26부로 Sora 제품은 더 이상 제공되지 않는다"는 안내. 과거에는 한국이 지원 국가였음. 본문에서는 "이용 불가 안내가 있다"로 간단히만 쓴다. (검색 요약) https://openai.com/index/sora-2/ , https://help.openai.com/en/articles/12461230-sora-app-supported-countries
- OpenAI는 Sora 당시 사람 사진 업로드 시 출연자 동의·권리 보유 확인(attestation)을 요구, 공인 생성은 차단(동의 기반 캐릭터 기능 제외). 동의 원칙의 사례로 사용. (검색 요약) https://openai.com/index/creating-with-sora-safely/
- Canva: Magic Media 영상은 짧은 무음 클립, Magic Video는 모든 플랜 포함·시간당 한도. 12편 참고. Canva는 자막 생성(한국어 지원)·AI 더빙(한국어)·텍스트 음성 변환(한국어)도 제공. (검색 요약) https://www.canva.com/help/magic-video/ , https://www.canva.com/help/generate-edit-captions-on-videos/
- Adobe Firefly: 자체 모델은 상업적으로 안전하다고 설명, 베타는 개인용 제한 가능. (검색 요약) https://www.adobe.com/products/firefly.html

## 따라하기 절차
기획(15초 스토리보드: 장면 3개) → Gemini 앱에서 장면별 8초 클립 생성(이미지 참고) → Canva 영상 편집에서 클립 이어붙이기·자막·로고·음악 → 내보내기 → 라벨 표기.

## 확인 못 함
- 한국에서 Gemini 영상 생성 제공 여부·요금제 가격, 정확한 일일 한도, Omni 전환 시점, 클립 해상도, 음성 포함 여부, 영상의 상업 이용 조항 원문.

## 출처 목록
위 URL 전부 (확인일 2026-10-10, 검색 요약).

## 5단계 원문 대조 결과 (2026-10-10)
원문 확인(Google) 및 이전 검색 요약과 달라진 점:
- 영상 도움말(16126339): 모델은 "Gemini Omni"(Veo 3.1 언급 없음). 개인 계정은 Google AI 요금제 필요, 18세 미만 불가, Workspace는 해당 라이선스 필요. 컴퓨터에서 gemini.google.com → Open Sidebar → Create video → 템플릿(선택) → 프롬프트 → Submit. 이미지 최대 5장 + 영상 1개 업로드, 몇 분 소요, 생성 중 같은 채팅 사용 불가, 오디오 요청 가능. 공유/다운로드는 영상 아래 Share → Share on YouTube / Download video. 영상 업로드 편집은 EEA·스위스·영국·일부 미국 주에서 불가. 금지 사용 정책, 업로드 이미지 권리 보유, 속이거나 괴롭히거나 해치려는 목적 금지, 위반 시 계정 해지 가능.
- 소개 페이지(gemini.google/overview/video-generation): "Gemini Omni가 Gemini 앱에서 Veo를 대체", Gemini Omni 1.1 Flash가 Veo 3.1을 대체, 10초 영상, 네이티브 오디오, 사진 최대 5장, Google AI 구독 필요, 18+, 요금제·지역에 따라 기능 다름. 모든 Gemini 앱 영상에 SynthID.
- 수정: 클립 길이 "8초(Veo 3.1)" → "10초(Omni, 소개 페이지 기준)". 모델 이름 불일치 Aside는 "Omni가 Veo 3.1 대체, 구독 안내에 Veo 3.1 표기 잔존"으로 교체. 한국 제공: 구독 안내(16275805)의 Google AI Plus/Pro/Ultra 제공 국가 목록에 South Korea 있음 → 본문에 반영(영상 기능 자체의 한국 제공 문구는 없음, 요금제 국가 목록 기준).
- 한도(16275805): 연산량 기반, 5시간마다 갱신, 주간 한도, 배수 Plus 2x / Pro 4x / Ultra 5x 또는 20x(Pro 대비). 구독 페이지 가격(미국 사이트): Plus $4.99, Pro $19.99, Ultra $99.99부터 (2026-10-10 기준, 한국 가격은 미확인).
- 검증(16722517): 이미지·영상·오디오 확인, 영상 90초 미만, 100MB 이하, 하루 약 10회(이미지/영상/오디오 각각) 한도, Google AI 콘텐츠만 인식.
미확인(403): Canva Magic Video/이미지→영상/자막 도움말, Canva AI 약관, OpenAI Sora 종료 안내와 안전 글, Adobe. 상업 이용을 직접 허용하는 Google 문장은 찾지 못함.
Aside: "확인 중인 튜토리얼" 제거 대신 "Canva 공식 도움말 원문은 아직 확인하지 못했어요"로 구체화.

## 6단계 재점검 (2026-10-10)
- 확인함: OpenAI 개발자 문서 deprecations에 "2026-03-24 공지: Videos API와 Sora 2 모델(sora-2, sora-2-pro, sora-2-2025-10-06 등)을 2026-09-24에 제거" (https://developers.openai.com/api/docs/deprecations). 본문에 반영.
- 못 확인: 앱·웹 제품 종료일(2026-04-26)과 Sora 안전 글의 동의 확인 내용은 openai.com 접근 불가로 검색 요약 그대로 두고 본문에 미확인으로 표시. Sora 앱의 App Store URL(추정 ID)은 404.
- 확인함(참고): Canva App Store 등록 정보에 Magic Video(iPhone 한정 표기), Veo 3 영상 생성 언급 (https://apps.apple.com/us/app/canva-ai-photo-video-editor/id897446215).
- 못 찾음: Canva Magic Video 클립 길이·한도, 자막 기능 도움말, 워터마크 조건. caution Aside는 남은 항목만 적도록 수정.

## 7단계 재점검 (2026-10-12)
- Google 도움말 4건·소개 페이지·구독 페이지·OpenAI deprecations 재열람. 변경 없음(Gemini Omni 1.1 Flash 10초, 18세 이상, 한도 5시간/주간, 가격 Plus $4.99/Pro $19.99/Ultra $99.99부터(+$199.99 티어), Sora 2 API 2026-09-24 제거). Canva·openai.com은 403.

## 재점검 (2026-10-19)
- support.google.com/gemini 16126339(영상 생성), 16722517(검증), 16275805(한도·제공 국가), gemini.google/overview/video-generation, gemini.google/subscriptions를 다시 열었다. 변경: 소개 페이지가 모델명을 'Gemini Omni 1.1 Flash'(Veo 3.1을 대체, 10초 영상, 이미지 최대 5장)로 표기 → Aside에 모델명 추가. 그 밖에 한도(5시간 갱신·Plus 2배/Pro 4배/Ultra 5배 또는 20배), South Korea 제공 국가 목록, 가격($4.99/$19.99/$99.99부터), 검증 한도(영상 90초 미만·100MB, 하루 약 10회)는 동일. 구독 안내에 Google Flow Credits 항목이 새로 보이나 본문 범위 밖. Canva 도움말·openai.com·adobe.com은 계속 403이라 해당 부분은 미확인 유지.

## 재확인 2026-10-26
- Gemini 영상 도움말(16126339: Create video, Add image/video, 영상 1개+이미지 5장, Share > Download video), 소개 페이지(Omni 1.1 Flash가 Veo 3.1 대체, 10초), 한도 도움말(16275805: 5시간 갱신·주간, 2x/4x/5x·20x), 검증 도움말(16722517: 90초 미만·100MB·약 10회), 구독 페이지($4.99/$19.99/$99.99부터), OpenAI deprecations(Sora 2 API 2026-09-24 제거)를 다시 열어 본문과 일치함을 확인.
- 변경: Canva 미국 App Store 설명에서 Magic Video 언급이 사라지고 "Veo 3" 영상 생성(소리 포함)·Beat Sync 소개로 바뀜 -> 본문 Aside를 날짜 구분해 수정. Canva 도움말은 여전히 403.
