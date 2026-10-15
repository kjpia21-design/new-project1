# coding/35 코딩 없이 반복 파일 작업 자동화 (엑셀 합치기·파일 이름 정리)

작성: L1 · 확인일 2026-10-15. 공식 페이지는 curl로 한 페이지씩 열었다.

## 이 편의 위치
- 사무직 대상. 설치·로그인은 C12, 첫 실습(계획 모드, 승인 화면, CLAUDE.md)은 coding/06, 안전 습관·`/rewind`·권한 규칙은 coding/27, 모드·훅·CLAUDE.md는 C14가 다룬다. 35편은 "폴더 속 파일 작업"에 한정하고 겹치는 설명은 링크한다.
- 엑셀 합치기, 파일 이름 일괄 변경, CSV 정리 예시와 프롬프트는 이 사이트가 만든 예시이며 공식 문서의 예시가 아니다.

## 확인한 사실과 출처
- Checkpointing (https://code.claude.com/docs/en/checkpointing, 2026-10-15)
  - 턴을 시작하는 프롬프트마다 체크포인트 생성. 최근 100개 체크포인트의 파일 스냅샷 유지. 대화와 함께 저장되어 세션을 재개해도 `/rewind` 가능. 스냅샷은 마지막 저장 후 기본 약 30일 뒤 정리(cleanupPeriodDays로 조정).
  - `/rewind` 또는 입력창이 비었을 때 Esc 두 번으로 메뉴. 동작: Restore code and conversation / Restore conversation / Restore code / Summarize from here / Summarize up to here / Never mind. 코드 복원 선택지는 그 시점에 추적된 파일 변경이 있을 때만 나온다.
  - 한계: Bash 명령(`rm`, `mv`, `cp` 예시)으로 바뀐 파일은 추적·복원되지 않음. 파일 편집 도구로 바뀐 것만 추적. 서브에이전트 편집은 대부분 복원 안 됨. 세션 밖에서 바꾼 파일·동시 세션의 변경은 보통 기록되지 않음. 심볼릭·하드 링크 경로는 복원 건너뜀. "버전 관리(Git)를 대체하지 않는다."
  - => 파일 이름 변경은 보통 `mv` 같은 셸 명령이므로 `/rewind`로 안 돌아갈 수 있다. 그래서 실행 전 폴더 복사 백업이 필수라고 본문에 강조.
- Permission modes (https://code.claude.com/docs/en/permission-modes, 2026-10-15)
  - 모드 표: default(Manual) = 읽기만 묻지 않음 / acceptEdits = 읽기, 파일 편집, `mkdir`·`touch`·`mv`·`cp` 등 일반 파일시스템 명령 / plan = 읽기 중심, 계획 제안, 승인 전 편집 차단 / auto = 배경 안전 점검과 함께 모두 / dontAsk / bypassPermissions(격리된 컨테이너·VM 전용).
  - acceptEdits에서도 작업 폴더 밖 경로, 보호 경로 쓰기, 중요 경로(critical path) 대상 `rm`/`rmdir` 삭제, 그 밖의 Bash 명령은 여전히 묻는다. Shift+Tab으로 모드 전환, 시작 시 `claude --permission-mode <모드>`.
  - 규칙: deny 규칙은 모든 모드에서 차단. auto 모드는 안전을 보장하지 않으며 "방향을 신뢰하는 작업에" 쓰라고 안내.
  - 이 편은 초보자에게 Manual(기본)·plan 위주로 안내하고 auto/acceptEdits는 백업 후에만 쓰라고 한다. auto 시작 조건 등은 C14의 기존 설명을 따른다.
- Overview (https://code.claude.com/docs/en/overview, 2026-10-15): 터미널·IDE·데스크톱 앱·웹에서 사용. 설치 명령(Native install: macOS/Linux/WSL `curl -fsSL https://claude.ai/install.sh | bash`, Windows PowerShell `irm https://claude.ai/install.ps1 | iex`). 대부분의 표면은 Claude 구독 또는 Console 계정 필요. 설치는 C12에 맡기고 본문에 명령을 반복하지 않는다.
- coding/27 조사 노트(2026-10-14)의 quickstart·best-practices·permissions 확인 내용을 재사용(`Shift+Tab`, `claude -c`, `/clear`, `Read(./.env)` deny 규칙 등). 이번에 이 세 페이지를 다시 열지는 않았다.

## 확인하지 못한 것 / 단정하지 않은 것
- Claude Code가 .xlsx 파일을 직접 읽는지, 아니면 스크립트(예: 파이썬 라이브러리)를 만들어 처리하는지: 공식 문서에서 확인하지 못했다. 본문은 "방법은 Claude가 정하며, 필요한 프로그램 설치나 실행은 승인을 묻는다. 내 컴퓨터 환경에 따라 달라질 수 있다"로 처리했다.
- 엑셀 수식·서식·여러 시트의 보존 여부: 확인하지 못함. "결과 파일을 직접 열어 확인"을 안내.
- 한글 파일 이름·인코딩(CSV 한글 깨짐)의 일반적 동작: 공식 문서로 확인하지 못했다. 일반적인 주의로만 쓰고 단정하지 않았다.
- 윈도우에서 Claude가 어떤 셸 명령을 쓰는지는 환경마다 다르다(overview에 Git for Windows가 없으면 PowerShell을 쓴다는 설명은 있음).
- 원본 백업 방법(폴더 복사)은 일반 컴퓨터 사용 상식이며 공식 문서 인용이 아니다.

## 출처 목록
- https://code.claude.com/docs/en/checkpointing — 2026-10-15
- https://code.claude.com/docs/en/permission-modes — 2026-10-15
- https://code.claude.com/docs/en/overview — 2026-10-15
- https://code.claude.com/docs/en/quickstart, /best-practices, /permissions — 2026-10-14 (coding/27 노트)
