# 작업 명세 — 10단계: 입문 섹션 "AI 첫걸음" + 화면 안내 보강

작성: 기획 담당 · 구현: 코딩 에이전트 9명 (구조 1, 입문 작성 4, 화면 보강 4)

## A. 새 섹션 "AI 첫걸음" (입문 8편)

**대상**: AI를 거의 써 본 적 없는 사람. 컴퓨터와 휴대폰 기본 사용은 할 줄 안다고 가정한다. 전문 용어는 쓰지 않거나, 쓰면 바로 풀어서 설명한다.

| 파일 (`src/content/docs/basics/`) | 제목 | 담당 |
| --- | --- | --- |
| `index.mdx` | AI 첫걸음 (섹션 소개, 읽는 순서) | E0 |
| `01-first-30-minutes.mdx` | AI가 처음인 분을 위한 첫 30분 | E1 |
| `02-sign-up-first-question.mdx` | Claude·ChatGPT·Gemini 가입부터 첫 질문까지 | E1 |
| `03-asking-well.mdx` | 질문 잘하는 법 기초: 이것만 기억하세요 | E2 |
| `04-fact-checking.mdx` | AI 답변 믿어도 될까: 사실 확인하는 법 | E2 |
| `05-privacy-safety.mdx` | 개인정보·회사 정보 안전하게 지키며 쓰기 | E3 |
| `06-everyday-uses.mdx` | 생활 속 AI 활용 10가지 | E3 |
| `07-ai-on-phone.mdx` | 휴대폰에서 AI 쓰기: 앱 설치와 음성 대화 | E4 |
| `08-free-vs-paid.mdx` | 무료로 어디까지? 요금제 고르기 기초 | E4 |

**공통 규칙**
- 구조는 `docs/specs/step2-samples.md`의 9개 섹션을 따른다. 다만 입문에 맞게 짧고 쉽게 쓴다.
  - 따라하기는 5~7단계 이내로 한다.
  - 표는 최소화한다.
  - "자주 막히는 지점"은 초보자가 실제로 겪는 상황으로 쓴다(예: "인증 문자가 안 와요").
- **사실 근거**는 기존 조사 노트와 이미 완성된 편이다.
  - 조사 노트: `docs/research/claude/`, `docs/research/chat/`
  - 완성된 편: `claude/c01~c04`, `c09`, `chat/05` 등
  - 새 사실이 필요하면 공식 페이지를 직접 확인한다. 다른 회사 사이트가 막혀 있으면 learn.chatgpt.com, support.google.com 같은 대체 공식 출처를 쓴다.
  - 가격·연령·지원 지역은 "2026-10-10 기준"을 붙이고, 기존 편과 수치를 맞춘다.
- 각 편 끝의 "다음에 볼 튜토리얼"에는 실무 편(chat/, claude/)으로 이어지는 링크를 넣는다.
- frontmatter: `category: basics`, `level: beginner`, `status: published`, `lastVerified: 2026-10-11`, `sources`.
- 조사 노트(새로 확인한 것이 있을 때만): `docs/research/basics/NN-<slug>.md`.
- 화면 안내 카드(ScreenshotPlaceholder)를 쓸 때는 아래 B의 `officialUrl` 규칙을 따른다.

### E0 — 사이트 구조

`dev` 섹션을 추가했던 커밋("Add developer deep-dive section structure")과 같은 방식으로 한다.

1. `basics`를 등록하고, 분야 이름은 "AI 첫걸음"으로 한다.
   - 등록할 곳: category enum, `tutorials.ts`(Category, categoryLabels, isTutorial)
   - categoryOrder에서는 **맨 앞**에 둔다.
2. 아이콘(인라인 SVG, 새싹 느낌)을 만들고, 분야 카드와 사이드바 그룹을 추가한다. 사이드바는 **맨 위 "시작하기" 바로 다음**에 둔다.
3. `start/beginner.mdx`를 "입문자 시작점" 학습 경로로 다시 쓴다.
   - 순서: basics 01~08 → claude/c01 → c03 → c04 → chat/01.
4. 홈의 "입문" 카드 문구와 링크를 새 섹션에 맞게 고친다.
5. **placeholder를 먼저 만든다**: `basics/01~08`을 draft로 만들되, 파일이 이미 있으면 만들지 않는다. 만든 뒤에는 건드리지 않는다.
6. 화면을 375px·1280px, 라이트·다크로 확인한다. 스크린샷은 `docs/screenshots/step10/`에 저장한다.

## B. 화면 안내 보강 (화면 캡처 대안 A+B)

**B-1. 공식 화면 링크.** `ScreenshotPlaceholder`에 `officialUrl`, `officialLabel` prop이 추가됐다. 담당 범위의 **모든** 안내 카드에 `officialUrl`을 붙인다.
- 링크 대상은 그 단계의 화면이나 절차를 실제로 설명하는 **공식 도움말·문서 페이지**여야 한다.
  - 가능하면 해당 섹션의 앵커까지 넣는다.
  - 페이지를 직접 열어(WebFetch, 또는 한 페이지씩 curl) 내용이 맞는지 확인한다.
- 맞는 공식 페이지가 없으면 붙이지 않는다. 엉뚱한 링크보다 없는 편이 낫다.
- `officialLabel`은 필요할 때만 쓴다. 예: "Anthropic 도움말에서 보기", "GitHub 문서에서 보기".

**B-2. 흐름 도식.** 가장 많이 막히는 절차를 담당별로 **2~4개** 골라, "어디를 누르면 무엇이 나오는지" 보여주는 단순한 흐름 도식을 만든다.
- 형식: 상자와 화살표로 된 단계 흐름이다. 각 상자에는 "화면/메뉴 이름 → 누를 것" 정도만 쓴다.
- **실제 화면을 흉내 내지 않는다.** 로고, 실제 버튼 모양, 실제 레이아웃을 모방하지 않는다.
- 도식 위나 아래에 "단순화한 흐름도예요. 실제 화면은 공식 도움말을 확인하세요"를 표시한다.
- 메뉴 이름은 본문과 조사 노트에서 확인된 것만 쓴다.
- 구현: `src/components/diagrams/Flow<Name>.astro`
  - 기존 도식 컴포넌트의 스타일과 CSS 변수를 따른다.
  - 다크 모드와 375px 화면을 지원해야 한다. 좁은 화면에서는 세로로 쌓는다.
  - 공통 `FlowSteps.astro` 컴포넌트를 S1이 먼저 만든다(steps 배열 prop). 다른 담당은 이것을 재사용한다. 아직 없으면 S1에게 맞추지 말고, 자기 범위 안에서 같은 이름의 컴포넌트를 만들지 않도록 기다리거나 보고한다.

| 담당 | 범위 |
| --- | --- |
| S1 | `claude/` 16편. 먼저 `src/components/FlowSteps.astro`를 만든다. |
| S2 | `agents/`, `dev/` |
| S3 | `chat/`, `coding/` |
| S4 | `media/`, `automation/` |

## 공통

- 다른 에이전트와 동시에 작업한다. **수정 가능한 파일은 자기 담당 범위뿐이다.**
- 빌드는 담당별 `--outDir`로 따로 한다. 미리보기 포트도 담당별로 쓴다.
  - E0: 4600
  - E1~E4: 4601~4604
  - S1~S4: 4611~4614
- 끝나면 미리보기를 끈다(`npx astro preview stop`).
- git 커밋·푸시는 하지 않는다.
- 보고에 포함할 것: 만든 것과 고친 것, 근거 출처, 링크를 못 붙인 카드 수와 이유, 빌드 결과.
