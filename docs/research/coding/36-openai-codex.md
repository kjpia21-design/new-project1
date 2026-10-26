# coding/36 OpenAI Codex 시작하기 (코딩 에이전트 비교 관점)

작성: L1 · 확인일 2026-10-15. 공식 페이지는 curl로 `https://developers.openai.com/codex/<페이지>.md` 형태를 한 페이지씩 열었다. (페이지 안내문: 문서 색인은 learn.chatgpt.com/llms.txt, 각 페이지 URL 끝에 `.md`를 붙이면 마크다운 제공.) openai.com / help.openai.com은 열지 않았다.

## 확인한 사실과 출처 (2026-10-15)
- Codex CLI (https://developers.openai.com/codex/cli)
  - 설치 방법 4가지: macOS/Linux 스크립트 `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, Windows PowerShell `irm https://chatgpt.com/codex/install.ps1 | iex`, npm `npm install -g @openai/codex`, Homebrew `brew install --cask codex`.
  - 프로젝트 폴더에서 `codex` 실행, 처음에 Sign in with ChatGPT 또는 다른 로그인 방법 선택. 첫 작업 예시 "Tell me about this project". 작업 전후 Git 체크포인트를 만들어 되돌리라고 안내.
  - 기능: `codex resume`, `codex --image`, subagents, `codex --search`(라이브 웹 검색), `codex cloud`, `codex mcp`, `/permissions`, `codex exec`(비대화형, 스크립트·CI), 로컬 코드 리뷰.
- IDE extension (https://developers.openai.com/codex/ide): VS Code, Cursor, Windsurf, VS Code Insiders는 Codex 확장(`openai.chatgpt`), Xcode와 JetBrains는 각자 통합. VS Code 계열은 Codex 아이콘 또는 명령 팔레트 "Codex: Open Codex Sidebar". 열린 파일·선택 영역을 프롬프트에 포함, 변경을 에디터에서 검토.
- 데스크톱 앱 (https://developers.openai.com/codex/app): 페이지 제목은 "ChatGPT desktop app". macOS·Windows는 chatgpt.com/download, Linux는 별도 안내. 로그인 후 채팅/프로젝트/폴더 선택, 메시지를 보낼 때 ChatGPT 또는 Codex 선택(Codex는 New chat).
- Codex Cloud (https://developers.openai.com/codex/cloud): ChatGPT 웹·모바일·데스크톱 앱에서 로그인, 환경(environment)을 만들고 GitHub 저장소 선택, 게시(Publish) 후 작업 시작. 작업별 격리된 작업 공간, 컴퓨터가 꺼져 있어도 진행, 변경과 테스트 결과 검토 후 커밋 또는 PR.
- 인증 (https://developers.openai.com/codex/auth): ChatGPT 로그인(구독 접근)과 API 키(사용량 과금) 두 방식. 데스크톱 앱·CLI·IDE 확장은 둘 다 지원, Codex cloud는 ChatGPT 로그인 필요. 로그인 방식에 따라 관리자 제어와 데이터 처리 정책이 달라짐.
- 플랜 (https://developers.openai.com/codex/pricing): "ChatGPT Work and Codex share usage"(같은 가격·크레딧·한도). 개인: Free $0(GPT-6 Luna, 데스크톱 앱, 롤아웃에 따름), Go $8/월(같은 모델 표기), Plus $20/월(웹·CLI·IDE 확장·iOS의 Codex, 클라우드 통합(자동 코드 리뷰, Slack), GPT-6.1 Sol과 GPT-6 Luna, ChatGPT 크레딧으로 사용량 확장), Pro $100부터($100/$200/$500, Ultrafast mode는 Pro $500), API Key(CLI·SDK·IDE, 클라우드 기능 없음, API 가격으로 과금). 비즈니스: Business 사용자당 월 $20(2명 이상 연간 결제, 월 결제 $25), Enterprise & Edu 영업 문의. Plus·Standard Business는 5시간 단위 로컬 메시지 추정치를 모델별 범위로 제시(예: GPT-6.1 Sol 15-160), 정해진 한도가 아니며 사용량 대시보드 확인. 클라우드 작업은 더 많이 쓸 수 있음. 가격은 달러. GPT-5.5는 ChatGPT 로그인 Codex에서 2026-10-14에 종료된다는 공지가 있음.
- 승인·샌드박스 (https://developers.openai.com/codex/agent-approvals-security): 기본적으로 에이전트는 네트워크 접근이 꺼져 있고, 로컬에서는 OS 수준 샌드박스가 접근 범위를 (보통 현재 작업 공간으로) 제한하며 승인 정책이 언제 사용자에게 물을지 정함. Auto 프리셋(`--sandbox workspace-write --ask-for-approval on-request`)은 작업 폴더 안에서 읽기·편집·명령 실행을 자동으로 하고, 작업 폴더 밖 편집이나 네트워크가 필요한 명령은 승인을 요청. `/permissions`로 read-only 전환. `approval_policy = "untrusted"`는 더 이상 지원하지 않음(제거 안내).
- AGENTS.md (https://developers.openai.com/codex/agent-configuration/agents-md): 작업 전에 AGENTS.md를 읽음. 전역(`~/.codex`)과 프로젝트 폴더 계층을 합침. 합친 크기 기본 32 KiB 제한(`project_doc_max_bytes`).

## 비교용 사실 (Claude Code / Cursor 쪽은 사이트 기존 편과 일치시킴)
- coding/06, C12, C14: Claude Code는 터미널·IDE·데스크톱·웹, Pro 이상 유료 플랜(2026-10-10 기준), 프로젝트 지침 CLAUDE.md, `/rewind` 체크포인트.
- coding/09: Cursor는 코드 편집기, Hobby 무료·Pro 월 $20(2026-10-12 기준), Rules/AGENTS.md. Codex IDE 확장은 Cursor에도 설치 가능(Codex 공식 IDE 페이지 확인).
- 품질·속도 순위는 쓰지 않는다(명세).

## 확인하지 못한 것
- 한국에서의 제공 여부·한국어 UI·한국 가격(원화)·부가세: 확인한 페이지에 없음. 공식 지원 국가 페이지는 이번에 열지 않았다.
- Free/Go 플랜의 Codex 한도 수치, Plus 외 모델별 상세 한도 외 정확한 현재 값(대시보드 확인).
- Codex Cloud 사용 가능한 플랜 범위(Plus 이상 기재 외 Free/Go에서의 제공 여부), 클라우드의 한국 리전 처리.
- 모델 이름(GPT-6.1 Sol 등)의 세부 성능은 확인하지 않음. 모델 목록은 바뀌므로 본문에서 이름을 고정하지 않고 요금제 표의 표기만 인용.
- Windows 샌드박스·WSL 세부(페이지는 존재하나 열지 않음).
- 제품 이름이 문서에서 "ChatGPT desktop app"에 Codex가 통합된 형태로 설명된다. 별도 "Codex 앱" 명칭은 확인하지 못함.

## 출처 목록 (모두 직접 열람, 2026-10-15)
- https://developers.openai.com/codex/cli
- https://developers.openai.com/codex/ide
- https://developers.openai.com/codex/app
- https://developers.openai.com/codex/cloud
- https://developers.openai.com/codex/auth
- https://developers.openai.com/codex/pricing
- https://developers.openai.com/codex/agent-approvals-security
- https://developers.openai.com/codex/agent-configuration/agents-md

## 2026-10-19 재점검
- 문서 위치: developers.openai.com/codex/* 는 learn.chatgpt.com/docs/* 로 308 영구 이동(pricing, codex/cli, agent-approvals-security, cloud, codex/ide, auth, agent-configuration/agents-md, app). frontmatter의 기존 URL은 리디렉션으로 계속 열림.
- 가격 페이지: Free $0, Go $8, Plus $20, Pro $100/$200/$500 ("Everything in Plus", Pro 플랜은 현재 5시간 제한 없음 새로 확인), Business 사용자당 $20(월 결제 $25), Enterprise 문의. Plus 로컬 메시지 GPT-6.1 Sol 15-160 / 5시간. GPT-5.5는 ChatGPT 로그인 Codex에서 2026-10-14 종료(API 키는 영향 없음). Free·Go의 클라우드/한도 수치, 한국 제공은 여전히 문서에 없음.
- 인증 문서: 데스크톱 앱, CLI, IDE 확장은 ChatGPT 또는 API 키, 클라우드는 ChatGPT 필수. 본문 표 수정.
- 데스크톱 앱 페이지: macOS·Windows·Linux 앱 다운로드 안내, chatgpt.com/download 링크는 더는 페이지에 없음. 본문 표현 수정.
- 변경 없음: 승인/샌드박스 기본값, `approval_policy = "untrusted"` 중단, 클라우드 환경 생성 순서, AGENTS.md 32 KiB, CLI 명령. CLI 페이지의 네 가지 설치 방법(macOS·Linux 스탠드얼론, Windows, npm, Homebrew) 탭은 확인했으나 Windows·npm·Homebrew 명령 문자열은 이번에 직접 읽지 못해 기존 확인(2026-10-15)을 유지.

## 2026-10-26 재점검
- learn.chatgpt.com/docs 의 pricing, codex/cli, cloud, auth, agent-approvals-security, agent-configuration/agents-md, codex/ide, app 열람(developers.openai.com/codex/* 는 모두 308로 이동).
- 변경: 본문 sources와 officialUrl을 learn.chatgpt.com 주소로 교체. 가격 페이지에 "Codex는 Free·Go·Plus·Pro·Business·Edu·Enterprise 모든 플랜에서 사용 가능"이 명시되어 반영(Free·Go 한도 수치와 클라우드의 플랜별 제공 여부는 여전히 문서에 없음). 인증 문서의 Device Code 로그인(베타, codex login --device-auth) 한 문장 추가. 비교표의 Cursor 칸을 9편에 맞춰 수정(무료 Free, Plus 월 $8부터, 클라우드 에이전트는 Premium 이상).
- 변경 없음: Free $0, Go $8, Plus $20, Pro $100/$200/$500, Business $20(연)·$25(월), Pro 5시간 제한 없음, Plus·Standard Business 로컬 메시지 5시간 범위(GPT-6.1 Sol 15-160 등), 설치 명령, /permissions, 네트워크 기본 꺼짐, Auto 프리셋, untrusted 중단, AGENTS.md 32 KiB, 클라우드 환경 생성 순서.
- 재확인 못 함: "GPT-5.5가 2026-10-14에 ChatGPT 로그인 Codex에서 종료" 공지(이번에 읽은 가격·CLI 페이지에서는 찾지 못함, 본문은 유지).
