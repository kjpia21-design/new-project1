# 작업 명세 — 32단계: 19차 (기존 편 사실 갱신 1 + 새 튜토리얼 5편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (D0~D5)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, `-L` 허용, 우회 금지)을 따른다. 날짜 `2026-11-05`, `lastVerified: 2026-11-05`, `status: published`. PromptBox 안에는 중괄호를 쓰지 않는다. `claude-news.mdx`는 루틴이 관리하므로 건드리지 않는다.

## D0 — automation/41(Slack AI) Claude Tag 사실 갱신
- `src/content/docs/automation/41-slack-ai.mdx`와 `ko/` 짝에서 Claude Tag 관련 서술(설치·플랜·과금·DM 동작·관리자 설정 등)을 공식 Claude Tag 문서(claude.com/docs/claude-tag/…, support.claude.com)와 대조해 틀린 부분만 고친다. 새로 쓴 C28(`claude/c28-claude-tag.mdx`)·`docs/research/claude/C28-claude-tag.md`와 모순이 없게 한다.
- 다른 서비스(Slack AI 자체 등) 서술은 건드리지 않는다. 고친 줄마다 근거 URL을 조사 노트(`docs/research/automation/41-slack-ai-recheck-2026-11-05.md`)에 남기고, 바꾼 편의 `lastVerified`를 `2026-11-05`로.
- 확인 못 한 항목은 지우거나 "확인하지 못함"으로. 추측 금지.

## 새 튜토리얼 5편 (두 언어)
| 담당 | 파일 | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| D1 | `coding/46-docs-with-ai.mdx` | 19 | Write READMEs and code docs with AI / AI로 README·코드 문서 쓰기 | practical | code.claude.com/docs (common workflows) |
| D2 | `coding/47-sql-with-ai.mdx` | 20 | Write and check SQL queries with AI / AI로 SQL 쿼리 작성·검토하기 | practical | 각 서비스 공식 도움말, code.claude.com/docs |
| D3 | `media/41-brand-kit.mdx` | 18 | Build a simple brand kit with AI (colors, fonts, tone) / AI로 간단한 브랜드 키트 만들기 | beginner | support.claude.com (Claude Design), canva 공식 도움말(열리는 페이지만) |
| D4 | `chat/51-event-planning.mdx` | 22 | Plan events and gatherings with AI / AI로 행사·모임 계획하기 | beginner | 각 서비스 공식 도움말 + 사이트 기존 편 |
| D5 | `basics/21-switching-ai-services.mdx` | 21 | Move between AI services: export, import and memory / AI 서비스 갈아타기: 내보내기·가져오기·메모리 | beginner | support.claude.com(메모리 가져오기·내보내기), support.google.com/gemini, learn.chatgpt.com |

- D1: 코드 설명이 실제와 맞는지 검증, 비밀 정보 노출 주의. coding/42·coding/45 연결. coding/06 링크 문구는 "1. Getting started with Claude Code" / "1. Claude Code 시작하기". 실행 여부 명시.
- D2: 쿼리는 읽기 전용 계정·샘플 데이터로 먼저 실행, 운영 DB에 바로 실행 금지, 개인정보 컬럼 주의. chat/03·coding/38 연결. 실행 여부 명시.
- D3: 상표·저작권(basics/09), media/35(로고)·C20 연결. 최종 브랜드는 전문가 검토 권장.
- D4: 예산·참석자 연락처 등 개인정보 주의, 장소·가격은 공식 사이트 재확인. chat/45·automation/48 연결.
- D5: basics/17(대화 기록)·C9(메모리)와 겹치지 않게 "옮기기" 중심. 가져오기·내보내기 기능·형식·플랜은 공식 확인분만.

## 공통
- 자기 파일만 수정. 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든/고친 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
