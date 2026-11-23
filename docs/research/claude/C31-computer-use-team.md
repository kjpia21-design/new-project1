# C31. Team·Enterprise용 컴퓨터 사용 (조사 노트, 2026-11-22)

## 확인한 출처 (curl 기본 옵션 -L, 한 페이지씩, 모두 200)
- https://support.claude.com/en/articles/18483812-set-up-computer-use-for-team-and-enterprise-plans (관리자용, "Updated this week" 표기, 전문 읽음)
- https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork (사용자용, 전문 읽음)

## 확인한 사실
- Team·Enterprise 베타, 기본 꺼짐, 조직에 순차 배포. 새 Claude 경험(Chat and Cowork unified 켜짐)에서만 동작. Claude Desktop(macOS 14+, Windows), 조직 Computer access가 켜지면 웹·모바일(컴퓨터에 Claude Desktop 열림). 별도 "Cowork" 옵션 작업과 Claude Code에서는 안 됨.
- 켤 수 없는 조직: HIPAA-ready, Claude Code ZDR, CMEK, FERPA·K-12.
- 켜기: Owner/Primary Owner, Organization settings > Capabilities > Claude Desktop > Computer use. 반영 약 1시간 이상 걸릴 수 있음. Enterprise는 사용자 지정 역할로 제한(내장 역할은 즉시 적용, Custom으로 바꾸고 15분 대기, "All capabilities" 역할 우회 절차). Team은 사용자 지정 역할 없음.
- App access: 차단/허용 목록, Owner·Primary Owner만, 목록은 사용자 컴퓨터로 전송(기밀 금지), Mac 번들 ID / Windows 파일 이름·AUMID, 입력 ID 검증 없음, 한계 8가지(다른 도구, 다른 계정, 웹사이트·브라우저 확장, 원격 데스크톱·VM, 간접 영향, 복사 텍스트, Record a skill, Windows 알림).
- MDM: `computerUseEnabled`=false, Claude Desktop 5.1231.0+, 컴퓨터 수준, macOS 도메인 com.anthropic.claudefordesktop, Windows HKLM\SOFTWARE\Policies\Claude DWORD, 재시작 필요, 못 다루는 것 목록, 관리 컴퓨터 부수 효과, PPPC(Accessibility Allow, ScreenCapture는 AllowStandardUserToSetSystemService), MDM이 못 하는 일.
- 스크린샷은 대화와 함께 저장, 자동 점검이 최신 스크린샷을 보고 Anthropic이 점검 기록에 사본 보관 가능, 상업 약관·DPA 적용.
- 샌드박스 없음, 폴더 제한·Read only 미적용, 앱 유형별 권한(브라우저·투자 앱은 보기만, 터미널·편집기는 클릭만), 자동 승인 모드에서만 행동 검토.

## 확인하지 못한 것
- 직접 실행하지 않음. 요금·사용량 한도 없음(페이지에 없음).
- 읽지 않은 링크 페이지: unified Claude 설정(Team/Enterprise), Enterprise configuration for Claude Desktop, Use Claude Cowork safely, 릴리스 노트 해당 항목.
- PPPC 코드 요구 문자열은 본문에 옮기지 않고 공식 페이지로 안내함.
- C11 영어·한국어 본문은 "Team·Enterprise에서 사용 불가"로 되어 있음(2026-11-02 기준). 이번 글 안내 박스로 보완했고 C11 본문은 링크 한 줄만 추가함.
