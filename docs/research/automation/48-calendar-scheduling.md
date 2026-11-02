# automation/48 일정·회의 시간 잡기 조사 노트 (2026-11-02, W2)

## (a) 확인됨 (curl 기본 옵션, 한 페이지씩, 모두 200)
- https://support.claude.com/en/articles/10166901-use-google-workspace-connectors : Gmail·Calendar·Drive 커넥터는 Claude/Claude Desktop 모든 사용자 가능, Team·Enterprise는 Owner/Primary Owner가 먼저 활성화. Calendar: 일정·공유 캘린더 보기, 일정 생성·수정·삭제, 참석자 공통 가능 시간, 참석자 관리·초대 응답, 반복 회의. 기본적으로 동작마다 승인. 연결한 계정 데이터만, 기존 권한 반영, 최소 정보만 조회, 채팅 삭제 시 가져온 데이터 삭제, 커넥터 데이터로 모델 학습 안 함(단 개인용 플랜에서 학습 허용 시 복사·붙여넣은 내용은 개선에 쓰일 수 있음).
- https://support.google.com/gemini/answer/15305236?hl=en : Gemini 앱에서 캘린더 이벤트 생성·조회·수정·취소. Google Workspace 연결과 Keep Activity 켬 필요. 기본 캘린더에 생성(다른 캘린더 지정 가능), @Google Calendar 지정, Google Messages의 Gemini에서는 미지원, 환각·오래된 정보 경고, Google 캘린더 외 앱은 장소·설명 등 일부 수정 불가.
- https://support.google.com/gemini/answer/15229592?hl=en : Google Workspace 앱(Gmail, Docs, Drive, Tasks, Keep, Calendar) 연결, 같은 계정 로그인, 연결 앱 설정에서 해제.
- https://support.microsoft.com/en-us/outlook/welcome-to-copilot-in-outlook : 새 Outlook "Schedule with Copilot"으로 메일 스레드에서 회의 초대장 생성(제목·안건 자동, 스레드 첨부, 스레드 참여자가 참석자).

## (b) 확인하지 못함 / 글에서 주장하지 않음
- "Gemini in Google Calendar"(캘린더 화면 내 패널) 공식 페이지: support.google.com/calendar/answer/15114497·13145776 추정 주소는 404. 찾지 못해 다루지 않음.
- Microsoft "Create a meeting and agenda with Copilot in Outlook" 별도 문서와 Copilot 라이선스·가격: 읽지 않음.
- Gemini·Copilot 플랜별 제공 조건·가격: 확인 안 함. Gemini의 공통 가능 시간·반복 일정 지원 여부: 읽은 페이지에 설명 없음.
- 실제 계정에서 단계를 실행해 보지 않음.
