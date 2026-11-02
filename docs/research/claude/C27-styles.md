# C27. Claude 답변 방식 맞추기: 스타일과 개인화 (조사 노트, 2026-11-02)

## 확인한 출처 (curl 기본 옵션 -L, 한 페이지씩)
- https://code.claude.com/docs/en/output-styles (200)
- https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features (200, dateModified 2026-10-23)
- https://support.claude.com/en/articles/12260368-use-incognito-chats (200, dateModified 2026-10-30)
- https://support.claude.com/en/articles/12738598-adapt-to-new-model-personas-after-deprecations (200, 2026-07-10)
- 컬렉션 목록: .../collections/4078531-claude, 18031818-personalization-and-settings, 18031719-features-and-capabilities, 9811058-get-started-with-claude, 18031977-conversation-management, 9387080-claude-mobile-apps (스타일 전용 문서 링크 없음)
- 읽었으나 "style" 언급 없음: release-notes(12138966), use-skills-in-claude(12512180), change-the-model-effort-and-thinking-settings(8664678), how-to-use-claude-in-your-preferred-language(10769299)
- 도움말 검색 ?q=styles, /search?q=styles: 채팅 스타일 전용 문서 없음.
- 추측한 URL 10181068-configure-and-use-styles, -configuring-and-using-styles, 10181068 단독: 404. 사용하지 않음.

## 확인한 사실
- 출력 스타일(Claude Code): 세션 전체의 역할·말투·답변 형식 지침. 기본 Default + Proactive/Concise/Explanatory/Learning. Concise는 v2.1.237+. Explanatory는 Insight 블록(파일에 주석으로 쓰지 않음). Learning은 TODO(human).
- 전환: /output-style <이름>(대소문자 무시, 인자 없으면 목록), /config > Output style, VS Code Output styles 메뉴(v2.1.257+), 데스크톱은 outputStyle 설정 필드. 선택은 .claude/settings.local.json 저장. 설정 파일 값은 대소문자 구분. 사용자 기본값은 ~/.claude/settings.json, 프로젝트 설정이 우선. 원격(모바일/웹, Remote Control)에서는 기본 스타일만, v2.1.269+. 다음 메시지부터 적용(v2.1.251 이전은 /clear 필요).
- 사용자 정의: Markdown + frontmatter(name, description, keep-coding-instructions, force-for-plugin). 위치 ~/.claude/output-styles, .claude/output-styles, 관리 정책. 터미널은 시작 시 읽으므로 재시작.
- 보장 아님: 스타일은 지침. CLAUDE.md, skill, hook, subagent, --append-system-prompt와 비교표 있음.
- 개인화 문서: 계정 Instructions(이니셜 > Settings > Your Claude), 프로젝트 지침(프로젝트는 무료도 가능, 무료 최대 5개; "paid plans only"로 안내하는 문장도 같은 문서에 있음), Skills(톤·형식 조정).
- 시크릿 채팅 문서: 프로필 정보(custom styles, 개인 설정)를 시크릿 채팅에서 Claude가 쓸 수 있음.

## 확인하지 못한 것
- 채팅 앱(웹/모바일/데스크톱)의 "스타일" 선택 기능(프리셋 이름, 사용자 정의 방법, 지원 플랜): 공식 페이지에서 확인 못 함 -> 본문에서 설명하지 않고 범위를 좁힘.
- 프로젝트 지침의 플랜 조건: 같은 문서 안에서 "모든 사용자 프로젝트 가능"과 "paid plans only"가 함께 나와 본문은 둘 다 그대로 옮김.
- Claude Code를 직접 실행하지 않음(공식 문서 기반). 한국어 응답 품질 영향은 확인하지 못함.
- C4, C5, C8, C9, coding/40, basics/05는 사이트 내 기존 글, 재조사하지 않음.
