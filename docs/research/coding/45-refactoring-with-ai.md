# 조사 노트 — coding 45: AI로 코드 안전하게 리팩터링하기

조사일: 2026-11-04 / 조사: B6. 공식 페이지를 기본 옵션 `curl -sL`로 한 페이지씩 받아(헤더·UA 변경 없음) 텍스트로 변환해 읽음. 세 페이지 모두 내용 수신 성공(HTTP 상태 코드는 따로 기록하지 않음).

## 확인한 공식 URL과 사실
### https://code.claude.com/docs/en/common-workflows
- "Refactor code" 레시피 4단계: `find deprecated API usage in our codebase` → `suggest how to refactor utils.js to use modern JavaScript features` → `refactor utils.js to use ES2024 features while maintaining the same behavior` → `run tests for the refactored code`. 팁: 현대적 방식의 이점 설명 요청, 필요 시 하위 호환 유지 요청, "Do refactoring in small, testable increments". 코드베이스 전체 언어 이식은 Anthropic 블로그 글 안내(읽지 않음).
- "Plan before editing": 디스크에 닿기 전에 검토하려면 plan mode. Claude가 파일을 읽고 계획을 제안, 승인 전 수정 없음. 상태 표시줄 "plan mode on". `claude --permission-mode plan`, 세션 중 Shift+Tab. 계획을 텍스트 편집기에서 고치는 흐름은 Plan mode 페이지(읽지 않음).
- "Work with tests" 레시피 존재(자세히 따라 하지 않음).
### https://code.claude.com/docs/en/best-practices
- "Give Claude a check to run": 확인 수단이 없으면 "looks done"뿐이고 사용자가 테스트 스위트가 됨. 통과/실패로 답하는 것(테스트 파일, 빌드 종료 코드, 린터 등)을 주고, 명령과 출력을 증거로 요청. `/code-review`는 대화를 보지 못한 새 서브에이전트가 diff 리뷰. `/verify`, `/goal`, Stop 훅도 언급(본문 미사용).
### https://code.claude.com/docs/en/checkpointing
- Bash 명령으로만 바뀐 파일은 추적 안 됨, 버전 관리(Git) 사용. 체크포인트는 세션 단위 복구용, 커밋·장기 이력은 Git. (`/rewind` 기본 사용법은 44편 조사 노트와 동일 페이지.)

## 로컬 시험
- 실행하지 않음. Claude Code, git, 테스트 명령 모두 시험하지 않았고 본문에 명시.

## 확인하지 못한 것 / 우리 조언(공식 문구 아님)
- "테스트 먼저 돌리기", 테스트가 없으면 먼저 추가, 테스트 삭제·약화 금지, 단계별 커밋, 동작 변경과 분리, 리뷰 프롬프트는 우리 조언.
- `git switch -c`, `git revert`, `git restore`, `git commit -am`, 브랜치 삭제는 일반 Git 사용법(Claude Code 문서 출처 아님).
- Plan mode 페이지(승인 흐름, 계획 편집), Work with tests 세부, 대규모 마이그레이션 블로그 글은 읽지 않음.
- 최신 버전과의 일치 여부, 단축키 변동 가능성.
