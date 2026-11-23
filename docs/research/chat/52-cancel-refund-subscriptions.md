# 52. AI 구독 해지·환불·플랜 변경 — 2026-11-23 기준 (G6)

## 확인한 공식 페이지 (curl 기본 옵션, 한 페이지씩; -L만, 우회 없음)
- OpenAI 도움말은 막히지 않음(200). 
  - https://help.openai.com/en/articles/7232927-canceling-your-chatgpt-subscription (200, "Updated 16 days ago")
    - 웹: Settings > Billing > Cancel plan > Cancel. 앱스토어: 설정 > 이름 > 구독 > ChatGPT > 구독 취소. 구글 플레이: 구독 > ChatGPT > Cancel subscription. 앱 삭제·계정 삭제로 앱스토어 구독이 해지되지 않음. 결제일 24시간 전 해지. 개인·셀프서비스 Business 대상, Enterprise·Edu 제외.
  - https://help.openai.com/en/articles/7232895-how-do-i-request-a-refund-for-my-chatgpt-subscription (200, "Updated 3 days ago")
    - 일반적으로 환불 불가. 미사용 개인 구독은 결제 7일 안 재량 환불 가능(조건). 7일 뒤 자동 일할 환불 없음. 웹·구글 플레이는 도움말 센터 채팅, 앱스토어는 Apple. EU/UK/튀르키예 14일 일할, 한국 거주자 안내(7일 안 미사용 전액, 이후 일할), 브라질 규칙.
  - https://help.openai.com/en/articles/6950777-chatgpt-plus (200): Plus $20/month, 가입 경로. 해지·다운그레이드 절차 없음.
  - https://help.openai.com/en/articles/20001056-troubleshooting-chatgpt-subscription-access-and-account-changes (200): 계정·스토어 연결, 복원. 다운그레이드 절차 없음.
  - https://help.openai.com/en/collections/3943089-managing-your-account (200, 목록만)
  - https://learn.chatgpt.com/docs/pricing (200): 해지·다운그레이드 문구 못 찾음(grep).
- Claude
  - https://support.claude.com/en/articles/8325617-cancel-your-pro-max-or-ultra-subscription (200, "Updated yesterday")
  - https://support.claude.com/en/articles/12386328-request-a-refund-for-a-paid-claude-plan (200)
  - https://support.claude.com/en/articles/8325618-paid-plan-billing-faqs (200): 결제일 변경 불가(해지 후 재가입), 카드 변경 등.
  - https://support.claude.com/en/articles/9267323-cancel-your-organization-s-team-plan-subscription (200)
  - https://support.claude.com/en/articles/10185996-how-to-change-your-pro-plan-from-monthly-to-annual-billing (200)
  - https://support.claude.com/en/articles/11049741-what-is-the-max-plan (200): Max $100/month, 연간 Pro에서 Max, Max에서 Ultra 일할, 구글 플레이 규칙. 다운그레이드 절차 없음(grep).
  - https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan (200): 다운그레이드 문구 없음(grep).
  - https://support.claude.com/en/articles/8325606-what-is-the-pro-plan (200), collections 9811436/9811145/9811198 (목록 확인).
- Google
  - https://support.google.com/googleone/answer/9056360?hl=en (200): 해지(안드로이드 단계만 본문에 있음), 환불 정책(대부분 저장 플랜 환불 불가), 해지 시 저장용량 제한.
  - https://support.google.com/googleone/answer/9003633?hl=en (200): 플랜 변경·다운그레이드(컴퓨터, one.google.com), 구글 플레이 변경 시 처리, 다음 주기 적용.
  - https://support.google.com/googleone/ (200, 도움말 홈에서 위 두 문서 링크 확인). 추측한 번호(6052538, 9312181, 9314403)는 404·429.
  - https://support.google.com/gemini/answer/16275805?hl=en (200): 한도, Google AI 플랜은 일부 Google One 유료 플랜에 포함. 해지 문구 없음.
  - https://gemini.google/subscriptions/ (200): "Cancel anytime. No refunds for partial billing periods, except as required by applicable law" 문장이 있으나 해당 플랜 범위 불명확, 본문 근거로 쓰지 않음.
- 앱스토어·구글 플레이
  - https://support.apple.com/en-us/118428 (200): 해지 단계(iPhone/iPad/Mac/Windows/Android).
  - https://support.apple.com/en-us/118223 (200, "Published Date: September 17, 2026"): reportaproblem.apple.com 환불, 24~48시간.
  - https://support.google.com/googleplay/answer/7018481?hl=en (첫 요청 429(요청 과다 안내), 약 45초 뒤 한 번 재시도 200): 해지, 재구독.
  - https://support.google.com/googleplay/answer/2479637?hl=en (200): 환불 정책 개요.

## 확인하지 못한 것
- Gemini(Google AI) 컴퓨터·iPhone 탭 해지 단계(페이지 본문에 안드로이드만 있었음), Gemini Apps Help 쪽 전용 해지 페이지.
- ChatGPT 상위 플랜 → Plus 등 다운그레이드 절차. Claude Max/Ultra → 낮은 플랜 다운그레이드 절차.
- 해지 후 대화·파일 보관 여부(세 서비스 모두 읽은 페이지에 없음).
- Claude·Google의 한국 거주자 환불 규칙. 국가별 소비자법.
- 실제 계정에서 해지·환불 흐름 시험은 하지 않음.
- 가격은 본문에 쓰지 않음(요금제 가격은 basics/08·G1 담당).

## 본문 반영
- 4단계(결제처 확인 → 서비스별 해지 → 환불 → 플랜 변경)는 필자(사이트) 구성이며 공식 권고 아님. "해지 후 재가입으로 낮추기"는 필자 해석으로 표시함.
- 연결: basics/08(requires), basics/21, basics/05 미사용(링크 안 넣음). 법률·금융 조언 아님 명시.
