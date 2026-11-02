# 조사 노트 — coding 40: Claude Code 설정·권한

조사일: 2026-11-02 / 조사: S6. code.claude.com/docs 페이지를 `Accept: text/markdown`으로 한 번에 한 페이지씩 curl.

## 확인한 공식 URL과 사실
### https://code.claude.com/docs/en/settings (전문 읽음)
- 설정 파일 4종: User `~/.claude/settings.json`, Shared project `.claude/settings.json`, Project local `.claude/settings.local.json`, Managed(`managed-settings.json`, MDM, 서버 관리형). 설치만으로는 파일이 만들어지지 않음. `/config`나 권한 프롬프트의 "Yes, and don't ask again"이 처음 파일을 만듦.
- 우선순위(높은 순): Managed > 명령줄(`--settings`) > Project local > Shared project > User. 환경 변수는 이 스택의 단계가 아니고 키별로 결정. 리스트 키(`permissions.allow` 등)는 덮어쓰지 않고 합쳐짐.
- `permissions.defaultMode`의 `auto`·`bypassPermissions`는 project/local 파일에서는 효과 없음(user 또는 managed). 
- `.claude/settings.local.json`: Claude Code가 쓰면 전역 git excludes에 추가. 직접 만들었으면 `.gitignore`에 직접 추가. git 저장소에서는 저장소 루트에 저장(v2.1.211 이상).
- 편집은 대부분 재시작 없이 반영(permissions, hooks 포함). `/status`의 `Setting sources` 줄로 로드된 파일 확인, `claude doctor`로 거부된 항목 확인. 설정 파일은 엄격한 JSON(주석·후행 쉼표는 오류).
- 공유 파일의 `permissions.allow`, `additionalDirectories`는 각 팀원이 폴더를 신뢰한 뒤에만 적용. `deny`/`ask`는 즉시 적용.
- `--settings '{"model": ...}'`는 한 세션만 적용. 예시 JSON(`allow` lint/test, `deny` `.env`)는 문서 그대로.
### https://code.claude.com/docs/en/permissions (전문 읽음, 일부 절은 훑음)
- 규칙은 deny -> ask -> allow 순으로 평가, 첫 일치가 결과. 구체성은 순서를 바꾸지 않음. 어느 범위의 deny든 다른 범위의 allow보다 우선.
- 규칙은 모델이 아니라 Claude Code가 집행. 프롬프트·CLAUDE.md는 시도에 영향만 줌.
- 구문: `Tool` / `Tool(specifier)`. Bash 와일드카드는 하위 명령 뒤에 `*`(`Bash(git log *)`는 허용, `Bash(git * main)`는 시작 시 경고 대상). 후행 ` *`는 단독 명령도 일치, 공백 없는 `ls*`는 `lsof`도 일치. `:*`는 동치.
- 복합 명령(`&&`, `||`, `;`, `|`, `&`, 줄바꿈)은 모든 하위 명령이 허용돼야 프롬프트 없이 실행. 래퍼 `timeout`, `time`, `nice`, `nohup`, `stdbuf` 등은 벗겨짐. `npx`, `docker exec`는 아님.
- Bash 규칙의 한계: `Bash(rm *)`은 `/bin/rm`, `bash -c '...'`를 막지 못함; `Bash(git push *)`는 `git -C . push`를 막지 못함. 보안 경계가 아니며 OS 수준은 샌드박스, 명령 검사는 PreToolUse 훅.
- Read/Edit: gitignore 패턴. `//path`(절대), `~/path`, `/path`(설정 소스 기준; 프로젝트 설정이면 주 작업 디렉터리 기준), `path`/`./path`(현재 디렉터리). `Read(.env)`와 `Read(**/.env)`는 동등. Read 거부는 Edit/Write도 막음. `Write(path)`, `NotebookEdit(path)`, `Glob(path)` 규칙은 받아들이지만 일치하지 않음 -> `Edit(...)`, `Read(...)` 사용. `.claudeignore`는 효과 없음.
- Read/Edit 거부는 내장 파일 도구와 Claude Code가 인식하는 Bash 파일 명령(`cat`, `head`, `tail`, `sed`, `tee`)·리다이렉션에 적용. `grep -r`처럼 파일명을 쓰지 않는 명령이나 Python/Node 스크립트에는 적용되지 않음 -> 샌드박스.
- 모드 표: default(Manual), acceptEdits, plan, auto, dontAsk, bypassPermissions. `bypassPermissions`는 `.git`, `.claude` 같은 보호 경로 쓰기도 건너뜀 -> 컨테이너/VM에서만. `permissions.disableBypassPermissionsMode`/`disableAutoMode`를 `"disable"`로.
- 훅: PreToolUse 훅 결정은 deny/ask 규칙을 우회하지 못함. exit 2 블록은 allow 규칙보다 먼저.
- 워크스페이스 신뢰: project `permissions.allow`·`additionalDirectories`는 신뢰 대화상자 수락 후에만. `claude -p`/SDK는 대화상자가 없어 allow 규칙을 쓰지 않고 stderr 경고. `--setting-sources user`, `--bare` 등 권고.
- 샌드박스와 권한은 상호 보완(방어 심층).
### https://code.claude.com/docs/en/permission-modes (처음~170행, 보호 경로 절 읽음; auto 모드 분류기 상세·플랫폼별 전환 절은 안 읽음)
- 모드별 "묻지 않고 하는 일" 표. `Shift+Tab`/`--permission-mode`. v2.1.283 이상 터미널·VS Code 세션은 모드 지정이 없으면 auto로 시작. `claude -p`/SDK는 v2.1.302 이상에서 Manual 시작.
- 어떤 모드도 자동 승인하지 않는 것: 명시적 ask 규칙, 사용자 상호작용 필요 도구, 인식된 `rm` 위험 경로 삭제 등.
- 보호 경로: `.git`, `.vscode`, `.idea`, `.husky`, `.claude` 등 디렉터리와 `.gitconfig`, `.bashrc`, `.zshrc`, `.npmrc`, `.mcp.json`, `.claude.json` 등 파일. `permissions.allow`로 미리 승인되지 않음.
### https://code.claude.com/docs/en/settings-reference (Permission settings 절 앞부분만 읽음; 전체 약 44만 자)
- `allowManagedPermissionRulesOnly`, `disableAutoMode`, `autoMode` 키의 존재와 범위 확인. 문서가 안내하는 "Exclude sensitive files" 앵커는 받은 페이지에서 찾지 못함(대신 permissions 문서의 Read 거부 예시 사용).

## 로컬 시험 (Claude Code 2.1.316, 임시 HOME/프로젝트)
- 예제 `.claude/settings.json`은 Python `json`으로 문법 검사 통과.
- `claude doctor`를 신뢰하지 않은 폴더에서 실행했더니 `Ignoring 3 permissions.allow entries from .claude/settings.json: this workspace has not been trusted ...` 경고가 나옴 -> 문서의 "allow는 신뢰 전 미적용"과 일치. 
- 신뢰 표시 후 다시 실행했을 때는 잘못된 규칙(`Write(docs/**)`, `Bash(command:rm *)`, 오타 도구명 등)에 대한 경고가 `claude doctor` 앞부분에 나오지 않음(출력 앞 12줄만 확인). 시작 경고가 어디에 표시되는지는 확인하지 못함.
- 대화형 세션(권한 프롬프트, `/permissions`, `/status`)은 실행하지 않음.

## 확인하지 못한 것
- 대화형 UI 동작(`/permissions` 탭, 프롬프트 모양)은 실행하지 않고 문서 기준으로만 서술.
- sandboxing, managed-settings, auto-mode-config, security 문서는 읽지 않음(링크만).
- Windows 경로 정규화, PowerShell 규칙은 본문에서 다루지 않음.
