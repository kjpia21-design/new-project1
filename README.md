# 최신 AI 트렌드 따라 잡기

최신 AI 도구를 쉽게 설명하고, 단계별로 따라 할 수 있는 튜토리얼을 제공하는 한국어 사이트입니다.
입문 / 실무 / 고급 세 수준으로 나눠 보고, 1단계는 실무 활용자를 중심으로 만들고 있습니다.
전체 계획은 [`docs/PLAN.md`](docs/PLAN.md)를 참고하세요.

- 기술: [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- 배포: GitHub Pages (`main`에 푸시하면 GitHub Actions가 자동 배포) — https://kjpia21-design.github.io/new-project1/

## 로컬 실행

Node 22 이상이 필요합니다.

```sh
npm install
npm run dev       # 개발 서버 http://localhost:4321/new-project1/
npm run build     # dist/ 에 정적 사이트 생성 + 내부 링크 검사
npm run preview   # 빌드 결과 미리보기
```

사이트가 `/new-project1` 하위 경로에 배포되므로 주소는 항상 `/new-project1/`로 시작합니다.
컴포넌트에서 링크를 만들 때는 `src/lib/tutorials.ts`의 `url()` / `entryUrl()`을 사용하세요.

## 새 튜토리얼 추가하기

1. 분야 폴더(`claude`, `chat`, `coding`, `media`, `automation`)에 `.mdx` 파일을 만듭니다. 파일명은 영어 slug입니다 (예: `src/content/docs/chat/06-example.mdx`).
2. 맨 위에 frontmatter를 채웁니다.

```mdx
---
title: "실무 프롬프트 작성법: 역할·맥락·형식 지정하기"
description: 카드에 표시될 한 줄 설명
sidebar:
  label: 1. 실무 프롬프트 작성법      # 사이드바에 보일 짧은 이름 (선택)
level: practical                  # beginner | practical | advanced
category: chat                    # claude | chat | coding | media | automation
tools: ['Claude', 'ChatGPT']
duration: '20분'
prerequisites: ['Claude 계정']
lastVerified: 2026-10-10          # 공식 문서와 대조해 확인한 날짜 (확인 전에는 비워 둠)
sources:
  - title: 공식 문서 이름
    url: https://example.com/docs
status: draft                     # 본문이 완성되면 published
---
```

3. 본문에는 필요한 컴포넌트를 불러와 씁니다.

```mdx
import { Steps } from '@astrojs/starlight/components';
import Checklist from '../../../components/Checklist.astro';
import PromptBox from '../../../components/PromptBox.astro';
import ScreenshotPlaceholder from '../../../components/ScreenshotPlaceholder.astro';
```

| 컴포넌트 | 용도 |
| --- | --- |
| `TutorialMeta` | 수준·분야·소요 시간·준비물 상자. 튜토리얼 페이지에 **자동으로** 표시됨 |
| `Checklist` | 진행 체크리스트 (`<Checklist items={['...', '...']} />`, 체크 상태는 브라우저에 저장) |
| `PromptBox` | 복사 버튼이 있는 프롬프트 상자 |
| `ScreenshotPlaceholder` | 스크린샷 자리 표시 (`caption="..."`) |
| `ComingSoon` | 준비 중 안내 (본문 작성 전 페이지에만) |
| `TutorialGrid` | 튜토리얼 카드 그리드 (`level`, `category`, `filters` 속성) |
| `LevelBadge` | 입문(초록)·실무(파랑)·고급(보라) 배지 |

`<Steps>`와 `<Aside>`(팁·주의 상자)는 Starlight 기본 컴포넌트를 씁니다.
컴포넌트 모양은 개발 서버에서 `/components-preview/`로 확인할 수 있습니다 (`draft: true`라 배포에는 포함되지 않음).

튜토리얼 목록, 시작점 페이지, 최근 업데이트는 frontmatter를 읽어 **자동으로** 만들어지므로 따로 등록할 필요가 없습니다.

## 스크린샷

`npm run preview`를 띄운 뒤 `node scripts/screenshot.mjs`를 실행하면 `docs/screenshots/step1/`에 저장됩니다.
(`/components-preview/`는 개발 서버 주소를 인자로 넘겨야 찍힙니다.)
