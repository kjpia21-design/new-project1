# 작업 명세 — 15단계: 튜토리얼 6편 추가 (3차)

작성: 기획 담당 · 구현: 코딩 에이전트 3명 (K1~K3, 각 2편)

규칙은 `docs/specs/step13-more-tutorials.md`의 "공통 규칙"을 그대로 따른다. 날짜는 `2026-10-15`이다.

## 추가할 튜토리얼

| 담당 | 파일 | 제목(안) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- |
| K1 | `claude/c19-cowork.mdx` | Claude Cowork 시작하기: 내 컴퓨터의 파일·앱으로 일하는 데스크톱 에이전트 | practical | support.claude.com (Cowork 관련 문서), claude.com |
| K1 | `agents/06-browser-agents.mdx` | 브라우저 에이전트 비교: Claude in Chrome·ChatGPT 에이전트·Gemini 에이전트 | practical | support.claude.com, learn.chatgpt.com, support.google.com/gemini |
| K2 | `chat/31-language-learning.mdx` | AI로 영어·외국어 공부하기: 회화 연습, 첨삭, 단어장 | beginner | learn.chatgpt.com(음성), support.google.com/gemini(Live), support.claude.com |
| K2 | `media/32-ai-music.mdx` | AI 음악 만들기: Suno 등으로 배경음악·징글 만들고 저작권 확인하기 | beginner | 각 서비스 공식 도움말·약관(예: suno.com, help.suno.com) |
| K3 | `media/33-video-summary-shorts.mdx` | 영상 요약과 쇼츠 제작: YouTube·Vrew 등으로 긴 영상 다루기 | practical | support.google.com/youtube, vrew.ai 공식 도움말, support.google.com/gemini |
| K3 | `automation/34-blog-writing.mdx` | AI로 블로그 글 쓰기: 기획→초안→검수, 네이버 블로그·브런치 운영 팁 | beginner | 네이버 공식 블로그·도움말, 각 AI 서비스 공식 문서 |

## 편별 지침

- **K1 / C19**
  - 기존 C11(Chrome·컴퓨터 사용), C13(클라우드 세션), C18(반복 업무 자동화)과 겹치지 않게 쓴다. 겹치는 부분은 링크로 대신한다.
  - Cowork가 무엇인지, 어떤 플랜에서 쓸 수 있는지, 설치·폴더 권한, 안전 수칙, 예시 작업을 공식 문서로 확인된 범위에서 쓴다.
  - Claude 사실은 C1, C2와 맞춘다.
- **K1 / agents/06**
  - agents/01과 agents/05의 형식과 안전 원칙을 따른다.
  - 각 제품의 제공 플랜과 지역은 확인된 것만 쓴다. 품질 순위는 매기지 않는다.
- **K2 / chat/31**
  - 음성 대화 기능은 basics/07과 연결한다.
  - 학습용 프롬프트를 5개 이상 넣는다(PromptBox).
  - "AI 첨삭은 틀릴 수 있다"는 주의를 넣는다.
- **K2 / media/32**
  - 상업적 이용 조건과 저작권은 공식 약관에서 확인된 것만 쓰고, basics/09와 연결한다.
  - 공식 문서가 막히면 다룰 범위를 줄이고 그 사실을 밝힌다.
- **K3 / media/33**
  - 영상 요약(Gemini의 YouTube 요약 등)과 편집 도구(Vrew 등 한국 서비스)를 다룬다.
  - 저작권 주의를 넣는다(남의 영상 재편집 금지 등). basics/09와 연결한다.
- **K3 / automation/34**
  - 블로그 플랫폼의 AI 생성 콘텐츠 정책은 공식 공지로 확인된 경우에만 쓴다. 확인하지 못하면 "확인하지 못했어요"라고 쓴다.
  - 저품질·대량 생성 위험과 사실 확인(basics/04 연결)을 강조한다.

## 공통

- 자기 파일과 조사 노트(`docs/research/<분야>/`)만 수정한다. 사이드바는 자동으로 붙는다.
- `claude/index.mdx`의 편수 문구는 K1이 확인해서 필요하면 고친다. 배너의 편수는 자동으로 계산된다.
- `docs/PLAN.md`의 Claude 표에 C19 한 줄을 추가한다(K1).
- 빌드는 `npx astro build --outDir /tmp/build-<담당>`로 한다. git 커밋·푸시는 하지 않는다.
- 보고에 쓸 것: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
