# 작업 명세 — 27단계: 14차 (튜토리얼 4편 + 품질 점검 + 직무 가이드 연결)

작성: 기획 담당 · 구현: 에이전트 6명 (Y1~Y4, X1, X2)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, 우회 금지)을 따른다. 날짜 `2026-11-02`.

## 튜토리얼 4편 (두 언어)
| 담당 | 파일 | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| Y1 | `basics/19-ai-accessibility.mdx` | 19 | Use AI for accessibility (reading, listening, simpler text) / 접근성을 위한 AI 활용(읽기·듣기·쉬운 글) | beginner | 각 서비스 음성·읽어주기·이미지 설명 공식 도움말 |
| Y2 | `chat/47-learn-with-ai-tutor.mdx` | 18 | Learn a new subject with an AI tutor / AI 튜터와 새 분야 공부하기 | beginner | 각 서비스 학습 모드 공식 도움말(Claude, ChatGPT, Gemini) |
| Y3 | `dev/18-vision-images.mdx` | 18 | Send images and PDFs to the Claude API / Claude API에 이미지·PDF 보내기 | advanced | platform.claude.com/docs (vision, PDF support) |
| Y4 | `automation/49-forms-surveys.mdx` | 19 | Build and analyze surveys with AI / AI로 설문 만들고 결과 분석하기 | practical | support.google.com (Forms·Gemini), support.microsoft.com (Forms Copilot, 열리는 페이지만) |

- Y1: 서비스별 기능은 공식 확인분만. 의료·보조기기 대체 아님. basics/07·media/15 연결.
- Y2: 학습 모드 이름·플랜은 공식 확인분만. 답 확인(basics/04), chat/43·chat/31 연결.
- Y3: dev/09와 겹치지 않게 이미지·PDF 입력 형식·크기 한도·토큰 계산은 공식 문서 그대로. 짧은 예제, 실행 여부 명시. dev/14 연결.
- Y4: 응답자 개인정보, 결과 해석 검증. automation/23 연결.

## X1 — 품질 점검 (Fable)
- 대상: 13차까지 이번에 추가된 24편(`docs/specs/step23`~`step26` 표의 파일, 두 언어).
- 점검: 영어·한국어판의 내용 일치(절·사실·링크), frontmatter 형식, 사이트 내 다른 편과의 사실 충돌(예: C7의 "(beta)" 표기 vs C23), 어색한 한국어, 깨진 서식.
- 작은 문제는 직접 고친다(사실 추가 금지, 공식 문서 확인이 필요한 충돌은 보고만). 고친 목록을 보고.

## X2 — 직무 가이드 연결
- `roles/*.mdx`(두 언어)에 이번 24편 + 14차 4편 중 관련 편 링크를 기존 구성에 맞게 추가. 새 사실 없이 연결만. `roles/index.mdx`·astro.config.mjs는 수정하지 않는다.
- 14차 4편은 파일이 생긴 뒤에 링크(빌드 링크 검사 통과 필수). 없으면 빼고 보고.

## 공통
- 자기 담당 파일만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든/고친 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
