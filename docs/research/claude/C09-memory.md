# 메모리 (Claude 앱의 메모리와 채팅 검색)

## 핵심 사실
- 메모리는 대화 중에 주제(topic) 단위로 자동 저장된다(대화 종료 후 요약 방식이 아님). "이거 기억해줘"라고 직접 요청할 수도 있다. 건강·정치·종교 같은 민감 주제는 옵트인하지 않으면 저장하지 않고, 정부 신분증 번호·금융 계좌번호는 저장하지 않는다. (출처: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)
- 기본값: Free/Pro/Max는 기본 켜짐. Team/Enterprise는 조직 Owner가 활성화해야 하며 멤버별로도 꺼진 상태에서 시작한다. Owner는 개별 멤버의 메모리를 보거나 편집할 수 없고, 조직 차원에서 끄면 모든 사람의 메모리가 영구 삭제된다. HIPAA·공공 부문·맞춤 데이터 보존 계약 조직에는 제공되지 않는다. (출처: 동일)
- 켜고 끄기: Settings > Memory의 "Generate memory from chats". 일시정지(Pause)는 기존 메모리는 유지하되 사용·추가 중단. Reset은 프로젝트 메모리 포함 전부 영구 삭제(되돌릴 수 없음). (출처: 동일)
- 단일 채팅에서 끄기: 첫 메시지 전에 "+" -> Memory 끄기(채팅 시작 후에는 변경 불가). 시크릿(incognito) 채팅: 새 채팅 오른쪽 위 유령 아이콘, 기록·메모리에 저장되지 않고 이후 검색도 안 된다. (출처: 동일)
- 보기·수정: Settings > Memory의 Topics에서 주제를 열어 편집(연필) 또는 Delete. 채팅에서 "그건 잊어줘"라고 말해도 된다. (출처: 동일)
- 프로젝트는 각자 별도의 메모리 공간과 요약을 가지며 다른 프로젝트·일반 채팅과 분리. (출처: 동일)
- 채팅 검색: 유료 플랜(Pro/Max/Team/Enterprise). "지난번에 X에 대해 뭐라고 했지?"처럼 물으면 과거 대화를 검색해 출처를 인용한다. Settings > Memory의 "Search and reference chats"로 끈다. (출처: 동일)
- 메모리는 대화 보존 정책을 따르며, 대화를 삭제해도 그 대화로 생긴 메모리는 별도로 삭제해야 한다. 모든 메모리 데이터는 데이터 내보내기에 포함. (출처: 동일)
- 가져오기/내보내기: 다른 AI의 메모리를 텍스트로 붙여 넣어 가져올 수 있다(Settings > Memory "Start import"; Free/Pro/Max/Team, 웹·데스크톱). 내보내기는 Claude에게 메모리를 그대로 써 달라고 요청. 전체 대화 데이터 내보내기는 Settings > Privacy > Export data(링크 24시간 후 만료). (출처: 지원센터 검색 요약 https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude , https://support.claude.com/en/articles/9450526-export-your-claude-data ; 가져오기 대상 설명은 https://support.claude.com/en/articles/8114491-get-started-with-claude 에서도 확인)
- Cowork: 클라우드에서 실행될 때만 채팅과 메모리를 공유하며 로컬 Cowork 세션은 메모리를 쓰지 않는다. (출처: 11817273 문서)
- Claude Code의 메모리는 별개: CLAUDE.md(내가 작성)와 auto memory(Claude가 작성). 자세한 내용은 C14 참고. (출처: https://code.claude.com/docs/en/memory)

## 따라하기에 쓸 수 있는 절차
1. Settings > Memory에서 "Generate memory from chats" 확인. (출처: 11817273 문서)
2. 채팅에서 "내 직업은 데이터 분석가라는 걸 기억해줘" 같이 요청. (출처: 동일)
3. Settings > Memory > Topics에서 저장 내용 확인·수정·삭제. (출처: 동일)
4. 기록을 남기고 싶지 않으면 유령 아이콘으로 시크릿 채팅. (출처: 동일)

## 확인 못 함 / 주의
- 가져오기/내보내기 문서는 검색 요약으로만 확인(본문 미열람). 구형 "Settings > Capabilities > Memory" UI가 일부 계정에 남아 있을 수 있고 레거시 내보내기 옵션은 2026-09-09까지 표시된다고 요약됨.
- 메모리 용량 한도는 확인 못 함.

## 출처 목록
- [Chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context) — 확인일 2026-10-10
- [Import and export your memory](https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude) — 확인일 2026-10-10 (검색 요약)
- [Get started with Claude](https://support.claude.com/en/articles/8114491-get-started-with-claude) — 확인일 2026-10-10
- [Claude Code memory](https://code.claude.com/docs/en/memory) — 확인일 2026-10-10


## 6단계 재점검 (2026-10-10)
- 메모리 도움말(11817273)에 용량·개수 한도 기재 없음을 확인.

## 2026-10-19 점검 반영
- 메모리 도움말과 가져오기/내보내기 도움말을 다시 읽음. 가져오기 가능 플랜이 Free/Pro/Max/Team/Enterprise로 확인되어 본문 반영(기존엔 Enterprise 누락). 레거시 메모리 내보내기 기한(2026-09-09)은 가져오기/내보내기 문서에는 없고 메모리 도움말에만 있음.

## 2026-10-26 점검 반영
- 메모리 도움말(11817273)·가져오기/내보내기(12123587)를 다시 읽음: 메뉴 경로가 설정(Settings) > Your Claude로 바뀜. 메모리 토글 이름은 "Memory from chats"(예전 화면: 설정 > Memory의 "Generate memory from chats"), 저장 내용 보기·수정은 "Your memory" 옆 Manage > Topics, 가져오기는 Your Claude의 "Start import", 내보내기는 Your Claude > Manage 또는 Claude에게 그대로 써 달라고 요청. 구형 레이아웃은 Settings > Memory / Capabilities. 본문 경로를 새 이름 우선 + 예전 화면 병기로 고침(C9, C17 한 줄).
- 신규 확인: "Include sensitive topics in memory"(Your Claude, 기본 꺼짐); 주민번호·금융계좌번호 등은 요청해도 저장 안 됨; 프로젝트 페이지의 "Use account memory"를 끄면 계정 메모리와 분리; Claude Duet(연구 프리뷰, Pro/Max)도 같은 검색·메모리 설정을 씀. 본문 미반영(참고).
- 데이터 내보내기(9450526): Settings > Privacy > Export data, 링크 24시간 만료, iOS/Android 앱에서는 불가 — 변동 없음. 지침 위치: Settings > Your Claude의 "Instructions for Claude"(예전: Settings > Account) — C3·C9 본문 수정.
