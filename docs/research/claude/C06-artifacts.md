# 아티팩트 (Artifacts)

## 핵심 사실
- 아티팩트 = Claude가 만든, 누군가에게 보여줄 만한 결과물(디자인, 슬라이드, 문서, 대시보드, 작은 인터랙티브 도구). 대화 옆에 열린다. 보통 내용이 중요하고 독립적이며(대개 15줄 초과) 수정·재사용될 가능성이 클 때 만든다. (출처: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them)
- 만드는 법: 아무 채팅(Claude Code 포함)에서 요청하거나 Artifacts 탭의 템플릿에서 시작. 템플릿: Docs, Slides, Design(모든 플랜), Dashboards·Motion(베타, 플랜별 상이). 설정에서 클라우드 코드 실행·파일 생성이 켜져 있어야 한다. (출처: 동일)
- 수정: Claude에게 변경 요청, 템플릿형은 직접 편집, 문서에서 텍스트 선택 후 "Edit with Claude", 오류 시 "Try fixing with Claude"(성공 보장 안 됨). 이전 메시지를 수정하면 별도 버전의 대화가 생긴다. (출처: 동일)
- 내보내기: Docs -> Word/PDF/Markdown/Google Docs, Slides -> PowerPoint/PDF/Google Slides, Design -> zip/PDF/PowerPoint/HTML, 애니메이션 -> MP4. (출처: 동일)
- 공유: 아티팩트는 비공개로 시작. Free/Pro/Max는 링크로 공유(Anyone with the link)하거나 이메일로 특정인 초대(베타). Team/Enterprise는 기본적으로 조직 내부에 머문다(옵션: 초대된 사람만 / 조직 내 누구나 / 링크 공유는 Owner가 External sharing을 켜야 함). 링크 수신자는 대개 Claude 로그인이 필요. 권한은 Can view / Commenter / Can edit. (출처: 동일, https://support.claude.com/en/articles/9547008-publish-and-share-artifacts)
- 이메일 초대(베타): 아티팩트당 조직 외부 초대 최대 50명, 대기 초대는 30일 후 만료. (출처: 9547008 문서)
- 레거시 "Publish": 2026-09-16 이전에 채팅에서 만든 아티팩트는 계속 게시·공유할 수 있지만 새로 만들 수는 없다(새 아티팩트는 Share 흐름). 게시 취소(unpublish)는 영구적이라 재게시 불가하고 저장 데이터도 삭제된다. (출처: 17153992, 9547008 문서)
- AI 내장 앱: 아티팩트가 Claude를 직접 호출할 수 있다. 사용자는 자기 Claude 계정으로 로그인하며 API 키 불필요, 만든 사람에게 비용 없음. 사용량은 각 사용자의 플랜 한도에 합산. 새 아티팩트는 첫 사용 때 권한을 묻는다. (출처: 17153992 문서)
- 저장소: Pro/Max/Team/Enterprise의 웹·데스크톱. 개인(private) 저장과 공유(shared) 저장(열람자 모두에게 보임). 아티팩트당 20MB, 텍스트만. 민감 정보 입력 전 공유 저장 여부 확인. (출처: 동일)
- 커넥터: Pro/Max/Team/Enterprise에서 아티팩트가 연결된 앱(Asana, Google Calendar, Slack 등)과 커스텀 커넥터를 읽고 쓸 수 있다. 처음에 승인을 묻고 도구별로 끌 수 있으며, 열람자는 자기 연결을 쓴다. 커넥터/Claude를 쓰는 아티팩트는 링크 공유가 불가. Team/Enterprise Owner가 조직 단위로 끌 수 있다. (출처: 17153992, 9547008 문서)
- 모바일 앱은 아티팩트 보기·편집은 되지만 공유 설정은 웹/데스크톱에서만. (출처: 17153992 문서)
- Claude Code는 세션 결과를 비공개 URL의 아티팩트로 게시해 세션이 진행되며 갱신되게 할 수 있다. 루틴이 기존 아티팩트를 재게시할 때는 조건을 만족하면 승인 없이 가능(내 조직 소유·공개 공유 아님 등). (출처: 지원센터 검색 요약, https://code.claude.com/docs/en/routines)

## 따라하기에 쓸 수 있는 절차
1. 설정에서 코드 실행 및 파일 생성을 켠다. (출처: 17153992 문서)
2. 채팅에 "환율 계산기 앱 만들어줘"처럼 요청 -> 오른쪽에 아티팩트가 열림. (출처: 동일)
3. 수정 요청 반복, 오류 시 "Try fixing with Claude". (출처: 동일)
4. 공유 버튼 -> "Anyone with the link" 또는 이메일 초대(Free/Pro/Max), Team/Enterprise는 조직 내 공유. (출처: 9547008 문서)
5. AI 기능이 있는 앱은 열람자가 자신의 Claude 계정으로 로그인해 쓰도록 안내. (출처: 17153992 문서)

## 확인 못 함 / 주의
- 공유/게시 용어가 전환 중(Publish -> Share)이라 UI 문구가 계정마다 다를 수 있다. 지원센터 문서 간 서술이 일부 불일치해 최신 문서를 우선했다.
- "AI 앱의 호출 횟수 상한" 같은 세부 한도는 확인 못 함.
- 검색 결과 요약으로만 확인한 항목은 "지원센터 검색 요약"으로 표기했다.

## 출처 목록
- [What are artifacts and how do I use them?](https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them) — 확인일 2026-10-10
- [Publish and share artifacts](https://support.claude.com/en/articles/9547008-publish-and-share-artifacts) — 확인일 2026-10-10
- [Routines](https://code.claude.com/docs/en/routines) — 확인일 2026-10-10


## 2026-10-11 업데이트 반영
- 2026-09-16 릴리스 노트의 어느 대화에서나 디자인·슬라이드·문서 생성 내용을 Summary에 반영. 출처: https://support.claude.com/en/articles/12138966-release-notes
- 미반영: 실전 팁의 Claude Code 아티팩트 문장(2.1.275 루틴 갱신)은 changelog 원문 항목을 직접 확인하지 못해 그대로 둠.

## 2026-10-12 점검 반영
- 아티팩트 도움말(17153992): "Docs, Slides, Design은 모든 플랜에서 기본 켜짐. Enterprise는 2026-10-15부터 기본 켜짐." 릴리스 노트(2026-09-16)의 "Enterprise는 베타, 소유자가 켜기 전까지 꺼짐"과 다름. 본문에 둘 다 병기.
- Dashboards(베타): Pro/Max/Team/Enterprise, Enterprise는 소유자가 켜기 전까지 꺼짐. Motion(베타): Team/Enterprise, Team은 기본 켜짐.
- 공유 문서(9547008): 조직 밖 이메일 초대 설정(Organization settings > Artifacts)은 Team 기본 켜짐, Enterprise 기본 꺼짐.
