# 42. n8n으로 AI 자동화 워크플로 만들기 (N3, 2026-10-31 조사)

방법: curl로 한 번에 한 페이지씩. docs.n8n.io는 페이지 URL 뒤에 `.md`를 붙이면 마크다운 원문이 열려 이를 사용(차단 없음). 대량 다운로드 없음(llms.txt 인덱스 1회 열람으로 URL 확인).

## 확인한 출처와 사실
- https://docs.n8n.io/choose-n8n/ : Cloud(완전 관리형, 14일 무료 체험 후 Starter/Pro/Enterprise) vs 셀프호스팅(Community 무료, "almost the complete feature set"; 등록 시 무료 추가 기능; Business/Enterprise 유료 라이선스). 설치·운영은 기술 지식 필요, 서버 경험이 없으면 Cloud 권장. 유료 필요 기능 목록: 커스텀 변수, Environments, 외부 시크릿, 로그 스트리밍, Multi-main, Projects, SSO, 워크플로·자격 증명 공유, Git 버전 관리. 최신 가격은 pricing 페이지가 기준이라고 안내.
- https://docs.n8n.io/deploy/host-n8n/community-edition-features.md : Community 에디션에서 빠지는 기능 목록(위와 같음), Registered Community는 이메일 등록으로 무료 기능 추가(Settings > Usage and plan > Unlock는 choose-n8n 페이지에 있음).
- https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial.md : 새 Cloud 체험 14일, Pro 기능, 실행 1000회 제한·Starter와 같은 컴퓨팅. 업그레이드 안 하면 체험 만료 시 인스턴스 삭제, 90일 안에 워크플로 다운로드 가능. 카드 정보 관련 문구는 이 페이지에 없음(가격 페이지의 "No credit card required" 확인).
- https://n8n.io/pricing/ (열람 2026-10-31): Starter 20€/월(연간 결제 기준) 월 2.5K 실행, Pro 50€/월(연간 결제 기준) 10K 실행, Business 667€/월(연간 결제 기준) 40K 실행·셀프호스트 전용 표기, Enterprise 영업 문의. 월 단위 결제 가격은 페이지 텍스트에서 확인 못 함. 환율·세금 미확인.
- https://docs.n8n.io/deploy/host-n8n/install-options.md : 설치 방법 5종(원라인, Docker Compose, npm, Docker, 클라우드 제공자). Docker 페이지(구버전)는 "outdated, Docker Compose 권장", 포트 5678, 기본 DB SQLite.
- https://docs.n8n.io/build/integrate-ai.md (docs.n8n.io/advanced-ai/ 에서 이동): OpenAI·Anthropic·Google 등 LLM 연결, 도구·메모리 추가.
- https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm.md : Basic LLM Chain = 프롬프트 설정(Define below / 이전 노드에서 chatInput 자동), System/AI/User 메시지.
- https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent.md : AI Agent 노드는 채팅 모델 + 도구 연결, 도구 하나 이상 필수, 에이전트 유형 설정은 1.82.0부터 폐지(모두 Tools Agent).
- https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic.md : Anthropic Chat Model 하위 노드, Cloud에서는 "Use Gateway credits"로 API 키 없이 사용 가능, Prompt Caching 옵션. 모델 목록은 이 페이지에 "Claude / Claude Instant"로만 적혀 있어 오래된 정보 → 모델명 본문에 쓰지 않음(화면의 목록을 따르라고 안내).
- https://docs.n8n.io/integrations/builtin/credentials/anthropic.md : 인증은 API 키. Anthropic Console > Settings > API Keys > Create Key, 키를 n8n 자격 증명에 입력.
- https://docs.n8n.io/deploy/use-n8n-cloud/gateway-credits.md : Gateway credits는 Cloud Starter·Pro(2.36.0부터), Enterprise·셀프호스팅 불가. 체험판에 포함, 충전은 유료 전환 후. 요금은 service pricing 페이지(https://app.n8n.cloud/service-pricing, 열지 않음) 기준.
- https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger.md : 이벤트 Message Received(Poll Time마다), Label Names or IDs/Search/Read Status/Sender 필터, Max Emails per Poll 기본 10(최대 50), 읽지 않은 메일만이 기본.
- https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/draft-operations.md : Draft > Create (Subject, Email Type, Message, To Email, Thread ID 등).
- https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger.md : 스케줄 트리거는 워크플로를 저장 후 게시(publish)해야 동작, 타임존 설정에 의존.
- https://docs.n8n.io/build-your-first-workflow.md : 첫 워크플로 따라 하기. n8n Assistant(프리뷰, Cloud Starter·Pro / 셀프호스팅 Community 등)로 프롬프트에서 워크플로 생성, 게시해야 스케줄 실행. 직접 노드로 만드는 절차도 있음.
- https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools.md : AI Agent의 특정 도구 실행 전 사람 승인(Approve/Deny) 요구 가능. 되돌릴 수 없는 작업(메일 발송, 삭제 등)에 권장.

## 확인하지 못한 것
- n8n 한국어 UI 지원 여부(문서에서 못 찾음). 한국 내 결제 통화·세금.
- Starter/Pro 월 단위 결제 가격, Cloud 체험 이후 정확한 한도(가격 페이지 텍스트만 확인, 월 결제 가격 미확인).
- Gateway credits 요금 상세(app.n8n.cloud/service-pricing 미열람).
- Google 자격 증명(OAuth) 설정 상세 절차(Google credentials 페이지 미열람).
- Anthropic Chat Model에서 선택 가능한 현재 모델 목록(문서가 오래된 표기).
- Gmail 트리거의 폴링 최소 간격(poll-mode 페이지 미열람).
- 본문 Gmail Trigger → Basic LLM Chain → Gmail 초안 구성은 각 노드 문서에 근거해 구성한 예시이며 실제 실행은 하지 않았음.
