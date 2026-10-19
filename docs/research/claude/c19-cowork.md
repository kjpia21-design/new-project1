# C19 조사 노트 (Cowork 시작하기)

확인일 2026-10-15. 아래 공식 페이지를 한 번에 하나씩 curl로 받아 읽었다.

## 출처
- https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
- https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
- https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
- https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
- https://www.anthropic.com/supported-countries (South Korea 포함 확인)

## 확인한 사실
- Cowork는 Claude Code의 에이전트 구조를 비코딩 업무로 확장. 유료 플랜(Pro/Max/Team/Enterprise)만.
- 제공: Desktop macOS·Windows 모든 유료(Windows는 최신 버전). 웹·모바일 Pro/Max/Team, Enterprise는 관리자가 켠 경우. Chrome 사이드 패널 Max/Team, Pro 순차, Enterprise 관리자.
- 로컬 파일·브라우저·컴퓨터 사용은 Claude Desktop(macOS/Windows)이 열려 있고 연결돼야 함.
- 2026-10-06부터 Pro/Max 새 작업은 클라우드 실행. "Only on your computer" 옵션 제거. 기존 로컬 작업은 끝까지 로컬. 로컬 전용은 데스크톱 Claude Code 사용 안내(/port-task-data).
- Team/Enterprise 클라우드 Cowork는 베타.
- 승인: Manual(기본, 예전 Ask before acting), Auto(안전 검사, 사용량 더 씀), Skip(예전 Act without asking). 신규 화면은 Auto/Manual. 영구 삭제 전엔 항상 허락.
- 안전: 격리된 임시 클라우드 환경, 연결한 폴더만, 전용 작업 폴더·백업 권고, 프롬프트 인젝션 설명, 예약 작업 주의, 컴퓨터 사용은 샌드박스 없음.
- 예약: Cowork 작업 안에서 /schedule 또는 사이드바 Scheduled. 클라우드 실행.
- 통합: "Claude Cowork is now just Claude". Pro/Max 순차. 되돌릴 수 없음. 제약(Add from GitHub 미지원, 분기 불가, 시크릿 채팅 파일 생성 불가).
- 세션 공유 불가, 작업 삭제 시 30일 내 백엔드 삭제. Memory는 시작 전 "+"에서 끌 수 있음.
- 사용량: 멀티 스텝 작업과 Auto가 더 소모. Settings > Usage.

## 확인하지 못한 것
- 폴더 연결의 정확한 메뉴 이름·순서(도움말에 절차 없음, "Trusted folders"만 언급).
- Linux 데스크톱의 Cowork 지원 여부(Cowork 도움말 목록에 없음).
- Cowork 단독의 한국 제공 문구(Claude 제공 국가 목록 포함 여부만 확인).
- 플랜별 구체 사용량 수치.

## 2026-10-19 점검 반영
- Cowork 시작하기, 하나의 Claude 통합 문서, 컴퓨터 사용 도움말을 다시 읽음. 승인 방식 Manual/Auto/Skip, 플랜·기기 표 변동 없음. Anthropic 제공 국가 페이지(https://www.anthropic.com/supported-countries)에 South Korea 포함, Cowork는 같은 규칙의 대상이고 Cowork만의 지역 제한은 적혀 있지 않음 -> 본문 '확인하지 못한 항목'에서 한국 제공 문구 제거. Linux 데스크톱 Cowork 지원 여부와 폴더 연결 메뉴 이름은 여전히 미확인.
