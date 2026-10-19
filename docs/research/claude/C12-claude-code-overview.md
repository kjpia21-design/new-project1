# Claude Code 개요 (표면, 설치, 첫걸음)

## 핵심 사실
- Claude Code는 코드베이스를 읽고, 파일을 수정하고, 명령을 실행하고, 개발 도구와 연동하는 에이전트형 코딩 도구다. 터미널, IDE, 데스크톱 앱, 브라우저에서 쓸 수 있다. (출처: https://code.claude.com/docs/en/overview)
- 표면(surface): Terminal CLI, VS Code(Cursor 포함) 확장, JetBrains 플러그인, Desktop 앱(Code 탭), Web(claude.ai/code). 모든 표면이 같은 엔진을 공유하므로 CLAUDE.md, 설정, MCP 서버가 표면 간에 공통으로 동작한다. (출처: 동일)
- 대부분의 표면은 Claude 구독 또는 Anthropic Console 계정이 필요하다. 터미널 CLI, VS Code, JetBrains는 서드파티 제공자(Bedrock 등)도 지원. 데스크톱 앱은 유료 구독이 필요. (출처: 동일)
- 권장 설치(Native): macOS/Linux/WSL `curl -fsSL https://claude.ai/install.sh | bash`, Windows PowerShell `irm https://claude.ai/install.ps1 | iex`, Windows CMD `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`. 네이티브 설치는 백그라운드로 자동 업데이트된다. (출처: 동일)
- 대안: Homebrew `brew install --cask claude-code`(자동 업데이트 안 됨; `claude-code`는 stable, `claude-code@latest`는 latest 채널), WinGet `winget install Anthropic.ClaudeCode`(자동 업데이트 안 됨), apt/dnf/apk도 가능. (출처: 동일)
- 설치 후 새 터미널에서 `claude --version`으로 확인. 프로젝트 폴더에서 `claude`를 실행하면 첫 사용 때 로그인 안내가 나온다. `ANTHROPIC_API_KEY`가 설정돼 있고 승인하면 로그인 생략. (출처: 동일)
- Windows 네이티브에서는 Git for Windows 설치를 권장(없으면 PowerShell을 셸 도구로 사용). (출처: 동일)
- 데스크톱 앱: macOS(Intel/Apple Silicon), Windows x64, Windows ARM64 다운로드 제공. Ubuntu/Debian은 베타(apt). 설치 후 로그인하고 **Code** 탭을 누르면 시작. 앱에 Claude Code가 포함돼 CLI 별도 설치 불필요. (출처: 동일)
- VS Code: 확장 `anthropic.claude-code` 설치 후 명령 팔레트에서 "Claude Code" → "Open in New Tab". JetBrains 플러그인은 CLI를 별도로 설치해야 한다. (출처: 동일)
- 웹: claude.ai/code에서 로컬 설정 없이 실행. 데스크톱 브라우저와 iOS/Android Claude 앱에서 가능. (출처: 동일)
- 활용 예: `claude "write tests for the auth module, run them, and fix any failures"`, `claude "commit my changes with a descriptive message"`, 파이프 `tail -200 app.log | claude -p "..."`. (출처: 동일)
- 표면 간 이동: Remote Control(휴대폰·브라우저에서 로컬 세션 조작), `claude --teleport`(웹/모바일 세션을 터미널로), `/desktop`(터미널 세션을 데스크톱 앱으로; macOS·x64 Windows, 구독 필요), `claude --cloud`(터미널에서 클라우드 세션 시작). (출처: 동일)
- 반복 작업 자동화 3종: Routines(클라우드), Desktop scheduled tasks(내 컴퓨터), `/loop`(CLI 세션 내). (출처: 동일)
- 무료 학습: Claude Academy의 Claude Code 101 등 (출처: 동일)

## 따라하기에 쓸 수 있는 절차
1. 터미널을 연다 → OS에 맞는 설치 명령 실행(위 참조). (출처: https://code.claude.com/docs/en/overview)
2. 새 터미널 창에서 `claude --version` 확인. `claude`를 찾을 수 없으면 PATH 문제(공식 troubleshoot-install 문서 참조). (출처: 동일)
3. `cd your-project` → `claude` 실행 → 안내에 따라 로그인. (출처: 동일)
4. 첫 작업을 자연어로 요청(예: "이 프로젝트 구조를 설명해줘"). 프로젝트 지침은 `/init`으로 CLAUDE.md 생성(C14 참조). (출처: https://code.claude.com/docs/en/commands)
5. 코드를 시각적으로 검토하고 싶으면 `/desktop` 또는 데스크톱 앱의 Code 탭 사용. (출처: 동일)

## 확인 못 함 / 주의
- 요금제별 Claude Code 사용 한도 수치는 C02 참고(구체 수치 비공개/확인 못 함).
- 퀵스타트(code.claude.com/docs/en/quickstart)의 단계별 본문은 직접 읽지 않았다.
- 문서는 Pro 이상에서 Claude Code 사용 가능, Free는 불가(https://claude.com/pricing 확인).

## 출처 목록
- [Claude Code overview](https://code.claude.com/docs/en/overview) — 확인일 2026-10-10
- [Commands](https://code.claude.com/docs/en/commands) — 확인일 2026-10-10
- [Pricing](https://claude.com/pricing) — 확인일 2026-10-10

## 2026-10-11 업데이트 반영
확인일 2026-10-11. 출처: [CLI reference](https://code.claude.com/docs/en/cli-reference), [Agent view](https://code.claude.com/docs/en/agent-view), [Commands](https://code.claude.com/docs/en/commands), [Model configuration](https://code.claude.com/docs/en/model-config), [CHANGELOG.md](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md).
- `claude attach <id|name>`, `claude logs <id|name>`: 이름 일부 사용은 v2.1.290 이상(CLI reference). `attach`는 이름으로는 실행 중인 세션만 열림(Agent view).
- `claude stop <id>`(= `claude kill`), `claude respawn <id>`(`--all`로 전체), `claude rm <id>`(대화 기록은 로컬에 남아 `claude --resume` 가능): CLI reference, Agent view. 도입은 v2.1.251(CHANGELOG).
- agent view: `Ctrl+F` 이름 검색, `Alt+↑/↓` 그룹 이동(v2.1.288), `n:<텍스트>` 필터(v2.1.287, 이름 또는 첫 프롬프트). Agent view 문서.
- `--remote-control`/`/remote-control` 세션을 Claude 앱에서 포크, 포크는 내 컴퓨터의 백그라운드 세션(v2.1.273, CHANGELOG 한 줄).
- `/rate-limit-options`: 한도 도달 시 대기 후 자동 계속, usage credits 추가, 업그레이드. claude.ai 구독 필요, 대기 행은 v2.1.234 이상(Commands).
- `/effort` 모델별 저장(v2.1.251), `s`는 세션만(v2.1.257), `max`는 세션 전용(Model configuration).
- 확인 못 함: 포크 방법의 화면 단계(앱 메뉴 이름)는 공식 문서에서 못 찾았다. Remote Control 문서 본문에서 "fork" 문구를 찾지 못했고 CHANGELOG 한 줄만 근거다.

## 2026-10-19 점검 반영
- quickstart·overview·model-config를 다시 읽음. 설치 명령, 자동 업데이트 여부, 지원 플랜(Pro/Max/Team/Enterprise 또는 Console) 변동 없음. 최신 CHANGELOG는 v2.1.303(2026-10-18).
