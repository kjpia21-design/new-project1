# 작업 명세 — 25단계: 12차 튜토리얼 6편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (V1~V6)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절을 그대로 따른다(두 언어 동시 작성, 공식 문서만 한 페이지씩 curl, 추측 금지, 편수 숫자 금지, index·about·start·roles·astro.config.mjs 수정 금지). 날짜 `2026-11-02`, `lastVerified: 2026-11-02`, `status: published`.

**curl은 기본 옵션만 쓴다.** User-Agent 바꾸기 등 차단 우회는 하지 않는다. 막힌 페이지는 "확인하지 못함"으로 적고 다른 공식 페이지를 찾는다.

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| V1 | `claude/c25-file-creation.mdx` | C25 | Create and edit files with Claude (Excel, Word, slides, PDF) / Claude로 엑셀·워드·슬라이드·PDF 파일 만들고 고치기 | practical | support.claude.com (파일 생성·편집 기능) |
| V2 | `basics/18-ai-at-work.mdx` | 18 | Using AI at work responsibly / 회사에서 AI 책임 있게 쓰기 | beginner | 각 서비스 공식 개인정보·업무용 플랜 문서(privacy.claude.com, Team/Enterprise 데이터 정책 등) |
| V3 | `chat/45-travel-planning.mdx` | 16 | Plan trips with AI / AI로 여행 계획 세우기 | beginner | 각 서비스 웹 검색·지도 연동 공식 도움말 |
| V4 | `coding/41-claude-code-mcp.mdx` | 14 | Connect MCP servers to Claude Code / Claude Code에 MCP 서버 연결하기 | practical | code.claude.com/docs (MCP) |
| V5 | `media/36-photo-editing.mdx` | 13 | Edit your photos with AI / AI로 사진 보정·편집하기 | beginner | support.google.com/gemini(이미지 편집), learn.chatgpt.com(이미지), support.claude.com |
| V6 | `dev/16-batch-api.mdx` | 16 | Process large jobs with the Message Batches API / Message Batches API로 대량 작업 처리하기 | advanced | platform.claude.com/docs (batch processing, pricing) |

## 편별 지침
- V1: C6(아티팩트)·C21(Office 에이전트)와 겹치면 링크. 지원 파일 형식·플랜·설정 켜는 위치는 공식 문서 그대로.
- V2: 회사 규정 확인, 넣으면 안 되는 정보, 업무용 플랜과 개인 플랜의 데이터 처리 차이(공식 문서 확인분만), 결과 검토 책임. basics/05·12·04 연결. 법률 조언 아님 명시.
- V3: 일정표·예산·준비물 프롬프트, 실시간 정보(운영 시간·가격·비자)는 공식 사이트에서 재확인 강조. chat/22(AI 검색) 연결.
- V4: `claude mcp add` 등 명령·범위(scope)·설정 파일·인증·보안 주의는 공식 문서 그대로. automation/20·dev/05·coding/40 연결. 실행 여부 명시.
- V5: 원본 보관, 인물 사진 동의·딥페이크 주의(basics/10), 서비스별 편집 기능은 공식 확인분만. media/30 연결.
- V6: 요청 형식·한도·결과 보관 기간·할인율은 공식 문서 그대로, 가격은 "as of 2026-11-02". dev/02·dev/14 연결. 짧은 예제, 실행 여부 명시.

## 공통
- 자기 파일(두 언어)·조사 노트만 수정. V1은 `docs/PLAN.md` Claude 표에 C25 한 줄 추가. 빌드 `npx astro build --outDir /tmp/build-<담당>`. git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
