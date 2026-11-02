# C23. Google Workspace 커넥터로 일하기 (조사 노트, 2026-11-02)

## 확인한 출처 (한 페이지씩 curl)
- https://support.claude.com/en/articles/10166901-use-google-workspace-connectors (2026-11-02, "Updated this week")
- https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities (2026-11-02)

## 확인한 사실
- Gmail/Calendar/Drive 커넥터는 Claude와 Claude Desktop의 모든 사용자에게 제공. Team/Enterprise는 Owner/Primary Owner가 조직에서 먼저 켜야 개인 인증 가능.
- Gmail: 자연어 검색·읽기, 초안, 전송·답장·전달(기본 승인), 첨부 메타데이터만(내용 불가), 라벨·스레드 관리, 저장 초안 목록. Calendar: 일정·공유 캘린더 조회, 생성·수정·삭제, 공통 가능 시간, 참석자·초대 응답, 반복 회의. Drive: Docs 검색, Sheets/Slides/PDF/이미지/MS Office 읽기(텍스트만, 삽입 이미지 미처리), 공유·이동·휴지통(기본 승인), 업로드(자동 변환 옵션), 폴더 생성, 권한·최근 변경, 생성 파일 저장(코드 실행·파일 생성 필요).
- Docs/Sheets/Slides: 별도 커넥터, 채팅 옆 창에서 실시간 편집·새 파일 생성·Docs 댓글/제안 읽기. 웹 Chrome 또는 내장 브라우저를 켠 Claude Desktop에서 동작; 안 되면 "Open in Google". "Google"을 명시하지 않으면 로컬 파일 생성.
- 드라이브 파일 추가: + > Add from Google Drive. 프로젝트는 비공개 프로젝트 Files에서만(공유 프로젝트는 비활성). 컨텍스트 창 한도 내 여러 파일, Docs는 최신 버전과 동기화.
- 개인정보: 연결한 계정 데이터만, 권한 그대로, 요청 시에만 최소 정보, 채팅과 함께 저장(채팅 삭제 시 삭제), 저장·전송 시 암호화, 커넥터 데이터로 학습 안 함(단 소비자 계정에서 학습 허용 시 복사·붙여넣은 내용 등은 개선에 쓰일 수 있다는 주석).
- 제한: Slides에 차트 추가 불가, Slides 편집이 실시간 반영 안 될 수 있음, 일부 고급 Gmail 필터 미지원, 복잡한 질의는 다중 API 호출, Google API 할당량, 큰 메일함은 느릴 수 있음.
- 문제 해결: Customize > Connectors > Disconnect 후 재인증; 그래도 안 되면 myaccount.google.com/connections에서 "Delete all connections". 관리자: admin.google.com > Security > Access and data control > API controls > Manage third-party app access > Claude를 Trusted, 약 15분. 실시간 편집도 동일 앱.
- Owner는 Organization settings > Connectors에서 Google Workspace 커넥터를 조직 단위로 끌 수 있음. 도구별 Always allow / Needs approval / Blocked 설정(11176164).

## 확인하지 못한 것
- 플랜별 차이(문서는 "모든 사용자"만 기재). 한국 제공 여부는 별도 기재 없음.
- 도움말에 이전 C7이 쓰던 "Docs/Sheets/Slides (beta)" 표기는 이번 페이지에서 찾지 못함(본문에 beta라 쓰지 않음).
- 계정별 정보는 기재하지 않음.
