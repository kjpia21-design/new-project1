# D4-07 조사 노트: Claude Code 헤드리스 모드와 GitHub Actions (2026-10-11)

## 출처 (직접 읽음)
- https://code.claude.com/docs/en/headless (WebFetch, 2026-10-11)
- https://code.claude.com/docs/en/github-actions (WebFetch, 2026-10-11)
- https://github.com/anthropics/claude-code-action/blob/main/docs/security.md (WebFetch)
- https://raw.githubusercontent.com/anthropics/claude-code-action/main/examples/issue-triage.yml, pr-review-comprehensive.yml (curl)

## 확인한 사실 (헤드리스)
- `claude -p "프롬프트"`가 비대화형 실행. 성공 시 종료 코드 0, 실패 시 0이 아닌 값. SIGTERM이면 143.
- `--bare`: hooks, skills, 플러그인, MCP, auto memory, CLAUDE.md 자동 탐색을 건너뜀. CI·SDK 호출에 권장, 향후 `-p`의 기본이 될 예정. bare는 OAuth/키체인을 읽지 않으므로 `ANTHROPIC_API_KEY` 필요(또는 apiKeyHelper). Bedrock/Vertex/Foundry는 자체 자격 증명 사용. bare에서 Claude가 쓰는 도구는 Bash, 파일 읽기, 파일 편집. 컨텍스트는 `--append-system-prompt`, `--settings`, `--mcp-config`, `--agents`, `--plugin-dir`로 전달. (v2.1.286 이후 MCP/시스템 리마인더/백그라운드 작업 제한 명확화)
- `--bare` 없이 `-p`는 프로젝트 `.claude/settings.json`의 훅과 `.mcp.json` 서버를 신뢰 대화상자 없이 실행.
- `--output-format`: `text`(기본), `json`(result, session_id, 메타데이터, `total_cost_usd`와 모델별 비용), `stream-json`(줄 단위 JSON; `--verbose --include-partial-messages`와 함께 토큰 스트리밍; 마지막 줄이 `result` 메시지).
- `--json-schema '<스키마>'`와 `--output-format json`: 결과가 `structured_output` 필드에 담김. 잘못된 스키마면 `Error: --json-schema is not a valid JSON Schema`로 종료. `format` 키워드는 주석으로만 취급.
- 비용 수치는 클라이언트 측 추정치라 실제 청구와 다를 수 있음.
- `--max-budget-usd` 상한 도달 시 남은 백그라운드 작업 중단(헤드리스 문서 본문에서 확인). 플래그 자체의 상세는 CLI reference에 있다고만 확인, 기본값/정확한 동작 세부는 본문에서 못 봄.
- 권한: `--allowedTools "Bash,Read,Edit"`, 규칙 문법 `Bash(git diff *)`(공백+`*`이 접두 일치). `--permission-mode`: auto, dontAsk(프롬프트 필요한 호출 전부 거부, 잠긴 CI에 유용), acceptEdits. 아무것도 안 정하면 시작 모드가 auto일 수 있으니 명시. `--permission-prompts none`(v2.1.259+)은 무인 실행에서 승인 대기 없이 거부.
- 입력: stdin 파이프 상한 10MB. 이어하기: `--continue`, `--resume <session_id>`.
- `--append-system-prompt`, `--system-prompt`로 시스템 프롬프트 조정.
- stream-json의 `system/init`에 plugins/plugin_errors/mcp_servers/mcp_server_errors → CI에서 로드 실패 감지. `system/api_retry` 이벤트.
- 백그라운드 작업이 있으면 종료 전 대기, 기본 10분 상한(`CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS`).

