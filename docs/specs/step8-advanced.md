# 작업 명세 — 8단계: 새 섹션 "개발자 심화" (고급 10편)

작성: 기획 담당 · 구현: 코딩 에이전트

## 목표

고급 사용자(개발자, 파워 유저)를 위한 실전 튜토리얼 10편을 새 분야 `dev`("개발자 심화")로 추가한다. 모든 편은 `level: advanced`이다.

기존 C14(Claude Code 핵심 기능), C15(모델 분담), C16(API 시작하기)을 **다 읽은 독자**가 대상이다. 기초 설명은 반복하지 말고, 해당 C편으로 링크한다.

## 편 구성 (`src/content/docs/dev/`)

| 파일 | 제목 | 담당 |
| --- | --- | --- |
| `index.mdx` | 개발자 심화 (섹션 소개, 학습 순서) | D0 |
| `01-tool-use.mdx` | 도구 사용(Tool use)으로 업무 봇 만들기 | D1 |
| `02-cost-optimization.mdx` | 프롬프트 캐싱·배치·effort로 API 비용 줄이기 | D1 |
| `03-agent-sdk.mdx` | Claude Agent SDK로 나만의 에이전트 만들기 | D2 |
| `04-managed-agents.mdx` | Managed Agents로 서버에서 에이전트 돌리기 | D2 |
| `05-mcp-server.mdx` | MCP 서버 직접 만들어 Claude에 연결하기 | D3 |
| `06-plugins-skills-team.mdx` | 스킬·플러그인 패키지로 만들어 팀에 배포하기 | D3 |
| `07-headless-ci.mdx` | Claude Code 헤드리스 모드와 GitHub Actions 자동화 | D4 |
| `08-evals.mdx` | 평가(evals)로 LLM 결과 품질 관리하기 | D4 |
| `09-rag-files-citations.mdx` | 사내 문서 Q&A 만들기: Files API·인용(citations) | D5 |
| `10-computer-browser-tools.mdx` | 컴퓨터·브라우저 도구 API로 화면 작업 자동화 | D5 |

## 공통 규칙

