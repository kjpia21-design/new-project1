# 조사 노트 — dev 12: 웹 검색·웹 가져오기 도구

조사일: 2026-10-31 / 조사: N2. 공식 페이지를 한 번에 하나씩 curl(Accept: text/markdown)로 읽음. 실제 API 호출은 하지 않음(코드 미실행).

## 확인한 사실과 출처
### https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool
- 버전: web_search_20250305(기본), _20260209(동적 필터링), _20260318(response_inclusion). 동적 필터링은 Claude 4.6+ 및 Mythos Preview. 20260209+는 allowed_callers 기본 ["code_execution_20260120"], 코드 실행은 API가 자동 준비, 추가 요금 없음. 직접 호출 모델은 ["direct"] 필요(아니면 400).
- 관리자가 Console에서 끄면 400 invalid_request_error. 모델별 지원: Models API capabilities.server_tools.web_search.supported.
- max_uses 초과 시 max_uses_exceeded 오류. allowed/blocked_domains 동시 사용 시 400. user_location(approximate; city/region/country/timezone).
- 응답: server_tool_use, web_search_tool_result(url,title,page_age,encrypted_content), 인용(url,title,encrypted_index,cited_text 최대 150자). encrypted_content 누락·변경 시 400. 인용 항상 켜짐, 인용 필드는 토큰에 미포함. 최종 사용자 표시 시 출처 인용 필요.
- 오류는 200 응답 안: too_many_requests, invalid_tool_input, max_uses_exceeded, query_too_long, request_too_large, unavailable. 결과 없음은 빈 content. pause_turn.
- 가격: 1,000회당 $10 + 토큰. 오류 시 미과금. Batch 가능(같은 가격, 조직별 제한). ZDR 가능(Covered Models·동적 필터링 제외), HIPAA 가능(동적 필터링 제외).
### https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool
- 버전: web_fetch_20250910, 20260209(동적 필터링), 20260309(use_cache), 20260318(response_inclusion). JS로 렌더링되는 사이트 미지원. PDF는 base64.
- 경고: 신뢰 안 되는 입력+민감 데이터 환경은 유출 위험. URL은 대화에 이미 나온 것만(사용자 메시지·클라이언트 도구 결과·이전 검색/가져오기 결과). 자격 증명처럼 보이는 URL 거부. url_sources 파라미터.
- 파라미터: max_uses(기본 한도 없음, 실패도 계산), allowed/blocked_domains, citations.enabled(기본 꺼짐), max_content_tokens(텍스트만, 근사).
- 오류 코드: invalid_tool_input, url_too_long(250자), url_not_allowed, url_not_in_prior_context, url_not_accessible, too_many_requests, unsupported_content_type, content_too_large, max_uses_exceeded, unavailable.
- 가격: 추가 요금 없음(토큰만). 대략 토큰: 10kB 페이지 ~2,500, 100kB ~25,000, 500kB PDF ~125,000. ZDR 가능(동적 필터링 제외), HIPAA 불가.
### https://platform.claude.com/docs/en/agents-and-tools/tool-use/server-tools (Domain filtering 절)
- 스킴 없이, 하위 도메인 자동 포함, 경로는 웹 검색만(웹 가져오기는 도메인만), 와일드카드는 경로에서만, 둘 동시 사용 불가, 유니코드 동형 문자 우회 경고, 요청 단위 allowed는 조직 목록의 부분집합이어야 함.
### https://platform.claude.com/docs/en/release-notes/overview
- 2026-10-20: 조직 관리자가 Capabilities 페이지에서 web fetch 끄기/허용·차단 도메인 설정. Managed Agents의 web_fetch가 조직 제한을 따름(리다이렉트 포함 둘 다 통과). Managed Agents 웹 검색은 Allow web search(10/6~)와 도메인 제한(10/14~)을 따름.
- 2026-10-21 이후 새 SDK(Python 2.0.0 등)가 API 버전 2026-10-21을 기본 전송 — 본문 코드는 SDK 버전에 의존하는 부분 없이 단순 형태로 작성했으나 실행은 안 함.

## 확인하지 못한 것
- 코드 실제 실행 결과(API 키 없음). 속성 접근(`block.citations`, `usage.server_tool_use.web_search_requests`)은 응답 JSON 예시에서 유추.
- Console의 Capabilities 페이지 정확한 메뉴 경로(문서는 "Capabilities page"만 언급).
- web_fetch_20260318을 모든 모델이 지원하는지(동적 필터링은 Claude 4.6+ 명시).
