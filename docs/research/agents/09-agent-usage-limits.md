# agents/09 조사 노트 (AI 에이전트 비용과 사용 한도)

확인일 2026-11-04. 한 페이지씩 기본 curl(-L)로 열람(모두 HTTP 200). 차단 우회 없음. HTML에서 텍스트만 추출해 읽음.

## 열람한 공식 페이지
- https://claude.com/pricing
- https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work
- https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans
- https://learn.chatgpt.com/docs/pricing
- https://support.google.com/gemini/answer/16275805
- https://gemini.google/subscriptions/
- 사이트 내: basics/08, claude/c02, agents/05~08, docs/research/claude/plans-2026-10-31.md (비교)

## 확인한 사실 (2026-11-04)
- Claude: Free $0 / Pro $17(연간, $200 선결제) 또는 $20(월) / Max $100 / Ultra $200. Max 5x Pro, 5시간+주간. Ultra 주간 10x Pro, 인증 계정은 5시간 한도 없음. Max 월 $100, Ultra 월 $200 API 크레딧. 10-31 노트와 일치.
- Claude 도움말: 세션 한도 5시간(첫 메시지부터), 주간 한도는 계정별 고정 시각. 모든 화면 합산. 한도는 재량으로 조정 가능. 사용 크레딧은 표준 API 요금, 월 지출 상한 설정 가능, 월 API 크레딧은 사용 크레딧에 적용 안 됨. 모바일 앱 구독자는 웹에서만 켬. 일본은 2026-09-10부터 6개월 만료.
- ChatGPT 가격 페이지는 Work+Codex용: Free $0, Go $8, Plus $20, Pro $100/$200/$500, Business $20(연간)/$25(월). Plus·표준 Business 5시간당 로컬 메시지 추정치(예: GPT-6 Astra 5-45, GPT-6 Luna 350-3,000), 고정 한도 아님, 주간 한도 가능, Pro는 현재 5시간 한도 없음. Plus·Pro는 크레딧 추가 구매 가능.
- Gemini 도움말: 연산 기반 한도, 5시간마다 갱신(주간 한도까지), 예고 없이 변경 가능. Plus 2x, Pro 4x, Ultra 5x/20x(AI Pro 대비). 컨텍스트 32k/128k/1M. 구독 페이지(USD): Plus $4.99, Pro $19.99, Ultra $99.99/$199.99. 한도 도달 시 Flash-Lite로 계속 가능.

## 확인하지 못함
- 원화 가격(세 서비스 모두), Gemini 구독 페이지의 통화·지역 기준.
- ChatGPT 일반 채팅(Work/Codex 외)의 메시지 한도표.
- Gemini 기능별 일일 횟수.
- 한국에서 Claude 사용 크레딧 만료 정책.
- 에이전트 작업당 실제 사용량(실측 안 함, 글에 명시).

## 파일
- src/content/docs/agents/09-agent-usage-limits.mdx, src/content/docs/ko/agents/09-agent-usage-limits.mdx
