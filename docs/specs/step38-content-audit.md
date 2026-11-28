# 작업 명세 — 38단계: 기존 자료 점검 결과 반영

작성: 기획 담당 · 구현: 코딩 에이전트 2명 (X1, X2)

배경: 2026-11-28에 사실 확인 2건(Claude / 그 외)과 저장소 정리 점검을 했다. 이 문서는 그 결과 중 고칠 것만 모았다.
- 쓰지 않는 컴포넌트와 i18n 키, 본문에 남은 옛 섹션 이름은 이미 정리했다(커밋 49e6b93).
- 아래 표의 근거 URL은 점검 때 plain curl로 확인한 공식 페이지다. 고칠 때 한 번 더 열어 보고 공식 문구 그대로 반영한다.

## 공통 규칙
- 영어와 한국어 두 언어를 같이 고친다.
- 고친 글은 `lastVerified: 2026-11-28`로 바꾸고, 해당 공식 URL이 `sources`에 없으면 추가한다.
- 날짜와 수치는 "2026-11-28 기준 / as of 2026-11-28"로 적는다. 바뀐 것만 고치고 글을 다시 쓰지 않는다.
- curl은 기본 옵션만 쓴다(`-L` 허용). User-Agent 위장이나 우회는 하지 않는다. 열리지 않는 페이지는 바꾸지 말고 보고만 한다.
- `claude-news.mdx`, `weekly.mdx`, `updates.mdx` 본문은 건드리지 않는다. `Head.astro`는 SECTION_NAMES 맵만 고칠 수 있다.
- PromptBox 안에는 중괄호를 쓰지 않는다.
- 빌드: `npx astro build --outDir /tmp/build-<담당>`. 공유 캐시 충돌이 나면 잠시 후 재시도한다. 링크 검사는 반드시 통과해야 한다.
- git 커밋과 푸시는 하지 않는다.

## X1 — Claude 외 서비스 사실 수정 + 요금표 중복 정리 + media/34 공개

### 1. 사실 수정

| 파일 | 고칠 내용 | 근거 |
| --- | --- | --- |
| basics/23:84 부근, chat/05:154 | ChatGPT Free에도 이미지 생성(제한)과 음성 대화(제한)가 있다. "Free에서는 이미지 생성 불가"는 틀렸다. | https://chatgpt.com/pricing |
| chat/05:155-157, basics/16:72, basics/23:77 | "앱 수치를 찾지 못함"을 지우고 공식 수치를 넣는다. Instant 모델 컨텍스트는 Free 27K, Go·Plus 54K, Pro 128K. Go에는 광고가 붙을 수 있다. | 같은 곳 |
| basics/16:71 | Gemini 무료 모델 설명을 basics/23처럼 "자동 모델 선택"으로 바꾼다. Flash-Lite는 유료 플랜이 한도에 걸렸을 때 쓰는 대체 모델이다. | https://gemini.google/subscriptions/ · https://support.google.com/gemini/answer/16275805 |
| automation/52 (3, 5, 36, 47, 59, 68, 81, 127-131, 141 부근) | Gem 만들기 단계를 Gemini 스킬(Skills) 만들기로 바꾼다. Gem 일정은 다음과 같다: 2026-11-17 개인 계정 읽기 전용 → 2026-12-17 삭제 / 직장 계정 2027년 3월 / 교육 계정 2027년 6월. | https://support.google.com/gemini/answer/18560919 |
| basics/08:68, basics/11:142, basics/16:74 | "11월 17일에 읽기 전용이 될 예정"을 과거형으로 바꾸고, 12-17 삭제 예정을 덧붙인다. | 같은 곳 |
| agents/04 (11, 46, 113, 119, 258, 303 + Summary) | dots 제공 대상에 "일부 Plus 사용자(18세 이상, EEA·영국·스위스 제외)에게 순차 제공"과 "Business Standard는 개인 dot 1개"를 추가한다. 가격 페이지 표에는 아직 Plus가 "No"로 나와 두 공식 페이지가 다르다는 점도 적는다. | https://learn.chatgpt.com/docs/dots · https://chatgpt.com/pricing |
| agents/09:106 | 예시 수치를 최신 모델 GPT-6.2 Astra 기준 "6~50"으로 바꾸거나 모델명을 명시한다. basics/22와 맞춘다. | https://learn.chatgpt.com/docs/pricing |
| agents/01:77,144 · agents/02:49,146,227 · agents/05:102 | Meta Muse 제공 국가에 호주(2026-11-17)를 추가하고, agents/02 연표에도 넣는다. | https://about.fb.com/news/2026/11/muse-is-now-available-in-australia/ |
| automation/16:73-74 | Notion Business 좌석당 월 Standard 크레딧 1,500개, Select 크레딧 500개를 넣는다. | https://www.notion.com/pricing |
| media/13:98 | Sora 종료를 공식 확인 문구로 바꾸고 "확인 못 함"을 지운다. 앱은 2026-04-26 종료, API는 2026-09-24 종료. | https://openai.com/index/sora-2/ |
| automation/41:79-82 | Slackbot 한도를 넣는다. Business+는 주당 사용자 1인 15개, Enterprise+는 무제한이다. Free·Pro는 확인되지 않음으로 둔다. | https://slack.com/pricing |
| media/11:83 | Gemini 이미지 모델에 Nano Banana Lite(Flash-Lite 선택 시)를 추가한다. | https://support.google.com/gemini/answer/14286560 |
| automation/24:46,49,182 | 가격 페이지가 이제 열리므로 가격을 넣는다. 예: Business Standard+Copilot 연간 $23.50, Copilot Business 추가 $18. 공식 페이지 그대로 적는다. | https://www.microsoft.com/en-us/microsoft-365-copilot/pricing |

