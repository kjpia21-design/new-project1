# 조사 노트 — dev 13: 구조화 출력 (Structured outputs)

조사일: 2026-11-01 / 조사: Q2. 공식 페이지를 한 번에 하나씩 curl(`.md` 주소)로 읽음. 실제 API 호출은 하지 않음(`anthropic` 패키지·API 키 없음).

## 확인한 사실과 출처
### https://platform.claude.com/docs/en/build-with-claude/structured-outputs
- 기능 2개: JSON outputs(`output_config.format`, type `json_schema`) / strict tool use(`strict: true`). 따로 또는 같은 요청에서 함께.
- 제약된 디코딩. 응답 텍스트 블록에 유효한 JSON. Python: Pydantic 모델을 `client.messages.parse(output_format=...)`에 넘기고 `parsed_output`. TS: `zodOutputFormat()`. 원본 스키마: `output_config={"format": {"type": "json_schema", "schema": ...}}` 후 `json.loads`. `transform_schema()` 도우미 언급.
- SDK 변환: 미지원 제약(minimum, maxLength 등) 제거 후 설명에 추가, `additionalProperties:false` 추가, 응답은 원래 스키마로 검증.
- 지원: 기본 타입, enum(문자열·숫자·불리언·null), const, anyOf/allOf(allOf+$ref 불가), 내부 $ref/$def/definitions, default, required, additionalProperties=false 필수, 문자열 format 10종, minItems 0·1. 미지원: 재귀, enum 복합 타입, 외부 $ref, 숫자·문자열 제약, minItems 0·1 외 배열 제약. 정규식 지원/미지원 목록 있음. 미지원 사용 시 400.
- 속성 순서: 필수가 먼저, 선택이 뒤.
- 예외: refusal(200, 과금, 스키마 불일치 가능, reasoning_extraction 거부 가능), max_tokens, enum/const 대소문자 비보장.
- 한도(strict/format 요청 전체): strict 도구 20, 선택 매개변수 24, 유니온 타입 매개변수 16, 컴파일 제한 180초, 내부 한도 초과 시 400 "Schema is too complex for compilation". 줄이는 순서 4단계.
- 첫 요청 지연, 문법 24시간 캐시(구조 변경 시 무효, name/description만 바꾸면 유지). 추가 시스템 프롬프트로 입력 토큰 증가, `output_config.format` 변경은 프롬프트 캐시 무효화.
- 호환: 배치(50% 할인), 토큰 세기, 스트리밍, strict tool use와 병용. 비호환: citations(400), 메시지 프리필. 문법은 직접 출력에만 적용(도구 호출·결과·thinking 제외).
- 베타 이전 `output_format`은 `output_config.format`으로 이동, 베타 헤더 불필요.
- 가용성: 모든 모델, Messages API, 여러 플랫폼; Managed Agents 불가; ZDR 가능(Covered Models 제외, 스키마만 24시간 캐시); HIPAA 가능(스키마에 PHI 금지).
- 문서 예시 모델 `claude-opus-5-5`; supportedModels에 `claude-sonnet-5-5` 포함(본문 코드에 사용).
### https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use
- `strict: true`는 도구 정의 최상위 속성. input이 input_schema를 따르고 name은 항상 유효. `passengers: 2` 예. computer/browser toolset(`*_toolset_20260801`)은 strict 불가(거부).

## 직접 해 본 것
- 본문 Python 예제의 문법(py_compile) 통과, Pydantic `Ticket` 모델로 샘플 dict 검증(`anthropic`은 스텁으로 대체).

## 확인하지 못한 것
- 실제 API 호출 결과(API 키·패키지 없음). Claude가 낸 실제 값은 모름. `parse()`의 `stop_reason` 접근은 일반 Message 필드로 가정(문서 예제에는 없음).
- JSON 출력과 strict tool use를 한 요청에서 함께 쓰는 실제 요청(문서 설명만 확인).
- 선택(없을 수 있는) 필드의 권장 패턴은 문서에서 찾지 못함.
- Structured outputs 외 Citations 페이지의 "Get structured data with citations" 절은 열어 보지 않음(링크만 언급).
