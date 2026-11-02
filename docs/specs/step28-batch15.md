# 작업 명세 — 28단계: 15차 튜토리얼 4편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 4명 (Z1~Z4)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, 우회 금지)을 따른다. 날짜 `2026-11-02`, `lastVerified: 2026-11-02`, `status: published`. PromptBox 안에는 중괄호를 쓰지 않는다(MDX 파싱 오류).

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| Z1 | `claude/c27-styles.mdx` | C27 | Shape Claude's responses with styles / 스타일로 Claude 답변 형식 맞추기 | beginner | support.claude.com (styles) |
| Z2 | `chat/48-shopping-compare.mdx` | 19 | Compare products before you buy with AI / 사기 전에 AI로 제품 비교하기 | beginner | 각 서비스 웹 검색 공식 도움말 + 사이트 기존 편 |
| Z3 | `coding/43-debugging-with-ai.mdx` | 16 | Debug errors with AI / AI로 오류 원인 찾고 고치기 | practical | code.claude.com/docs (common workflows 등) |
| Z4 | `automation/50-document-templates.mdx` | 20 | Build reusable document templates with AI / AI로 반복 문서 템플릿 만들기 | practical | support.claude.com (Projects·Skills), 각 서비스 공식 도움말 |

## 편별 지침
- Z1: C9(메모리·설정)·C4(프롬프트)와 겹치면 링크. 스타일 만들기·적용 위치·플랜은 공식 문서 그대로.
- Z2: 가격·재고·리뷰는 판매처에서 재확인, 광고·제휴 링크 주의, 개인정보. chat/22(AI 검색)·basics/04 연결. 쇼핑 기능은 공식 확인분만.
- Z3: 오류 메시지 붙여 넣을 때 비밀 정보 가리기, 수정은 테스트로 확인. coding/06·coding/40·coding/42 연결. 실행 여부 명시.
- Z4: C5(프로젝트)·C8(스킬)·chat/04(보고서)와 연결. 회사 양식·개인정보 주의.

## 공통
- 자기 파일(두 언어)·조사 노트만 수정. Z1은 `docs/PLAN.md` Claude 표에 C27 한 줄 추가. 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
