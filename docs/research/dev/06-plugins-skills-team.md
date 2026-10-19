# D3-06. 스킬·플러그인 패키지로 만들어 팀에 배포하기 (조사 노트)

확인일 2026-10-11. "직접 실행"은 이 컨테이너(Claude Code 2.1.296)에서 확인한 것.

## 출처
code.claude.com/docs/en/skills(앞 100,000자), /plugins, /plugin-marketplaces(→ create-marketplace 내용으로 안내됨), /plugins/create, /plugins/publish, /plugins/org, /plugin-evals(저장된 전체 중 요약), claude.com/docs/plugins/submit, support.claude.com 스킬 문서는 C8 노트 재사용.

## 스킬 설계 (code.claude.com/docs/en/skills)
- `description`만 권장, 나머지 선택. `description`+`when_to_use`는 스킬 목록에서 1,536자에서 잘림 → 핵심 용도를 앞에, 사용자가 실제로 말하는 표현을 넣기.
- 첫 줄이 `---`여야 함. YAML이 잘못되면 오류 없이 필드가 비어 로드됨(조용한 실패).
- `SKILL.md`는 500줄 미만, 자세한 참고 자료는 형제 파일로 분리(점진적 공개). 본문은 한 번 로드되면 대화 내내 컨텍스트에 남으므로 줄마다 반복 비용. 지속 규칙은 "상시 지침" 문체로.
- 자동 압축 후 호출된 스킬은 각각 처음 5,000토큰만 유지, 재첨부 스킬 합계 25,000토큰.
- 호출 제어: 기본(사용자·Claude 모두), `disable-model-invocation: true`(사용자만, 배포·커밋처럼 부작용 있는 작업), `user-invocable: false`(Claude만). disable-model-invocation 스킬의 description은 컨텍스트에 안 들어감.
- `allowed-tools`는 그 스킬을 호출한 턴에만 사전 승인(다음 사용자 메시지에서 해제), 다른 도구를 제한하지 않음. `${CLAUDE_SKILL_DIR}`로 번들 스크립트 경로 지정. 신뢰하지 않는 저장소의 스킬은 allowed-tools를 먼저 검토.
- `` !`명령` `` 동적 컨텍스트: 실패하면 호출 전체 중단, `|| true`로 보호, 기본 2분 타임아웃. `context: fork`는 대화 이력 없는 서브에이전트.
- 디버깅: description 확인 → 프런트매터 확인 → `/skill-name` 직접 호출 → `/skills`로 로드 확인 → 새 최상위 skills 폴더는 `/reload-skills` → 스킬 on/off 비교. `/skill-doctor`(v2.1.252+)가 스킬별 컨텍스트 비용과 호출 이력을 보고. `skillOverrides`로 name-only/off.
- claude.ai 업로드 스킬 규칙(name 64자, description 200자, 파일명 표기 차이)은 C8 노트.

## 플러그인 (plugins, plugins/create)
- 플러그인 = skills, agents, hooks, MCP 서버 등을 한 단위로 묶은 디렉터리 + `.claude-plugin/plugin.json`. 스킬·에이전트 이름에 플러그인 이름 접두사(`/plugin:skill`).
- 레이아웃: `.claude-plugin/plugin.json`만 `.claude-plugin/` 안, 나머지(`skills/`, `agents/`, `hooks/hooks.json`, `.mcp.json`)는 플러그인 루트. 여기에 넣으면 로드 안 됨(경고).
- plugin.json: `name` 필수(공백 금지, kebab-case 권장), `description`, `version`(선택), `author{name}` 등. `displayName`으로 표시 이름.
- 단독 설정(`.claude/`)은 한 프로젝트·본인용에 유지, 공유·여러 프로젝트·버전 릴리스가 필요하면 플러그인.
- 활성 플러그인은 매 세션 컨텍스트에 스킬 이름·설명을 싣고 MCP 서버·훅도 같이 실행됨. 플러그인이 하는 일은 사용자 권한으로 실행됨 → 설치 전 검토(plugins/security).
- 개발 중 로드: `claude --plugin-dir ./경로`(세션 한정, `/reload-plugins`), `--plugin-url`(zip), `claude plugin init <이름>`(~/.claude/skills/<이름>/에 만들어 매 세션 자동 로드, `<name>@skills-dir`).
- 설치 범위: user / project(커밋된 `.claude/settings.json`, 각자 자기 컴퓨터에 설치 필요) / local. 클라우드 세션은 로컬 설정의 플러그인을 로드하지 않음.
- 직접 실행: `claude plugin validate ./플러그인`(통과), `claude plugin validate --strict ./마켓플레이스`(통과), 가짜 HOME에서 `marketplace add ./mk` → `install team-kit@team-marketplace`(user 범위 설치 성공) → `plugin details`(always-on 약 114토큰, 스킬 pr-description always-on 약 110/호출 시 약 190), `plugin tag --help`.
- CLI: `claude plugin init|install|update|enable|disable|list|details|validate [--strict]|eval|tag|marketplace add/list/update/remove`.

