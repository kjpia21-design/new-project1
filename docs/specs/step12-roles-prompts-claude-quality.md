# 작업 명세 — 12단계: 직무별 가이드, 프롬프트 모음집, Claude 실전편, 품질 점검

작성: 기획 담당 · 구현: 코딩 에이전트 5명 (G1~G5)

## 공통 규칙

- **문체**: 친근한 존댓말("~해요")로 쓴다. 전문 용어는 처음 나올 때 풀어 쓰고, [AI 용어 사전](/new-project1/start/glossary/)으로 링크해도 된다.
- **사실 근거**: 기존 튜토리얼과 `docs/research/` 노트를 쓴다.
  - 새 사실이 필요하면 공식 페이지를 한 번에 하나씩 `curl -sL -m 20 -A "Mozilla/5.0"`로 직접 확인한다. 대량 다운로드 스크립트는 쓰지 않고, 권한이 거부되면 우회하지 않는다.
  - 가격·한도에는 "2026-10-13 기준"을 붙인다.
  - 확인하지 못한 것은 추측으로 쓰지 않는다.
- **내부 링크**: `/new-project1/...` 절대경로로 쓰고, 실제로 있는 페이지만 가리킨다(links validator).
- **컴포넌트**: `src/components/`의 PromptBox(복사 버튼 있음), Summary, Checklist, FlowSteps, Aside, Steps, LinkCard, CardGrid 등을 재사용한다.
- **사이드바**: `astro.config.mjs`는 **기획 담당만 수정한다.** 에이전트는 사이드바를 건드리지 않는다.
- **수정 범위**: 자기 담당 파일만 수정한다. git 커밋·푸시는 하지 않는다.
- **빌드**: `npx astro build --outDir /tmp/build-<담당>`로 확인한다.
  - 빌드는 공유 캐시 충돌로 실패할 수 있다. 실패하면 한 번 더 실행한다.
- **보고**: 만든 파일, 근거 출처, 빌드 결과를 짧게 쓴다.

## G1·G2 — 직무별 AI 활용 가이드 (`src/content/docs/roles/`)

일반 페이지로 만든다. 튜토리얼 frontmatter(level, category 등)는 넣지 않고 `title`, `description`만 쓴다.

**각 직무 페이지 구성**
1. **이런 분께**: 대상 직무와 흔한 고민을 2~3줄로 쓴다.
2. **이 직무에서 AI가 특히 도움 되는 일 TOP 5**: 업무 장면별로 쓴다. 각 항목에는 아래 셋을 넣는다.
   - 무엇을 할 수 있는지
   - 추천 도구
   - 바로 쓰는 PromptBox 1개
3. **실전 하루 시나리오**: 아침부터 퇴근까지 3~5단계로 쓴다. 이 부분에는 FlowSteps를 써도 된다.
4. **추천 학습 경로**: 기존 튜토리얼 6~10편을 순서대로 링크하고, 왜 그 순서인지 한 줄씩 붙인다.
5. **주의할 점**: 직무 특성에 맞는 개인정보·저작권·사실 확인 문제를 짚고, basics/05, basics/04, agents/05 등으로 링크한다.
6. **다음 단계**: 관련 직무 페이지와 프롬프트 모음집으로 링크한다.

**파일 배정**
- G1:
  - `roles/index.mdx`: 섹션 소개와 직무 카드 6개(CardGrid/LinkCard). 6개 직무 페이지 전부에 링크한다.
  - `roles/marketer.mdx`: 마케터·콘텐츠 담당
  - `roles/office.mdx`: 사무·기획·관리직
- G2:
  - `roles/teacher.mdx`: 교사·강사·교육 담당. 수업 준비, 평가 문항, 피드백, 학생 개인정보 주의를 다룬다.
  - `roles/student.mdx`: 학생·취업 준비생. AI로 공부하는 법과 학업 윤리를 다룬다.
  - `roles/developer.mdx`: 개발자
  - `roles/solo-business.mdx`: 1인 사업자·소상공인

G1의 index는 G2 파일명을 위 이름 그대로 링크한다. 빌드 시점에 G2 파일이 아직 없으면 그 링크 때문에 실패할 수 있는데, 이것은 정상이다. G1은 자기 페이지의 내용만 맞으면 된다.

