# 38. Claude Code로 CSV·엑셀 데이터 분석 (2026-10-31 조사, P2)

방법: curl로 공식 페이지를 한 번에 한 장씩 열람(텍스트 추출 후 필요한 부분만 읽음). 사이트 내 coding/35, chat/03과 겹치지 않게 "스크립트 작성→실행→차트·보고서" 흐름에 집중.

## 확인한 출처와 사실
- https://code.claude.com/docs/en/best-practices — "Give Claude a check to run": 통과/실패로 나오는 검사(테스트, 빌드 종료 코드, 린터, 출력 diff 스크립트 등)를 주면 스스로 고침; 증거(실행한 명령과 출력)를 요구하라, "all tests pass"만으로는 정보가 적다; 실패가 쌓이면 `/clear` 후 구체적으로 다시.
- https://code.claude.com/docs/en/permission-modes — `Shift+Tab`으로 모드 전환(CLI); plan mode는 승인 전 소스를 편집하지 않고 조사·계획; acceptEdits는 편집 자동 승인.
- https://code.claude.com/docs/en/checkpointing — Bash 명령만으로 바뀐 파일은 추적되지 않음(되돌리려면 Git 등); 외부 변경 미추적; Git 같은 버전 관리 대체 아님.
- https://code.claude.com/docs/en/headless — `claude -p "<prompt>"`로 비대화형 실행; 종료 코드 0/비0; `--output-format` 등.
- https://code.claude.com/docs/en/common-workflows — "Pipe Claude into scripts": 표준 입출력이 유닉스 도구처럼 동작, 예 `git log --oneline -20 | claude -p "summarize these recent commits"`.
- https://code.claude.com/docs/en/data-usage — Free/Pro/Max/Ultra: 모델 개선 허용 시 5년, 비허용 시 30일 보관, 설정 위치 claude.ai/settings/data-privacy-controls; Team/Enterprise/API는 상업용 약관(표준 30일); 로컬 세션 기록 ~/.claude/projects/ 에 기본 30일.

## 확인하지 못한 것 / 실행 여부
- Claude Code가 .xlsx를 읽고 쓰는 방법, 사용 가능한 분석·차트 라이브러리: 읽은 공식 문서에 없음. 본문에 "확인하지 못함"으로 표기하고 CSV 내보내기를 우회로로 제안(공식 근거 아님, 실용 조언으로 표현).
- 한글 CSV 인코딩 원인: 공식 문서 없음.
- 이 편의 프롬프트·예시 CSV는 사이트가 만든 예시이며 Claude Code로 실제 실행하지 않았음(본문에 명시).
- `-p` 파이프 예시는 공식 문서 형태만 인용, 실행하지 않음.
