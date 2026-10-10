# 작업 명세 — 1단계: 사이트 뼈대

작성: 기획 담당 · 구현: 코딩 에이전트

전체 맥락은 `docs/PLAN.md`를 먼저 읽을 것.

## 목표

"최신 AI 트렌드 따라 잡기" 사이트의 뼈대를 만든다. 콘텐츠 본문은 아직 쓰지 않는다. 구조, 디자인, 필터, 튜토리얼 템플릿, 배포 설정까지만 한다.

## 기술 스택

- Astro + Starlight (최신 안정 버전). 저장소 루트에 프로젝트를 만든다.
- `astro.config.mjs`
  - `site: 'https://kjpia21-design.github.io'`, `base: '/new-project1'`
  - Starlight `title: '최신 AI 트렌드 따라 잡기'`, 기본 언어 한국어(root locale, `lang: 'ko'`)
  - 내부 링크는 반드시 base 경로를 고려할 것 (마크다운 링크는 `/new-project1/...` 또는 상대 경로)
- Node 22. `npm` 사용. `package-lock.json` 커밋.

## 콘텐츠 구조

```
src/content/docs/
├─ index.mdx                 홈 (splash 템플릿, 커스텀 랜딩)
├─ start/
│   ├─ beginner.mdx          입문자 시작점
│   ├─ practical.mdx         실무자 시작점
│   └─ advanced.mdx          고급 사용자 시작점
├─ claude/                   Claude 완전 정복 (C1~C16, PLAN.md 4절 표 참고)
│   ├─ index.mdx             섹션 소개 + 목록
│   └─ c01-overview.mdx … c16-api.mdx
├─ chat/                     대화형 AI 기본기 (1~5)
├─ coding/                   코딩·에이전트 (6~10)
├─ media/                    이미지·영상·음성 (11~15)
├─ automation/               업무 자동화·생산성 (16~20)
├─ tutorials.mdx             전체 튜토리얼 목록 + 필터
├─ updates.mdx               최근 업데이트 (lastVerified 기준 정렬)
└─ about.mdx                 사이트 소개, 운영 방식, 자동 점검 설명
```

각 분야 폴더에는 `index.mdx`(분야 소개)와 PLAN.md의 튜토리얼 제목대로 페이지를 만든다. 파일명은 영어 slug (`01-prompt-basics.mdx` 등).

**아직 본문이 없는 페이지**는 frontmatter를 모두 채우고, 본문에는 `<ComingSoon />` 컴포넌트 하나와 "이 튜토리얼에서 배울 것" 3~4줄 요약만 둔다.

## frontmatter 스키마 (Starlight docsSchema 확장)

`src/content.config.ts`에서 확장한다.

```ts
level: z.enum(['beginner', 'practical', 'advanced']).optional()   // 입문/실무/고급
category: z.enum(['claude', 'chat', 'coding', 'media', 'automation']).optional()
tools: z.array(z.string()).default([])        // 예: ['Claude', 'Claude Code']
duration: z.string().optional()               // 예: '20분'
prerequisites: z.array(z.string()).default([])// 준비물
lastVerified: z.coerce.date().optional()      // 마지막 확인일
sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([])
status: z.enum(['draft', 'published']).default('draft')
```

## 컴포넌트 (`src/components/`)

1. **TutorialMeta.astro** — 튜토리얼 상단 정보 상자. 수준 배지, 분야, 소요 시간, 준비물, 도구, 마지막 확인일. frontmatter에서 자동으로 읽는다 (Starlight 페이지 오버라이드 또는 MDX에서 직접 사용 중 깔끔한 쪽 선택. 모든 튜토리얼 페이지에 자동으로 나오면 가장 좋음).
2. **Checklist.astro** — 단계별 체크박스. 체크 상태를 `localStorage`에 페이지별로 저장 (try/catch로 감싸 실패해도 동작). 상단에 "3/7 완료" 진행 바.
3. **PromptBox.astro** — 복사 버튼이 있는 프롬프트 상자. "이 프롬프트를 복사해서 붙여넣으세요" 라벨. Starlight 코드 블록과 시각적으로 구분되게.
4. **ScreenshotPlaceholder.astro** — 스크린샷 들어갈 자리. 점선 테두리 + 일러스트 아이콘 + 캡션(`이 자리에 들어갈 화면: …`).
5. **Tip.astro / Warning** — Starlight의 Aside로 충분하면 새로 만들지 말 것.
6. **ComingSoon.astro** — "준비 중" 안내 카드 (친근한 일러스트).
7. **LevelBadge.astro** — 입문(초록) / 실무(파랑) / 고급(보라) 배지.
8. **TutorialGrid.astro** — 카드 그리드. 각 카드: 제목, 설명, 수준 배지, 분야, 소요 시간, 상태(준비 중이면 흐리게). `getCollection('docs')`로 자동 생성.

