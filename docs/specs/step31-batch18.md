# 작업 명세 — 31단계: 18차 튜토리얼 6편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (C1~C6)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, `-L` 허용, 우회 금지)을 따른다. 날짜 `2026-11-04`, `lastVerified: 2026-11-04`, `status: published`. PromptBox 안에는 중괄호를 쓰지 않는다. `claude-news.mdx`는 루틴이 관리하므로 건드리지 않는다.

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| C1 | `agents/09-agent-usage-limits.mdx` | 9 | What AI agents cost and how their usage limits work / AI 에이전트 비용과 사용 한도 이해하기 | practical | claude.com/pricing, support.claude.com(사용 한도), learn.chatgpt.com, support.google.com/gemini |
| C2 | `agents/10-briefing-agents.mdx` | 10 | Write a clear brief for an AI agent / AI 에이전트에게 일 잘 맡기는 지시서 쓰기 | beginner | support.claude.com(Cowork·Chrome 사용 팁), learn.chatgpt.com, support.google.com/gemini |
| C3 | `claude/c28-claude-tag.mdx` | C28 | Use Claude Tag in your team's Slack / 팀 Slack에서 Claude Tag 쓰기 | practical | support.claude.com·code.claude.com (Claude Tag) |
| C4 | `media/40-charts-infographics.mdx` | 17 | Make charts and infographics with AI / AI로 차트·인포그래픽 만들기 | beginner | support.claude.com(아티팩트), learn.chatgpt.com, support.google.com/gemini(Canvas) |
| C5 | `chat/50-decision-making.mdx` | 21 | Think through a decision with AI / AI와 함께 결정 내리기(장단점·시나리오) | beginner | 각 서비스 공식 도움말 + 사이트 기존 편 |
| C6 | `dev/21-system-prompts.mdx` | 21 | Write effective system prompts for your API app / API 앱용 시스템 프롬프트 잘 쓰기 | advanced | platform.claude.com/docs (prompt engineering, system prompts) |

## 편별 지침
- C1: 가격·한도 수치는 공식 페이지 그대로 "as of 2026-11-04", 확인 못 한 서비스는 "확인하지 못함". C2(요금제)·basics/08 연결. 한도가 바뀌는 점 강조.
- C2: 목표·범위·완료 기준·금지 행동·확인 지점을 담은 지시서 템플릿. agents/05(안전)·agents/07(검수)와 연결. 공식 권고와 사이트 권장 구분.
- C3: automation/41(Slack AI)과 겹치면 링크. 설치·권한·플랜 조건·데이터 접근 범위는 공식 문서 그대로. PLAN.md Claude 표에 C28 한 줄 추가. 확인 못 하면 범위를 줄이고 제목 일반화.
- C4: 숫자 검증(원본 데이터와 대조), 오해를 부르는 축·비율 주의. automation/23·chat/03·C6 연결.
- C5: 중요한 결정(의료·법률·재정)은 전문가 상담, AI는 생각 정리 도구. 장단점표·반대 입장·사전 부검 프롬프트. basics/04 연결.
- C6: 역할·지시·예시·출력 형식, XML 태그 등은 공식 문서 그대로. dev/13(구조화 출력)·dev/19(캐싱) 연결. 짧은 예제, 실행 여부 명시. 모델 ID는 공식 문서의 현재 모델.

## 공통
- 자기 파일(두 언어)·조사 노트만 수정(C3만 PLAN.md 한 줄). 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도). git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
