# D1-02 프롬프트 캐싱·배치·effort로 API 비용 줄이기 — 조사 노트 (2026-10-11)

## 출처 (직접 읽음)
- https://platform.claude.com/docs/en/about-claude/pricing.md (WebFetch, 가격표)
- https://platform.claude.com/docs/en/build-with-claude/prompt-caching.md (WebFetch, 앞 10만자)
- https://platform.claude.com/docs/en/build-with-claude/batch-processing.md (WebFetch 저장본 grep)
- https://platform.claude.com/docs/en/build-with-claude/token-counting.md (WebFetch)
- https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence.md (WebFetch, 앞 10만자)
- claude-api 스킬 (shared/prompt-caching.md, shared/cost-optimization.md, python/claude-api/batches.md, shared/token-counting.md)
- C15 모델 분담, C16 가격표 (사이트 내부)

## 가격 (100만 토큰당 USD, 공식 pricing 페이지, 2026-10-11 확인)
| 모델 | 입력 | 5분 캐시 쓰기 | 1시간 캐시 쓰기 | 캐시 읽기 | 출력 |
| --- | --- | --- | --- | --- | --- |
| Fable 5.1 | 10 | 12.50 | 20 | 0.25 | 50 |
| Opus 5.5 | 4 | 5 | 8 | 0.20 | 20 |
| Sonnet 5.5 | 2 | 2.50 | 4 | 0.10 | 10 |
| Haiku 5.5 (프롬프트 10만 토큰 이하) | 0.10 | 0.125 | 0.20 | 0.01 | 0.50 |
| Haiku 5.5 (10만 토큰 초과) | 0.50 | 0.625 | 1 | 0.05 | 2.50 |
- Opus 5.5, Sonnet 5.5 캐시 읽기는 기본 입력의 0.05배, Fable 5.1 0.025배, 그 외 0.1배.
- 배치: 입력·출력 모두 50% 할인. Haiku 5.5 배치 $0.05/$0.25(10만 이하). 배치 할인은 캐시 등 다른 수정자와 곱해짐(stack).
- Haiku 5.5는 요청의 프롬프트(캐시 읽기·쓰기 포함)가 10만 토큰을 넘으면 더 비싼 가격이 그 요청에 적용.
- 도구 사용 시스템 프롬프트 286토큰(Opus/Sonnet/Haiku 5.5).

## 프롬프트 캐싱
- `cache_control: {"type": "ephemeral"}`; 기본 5분 TTL, `"ttl": "1h"`로 1시간. 쓰기 5분 1.25배, 1시간 2배. 히트하면 TTL 갱신(추가비용 없음). TTL은 요청 시작 시점부터 계산.
- 최상위 `cache_control`(자동 캐싱)은 마지막 캐시 가능 블록에 자동 배치. 명시 브레이크포인트는 요청당 최대 4개(자동 캐싱이 1개 사용). 한 브레이크포인트당 20블록 룩백.
- 렌더 순서 tools -> system -> messages. 접두사 한 바이트만 달라져도 이후 전부 무효. 타임스탬프·요청 ID는 브레이크포인트 뒤로.
- 최소 캐시 길이: Opus 5.5 / Sonnet 5.5 / Haiku 5.5 모두 512토큰(공식 caching 페이지). 이보다 짧으면 오류 없이 캐시 안 됨(`cache_creation_input_tokens: 0`).
- usage 필드: `input_tokens`(마지막 브레이크포인트 이후 비캐시), `cache_creation_input_tokens`, `cache_read_input_tokens`, `cache_creation.ephemeral_5m/1h_input_tokens`. 총 입력 = 셋의 합.
- 손익분기: 5분 TTL은 재사용 1번이면 이득(1.25x+0.05x < 2x). 1시간은 2x 쓰기.
- 무효화 원인: 시스템 프롬프트 수정, 도구 추가/순서 변경, 대화 중 effort·thinking 변경(top-level), 접두사에 타임스탬프. 캐시는 워크스페이스 단위로 분리.
- 비용 가이드(공식): 에이전트 루프에서 입력의 중앙값 84%가 캐시에서 읽힘, 80% 미만이면 깨는 요인을 찾으라. 캐싱이 에이전트 루프 비용을 2.7~5.3배 낮춘 사례.

