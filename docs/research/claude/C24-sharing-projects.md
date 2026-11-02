# C24. 프로젝트·대화 공유 (조사 노트, 2026-11-02)

## 확인한 출처 (한 페이지씩 curl, 2026-11-02)
- https://support.claude.com/en/articles/9519189-manage-project-visibility-and-sharing (dateModified 2026-09-24)
- https://support.claude.com/en/articles/10593882-share-and-unshare-chats (dateModified 2026-10-30)
- https://support.claude.com/en/articles/9927533-control-project-sharing-for-your-organization (dateModified 2026-09-24)

## 확인한 사실
- 공개 범위/공유는 Team·Enterprise. 생성 시 Public(조직 전체가 보고 사용) 또는 Private(초대한 멤버만). Share 버튼 > General access에서 "Everyone at [org]" <-> "Only people invited"로 언제든 전환. 공개 프로젝트에서도 내 대화는 공유 전까지 비공개. 비공개 프로젝트는 대화·지식·아티팩트 모두 초대 전 접근 불가.
- 멤버 추가: 이름/이메일(Enterprise는 그룹도), Can view(내용·지식·지침 보기와 대화, 편집 불가) / Can edit(지침·지식 수정, 멤버 설정 변경). 이메일 목록 붙여넣기로 일괄 추가. 제거는 Can edit 멤버가 Share 메뉴에서 역할 > Remove access. 공유받으면 이메일 알림과 "Shared with you" 탭.
- 그룹 공유: Enterprise 베타. 그룹 설정 "Share resources with this group" 필요, 새 그룹 노출·접근 변경에 몇 분(최대 5분), 그룹 탈퇴 시 접근 상실, 그룹 삭제 시 접근 제거.
- 아카이브해도 공유 권한·멤버·지식 유지.
- 관리자: Owner/Primary Owner(Team·Enterprise), Enterprise는 Privacy "Can manage" 커스텀 역할도. Organization settings > Data and privacy > Sharing의 Share projects / Public projects(하위). 끄면 신규 공유 불가, 기존 공유 유지, 공개 프로젝트는 비공개로, 다시 켜도 비공개 유지. 역할별 설정은 Enterprise만(Organization settings > Roles > Capabilities, 최대 15분).
- 대화 공유: 대화 오른쪽 위 Share > Share로 링크. 스냅샷은 공유 전 메시지·아티팩트 포함, 이후 메시지는 비공개. Team/Enterprise는 같은 조직 멤버에게만. 첨부 파일은 스냅샷에 미포함, MCP 도구 호출 원본 데이터는 숨김. 공유 끊기: Share > 공개 범위 드롭다운 > Private. Free/Pro/Max/Ultra는 Settings > Privacy > Shared chats > Manage에서 목록·Unshare.

## 불일치/확인하지 못한 것
- 스냅샷 갱신 방법: 프로젝트 문서는 "New messages since last shared" 옆 Update, 대화 문서는 공유 해제 후 재공유. 둘 다 본문에 병기.
- 드롭다운 표기: 대화 문서 Public->Private, 프로젝트 문서 Shared->Private. 병기.
- Team/Enterprise에서 공유 대화 목록(Settings > Privacy) 존재 여부: 확인하지 못함.
- 커넥터 비공개 프로젝트 제한, 드라이브 비공개 프로젝트 제한은 기존 C5/C23 조사 노트 기준(이번에 재확인하지 않음).
- 플랜 가격, 한국 제공 여부: 확인하지 못함.
