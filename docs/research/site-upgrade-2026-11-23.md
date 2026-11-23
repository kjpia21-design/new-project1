# 사이트 검색 노출·배포 점검과 개선 (2026-11-23)

## 점검 결과
### 잘 되어 있는 것
- 기술 기반은 깨끗하다: 페이지마다 canonical, HTML 안 hreflang(en/ko/x-default), noindex 없음, 정적 페이지라 빠르다.
- 사이트맵(약 400개 주소, en/ko `xhtml:link` 대체 주소 포함), robots.txt, 네이버 소유 확인 메타, 언어별 OG 이미지가 이미 있다.

### 부족했던 것 (이번에 고친 것)
- RSS 피드 없음 → `/rss.xml`(영어), `/ko/rss.xml`(한국어) 추가. 최신 확인일 순 50편, 본문 대신 설명(description). 네이버 서치어드바이저에 RSS 제출 가능.
- 구조화 데이터 없음 → 튜토리얼 `TechArticle` + `BreadcrumbList`, 홈 `WebSite` + `Organization` (JSON-LD, `src/components/Head.astro`).
- 사이트맵에 `<lastmod>` 없음 → frontmatter `lastVerified`로 출력, `x-default` 대체 주소 추가 (`astro.config.mjs`).
- 영어 제목·설명이 너무 길다(제목 60자 초과 153/200, 설명 160자 초과 139/200) → `seoTitle`/`seoDescription` 필드 추가. 화면 H1·본문은 그대로 두고 `<title>`·meta description·og 태그만 바꾼다. `seoTitle`과 사이트 이름을 합쳐 60자가 넘으면 사이트 이름 없이 `seoTitle`만 쓴다 (`src/routeMiddleware.ts`).
- IndexNow 미사용 → 배포 후 바뀐 문서 주소를 IndexNow(Bing, 네이버 등 참여)에 알리는 작업 추가 (`.github/workflows/deploy.yml`, `scripts/indexnow-urls.sh`).
- 그 밖에: 홈 `og:type`을 website로, 튜토리얼에 `article:modified_time`, 마지막 확인일을 `<time>`으로 감쌈, 허브·분야 소개 페이지의 짧은 설명 보강, 404 페이지를 `/ko/` 주소에서 한국어로 표시.

## 콘텐츠 공백 (앞으로 쓸 글 후보)
- 요금제·무료 한도 비교 페이지 (Claude·ChatGPT·Gemini 한눈에, 확인일 명시)
- "사용량 한도에 도달했어요" 메시지 대처법 (서비스별 의미와 리셋 시각 확인)
- Claude Code를 쓰려면 어떤 플랜이 필요한지
- 구독 해지·환불 방법 (웹·앱스토어 결제별)
- 업무 자동화 아이디어 모음 허브
- 직무별 프롬프트 모음 (마케터, 사무직, 교사 등 기존 직무 가이드와 연결)
- 이번 주 바뀐 점 페이지 (주간 변경 요약)
- 무료 AI 도구 모음
- 질문형 제목 늘리기 ("ChatGPT 무료로 어디까지 되나요?" 같은 검색어 형태)
- 이름이 바뀐 도구는 옛 이름도 제목에 남긴다 (예: Gemini Notebook(구 NotebookLM))

## 배포·홍보 아이디어
- 뉴스레터 또는 커뮤니티(카페·오픈채팅·Reddit 등) 게시: 새 글·주간 변경 요약을 링크와 함께
- 네이버 블로그·브런치에 요약본을 올리고 원문 링크 연결 (중복 문서가 되지 않게 전문 복사는 피함)
- 짧은 영상(Shorts)은 나중에 검토

## 하지 않기로 한 것
- FAQ·HowTo·Course 구조화 데이터: 화면 내용과 맞추기 어렵고 구글이 리치 결과를 대부분 줄였다. 쓰지 않는다.
- llms.txt: 효과가 확인되지 않았다. 필요하면 선택 사항으로만 검토.
- 방문자 추적 도구 추가 없음 (Cloudflare Web Analytics만 유지).
