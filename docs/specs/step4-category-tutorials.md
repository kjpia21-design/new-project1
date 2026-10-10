# 작업 명세 — 4단계: 분야별 튜토리얼 20편 (조사 + 작성)

작성: 기획 담당 · 구현: 코딩 에이전트 4명 (분야별 1명, 각자 조사와 작성을 함께 맡음)

## 공통 규칙

`docs/specs/step2-samples.md`와 `docs/specs/step3-claude-tutorials.md`의 **구조·정확성·문체·작업 범위 규칙을 그대로 적용**한다. 여기에는 이번 단계에서 다른 점만 적는다.

### 1) 먼저 조사하고 기록한다

- 맡은 분야의 조사 노트를 `docs/research/<분야>/NN-<slug>.md`에 편마다 하나씩 쓴다. 형식은 `docs/research/claude/C01-models.md`와 같다.
  - 섹션: 핵심 사실 / 따라하기 절차 / 확인 못 함 / 출처 목록
  - 모든 사실에 출처 URL을 단다.
- 근거로 쓸 수 있는 것은 **각 도구의 공식 사이트, 공식 도움말, 공식 블로그, 공식 가격 페이지**뿐이다.
  - 예: help.openai.com, openai.com, support.google.com, gemini.google, cursor.com/docs, help.canva.com, notion.com/help, zapier.com/help, help.make.com
  - 뉴스 기사, 개인 블로그, 비교 사이트는 근거로 쓰지 않는다.
- Anthropic 쪽 사실은 `docs/research/claude/`에 이미 있는 내용을 재사용한다.
- WebSearch와 WebFetch는 ToolSearch `select:WebFetch,WebSearch`로 불러 쓴다.
- 조사에서 확인한 것만 본문에 쓴다. 확인하지 못한 것(가격, 무료 한도, 한국어 지원 여부, 메뉴 이름)은 단정하지 말고 "공식 페이지에서 확인하세요"로 처리한다.
- 메뉴 이름과 버튼 이름은 자주 바뀐다. 공식 도움말에서 확인한 것만 쓰고, 나머지는 "화면 안내에 따르세요"로 처리한다.

### 2) 도구 선택 원칙 (특정 도구를 정하지 않은 편)

- 한국 실무자가 **실제로 쓸 수 있는** 도구를 고른다. 한국에서 이용 가능하고, 한국어를 지원하면 더 좋다.
- **공식 문서가 충분한** 도구를 고른다.
- 1~2개를 중심으로 다루고, 대안 도구는 비교표에서 간단히 소개한다.
- 한국 서비스(예: 네이버 클로바노트)도 공식 도움말이 있으면 후보로 넣는다.
- 특정 도구를 홍보하지 말고 중립적으로 쓴다.

### 3) Claude 편과의 중복 처리

아래 편은 Claude 완전 정복과 주제가 겹친다. **실무 과제 중심**으로 쓰고, 도구 설명은 짧게 한 뒤 Claude 편으로 링크한다.

| 이 편 | 겹치는 Claude 편 | 이 편이 맡을 것 |
| --- | --- | --- |
| chat/01 프롬프트 작성법 | C4 | 도구 공통 원칙(Claude·ChatGPT·Gemini 모두 적용)과 업무별 프롬프트 템플릿 모음 |
| coding/06 Claude Code 시작하기 | C12 | "비개발자가 첫 결과물 하나 만들기" 실습 중심. 설치·개념은 C12로 링크 |
| coding/08 클라우드 세션으로 GitHub 작업 | C13 | 실제 과제 하나(예: README 개선 → PR → 합치기 → GitHub Pages 배포)를 처음부터 끝까지 따라하기 |
| automation/20 커넥터(MCP) | C7 | 여러 도구(Claude 외 지원 도구 포함)에 공통인 MCP 개념과 업무 시나리오. Claude 커넥터 절차는 C7로 링크 |