## 배치 (Message Batches API)
- 배치당 최대 요청 100,000개 또는 256MB. 대부분 1시간 이내, 24시간 내 미완료 시 만료. 결과는 생성 후 29일간 조회. 결과 순서 무작위 -> `custom_id`로 매칭. 비용 50% 할인. 취소 가능. 처리 중에는 서버가 입력·출력 보관(삭제는 `DELETE`) -> ZDR 관련은 공식 "API and data retention" 문서 확인.
- 배치 안에서도 캐싱 가능하나 동시 처리라 best-effort(30~98% 히트율 언급).
- Managed Agents 세션에는 배치 없음. Fast mode는 배치 불가.
- 배치에서 도구 루프는 불가(요청 하나씩 단발).
- Python: `client.messages.batches.create(requests=[Request(custom_id=..., params=MessageCreateParamsNonStreaming(...))])`, `.retrieve(id).processing_status == "ended"`, `.results(id)`.

## effort
- `output_config: {"effort": "low"|"medium"|"high"|"xhigh"|"max"}`. 기본값은 Opus 5.5 / Haiku 5.5 `medium`, Sonnet 5.5 `high`(스킬). 대화 중간에 top-level effort를 바꾸면 메시지 캐시가 무효화됨(공식 비용 가이드: "각 effort는 별도 세션에서 테스트").
- 공식 비용 가이드 측정(내부·방향성 수치로 소개): 연구 벤치마크에서 `low`는 1~3점을 내주고 비용 1/3~1/2 절감, `medium`은 기본 정확도에 70~87% 비용. SWE-bench Pro 기준 high 대비 medium 약 -2.5점/비용 약 70%, low 약 -8점/비용 약 1/3, xhigh +1.4점/비용 2.5배. Opus 5.5 `medium`(92.8%)이 Fable 5.1 기본(92.3%)과 맞먹는 solved당 $0.22 vs $1.19. Haiku 5.5는 GPQA Diamond에서 Opus 5.5 비용의 약 1/20로 85%(Opus 5.5 91%).
- 권장 순서(공식): 캐싱·입력 정리 -> 프롬프트 점검 -> effort 스윕 -> 모델 비교(작업당 비용) -> 예산·출력 상한 -> 멀티모델은 마지막.
- `max_tokens`: 너무 낮으면 잘림. 에이전트 작업은 64,000 권장(공식). 단순 분류는 낮게.
- 작업 예산(task budget)은 베타(`task-budgets-2026-03-13`), 최소 20,000토큰. 본문은 이름만 언급.

## 토큰 세기
- `client.messages.count_tokens(model=..., system=..., messages=..., tools=...)` -> `input_tokens`. 무료, 분당 요청 제한(Start 5,000 / Build 10,000 / Scale 20,000 RPM, 메시지 생성과 별개). 추정치(약간 다를 수 있음). 모델별 토크나이저: Opus 4.7 이후는 이전 모델보다 같은 텍스트가 약 30% 더 많은 토큰.
- 서버 도구(웹 검색 등)·MCP 커넥터·URL/file 소스 document/image는 count 불가(오류). 캐시 로직 미사용(`cache_control`을 줘도 세기에서는 캐시 안 됨).

## 사용량 모니터링
- 응답 `usage`를 호출마다 로그. 조직 전체는 Usage and Cost Admin API(`/v1/organizations/usage_report/messages`, `/v1/organizations/cost_report`)이며 Admin API 키(`sk-ant-admin...`) 필요, 개인 계정은 불가(스킬 문구). Console의 Usage/Cost 페이지에서도 확인. Bedrock/Vertex/Foundry 트래픽은 해당 보고서에 안 나올 수 있음(스킬).
- (2026-10-12 갱신: 지출 한도 절차는 rate-limits 페이지에서 확인됨, 알림 절차는 미확인) 지출 한도·알림 등 Console 설정 화면 절차는 직접 확인하지 못함. (C16: 티어별 월 지출 상한 Start $500, Build $1,000, Scale $200,000.)

