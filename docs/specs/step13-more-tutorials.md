# 작업 명세 — 13단계: 실무 튜토리얼 8편 추가

작성: 기획 담당 · 구현: 코딩 에이전트 4명 (H1~H4, 각 2편)

## 배경

대화형·코딩·미디어·자동화 분야는 각각 5편뿐이다. 한국 실무자가 자주 찾는 도구와 업무 장면을 보강한다.

## 추가할 튜토리얼

| 담당 | 파일 | 제목(안) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- |
| H1 | `chat/21-notebooklm.mdx` | NotebookLM으로 내 자료 기반 공부·정리하기 | practical | support.google.com/notebooklm |
| H1 | `chat/22-ai-search.mdx` | AI 검색 제대로 쓰기: Perplexity·ChatGPT 검색·Claude 웹 검색 비교 | practical | perplexity.ai 도움말(막히면 App Store), learn.chatgpt.com, support.claude.com |
| H2 | `automation/23-spreadsheet-ai.mdx` | 엑셀·구글 시트에 AI 붙이기: Copilot·Gemini·Claude | practical | support.microsoft.com, support.google.com, support.claude.com |
| H2 | `automation/24-m365-copilot.mdx` | Microsoft 365 Copilot으로 Word·PowerPoint·Outlook 업무하기 | practical | support.microsoft.com, learn.microsoft.com |
| H3 | `media/25-ai-presentations.mdx` | AI로 발표 자료 만들기: Gamma·Claude·Copilot 비교 | practical | help.gamma.app, support.claude.com, support.microsoft.com |
| H3 | `media/26-ai-translation.mdx` | AI 번역 실전: DeepL·파파고·Claude로 업무 문서 번역하기 | beginner | support.deepl.com, papago 공식 안내, support.claude.com |
| H4 | `coding/27-first-app-with-claude-code.mdx` | 코딩 몰라도 Claude Code로 첫 웹앱 만들기(바이브 코딩) | beginner | code.claude.com/docs |
| H4 | `coding/28-github-copilot.mdx` | GitHub Copilot 시작하기: VS Code에서 자동완성·채팅·에이전트 | practical | docs.github.com/copilot |

## 공통 규칙

- **구조와 형식**
  - `docs/specs/step2-samples.md`의 9개 섹션 구조를 따른다.
  - `docs/templates/tutorial-template.mdx`의 형식을 따른다.
  - 같은 분야 기존 편 하나를 먼저 읽고 문체와 컴포넌트 사용을 맞춘다.
  - 문체는 친근한 존댓말("~해요")로 쓴다.
- **frontmatter**: 아래 항목을 채운다.
  - `level`, `category`, `tools`, `duration`, `prerequisites`
  - `lastVerified: 2026-10-14`, `status: published`
  - `sources`: 실제로 연 공식 URL만 넣는다.
- **사실 확인**
  - 공식 문서를 한 번에 한 페이지씩 연다. 명령은 `curl -sL -m 20 -A "Mozilla/5.0" <url>`이다.
  - 대량 다운로드는 하지 않는다. 권한이 거부되면 우회하지 않는다.
  - 가격, 플랜 포함 여부, 한국 제공 여부, 메뉴 경로, 베타 여부는 확인된 것만 쓰고 "2026-10-14 기준"을 붙인다.
  - 확인하지 못한 것은 "공식 문서에서 확인하지 못했어요"라고 쓰고 추측하지 않는다.
  - 막힌 사이트(openai.com, help.openai.com, canva.com, make.com 등)는 대체 공식 출처(learn.chatgpt.com, App Store/Google Play 등록 페이지 등)를 쓴다.
- **사이트 내 사실 일치**: Claude 관련 사실(요금제, 기능 이름)은 기존 C1·C2·C5~C8·C16과 맞춘다. 겹치는 설명은 기존 편 링크로 대신한다.
- **컴포넌트**: Summary, Checklist, PromptBox, FlowSteps(가장 막히는 절차 1개), ScreenshotPlaceholder(`officialUrl` 포함, 맞는 공식 페이지가 없으면 생략).
- **링크**
  - 내부 링크는 루트 기준 `/분야/파일명/` 형식으로 쓰고, 실제로 있는 페이지만 가리킨다.
  - "다음에 볼 튜토리얼"에 관련 기존 편과 직무별 가이드(`/roles/...`)를 연결한다.
- **조사 노트**: `docs/research/<분야>/<번호>-<slug>.md`에 출처 URL과 확인한 사실, 확인하지 못한 것을 적는다.
- **수정 범위**: 자기 담당 파일과 자기 조사 노트만 수정한다. index·사이드바·컴포넌트는 건드리지 않는다. 사이드바는 자동 생성된다.
- **빌드**: `npx astro build --outDir /tmp/build-<담당>`로 한다. 공유 캐시 충돌로 실패하면 한 번 다시 시도한다.
- **git**: 커밋·푸시는 하지 않는다.
- **보고**: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과를 쓴다.
