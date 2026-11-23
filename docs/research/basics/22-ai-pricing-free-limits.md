# basics/22 조사 노트 (Claude·ChatGPT·Gemini 요금과 무료 한도)

확인일 2026-11-23. 한 페이지씩 기본 curl(-L)로 열람(모두 HTTP 200). 차단 우회 없음. HTML에서 텍스트만 추출해 읽음.

## 열람한 공식 페이지
- https://claude.com/pricing
- https://learn.chatgpt.com/docs/pricing (Work·Codex 가격 페이지; 플랜 가격 $0/$8/$20/$100부터/Business $20·$25)
- https://chatgpt.com/pricing (플랜별 기능표는 읽혔으나 가격 숫자는 텍스트로 추출되지 않아 가격은 learn.chatgpt.com에서 인용)
- https://gemini.google/subscriptions/ (United States 표시)
- https://support.google.com/gemini/answer/16275805
- 시도했으나 글에 쓰지 않음: help.openai.com/en/articles/9275245 (200 응답, 내용 미사용), openai.com/chatgpt/pricing (chatgpt.com/pricing과 동일 크기)
- 사이트 내: agents/09, claude/c02, basics/08·16, docs/research/claude/plans-2026-10-31.md, agents/09 노트(11-04)와 대조

## 확인한 사실 (2026-11-23)
- Claude: Free $0(5시간·주간 제한), Pro $17 연간/$20 월, Max $100(Pro 5배), Ultra $200(5시간 한도 없음·주간 10배). Claude Code는 Free No, Pro 이상 Yes. 11-04 값과 동일.
- ChatGPT: Free $0 / Go $8 / Plus $20 / Pro $100~ / Business $20·$25. Free: GPT-6 텍스트 채팅 무제한(남용 방지 조건), 업로드·이미지·음성·딥리서치·메모리 제한. Go는 광고 포함 가능. Instant 컨텍스트 Free 27K. Plus 5시간당 로컬 메시지 추정치는 모델 목록이 11-04와 달라짐(예: GPT-6.2 Astra 6-50, GPT-6 Luna 350-3,000).
- Gemini: Free $0 (표준 한도, 32k), Plus $4.99 (2x, 128k), Pro $19.99 (4x, 1M), Ultra $99.99/$199.99 (5x/20x). 5시간마다 갱신·주간 한도, 예고 없이 변경 가능, AI 플랜은 한도 시 Flash-Lite로 계속. 구독 페이지에 AI 크레딧 구매로 한도 확장 가능 문구.

## 확인하지 못함
- 원화 가격(세 서비스), 나라별·앱스토어 결제별 가격 차이.
- 무료 플랜의 고정 메시지 수(세 서비스 모두 공개 안 됨).
- Gemini 기능별 일일 횟수, ChatGPT 일반 채팅 메시지 수 표.
- chatgpt.com/pricing의 가격 숫자(렌더링되어 텍스트에 없음).

## 파일
- src/content/docs/basics/22-ai-pricing-free-limits.mdx, src/content/docs/ko/basics/22-ai-pricing-free-limits.mdx
