# automation/50 반복 문서 템플릿 만들기 조사 노트 (2026-11-02, Z4)

## (a) 확인됨 (curl 기본 옵션, -L, 한 페이지씩)
- https://support.claude.com/en/articles/9517075-what-are-projects (200) : 프로젝트는 자체 대화 기록과 지식 베이스를 가진 독립 작업 공간. 문서·컨텍스트 업로드, 프로젝트 지침 설정. 모든 사용자(무료 포함) 사용 가능, 무료는 프로젝트 최대 5개. 유료 플랜은 RAG로 지식 용량 확장(최대 10배). Team/Enterprise는 프로젝트 공유(Can view / Can edit). 새 버전 프로젝트(베타)가 단계적으로 배포 중이며 이 글은 "현재 버전" 설명.
- https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects (200) : claude.ai/projects에서 "+ New Project", 이름·설명(Claude는 이 둘을 볼 수 없음), 지식 베이스 "+" 업로드, "Set project instructions" -> "Save instructions". 같은 프로젝트의 대화 간 컨텍스트는 지식 베이스에 넣은 것만 공유. 프로젝트별 메모리 있음.
- https://support.claude.com/en/articles/12512180-use-skills-in-claude (200) : 스킬은 Free/Pro/Max/Ultra/Team/Enterprise에서 사용 가능, 코드 실행 활성화 필요. Customize > Skills에서 토글, 사용자 지정 스킬은 ZIP 업로드(+ > Create skill > Upload a skill). 올린 스킬은 공유 전에는 동료에게 안 보임. Team/Enterprise는 공유(보기 전용)·조직 게시. Anthropic 기본 스킬: Excel, Word, PowerPoint, PDF.
- https://support.claude.com/en/articles/12512198-how-to-create-custom-skills (200) : skill.md 필수(YAML 머리말 name 64자, description 200자 이내), 폴더 이름=스킬 이름, ZIP 루트가 스킬 폴더, 업로드 전후 테스트, 모범 사례(한 워크플로에 집중, 예시 포함), 보안(비밀 정보 하드코딩 금지, 내려받은 스킬은 검토). 화면 녹화로 스킬 만들기는 Mac용 Cowork, Pro/Max/Ultra/Team 한정(녹화 중 비밀번호·민감 정보 표시 금지).
- https://support.google.com/docs/answer/148819?hl=en (200) : Google 템플릿 갤러리(Docs/Sheets/Slides/Forms), 템플릿은 복사본으로 열림, 파일 > 사본 만들기, Docs에서 파일 > 새로 만들기 > 템플릿에서 삽입. 일부 템플릿 기능은 업무/학교 계정 한정.

## (b) 확인하지 못함 / 글에서 주장하지 않음
- ChatGPT·Gemini의 프로젝트/Gem 등 템플릿 재사용 기능 공식 도움말은 이번에 읽지 않음(글에서 다루지 않음).
- Microsoft Word 템플릿(.dotx) 공식 도움말: 읽지 않음.
- 새 버전 프로젝트(베타)의 UI와 세부 동작: 읽은 페이지는 개요만 제공. 현재 버전 기준으로만 설명.
- 스킬 이름 `skill.md` 대소문자 표기: 페이지는 소문자 skill.md로 적음(Claude Code 문서의 SKILL.md와 다를 수 있음, 미확인).
- 실제 계정에서 단계를 실행하지 않음.
