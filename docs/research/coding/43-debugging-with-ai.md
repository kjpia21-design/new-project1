# 조사 노트 — coding 43: AI로 오류 원인 찾고 고치기

조사일: 2026-11-02 / 조사: Z3. 공식 페이지를 기본 옵션 `curl -sS -L`로 한 페이지씩 받아(헤더·UA 변경 없음) 텍스트로 변환해 읽음. 모두 HTTP 200.

## 확인한 공식 URL과 사실
### https://code.claude.com/docs/en/common-workflows
- "Fix bugs efficiently": 오류 메시지를 만났을 때 1) Claude에게 오류 공유("I'm seeing an error when I run npm test"), 2) 수정 방안 요청("suggest a few ways to fix the @ts-ignore in user.ts"), 3) 적용("update user.ts to add the null check you suggested").
- 팁: 문제를 재현하고 스택 트레이스를 얻는 명령을 알려 줄 것, 재현 단계를 적을 것, 간헐적인지 일관적인지 알릴 것.
- "Plan before editing": plan mode는 파일을 읽고 계획을 제안하되 승인 전에는 수정하지 않음. 상태 표시줄에 "plan mode on". 시작은 `claude --permission-mode plan`.
- "Work with images": 이미지 끌어다 놓기, 복사 후 `Ctrl+V`로 붙여 넣기(Windows·WSL은 Alt+V 언급, 페이지 문구가 일부 잘려 정확한 플랫폼별 키는 본문에 쓰지 않음). 예시 프롬프트 "Here's a screenshot of the error. What's causing it?"
### https://code.claude.com/docs/en/best-practices
- 구체적 프롬프트: 파일, 증상, "고쳐졌다"의 기준을 미리. 예: "users report login fails after the session times out. look at token refresh in src/auth/, write a failing test that reproduces it, then fix it".
- 입력 전달: `@` 경로로 파일 포함, 이미지 붙여 넣기, `cat error.log | claude -p "what's going on here"`.
- "Give Claude a check to run": 통과/실패 확인 수단(테스트 파일, 빌드 종료 코드, 린터 등). 프롬프트로 요청하거나 `/goal`, Stop 훅(본문에서 다루지 않음). 증거(실행한 명령과 출력)를 요청. `/verify`는 본문에서 다루지 않음.
- `/code-review`는 대화를 보지 못한 새 서브에이전트로 diff를 리뷰.
- 조종: `Esc` 중단(작업 유지), `/rewind` 또는 빈 프롬프트에서 `Esc` 두 번(코드·대화·둘 다 되돌리기), 두 번 교정 실패 후 `/clear`. `/effort high`·`xhigh`는 놓치기 쉬운 경우(남이 쓴 코드의 버그, 불안정한 테스트 등)에 사용, 시간·토큰 더 듦.
- permissions.deny 예시(`Read(./.env)`, `Read(./.env.local)`, `Read(./secrets/**)`)와 "Read 규칙이 `cat .env`도 막는다", 규칙은 의도가 아닌 도구 호출에 맞춘다는 한계 언급(한계의 나머지 상세는 읽지 않음).

## 로컬 시험
- 실행하지 않음. Claude Code 실행, 테스트 실행, 프롬프트 효과 모두 시험하지 않았고 본문에 명시. TypeError 예시와 프롬프트 문구는 우리가 만든 예시(공식 예시 아님).

## 확인하지 못한 것
- 기본 권한 모드에서 파일 수정 시 승인 요청이 뜨는 정확한 동작(권한 페이지는 이번에 읽지 않아 본문에 단정하지 않음).
- `Ctrl+V` 등 이미지 붙여 넣기의 플랫폼별 세부 키, 터미널별 지원.
- 디버깅 전용 공식 페이지(예: 오류 진단/문제 해결 문서)는 읽지 않음. `/debug` 등 별도 명령의 존재 여부는 확인하지 않음.
- `permissions.deny`의 우회 가능한 한계 전체, 명령의 최신 버전 일치.
- "원인을 숨기지 말라", 회귀 테스트 정의는 일반 개발 상식에 기반한 우리 조언이며 공식 문구가 아님.