coding/08에는 실제로 겪은 배포 문제를 "자주 막히는 지점"에 넣는다. 사실관계는 다음과 같다.
- 빈 저장소에 처음 올린 브랜치가 기본 브랜치(default branch)가 되어, 나중에 만든 `main`에서 시작된 GitHub Pages 배포가 거부됐다.
- 에러 메시지: `Branch "main" is not allowed to deploy to github-pages due to environment protection rules.`
- 해결 1: Settings > General > Default branch를 `main`으로 바꾼다.
- 해결 2: Settings > Environments > github-pages > Deployment branches and tags에 `main` 규칙을 추가한다.
- 해결 3: 실패한 실행을 Re-run 한다.

### 4) 작업 범위

- **수정할 수 있는 파일**
  - 내 분야 폴더의 `.mdx` 5개(`index.mdx` 포함 가능)
  - `docs/research/<내 분야>/` 아래 파일
  - 내가 새로 만든 도식 컴포넌트. 파일명은 분야 접두사를 붙인다(예: `MediaPipeline.astro`).
- 그 밖의 파일은 수정 금지. **git 커밋·푸시 금지.**
- 각 편 frontmatter: `status: published`, `lastVerified: 2026-10-10`, `sources`(본문 근거 전부), `level`(입문/실무/고급 중 내용에 맞게), `tools`, `duration`, `prerequisites`.
- 분야 `index.mdx`에 소개 문구가 있다면 내용에 맞게 다듬어도 된다.
- 끝나면 `npm run build`를 돌린다. 다른 에이전트의 파일 때문에 실패하면 보고만 한다.

## 담당

| 담당 | 분야 폴더 | 편 |
| --- | --- | --- |
| E | `chat/` | 01 프롬프트 작성법, 02 회의록·긴 문서 요약, 03 엑셀·CSV 데이터 분석, 04 보고서·제안서, 05 Claude·ChatGPT·Gemini 비교 |
| F | `coding/` | 06 Claude Code 시작하기, 07 코딩 몰라도 되는 업무용 웹 도구, 08 클라우드 세션 GitHub 작업, 09 Cursor, 10 반복 업무를 에이전트에게 맡기기 |
| G | `media/` | 11 업무용 이미지 생성, 12 Canva AI SNS 콘텐츠, 13 AI 영상 생성 홍보 영상, 14 녹음 → 텍스트 정리, 15 AI 음성 내레이션 |
| H | `automation/` | 16 Notion AI, 17 Gmail·캘린더 아침 브리핑, 18 Zapier/Make 자동화, 19 Google Workspace의 Gemini, 20 커넥터(MCP) |

### 편별 메모

- **chat/05**: 세 서비스를 공정하게 비교한다. 요금제와 가격은 각 공식 가격 페이지에서 확인한 것만 쓰고 "2026-10-10 기준"을 붙인다. 업무 유형별로 "이럴 땐 이것" 추천 표를 넣되, 근거가 있는 항목만 쓴다.
- **chat/03**: 개인정보와 회사 기밀 데이터를 업로드할 때의 주의점을 넣는다.
- **coding/07**: Claude 아티팩트(C6)와 Claude Code(C12)를 활용해 비개발자가 업무 도구를 만드는 실습을 넣는다(예: 견적 계산기).
- **coding/10**: 스킬(C8), 루틴(C13), 서브에이전트(C14)를 실무 반복 업무에 적용하는 시나리오 중심으로 쓴다.
- **media 전체**: 저작권, 초상권, 상업적 이용 조건(각 도구 공식 약관·도움말 기준)을 반드시 짚는다. 음성 복제는 본인 동의 원칙을 강조한다.
- **automation/17**: Claude의 Gmail·캘린더 커넥터로 아침 브리핑을 만드는 실습이다(C7 근거). 루틴으로 자동화하는 방법(C13)도 연결한다.
- **automation/18**: Zapier와 Make의 공식 도움말을 기준으로 "메일 → 시트 → 알림" 예제를 만든다.

## 보고 형식

1. 작성 파일 목록(본문, 조사 노트)과 줄 수
2. 편별로 고른 도구와 고른 이유
3. 확인하지 못해 단정을 피한 부분
4. 공통 컴포넌트 변경 제안
5. 빌드 결과
