# 25. AI로 발표 자료 만들기: Gamma·Claude·Copilot — 2026-10-14 기준 (H3)

모든 페이지는 `curl -sL -m 20 -A "Mozilla/5.0"`로 한 번에 한 페이지씩 열어 확인했다.

## Gamma (help.gamma.app)
- https://help.gamma.app/en/ (목차 페이지). 도움말 센터 언어 목록에 한국어가 있다(제품 UI/생성 언어 지원 범위는 아님).
- https://help.gamma.app/en/articles/7838093-how-do-i-create-a-new-presentation-document-or-webpage-in-gamma : Gamma 5는 대화로 시작, AI 에이전트가 질문 후 제작. 이 글은 "클래식 생성기"(대시보드의 Use classic generator) 설명. 모드: Generate / Paste / Import. 구성 모드 선택기: Plan(계획 검토 후 제작) / Express(검토 없이 바로) / Research(웹 출처 먼저 수집, Plan에서만). 이미지 없이 생성(Don't add images) / 이미지 자리표시자(Image placeholders). 소스 프롬프트 보기: 우상단 ... > View Source Prompt.
- https://help.gamma.app/en/articles/15002203-how-do-i-create-with-agent-in-gamma : 프롬프트 바에 입력, 메모 붙여넣기·파일 첨부·템플릿·연결 도구 가능. 기본은 Plan(질문 -> 계획 검토 -> 승인 후 제작), "Decide for me" 선택 가능. 모바일 브라우저는 기본 Express. 업로드한 이미지가 있으면 자동 이미지 대신 사용.
- https://help.gamma.app/en/articles/8022861-what-s-the-easiest-way-to-export-my-gamma : 내보내기 PDF/PNG/PowerPoint(PPTX), Google Slides는 PPTX 업로드 방식, LinkedIn 직접 게시. 경로: 우상단 Share > Export 또는 ... > Export. 내보내기는 보기(Present) 모드 기준. 무료 플랜 내보내기(PDF/PPTX)에는 "Made by Gamma" 배지. 브라우저 인쇄는 배지 없음. 표는 PPTX에서 편집 가능한 표로(기본). 발표자 노트는 PPTX·Google Slides 내보내기에 포함. 슬라이드 마스터 미포함. 그라데이션 제목 등은 다르게 보일 수 있음. 글꼴은 PPTX에 내장하나 드물게 실패.
- https://help.gamma.app/en/articles/7834324-how-do-credits-work-in-gamma : AI 기능은 크레딧 사용(슬라이드·이미지 단위, 모델·길이에 따라 다름, 변동 가능). 무료 플랜은 크레딧이 갱신되지 않고 추천 1건당 200크레딧, 무료 계정 최대 2,000. 유료는 월 갱신, 미사용분 플랜 크기의 2배까지 이월. 잔액은 우상단 크레딧 표시 또는 Settings > Billing(유료).
- https://help.gamma.app/en/articles/8077107-how-can-i-upgrade-my-gamma-subscription : 플랜 Free/Plus/Pro/Ultra/Business. Free: 한 번에 10장까지, 크레딧 비갱신, 기본 이미지 모델. Plus: 월 1,000크레딧, "Made with Gamma" 배지 제거, 한 번에 100장. Pro: 월 4,000크레딧(그 이상은 읽지 않음). 가격 숫자는 이 글에서 읽지 않아 쓰지 않음.
- https://help.gamma.app/en/articles/11047156-what-are-gamma-tokens-and-how-do-they-work : 클래식 생성기의 1회 생성 토큰 한도(Free 50,000 / Plus·Pro 100,000). 비영어는 단어당 토큰이 더 들 수 있음.
- https://help.gamma.app/en/articles/12281928-does-gamma-use-my-content-to-train-its-ai-features : 개인 워크스페이스(Free/Plus/Pro/Ultra) 기본값은 학습 허용, 끌 수 있음(아바타 > Settings > Data Controls). 조직(Business/Enterprise/Teams)은 항상 꺼짐.
- https://help.gamma.app/en/articles/11048534-how-does-gamma-protect-my-data-and-privacy : 덱 전체를 클라우드에 저장. 사용자 업로드·커넥터로 가져온 콘텐츠도 수집 대상 범주.
- https://help.gamma.app/en/articles/11016506-how-do-i-use-gamma-in-my-preferred-language : 인터페이스 언어는 브라우저 설정을 따라가고 사용자 설정에서 바꿀 수 있음. 한국어가 지원 목록에 있는지는 이 글에서 확인하지 못함.

## Claude (support.claude.com)
- https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them : Slides 템플릿은 모든 플랜에서 기본 켜짐(Enterprise는 2026-10-15부터 기본 켜짐, 그 전엔 소유자가 켤 수 있음). 노트·보고서·채팅 작업으로 발표 자료 제작, 슬라이드 직접 편집, Claude 안에서 발표, PowerPoint/PDF 내보내기, Google Slides로 바로 내보내기(편집 가능한 파일). 시작 방법: 채팅에서 요청 / 메시지 상자 "Output"에서 템플릿 선택 / Artifacts 탭. 키보드·스크린리더 사용법 있음.
- https://support.claude.com/en/articles/14604416-get-started-with-claude-design : 기존 슬라이드 덱·문서를 첨부해 스타일을 따라 하게 할 수 있음. Design은 PPTX / Google Slides 내보내기 항목이 있음.
- https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude : 코드 실행·파일 생성으로 xlsx/pptx/docx/PDF 생성, 파일당 30MB, Drive 저장 가능. Free/Pro/Max는 Settings > Capabilities의 "Code execution and file creation" 토글.

## Microsoft Copilot (support.microsoft.com)
- https://support.microsoft.com/en-us/PowerPoint/copilot/create-a-new-presentation-with-copilot-in-powerpoint (support.microsoft.com/en-us/powerpoint 목록의 링크로 도달): 새 프레젠테이션에서 우하단 Copilot 아이콘 > 입력창의 Add Content > Agent Mode > 프롬프트. Copilot이 청중·스타일 질문 후 개요 생성, 개요 수정 후 슬라이드 생성. 길이·톤·스타일·이미지 선호 조정은 Frontier/Insiders에 롤아웃 중이고 곧 전체 제공이라고 안내. Agent Mode의 파일 참조는 "coming soon". Word 문서로 만들 때는 Word 스타일 사용 권장, 24MB 미만 문서가 잘 맞음. 조직 템플릿으로 시작하면 테마 유지. Copilot이 안 보이면 구독/조직 설정에 포함되지 않았을 수 있음. 프롬프트 기반 생성은 한 번에 한 출력 언어만, 결과는 AI 생성물이므로 사람이 검토. AI 생성 이미지는 발표자 노트에 "AI-generated" 표시.

## 확인하지 못한 것
- Gamma: 한국어 생성 품질·지원 범위, Plus/Pro 가격, Pro 이상 세부 기능, 한국 제공 여부.
- Copilot: 한국어 지원 범위, 라이선스별 가격·포함 여부(라이선스 확인 페이지는 열지 않음), Agent Mode 현재 정식 제공 여부.
- Claude Slides: 플랜별 사용량 소모량(공식 수치 없음), 한국어 품질.
- 첫 시도 URL 오류: support.microsoft.com 의 추측 URL 2개는 404였다(이후 목록 페이지의 링크로만 이동).