### 2. 요금표 중복 정리
같은 요금표가 6곳에 반복되어 가격이 바뀌면 여러 곳을 고쳐야 한다. **basics/22를 세 서비스(Claude·ChatGPT·Gemini) 요금의 단일 기준 표로 삼는다.**
- agents/09: 서비스별 가격표를 basics/22 링크로 대신한다. "에이전트가 왜 사용량을 더 쓰나"와 "서비스별 에이전트 사용량" 부분만 남긴다.
- chat/05: 가격 섹션을 줄인다. 무엇을 비교할지 한두 줄만 남기고 basics/22로 연결한다. 기능 비교는 유지한다.
- basics/08: "무엇으로 결정하나"에 집중하게 하고, 가격 수치는 basics/22로 연결한다. 표 전체를 지우지 말고, 가격 열만 줄이거나 링크로 바꾼다.
- basics/16, basics/23: 무료 플랜 설명이 basics/22와 다르게 적힌 곳만 맞추고 basics/22로 연결한다.

### 3. media/34-ai-video-generation 공개
- 공식 페이지(sources)로 핵심 사실을 다시 확인한다. 예: Gemini Omni가 Veo를 대체한다는 내용.
- 사이드바 번호와 본문의 "튜토리얼 3, 10" 같은 번호 참조가 실제와 맞는지 확인하고 고친다.
- `status: published`로 바꾼다(두 언어).

## X2 — Claude 사실 수정 + 섹션 이름 통일 + 기타 정리

### 1. 사실 수정

| 파일 | 고칠 내용 | 근거 |
| --- | --- | --- |
| claude/c11:44,79,169,244 · c19:165 | 컴퓨터 사용은 Pro·Max·Ultra에서는 정식 제공이고, Team·Enterprise에서만 베타다. c19의 84-91 "as of 2026-11-02" 표도 최신 문서와 맞춘다. | https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork · https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude |
| claude/c07:87 | 커넥터 수를 1228개(2026-11-28 기준)로 바꾼다. | https://claude.com/connectors |
| dev/04:63 | SDK 버전 메모를 2026-10-21 이후 기준으로 고친다(Python 2.0, TS 1.0, API 버전 2026-10-21). 예제가 그대로 동작하는지 문서로 확인하고, 실행했는지 여부를 적는다. | https://platform.claude.com/docs/en/api/migration-2026-10-21 |
| dev/06:381 | 관리형 `extraKnownMarketplaces`는 2026-11-30 이후 자동 업데이트가 기본값이 된다고 적는다. 끄려면 `autoUpdate: false`를 쓴다. | https://code.claude.com/docs/en/changelog |
| claude/c06:57 | Enterprise에서는 Data 템플릿이 2026-11-20부터 기본으로 켜진다는 점을 추가한다. | https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them |
| claude/c01:73 · c13:243,330 | 아직 맞는 내용이다. Sonnet 4.5 API 종료와 Opus 4.8 fast mode 제거가 2026-11-30이므로 날짜를 분명히 적어 둔다. "2026-11-30에 종료"처럼 쓰면 지난 뒤에도 틀리지 않는다. | 모델 deprecations, https://code.claude.com/docs/en/fast-mode |

### 2. 중복 정리
- c33의 요금표는 Claude Code와 관련된 Pro·Max·Ultra(필요하면 Team) 열만 남기고, 나머지는 c02로 연결한다.
- agents/01의 Claude 줄에 "Claude 에이전트 기능은 agents/13 참고" 링크를 넣는다.
- agents/13은 제목이 agents/01과 헷갈리지 않게 "Claude의 에이전트 기능 한눈에 보기 / Claude's agent features at a glance" 정도로 바꾼다. seoTitle도 같이 확인한다.

### 3. 섹션 이름 통일
사이드바(`astro.config.mjs`), 섹션 index 페이지 title, `src/lib/i18n.ts`, `src/lib/tutorials.ts`, about 두 언어, `scripts/og-images.mjs` SECTIONS, `Head.astro` SECTION_NAMES에서 영어 섹션 이름이 서로 다르다. 예: "Image(s), Video & Voice", "(Work) Automation & Productivity". **사이드바 이름으로 통일한다.** og 이미지 문구가 바뀌면 `node scripts/og-images.mjs`로 다시 만들고, 실제로 바뀐 파일만 남긴다.

### 4. 기타
- about 두 언어의 "8개 섹션 · 2026-10-31 기준" 같은 고정 문구를 실시간 수와 충돌하지 않게 고친다.
- `scripts/gen-placeholders.py`(일회성 생성기, 참조 없음)를 삭제한다. 다른 곳에서 참조하지 않는지 확인한다.
- `src/lib/i18n.ts`에서 참조가 없는 키(`summary.title`, `meta.duration`, `meta.verified`, `nf.title`, `illu.hero`, `news.channel.*`)를 grep으로 확인한 뒤 지운다.

## 보고
- 고친 파일과 각 변경 한 줄 요약
- 확인한 URL
- 확인하지 못한 항목
- 빌드 결과
