# dev/11 사용량·비용 분석 API 조사 노트 (2026-10-31)

curl로 한 페이지씩 열었다 (platform.claude.com/docs/en/... 의 `.md` 버전).

## 열어 본 공식 URL
- https://platform.claude.com/docs/en/manage-claude/usage-cost-analytics-api (Usage and Cost Analytics API, 베타)
- https://platform.claude.com/docs/en/manage-claude/usage-cost-api (레거시 Usage and Cost API)
- https://platform.claude.com/docs/en/manage-claude/admin-api-keys (Admin API 키 만들기)
- https://platform.claude.com/docs/en/release-notes/overview (2026-10-29 항목)

## 확인한 사실
- 릴리스 노트 2026-10-29: 분석 API 베타 출시(`anthropic-beta: analytics-usage-cost-2026-08-24`), `/v1/organizations/analytics/usage`, `/analytics/cost`. Console과 Enterprise 모두. 기존 Usage and Cost API(`usage_report/messages`, `cost_report`)와 Enterprise Analytics API의 4개 보고서 엔드포인트는 레거시, 계속 지원.
- 헤더: 요청마다 `anthropic-beta`와 `anthropic-version`. SDK와 `ant` CLI가 자동 전송, 나머지 페이지 자동 조회(`limit`은 페이지 크기).
- 인증: Console은 Admin API 키(`sk-ant-admin01-...`) 또는 `org:admin` OAuth 토큰(Bearer). 워크스페이스 키는 안 됨(레거시 페이지). Enterprise는 `read:analytics` 범위 키, primary owner가 claude.ai에서 생성, Analytics API 활성화 선행. 개인 계정은 Admin API 불가.
- Admin 키 생성(admin-api-keys): admin 역할, Console의 Admin keys 페이지(platform.claude.com/settings/admin-keys), Create admin key > 이름·만료 > Add, Console 키는 범위 선택 없음(전체 접근), 비밀값은 한 번만 표시. 수집 서비스 전용 키, 비밀 관리자 보관, 주기적 교체, 만료 설정 권고. WIF `org:admin` 범위 규칙 대안 언급(본문은 이름만).
- 응답: `data[]` 행(`starting_at`, `ending_at`, `group`, `usage` 또는 `cost`), `has_more`, `next_page`, `data_refreshed_at`. 집계 안 한 차원은 null. `group_by[]` 최대 5개. `cost_type`, `token_type`은 비용 전용, 5개 제한 및 limit 비적용.
- usage 필드: uncached_input_tokens, cache_creation(ephemeral_1h/5m_input_tokens), cache_read_input_tokens, output_tokens, total_tokens, server_tool_use.web_search_requests, requests.
- cost: amount(할인 후·크레딧 적용 전), list_amount, currency(USD), requests. 센트 단위 문자열 6자리 ("41280.000000" = $412.80).
- 기간: 2026-01-01 이후, 최근 365일, 요청당 최대 31일, `time_bucket_width` 사용 시 `ending_at` 필수, `1m`은 24시간. 양 끝 UTC 버킷 경계로 내림.
- 신선도: 보통 4시간, 최대 24시간, 월 종료 후 약 7일까지 수정 가능. 데이터 없으면 `data_refreshed_at: null`.
- actor: 사용자·서비스 계정·클라우드 신원·API 키. 귀속 불가는 null. 레거시 대비 `account_ids[]`→`actor_ids[]` 등 마이그레이션 표.
- Priority Tier: 사용량에는 `service_tier: "priority"`로 보이나 토큰 비용 0(약정 요금은 별도 청구, 데이터에 없음), 웹 검색은 표준 요금.
- 레거시 FAQ: 업데이트 5분, 폴링 분당 1회 권장, 플레이그라운드 api_key_id null, Managed Agents 일부 세션 `svac_...`, 파트너 연동 7곳(CloudZero, Datadog, Grafana Cloud, Harness, Honeycomb, Tempo, Vantage).
- Claude Code 사용자별 비용: 비용 엔드포인트 `products[]=claude_code&group_by[]=actor`, 또는 Claude Code Analytics API(Console).
- Claude Platform on AWS(두 엔드포인트 가능, 요청 방식 다름), Claude Models on Google Cloud(Anthropic managed)(분석 API 둘 다 가능, IAM 권한 다름; 레거시는 사용량만). 본문은 이름과 "인증 방식이 다르다"만.

## 확인하지 못한 것
- 분석 API의 rate limit 수치(analytics-api 페이지는 열지 않음). 본문에 "확인하지 못했다" 표기.
- 인증 실패·기간 오류의 HTTP 상태 코드와 오류 메시지.
- 실제 Admin 키 호출 결과 (키 없음). 응답 객체의 SDK 속성(`row.group.actor.user_id` 등)은 문서 예시·마이그레이션 표를 따름.
- Bedrock/Vertex 트래픽이 보고서에 나오는지는 dev/02에 "나오지 않을 수 있음"으로 적혀 있음. 이번에는 클라우드 플랫폼별 노트(AWS/GCP)로 대체되었고 별도 확인 안 함.

## 코드 검증
- `python3 -m py_compile` 통과. anthropic SDK 미설치 환경이라 가짜 `SimpleNamespace` 응답과 stub 모듈로 `write_report` 경로(CSV, HTML)만 실행해 확인. 실제 API 호출 없음.

## 다른 편과의 관계 (내 범위 밖, 보고용)
- dev/02는 조직 사용량을 "`usage_report/messages`와 `cost_report`" 레거시 엔드포인트로 안내함. 현재도 유효하지만 분석 API(dev/11)가 권장이므로 02에 dev/11 링크와 레거시 표기를 추가하면 좋음.
