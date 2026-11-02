# 작업 명세 — 26단계: 13차 튜토리얼 6편 (영어·한국어 동시, 에이전트 1명당 1편)

작성: 기획 담당 · 구현: 코딩 에이전트 6명 (W1~W6)

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, 우회 금지)을 그대로 따른다. 날짜 `2026-11-02`, `lastVerified: 2026-11-02`, `status: published`.

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level | 주요 공식 출처 |
| --- | --- | --- | --- | --- | --- |
| W1 | `claude/c26-mobile-app.mdx` | C26 | Get the most from the Claude mobile app / Claude 모바일 앱 제대로 쓰기 | beginner | support.claude.com (iOS·Android 앱) |
| W2 | `automation/48-calendar-scheduling.mdx` | 18 | Plan your schedule and meetings with AI / AI로 일정·회의 시간 잡기 | practical | support.google.com (Gemini in Calendar), support.claude.com (Calendar 커넥터), learn.microsoft.com·support.microsoft.com (Copilot in Outlook, 열리는 페이지만) |
| W3 | `chat/46-meal-planning.mdx` | 17 | Plan meals and recipes with AI / AI로 식단·레시피 계획하기 | beginner | 각 서비스 공식 도움말(사진 업로드 등) + 사이트 기존 편 |
| W4 | `coding/42-code-review-ai.mdx` | 15 | Review code with AI before you merge / 병합 전에 AI로 코드 리뷰하기 | practical | code.claude.com/docs (code review, GitHub Actions), docs.github.com (Copilot code review) |
| W5 | `media/37-subtitles.mdx` | 14 | Make and translate video subtitles with AI / AI로 영상 자막 만들고 번역하기 | beginner | support.google.com/youtube (자막), 각 서비스 공식 도움말 |
| W6 | `dev/17-extended-thinking.mdx` | 17 | Use extended thinking in the Claude API / Claude API에서 확장 사고(thinking) 쓰기 | advanced | platform.claude.com/docs (extended/adaptive thinking, effort) |

## 편별 지침
- W1: C22(데스크톱 앱)·basics/07(휴대폰 AI)와 겹치면 링크. 음성·카메라·파일·위젯 등 기능은 공식 문서 확인분만.
- W2: C23(Google Workspace)·automation/38(메일)과 연결. 다른 사람 일정·개인정보 주의. 기능·플랜은 공식 확인분만.
- W3: 의료·영양 조언 아님 명시, 알레르기·질환은 전문가 상담. 냉장고 사진으로 메뉴 추천, 장보기 목록, 예산 맞춤 프롬프트. basics/04·05 연결.
- W4: AI 리뷰는 사람 리뷰 대체 아님, 코드 외부 전송·비밀 정보 주의. coding/40·dev/07 연결. 실행 여부 명시.
- W5: 저작권(basics/09), 자동 자막 정확도 검수, 자막 파일 형식(SRT 등)은 공식 확인분만. media/14·media/26 연결.
- W6: 파라미터·지원 모델·토큰 과금·스트리밍과 함께 쓸 때 주의는 공식 문서 그대로. dev/02·dev/15 연결. 짧은 예제, 실행 여부 명시. 모델 ID는 공식 문서의 현재 모델.

## 공통
- 자기 파일(두 언어)·조사 노트만 수정. W1은 `docs/PLAN.md` Claude 표에 C26 한 줄 추가. 빌드 `npx astro build --outDir /tmp/build-<담당>`. git 커밋·푸시 금지.
- 보고: 만든 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