## 확인한 사실 (GitHub Actions)
- 액션: `anthropics/claude-code-action@v1`. 체크아웃은 `actions/checkout@v6`.
- 설정: `/install-github-app`(github.com 저장소만, gh CLI 필요) 또는 수동(Claude GitHub App 설치 + 시크릿 + 워크플로 복사). 저장소 admin 권한 필요.
- 시크릿 이름: `ANTHROPIC_API_KEY`(입력 `anthropic_api_key`), `CLAUDE_CODE_OAUTH_TOKEN`(입력 `claude_code_oauth_token`, `claude setup-token`으로 생성, Pro/Max/Team/Enterprise). 조직 공유 시 API 키 권장(OAuth 토큰은 만든 사람의 구독에 묶임). 워크로드 아이덴티티 페더레이션 입력 존재.
- 모드: `prompt` 없으면 상호작용 모드(@claude 트리거), `prompt` 있으면 자동화 모드(결과는 기본적으로 실행 로그).
- 입력: prompt, claude_args, anthropic_api_key, claude_code_oauth_token, github_token, plugin_marketplaces, plugins, settings, trigger_phrase, use_bedrock/use_vertex/use_foundry. `track_progress`는 예제 저장소 pr-review-comprehensive.yml에서 확인.
- `claude_args`: 어떤 CLI 인자든 전달. `--max-turns`, `--model`, `--mcp-config`, `--allowedTools`, `--debug`. 문서 예제는 `--model claude-opus-5-5`, `--model claude-sonnet-5` 사용(본문에서는 C1/C16과 맞춰 claude-sonnet-5-5로 씀).
- 권한 블록 예: 문서의 @claude 예제는 contents/pull-requests/issues: write, id-token: write, actions: read. 리뷰 예제는 contents/pull-requests/issues: read + id-token: write. `id-token: write`는 기본 GitHub App 인증에 필요.
- 트리거 제한: 이슈/PR 이벤트는 쓰기 권한 필요, 봇은 `allowed_bots` 없으면 거부, `allowed_non_write_users`로 우회 가능(위험).
- 공개 저장소 포크 PR은 GitHub가 시크릿을 주지 않음 → 리뷰는 같은 저장소 브랜치 PR에서만 동작.
- 스케줄 워크플로: 기본 브랜치에서만, 공개 저장소는 60일 무활동 시 비활성.
- 비용 관리: 구체적 요청, 이슈 템플릿, 짧은 CLAUDE.md, `--max-turns`, 워크플로 timeout, concurrency. 비용은 Actions 분 + API 토큰. OAuth 토큰이면 구독 사용량 사용.
- Claude가 만든 커밋에서 CI가 안 도는 문제: `GITHUB_TOKEN`으로 만든 커밋은 워크플로 트리거 안 함.
- security.md: `pull_request_target`/`workflow_run`은 base 시크릿으로 실행되므로 신뢰할 수 없는 ref를 워크스페이스 루트에 체크아웃하지 말 것. PR에서 base 브랜치의 `.claude/`, `.mcp.json`, `CLAUDE.md` 등을 복원. 프롬프트 인젝션(HTML 주석, 숨은 문자) 경고, 공개 저장소는 `include_comments_by_actor` 등으로 입력 제한. 기본은 PR을 자동 생성하지 않고 브랜치 푸시 + PR 생성 링크. `show_full_output`은 기본 꺼짐, 공개 저장소에서는 로그가 공개되므로 켜지 말 것. PAT 사용 금지(`GITHUB_TOKEN` 사용).
- 예제 이슈 분류(examples/issue-triage.yml)는 `/label-issue` 커맨드와 `scripts/edit-issue-labels.sh`를 저장소에 둬야 하고 `allowed_non_write_users: "*"`와 `github_token`을 씀. 본문 예제는 이 위험한 설정을 피하고 쓰기 권한 사용자만 허용하는 변형으로 작성.

## 확인 못 함 / 주의
- `--max-budget-usd`의 정확한 의미(세션 누적 vs 호출당)와 기본값은 CLI reference를 직접 읽지 않음 → 본문에서 단정하지 않고 "상한 플래그"로만 설명.
- 이슈 분류 예제에서 `gh` CLI가 액션 안에서 자동 인증되는지는 문서에서 확인 못 함. 본문 예제는 `GH_TOKEN`을 env로 명시.
- 본문의 워크플로는 YAML 문법만 검증(pyyaml). 실제 GitHub에서 돌려보지 않음.
- claude-code-action의 `v1` 태그가 가리키는 세부 버전은 확인 안 함.

## 2026-10-12 재확인
- CLI reference 직접 읽음: `--max-budget-usd`는 print 모드 전용, 클라이언트 쪽 비용 추정 기준(청구액과 다를 수 있고 초과 가능), 서브에이전트 비용 합산, `--continue/--resume` 시 이전 누적은 상한에 미포함, 상한 도달 시 새 서브에이전트 생성 실패·백그라운드 서브에이전트 중단(v2.1.217+). 위 '정확한 의미 미확인' 해소, 본문 반영.
- `gh` 자동 인증 여부는 여전히 문서에 명시 없음(공식 예제는 gh를 쓰면서 GH_TOKEN 설정을 따로 보이지 않음). 본문은 명시적 GH_TOKEN 유지.
- 나머지(--bare, 출력 형식, --permission-prompts none, claude-code-action@v1, checkout@v6, id-token: write, 보안 문서 항목) 변동 없음.
