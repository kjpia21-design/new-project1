# 15. AI 음성 내레이션 — 2026-10-10 기준

> 5단계 원문 대조(2026-10-10): elevenlabs.io(models, pricing, terms, use-policy, voice-cloning, docs)는 curl로 원문 확인. help.elevenlabs.io와 OpenAI, Canva는 403으로 "(검색 요약)" 유지.

## 핵심 사실
- ElevenLabs 문서: Multilingual v2 모델의 지원 언어 목록에 한국어(ko) 포함. 한 번에 최대 10,000자(약 10분). 일부 페이지는 Eleven v4(90개 이상 언어) 등 신모델을 현재 모델로 안내 → 모델 이름은 단정하지 않음. (검색 요약) https://elevenlabs.io/docs/overview/models , https://help.elevenlabs.io/hc/en-us/articles/13313366263441-What-languages-do-you-support
- 요금: 무료 플랜 월 10,000 크레딧(요약), 개인·비상업 용도, ElevenLabs 표기 필요. 상업적 이용은 유료 플랜(Creator부터라는 제품 페이지 문구). 가격표는 상충하므로 공식 가격 페이지 확인. (검색 요약) https://elevenlabs.io/pricing , https://elevenlabs.io/terms-of-use
- Voice Library의 음성은 무료 상업 이용 라이선스가 있다는 안내. (검색 요약) https://elevenlabs.io/voice-cloning
- 음성 복제 동의: Instant Voice Cloning 생성 시 복제할 권리와 동의가 있음을 확인(체크)해야 저장 가능. Professional Voice Cloning은 본인 음성만 가능하며 타인의 동의가 있어도 불가, 본인 검증 절차 필요. 본인이 자기 계정에서 만든 뒤 링크로 비공개 공유하는 방식. IVC 음성은 계정 전용이며 공유 불가. (검색 요약) https://elevenlabs.io/docs/eleven-creative/voices/voice-cloning/instant-voice-cloning , https://help.elevenlabs.io/hc/en-us/articles/36842751624209-Can-I-create-a-Professional-Voice-Clone-of-someone-else-s-voice
- 금지 사용 정책: 동의·법적 권리 없는 음성 복제, 괴롭힘·위해 목적 복제, AI 생성 여부를 속이려는 복제 금지. 정치 후보·선출 공직자 사칭은 동의와 무관하게 금지. 유명인·공인 등 고위험 음성 복제 차단(No-Go Voices). 위반 시 경고, 음성 삭제, 계정 정지, 수사기관 협조. (검색 요약) https://elevenlabs.io/use-policy , https://help.elevenlabs.io/hc/en-us/articles/22584327690897-What-are-No-Go-Voices
- ElevenLabs AI Speech Classifier로 ElevenLabs 생성 음성 여부를 확인할 수 있다. (검색 요약) https://elevenlabs.io/use-policy
- 샘플 길이: 공식 문서는 IVC에 약 1~3분 오디오라고 안내(다른 블로그는 약 1분). (검색 요약) 위 IVC 문서
- Canva: 텍스트 음성 변환·AI 더빙 지원 언어에 한국어 포함(대안·간편 옵션). (검색 요약) https://www.canva.com/features/text-to-speech/ , https://www.canva.com/features/ai-dubbing/
- OpenAI: 동의 없는 실존 인물의 음성 초상 사용 금지(사용 정책). 생성 음성은 openai.com/verify로 확인 가능. (검색 요약) https://openai.com/policies/usage-policies/ , https://openai.com/research/verify/
- 한국어 품질(억양·숫자·영문 혼용) 평가는 공식 문서에 없음 → 직접 들어보고 확인.

## 따라하기 절차
대본 작성(Claude 등) → 소리 내어 읽는 길이 점검 → ElevenLabs에서 사전 제작(premade) 음성 선택 → 텍스트 입력해 생성 → 한국어 발음 교정(숫자·고유명사 표기 바꾸기) → 다운로드 → 영상에 합치기. 복제는 본인 음성 + 동의 체크 절차.

## 확인 못 함
- 한국어 전용 음성 목록, 정확한 요금제 이름·가격, 한국에서의 약관 적용(EEA/비EEA 약관 구분), 생성 음성의 AI 표기 법적 의무(한국 규정).

## 출처 목록
위 URL 전부 (확인일 2026-10-10, 검색 요약).

