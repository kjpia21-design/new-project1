# 작업 명세 — 11단계: 남은 빈칸 채우기

작성: 기획 담당 · 구현: 코딩 에이전트 5명 (F1~F4 빈칸 채우기, F5 용어 사전)

## 배경 (2026-10-13 점검 결과)

- 본문과 출처에 "미확인 / 확인 중 / 확인하지 못함 / 공개되지 않음" 표시가 약 140곳 남아 있다.
  - 가장 많은 곳은 media/(Canva·영상·음성) 쪽이다.
  - 그다음은 agents/01·04, automation/18이다.
- 공식 화면 링크(`officialUrl`)가 없는 안내 카드가 12개 있다(components-preview 제외).
- 입문자용 **용어 사전**이 없다.

## F1~F4 공통 규칙: 빈칸 채우기

1. 담당 파일에서 `미확인|확인 중|확인하지 못|공개되지 않|확인되지 않`을 grep한다. 나온 항목마다 아래 셋 중 하나로 처리한다.
   - **(a) 확인됨**: 공식 페이지를 직접 열어 확인했으면, 표시를 지우고 사실을 쓴다. 출처(sources)도 공식 URL로 바꾼다.
   - **(b) 공식적으로 비공개**: 회사가 수치를 공개하지 않는 것이라면 "공식적으로 공개하지 않아요"처럼 확정된 문장으로 바꾼다. 표시는 남기지 않는다.
   - **(c) 확인 불가**: 사이트가 막혀서 확인하지 못했다면 표시를 그대로 둔다. 보고서에 이유를 적는다.
2. **확인 방법**: 한 번에 한 페이지씩 `curl -sL -m 20 -A "Mozilla/5.0" <URL>`로 연다.
   - 대량 다운로드 스크립트는 쓰지 않는다.
   - 권한 거부가 나오면 우회하지 않는다.
   - 검색 결과 요약은 근거가 아니다.
3. **막힌 사이트와 대체 공식 출처**: openai.com, help.openai.com, canva.com, make.com은 403이다. 아래 공식 출처를 대신 쓴다.
   - developers.openai.com, learn.chatgpt.com
   - canva.dev, Canva 뉴스룸
   - help.make.com, developers.make.com
   - support.google.com, workspace.google.com
   - App Store(apps.apple.com), Google Play 등록 페이지
   - 각 회사의 공식 블로그
4. 수치·가격에는 "2026-10-13 기준"을 붙인다. 고친 편은 `lastVerified: 2026-10-13`으로 바꾼다.
5. 안내 카드(ScreenshotPlaceholder)에 `officialUrl`이 없으면 10단계 B-1 규칙(`docs/specs/step10-beginner-and-screens.md`)대로 붙인다. 맞는 페이지가 없으면 붙이지 않는다.
6. 조사 노트는 `docs/research/<분야>/fill-2026-10-13.md`에 남긴다. 무엇을 어떤 URL로 확인했는지 적는다.
7. **문체**: 기존 편의 친근한 존댓말("~해요")을 유지한다.
8. **수정 범위**: 자기 담당 파일과 자기 조사 노트만 수정한다. git 커밋·푸시는 하지 않는다.
9. **빌드**: `npx astro build --outDir /tmp/build-<담당>`로 확인한다(링크 검사 포함).
10. **보고**: (a)/(b)/(c) 건수, (c)로 남긴 항목과 이유, 붙인 officialUrl 수, 빌드 결과.

| 담당 | 범위 |
| --- | --- |
| F1 | media/11, media/12, media/13 |
| F2 | media/14, media/15, automation/16·18·19·20, coding/06·07·09 |
| F3 | agents/01~05, chat/01·02·04·05, basics/01~08 |
| F4 | claude/c01~c16, dev/01~10 |

## F5 — 용어 사전

- **새 페이지**: `src/content/docs/start/glossary.mdx`, 제목 "AI 용어 사전".
  - 일반 페이지로 만든다. level·category 같은 튜토리얼 frontmatter는 넣지 않는다.
  - `start/` 아래가 튜토리얼로 잡히는지 `src/lib/tutorials.ts`의 isTutorial로 확인한다.
- **수록 범위**: 사이트 본문에 실제로 나오는 용어 40~60개.
  - 예: 프롬프트, 토큰, 컨텍스트 창, 환각, 모델, 에이전트, MCP, 커넥터, 스킬, 아티팩트, 프로젝트, RAG, 임베딩, API, 레이트 리밋, 프롬프트 캐싱, 배치, 도구 사용, 컴퓨터 사용, 확장 사고, 멀티모달, 파인튜닝, 평가(evals), 헤드리스, 서브에이전트, 훅 등.
  - grep으로 본문에서 실제 쓰는 표현을 확인한다.
- **항목 형식**: 가나다순으로 정렬하고, 초성별 소제목(ㄱ, ㄴ…, 영문은 A–Z)을 둔다. 각 항목은 아래 셋으로 구성한다.
  - 한 줄 쉬운 설명
  - 한 줄 비유나 예
  - "자세히:" 사이트 내부 튜토리얼 링크 1~2개. 링크는 `/new-project1/...` 절대경로를 쓴다.
- **사이드바와 진입점**: `astro.config.mjs` 사이드바의 "시작하기" 그룹에 "AI 용어 사전"을 추가한다. `basics/index.mdx`와 `start/beginner.mdx`에 한 줄 안내 링크를 넣는다.
- **수정 가능한 파일**: 위 4개 파일뿐이다.
- 빌드는 `--outDir /tmp/build-f5`로 한다.