## G3 — 프롬프트 모음집 (`src/content/docs/start/prompts.mdx`)

- 일반 페이지로 만든다. 제목은 "바로 쓰는 프롬프트 모음"이다.
- 기존 튜토리얼에 있는 PromptBox와 프롬프트 예시를 grep으로 모아 **용도별**로 다시 정리한다.
  - 용도 예: 글쓰기·요약, 이메일·보고서, 회의·정리, 기획·아이디어, 데이터·표, 학습·설명, 이미지·영상, 코딩, Claude 전용(프로젝트·스킬·아티팩트).
- **분량과 형식**:
  - 40~60개를 싣는다.
  - 각 항목에는 아래 셋을 넣는다.
    - 짧은 제목
    - PromptBox
    - "출처 튜토리얼" 링크 1개
  - `[대괄호]` 자리표시자는 그대로 둔다.
- 상단에는 사용법을 3줄로 쓰고, 목차 역할을 하는 용도별 앵커 목록을 둔다.
- 기존 튜토리얼 파일은 수정하지 않는다.

## G4 — Claude 실전편 2편 (`src/content/docs/claude/`)

기존 c01~c16 구조(9개 섹션, frontmatter 규칙: `category: claude`, `status: published`, `lastVerified: 2026-10-13`, `sources`)를 따른다.

- **`c17-workday-workflow.mdx`** "Claude로 업무 하루 굴리기: 실전 조합 사례" (level: practical)
  - 프로젝트, 커넥터, 스킬, 리서치, 아티팩트, 메모리를 하루 흐름 안에서 어떻게 조합하는지 보여 준다.
  - 각 장면에서 해당 c편으로 링크한다.
- **`c18-automate-recurring.mdx`** "반복 업무 자동 실행하기" (level: advanced)
  - Claude에서 반복 작업을 예약하거나 자동 실행하는 공식 기능을 다룬다.
    - 예: Claude Code 클라우드의 예약 실행(routines/scheduled tasks), Claude 앱의 예약 작업 기능 등.
  - 어떤 기능이 있는지는 code.claude.com/docs, support.claude.com에서 **먼저 확인한다.** 확인된 기능만 쓴다.
  - 기존 c13·c14와 겹치는지 확인하고, 겹치는 내용은 링크로 대신한다.
  - 사례: 이 사이트가 쓰는 "매일 아침 공식 소식 확인 → PR 생성" 루틴.
    - 일반화해서 소개하고, 계정 정보나 크레딧 금액은 쓰지 않는다.
- `claude/index.mdx`에 C17·C18이 목록으로 있으면 추가한다. `docs/PLAN.md`의 Claude 표에도 2줄을 추가한다.
- 조사 노트는 `docs/research/claude/c17-c18.md`에 쓴다.

## G5 — 사이트 품질 점검 (접근성·성능)

**점검 방법**
- 빌드한 뒤 `npx astro preview --port 4620 --outDir /tmp/build-g5`로 띄운다.
  - Chromium은 `/opt/pw-browsers`에 미리 설치되어 있다. Playwright를 쓰고, `playwright install`은 실행하지 않는다.
  - axe-core가 필요하면 스크래치 디렉터리에서 설치해 쓰고, 저장소 package.json에는 추가하지 않는다.
- **대표 페이지 8개**: 홈, tutorials, claude/c01, basics/01, media/12, start/glossary(있으면), 404, claude-news.
  - 375px·1280px, 라이트·다크 모드에서 점검한다.

**점검 항목**
- 색 대비 WCAG AA
- 이미지 alt
- 제목 순서
- 링크 이름
- 키보드 포커스 표시
- 터치 영역
- 가로 스크롤
- 큰 이미지·폰트 로딩
- CLS 유발 요소

**수정과 보고**
- 고칠 수 있는 범위는 `src/components/`, `src/styles/`, `public/`(이미지 최적화)이다. **content/ 아래 mdx는 수정하지 않는다.**
- 결과는 `docs/quality/2026-10-13-a11y-perf.md`에 남긴다. 발견한 것, 고친 것, 남은 것을 적는다.
- 끝나면 `npx astro preview stop`으로 미리보기를 끈다. `pkill`은 쓰지 않는다.
