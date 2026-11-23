# dev/23 자체 호스팅 Managed Agents 조사 노트 (2026-11-22, F3)

## 읽은 공식 페이지 (curl 기본 옵션, -L, .md 형식, 한 번에 하나씩, 모두 200)
- https://platform.claude.com/docs/en/managed-agents/self-hosted — 세 가지 옵션 표(클라우드 샌드박스/자체 호스팅 샌드박스/자체 호스팅 Managed Agents), 선택 기준, 구성 요소(cma-server, PostgreSQL 16+, 워커, 콘솔, cma-server-admin), 보안 경고(bash는 실제 셸), 자격 증명 3종, 네트워크 밖으로 나가는 것, 접근은 Anthropic 계정 담당자에게 요청, 서버 라이선스 별도.
- https://platform.claude.com/docs/en/managed-agents/self-hosted/differences — 서버만의 기능, 쓸 수 없는 기능, 다르게 동작하는 기능, 서버 설정이 필요한 기능(mcp.allowed_hostnames, git.*, web_tools.enabled), 제공자별 차이, 빠른 모드 모델 카탈로그.
- https://platform.claude.com/docs/en/managed-agents/self-hosted/inference-provider — provider 5개 값, Bedrock/vertex/foundry/gateway 예시와 필요 권한, 모델 ID 매핑, 단기 토큰(oauth_exchange), Entra 토큰, 확인 로그.
- https://platform.claude.com/docs/en/managed-agents/self-hosted/quickstart — Docker Compose 개발용 스택, .env, readyz, ant CLI 연결, 에이전트·세션 생성, 문제 해결, 중지.
- https://platform.claude.com/docs/en/managed-agents/self-hosted-data-and-access — 서버의 모든 연결 대상, 추론 제공자로 가는 헤더·User-Agent·metadata.user_id, 로그·보관, ZDR 비대상 설명, 리스너, 멀티테넌시.

## 확인하지 못한 것 (읽지 않음)
- 설정 레퍼런스(configuration-reference), Kubernetes 배포(Helm 차트), 업그레이드, 콘솔(싱글 사인온 설정·역할), 에이전트 아이덴티티·시크릿 관리자, call-the-api, 자체 호스팅 샌드박스 보안·워커 페이지, 라이선스 약관 본문: 세부 설정 이름·기본값·역할 권한은 이 편에 쓰지 않음.
- 가격, 요금, 지원 규모, 계정 담당자 요청 절차의 상세, GA/베타 상태 표기: 읽은 페이지에 없었음(미확인).
- 릴리스 아카이브가 없어 서버를 띄우거나 명령을 실행하지 않음. 모든 YAML·명령은 문서의 형태를 옮긴 것이고 키는 자리표시자.
- 퀵스타트의 에이전트 파일은 요약만 적음(문서 원문은 name, model: claude-opus-5-5, agent_toolset_20260401, 시스템 프롬프트).
