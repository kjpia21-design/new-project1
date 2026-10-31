# C22. Claude 데스크톱 앱 제대로 쓰기 (2026-11-01 조사, Q3)

방법: curl로 support.claude.com 문서를 한 번에 한 장씩 열람. 실제 앱을 설치·실행하지 않음(화면 확인 없음).

## 확인한 출처와 사실
- https://support.claude.com/en/articles/10065433-install-claude-desktop — macOS/Windows/Linux(베타); 채팅은 전 요금제, Claude Code·Cowork는 유료; macOS 13+, Windows 10+, Linux Ubuntu 22.04+/Debian 12+; 설치 절차; Linux는 컴퓨터 사용·받아쓰기 불가; 데스크톱 확장 프로그램(설정 > 데스크톱 앱 > 확장 프로그램 관리, 이전 레이아웃: 설정 > 확장 프로그램).
- https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac — Mac 전용(FAQ에서 Windows 불가), 전 요금제, Option 두 번 누르기, 스크린샷·창 공유, Caps Lock 받아쓰기(기본 꺼짐), 단축키 옵션(Double-tap Option/Option+Space/사용자 지정), macOS 12+(받아쓰기 14+), 권한(화면 기록·손쉬운 사용·음성 인식), 최근 대화 5개. 참고: 설치 문서는 Linux에서도 퀵엔트리 전역 단축키가 동작한다고 적음(Linux는 이 글 범위 밖).
- https://support.claude.com/en/articles/11101966-use-voice-mode — 음성 모드 베타, 전 요금제, 모바일·데스크톱·웹; 음파 아이콘; 핸즈프리/push-to-talk; 설정 > Capabilities > Voice settings(없으면 General); 사용 한도에 포함.
- https://support.claude.com/en/articles/8241126-upload-files-to-claude — "+" > Add files or photos, 끌어놓기, 붙여넣기; 지원 형식; 채팅 500MB/파일, 20개, PDF 1000쪽, 프로젝트 파일 30MB; XLSX는 코드 실행·파일 생성 필요.
- https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop — 확장 프로그램 설치 경로(Browse extensions > Install), API 키 등 설정.
- https://support.claude.com/en/articles/14729294-open-claude-desktop-with-a-link — claude:// URL 스킴(macOS/Windows/Linux), new?q=, code/new, cowork/new, folder/file 매개변수, q 약 14,000자 잘림, 폴더는 항상 확인 대화상자.

## 확인하지 못한 것
- 메인 창 키보드 단축키 전체 목록 문서.
- Windows용 빠른 입력 대응 기능(FAQ는 "현재 macOS만"이라고만 함).
- Mac·Windows 자동 업데이트 방식(Linux만 안내됨).
- 한국어 UI의 메뉴 이름.
- 사이트 내 불일치 메모: C3 표는 데스크톱 강점에 "Quick Entry shortcut"을 적었으나 공식 문서상 Mac 전용(C3는 수정하지 않음, 담당 범위 밖).
