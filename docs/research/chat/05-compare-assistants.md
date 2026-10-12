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

## 6단계 재점검 (2026-10-10)
- 출처: learn.chatgpt.com(OpenAI ChatGPT 문서; developers.openai.com/llms.txt가 안내), OpenAI OpCo, LLC가 등록한 App Store 페이지(미국/한국). help.openai.com·openai.com·chatgpt.com은 403.
- 가격(https://learn.chatgpt.com/docs/pricing.md): Free $0, Go $8/월, Plus $20/월, Pro $100·$200·$500/월 중 선택(Pro "From $100"), Business 사용자당 월 $20(2명 이상, 연 결제) / 월 결제 $25, Enterprise·Edu 문의. Business는 "No training on your business data by default".
- App Store 인앱 구매 표시: 미국 Plus $19.99, Go $8.00, Pro 100 $100, Pro 200 $200, Pro 500 $500. 한국 Go ₩13,000, Plus ₩29,000, Pro 100 ₩159,000, Pro 200 ₩299,000, Pro 500 ₩790,000. 목록에 "ChatGPT Plus $200 / ₩299,000" 항목이 한 번 더 있으나 이름이 애매해 사용하지 않음. 앱 스토어 가격은 웹 가격과 다를 수 있음(Plus 미국 $19.99 vs 웹 $20).
- 한국 App Store 언어 목록에 한국어 포함.
- 기능: Work 모드(문서·프레젠테이션·스프레드시트·PDF 생성, 파일 분석), 이미지 생성·편집, 프로젝트 파일 공유(use-chatgpt.md, artifacts-viewer.md, image-generation.md, projects.md).
- 못 찾음: 업로드 한도, 컨텍스트 토큰, 플랜별 사용량 한도, 개인 계정 학습 기본값.
- 본문 변경: 참조표 ChatGPT 열 8칸 중 5칸 채움(무료, 가격, 파일 생성, 학습(부분), 한국어), 3칸은 "찾지 못함"으로 명시. Aside는 "이 튜토리얼의 한계"를 남은 항목만 적도록 수정. 채워진 빈칸 5, 남은 빈칸 3(업로드, 컨텍스트, 개인 학습 기본값).

## 재점검 (2026-10-12)
- Claude 가격 페이지, 업로드/한도/파일 생성 도움말, Gemini 요금제·한도·업로드·개인정보 페이지, learn.chatgpt.com 가격·문서, App Store 미국/한국 페이지를 다시 읽음. 가격·한도·메뉴 변동 없음.
- 추가: ChatGPT Free는 이미지 생성 불가 (https://learn.chatgpt.com/docs/pricing). 본문 "무료 이용" 칸에 반영.
- 여전히 못 찾음: ChatGPT 업로드·컨텍스트 한도, 개인 계정 학습 기본값, Gemini 파일 형식 생성 지원.