## 마켓플레이스 (create-marketplace, publish)
- `.claude-plugin/marketplace.json`: `name`, `owner`, `plugins[]`(각 항목 `name`+`source`, `description`). 상대 경로 source는 마켓플레이스 루트 기준, `..` 금지. 항목 name과 plugin.json name은 같게.
- source 종류: 상대 경로, `github`({source:"github", repo}), `git-subdir`, `url`, `archive`(zip), `npm`, `command`.
- 팀원 설치: `claude plugin marketplace add <owner>/<repo>` → `claude plugin install <플러그인>@<마켓플레이스>`; 한 번에 `claude plugin install <플러그인> --marketplace <소스>`(v2.1.292+), 세션 안 `/plugin install ... --marketplace`(v2.1.275+).
- 비공개 저장소면 마켓플레이스도 비공개(clone 권한이 있는 사람만). 백그라운드 자동 업데이트는 사용자 쪽 설정, 서드파티 마켓플레이스 기본 꺼짐("Off").
- 버전: plugin.json에 version을 두면 올리지 않는 한 업데이트 안 됨("already at the latest version"); git 마켓플레이스에서는 version을 생략하면 커밋 SHA 사용. `claude plugin tag`로 `{name}--v{version}` 태그(--push).
- 이름 변경 금지(설치가 끊김), 불가피하면 `renames` 맵.
- `claude plugin validate --strict`는 경고도 실패 처리(CI용).

## 조직 배포 (plugins/org)
- 저장소 단위: 저장소 `.claude/settings.json`에 `extraKnownMarketplaces`, `enabledPlugins`. `extraKnownMarketplaces`는 폴더 신뢰(workspace trust)를 수락한 뒤에만 적용(미신뢰 폴더에서는 메시지 없이 무시). 마켓플레이스 안 상대 경로 플러그인은 그대로 로드, 외부 source 플러그인은 각자 `claude plugin install <name>@<marketplace> --scope project` 필요(그 전에는 "enabled in project settings but isn't installed").
- 조직 전체: managed settings(서버 관리 설정 = claude.ai Organization settings > Claude Code > Managed settings, Owner 필요 / MDM / managed-settings.json). 예시 JSON: `extraKnownMarketplaces`(+`autoUpdate`), `enabledPlugins`로 강제 설치.
- 제한: `strictKnownMarketplaces`(허용 목록, `[]`면 공식 포함 전부 차단), `blockedMarketplaces`, `disableSideloadFlags`(--plugin-dir 등 차단), `strictPluginOnlyCustomization`, `syncClaudeAiPlugins`.
- 컨테이너·CI: `CLAUDE_CODE_PLUGIN_SEED_DIR`, 비공개 저장소는 `GH_TOKEN`+`gh auth setup-git`(기본 워크플로 토큰은 해당 저장소만 접근). `-p`/CI에서는 설치가 백그라운드라 첫 턴에 빠질 수 있음 → `CLAUDE_CODE_SYNC_PLUGIN_INSTALL=1`.
- 감사: OpenTelemetry `claude_code.plugin_installed`/`plugin_loaded`, Enterprise Analytics API `GET /v1/organizations/analytics/plugins`.
- claude.ai Organization settings > Plugins & skills는 구성원 claude.ai 계정에 플러그인을 켜고, 이는 Claude Code에 "synced plugins"(`<name>@synced`)로 전달됨. 위 키들을 설정하지는 않음.

