# Gmail·캘린더 아침 브리핑 (Claude 커넥터 + 루틴)

Anthropic 쪽 사실은 기존 조사 노트를 재사용한다(spec 규정).

## 핵심 사실
- Gmail 커넥터: 검색·읽기, 초안 작성, 전송·답장·전달, 라벨 관리. 첨부 파일 내용은 볼 수 없다. Calendar 커넥터: 일정 조회·생성·수정·삭제, 공통 가능 시간 찾기. (출처: https://support.claude.com/en/articles/10166901-use-google-workspace-connectors , docs/research/claude/C07-connectors.md)
- 전송·답장·전달·공유·이동·삭제 전에는 기본적으로 사용자 승인을 묻는다. (출처: 동일)
- Claude는 각 서비스에서 내 권한을 상속한다. 연결: 입력창 + > Connectors. 대화마다 켜고 끈다. (출처: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)
- 루틴(Routines, 리서치 프리뷰): 프롬프트+저장소+커넥터를 저장해 클라우드에서 자동 실행. 스케줄(매시간/매일/평일/주간/1회) 가능. 스케줄 최소 간격 1시간. 정각 실행은 몇 분 늦을 수 있어 분을 어긋나게 권고. 전체 커넥터가 기본 포함되므로 불필요한 것은 제거. 실행은 승인 없이 자율 동작. Pro/Max/Team/Enterprise. claude.ai/code/routines, 데스크톱 앱, CLI `/schedule`. (출처: https://code.claude.com/docs/en/routines , docs/research/claude/C13-claude-code-cloud.md)
- 루틴 사용량은 구독 사용량을 소모한다. (출처: 동일)
- 루틴은 개인 계정 소유, 로컬 `claude mcp add` 서버는 루틴에서 못 쓰고 claude.ai에 커넥터로 추가해야 한다. (출처: https://code.claude.com/docs/en/mcp , routines)
- 프롬프트 인젝션: 메일 본문에 숨은 지시 주의. 필요 없는 도구는 끈다. (출처: https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)

## 따라하기 절차
1. Gmail·Calendar 커넥터 연결. 2. 읽기 전용 브리핑 프롬프트로 수동 실행. 3. 프롬프트 다듬기(기준·형식). 4. 루틴으로 저장해 평일 아침 예약(루틴 프롬프트는 "읽기만, 보내기 금지" 명시). 5. 결과 확인.

## 확인 못 함
- 루틴 화면의 "커넥터 선택" UI 정확한 문구, 루틴 결과가 어디(메일/알림)로 전달되는지의 세부. 루틴이 실행 후 결과를 보는 위치는 "세션 기록"으로 안내하되 정확 문구는 도움말 확인.
- Gmail/Calendar 커넥터가 루틴에서 쓰이는지 개별 확인은 routines 문서의 "커넥터 포함" 설명에 의존.

## 출처 목록
- https://support.claude.com/en/articles/10166901-use-google-workspace-connectors
- https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
- https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp
- https://code.claude.com/docs/en/routines
- https://code.claude.com/docs/en/mcp
