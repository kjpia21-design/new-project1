# 조사 노트 — dev 10: 컴퓨터·브라우저 도구 API

조사일: 2026-10-11 / 조사: D5
근거: `claude-api` 스킬(shared/tool-use-concepts.md, model-migration.md), platform.claude.com 공식 문서 WebFetch.

## 확인한 사실과 출처

### 컴퓨터 툴셋 (https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool)
- `computer_toolset_20260801`: Claude API·Google Cloud에서 GA(베타 헤더 없음). Claude Platform on AWS·Bedrock·Foundry는 베타. Claude Managed Agents에서는 현재 사용 불가.
- `tools=[{"type": "computer_toolset_20260801"}]`. `name`, `display_width_px`, `display_height_px`, `display_number`, `enable_zoom`은 거부. 파라미터: `type`, `configs`(멤버별 `enabled` 기본 true — zoom 포함, `defer_loading`), `cache_control`, `allowed_callers`(`["direct"]`만). `computer_20251124` 또는 이름이 `computer`인 도구와 같은 요청에 못 둠.
- 멤버 17개: screenshot, zoom, left_click, right_click, middle_click, double_click, triple_click, left_click_drag, mouse_move, left_mouse_down, left_mouse_up, cursor_position, scroll, type, key(repeat 1~100), hold_key(최대 300초), wait(최대 300초).
- Claude의 호출은 `tool_use` 블록: `name`이 멤버, `toolset_name: "computer"`, `input`에는 멤버 파라미터만(action 필드 없음). 한 턴에 여러 개(배치) 가능. 순서대로 실행, 첫 실패에서 중단, 이후 블록에는 `is_error: true`와 정확한 문구 `Not executed: an earlier computer action in this turn failed.` 반환. 모든 `tool_result`는 `"toolset_name": "computer"`를 되돌려야 함. 응답 안 `tool_use`에 결과가 없으면 `invalid_request_error`. screenshot·zoom만 이미지, 나머지는 `OK`면 충분.
- 공식 루프 예(`sampling_loop`)는 `max_iterations=10`으로 "폭주하는 API 비용"을 막는다고 설명.
- 호환: Claude 5.5 이상(Opus 5.5, Sonnet 5.5, Haiku 5.5)은 Claude API·Google Cloud에서 툴셋만 가능. Bedrock은 `computer_20251124`도 허용. Opus 4.x 등은 `computer_20251124`+베타 헤더.
- 스크린샷: 모델 이미지 한도에 맞춰 직접 리사이즈해야 하고 API가 줄여 주지 않음(초과 시 검증 오류). 새 모델은 긴 변 2576px·4784 시각 토큰, 이전 모델은 1568px·약 1.15MP. 스케일 값을 기억해 좌표를 되돌려야 함. 스크린샷 1장 약 1,000~1,800 입력 토큰. 20장 넘으면 더 엄격한 변 한도. 캐시를 위해 옛 스크린샷은 일괄 정리, 새 모델은 서버 측 tool result clearing 권장.
- 요금: 일반 도구 사용 요금. 툴셋 정의 오버헤드 약 4,500 입력 토큰(기본 멤버 전부; zoom을 끄면 약 410 감소). 스크린샷 이미지와 도구 결과도 입력 토큰.
- 보안 권고: 전용 VM/컨테이너+최소 권한, 민감 데이터 접근 금지, 도메인 허용 목록, 결과가 큰 행동(결제·약관 동의 등)은 사람 확인, 프롬프트 인젝션(웹페이지·이미지 속 지시) 주의 — Anthropic 분류기가 스크린샷을 검사하고 사용자 지시인지 확인하도록 유도. 최종 사용자에게 위험 고지·동의. 배치 하나가 다단계 행동을 끝낼 수 있으니 블록마다 확인.
- 한계: 지연이 사람 속도보다 느림, 좌표 환각, 도구 선택 실수, 스크롤·스프레드시트 불안정, 탈옥·프롬프트 인젝션 가능, 불법·AUP 위반 금지. 사고 텍스트는 기본 생략 -> `display: "summarized"`로 요약 확인.
- 데이터 보존: 스크린샷·입력은 내 환경에 저장, Anthropic은 호출 중 실시간 처리. ZDR 가능(Covered Models 제외).