## 평가 (plugin-evals)
- `claude plugin eval [target]`: Claude Code v2.1.269+, Git 2.31+(있다면). `claude plugin eval init`(대화형으로 케이스 작성) / `init --bare <이름>`(빈 템플릿, CI용).
- 케이스: `evals/<케이스>/prompt.md`(프런트매터: max_turns, allowed_tools, timeout_seconds, model, tags; 본문이 프롬프트) + `graders/<이름>.md`(프런트매터에 type과 옵션). 종류 6가지 중 확인한 것: `regex`(pattern, flags, match, target), `tool_used`(tool, input_match, min, max), `llm`(본문이 PASS/FAIL 루브릭). 코드 채점기는 없음. 기본 target은 `last_message`.
- 기본 케이스당 3회 실행, 플러그인 없는 기준선(W/OUT)과 비교해 Δ 표시. `tool_used: Skill` 채점은 비교 점수에서 제외됨(플러그인 발동 지표). 케이스는 `--threshold`(기본 1.0) 이상이면 통과.
- 실행마다 모델 호출 비용 발생(계정 사용량/API 요금). 케이스 수 x 횟수 x 2(기준선) + llm 채점 호출. 옵션: `--max-cost-usd`(초과 시 종료 코드 2, 부분 결과), `--runs`, `--ablation none`(기준선 생략으로 비용 절반), `--model`, `--judge-model`(기본 haiku), `-j` 동시성, `--no-publish`, `--json`, `--trust-plugin`(CI에서 첫 신뢰 확인 건너뛰기). 종료 코드 0/1/2/130/143.
- 문서의 CI 예: `claude plugin eval . --trust-plugin --json results.json --threshold 0.8 --model <모델> --judge-model <모델> --no-publish --max-cost-usd 20`.
- 이 컨테이너에서 eval은 실행하지 않음(비용). 예제 케이스의 YAML 구조는 문서 기준이며 `claude plugin validate`는 evals/를 검사하지 않음(통과만 확인).

## 제출 포털 (code.claude.com/docs/en/plugins/publish, claude.com/docs/plugins/submit)
- 디렉터리 제출: claude.ai/directory/manage → Submit new → Plugin bundle. 필요: 플러그인이 든 GitHub 저장소(claude.ai에 GitHub 연결, 푸시 권한), 유료 claude.ai 플랜(Pro/Max는 본인 계정, Team/Enterprise는 Owner, Enterprise는 Directory 권한 역할 가능).
- 제출 전 `claude plugin validate ./플러그인 --strict`, 포털의 Validate는 CLI보다 더 많은 검사를 함. 사전 점검 체크리스트(claude.com/docs/plugins/pre-submission-checklist).
- 흐름: Source(저장소·경로·추적 브랜치/태그) → Validate → Listing details(plugin.json·README에서 읽음) → Data handling → Compliance → Review and submit. 조직당 24시간에 최대 10건. 버전마다 검증+보안 스캔, 검토자 보류 가능, 게시는 기본적으로 Anthropic 검토자가 처리. 이후 추적 브랜치에 병합하면 새 버전이 스캔·게시됨(push webhook 선택).
- 비공개 저장소로 제출 가능(소스가 Anthropic에 업로드되어 스캔·검토자에게 보임), 게시 전엔 공개로 전환 필요.
- Anthropic 공식 마켓플레이스(`claude-plugins-official`)는 포털 제출을 받지 않음.
- Anthropic Software Directory Terms/Policy 준수 필요.
- 이전 단계 릴리스 노트 기준 "2026-09-25부터 새 개발자 포털"은 C8에서 인용(여기서 재확인하지 않음).

## 확인 못 함
- 포털 심사 소요 시간, 승인 기준 세부.
- claude.ai(채팅)·Cowork에서 로드되는 플러그인 구성요소 범위(claude.com 지원 표 미확인).
- eval 케이스의 실제 점수(미실행).
- plugin.json 전체 필드 목록(manifest-reference 미확인): name/description/version/author/displayName/homepage/repository만 사용, license는 validate 통과 확인.

## 2026-10-19 재검증
- 변경 1: `claude plugin eval`은 git이 설치돼 있으면 Git 2.31 이상 필요(plugin-evals; 더 오래된 git이면 케이스 실행 전 중단). 본문 4단계에 반영.
- 변경 2: 세션 안에서 `/plugin install <이름> --marketplace <저장소>`로 등록+설치 한 번에(Claude Code v2.1.275 이상, plugins/publish). 셸 한 줄 명령(v2.1.292 이상)은 기존 그대로.
- 확인 유지: description+when_to_use 1,536자 절단, SKILL.md 500줄, `.claude-plugin/`에는 plugin.json만, version 고정 시 업데이트 안 됨, `claude plugin tag --push` 태그 형식, 관리 설정 키(strictKnownMarketplaces 등)와 Owner 경로, 디렉터리 제출 포털 흐름(단계·플랜 조건·claude-plugins-official 미접수).
