# 프로젝트 (Projects)

## 핵심 사실
- 프로젝트는 자체 대화 기록과 지식 베이스를 가진 독립 작업 공간이다. 모든 사용자(무료 포함)가 쓸 수 있고, 무료는 최대 5개. (출처: https://support.claude.com/en/articles/9517075-what-are-projects)
- 프로젝트 지식(knowledge)에 문서·텍스트·코드를 올리면 그 프로젝트의 모든 대화에서 배경으로 쓴다. 프로젝트 지침(instructions)은 어조·역할 등을 지정하며 프로젝트의 모든 대화에 적용. 지식 베이스에 없는 맥락은 대화 간에 공유되지 않는다. (출처: 동일, https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects)
- 유료 플랜(Pro/Max/Team/Enterprise)은 지식이 컨텍스트 한계에 가까워지면 RAG 모드가 켜져 용량이 최대 10배까지 확장된다. (출처: 동일)
- Team/Enterprise: 공유 가능. 권한은 "Can view"(보기·대화) / "Can edit"(지침·지식 편집, 멤버 관리). 이메일로 개인 지정, 일괄 추가, 조직 전체 공개. 관리자가 공유 기능을 끌 수 있다. (출처: 동일)
- 프로젝트마다 별도의 메모리 공간과 프로젝트 요약이 있어 다른 프로젝트·일반 대화와 분리된다. (출처: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)
- Team/Enterprise에서 커넥터는 비공개 프로젝트에서만 작동하고 동기화 콘텐츠가 있는 채팅은 공유할 수 없다. (출처: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)
- 새 베타 버전 "Projects": 프로젝트가 하나의 대화이고 Claude가 작업을 병렬 클라우드 스레드로 나눠 실행한다. Claude Code(일부 Pro/Max)부터 단계적 롤아웃, 사용량은 플랜 한도에서 차감, 대기자 명단 있음. 기존 채팅·Cowork 프로젝트는 그대로. 이 프로젝트 스레드는 저장소마다 Claude GitHub App 설치가 필요하고 프로젝트 설정의 환경을 쓴다. (출처: https://support.claude.com/en/articles/9517075-what-are-projects , https://code.claude.com/docs/en/claude-code-on-the-web)
- 아카이브: 프로젝트의 "..." 메뉴 -> 아카이브(공유·멤버·지식 유지). 삭제하려면 먼저 아카이브 해제. (출처: https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects)

## 따라하기에 쓸 수 있는 절차
1. 왼쪽 사이드바 "Projects" 또는 claude.ai/projects -> 오른쪽 위 "+ New Project". (출처: https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects)
2. 이름과 설명 입력(Claude는 이 이름·설명을 보지 못함). Team/Enterprise면 비공개/조직 공개 선택. (출처: 동일)
3. 프로젝트 페이지 오른쪽 "+"로 파일·텍스트 추가. (출처: 동일)
4. "Set project instructions"에 지침 입력 후 저장. (출처: 동일)
5. (Team/Enterprise) "Share project" -> 멤버 추가 -> 권한 선택 -> Share. (출처: 동일)

## 확인 못 함 / 주의
- 파일 크기·개수 상한은 공식 문서에 명시되지 않음(확인 못 함).
- 신버전(베타) 프로젝트의 일반 사용자 대상 공개 시점은 확인 못 함.
- 프로젝트 메모리 동작은 프로젝트 문서에는 상세 설명이 없고 메모리 문서에서만 확인.

## 출처 목록
- [What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects) — 확인일 2026-10-10
- [How can I create and manage projects?](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) — 확인일 2026-10-10
- [Chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context) — 확인일 2026-10-10

## 2026-10-19 점검 반영
- 프로젝트 도움말 2종을 다시 읽음. 무료 5개, RAG 최대 10배, 공유(Team/Enterprise), 새 베타 Projects(일부 Pro/Max Claude Code 사용자, 대기자 명단) 변동 없음.
