# 스킬 (Skills)

## 핵심 사실
- 스킬 = 지침·스크립트·리소스가 담긴 폴더로, Claude가 전문 작업에 필요할 때 동적으로 불러온다. Free/Pro/Max/Team/Enterprise에서 사용 가능하며 코드 실행(code execution)이 켜져 있어야 한다. Claude Code와 API(코드 실행 도구, 베타)에서도 쓴다. (출처: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills , https://support.claude.com/en/articles/12512180-use-skills-in-claude)
- 내장(Anthropic 제공) 스킬: Excel, Word, PowerPoint, PDF 생성·처리. 코드 실행이 켜져 있으면 요청에 맞는 내장 스킬을 Claude가 자동 선택한다(예: 분기 실적 발표자료 요청 -> PowerPoint 스킬). (출처: 12512180 문서)
- 켜는 법(개인 플랜): Settings > Capabilities에서 "Code execution and file creation" 켜기 -> Customize > Skills에서 스킬별 토글. Team/Enterprise는 Owner가 Organization settings > Plugins & skills(Policy 탭)에서 코드 실행·스킬을 켜야 한다. (출처: 12512180 문서)
- 커스텀 스킬 구조(지원센터 문서): 폴더 이름이 스킬 이름과 같아야 하며 `skill.md`(문서는 소문자로 표기)가 필요. 파일 맨 위 YAML frontmatter: `name`(필수, 최대 64자), `description`(필수, 최대 200자; Claude가 언제 쓸지 판단하는 근거), 선택 `dependencies`(예: python>=3.8). 본문에 지침·예시·적용 시점. 선택적으로 REFERENCE.md 같은 참조 파일과 실행 스크립트. (출처: 12512198 문서)
- ZIP 규칙: ZIP의 루트에 스킬 폴더가 있어야 하고 파일이 ZIP 루트에 흩어져 있으면 안 된다. 예: `my-skill.zip` 안에 `my-skill/skill.md`, `my-skill/resources/`. (출처: 동일)
- 업로드: Customize > Skills -> "+" -> Create skill -> Upload a skill -> ZIP 선택 -> 목록에서 토글. (출처: 지원센터 검색 요약; 12512180 문서도 Customize > Skills로 ZIP 업로드 확인)
- 팁: 하나의 스킬은 하나의 워크플로에 집중, 구체적인 description, 간단한 Markdown으로 시작해 나중에 스크립트 추가, 입출력 예시 포함, 변경 후 테스트(여러 프롬프트로 트리거 확인). agentskills.io 사양 준수 시 호환성 향상. (출처: 12512198 문서)
- 보안: 스킬은 서드파티 패키지를 포함·설치할 수 있어 프롬프트 인젝션·데이터 유출 위험. "신뢰할 수 있는 출처의 스킬만 설치", 활성화 전 번들 파일(특히 코드, 스크립트, 외부 네트워크 연결 지시)을 읽을 것. API 키·비밀번호 하드코딩 금지. Enterprise는 스킬 스캔 가능. (출처: 12512180, 12512198 문서)
- Team/Enterprise 공유: 특정 사람(Enterprise는 그룹)에게 공유(보기 전용, 업데이트 자동 반영) 또는 조직 라이브러리에 게시(검토 필요 조직도 있음). Claude Code v2.1.273 이상에서는 같은 계정의 활성화된 스킬이 세션 시작 때 동기화되어 `/skills`에 나타난다. (출처: 12512180 문서)
- Claude Code의 스킬(파일 기반): 위치 `~/.claude/skills/<name>/SKILL.md`(개인), `.claude/skills/<name>/SKILL.md`(프로젝트), 플러그인, 엔터프라이즈 관리 설정. `/skill-name`으로 직접 호출하거나 description에 맞으면 Claude가 자동 로드. 주요 frontmatter: `name`, `description`, `when_to_use`, `argument-hint`, `disable-model-invocation`, `user-invocable`, `allowed-tools`, `context: fork`, `model`, `effort`, `paths`, `hooks`. 같은 이름이면 enterprise > personal > project 우선. 커스텀 명령은 스킬로 통합. (출처: https://code.claude.com/docs/en/skills)
- Claude Code 번들 스킬: `/doctor`, `/code-review`, `/batch`, `/debug`, `/loop`, `/claude-api`, `/verify`, `/run`. (출처: 동일)
- Claude Code SKILL.md 예: frontmatter에 `description: Summarizes uncommitted changes and flags risks. Use when ...`, 본문에 `` !`git diff HEAD` `` 로 실시간 diff 삽입. `~/.claude/skills/summarize-changes/SKILL.md`로 저장 후 `/summarize-changes`. (출처: 동일)

## 따라하기에 쓸 수 있는 절차
1. (claude.ai) Settings > Capabilities에서 코드 실행·파일 생성 켜기. (출처: 12512180 문서)
2. `my-skill/skill.md` 작성: frontmatter(name, description) + 지침. (출처: 12512198 문서)
3. 폴더째 ZIP -> Customize > Skills > + > Create skill > Upload a skill. (출처: 12512198 / 검색 요약)
4. 관련 요청을 보내 스킬이 불려오는지 확인, description 다듬기. (출처: 12512198 문서)
5. (Claude Code) `~/.claude/skills/summarize-changes/SKILL.md` 생성 -> `/summarize-changes` 실행. (출처: https://code.claude.com/docs/en/skills)

## 확인 못 함 / 주의
- 파일명 대소문자: 지원센터는 `skill.md`, Claude Code/Platform 문서는 `SKILL.md`. 실습에서는 `SKILL.md`(대문자)를 쓰는 것이 안전하다고 보이나 지원센터 문서와 불일치하므로 확정하지 못함.
- claude.ai 업로드의 크기 제한은 확인 못 함.
- "Create skill" 대화로 만들기(12599426)와 화면 녹화로 만들기(Cowork, Pro/Max/Team, Mac)는 본문을 직접 읽지 못함.

## 출처 목록
- [How to create custom skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) — 확인일 2026-10-10
- [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude) — 확인일 2026-10-10
- [Claude Code Skills](https://code.claude.com/docs/en/skills) — 확인일 2026-10-10


## 6단계 재점검 (2026-10-10)
- 스킬 도움말(12512180): ZIP 크기 초과가 실패 원인이라고만 하고 수치 없음.


## 2026-10-11 업데이트 반영
- Claude Code changelog(https://code.claude.com/docs/en/changelog 2.1.293, 원문 CHANGELOG.md 확인): claude.ai 스킬 동기화는 세션 미사용 중 약 40분마다(이전 10분). `syncClaudeAiSkills: false`/`syncClaudeAiPlugins: false`로 해제. 클라우드 세션은 `anthropic-skills:<name>`, `anthropic-skills` 이름공간 로컬 스킬은 로드 안 됨(2.1.282). `/skill-doctor`: 안 쓰는 스킬과 컨텍스트 비용 표시.
- 2026-09-25 플러그인 제출 포털(릴리스 노트).
- 이전 본문의 "v2.1.273 이상" 문구는 제거(원문에서 최초 도입 버전은 2.1.275 근처로 보이나 확정 못 함).
