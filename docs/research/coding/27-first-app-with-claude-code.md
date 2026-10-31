# coding/27 코딩 몰라도 Claude Code로 첫 웹앱 만들기 (바이브 코딩)

작성: H4 · 확인일 2026-10-14. 공식 페이지는 curl로 한 페이지씩 열어 확인했다.

## 이 편의 위치
- 6편(`coding/06`)이 "빈 폴더 -> 회의 안내 한 장 페이지 -> 계획 모드 -> 승인 -> 브라우저 확인 -> CLAUDE.md"를 다룬다. 설치·로그인은 C12가 다룬다. 27편은 이를 반복하지 않고 링크한다.
- 27편의 차별점: 데이터가 움직이는 작은 앱(가계부), 단계적 요청(뼈대 -> 기능 -> 다듬기), 확인 요청 습관, 안전(권한·변경 검토·비밀정보·되돌리기), 공개는 8편으로 안내.
- "가계부 웹앱", 단계별 프롬프트 문구는 이 사이트가 만든 예시 과제이며 공식 문서의 예시가 아니다.

## 확인한 사실과 출처
- 퀵스타트: 시작은 `cd 프로젝트폴더` 후 `claude`. 처음 쓰면 로그인 안내. 터미널을 처음 쓰면 terminal guide를 먼저 보라고 안내. 승인을 묻는 변경은 Yes를 선택. `Shift+Tab`으로 세션의 권한 모드를 바꾼다. `claude -c`는 현재 폴더의 가장 최근 대화 이어가기, `claude -r`은 이전 대화 고르기. 로그인 가능 계정: Pro/Max/Team/Enterprise, Console 등. (https://code.claude.com/docs/en/quickstart)
- 모범 사례(best-practices):
  - "Claude가 스스로 확인할 방법(테스트·빌드·스크린샷)을 주라." 화면 변경은 스크린샷을 붙여 비교하게 하라는 예시가 있다. 성공 주장 대신 증거(실행한 명령, 결과)를 보여 달라고 하라.
  - 계획 모드: `Shift+Tab`으로 plan mode, 또는 `claude --permission-mode plan`. 변경이 한 문장으로 설명될 만큼 작으면 계획 생략 가능.
  - 구체적으로 요청: 파일을 가리키고 제약을 말하고 예시 패턴을 줘라.
  - 일찍 바로잡기: 같은 문제로 두 번 넘게 고쳤다면 `/clear` 후 더 구체적인 프롬프트로 다시 시작하라.
  - 체크포인트: 턴을 시작하는 프롬프트마다 체크포인트가 생긴다. `Esc` 두 번 또는 `/rewind`로 대화·코드·둘 다 복원. "Bash 명령이나 외부 프로세스로 바뀐 것은 체크포인트에 기록되지 않는다. git을 대체하지 않는다."
  - "검증할 수 없으면 내보내지 마라(If you can't verify it, don't ship it)."
  (https://code.claude.com/docs/en/best-practices)
- 권한(permissions): 규칙은 deny -> ask -> allow 순으로 평가되고 deny가 우선. 예시 `Read(./.env)`는 현재 폴더의 `.env` 읽기를 가리키는 규칙 문법. 설정 파일 예시는 `{"permissions": {"allow": [...], "deny": [...]}}` 형식이며 프로젝트 설정은 `.claude/settings.json`. "Yes, and don't ask again"을 고르면 규칙이 `.claude/settings.local.json`에 저장된다. `/permissions`로 규칙을 보고 관리. (https://code.claude.com/docs/en/permissions)
- 6편 연구 노트의 재확인 사항(권한 모드 기본값 auto 등)은 6편 본문과 `docs/research/coding/06-claude-code-start.md`를 따른다. 이번에 permission-modes 페이지를 다시 열지는 않았다.

## 확인하지 못한 것 / 단정하지 않은 것
- `file://`로 연 HTML에서 localStorage가 동작하는지는 브라우저별 동작이라 공식 출처로 확인하지 못했다. 본문에서 "브라우저마다 다를 수 있다"로 처리하고 Claude에게 확인을 맡기게 했다.
- Claude가 로컬 서버를 띄울 때 나오는 승인 문구의 정확한 표기. 화면 안내를 따르라고 썼다.
- `.env` deny 규칙이 모든 경로(예: Bash `cat`)를 막는지는 확인하지 못했다. 공식 문서에 deny 규칙이 Bash 호출의 다른 형태를 모두 막지는 않는다는 설명이 있어 "보안 경계가 아니다"로 안내한다. 가장 안전한 방법은 비밀정보를 폴더에 두지 않는 것.
- 퀵스타트 이후 새 화면 문구의 한국어 번역 여부(Claude Code UI는 영어로 확인).
- 공개(배포)는 8편에서 다루므로 이 편에서 직접 확인하지 않았다.

## 출처 목록
- https://code.claude.com/docs/en/quickstart — 2026-10-14
- https://code.claude.com/docs/en/best-practices — 2026-10-14
- https://code.claude.com/docs/en/permissions — 2026-10-14

## 2026-10-26 재점검
- quickstart, best-practices, permissions(저장 파일로 키워드 확인), checkpointing 재열람. 기존 서술과 일치: Pro 이상 또는 Console, Esc 두 번·/rewind 메뉴(대화만·코드만·둘 다), /permissions 규칙 출처 표시, Bash 규칙의 한계(인자 변형 우회). 변경 없음.
- 새로 확인(미반영): 체크포인트는 세션당 최근 100개, 기본 약 30일 후 스냅샷 삭제(35편에 반영). best-practices에 /goal, Stop 훅 등 검증 장치 설명 추가됨.
