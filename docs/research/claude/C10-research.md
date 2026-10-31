# 웹 검색과 리서치(Research)

## 핵심 사실
- 웹 검색: 응답은 실시간 웹 콘텐츠에 근거하며 "모든 응답에 인용(citation)이 포함"된다. URL을 주면 전체 페이지를 가져올 수 있고 검색 결과 이미지를 출처 링크와 함께 보여줄 수 있다. (출처: https://support.claude.com/en/articles/10684626-enable-and-use-web-search)
- 지원 모델: Haiku 5.5, Sonnet 5.5, Opus 5.5, Fable 5.1, Opus 5, Sonnet 5, Fable 5, Opus 4.8, Opus 4.7, Sonnet 4.6, Opus 4.6, Haiku 4.5. (출처: 동일)
- 켜기: 채팅의 "+" -> "Web search" 체크. 단, 새 통합 Claude 경험에서는 토글이 없고 도움이 될 때 자동으로 검색한다. (출처: 동일)
- 사용량: 웹 검색과 가져오기 모두 한도에 합산되며, 긴 글 가져오기는 컨텍스트를 많이 쓴다. 필요 없는 대화에서는 끄라고 안내. Free 계정 한도는 5시간마다 리셋. (출처: 동일)
- 관리자: Team/Enterprise는 Owner가 Organization settings > Capabilities에서 먼저 켜야 한다. 이미지 검색은 Bing 기반, 대략적 위치를 IP로 추정할 수 있다. (출처: 동일)
- Research: Claude가 앞선 결과를 바탕으로 여러 번 검색하며 다음에 조사할 것을 스스로 정해 단계적으로 진행. 유료 플랜(Pro/Max/Team/Enterprise)의 웹·데스크톱·모바일에서 사용. 웹 검색이 켜져 있어야 작동. "+" -> Research(파란 표시), 다시 누르면 끔. (출처: https://support.claude.com/en/articles/11088861-use-research-on-claude)
- Research는 연결된 내부 컨텍스트(Gmail, Google Calendar, Google Docs)와 웹을 함께 활용하고 인용을 포함한 답을 "몇 분" 안에 준다. 일반 대화와 같은 한도를 쓰지만 여러 소스를 가져오므로 한도를 더 빨리 소모할 수 있다. (출처: 동일)
- 통합 Claude 경험에서는 Research를 `/deep-research`나 "+" 버튼으로 시작. (출처: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude)
- 언제 무엇을 쓰나(지원센터 검색 요약): 웹 검색은 한두 번의 도구 호출로 답할 사실형 질문, Research는 5회 이상 도구 호출과 1~3분이 걸리는 포괄적 조사. (출처: https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research — 본문 미열람, 검색 요약)
- 초과 사용 시 usage credits가 Research에도 적용된다(Research 세션은 토큰을 빠르게 소모). (출처: https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans)
- 고급 리서치는 커넥터 도구를 추가 승인 없이 호출하고 로컬 MCP 서버는 쓸 수 없다. 쓰기 가능한 도구는 미리 끄라는 권고. (출처: https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)

## 따라하기에 쓸 수 있는 절차
1. 입력창 "+" -> Research 켜기(또는 `/deep-research`). (출처: 11088861, 16761823 문서)
2. 구체적 질문 입력: 예) "2026년 국내 전기차 보조금 변화를 정부 발표와 언론 보도 기준으로 정리해줘." (예시는 필자 작성)
3. 인용 링크를 눌러 출처를 직접 확인. (출처: 10684626 문서)
4. Google 연동을 쓰고 싶으면 "내 Drive/Gmail에서도 관련 자료를 찾아줘"라고 지시. (출처: 11088861 문서의 문제 해결 안내)

## 확인 못 함 / 주의
- Research의 정확한 소요 시간/횟수 상한, 플랜별 별도 한도는 확인 못 함.
- 11095361 문서는 본문을 열람하지 못함.

## 출처 목록
- [Enable and use web search](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) — 확인일 2026-10-10
- [Use research on Claude](https://support.claude.com/en/articles/11088861-use-research-on-claude) — 확인일 2026-10-10
- [Claude Cowork and chat are one Claude](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude) — 확인일 2026-10-10
- [Extra usage for paid plans](https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans) — 확인일 2026-10-10


## 6단계 재점검 (2026-10-10)
- Research 도움말(11095361)에 시간/횟수 상한 기재 없음(1~3분, 도구 호출 5회 이상이 전형적 범위라고만 설명).

## 2026-10-19 점검 반영
- Research 도움말: Opus 5.5로 실행되고 필요하면 Opus 4.8로 폴백(대화 모델과 무관), 모바일은 웹만 검색하고 커넥터는 건너뜀, Team/Enterprise에서 관리자가 두 모델을 모두 끄면 동작하지 않음. 본문에 앞 두 가지 반영. 웹 검색 도움말: 새 경험에는 웹 검색 토글이 없음(기존 서술과 일치).

## 2026-10-26 점검 반영
- Research 도움말(11088861)·웹 검색(10684626)·선택 가이드(11095361) 재확인: Research는 "5회 이상 도구 호출과 몇 분"(이전 본문의 "1~3분"은 현재 문구에 없어 "몇 분"으로 수정). 모바일 앱의 Research는 웹만 검색하고 커넥터를 경고 없이 건너뜀(신규 반영). Opus 5.5 실행·Opus 4.8 대체, 웹 검색 토글/Org settings > Capabilities 변동 없음.
