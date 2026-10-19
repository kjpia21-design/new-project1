# Claude in Chrome과 컴퓨터 사용(Computer use)

## 핵심 사실
### Claude in Chrome
- 모든 유료 플랜(Pro/Max/Team/Enterprise)에서 사용. Claude Cowork와 Claude Code에서 쓸 수 있고 Chrome 사이드 패널은 베타. Max·Team에서는 사이드 패널이 Cowork 세션으로 실행되며 Pro로 확대 중. 모든 공개 모델에서 사용 가능. (출처: https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome)
- 설치: Google Chrome에서 Chrome 웹 스토어의 확장 프로그램 추가 -> Claude 계정 로그인 -> 퍼즐 아이콘으로 고정 -> 권한 허용. 다른 Chromium 브라우저와 모바일은 미지원. Claude Desktop에서는 Settings > Connectors > Claude in Chrome > Configure로 켠다(대화마다 기본 꺼짐). (출처: 동일)
- 할 수 있는 일: 페이지 읽기, 클릭·입력·이동·양식 작성, 여러 탭 관리, 예약 작업·단축 명령("/")·백그라운드 워크플로, 콘솔·네트워크·DOM 디버깅, Slack/Google Calendar/Gmail/Google Docs/GitHub 탐색. 1Password 로그인 요청은 macOS 베타(비밀번호는 Claude가 보지 못함). (출처: 동일)
- 권한 모드(검색 요약): Manual(매 동작 승인), Auto(안전 검사를 하며 계속 진행; 추가 검사 때문에 사용량이 더 든다), Skip(검사 없이 실행). 사이드 패널의 기본은 "Automatically approve". 파일 다운로드, 민감 정보 입력 같은 동작은 "항상 허용"이어도 승인을 요구. 사이트별 허용은 확장 설정에서 검토·취소. (출처: 12012173 문서, 권한 가이드 https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide 검색 요약)
- 안전: "Claude가 웹사이트와 직접 상호작용"하는 기능이라 안전 분류기가 있어도 위험이 남는다고 경고. debugger 권한이 클릭·입력·스크린샷을 가능하게 한다. Team/Enterprise 관리자는 사이트 허용/차단 목록 설정 가능. (출처: 12012173 문서)
- 한계: Chrome 전용, 모바일 불가, 로컬 파일/컴퓨터 관련 작업은 Claude Desktop이 열려 연결돼 있어야 함, 백그라운드 작업은 Chrome이 열려 있는 동안만. (출처: 동일)
- Claude Code와 Chrome 연동 문서: https://code.claude.com/docs/en/chrome (라이브 웹앱 디버깅용 — 개요 문서의 표에서 "Debug live web applications"로 확인, 본문 미열람). (출처: https://code.claude.com/docs/en/overview)
### 컴퓨터 사용
- 컴퓨터 사용 = 커넥터나 도구가 맞지 않을 때 Claude가 내 컴퓨터 화면에서 클릭·입력·앱 열기·이동을 직접 수행. 컴퓨터가 켜져 있으면 자리를 비워도 계속 작업. (출처: https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork)
- 가용성: Pro/Max만 베타, Team·Enterprise는 현재 불가(해당 문서 기준). macOS·Windows의 Claude Desktop 앱 안 Cowork와 Claude Code에서 사용. macOS 백그라운드 작동은 macOS 15 이상. Linux 데스크톱에서는 불가. (출처: 동일, https://support.claude.com/en/articles/10065433-install-claude-desktop)
- 켜기: 최신 Claude Desktop 업데이트 -> Settings > General(Desktop app)에서 "Enable computer use" -> Cowork/Claude Code 세션에서 앱 관련 작업 요청 -> 접근 승인. (출처: 14128542 문서)
- 도구 우선순위: 커넥터 -> 브라우저(내장 브라우저 또는 Claude in Chrome) -> 화면 조작(가장 느리고 오류 가능성 높음). (출처: 동일)
- 권한/안전: 앱별로 승인을 요청하고, 투자·암호화폐 플랫폼 등은 기본 차단. 샌드박스가 없어 화면에 보이는 모든 정보를 볼 수 있다. 앱 차단 목록 설정 가능, 언제든 중단 가능. 은행·의료·정부 등 민감 앱과 금융 계좌·법률 문서·의료 정보 작업에는 쓰지 말라고 권고. 간단한 작업부터, 구체적 프롬프트, 초반에 지켜보기. (출처: 동일)
- 한계: 컴퓨터가 깨어 있고 Claude Desktop이 열려 있어야 하며, 복잡한 다단계 작업은 재시도가 필요할 수 있다. (출처: 동일)
- 웹/모바일의 컴퓨터 사용 및 로컬 파일 접근은 Claude Desktop 앱에 의존. (출처: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude)

## 따라하기에 쓸 수 있는 절차
1. Chrome 웹 스토어에서 Claude 확장 설치 -> 로그인 -> 권한 허용 -> 고정. (출처: 12012173 문서)
2. 사이드 패널에서 "이 페이지의 표를 정리해줘"처럼 요청하고 권한 모드를 확인. (출처: 12012173 문서)
3. 컴퓨터 사용: Claude Desktop 업데이트 -> Settings > General > Enable computer use. (출처: 14128542 문서)
4. 민감한 앱은 닫아 두고 간단한 작업부터 시도. (출처: 14128542 문서)

## 확인 못 함 / 주의
- 권한 가이드(12902446)와 Cowork 브라우저 설정 문서는 검색 요약만 확인.
- 컴퓨터 사용의 Team/Enterprise 가용성은 문서 간 시점 차이로 최신 여부 불명확.
- Chrome 확장의 사용량 소모 수치는 확인 못 함.

## 출처 목록
- [Get started with Claude in Chrome](https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome) — 확인일 2026-10-10
- [Claude in Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide) — 확인일 2026-10-10 (검색 요약)
- [Let Claude use your computer in Cowork](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork) — 확인일 2026-10-10
- [Install Claude Desktop](https://support.claude.com/en/articles/10065433-install-claude-desktop) — 확인일 2026-10-10
- [Claude Code overview](https://code.claude.com/docs/en/overview) — 확인일 2026-10-10


## 2026-10-11 업데이트 반영
- Claude Code changelog: 2.1.260 Chrome이 조직 관리자 설정을 따름(관리자가 끄면 `--chrome`, `/chrome`, 브라우저 도구 사용 불가). 2.1.290 프로젝트 설정 파일로 Chrome을 켤 수 없고 `--chrome`, `/chrome`, 사용자 설정을 써야 함. 출처: https://code.claude.com/docs/en/changelog
- 본문 나머지(지원센터 기반 내용)는 이번 변경과 충돌 없어 유지.

## 2026-10-19 점검 반영
- Chrome 도움말, Claude Code Chrome 문서, 컴퓨터 사용 도움말을 다시 읽음. Chrome 전용 vs Chrome/Edge(+기타 Chromium) 차이, 사이드 패널 베타, 컴퓨터 사용 Pro/Max 베타(Team/Enterprise 불가), macOS 15 백그라운드, Settings > General > Enable computer use 변동 없음. Claude Code 쪽 확장 최소 버전 1.0.36 (본문 미반영).
