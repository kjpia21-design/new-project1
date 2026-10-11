# D1-01 도구 사용(Tool use)으로 업무 봇 만들기 — 조사 노트 (2026-10-11)

## 출처 (직접 읽음)
- claude-api 스킬 (shared/tool-use-concepts.md, python/claude-api/tool-use.md), 2026-10-11 세션 로드본
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview.md (WebFetch)
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-runner.md (WebFetch)
- C16 "모델별 요청 제한" 표 (사이트 내부)

## 확인한 사실
- 클라이언트 도구는 내 코드가 실행. 응답이 `stop_reason: "tool_use"` + `tool_use` 블록 -> 코드 실행 -> `tool_result` 블록을 user 메시지로 반환 -> 반복. 서버 도구(web_search 등)는 Anthropic이 실행. (overview)
- 도구 정의: `name`, `description`, `input_schema`(JSON Schema). 설명은 "언제 호출하는지"를 적을수록 좋다. (스킬 tool-use-concepts)
- `strict: true`는 도구 정의 최상위 필드. 스키마에 `additionalProperties: false`와 `required` 필요. 입력이 스키마와 정확히 일치하도록 보장. (스킬 + overview Tip)
- 한 응답에 `tool_use`가 여러 개일 수 있음(병렬). 모든 `tool_result`를 **하나의 user 메시지**에 담아 반환. 실패한 도구는 `is_error: true`로 반환, 빠뜨리지 않는다. (스킬)
- `tool_choice`: `auto`(기본), `any`, `tool`, `none`. **Opus 5.5, Sonnet 5.5, Fable 5.1, Mythos 5.1은 `any`/`tool`이 400**. `auto` + 프롬프트 지시 + `strict: true` 사용. C16 표와 일치. `disable_parallel_tool_use`는 `auto`와 함께 사용 가능.
- 도구 사용 시스템 프롬프트 토큰: Opus 5.5 / Sonnet 5.5 / Haiku 5.5 모두 286토큰(auto, none). 도구 정의·tool_use·tool_result 블록도 입력 토큰으로 과금. (overview Pricing)
- Opus 5.5는 thinking을 끌 수 없고 effort 기본값이 `medium`. 예제는 `thinking`을 생략하고 `output_config={"effort": "low"}`를 명시. (스킬)
- Tool Runner: 베타. Python `@beta_tool` + `client.beta.messages.tool_runner(...)`, `runner.until_done()`로 최종 메시지. `max_iterations`로 반복 상한(7개 SDK 모두). 도구가 예외를 던지면 러너가 `is_error: true` 결과로 Claude에게 반환(Python은 예외 타입+메시지). (tool-runner 문서)
- 러너는 사람 승인(human-in-the-loop)이 필요하면 도구 함수 안에서 게이트하거나 `generate_tool_call_response()` / `set_messages_params()`로 개입. 수동 루프만의 기능이 아님. (스킬; 공식 문서는 승인이 필요하면 수동 루프를 권하는 문구도 있음)
- 보안: 도구 부작용(메일 발송, DB 수정, 결제)은 입력 검증 + 사람 승인. (스킬 Security 문단)
- stop_reason 처리: `end_turn` 종료, `max_tokens` 잘림, `refusal`(Opus 5.5 등은 안전 분류기), `pause_turn`(서버 도구). 도구 입력 JSON은 항상 파싱해서 사용(문자열 매칭 금지).

## 확인 못 함 / 주의
- 실제 API 키 호출은 하지 않음. Python 문법만 `py_compile`로 확인(`tools_data.py`, `tool_bot.py`, `tool_runner_bot.py`). 도구 함수는 로컬에서 직접 호출해 동작 확인.
- 러너의 `tool_runner(..., output_config=...)` 전달은 공식 예제에서 직접 보지 못함(스킬에서는 `messages.create`의 GA 파라미터로 설명). 본문에 "문서에서 확인하지 못한 조합"으로 표기.
- 공식 문서의 `tool_runner` 페이지가 승인 게이트에 수동 루프를 권하는지/러너 훅을 권하는지 문구가 자료마다 다름 -> 본문은 "도구 함수 안에서 게이트"로 중립적으로 서술.
- `fallbacks` 파라미터(스킬은 Opus 5.5 코드에 기본 포함 권장)는 베타 헤더가 필요한 별도 기능이라 본문 예제에서는 생략하고 한 줄로 언급.
