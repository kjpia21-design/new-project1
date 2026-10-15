# 작업 명세 — 16단계: 튜토리얼 6편 추가 (4차)

작성: 기획 담당 · 구현: 코딩 에이전트 3명 (L1~L3, 각 2편)

규칙은 `docs/specs/step13-more-tutorials.md`의 "공통 규칙"을 그대로 따른다. 날짜는 `2026-10-15`로 쓴다. 제목에는 공식 문서로 확인한 서비스만 넣는다.

## 추가할 튜토리얼

| 담당 | 파일 | 제목(안) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- |
| L1 | `coding/35-file-automation.mdx` | 코딩 없이 반복 파일 작업 자동화: Claude Code로 엑셀 합치기·파일 이름 정리 | beginner | code.claude.com/docs |
| L1 | `coding/36-openai-codex.mdx` | OpenAI Codex 시작하기: 코딩 에이전트 비교 관점에서 | practical | developers.openai.com (Codex 문서) |
| L2 | `automation/37-meeting-ai.mdx` | 온라인 회의 AI 비교: Google Meet·Zoom·Teams의 회의록·요약 기능 | practical | support.google.com/meet, support.zoom.com, support.microsoft.com |
| L2 | `automation/38-email-ai.mdx` | 메일함 정리를 AI로: Gmail Gemini·Outlook Copilot·Claude 커넥터 | practical | support.google.com/mail, support.microsoft.com, support.claude.com |
| L3 | `basics/10-ai-scams-deepfakes.mdx` | AI 사기·딥페이크 피하는 법: 목소리 복제 보이스피싱부터 가짜 영상까지 | beginner | 경찰청·금융감독원·KISA(보호나라) 등 공식 안내, 각 플랫폼 신고 도움말 |
| L3 | `chat/39-personal-assistant.mdx` | AI를 개인 비서처럼: 일정·할 일·여행 계획 짜기 | beginner | support.claude.com, support.google.com/gemini, learn.chatgpt.com |

## 편별 지침

- **L1 / 35**
  - 사무직이 대상이다. 예시는 폴더 속 여러 엑셀을 하나로 합치기, 파일 이름 일괄 변경, CSV 정리 등이다.
  - **실행 전 백업**을 하고, 승인 화면과 `/rewind`를 쓰는 안전 수칙을 강조한다.
  - coding/06, coding/27, C14와 겹치는 부분은 해당 편 링크로 대신한다.
- **L1 / 36**
  - Codex의 제공 형태, 플랜, 설치 방법은 developers.openai.com에서 확인된 것만 쓴다.
  - Claude Code·Cursor(coding/06, 09)와 비교할 때는 사실만 표로 정리하고, 품질 순위는 쓰지 않는다.
- **L2 / 37**
  - 각 서비스 기능의 이름, 필요한 플랜, 한국어 지원은 공식 도움말로 확인한다.
  - 녹음·녹화 동의와 같은 법적·예절 주의를 넣는다. 공식 근거가 없으면 일반적인 권고로만 쓴다.
  - media/14(녹음 정리)와 연결한다.
- **L2 / 38**
  - 메일 요약, 답장 초안, 분류 기능을 다룬다.
  - 개인정보·기밀 주의를 넣는다(basics/05 연결).
  - Claude 커넥터는 C7과 연결한다.
- **L3 / basics/10**
  - **한국 공식 기관 안내를 최우선으로 쓴다.** 예방 수칙과 신고처(예: 112, 1332)는 공식 페이지로 확인한 것만 쓴다.
  - 겁주는 말투는 피하고, 실천할 수 있는 체크리스트를 넣는다(가족 암호 정하기 등은 공식 안내에 있을 때만 출처와 함께 쓴다).
- **L3 / chat/39**
  - 입문자 대상이다. 캘린더·메모 연동 같은 기능은 공식 문서로 확인된 범위만 쓴다.
  - 개인정보 주의를 넣는다.
  - basics/06(생활 속 AI 활용)과 겹치지 않게 심화 사례 중심으로 쓴다.

## 공통

- 수정은 자기 파일과 조사 노트(`docs/research/<분야>/`)에만 한다.
- 빌드: `npx astro build --outDir /tmp/build-<담당>`. 공유 캐시 충돌로 실패하면 잠시 기다렸다가 다시 시도한다.
- git 커밋·푸시는 하지 않는다.
- 보고 내용: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
