# 작업 명세 — 22단계: 9차 (공유 이미지 새 디자인·두 언어, 튜토리얼 2편, 직무 가이드 2편)

작성: 기획 담당 · 구현: 코딩 에이전트 3명 (R1~R3)

언어 구조·공통 규칙: `docs/guides/english-site.md`, `docs/specs/step19-batch6-bilingual.md`, `docs/specs/step13-more-tutorials.md`. 날짜 `2026-11-01`. 편수 숫자는 쓰지 않는다(TutorialCount 자동). index·about·start 페이지는 수정하지 않는다(R3의 roles/index 제외).

## R1 — 공유 미리보기 이미지(OG) 새 디자인 + 두 언어
- 현재 `public/og/<섹션>.png`(10개)는 예전 디자인(코랄·크림, 만화 로봇, 이모지)이고 **한국어 문구만** 있다. 사이트는 영어가 기본(`/`), 한국어는 `/ko/`.
- `scripts/og-images.mjs`를 새 디자인 언어(웜 뉴트럴 + 코랄 포인트, Pretendard, `src/components/HeroIllustration.astro`의 추상 노드 그래픽 스타일, `src/components/Illustration.astro` 라인 아이콘)에 맞게 다시 만든다. 이모지 쓰지 않기.
- 영어판 `public/og/<id>.png`, 한국어판 `public/og/ko/<id>.png`를 생성(1200×630). 문구는 사이트의 영어/한국어 섹션 이름·부제(`src/lib/i18n.ts`, `astro.config.mjs` 사이드바 라벨 참고).
- 글꼴: `node_modules/pretendard/dist/web/variable/` 의 woff2를 템플릿에서 `@font-face`로 로드(시스템 폰트 의존 제거). Chromium은 `/opt/pw-browsers/chromium-*/chrome-linux/chrome`, `playwright install` 금지.
- `src/components/Head.astro`: 언어가 ko면 `/og/ko/<key>.png`, 아니면 `/og/<key>.png` 사용(이미지 alt도 언어별, 이미 있음). 다른 동작은 그대로.
- 생성 이미지를 직접 열어 보고 품질 확인(글자 넘침·잘림 없음). 결과 몇 장의 경로를 보고에 포함.

## R2 — 튜토리얼 2편 (두 언어)
| 파일 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- |
| `chat/42-emails-and-messages.mdx` | Write better emails and messages with AI (tone, replies, business English) / AI로 이메일·메시지 잘 쓰기: 말투 조절, 답장, 비즈니스 영어 | beginner | 각 서비스 공식 도움말(Claude, learn.chatgpt.com, Gmail Help me write 등) + 사이트 기존 편 |
| `basics/16-free-ai-tips.mdx` | Getting the most from free AI plans / 무료로 AI 최대한 활용하기 | beginner | claude.com/pricing, learn.chatgpt.com 가격, gemini.google/subscriptions 등 공식 요금 페이지 |
- chat/42: automation/38(메일함 정리)·chat/04(보고서)와 겹치지 않게 **글 쓰기 자체**에 집중. 프롬프트 6개 이상(두 언어 각자 자연스러운 예시; 한국어판은 한국 비즈니스 이메일 관례 + 영어 비즈니스 이메일 작성, 영어판은 영어 이메일 중심). 개인정보 주의.
- basics/16: 무료 플랜에서 되는 것·한도 리셋·임시 채팅·무료 도구 조합 팁. 가격·한도는 공식 페이지 확인분만 "as of 2026-11-01". basics/08·11과 겹치면 링크.

## R3 — 직무별 가이드 2편 (두 언어)
- `roles/designer.mdx` (Designers / 디자이너), `roles/hr.mdx` (HR & recruiting / 인사·채용 담당).
- 기존 직무 페이지(roles/office 등) 6개 구성 그대로, **새 사실 없이** 기존 튜토리얼로 연결하는 길잡이. HR은 개인정보·채용 공정성 주의(basics/05, 09, 12 연결).
- `roles/index.mdx`(두 언어)에 카드 2개, `astro.config.mjs` 사이드바 "AI by Job Role" 그룹에 2개 항목(영어 label + `translations: { ko }`). astro.config.mjs는 R3만 수정.

## 공통
- 자기 담당 파일만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든/고친 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
