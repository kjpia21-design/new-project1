# 조사 노트 — coding 37: Claude Code 훅

조사일: 2026-10-31 / 조사: N2. code.claude.com/docs 두 페이지를 Accept: text/markdown으로 한 번씩 curl.

## 확인한 사실과 출처
### https://code.claude.com/docs/en/hooks-guide
- 훅은 사용자 정의 셸 명령, 라이프사이클 시점에 자동 실행. 유형: command(대부분), http, mcp_tool, prompt, agent(실험적).
- 이벤트 표: SessionStart, Setup, UserPromptSubmit, UserPromptExpansion, PreToolUse(차단 가능), PermissionRequest, PermissionDenied, PostToolUse, PostToolUseFailure, PostToolBatch, Notification, MessageDisplay, SubagentStart/Stop, TaskCreated/Completed, Stop, StopFailure, TeammateIdle, InstructionsLoaded, ConfigChange, CwdChanged, DirectoryAdded, FileChanged, WorktreeCreate/Remove, PreCompact/PostCompact, PreModelSwitch/PostModelSwitch, Elicitation/ElicitationResult, SessionEnd. (본문에는 대표 이벤트만 수록)
- 위치 표: ~/.claude/settings.json, .claude/settings.json, .claude/settings.local.json, 관리형 정책, 플러그인 hooks/hooks.json, 스킬·서브에이전트 frontmatter. disableAllHooks.
- 예시: Notification(osascript), PostToolUse Edit|Write + jq + prettier, PreToolUse 보호 파일 스크립트(exit 2, chmod +x, $CLAUDE_PROJECT_DIR), Bash 명령 차단 스크립트(stderr+exit 2).
- 입력은 stdin JSON(session_id, cwd, hook_event_name, tool_name, tool_input). 종료 코드 0/2/기타, JSON permissionDecision(deny/ask/allow/defer). exit 0은 승인이 아님. deny는 bypassPermissions에서도 유지.
- 제한: 타임아웃 command/http/mcp_tool 10분(UserPromptSubmit 30초), prompt 30초, agent 60초. PostToolUse는 되돌릴 수 없음. Stop 훅은 연속 8회 차단 시 무시(stop_hook_active). 성공 시 대화에 표시 없음 → Ctrl+O, /hooks, --debug-file.
- 매처: 대소문자 구분, `Edit|Write`, Bash 경유 파일 변경은 못 잡음(FileChanged/Stop 권고).
### https://code.claude.com/docs/en/hooks (Security considerations 절만 읽음)
- 명령 훅은 사용자 전체 권한으로 실행. 대화형은 작업 공간 신뢰 수락 전 설정 파일 훅 보류. -p/SDK는 대화상자 없이 신뢰로 간주 → 저장소 훅이 실행됨; --bare 또는 --settings '{"disableAllHooks": true}' 권고. 모범 사례: 입력 검증, 변수 따옴표, 경로 탐색(..) 차단, 절대 경로, 민감 파일 건너뛰기.

## 로컬 검증
- block-risky.sh 논리를 샘플 JSON 파이프로 시험: `rm -rf build` -> stderr 메시지 + exit 2, `ls` -> exit 0. Claude Code 자체는 실행하지 않음. protect-files.sh와 포맷터 훅은 공식 예시 그대로(미실행).

## 확인하지 못한 것
- 훅 레퍼런스 전체(약 28만 자) 중 보안 절 외에는 읽지 않음. 이벤트별 exit 2 동작 표, 비동기 훅, MCP 도구 훅은 본문에서 링크만 함.
- Linux/Windows 알림 명령(가이드에 있으나 본문에 옮기지 않음).
