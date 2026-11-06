# dev/22 Admin API 조사 노트 (2026-11-06, E6)

## 읽은 공식 페이지 (curl 기본 옵션, .md 형식)
- https://platform.claude.com/docs/en/manage-claude/admin-api — 자격 증명 3종(Admin 키 sk-ant-admin..., org:admin OAuth 베어러, 워크스페이스에 안 묶인 개인/서비스 계정 키), 개인 계정 불가, 리소스(구성원·초대·워크스페이스·워크스페이스 구성원·API 키), 조직 역할 5종, anthropic-version 2026-10-21 예제, API 키 생성 불가(조회·이름·상태만), admin 구성원 삭제 불가, 초대 21일 만료, 모범 사례.
- https://platform.claude.com/docs/en/manage-claude/admin-api-keys — Console 키: admin 역할만 생성, 범위 선택 없음(전체 접근), 비밀 값 1회 표시; Enterprise 키: claude.ai에서 생성, sk-ant-api01-, 범위 표, 범위는 생성 시 고정, 범위 초과 시 403.
- https://platform.claude.com/docs/en/manage-claude/workspaces — Default Workspace, 최대 100개, 워크스페이스 역할·상속, 키 삭제 시 동작, 생성/목록 curl.
- https://platform.claude.com/docs/en/manage-claude/user-management — 로그아웃 엔드포인트(베타, anthropic-beta: admin-user-sign-out-2026-10-08, write:members, primary owner 불가, API 키는 유지).

## 확인하지 못한 것
- 개별 엔드포인트 API 레퍼런스(platform.claude.com/docs/en/api/organization/...)는 열지 않음: 매개변수·응답 필드 전체.
- `status`만 보내는 키 수정 요청이 허용되는지(공식 예제는 status+name).
- Python SDK `client.organization.*`는 문서 예제 그대로 썼으나 실제 설치본으로 실행하지 않음(문법 검사만).
- `administration-api.md` URL은 404(올바른 주소는 admin-api). Workload Identity Federation(wif-admin-api) 페이지는 읽지 않음.
- 실제 Admin 키가 없어 어떤 API도 호출하지 않음. 가격·한도 수치는 쓰지 않음.