Starlight 기본 `<Steps>` 컴포넌트를 단계별 따라하기에 사용한다.

## 페이지 기능

- **홈**: 히어로(사이트 이름 + 한 줄 소개 + 친근한 인라인 SVG 일러스트), "나는 어떤 사용자?" 3개 카드(입문/실무/고급 → start 페이지), "Claude 완전 정복" 강조 배너, 분야 4개 카드, 최근 업데이트 5개.
- **tutorials 페이지**: 전체 튜토리얼 카드 그리드 + 상단 필터(수준, 분야). 클라이언트 JS로 필터링, URL 쿼리(`?level=practical&category=claude`)와 동기화.
- **start/* 페이지**: 해당 수준 튜토리얼을 분야별로 묶어 추천 순서대로 보여줌.
- **사이드바**: 시작하기 / Claude 완전 정복 / 대화형 AI / 코딩·에이전트 / 이미지·영상·음성 / 업무 자동화 / 전체 튜토리얼 / 최근 업데이트 / 소개. 분야 그룹은 autogenerate.

## 디자인 — 친근한 일러스트형

- `src/styles/custom.css`로 Starlight 테마 변수 덮어쓰기.
- 밝고 따뜻한 색: 주색 코랄/주황 계열(예: `#ff7a59`), 보조 하늘색·연두·연보라. 배경은 아주 옅은 크림색. 다크 모드도 어색하지 않게 대응.
- 둥근 모서리(12~16px), 부드러운 그림자, 카드형 레이아웃.
- 글꼴: Pretendard (jsDelivr CDN `pretendard@1.3.9` 가변 글꼴), 제목은 약간 굵게.
- 일러스트: 외부 이미지 없이 **인라인 SVG**로 간단하고 귀여운 도형 일러스트(로봇 얼굴, 말풍선, 반짝이 등). 분야별 아이콘 4개 + Claude 아이콘(브랜드 로고 복제 금지, 단순 별/반짝이 모양 정도).
- 모바일(375px)에서 가로 스크롤 없이 보일 것.

## 배포

- `.github/workflows/deploy.yml`: `main` 푸시 + `workflow_dispatch` 시 `withastro/action`으로 빌드 → `actions/deploy-pages`로 배포. 표준 Astro 공식 예시를 따른다.

## 완료 기준

1. `npm run build` 성공, 경고 최소화.
2. `npm run preview`로 띄운 뒤 Playwright(Chromium: `/opt/pw-browsers` 사전 설치, `playwright install` 금지)로 다음을 스크린샷해 `docs/screenshots/step1/`에 저장:
   - 홈 (데스크톱 1280px, 모바일 375px)
   - tutorials 페이지 (필터 적용 전/후)
   - Claude 섹션 index
   - 준비 중 튜토리얼 페이지 1개
3. 내부 링크 깨짐 없음 (가능하면 `starlight-links-validator` 플러그인 사용).
4. `README.md`: 사이트 소개, 로컬 실행법, 새 튜토리얼 추가 방법(frontmatter 예시 포함).
5. git 커밋은 하되 **푸시는 하지 말 것**. 커밋 메시지는 영어, 끝에 아래 두 줄:
   ```
   Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
   Claude-Session: https://claude.ai/code/session_018cdTexUA7yq5gcfmybuxoc
   ```
6. `docs/research/`와 `docs/PLAN.md`는 건드리지 말 것 (다른 작업이 진행 중).
