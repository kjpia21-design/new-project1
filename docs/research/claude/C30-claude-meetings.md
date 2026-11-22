# C30. Claude Meetings (조사 노트, 2026-11-22)

## 확인한 출처 (curl 기본 옵션 -L, 한 페이지씩, 모두 200)
- https://support.claude.com/en/articles/18325154-use-claude-meetings (본문 전체 추출해 읽음)
- https://support.claude.com/en/articles/12138966-release-notes (2026-11-12 항목 "Add Claude to your meetings"만 확인)

## 확인한 사실
- 베타, Team·Enterprise 플랜, Claude와 Claude Desktop에서 제공. 제로 데이터 보관(ZDR), HIPAA-ready 구성, 고객 관리 암호화 키(CMEK) 조직 등 일부 조직은 베타 중 사용 불가.
- 기본값: Team은 켜짐(Owner가 끌 수 있음), Enterprise는 Owner가 전체 또는 일부 조직에 켬(일부는 사용자 지정 역할).
- 추가 방법: Claude의 Meetings > Google Calendar 연결(Owner가 조직에서 Google Calendar를 먼저 켜야 함) > 일정 선택 > "Add Claude". 자동 참여는 Settings > Capabilities > Meetings > Auto-join(모든 회의 또는 일대일 제외 모든 회의). Owner는 개인 자동 참여를 설정할 수 없음.
- 회의 전 안내: "Before you add Claude or turn on auto-join, make sure everyone on your call is okay with being transcribed."
- 호스트가 거절하면 누가 다시 추가하기 전까지 그 통화에 재시도하지 않음.
- 통화 중: "Claude"라고 부르거나 Meet 채팅에 입력, 기본 답변은 Meet 채팅에 글로. "Claude, make a doc/whiteboard" 가능, 아티팩트 종류 제한 없음, 회의 페이지에 첨부. 연결된 도구(예: Slack 메시지)는 각 사람의 권한으로, 처음 묻고 이후 승인 유지(다만 음성 요청은 현재 매번 확인). 상태는 통화 타일에서 확인. 일시정지는 "듣기 중지" 요청 또는 회의 페이지, 재개는 회의 페이지. 나가기는 요청 또는 "Remove Claude". 최대 8시간 체류, 떠나기 전 경고.
- Meet 채팅에 올린 내용은 통화 전원에게 보임. 회의 페이지의 Claude 채팅은 조직 내부용이라 외부 게스트에게 안 보임.
- 통화 후: 요약·액션 아이템·전사·만든 것이 회의 페이지에. 초대에 있는 조직 구성원은 내용을 보고 Claude가 만든 것을 편집, 회의 페이지는 조직 내 공유 가능, 회의 요약 이메일 수신. 일반 대화에서 접근 가능한 과거 회의 질문 가능.
- 외부 게스트: Team은 기본 허용(Owner가 끌 수 있음), Enterprise는 Owner가 먼저 허용해야 함. 불허 시 외부인이 초대되면 참여하지 않고, 중간에 외부인(다른 회사 노트테이커 봇 포함)이 들어오면 나감. 허용 시 듣고 기록하며 통화 채팅에 고지는 올리지만 답하지 않음, 게스트 발언은 노트·전사에 포함, 게스트는 회의 페이지·이메일을 못 받음. 개인별 "Meetings with external guests" 설정 있음.
- Owner 관리: Organization settings > Products > Claude Meetings (beta). Claude Meetings(끔/역할별/전체), Meetings with external guests(내부만/허용), Members' connectors in meetings. Enterprise는 사용자 지정 역할 권한으로도 제어.
- 개인정보: 참가자로 표시되고 통화 채팅에 고지 게시. 전사, 요약, 화면 설명을 저장하며 오디오는 저장하지 않음.
- 비용: 노트·전사·연결 도구를 쓰지 않는 답변은 Team·Enterprise에 포함. 회의 중 만든 문서·화이트보드는 2027-02-10까지 무료. 연결 도구 사용은 본인 사용량에 포함되며 조직에 요금이 발생할 수 있음.

## 확인하지 못한 것
- 직접 회의에 넣어 실행하지 않음. 메뉴 이름은 공식 문서 기준.
- Google Meet 외 Zoom·Teams 지원 여부(문서는 Google Meet만 언급), 지원 언어·한국어 품질, 최대 참가자 수, 전사·요약의 보관 기간과 삭제 방법, 모바일 지원, 연결 도구 사용량의 구체적 요금, 무료 기간 이후 문서·화이트보드 요금은 읽은 페이지에 없음.
- 회의 녹음·기록 동의에 관한 지역별 법규는 조사하지 않음(법률 조언 아님).
- 무료 기간 종료일은 문서 기재(2027-02-10) 그대로.
