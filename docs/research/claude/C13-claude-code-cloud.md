# Claude Code 클라우드 (웹 세션, 환경, 루틴)

## 핵심 사실
- 클라우드 세션 = 내 컴퓨터가 아니라 클라우드 인프라에서 도는 Claude Code 세션. 노트북을 닫아도 계속 실행되고 어느 기기에서나 확인·조종 가능. (출처: https://code.claude.com/docs/en/claude-code-on-the-web)
- 제공 대상: Pro, Max, Team 플랜, 그리고 Enterprise의 프리미엄 좌석 또는 Chat + Claude Code 좌석 사용자. (출처: 동일)
- 과금: "플랜의 사용량 한도에 다른 Claude/Claude Code 사용량과 함께 합산되며, 클라우드 VM에 대한 별도 요금은 없다." 병렬로 여러 작업을 돌리면 그만큼 한도를 더 소모. (출처: 동일)
- 시작 방법: 브라우저 claude.ai/code, 모바일 Claude 앱의 Code 탭, 데스크톱 앱에서 Local 대신 Cloud 선택, 터미널 `claude --cloud "작업"`, 루틴. (출처: 동일)
- GitHub 연결 2가지: (1) Claude GitHub App(웹 온보딩; 비공개 repo는 앱이 설치된 곳만), (2) 터미널에서 `/web-setup` (로컬 `gh` 토큰을 계정에 전송; 앱 설치 여부와 무관). Auto-fix와 Projects는 GitHub App 설치가 필요. (출처: 동일)
- GitHub 자격 증명은 Anthropic 서버에 암호화돼 있고 VM 안에 들어가지 않으며, GitHub 작업은 프록시를 거친다. (출처: 동일)
- 저장소 호스트: 클론·PR 생성은 GitHub 필요(Team/Enterprise는 GitHub Enterprise Server 지원). GitLab/Bitbucket은 `CCR_FORCE_BUNDLE=1`로 로컬 번들 업로드가 가능하지만 결과를 원격에 push할 수 없다. (출처: 동일)
- 번들 업로드 조건: git 저장소+커밋 1개 이상, 번들 100MB 미만, 추적되지 않은 파일 제외. `.env`, `*.tfvars`, `id_rsa`, `*.pem` 등의 미커밋 변경은 업로드에서 제외(macOS/Linux/WSL). (출처: 동일)
- `claude --cloud`는 현재 디렉터리의 GitHub remote를 현재 브랜치 기준으로 클론하므로 로컬 커밋은 먼저 push해야 한다. `--cloud` 여러 번 실행하면 독립 세션이 병렬 실행. (출처: 동일)
- 세션 이어받기(teleport): `claude --teleport`(선택기) / `claude --teleport <id>` / 세션 중 `/teleport`·`/tp` / `/tasks`에서 `t`. 조건: 깨끗한 git 상태, 같은 저장소(포크 아님), 브랜치가 push됨, 같은 claude.ai 계정. CLI에서의 이동은 단방향(클라우드→터미널). 터미널에서 이어가면 그 작업은 로컬에 남고 클라우드 세션에는 나타나지 않는다. (출처: 동일)
- 데스크톱 앱은 Open in 메뉴로 로컬 세션을 클라우드로 보낼 수 있다. (출처: 동일)
- 후속 메시지 전송: `claude -p "메시지" --cloud <session-id>`. (출처: 동일)
- 세션 공유: Team/Enterprise는 Private/Team, Max/Pro는 Private/Public(공개 시 claude.ai 로그인한 모든 사용자가 볼 수 있음). 공유 전 자격 증명 포함 여부 점검 권고. (출처: 동일)
- Auto-fix PR: CI 실패와 리뷰 코멘트에 자동 대응. 켜는 법은 세션의 CI 상태 바에서 Auto-fix, 터미널 `/autofix-pr`, 모바일에서 요청. Claude GitHub App 설치 필요. 머지 충돌은 webhook이 없어 자동 대응 못 함. (출처: 동일)
- 환경(Environment): 네트워크 접근, 환경변수, 설정 스크립트를 저장한 구성. 첫 사용 시 **Default** 환경(Trusted 네트워크, 변수·스크립트 없음)이 생성됨. (출처: https://code.claude.com/docs/en/cloud-environments)
- 네트워크 접근 수준 4가지: None(외부 접근 없음), Trusted(허용 목록 도메인만: 패키지 레지스트리, GitHub, 클라우드 SDK), Full(모든 도메인), Custom(내 허용 목록, 기본 목록 포함 선택). None에서도 Claude Code 자신의 Anthropic API 통신은 가능. (출처: 동일)
- 설정 스크립트: 세션 시작 전 실행, 약 5분 안에 끝나야 파일시스템 스냅샷이 캐시되며(만료 약 7일, 스크립트·허용 호스트 변경 시 재빌드) 이후 세션이 빨라진다. 설치 패키지, 받은 Docker 이미지는 유지되지만 실행 중인 프로세스는 유지되지 않는다. (출처: 동일)
- 환경변수와 설정 스크립트는 환경을 쓰는 누구나 읽을 수 있어 비밀 저장 금지. Pro/Max는 "네트워크 시크릿"(프록시가 요청에 키를 붙여 세션이 값을 보지 못함)을 쓸 수 있고 Team/Enterprise는 아직 불가. (출처: 동일)
- 리소스 상한(변동 가능): 4 vCPU, 16GB RAM, 30GB 디스크. 명령 기본 타임아웃 2분(최대 10분 요청 가능), 시간 초과 시 백그라운드로 이동해 최대 30분 더 실행. 유휴 시 VM이 일시정지되고 이후 회수될 수 있음(대화 기록은 복원, 실행 중이던 백그라운드 작업은 복원 안 됨). (출처: 동일)
- 세션 안 명령: `/compact`, `/context`는 작동, `/clear`는 불가. `/model sonnet`처럼 인자 형태로 사용. (출처: https://code.claude.com/docs/en/claude-code-on-the-web)
- 조직 IP 허용 목록이 켜져 있으면 Anthropic 호스팅 클라우드 세션은 인증 오류로 실패. Zero Data Retention/HIPAA 구성 조직은 클라우드 세션 기능 사용 불가. (출처: 동일)
- 루틴(Routines, 리서치 프리뷰): 프롬프트+저장소+커넥터를 저장해 클라우드에서 자동 실행. 트리거: 스케줄(매시간/매일/평일/주간, 또는 1회성), API(HTTP POST + 베어러 토큰), GitHub 이벤트(pull request, release). Pro/Max/Team/Enterprise에서 사용. claude.ai/code/routines, 데스크톱 앱, CLI `/schedule`로 생성. (출처: https://code.claude.com/docs/en/routines)
- 루틴 제한: 스케줄 최소 간격 1시간. 시간 정각 실행은 몇 분 늦을 수 있으니 9:07처럼 분을 어긋나게 권고. 시간당 한도: 스케줄 실행 계정당 100회, Run now/API는 루틴당 30회 등. 이 시간당 한도에는 초과 과금(overage)이 없음. (출처: 동일)
- 루틴 사용량: 대화형 세션과 같이 구독 사용량을 소모. 한도 도달 시 usage credits가 켜져 있으면 초과분이 종량제로 계속 실행, 아니면 리셋까지 거부. (출처: 동일)
- 루틴은 개인 계정 소유(팀원과 공유 안 됨). 전체 커넥터가 기본 포함되므로 불필요한 것은 제거. 커밋·PR은 내 GitHub 사용자로 남음. 실행은 승인 없이 자율 동작. 브랜치는 `claude/` 접두사로 push. (출처: 동일)
- 루틴 API 트리거는 `anthropic-beta: experimental-cc-routine-2026-04-01` 헤더 사용(베타). (출처: 동일)

## 따라하기에 쓸 수 있는 절차
1. claude.ai/code 접속 → GitHub 연결(GitHub App 승인) → 저장소 선택 → 작업 입력. 또는 터미널에서 `/web-setup`. (출처: https://code.claude.com/docs/en/claude-code-on-the-web)
2. 터미널에서 시작: 먼저 push → `claude --cloud "Fix the authentication bug in src/auth/login.ts"`. (출처: 동일)
3. 완료 후 변경 diff 검토(+/- 표시 클릭), 인라인 코멘트, claude.ai/code에서 PR 생성. (출처: 동일)
4. 이어서 로컬 작업: 깨끗한 git 상태에서 `claude --teleport`. (출처: 동일)
5. 환경 설정: 환경 선택기에서 설정 아이콘 → 네트워크 접근/환경변수/설정 스크립트 편집. (출처: https://code.claude.com/docs/en/cloud-environments)
6. 루틴 만들기: CLI에서 `/schedule daily PR review at 9am` 또는 claude.ai/code/routines → New routine → 이름·프롬프트·저장소·환경·트리거 → Create. (출처: https://code.claude.com/docs/en/routines)

## 확인 못 함 / 주의
- 클라우드 세션 전용 "크레딧" 개념은 확인 못 함. 공식 문서는 "별도 VM 요금 없음, 플랜 한도에 합산"이라고 명시. (Usage credits는 한도 초과 시 이어서 쓰는 종량 제도, C02 참조)
- 플랜별 클라우드 세션 횟수 상한 수치는 확인 못 함.
- 사용자 환경에서 보이는 세션 ID는 `session_...` 형식이다(문서 예시).
- 네트워크 Trusted 허용 도메인 전체 목록은 읽지 않음(cloud-environments#default-allowed-domains 참조).

## 출처 목록
- [Use Claude Code in the cloud](https://code.claude.com/docs/en/claude-code-on-the-web) — 확인일 2026-10-10
- [Configure cloud environments](https://code.claude.com/docs/en/cloud-environments) — 확인일 2026-10-10
- [Automate work with routines](https://code.claude.com/docs/en/routines) — 확인일 2026-10-10
