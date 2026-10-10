# 05. Claude·ChatGPT·Gemini 비교

## 핵심 사실 (Claude 확인 + Gemini 원문 확인, 2026-10-10)
- 요금(USD, 미국 기준, 2026-10-10): Free $0 / Pro 월 $20(연 결제 월 $17) / Max $100부터 / Team 스탠더드 월 $25(연 $20) 프리미엄 $125(연 $100) / Enterprise 좌석 $20 + API 요율 사용량. (출처: https://claude.com/pricing)
- Free 기능: 웹·데스크톱·모바일 채팅, 웹 검색, 파일 생성·코드 실행, 메모리, 커넥터, 아티팩트, 프로젝트 5개. (출처: https://claude.com/pricing)
- 모델 학습: Free/Pro/Max Opt-out, Team/Enterprise 기본 없음. (출처: https://claude.com/pricing)
- 업로드: 채팅 파일당 500MB, 20개. (출처: https://support.claude.com/en/articles/8241126-upload-files-to-claude)
- 컨텍스트: 최대 1M 토큰(유료 최신 모델). (출처: https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work)
- 기능: 메모리/프로젝트/커넥터/Research (C03, C05, C07, C09, C10 노트).

## Gemini (원문 확인, 미국 기준 2026-10-10)
- 요금: Free $0(구글 계정, Deep Research·Canvas·Gems 포함) / Google AI Plus $4.99/월 / Google AI Pro $19.99/월 / Google AI Ultra $99.99/월부터($199.99는 20배 한도). 한국 원화 가격은 페이지가 미국 기준이라 미확인. (출처: https://gemini.google/subscriptions/)
- 한도: 컴퓨팅 기반, 5시간마다 갱신 + 주간 한도. 컨텍스트 창: 플랜 없음 32k / AI Plus 128k / AI Pro·Ultra 1M 토큰(약 1,500쪽). Plus·Pro·Ultra 모두 제공 국가에 South Korea 포함. (출처: https://support.google.com/gemini/answer/16275805)
- 업로드: 프롬프트당 최대 10개, 동영상 2GB·그 외 100MB, 동영상 합계 5분(Pro·Ultra 1시간), 오디오 10분(3시간), ZIP 10개·100MB, 코드 폴더/GitHub 5,000개·100MB. 스프레드시트로 차트 생성 가능. (출처: https://support.google.com/gemini/answer/14903178)
- 학습/개인정보: Keep Activity 켜짐이면 일부 대화를 사람이 검토해 서비스 개선에 사용, 기본 보관 18개월(3·36개월·무기한 선택). 임시 채팅은 AI 학습에 쓰이지 않음, 72시간 보관. Keep Activity를 꺼도 응답·보호 목적 처리는 계속. (출처: https://support.google.com/gemini/answer/13594961)
- 한국어: Gemini 지원 언어 목록에 Korean 포함. (출처: https://support.google.com/gemini/answer/14579026)
- 파일 생성(.xlsx/.docx 등) 지원 여부는 원문에서 확인 못 함.

## 확인 못 함
- ChatGPT: help.openai.com, openai.com, chatgpt.com 재시도 결과 curl 403(자동 접근 차단), WebFetch는 이름 해석 실패. 가격·기능·한도·학습 정책 미확인. 본문은 "공식 도움말에서 확인하세요" 유지.
- (4단계) WebSearch는 제3자 사이트만 반환(공식 아님) → 근거로 쓰지 않음. 검색 결과가 서로 다른 가격(예: Pro 이중 가격대)을 보여 줘 오히려 직접 확인 필요성만 확인.
- 따라서 chat/05는 Claude 사실 + 비교 방법론(같은 과제로 직접 테스트) + 확인할 공식 페이지 체크리스트로 구성.

## 출처 목록
- https://gemini.google/subscriptions/ / https://support.google.com/gemini/answer/16275805 / /14903178 / /13594961 / /14579026 — 원문 확인 2026-10-10
- https://claude.com/pricing / https://support.claude.com/en/articles/8241126-upload-files-to-claude / https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work — 확인일 2026-10-10
