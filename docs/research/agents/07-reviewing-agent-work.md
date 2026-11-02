# agents/07 조사 노트 (에이전트 결과 검수)

확인일 2026-11-02. 한 페이지씩 curl로 열람.

## 출처
- https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
- https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide
- https://learn.chatgpt.com/docs/dots/controls.md , https://learn.chatgpt.com/docs/dots/tasks-and-memory.md
- https://support.google.com/gemini/answer/16596215
- 사이트 내: agents/05, agents/06, claude/c19 (사실 일치 확인)

## 확인한 사실
- Cowork 안전: 명령 하나하나를 검증하길 기대하지 말고 예상 밖 패턴(말하지 않은 파일·사이트, 범위 확대)을 감시, 이상하면 즉시 중지. 예약 작업은 매 실행 후 결과 확인(왼쪽 사이드바 Scheduled), 안 쓰면 일시 중지/삭제. 영구 삭제 전 항상 허락 요청. 고위험 상황은 사람 감독 권장. 전용 작업 폴더·백업 권장.
- Chrome 권한 가이드: 어떤 모드도 판단을 대체하지 못함. 돈·내 이름 메시지·중요 파일은 가까이서 검토하거나 Manual로.
- ChatGPT dots: Activity(진행·파일·결과), Scheduled(지시·시간·전달 위치). 실행 완료가 결과 달성/전달을 확인하지 않음. 초안 요청은 발송 권한이 아님. Pause는 주요 작업만, 멈춰도 완료된 행동은 되돌려지지 않음.
- Gemini 작업: 스레드 작업 패널(진행 칩)에서 단계 확인, Files에서 읽은/수정한 파일 확인. "can make mistakes", 오프라인 예약 실행은 멈추지 못할 수 있음. 일부 작업은 완료 전 확인 요구.

## 확인하지 못한 것
- Claude in Chrome 전용 활동 기록 화면(별도 문서 미열람). 표의 "사이드 패널에서 동작을 지켜봄"은 일반 서술.
- Gemini·ChatGPT 이외 제품(Muse·Grok Bot)의 결과 검수 문서는 이번에 다시 열지 않음(agents/05 기준일 2026-10-10 내용 참조).
- 표본 확인 기준·중요도 단계는 공식 문서가 아닌 사이트 권장(본문에 표시).
