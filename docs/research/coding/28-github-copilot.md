# coding/28 GitHub Copilot 시작하기 (VS Code: 자동완성·채팅·에이전트)

작성: H4 · 확인일 2026-10-14. docs.github.com 페이지를 curl로 한 페이지씩 열어 확인했다.

## 확인한 사실과 출처
- 지원 IDE: Visual Studio Code, Visual Studio, JetBrains IDEs, Eclipse, Xcode. 질문·설명, 코드 제안/완성을 하고, 에이전트 모드를 지원하는 IDE에서는 편집 제안과 파일 검증도 한다. 선행 조건: 활성 Copilot 플랜, IDE 확장, IDE에서 GitHub 로그인. (https://docs.github.com/en/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide)
- VS Code에서 채팅 열기: Windows/Linux `Ctrl+Alt+I`, macOS `Control+Command+I`. 예시 질문 `what does this file do`. 줄을 선택하고 `explain this line`. (같은 퀵스타트)
- 에이전트 모드 예시(공식): Agent 선택 후 "Create a task manager web app with the ability to add, delete, and mark tasks as completed". 변경을 검토하고 IDE 컨트롤로 수락, 저장 후 만족하면 커밋. (같은 퀵스타트)
- 인라인 제안: JS 파일에서 `function calculateDaysBetweenDates(begin, end) {`를 입력하면 회색 글씨로 함수 본문이 제안되고 `Tab`으로 수락. 제안 내용은 달라질 수 있다. (같은 퀵스타트)
- VS Code는 처음 설정 시 필요한 확장이 자동 설치된다. JetBrains는 Plugins 설정에서 Marketplace 검색 후 설치, 재시작 후 Tools > GitHub Copilot > Login to GitHub. (https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension)
- 채팅 모드: Ask(질문·코드 제안), Agent(자율 작업), Plan(구현 계획). 채팅 화면 아래 agents 드롭다운으로 전환. Agent가 안 보이면 조직/엔터프라이즈 관리자가 비활성화했을 수 있다. VS Code 채팅은 제목 표시줄의 채팅 아이콘으로 연다(안 보이면 제목 표시줄 우클릭 > Command Center). 응답의 `Used n references`로 참조한 파일을 볼 수 있다. 슬래시 명령(`/`), 채팅 변수(`#`), 참가자(`@`), `@github`, `#web`. 인라인 채팅 `Ctrl+I`(Win/Linux)/`Command+I`(Mac). 퀵 채팅 `Ctrl+Shift+Alt+L`. (https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide)
- 에이전트 모드: 높은 수준의 작업을 주면 파일 선택·편집·명령 실행을 반복한다. 사용자가 변경을 검토하고, 기본적으로 명령은 실행 전 승인한다(관리자나 편집기 설정이 일부를 자동 실행으로 허용할 수 있음). 작업 중 후속 프롬프트로 방향을 바꾸거나, 제안된 터미널 명령을 승인/거절하거나, 스트리밍되는 편집을 되돌릴 수 있다. 크고 모호한 작업은 계획 모드 먼저. 에이전트 모드에서 프롬프트마다 GitHub AI Credits를 소비. (https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
- 플랜(2026-10-14 기준, 미국 달러): Free(무료, 제한된 기능, 자동 모델 선택만, 코드 완성 월 2000회), Student(검증된 학생 무료), Pro $10/월(기본 크레딧 1,000 + 변동 500), Pro+ $39/월(3,900 + 3,100), Max $100/월(10,000 + 10,000), Business $19/좌석/월, Enterprise $39/좌석/월. 검증된 교사와 인기 오픈소스 유지관리자는 Pro 무료 접근 대상일 수 있다. Free는 조직/엔터프라이즈를 통해 Copilot 접근이 없는 개인 개발자만 해당. 모든 플랜에 Copilot CLI와 Copilot app 포함. (https://docs.github.com/en/copilot/get-started/plans)
- 사용량: 모든 개인 플랜에 월 GitHub AI Credits 허용량. 1 크레딧 = $0.01. 채팅·CLI·클라우드 에이전트 등 AI 모델을 쓰는 기능이 크레딧을 소비. 코드 완성과 next edit suggestions는 크레딧을 쓰지 않으며 유료 플랜에서 무제한. 허용량은 이월되지 않고 매월 1일 00:00:00 UTC에 초기화. 소진 시 플랜 업그레이드, 추가 사용 예산 설정, 다음 달까지 대기 중 선택. 에이전트 기능은 한 작업에서 모델을 여러 번 호출해 더 많이 소비. 유료 플랜은 채팅 등에서 자동 모델 선택 시 모델 비용 10% 할인. Free는 코드 완성 월 2000회, Student는 무제한. (https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing)
- 저장소 맞춤 지침: VS Code는 `.github/copilot-instructions.md`(저장소 전체), `.github/instructions/NAME.instructions.md`(경로별, 맨 위 frontmatter에 `applyTo`), `AGENTS.md`(에이전트용, 가장 가까운 파일 우선; 루트 밖 지원은 기본 꺼짐)를 지원. 기본 활성화. (https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/configure-custom-instructions/add-repository-instructions-in-your-ide)

## 확인하지 못한 것 / 단정하지 않은 것
- 한국에서의 제공 여부·결제 통화·원화 가격: 확인하지 못했다. 본문에서 미국 달러 기준이라고만 쓴다.
- 플랜 비교표의 항목별 포함 여부(예: Free에서 에이전트 모드): 가져온 텍스트에서 표의 체크 표시가 보이지 않아 확인하지 못했다. 본문은 "표를 직접 확인하세요"로 안내.
- 한국어 UI 표기: 확인하지 못했다. 영어 메뉴 이름을 그대로 쓴다.
- VS Code 자체 문서(code.visualstudio.com)의 Copilot 설정 상세, 확장 마켓플레이스 이름: 열지 않았다. docs.github.com이 가리키는 "VS Code 문서" 링크로만 안내.
- 계획 모드 상세 페이지(use-plan-mode), 모델 변경 페이지, 책임 있는 사용 페이지: 열지 않았다.
- Copilot과 Claude Code·Cursor의 성능/가격 비교: 근거 자료가 없어 서술하지 않았고 용도 중심으로만 구분했다.
- GitHub Copilot app, Copilot CLI, 클라우드 에이전트: 이 편 범위 밖이라 열지 않았고 존재와 "플랜에 포함" 문구만 인용.

## 출처 목록
- https://docs.github.com/en/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide
- https://docs.github.com/en/copilot/get-started/plans
- https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension
- https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide
- https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode
- https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing
- https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/configure-custom-instructions/add-repository-instructions-in-your-ide
- (참고로 연 페이지) https://docs.github.com/en/copilot/get-started/quickstart — GitHub.com용 퀵스타트, 본문에는 인용하지 않음

## 2026-10-19 재점검
- docs.github.com 플랜 페이지의 원본(github/docs 저장소의 plans.md, model-supported-plans.yml)에서 체크 표시를 읽음: 에이전트 모드는 Free(제한적)·Student(서드파티 에이전트 제외)·Pro·Pro+·Max·Business·Enterprise 모두 포함. 콘텐츠 제외(content exclusion)는 개인 플랜(Free~Max)에는 없고 Business·Enterprise에 있음. Claude 모델: Pro는 Haiku 4.5/5.5, Sonnet 4.6/5/5.5. Pro+·Max·Business·Enterprise는 Opus 4.8/5/5.5와 Fable 5/5.1 포함(Max·Business·Enterprise는 Sonnet 4.6 제외). 본문의 "확인하지 못했어요" 문구를 이에 맞게 수정.
- 가격·크레딧(Pro $10 1,000+500, Pro+ $39 3,900+3,100, Max $100 10,000+10,000, Business $19, Enterprise $39), 코드 완성 무료/Free 월 2,000회, 크레딧 소진 시 선택지, 매월 1일 00:00 UTC 초기화는 변경 없음. 한국 제공 여부는 여전히 문서에 없음.

## 2026-10-26 재점검
- plans(앞 10만 자), 개인 사용량 기반 청구, quickstart, install-copilot-extension, chat-in-ide, use-agent-mode, custom instructions, 그리고 새로 use-plan-mode 열람.
- 변경: 이전에 "열지 못함"이던 Plan 모드 문서를 확인해 본문 반영. 읽기 전용 분석 후 요약·단계·열린 질문 출력, 승인 전 코드 변경 없음, Start Implementation / Open in Editor, VS Code·JetBrains·Xcode·Eclipse 지원, Visual Studio 미지원, Xcode·Eclipse 문서는 public preview 표기. 출처에 use-plan-mode 추가.
- 변경 없음: 플랜 가격·크레딧(Pro $10 1,000+500, Pro+ $39 3,900+3,100, Max $100 10,000+10,000, Business $19, Enterprise $39), 1크레딧=$0.01, Free 코드 완성 월 2,000회, 소진 시 선택지 3가지, 매월 1일 00:00 UTC 초기화, 단축키, 맞춤 지침 경로, Claude 모델 표(Pro: Haiku·Sonnet, Pro+/Max: Opus·Fable 포함).
- 새로 확인(미반영): Max는 auto 모델 선택 시 30% 할인(2026-10-28까지), 유료 플랜은 auto 선택 시 10% 할인, 권장 최소 클라이언트 버전(VS Code 1.120 등). 곧 끝나는 프로모션이라 본문에는 넣지 않음.
- 여전히 확인 못 함: 한국 제공 여부·원화 가격, 한국어 UI·답변, 트러블슈팅 문서, content exclusion 사용법.