## 5단계 원문 대조 결과 (2026-10-10)
원문 확인 및 이전 검색 요약과 달라진 점:
- 모델(docs/overview/models): Korean이 Multilingual v2(ko), Flash v2.5, Eleven v4 계열(90+ languages)에 있음. 요청당 글자 한도: v4 10,000(약 10분), v3 5,000, Multilingual v2 10,000, Flash v2.5 40,000.
- 가격(elevenlabs.io/pricing, 미국 USD, 2026-10-10): Free $0 10k 크레딧, Starter $6(30k, 첫 달 $1 표시, Commercial License와 Instant Voice Cloning 포함), Creator $22(121k, 첫 달 $11, Professional Voice Cloning 포함), Pro $99(600k), Scale $299, Business $990. 1글자=1크레딧(Multilingual v2), 크레딧 최대 2개월 이월. 수정: "상업 이용은 Creator부터"는 틀림 → 비교표상 상업 라이선스는 Starter부터.
- 약관(terms-of-use 1(c)): 무료 이용자는 비상업 목적만, 유료 구독자는 상업 목적 가능, 비상업은 개인 이메일 사용. 무료 플랜 "ElevenLabs 표기 필요"는 약관·가격 페이지에서 찾지 못함 → 삭제.
- 금지 사용 정책(use-policy): 살아 있는 개인의 음성·신원·초상을 명시적·충분한 설명을 거친 동의 또는 다른 유효한 승인 없이 복제·합성·사칭 금지, 고인은 해를 끼칠 가능성 또는 사후 권리 침해 시 금지. 수정: 정치 후보·선출 공직자 사칭은 "동의와 무관하게 금지"가 아니라 "승인 없이(without authorization) 사칭 금지"이고 정치 캠페인은 사전 서면 동의 없이 금지. 조치: 콘텐츠 삭제, 제한·정지·해지, 법적 필요 시 수사·규제 기관 통지(경고·음성 삭제는 원문에 없음). 허락 없는 음성 사용 신고 링크 있음. 출처 신호(워터마크·메타데이터)를 지우는 것 금지, 법상 필요하거나 오해를 줄 때 AI 상호작용 고지. "AI Speech Classifier"는 이 정책 페이지에서 찾지 못함 → 삭제.
- IVC 문서: 대시보드 Voices → + → Instant Voice Clone, 권리와 동의 확인 후 Save voice. 최소 1분, 약 1~2분 권장, 3분 초과는 효과 적음("1~3분" → 교정). 복제 음성은 파일로 내보낼 수 없고 계정에 남음(API로는 사용 가능).
- PVC 문서(docs): 본인 목소리만 가능, 동의가 있어도 타인 음성 불가, 모든 PVC에 본인 검증. 타인은 자기 계정에서 만들어 공유 링크로 공유 (help 페이지와 같은 내용을 docs에서 확인).
- Voice Library 문서: 일부 음성은 유료 구독자 전용, 공유자가 무료 사용자 제외 가능. "Voice Library 음성은 무료 상업 이용 라이선스" 문장은 찾지 못함 → 삭제하고 "상업 이용 조건은 확인 못 함"으로 변경.
미확인(403): help.elevenlabs.io 언어 목록과 No-Go Voices, Canva TTS·AI 더빙, OpenAI 사용 정책·verify.
Aside("확인 중인 튜토리얼"): 핵심 사실(가격·동의·메뉴 경로)이 원문으로 확인되어 제거. Canva·No-Go·OpenAI 문장은 본문에서 개별적으로 "원문 미확인"을 밝힘.

## 6단계 재점검 (2026-10-10)
- 접근: developers.openai.com은 curl로 열림(WebFetch는 호스트 해석 실패). openai.com 사용 정책 원문은 접근 불가.
- 확인함: 사용자 지정 음성은 동의 녹음(음성 주인이 정해진 문장을 읽음, ko 문장 포함)과 샘플 녹음 2개가 필요, 일부 고객 한정 (https://developers.openai.com/api/docs/guides/custom-voices).
- 확인함: TTS 가이드가 "사용 정책상 최종 사용자에게 TTS 음성이 AI 생성임을 분명히 알려야 한다"고 명시 (https://developers.openai.com/api/docs/guides/text-to-speech).
- 기존 "OpenAI 사용 정책이 동의 없는 음성 사용 금지" 문장은 정책 원문을 못 열어 위 두 근거로 대체. sources에서 openai.com 정책 항목 제거.
- 못 찾음: 사용 정책 원문, Canva 텍스트 음성 변환 도움말(canva.com 접근 불가, 본문 유지).

## 7단계 재점검 (2026-10-12)
- ElevenLabs 모델·가격·약관·정책·클로닝·라이브러리 문서, OpenAI custom-voices·TTS 재열람. 변경 없음(Starter $6/Creator $22/Pro $99, 글자 한도, 동의 규칙 동일). help.elevenlabs.io·canva.com은 미열람.

## 재점검 (2026-10-19)
- ElevenLabs pricing(Free $0 10k / Starter $6 30k / Creator $22 121k / Pro $99 600k; Scale $299, Business $990), models 문서(v4·v4 Turbo·v3·Multilingual v2·Flash v2.5, 글자 한도 10,000/5,000/10,000/40,000, v4 90개 이상 언어에 Korean), IVC·PVC 문서, 이용약관(무료는 비상업), 사용 정책을 다시 열었다. 본문과 충돌 없음. 가격 페이지의 Starter 첫 달 $1 프로모션은 'Until Oct 18'로 표시(프로모션은 계속 변동). help.elevenlabs.io(No-Go Voices 등)는 계속 403. 변경 없음, lastVerified만 갱신.

## 재확인 2026-10-26
- ElevenLabs 모델 문서(v4 90+언어 10,000자, v3 5,000자, Multilingual v2 10,000자, Flash v2.5 40,000자), 가격 페이지(Free $0/10k, Starter $6/30k, Creator $22/121k, Pro $99/600k; Starter·Creator 첫 달 할인 표시, 이월 최대 2개월), 이용약관(무료는 비상업), IVC·PVC 문서, Voice Library, 사용 정책, Playground TTS 문서를 다시 열어 본문과 일치 확인.
- 변경: OpenAI custom voices 문서에 녹음 없이 텍스트 설명으로 만드는 prompt-to-voice(GPT-Live용)가 추가되어, 본문의 "동의 녹음 필요" 문장을 "녹음으로 만들 때"로 한정하고 prompt-to-voice 언급 추가.
- 여전히 403: help.elevenlabs.io 3건(언어, PVC 타인 음성, No-Go Voices), canva.com TTS.