- 구조·문체·정확성은 `docs/specs/step2-samples.md`를 따른다(9개 섹션). 고급 편이므로 "단계별 따라하기"는 **실제로 실행 가능한 코드**를 중심으로 쓴다.
- **근거**: Anthropic 공식 문서(platform.claude.com/docs, code.claude.com/docs, docs.claude.com), 공식 GitHub 저장소(anthropics/*), modelcontextprotocol.io를 쓴다. 시작하기 전에 **`claude-api` 스킬을 불러와(Skill 도구) 모델 ID, 파라미터, SDK 사용법의 최신 기준으로 삼는다.**
- 모델 ID와 가격은 기존 C1·C16과 일치해야 한다. C16의 "모델별 요청 제한" 표와 모순되는 예제를 쓰지 않는다. 예를 들어 Opus 5.5 예제에 `tool_choice: any`를 쓰면 안 된다.
- **코드 검증**:
  - Python 예제는 `python3 -m py_compile`로 문법을 확인한다.
  - TypeScript·JavaScript 예제는 가능하면 `node --check`로 확인하거나, 최소한 공식 예제와 대조한다.
  - API 키가 없어 실제 호출은 할 수 없으므로, 본문에 "예제는 공식 문서 기준이며 2026-10-11에 문법만 검증했어요"라고 한 줄 밝힌다.
  - API 키는 환경변수로만 다룬다. 코드에 직접 쓰지 않는다.
- **비용 경고**: 반복 호출, 에이전트 루프, 배치, 컴퓨터 사용처럼 비용이 커질 수 있는 예제에는 사용량 상한과 비용 주의를 넣는다.
- **보안**:
  - MCP 서버, 도구 사용, 컴퓨터·브라우저 도구 편에는 권한 최소화, 프롬프트 인젝션, 비밀 값 관리 주의를 넣는다.
  - CI 편에는 저장소 비밀(secrets) 다루기와 권한 범위를 넣는다.
- 각 편의 조사 노트를 `docs/research/dev/NN-<slug>.md`에 남긴다.
- frontmatter: `category: dev`, `level: advanced`, `status: published`, `lastVerified: 2026-10-11`, `sources`(본문 근거 전부), `prerequisites`(앞서 읽을 C편 포함), `duration`, `tools`.
- 페이지 읽기: WebFetch를 쓴다. 호스트를 찾지 못하면 `curl -sL -m 20 -A "Mozilla/5.0" <url>`를 한 번에 한 페이지씩 쓴다. 대량 다운로드는 금지하고, 거부되면 우회하지 말고 보고한다.
- git 커밋·푸시는 하지 않는다. 끝나면 `npm run build`를 실행한다.

## D0 — 사이트 구조

7단계에서 `agents`를 추가했을 때와 같은 방식이다(`git log`에서 "Add trending AI agents section structure" 커밋 참고).

1. `src/content.config.ts`의 category enum과 `src/lib/tutorials.ts`의 Category, categoryLabels("개발자 심화"), categoryOrder(claude, agents 다음), isTutorial 정규식에 `dev`를 추가한다.
2. `src/components/Illustration.astro`에 `dev` 아이콘을 추가한다. 인라인 SVG이고 브랜드 로고는 쓰지 않는다.
3. `src/components/CategoryCards.astro`에 카드를 추가하고, `astro.config.mjs` 사이드바의 "화제의 AI 에이전트" 다음에 "개발자 심화" 그룹을 넣는다(autogenerate).
4. `src/content/docs/start/advanced.mdx`를 "고급 사용자 시작점" 학습 경로로 다시 쓴다. 추천 순서는 C14 → C15 → C16 → dev 01~10이다.
5. `dev/index.mdx`: 섹션 소개, 누구를 위한 섹션인지, 준비물(API 키, Python 3.10+, Node), 추천 학습 순서.
6. **placeholder를 먼저 만든다**: `dev/01`~`10`을 `status: draft`로 만든다. 파일이 이미 있으면 만들지 않는다. 만든 뒤에는 이 파일들을 건드리지 않는다.
7. 홈의 "고급" 카드 설명을 새 섹션에 맞게 다듬는다. 375px·1280px, 라이트·다크에서 확인하고 스크린샷을 `docs/screenshots/step8/`에 저장한다.

## 편별 핵심 (D1~D5)

- **01 도구 사용**
  - 도구 정의(JSON 스키마) → 모델이 `tool_use` 반환 → 코드 실행 → `tool_result` 반환으로 이어지는 루프를 직접 구현한다.
  - SDK의 tool runner도 함께 소개한다.
  - 업무 예시: 사내 일정·재고 조회 봇.
  - 오류 처리(도구 실패, 무한 루프 방지)를 다룬다.
- **02 비용 최적화**: 프롬프트 캐싱(cache_control, 캐시 읽기 가격), Message Batches API(50% 할인), effort 조절, 모델 분담(C15 링크), 토큰 세기, 사용량 모니터링. 가격 비교 계산 예시를 넣는다.
- **03 Agent SDK**: 설치, 첫 에이전트, 도구·권한 설정, 서브에이전트, 세션. Claude Code와의 관계도 설명한다. 공식 문서의 현재 패키지 이름과 API를 따른다.
- **04 Managed Agents**: 공식 문서 기준으로 무엇인지, 언제 쓰는지, 최소 예제, 동적 워크플로(dynamic workflows), 비용·제한. 문서가 부족한 부분은 단정하지 않는다.
- **05 MCP 서버**: 공식 SDK(Python 또는 TypeScript)로 도구 1~2개짜리 서버를 만든다. 이어서 Claude Code에 연결하고(`claude mcp add`), Claude 앱의 커스텀 커넥터로도 연결한다. 보안 주의를 넣는다.
- **06 스킬·플러그인**:
  - SKILL.md 설계 원칙.
  - 플러그인 구조와 마켓플레이스.
  - `claude plugin eval`로 품질을 확인한다.
  - 팀에 배포하는 법: 저장소와 조직 설정. 플러그인 제출 포털도 다룬다.
  - C8 링크.
- **07 헤드리스·CI**: `claude -p`, 출력 형식(JSON, stream-json), 권한 설정, GitHub Actions 공식 액션, 예제 워크플로(PR 리뷰, 이슈 분류), secrets 관리, 비용 상한.
- **08 평가**: 테스트 세트 만들기, 정답 기반 채점과 LLM 채점, 회귀 비교. 공식 문서의 평가 가이드를 근거로 하고, 작은 Python 평가 스크립트를 예제로 넣는다.
- **09 사내 문서 Q&A**: Files API 업로드, 인용(citations) 기능, 긴 컨텍스트와 RAG 중 무엇을 고를지, 개인정보·보존 정책(C16의 데이터 보존 언급과 일관되게).
- **10 컴퓨터·브라우저 도구**: 공식 toolset(GA 2026-08-19)의 구조, 샌드박스(가상 환경)에서만 실행할 것, 최소 예제, 안전 수칙(C11 링크), 비용.