## 본문 예시 계산 (cost_calc.py 실행값)
가정: 요청 1,000건, 고정 접두사 20,000토큰, 새 입력 500토큰, 출력 300토큰, 캐시는 계속 살아 있고(5분 안 간격) 첫 요청만 쓰기.
- Opus 5.5: 기본 $88.00 / 캐시 $12.10 / 배치 $44.00 / 캐시+배치 $6.05
- Sonnet 5.5: $44.00 / $6.05 / $22.00 / $3.02
- Haiku 5.5: $2.20 / $0.40 / $1.10 / $0.20
- 배치+캐시는 캐시 best-effort라 이론상 최저치. 사고(thinking) 토큰은 출력으로 과금되므로 실제는 더 클 수 있음(계산에서 제외).

## 확인 못 함
- API 키가 없어 실제 호출·usage 값 미확인. 문법만 `py_compile`.
- 1시간 캐시 쓰기의 Haiku 배치 조합 가격, 캐시된 배치의 정확한 요금 합산 방식은 pricing 페이지 설명("multipliers stack")에 의존.
- 공식 비용 가이드의 뒷부분(10만자 이후, 측정 코드 샘플)은 읽지 못함.

## 2026-10-12 재확인
- 배치 `expired` 요청은 비용이 청구되지 않는다고 batch-processing 페이지가 명시함("You will not be billed for these requests") -> 본문 '확인하지 못했어요' 문구 교체.
- pricing(모델별 단가, 캐시 배수, Haiku 5.5 10만 토큰 구간, inference_geo 1.1x), 캐시 최소 512토큰, 브레이크포인트 4개·20블록, 배치 10만건/256MB/29일 모두 변동 없음.
- effort 페이지에 메시지별 effort 변경(베타, `mid-conversation-output-config-2026-07-01`, 캐시 유지; Fable 5.1·Mythos 5.1·Opus 5.5·Opus 5·Sonnet 5.5·Haiku 5.5, Bedrock은 일부) 설명이 있음 -> 02편 Aside에 한 문장 추가. 최상위 effort 변경은 여전히 캐시 무효화.
- rate-limits 페이지에 지출 한도 설정 절차 추가 확인: Settings > Billing > Spend limits > Adjust limit/Set limit, 한도 도달 시 HTTP 400 invalid_request_error. 알림(alerts) 절차는 여전히 미확인. 본문 Aside 갱신.

## 2026-10-19 재검증
- 가격표(Opus 5.5 $4/$20, Sonnet 5.5 $2/$10 · 캐시 읽기 $0.10(2026-10-07 인하 반영 확인), Haiku 5.5 계층 가격, Fable 5.1 $10/$50), 배치 50%, 지출 상한(Start $500/Build $1,000/Scale $200,000), count_tokens RPM(5,000/10,000/20,000), 최소 캐시 길이 512토큰 모두 본문과 일치. 변경 없음.
- 스크린샷 자리 officialUrl을 현재 정식 경로(manage-claude/usage-cost-api)로 교체(이전 경로는 리디렉션).

## 2026-10-26 재검증
- pricing, prompt-caching(최소 512토큰), batch-processing(100,000건/256MB, 29일, expired 비과금), rate-limits(Start $500/Build $1,000/Scale $200,000, Spend limits 절차), effort(기본값 Opus 5.5 medium, Sonnet 5.5 high) 재확인: 본문과 일치. Haiku 5.5 10만 토큰 기준 가격표도 일치. SWE-bench Pro 수치(medium -2.5점/70%, low -8점/약 1/3, xhigh +1.4/2.5배)도 현재 표(92.8/95.3/87.4/96.7, $0.21/$0.29/$0.11/$0.74)와 일치.
- 변경: optimizing-for-cost 페이지에 Opus 5.5 `low`가 DRACO에서 `medium`보다 13.3점 낮다는 측정이 있어, "연구형 벤치마크에서 low는 1~3점"이 Fable 5 측정임을 명시하고 모델별로 다르다는 불릿 추가.
- 릴리스 노트 2026-10-15: Opus 5.5 fast mode 연구 프리뷰 종료(본문에 fast mode 언급 없음, 변경 없음). 2026-10-21 SDK 메이저 업은 본문 예제(`pip install anthropic`)에 영향 없음.
