# coding/09 Cursor로 기존 코드 이해하고 고치기

## 조사 한계 (중요)
이 환경의 외부 접속 제한으로 cursor.com, docs.cursor.com에 WebFetch/curl로 직접 접속할 수 없었다(proxy가 CONNECT 거부). 아래 사실은 모두 WebSearch가 돌려준 cursor.com 도메인 결과 요약에서 가져왔다. 본문에서는 이 점을 밝히고 구체 메뉴·가격 단정을 피한다. 검색은 allowed_domains를 cursor.com으로 제한해 공식 페이지만 쓰도록 했다.

## 핵심 사실 (검색 요약)
- Quickstart: 앱을 내려받아 열고, 로그인하고, 폴더를 골라 작은 작업으로 시작. 설치 파일: macOS .dmg, Windows .exe, Linux(apt/dnf 패키지 권장). (출처: https://cursor.com/docs/get-started/quickstart)
- 폴더를 연 뒤 Cmd I(맥)로 Agent를 열고 "코드베이스를 설명하고 어디부터 읽을지 알려줘"처럼 묻는 것을 퀵스타트가 제안. Cursor가 저장소를 검색해 관련 파일을 읽고 요약. (출처: 동일)
- Agent 모드: 코드를 편집하는 모드. 편집은 작업 중 적용되며 diff 뷰에서 검토하고 원치 않는 것은 거부할 수 있음. Agent는 코드베이스를 자동 검색. 잘못 가면 Stop으로 취소하고 방향을 바꿈. (출처: https://cursor.com/help/ai-features/agent , https://cursor.com/help/getting-started/first-project.md , https://cursor.com/blog/agent-best-practices)
- Ask 모드: 읽기 전용. 코드 이해·구조 탐색용이며 파일을 바꾸지 않음. Shift+Tab 또는 모드 선택기로 모드 전환. (출처: https://cursor.com/help/ai-features/ask-mode)
- 이전 메시지를 수정해 다시 보내면 파일을 그 시점으로 되돌릴지 묻는 동작이 릴리스 노트에 있음(Ask 모드에서는 파일을 건드리지 않고 묻지 않음). (출처: https://cursor.com/docs/release-notes/ide)
- Rules: Project Rules(`.cursor/rules`, 버전 관리), User Rules, Team Rules, AGENTS.md. 적용 방식: Always Apply, Apply Intelligently, Apply to Specific Files, Apply Manually. 프런트매터 없는 일반 `.md` 파일은 rules 시스템이 무시. Agent/Ask/Plan/Debug 모드에 적용. (출처: https://cursor.com/docs/rules)
- 모드 목록은 출처마다 다름(릴리스 노트: Agent와 Ask 내장 + 커스텀 모드; 다른 요약: Agent, Plan, Debug, Ask). 최신 앱 화면 확인 필요. (출처: https://cursor.com/changelog 검색 요약)
- 코드베이스 인덱싱: 코드베이스를 열면 자동 인덱싱해 컨텍스트로 제공. `.cursorignore`는 채팅/탭 완성에 파일이 보내지는 것을 막고 인덱싱에서도 제외, `.cursorindexingignore`는 인덱싱 전용. (출처: https://docs.cursor.com/get-started/introduction , 변경 이력 검색 요약)
- Privacy Mode: 설정에서 켤 수 있고 켜면 고객 데이터를 학습에 쓰지 않고 모델 제공자와 ZDR 계약을 유지한다고 공식 페이지 요약. 남용 탐지에 걸리면 저장될 수 있고 일부 모델은 ZDR 밖. Enterprise 팀은 기본 켜짐. (출처: https://cursor.com/data-use , https://cursor.com/docs/enterprise/privacy-and-data-governance)
- 요금제(help center 요약): Hobby 무료, Pro $20/월, Pro+ $60, Ultra $200, Teams $40~$120/사용자. 변동이 잦으므로 본문에는 금액을 쓰지 않고 공식 가격 페이지로 안내. (출처: https://cursor.com/help/account-and-billing/pricing , https://cursor.com/pricing)
- Cursor CLI도 있다(`agent` 실행). 본문에서는 다루지 않음. (출처: https://cursor.com/docs/cli/overview)
- Claude Code VS Code 확장은 Cursor에도 설치 가능(overview에 "Install for Cursor" 링크). (출처: https://code.claude.com/docs/en/overview)

## 따라하기 절차
1. 앱 설치·로그인(공식 퀵스타트).
2. 기존 코드 폴더 열기(Open Folder) -> Ask 모드로 구조 질문.
3. Agent 모드로 작은 수정 요청 -> diff 검토 후 수락/거부.
4. Rules 파일로 프로젝트 지침 작성.
5. 개인정보·민감 코드 주의: Privacy Mode 확인, .cursorignore.

## 확인 못 함
- 한국어 UI·한국어 지원 여부: 확인 못 함.
- 무료(Hobby) 한도 수치, Agent 요청 한도: 확인 못 함.
- 설치 후 첫 실행 화면 메뉴 이름(Open Folder 등): 직접 확인 못 함 -> "화면 안내에 따르세요".
- 모드 이름 최신 목록, 체크포인트 되돌리기 메뉴 위치.

## 출처 목록 (모두 WebSearch 요약 경유, 직접 열람 못 함)
- https://cursor.com/docs/get-started/quickstart
- https://cursor.com/help/ai-features/agent
- https://cursor.com/help/ai-features/ask-mode
- https://cursor.com/help/getting-started/first-project.md
- https://cursor.com/docs/rules
- https://cursor.com/docs/release-notes/ide
- https://cursor.com/data-use
- https://cursor.com/docs/enterprise/privacy-and-data-governance
- https://cursor.com/help/account-and-billing/pricing
- https://cursor.com/blog/agent-best-practices
- https://code.claude.com/docs/en/overview — 직접 열람
