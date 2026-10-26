# coding/06 Claude Code 시작하기 (비개발자 첫 결과물)

## 핵심 사실
- 설치 명령, 표면(터미널·VS Code·JetBrains·데스크톱·웹), 로그인 동작은 `docs/research/claude/C12-claude-code-overview.md`를 재사용한다. 이번에 overview 원문을 다시 읽어 확인했다. (출처: https://code.claude.com/docs/en/overview)
- 터미널을 처음 쓰는 사람을 위한 공식 "terminal guide"가 있다(터미널 여는 법, 명령 붙여넣기). overview에서 링크로만 확인했고 본문은 읽지 않았다. (출처: https://code.claude.com/docs/en/overview)
- 데스크톱 앱은 Code 탭으로 시작하고 CLI 별도 설치가 필요 없으며 유료 구독이 필요하다. 변경 내용을 시각적으로 검토할 수 있다. (출처: 동일)
- 웹 표면(claude.ai/code)은 로컬 설정 없이 쓴다. 기존 GitHub 저장소가 필요하다. (출처: https://code.claude.com/docs/en/web-quickstart)
- 권한 모드: 기본은 변경 전 승인을 묻는다. Shift+Tab으로 전환. 플랜 모드는 읽기만 하며 계획을 제안한다. (출처: C14 연구 파일 -> https://code.claude.com/docs/en/permission-modes)
- `/init`으로 CLAUDE.md 생성, `/rewind`로 체크포인트 되돌리기, `/resume`·`claude -c`로 대화 이어가기. (출처: https://code.claude.com/docs/en/commands, C14 연구 파일)
- Claude Code 사용은 Pro 이상 유료 플랜 필요(Free 불가, 2026-10-10 기준). (출처: https://claude.com/pricing, C12 연구 파일)

## 따라하기 절차 (비개발자용 첫 결과물: 빈 폴더에서 "회의 일정 안내 웹페이지" 만들기)
1. 빈 폴더를 만들고 터미널에서 이동 -> `claude` 실행(설치는 C12 참조).
2. 플랜 모드(Shift+Tab 또는 `claude --permission-mode plan`)에서 만들 것의 계획을 먼저 받는다.
3. 계획을 승인하고 파일 생성을 요청 -> 승인 화면에서 변경 내용을 읽고 Yes.
4. 브라우저로 만든 `index.html`을 열어 확인, 수정 요청 반복.
5. `/init` 또는 직접 요청으로 CLAUDE.md 작성, `/rewind`로 되돌리는 법 확인.
(절차의 모든 요소는 위 공식 문서에 있는 기능이며, "회의 일정 안내 페이지"는 이 사이트가 만든 예시 과제다.)

## 2026-10-12 재확인 변경
- permission-modes: 터미널·VS Code 기본 시작 모드는 v2.1.283 이상에서 auto. 기본 확인형 모드의 표기는 Manual(설정값 `default`, `manual` 별칭). Shift+Tab 순환은 auto → manual → acceptEdits → plan. 플랜 승인 선택지: "Yes, and use auto mode" / "Yes, manually approve edits" / "No, keep planning"; `/plan` 접두어로도 진입. (출처: https://code.claude.com/docs/en/permission-modes)
- terminal guide는 overview에서 재확인(링크 존재). 가격표 재확인: Free는 Claude Code 미포함, Pro $20/월(연간 결제 시 월 $17), Max $100~. (출처: https://claude.com/pricing)

## 확인 못 함
- quickstart 본문(https://code.claude.com/docs/en/quickstart)은 직접 읽지 않았다.
- terminal guide 본문은 읽지 않았다.
- 승인 화면의 정확한 버튼 문구는 버전마다 다를 수 있다 -> "화면 안내에 따르세요".

## 출처 목록
- https://code.claude.com/docs/en/overview — 확인일 2026-10-10
- https://code.claude.com/docs/en/web-quickstart — 확인일 2026-10-10
- https://code.claude.com/docs/en/commands, permission-modes (C12/C14 연구 파일 경유)
- https://claude.com/pricing (C12 연구 파일 경유)

## 2026-10-26 재점검
- overview, quickstart, commands, permission-modes, claude.com/pricing 재열람(permission-modes는 앞 10만 자만 읽음). 기존 서술과 일치: Pro·Max·Team·Enterprise 또는 Console 계정(Free는 Claude Code 미포함), v2.1.283 이상 터미널·VS Code 기본 시작 모드 auto, 계획 승인 선택지 3종, 설치 명령. 변경 없음. lastVerified만 갱신.
- 새로 확인(본문 미반영): overview에 "cloud scheduled tasks(예전 이름 routines)" 표기.
