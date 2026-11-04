# 작업 명세 — 30단계: 17차 튜토리얼 6편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (B1~B6)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, `-L` 허용, 우회 금지)을 따른다. **날짜 `2026-11-04`, `lastVerified: 2026-11-04`**, `status: published`. PromptBox 안에는 중괄호를 쓰지 않는다(MDX 파싱 오류). `src/content/docs/claude-news.mdx`는 다른 PR(#42)이 수정 중이므로 건드리지 않는다.

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| B1 | `media/38-product-photos.mdx` | 15 | Make product photos for an online store with AI / AI로 온라인 판매용 상품 사진 만들기 | beginner | support.google.com/gemini(이미지 편집), learn.chatgpt.com(이미지) |
| B2 | `media/39-audio-overviews.mdx` | 16 | Turn documents into audio overviews / 문서를 오디오 요약으로 듣기 | beginner | support.google.com(Gemini·Notebook 오디오 개요) |
| B3 | `basics/20-ai-for-seniors.mdx` | 20 | Help parents and grandparents start using AI / 부모님·어르신 AI 첫걸음 도와드리기 | beginner | 각 서비스 시작·음성 공식 도움말 + 사이트 기존 편 |
| B4 | `automation/51-pdf-data-extraction.mdx` | 21 | Pull data out of PDFs and invoices with AI / AI로 PDF·청구서에서 데이터 뽑아 정리하기 | practical | support.claude.com(파일 업로드), 각 서비스 공식 도움말 |
| B5 | `dev/20-errors-retries.mdx` | 20 | Handle Claude API errors, rate limits and retries / Claude API 오류·속도 제한·재시도 다루기 | advanced | platform.claude.com/docs (errors, rate limits) |
| B6 | `coding/45-refactoring-with-ai.mdx` | 18 | Refactor code safely with AI / AI로 코드 안전하게 리팩터링하기 | practical | code.claude.com/docs (common workflows, best practices) |

## 편별 지침
- B1: media/11(업무 이미지)·media/36(사진 보정)과 겹치지 않게 "상품 사진" 결과물 중심(배경 정리, 촬영 팁, 상세 이미지). 실제 상품과 다르게 보이게 하는 과장 금지(소비자 오인), 판매 플랫폼 이미지 규정 확인 권고. basics/09 연결.
- B2: chat/21(Gemini Notebook)과 겹치면 링크하고 "오디오로 듣기" 결과물 중심. 지원 언어·길이·플랜은 공식 확인분만. 내용 검증(basics/04).
- B3: 설명하는 사람(자녀·손주) 입장의 안내서. 큰 글씨·음성 입력, 사기·딥페이크(basics/10), 개인정보(basics/05), 첫 질문 예시. basics/01·07 연결. 서비스 기능은 공식 확인분만.
- B4: automation/46(영수증)과 겹치지 않게 PDF·청구서·표 추출 중심. 개인정보·거래처 정보 주의, 숫자 검산 필수. 업로드 한도는 공식 문서 그대로. automation/23·C25 연결.
- B5: 오류 코드·`retry-after`·속도 제한 헤더·SDK 자동 재시도는 공식 문서 그대로. dev/01·dev/15·dev/16 연결. 짧은 예제, 실행 여부 명시. 모델 ID는 공식 문서의 현재 모델.
- B6: 테스트 먼저, 작은 단위, 계획 모드, 되돌리기. coding/42·coding/43·coding/44 연결. coding/06 링크 문구는 "1. Getting started with Claude Code" / "1. Claude Code 시작하기". 실행 여부 명시.

## 공통
- 자기 파일(두 언어)·조사 노트(`docs/research/<분야>/`)만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
