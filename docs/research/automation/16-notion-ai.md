# Notion AI (2026-10-10 조사)

조사 방식 주의: 이 환경에서는 WebFetch가 외부 사이트에 접속하지 못했다. 아래 내용은 WebSearch가 반환한 공식 도메인(notion.com) 검색 결과 요약에 기반한다. 화면 문구는 직접 확인하지 못했으므로 본문에서 "화면 안내에 따르세요"로 처리한다.

## 핵심 사실
- Notion AI는 Notion 워크스페이스에 내장된 AI 기능 묶음이다. 주요 기능: Notion Agent, Enterprise Search, Research Mode, AI Meeting Notes, AI 블록, Autofill. (출처: https://www.notion.com/help/notion-ai-faqs , https://www.notion.com/product/ai)
- Notion AI는 Business와 Enterprise 플랜에 포함되고(Notion Agent, AI Meeting Notes, Enterprise Search 등), 다른 플랜은 체험용으로 제한된 사용량만 받는다. (출처: https://www.notion.com/pricing 검색 요약)
- Business/Enterprise 플랜에는 Notion Agent 등 일부 AI 기능의 사용 허용량이 포함된다. (출처: https://www.notion.com/help/notion-agent 검색 요약)
- Q&A: 하단 오른쪽 반짝이(sparkle) 아이콘에서 열고 질문을 입력한다. 내가 접근 권한이 있는 페이지의 내용만 근거로 답한다. 페이지 요약, 핵심 정리 가능. 워크스페이스 밖 지식은 없다는 설명은 출시 블로그 기준이라 오래됐다. (출처: https://www.notion.com/help/guides/get-answers-about-content-faster-with-q-and-a , https://www.notion.com/blog/introducing-q-and-a)
- Notion Agent: Notion 화면 하단의 캐릭터 아이콘에서 대화한다. 앱 연결은 에이전트에게 요청하거나, All sources > MCP servers > Add MCP server, 또는 Settings > Connections > Discover. (출처: https://www.notion.com/help/notion-agent 검색 요약)
- Autofill(데이터베이스 속성): 행마다 AI가 채운다. 기본(Basic) Autofill은 요약·태그·번역 같은 단순 작업용이며 웹을 검색하지 않는다. Custom Agent Autofill은 웹/워크스페이스 검색과 다단계 지시를 처리하며 작업량에 따라 Notion 크레딧을 쓴다. Basic Autofill은 Business와 Enterprise에 포함. (출처: https://www.notion.com/help/autofill)
- Custom Agents와 크레딧: 크레딧은 Business/Enterprise의 추가 구매 항목이며 워크스페이스 전체가 공유한다. 검색 결과 기준 1,000크레딧당 월 $10(월 결제), 연 결제 $13이라는 표기가 있으나 페이지가 오래돼 최신이 아닐 수 있다. 2026-05-04부터 Custom Agent 실행에 크레딧이 적용된다고 안내됨. (출처: https://www.notion.com/help/what-are-notion-credits , https://www.notion.com/help/custom-agent-pricing)
- 개인정보: 기본적으로 Notion과 AI 하위 처리자는 고객 데이터로 모델을 학습하지 않는다. Enterprise는 LLM 제공자 데이터 보존 없음(zero retention), 비Enterprise는 최대 30일 보존 후 삭제. 선택형 AI LEAP 프로그램(데이터를 공유하는 대신 신기능 우선 접근)이 별도로 있다. (출처: https://www.notion.com/help/notion-ai-security-practices)
- 언어: Notion AI 전체 지원 언어 목록은 확인 못 함. AI Meeting Notes 지원 언어 목록에는 한국어가 포함됨. (출처: 검색 요약, notion.com/help)
- 가격(검색 요약 기준, 오래됨 가능): Plus 좌석당 $10, Business $20. (출처: https://www.notion.com/pricing)

## 따라하기 절차 (일반 흐름, 화면 문구 미확인)
1. 업무 페이지(회의록 등)를 만든다.
2. 하단 AI 아이콘으로 Agent/Q&A를 열어 페이지 요약·액션 아이템 추출을 요청한다. (출처: Q&A 도움말)
3. 데이터베이스에 AI Autofill 속성을 추가해 행마다 요약/태그를 채운다. (출처: autofill 도움말)
4. 필요하면 Settings > Connections에서 앱을 연결한다. (출처: notion-agent 검색 요약)

## 확인 못 함
- 각 메뉴의 정확한 한국어/영어 버튼 이름, Free 플랜 체험 한도 수치, 현재 최신 가격, 한국어 품질.
- Notion AI의 정확한 최신 기능 이름(Agent와 구 "AI 블록" 관계).

## 출처 목록
- https://www.notion.com/help/notion-ai-faqs
- https://www.notion.com/product/ai
- https://www.notion.com/help/autofill
- https://www.notion.com/help/guides/get-answers-about-content-faster-with-q-and-a
- https://www.notion.com/help/notion-agent
- https://www.notion.com/help/what-are-notion-credits
- https://www.notion.com/help/notion-ai-security-practices
- https://www.notion.com/pricing
