# 작업 명세 — 35단계: 22차 (검색 수요 기반 콘텐츠 6편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (G1~G6)

배경: `docs/research/site-upgrade-2026-11-23.md`의 콘텐츠 빈틈 조사. 사람들이 실제로 검색하는 **질문형** 주제를, 공식 출처로 확인한 날짜와 함께 중립적으로 답하는 페이지를 만든다. 경쟁 검색 결과는 할인·추천 블로그가 많고 정보가 오래돼 있어서, "공식 문서 기준 · 확인일 표시"가 우리 차별점이다.

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, `-L` 허용, 우회 금지)을 따른다. 날짜 `2026-11-23`, `lastVerified: 2026-11-23`, `status: published`. PromptBox 안에는 중괄호를 쓰지 않는다. `claude-news.mdx`는 루틴이 관리하므로 건드리지 않는다.

**새 규칙(SEO)**: `docs/guides/english-site.md`의 `seoTitle`·`seoDescription` 안내를 따른다. 화면 제목(title)은 자연스럽게, `seoTitle`은 **사람이 검색창에 치는 질문형**으로(영어 60자 이하·사이트명 포함 기준, 한국어도 짧게), `seoDescription`은 120~155자. 옛 이름·흔한 표기(예: NotebookLM, 챗GPT)를 검색어로 자연스럽게 포함. 가격·한도 수치는 공식 페이지 그대로 "as of 2026-11-23 / 2026-11-23 기준", 셀마다 출처 링크. `requires`(선수 글 슬러그)도 알맞게 넣는다(영어·한국어 동일).

| 담당 | 파일 (두 언어) | 번호 | 화면 제목(안, 영어 / 한국어) | seoTitle 방향 | level |
| --- | --- | --- | --- | --- | --- |
| G1 | `basics/22-ai-pricing-free-limits.mdx` | 22 | Claude, ChatGPT and Gemini prices and free limits at a glance / Claude·ChatGPT·Gemini 요금과 무료 한도 한눈에 | "ChatGPT vs Claude vs Gemini price & free limits (2026)" / "챗GPT·Claude·Gemini 요금 비교와 무료 한도" | beginner |
| G2 | `claude/c32-usage-limit-reached.mdx` | C32 | What to do when you hit Claude's usage limit / Claude 사용량 한도에 걸렸을 때 | "Claude usage limit reached: what to do" / "Claude 사용량 한도 초과 시 해결법" | beginner |
| G3 | `claude/c33-claude-code-plans.mdx` | C33 | Which plan do you need for Claude Code? / Claude Code를 쓰려면 어떤 플랜이 필요할까 | "Claude Code price: which plan do you need?" / "Claude Code 요금·필요한 플랜" | beginner |
| G4 | `automation/53-automation-ideas.mdx` | 23 | 20 ways to automate your work with AI / AI 업무 자동화 아이디어 20가지 | "20 AI work automation ideas (with guides)" / "AI 업무 자동화 아이디어 20가지" | beginner |
| G5 | `basics/23-free-ai-tools.mdx` | 23 | Free AI tools you can use today, and their limits / 무료로 쓸 수 있는 AI 총정리 | "Best free AI tools in 2026 and their limits" / "무료 AI 총정리: 2026 무료로 쓸 수 있는 AI" | beginner |
| G6 | `chat/52-cancel-refund-subscriptions.mdx` | 23 | Cancel, refund or downgrade an AI subscription / AI 구독 해지·환불·플랜 변경하기 | "How to cancel ChatGPT Plus, Claude Pro or Gemini" / "챗GPT·Claude·Gemini 구독 해지·환불 방법" | beginner |

## 편별 지침
- G1: 세 서비스 무료·유료 플랜 표(가격·주요 한도·무엇이 되나), 셀마다 공식 링크, "가격·한도는 자주 바뀜, 월 1회 갱신" 안내. 원화 가격은 공식 페이지에 있을 때만. basics/08·basics/16·C2·agents/09 연결(겹치는 설명은 링크).
- G2: 공식 도움말 기준 한도 구조(세션·주간 등), 리셋 시점 확인법, 대처(기다리기, 추가 사용량, 플랜 변경, 사용량 줄이는 습관: 대화 새로 시작·파일 정리·모델 선택), 오류 메시지 예시는 공식 확인분만. C2·basics/16 연결.
- G3: Claude Code를 쓸 수 있는 플랜(무료 포함 여부)·API 과금 방식·팀 플랜, 공식 문서 그대로. C12·C14·coding/06·agents/09 연결. "비개발자도 쓸 수 있나" 질문에 답.
- G4: 이미 있는 자동화·생산성 튜토리얼을 아이디어 20개로 엮는 허브(아이디어마다 1~2문장 + 해당 튜토리얼 링크 + 난이도). 새 사실 없이 연결 중심, 없는 기능은 쓰지 않음. 직무별 묶음 표 권장.
- G5: 무료로 쓸 수 있는 주요 AI(대화·이미지·번역·음성·코딩 등)를 공식 페이지 확인분만, 무료 한도·제약·데이터 정책 주의. 날짜 표시. 국산 서비스는 공식 확인 가능한 것만. basics/16·chat/29 연결.
- G6: 각 서비스 공식 도움말의 해지·환불·플랜 변경 절차(웹·앱스토어·구글플레이 결제 차이). 공식 확인 못 한 것은 "확인하지 못함"(OpenAI 도움말이 막히면 그렇게 명시). 법률 조언 아님. basics/08 연결.

## 공통
- 자기 파일(두 언어)·조사 노트(`docs/research/<분야>/`)만 수정. G2·G3는 `docs/PLAN.md` Claude 표에 자기 줄 한 줄씩(다른 줄 건드리지 않기).
- 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도). `requires` 슬러그가 없거나 영어·한국어가 다르면 빌드가 실패하니 확인. git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, seoTitle/seoDescription 값, 빌드 결과.
