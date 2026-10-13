# 최신 AI 트렌드 따라 잡기

최신 AI 도구를 쉽게 설명하고, 단계별로 따라 할 수 있는 튜토리얼을 제공하는 한국어 사이트입니다.
입문 / 실무 / 고급 세 수준으로 나눠 보고, 1단계는 실무 활용자를 중심으로 만들고 있습니다.
전체 계획은 [`docs/PLAN.md`](docs/PLAN.md)를 참고하세요.

- 기술: [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- 배포: GitHub Pages (`main`에 푸시하면 GitHub Actions가 자동 배포) — https://ai-trend-catchup.com

## 로컬 실행

Node 22 이상이 필요합니다.

```sh
npm install
npm run dev       # 개발 서버 http://localhost:4321/
npm run build     # dist/ 에 정적 사이트 생성 + 내부 링크 검사
npm run preview   # 빌드 결과 미리보기
```

사이트가 도메인 루트(https://ai-trend-catchup.com)에 배포되므로 내부 링크는 항상 `/`로 시작합니다 (예: `/claude/c01-overview/`).
컴포넌트에서 링크를 만들 때는 `src/lib/tutorials.ts`의 `url()` / `entryUrl()`을 사용하세요.

## 새 튜토리얼 추가하기

튜토리얼 한 편의 표준 구조는 `docs/templates/tutorial-template.mdx`에 주석과 함께 정리되어 있어요.

1. 템플릿을 분야 폴더(`claude`, `chat`, `coding`, `media`, `automation`)로 복사해요. 파일명은 영어 slug입니다 (예: `cp docs/templates/tutorial-template.mdx src/content/docs/chat/06-example.mdx`).
2. 맨 위 frontmatter를 채워요. 스키마는 `src/content.config.ts`에 있고, 필드는 템플릿 주석에 설명되어 있어요.

```mdx
---
title: "튜토리얼 제목"
description: 카드에 표시될 한 줄 설명
sidebar:
  label: 1. 짧은 이름               # 사이드바에 보일 이름 (선택)
level: practical                  # beginner | practical | advanced
category: chat                    # claude | chat | coding | media | automation
tools: ['Claude']
duration: '20분'
prerequisites: ['Claude 계정']
lastVerified: 2026-10-10          # 공식 문서와 대조해 확인한 날짜 (확인 전에는 비워 둠)
sources:                          # 본문에 쓴 출처 전부 (페이지 하단 '출처' 상자에 자동 표시)
  - title: 공식 문서 이름
    url: https://example.com/docs
status: draft                     # 본문이 완성되면 published
---
```

3. 본문은 템플릿의 순서를 따라요: 한눈에 요약 → 할 수 있게 되는 것 → 먼저 알아둘 개념 → 단계별 따라하기(체크리스트 + `<Steps>`) → 빠른 참조표 → 자주 막히는 지점 → 실전 팁 → 다음에 볼 튜토리얼.
4. **출처 상자는 직접 쓰지 않아요.** `status: published`이면 `Footer` 오버라이드가 frontmatter의 `sources`와 `lastVerified`를 읽어 페이지 맨 아래에 자동으로 붙여요. 본문에 쓴 사실의 출처는 빠짐없이 `sources`에 넣으세요.
5. 사실은 `docs/research/`의 조사 노트나 공식 페이지에서 직접 확인한 것만 써요. 가격·한도처럼 바뀌는 정보에는 "YYYY-MM-DD 기준"을 붙이고, 확인되지 않은 내용은 단정하지 않아요.

본문에서 쓰는 컴포넌트는 맨 위에서 import해요 (분야 폴더 기준 경로).

```mdx
import { Steps, Aside } from '@astrojs/starlight/components';
import Summary from '../../../components/Summary.astro';
import Checklist from '../../../components/Checklist.astro';
import PromptBox from '../../../components/PromptBox.astro';
import ScreenshotPlaceholder from '../../../components/ScreenshotPlaceholder.astro';
```

| 컴포넌트 | 용도 |
| --- | --- |
| `TutorialMeta` | 수준·분야·소요 시간·준비물 상자. 튜토리얼 페이지에 **자동으로** 표시됨 |
| `Sources` | 출처와 마지막 확인일 상자. `published` 튜토리얼 맨 아래에 **자동으로** 표시됨 (`Footer` 오버라이드) |
| `Summary` | 맨 위 "한눈에 요약" 카드 (`<Summary>- 핵심</Summary>`) |
| `Checklist` | 진행 체크리스트 (`<Checklist items={['...', '...']} />`, 체크 상태는 브라우저에 저장) |
| `PromptBox` | 복사 버튼이 있는 프롬프트 상자 |
| `ScreenshotPlaceholder` | 스크린샷 자리 표시 (`caption="..."`) |
| `diagrams/*` | 튜토리얼별 인라인 SVG 도식 (`src/components/diagrams/`, CSS 변수 사용으로 다크 모드 대응) |
| `TutorialGrid` | 튜토리얼 카드 그리드 (`level`, `category`, `filters` 속성) |
| `LevelBadge` | 입문(초록)·실무(파랑)·고급(보라) 배지 |

`<Steps>`와 `<Aside>`(팁·주의 상자)는 Starlight 기본 컴포넌트를 씁니다.
컴포넌트 모양은 개발 서버에서 `/components-preview/`로 확인할 수 있습니다 (`draft: true`라 배포에는 포함되지 않음).
완성된 예시는 `src/content/docs/claude/c02-plans-limits.mdx`와 `c13-cloud-sessions.mdx`를 참고하세요.

튜토리얼 목록, 시작점 페이지, 최근 업데이트는 frontmatter를 읽어 **자동으로** 만들어지므로 따로 등록할 필요가 없습니다.

## 스크린샷

`npm run preview`를 띄운 뒤 `node scripts/screenshot.mjs`를 실행하면 `docs/screenshots/step1/`에 저장됩니다.
(`/components-preview/`는 개발 서버 주소를 인자로 넘겨야 찍힙니다.)

2단계 샘플 스크린샷은 `node scripts/screenshot.mjs step2`로 찍어 `docs/screenshots/step2/`에 저장합니다.
인자는 `[세트이름|baseUrl] [baseUrl]` 순서로 받습니다 (예: `node scripts/screenshot.mjs step2 http://localhost:4321`).
