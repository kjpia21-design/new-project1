# 45. AI로 여행 계획 세우기 — 2026-11-02 기준 (V3)

## 확인한 공식 페이지 (curl 기본 옵션, 한 페이지씩)
- Claude 웹 검색: https://support.claude.com/en/articles/10684626-enable-and-use-web-search
  - 지원 모델 목록, 최신 정보를 위해 인터넷 검색, 모든 응답에 출처 인용. Team·Enterprise는 소유자가 조직 설정 > Capabilities에서 먼저 켜야 함. 대화창 "+" > Web search 토글(체크 표시). 새 Claude 환경에는 토글이 없고 도움이 될 때 검색.
  - 프롬프트에 "Search the web"을 넣어 검색을 확실히 하거나 쓰지 말라고 지시 가능. 출처 교차 확인, 중요한 결정엔 신뢰할 만한 출처 사용 권고.
  - 한계: 연결 상태에 따라 검색 불가, 링크가 안 열릴 수 있음, 현지 맞춤 결과 요청 시 IP로 추정한 위치 사용 가능, 웹 검색·fetch는 사용량 한도에 포함. 이미지 결과는 Bing 기반.
- Gemini 연결된 앱: https://support.google.com/gemini/answer/13695044
  - 웹에서 Customize > Connectors에서 앱 연결/해제. 앱 목록은 앱·기기·국가별로 다름. Keep Activity가 꺼지면 gemini.google.com·iOS에서 연결된 앱 불가.
  - Google 검색·항공편·호텔·지도·YouTube의 공개 정보를 자동 사용(개인 정보는 허락 없이 접근 안 함). 지도·항공편·호텔·YouTube는 Keep Activity 켜짐 필요, Google 검색은 항상.
  - 예시 활동에 "book reservations for discovered experiences" 언급(앱·국가별 지원은 문서에 없음).
- ChatGPT 웹 검색: https://learn.chatgpt.com/docs/web-search.md (llms.txt에서 경로 확인; /docs/features/search 등은 404)
  - 자체 웹 검색 도구, 모든 웹 결과를 신뢰할 수 없는 입력으로 취급하라고 안내. 웹에서 최신 정보·출처 요청 시 검색 결과와 인용이 대화에 표시. 워크스페이스 설정이 제한 가능. Deep research는 Work에서 계정·워크스페이스에 따라 제공.

## 확인하지 못한 것
- 어느 서비스든 운영 시간·가격·예약 가능 여부·교통 시간표의 최신성·정확도.
- 예약·결제 대행 기능의 실제 동작과 지원 국가(시험하지 않음).
- 비자·입국 규정(어느 나라도 확인하지 않음 → 정부 공식 사이트 확인 안내).
- Gemini·ChatGPT의 위치 사용 방식, 사용량 한도, ChatGPT의 지도·여행 전용 기능.
- Claude의 지도·항공 연동(웹 검색 문서에 언급 없음).

## 본문 반영
- 일정표·예산·준비물 프롬프트는 "써 보는 방법"이며 공식 확인 사실이 아님. 모든 실시간 정보는 [확인 필요] 표시 후 공식 사이트 재확인. 실행 시험은 하지 않음(프롬프트 예시만).
- 연결: chat/22, chat/01, basics/03·04·05·07·10, claude/c02.
