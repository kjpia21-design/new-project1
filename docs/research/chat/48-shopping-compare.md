# 48. 사기 전에 AI로 제품 비교하기 — 2026-11-02 기준 (Z2)

## 확인한 공식 페이지 (curl 기본 옵션, 한 페이지씩)
- Claude 웹 검색: https://support.claude.com/en/articles/10684626-enable-and-use-web-search (dateModified 2026-10-07)
  - 최신 정보를 위해 인터넷 검색, 모든 응답에 인용. 새 Claude 환경에는 토글이 없고 도움이 될 때 검색. 그 외 "+" > Web search, 체크 표시. Team·Enterprise는 소유자가 먼저 켬.
  - 웹 검색이 켜져 있으면 URL을 주면 페이지 내용을 가져옴(web fetch), 긴 글은 한도를 많이 씀. 이미지 결과는 Bing 기반, 각 이미지에 출처 링크.
- ChatGPT 웹 검색: https://learn.chatgpt.com/docs/web-search.md (llms.txt https://learn.chatgpt.com/llms.txt 에서 경로 확인; llms.txt에서 shopping 관련 항목은 찾지 못함)
  - 자체 웹 검색 도구, 웹 결과는 신뢰할 수 없는 입력으로 취급. 웹에서 검색 시 결과·인용이 대화에 표시, 워크스페이스 설정이 제한 가능. Deep research는 Work에서 계정·워크스페이스에 따라.
- Gemini 연결된 앱: https://support.google.com/gemini/answer/13695044
  - Google 검색 등 공개 정보 사용, 일부는 Keep Activity 필요. "shop for groceries for newly found recipes"는 작업 예시로만 언급, 지원 앱·국가는 문서에 없음.
- 참고: https://support.google.com/gemini/answer/16448384 에서 쇼핑·비교 관련 문구를 찾아봤으나 확인된 내용 없음(본문에 반영하지 않음).

## 확인하지 못한 것
- Claude·ChatGPT·Gemini의 전용 쇼핑/가격 비교/가격 추적/구매 기능(열어 본 공식 페이지에는 없음).
- 가격·재고·후기 요약의 최신성·정확도, 후기 위조 탐지 능력.
- ChatGPT·Gemini의 링크 읽기(URL fetch) 동작.
- 광고·제휴 링크 처리 방식(서비스별 정책 확인 안 함) — 일반 주의로만 서술.

## 본문 반영
- 프롬프트(기준·후보·비교표·후기·맞바꿈·최종 확인)는 "써 보는 방법"이며 공식 확인 사실이 아님. 실행 시험 없음. 가격·재고·후기는 판매처 재확인, 개인정보(카드·주소·주문) 금지.
- 연결: chat/22, chat/45, basics/03·04·05·10.
