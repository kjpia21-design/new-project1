# coding/09 Cursor로 기존 코드 이해하고 고치기

## 조사 방법
2026-10-10 5단계에서 cursor.com 공식 페이지 원문을 직접 열어 대조했다(WebFetch는 이름 해석 실패, curl로 동일 공식 URL 열람). 아래는 모두 "원문 확인"이다.

## 핵심 사실 (원문 확인 2026-10-10)
- Quickstart: macOS 12+ .dmg, Windows 10+ .exe, Linux apt/dnf 권장(AppImage 대안). 폴더를 고른 뒤 Cmd/Ctrl+I로 Agent를 열어 코드베이스 설명 요청. Shift+Tab은 Plan Mode 토글로도 안내. (https://cursor.com/docs/get-started/quickstart)
- 프로젝트 열기: File > Open Folder. Agent: Cmd+I(Mac)/Ctrl+I. 편집은 작업 중 적용, diff 뷰에서 검토·거부. @로 파일·폴더 지정. (https://cursor.com/help/getting-started/first-project.md)
- Agent 도움말: Stop 버튼으로 중단, 메시지에 마우스를 올려 오른쪽 아래 Restore Checkpoint로 파일 롤백(대화는 유지). 모드 4개: Agent / Ask(읽기 전용) / Plan / Debug. Shift+Tab 순환 또는 모드 선택 드롭다운. 규칙은 네 모드 모두 적용. (https://cursor.com/help/ai-features/agent , https://cursor.com/help/ai-features/ask-mode)
- Rules: Project Rules는 `.cursor/rules`의 **`.mdc`** 파일(일반 `.md`는 프런트매터가 없어 무시, 일반 마크다운은 AGENTS.md). 적용 방식 Always Apply / Apply Intelligently / Apply to Specific Files / Apply Manually. User/Team Rules, AGENTS.md. (https://cursor.com/docs/rules) [4단계 검색 요약은 ".md 무시"만 있고 .mdc 확장자는 빠져 있었음 -> 보완]
- 제외: `.cursorignore`(.gitignore 문법)는 Agent, Tab, Inline Edit, @ 멘션 접근을 막음. 터미널·MCP 도구는 막지 못하며 완전한 보호는 보장 안 함. .gitignore와 lock 파일은 기본 제외. (https://cursor.com/docs/context/ignore-files) `.cursorindexingignore`는 원문에서 찾지 못해 본문에서 삭제.
- 색인: 현재 문서는 Instant Grep(내 컴퓨터에서 색인 생성, 파일 경로·코드 업로드 및 임베딩 저장 없음)을 설명. 4단계의 "자동 인덱싱해 컨텍스트로 제공" 서술은 낡아 수정. 단 Agent가 연 파일 내용은 모델 요청에 포함될 수 있음. (https://cursor.com/docs/context/codebase-indexing)
- Privacy Mode: 켜면 고객 데이터를 학습에 쓰지 않고 모든 제공자와 ZDR 유지. 남용 탐지 시 저장될 수 있고 non-ZDR 모델은 별도 표시/관리자 opt-in. 끄면 학습에 쓸 수 있음. (https://cursor.com/data-use)
- 요금(USD, 2026-10-10): Hobby 무료(카드 불필요, Agent 요청 제한적, Auto 모델로 Agent/Chat/Tab), Pro $20/월, Pro+ $60, Ultra $200, Teams Standard $40/Premium $120(사용자당), Enterprise 문의, 인도 한정 Start ₹649. 한도 초과 시 추가 사용량 결제 또는 업그레이드. (https://cursor.com/pricing , https://cursor.com/help/account-and-billing/pricing , https://cursor.com/docs/models-and-pricing)
- Cursor CLI 존재(docs 내비게이션 CLI 항목). Claude Code VS Code 확장은 Cursor에도 설치 가능. (https://code.claude.com/docs/en/overview)

## 확인 못 함
- 한국어 UI 지원 여부(문서 언어 목록은 영/중/러/일/포/스, 한국어 없음. 앱 UI 언어와는 별개라 단정 안 함).
- Hobby 한도의 구체 수치(원문에 수치 없음 -> "한도가 있음"으로만 표기).
- 한국 가격·부가세.
- 릴리스 노트(원문 확인): 이전 메시지를 수정해 다시 보내고 파일이 바뀌어 있으면 "Revert files to this message?"를 묻고 Revert Files/Keep Files 중 선택, Ask 모드에서는 묻지 않음. 본문 서술과 일치.

## 출처 목록 (모두 직접 열람, 2026-10-10)
- https://cursor.com/docs/get-started/quickstart
- https://cursor.com/help/ai-features/agent
- https://cursor.com/help/ai-features/ask-mode
- https://cursor.com/help/getting-started/first-project.md
- https://cursor.com/docs/rules
- https://cursor.com/docs/release-notes/ide
- https://cursor.com/data-use
- https://cursor.com/docs/context/ignore-files
- https://cursor.com/docs/context/codebase-indexing
- https://cursor.com/help/account-and-billing/pricing
- https://cursor.com/docs/models-and-pricing
- https://cursor.com/pricing
- https://code.claude.com/docs/en/overview


## 6단계 재점검 (2026-10-10)
- cursor.com/docs/get-started/quickstart(curl 200)에 UI 언어 언급 없음. 한국어 UI 지원은 미확인 유지.

## 2026-10-12 재점검
- 모든 출처 재열람 성공(WebFetch, first-project.md는 curl 200). 요금(Hobby 무료, Pro $20, Pro+ $60, Ultra $200, Teams $40/$120, Enterprise 문의, 인도 Start ₹649), 모드 4종, Rules(.mdc, 적용 4종), Privacy Mode, 색인(Instant Grep, 로컬) 모두 기존 서술과 일치.
- 새로 확인: ignore-files 문서의 기본 제외 목록에 lock 파일 외 `.env*`, `.git/`, `node_modules/`, 바이너리·압축·이미지·미디어가 포함됨 -> 본문 반영. 계층형 .cursorignore(Settings > Indexing > Ignore Files)와 전역 ignore 목록 존재. models-and-pricing: Teams Premium은 Standard 대비 Agent 한도 5배.
- 릴리스 노트(3.19~3.24)에서 Plan/Debug 모드·한국어 관련 변경 없음. 한국어 UI 지원 여부는 여전히 미확인.
