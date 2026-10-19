# 22. AI 검색 제대로 쓰기: Perplexity·ChatGPT 검색·Claude 웹 검색

조사일 2026-10-14. 한 페이지씩 curl로 확인.

## Perplexity (www.perplexity.ai/help-center/en, 접근 가능)
- 동작 원리(10352895): 질문을 해석 > 실시간 웹 검색 > 요약. 모든 답에 번호 인용이 붙어 원문으로 연결. Pro Search는 여러 소스를 깊게 조사하고 모델 선택 가능(Best 기본). Research는 수십 번 검색·수백 소스를 읽고 2~4분 안에 보고서. 무료는 Pro Search 일일 횟수 제한, Pro는 확장. "Create files and apps"는 Pro 플랜 기능.
- 팁(13645819): 의도를 분명히, 모호한 한 단어("Cars") 대신 구체적 질문. 맥락 추가, 핵심 키워드, 답 형식(요약·표·불릿) 지정. Research는 후속 질문 가능, 파일 업로드 후 웹 자료와 교차 분석.
- 플랜(11187416): Standard(무료), Pro, Max, Education Pro(검증 시 월 $10), Enterprise. 무료는 기본 검색 사실상 무제한, Pro Search 매우 제한, 기본 파일 업로드 제한, 고급 모델 없음. Pro는 Pro Search 확장, 고급 모델, 이미지·영상 생성, 프로젝트당 파일 50개.
- Pro 소개(10352901): 답변당 인용 10배, Research 확장, GPT-5.2·Claude Sonnet 4.6·Gemini 3.1 Pro 등 모델 포함(공식 문구).
- 열어 본 페이지에서 Pro 월 가격과 한국 제공 여부, 한국어 지원은 확인하지 못함.

## ChatGPT 검색 (learn.chatgpt.com)
- /docs/web-search.md: ChatGPT에 자체 웹 검색 도구가 있고 웹 결과는 신뢰할 수 없는 입력으로 취급하라고 안내. 웹에서는 최신 정보나 출처를 물으면 검색 결과와 인용이 채팅에 표시. 워크스페이스 설정이 검색을 제한할 수 있음. Work 모드에서 + 메뉴 > Deep research(계정·워크스페이스에 따라 제공)로 여러 소스 조사와 출처 포함 보고서. 예시 문구 확인.
- /docs/use-chatgpt: Chat에서 웹 검색 가능, 기능은 플랜·플랫폼·지역·롤아웃·워크스페이스 설정에 따라 다름.
- 이 문서의 검색 설명 상당 부분은 Codex(개발자 도구) 중심. 일반 사용자용 검색 UI 세부(버튼 이름, 무료 플랜 한도, 한국 제공)는 확인하지 못함.
- /llms.txt로 문서 목록을 한 번 열어 web-search 문서를 찾음.

## Claude 웹 검색 (support.claude.com)
- 10684626: 지원 모델 목록(Haiku 5.5, Sonnet 5.5, Opus 5.5, Fable 5.1 등), 라이브 웹 검색, 모든 응답에 인용. "+" > Web search로 켬, 새 통합 경험에서는 토글이 없고 도움이 될 때 자동 검색. Team/Enterprise는 Owner가 Organization settings > Capabilities에서 먼저 켜야 함.
- 11088861: Research는 유료 플랜(Pro, Max, Team, Enterprise)의 웹·데스크톱·모바일. 웹 검색이 켜져 있어야 함. "+" > Research. Gmail·Calendar·Docs 연결 시 내부 맥락과 웹을 함께 검색. 일반 대화와 같은 한도지만 더 빨리 소모. Opus 5.5 사용, 필요시 Opus 4.8로 대체(선택 모델과 무관).
- 사이트 내 사실 일치: 기존 C10 노트와 같음.

## 확인하지 못한 것
- Perplexity Pro 가격, 한국 제공 여부, 한국어 품질.
- ChatGPT 무료 플랜의 검색 한도, 일반 UI 메뉴 경로(웹 UI 세부), 한국 제공.
- 세 서비스의 정확도 순위(공식 근거 없음, 쓰지 않음).

## 열어 본 출처 (2026-10-14)
- https://www.perplexity.ai/help-center/en (+ collections/12702161-getting-started, collections/18799292-subscription-plans-billing 목록)
- https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work
- https://www.perplexity.ai/help-center/en/articles/13645819-tips-for-getting-better-answers-from-perplexity
- https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you
- https://www.perplexity.ai/help-center/en/articles/10352901-what-is-perplexity-pro
- https://learn.chatgpt.com/llms.txt , https://learn.chatgpt.com/docs/web-search.md , https://learn.chatgpt.com/docs/use-chatgpt
- https://support.claude.com/en/articles/10684626-enable-and-use-web-search
- https://support.claude.com/en/articles/11088861-use-research-on-claude

## 2026-10-19 재확인
- Perplexity 요금제 비교 도움말(11187416): Free(Standard)는 Pro Search 하루 3번, Research 한 달 1번. 본문의 "매우 제한적" 표현을 이 수치로 교체. Pro 월 가격은 여전히 미표시(Education Pro $10만 표시), 한국 제공 여부도 미확인.
- Claude 웹 검색(10684626)·Research(11088861), Perplexity 나머지 3개 도움말, ChatGPT web-search.md(Work에서 + 메뉴 Deep research, 계정별 제공)는 본문과 일치. 변경 없음.
