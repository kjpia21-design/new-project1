# 조사 노트 — coding 46: AI로 README·코드 문서 쓰기

조사일: 2026-11-05 / 조사: D1. 공식 페이지를 기본 옵션 `curl -sSL`로 한 페이지씩 받아(헤더·UA 변경 없음) 텍스트로 변환해 읽음. 두 페이지 모두 HTTP 200.

## 확인한 공식 URL과 사실
### https://code.claude.com/docs/en/common-workflows
- "Handle documentation" 레시피 4단계: `find functions without proper JSDoc comments in the auth module` → `add JSDoc comments to the undocumented functions in auth.js` → `improve the generated documentation with more context and examples` → `check if the documentation follows our project standards`.
- 팁: 원하는 문서 스타일(JSDoc, docstrings 등) 지정, 문서에 예시 요청, 공개 API·인터페이스·복잡한 로직 문서 요청.
### https://code.claude.com/docs/en/best-practices
- 증거 요청: 실행한 명령과 출력(또는 스크린샷)을 달라고 할 것. "All tests pass" 한마디는 알려 주는 게 거의 없음.
- `/code-review`는 대화를 보지 못한 새 서브에이전트가 diff를 리뷰.
- "Limit access with permission rules": 예시 `.claude/settings.json`의 `deny: ["Read(./.env)", "Read(./.env.local)", "Read(./secrets/**)"]`. deny 규칙은 auto·bypassPermissions 포함 모든 권한 모드에서 유지, 저장하면 `.env` 내용을 물어도 Read 도구와 `cat .env` 모두 실패한다고 서술.

## 로컬 시험
- 실행하지 않음. Claude Code, git, deny 규칙 모두 시험하지 않았고 본문에 명시.

## 확인하지 못한 것 / 우리 조언(공식 문구 아님)
- README 초안 프롬프트, 명령 출처 표기·TODO 규칙, 확인 표(5단계), 가짜 예시 값 사용, 문서 전용 커밋, 키 노출 시 교체 조언, PR 체크리스트 제안은 우리 조언.
- `git switch -c`, `git diff`, `git restore`, `git add`, `git commit`은 일반 Git 사용법.
- 문서 전용 변경에 대한 별도 공식 README 가이드는 찾지 않음(확인하지 못함). 키 노출 시 교체 절차는 각 서비스 안내를 따름(읽지 않음).
- 최신 버전과의 일치 여부, 명령 변동 가능성.