### 브라우저 툴셋 (https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool)
- `browser_toolset_20260801`: GA, Claude API·Google Cloud, Managed Agents에서는 불가, ZDR 가능(Covered Models 제외). 클라이언트 도구: 브라우저는 내 앱이 실행. 접근성 트리(`read_page`, `find`, `get_page_text`)와 스크린샷·좌표 둘 다 사용.
- 지원 모델: fable-5-1, mythos-5-1, fable-5, mythos-5, opus-5-5, opus-5, sonnet-5-5, sonnet-5, opus-4-8, haiku-5-5.
- 멤버 31개, 기본 27개 활성. 기본 비활성 4개: `javascript_exec`, `file_upload`, `read_console`, `read_network`. `toolset_name: "browser"`. 컴퓨터 툴셋과 한 요청에 함께 쓸 수 있음(브라우저 항목은 요청당 1개).
- 타깃: 좌표(`x`,`y` 뷰포트 픽셀) 또는 ref(`read_page`/`find`가 준 `ref_N`). 접근성 트리가 쓸 만하면 ref 우선.
- `browser_state` 블록으로 탭 목록 보고(내 앱이 탭의 진실 공급원). 탭 관리 결과는 `browser_state` 블록 하나만.
- 오류는 `is_error: true`. 배치 중단 문구: `Not executed: an earlier action in this turn failed.`
- 보안 권고 6가지: 전용 컨테이너·빈 프로필, 네트워크 계층 도메인 허용 목록(리다이렉트 후 재확인, 사설·루프백 차단), 페이지 내용은 모두 비신뢰(접근성 트리·보이는 텍스트 기반), `navigate`는 http/https만(URL 파서 사용, `javascript:`·`file:`·`data:` 거부), `javascript_exec`·`file_upload` 기본 끔, 결과가 큰 행동은 사람 확인. 로그인이 불가피하면 전용 저권한 계정.
- Bedrock에서는 브라우저 툴셋 요청에 프롬프트 인젝션 분류기가 현재 돌지 않는다는 주석(SDK 페이지).
- (2026-10-12 해소) 브라우저 툴셋 오버헤드: pricing 페이지 "Browser use tool" 절에서 확인 — 기본 멤버 약 6,600 입력 토큰(Sonnet 5 약 6,670, 그 외 약 6,610), 선택 4개 모두 켜면 약 +880. 컴퓨터 툴셋은 약 4,500(Sonnet 5 약 4,590, 그 외 약 4,520) 변동 없음.

### SDK 툴셋 (https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-sdk)
- Python·TypeScript SDK에 베타 클래스: `anthropic.tools.browser.BetaAbstractBrowserToolset20260801`, `anthropic.tools.computer.BetaAbstractComputerToolset20260801`(TS는 `@anthropic-ai/sdk/helpers/beta/toolsets`). 서브클래스를 만들어 멤버별 메서드를 구현, `client.beta.messages.tool_runner(tools=[toolset])`로 실행. SDK에는 브라우저·데스크톱·드라이버가 없음(예: claude-quickstarts/browser-toolset의 CDP 예제는 프로덕션 코드가 아님).
- 정책: `url_policy`(navigate URL 거부), `confirm` 콜백(결과가 큰 멤버 승인). 컴퓨터 툴셋 드라이버가 `type`/`key`/`hold_key`를 구현하면 `confirm`이 필수(없으면 생성자가 설정 오류), `confirm`이 없으면 모든 호출이 실행됨.
- 안전 5단계(컴퓨터): 세션마다 전용 최소 권한 컨테이너·VM(자격증명·호스트 마운트 없음), `confirm`으로 게이트, 터미널·실행 창·런처는 데스크톱에서 치움, 이상 입력(화면 밖 좌표, 수 분짜리 wait 등)은 `ToolError`로 거부, 화면 내용은 비신뢰. API를 호출하는 코드는 브라우저·데스크톱 컨테이너 밖에서 실행(API 키 보호).
- 파트너 통합: Browser Use, Browserbase, Daytona, E2B.
- 로컬 검증: `anthropic` 1.13.0에서 두 클래스 임포트 성공.

### 스킬 문서 교차 확인
- Opus 5.5·Sonnet 5.5·Haiku 5.5는 Claude API·Google Cloud에서 `computer_20251124`가 400 (`'claude-opus-5-5' does not support tool types: computer_20251124`). 툴셋으로 옮길 때 에이전트 루프도 바꿔야 함(동작은 `name`, `toolset_name` 에코).
- `tool_choice` any/tool은 Opus 5.5에서 400이므로 예제에 쓰지 않음. 브라우저 툴셋에서 한 번에 한 호출을 원하면 `tool_choice: {"type":"auto","disable_parallel_tool_use": true}`(문서: "set `disable_parallel_tool_use: true` in `tool_choice`").
- 2026-08-19: 컴퓨터 툴셋 GA와 브라우저 툴셋 출시(C16 "다음 단계" 절과 일치).

## 확인 못 한 것
- (해소: 2026-10-12 위 참고. 별도 요금은 없고 표준 도구 사용 요금.)
- 컴퓨터 툴셋 SDK 클래스는 베타라 시그니처가 바뀔 수 있음.
- 실제 호출·실제 브라우저/가상 데스크톱 실행은 하지 못함(키·환경 없음). 예제는 문법과 임포트만 검증.

## 2026-10-12 재확인
- 본문 비용 Aside·요약에 브라우저 툴셋 오버헤드 약 6,600 반영. 나머지(GA 상태, 모델 목록, 멤버 수, 호환성, ZDR) 변동 여부는 아래 확인 결과 참고.
