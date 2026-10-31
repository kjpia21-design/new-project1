// 사이트 언어 도우미: 한국어는 루트(`/`), 영어는 `/en/` 아래에 있다.
export type Lang = 'ko' | 'en';

/** 현재 요청 경로로 언어를 정한다. `/en` 또는 `/en/...` 이면 영어, 나머지는 한국어. */
export function getLang(astro: { url: URL }): Lang {
  const p = astro.url.pathname;
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'ko';
}

/** 문서 id(콘텐츠 컬렉션)로 언어를 정한다. */
export function langOfId(id: string): Lang {
  return id === 'en' || id.startsWith('en/') ? 'en' : 'ko';
}

/** 언어 접두사: 한국어 '', 영어 '/en' */
export function langPrefix(lang: Lang): string {
  return lang === 'en' ? '/en' : '';
}

const dict = {
  // 공통
  'level.beginner': { ko: '입문', en: 'Beginner' },
  'level.practical': { ko: '실무', en: 'Practical' },
  'level.advanced': { ko: '고급', en: 'Advanced' },
  'cat.claude': { ko: 'Claude 완전 정복', en: 'Mastering Claude' },
  'cat.chat': { ko: '대화형 AI 기본기', en: 'Chat AI Basics' },
  'cat.coding': { ko: '코딩·에이전트', en: 'Coding & Agents' },
  'cat.media': { ko: '이미지·영상·음성', en: 'Image, Video & Voice' },
  'cat.automation': { ko: '업무 자동화·생산성', en: 'Automation & Productivity' },
  'cat.agents': { ko: '화제의 AI 에이전트', en: 'Trending AI Agents' },
  'cat.dev': { ko: '개발자 심화', en: 'Advanced for Developers' },
  'cat.basics': { ko: 'AI 첫걸음', en: 'AI First Steps' },
  'site.name': { ko: '최신 AI 트렌드 따라 잡기', en: 'Catch Up on AI Trends' },
  // Checklist
  'checklist.done': { ko: '완료', en: 'done' },
  'checklist.progress': { ko: '체크리스트 진행률', en: 'Checklist progress' },
  // PromptBox
  'prompt.label': { ko: '이 프롬프트를 복사해서 붙여넣으세요', en: 'Copy and paste this prompt' },
  'prompt.copy': { ko: '복사', en: 'Copy' },
  'prompt.copied': { ko: '복사됨!', en: 'Copied!' },
  'prompt.manual': { ko: '직접 복사해 주세요', en: 'Please copy manually' },
  // FlowSteps
  'flow.label': { ko: '절차 흐름도', en: 'Step-by-step flow' },
  'flow.noteA': { ko: '단순화한 흐름도예요. 실제 화면은', en: 'This is a simplified flow. See the' },
  'flow.help': { ko: '공식 도움말', en: 'official help page' },
  'flow.noteB': { ko: '에서 확인하세요.', en: ' for the actual screens.' },
  // ScreenshotPlaceholder
  'shot.guide': { ko: '화면 안내', en: 'Screen guide' },
  'shot.official': { ko: '공식 도움말에서 이 화면 보기', en: 'See this screen in the official help' },
  'shot.title': { ko: '이 단계에서 보게 될 화면', en: 'What you will see at this step' },
  'shot.note': { ko: '실제 화면은 서비스 업데이트에 따라 다를 수 있어요', en: 'The actual screen may differ as the service is updated.' },
  // Sources
  'sources.title': { ko: '출처', en: 'Sources' },
  'sources.verified': { ko: '마지막 확인일', en: 'Last verified' },
  'sources.notYet': { ko: '아직 확인 전', en: 'Not yet verified' },
  'sources.none': { ko: '등록된 출처가 아직 없어요.', en: 'No sources have been added yet.' },
  'sources.note': {
    ko: '가격·한도·메뉴 이름은 자주 바뀌어요. 중요한 결정 전에는 위 공식 페이지에서 최신 내용을 다시 확인하세요.',
    en: 'Prices, limits, and menu names change often. Before making an important decision, check the official pages above for the latest details.',
  },
  // Footer
  'table.label': { ko: '표 (좌우로 스크롤할 수 있어요)', en: 'Table (scrolls horizontally)' },
  // TutorialMeta
  'meta.label': { ko: '튜토리얼 정보', en: 'Tutorial info' },
  'meta.draft': { ko: '준비 중', en: 'Coming soon' },
  'meta.duration': { ko: '소요 시간', en: 'Time needed' },
  'meta.tbd': { ko: '미정', en: 'TBD' },
  'meta.verified': { ko: '마지막 확인일', en: 'Last verified' },
  'meta.tools': { ko: '사용 도구', en: 'Tools' },
  'meta.prereq': { ko: '준비물', en: 'What you need' },
  // Summary
  'summary.title': { ko: '한눈에 요약', en: 'At a glance' },
  // Hero
  'hero.kicker': { ko: '한국어로 쉽게, 단계별로 따라 하는', en: 'Easy, step-by-step tutorials' },
  'hero.lead': {
    ko: '새로 나온 AI 도구를 쉽게 설명하고, 직접 따라 해 볼 수 있는 튜토리얼로 안내해요. 내 수준에 맞는 곳에서 시작해 보세요.',
    en: 'We explain the newest AI tools in plain language and guide you through hands-on tutorials. Start at the level that fits you.',
  },
  'hero.start': { ko: '실무자로 시작하기', en: 'Start as a practitioner' },
  'hero.all': { ko: '전체 튜토리얼 보기', en: 'Browse all tutorials' },
  'hero.art': { ko: '로봇과 말풍선, 반짝이 일러스트', en: 'Illustration of a robot, a speech bubble, and sparkles' },
  // LevelCards
  'lv.beginner.desc': {
    ko: 'AI가 처음이에요. 가입부터 첫 질문, 안전하게 쓰는 법까지 "AI 첫걸음" 8편으로 시작해요.',
    en: 'I am new to AI. Start with the "AI First Steps" series: signing up, your first question, and using AI safely.',
  },
  'lv.practical.desc': {
    ko: '업무에 AI를 써 보고 싶어요. 바로 따라 할 수 있는 활용법이 필요해요.',
    en: 'I want to use AI at work. I need ready-to-follow, practical how-tos.',
  },
  'lv.advanced.desc': {
    ko: '더 깊이 다루고 싶어요. API, Agent SDK, MCP, CI 자동화까지 가 볼래요.',
    en: 'I want to go deeper: the API, Agent SDK, MCP, and CI automation.',
  },
  'lv.go': { ko: '여기서 시작하기 →', en: 'Start here →' },
  // Banners
  'claude.cover': { ko: 'Claude 완전 정복 보러 가기', en: 'Go to Mastering Claude' },
  'claude.eyebrow': { ko: '특별 섹션', en: 'Special section' },
  'claude.desc': {
    ko: '모델 고르기부터 프로젝트, 아티팩트, 커넥터, 스킬, Claude Code, API까지 {n}편으로 깊이 있게 다뤄요.',
    en: 'From choosing a model to projects, artifacts, connectors, skills, Claude Code, and the API, covered in depth across {n} tutorials.',
  },
  'banner.go': { ko: '보러 가기 →', en: 'Take a look →' },
  'claude.news': { ko: '최신 소식 보기 →', en: 'Latest news →' },
  'agents.eyebrow': { ko: '새로 나온 화제의 AI 에이전트', en: 'New and trending AI agents' },
  'agents.desc': {
    ko: '내 일을 알아서 챙겨 주는 개인 AI 에이전트가 무엇이고, 한국에서 쓸 수 있는지, 안전하게 쓰려면 어떻게 해야 하는지 정리했어요.',
    en: 'What personal AI agents that handle tasks for you are, whether you can use them in Korea, and how to use them safely.',
  },
  // CategoryCards
  'cc.roles': { ko: '직무별 AI 활용', en: 'AI by Job Role' },
  'cc.roles.desc': {
    ko: '마케터, 사무직, 교사, 학생, 개발자, 1인 사업자별 활용법',
    en: 'How-tos for marketers, office workers, teachers, students, developers, and solo business owners',
  },
  'cc.basics.desc': {
    ko: '가입부터 첫 질문, 안전하게 쓰는 법, 휴대폰 활용까지 {n}편',
    en: '{n} tutorials, from signing up and your first question to safe use and using AI on your phone',
  },
  'cc.agents.desc': { ko: 'Meta Muse, Grok Bot, ChatGPT Dots 알아보기', en: 'Meet Meta Muse, Grok Bot, and ChatGPT Dots' },
  'cc.dev.desc': { ko: '도구 사용, Agent SDK, MCP 서버, CI 자동화, 평가', en: 'Tool use, Agent SDK, MCP servers, CI automation, evals' },
  'cc.chat.desc': { ko: '프롬프트, 요약, 데이터 분석, 문서 작성', en: 'Prompts, summaries, data analysis, document writing' },
  'cc.coding.desc': { ko: 'Claude Code, Cursor, 웹 도구 만들기, 에이전트', en: 'Claude Code, Cursor, building web tools, agents' },
  'cc.media.desc': { ko: '이미지·영상 생성, 녹음 정리, 음성 합성', en: 'Image and video generation, transcribing recordings, speech synthesis' },
  'cc.automation.desc': { ko: 'Notion, 메일·캘린더, Zapier/Make, 커넥터', en: 'Notion, email and calendar, Zapier/Make, connectors' },
  // HomeToc
  'toc.start': { ko: '시작하기', en: 'Getting Started' },
  'toc.beginner': { ko: '입문자 시작점', en: 'Beginner start' },
  'toc.practical': { ko: '실무자 시작점', en: 'Practitioner start' },
  'toc.advanced': { ko: '고급 사용자 시작점', en: 'Advanced start' },
  'toc.rolesGuide': { ko: '직무별 가이드', en: 'Guides by job role' },
  'toc.fields': { ko: '분야별 튜토리얼', en: 'Tutorials by Topic' },
  'toc.ref': { ko: '참고 자료', en: 'Reference' },
  'toc.prompts': { ko: '바로 쓰는 프롬프트 모음', en: 'Ready-to-use prompts' },
  'toc.glossary': { ko: 'AI 용어 사전', en: 'AI glossary' },
  'toc.all': { ko: '전체 튜토리얼', en: 'All tutorials' },
  'toc.updates': { ko: '최근 업데이트', en: 'Recent updates' },
  'toc.about': { ko: '소개', en: 'About' },
  'toc.news': { ko: 'Claude 최신 소식', en: 'Claude news' },
  'toc.show': { ko: '{n}개 보기', en: 'Show {n}' },
  // RecentUpdates
  'recent.empty': {
    ko: '아직 확인을 마친 튜토리얼이 없어요. 내용을 공식 문서와 대조해 확인하면, 확인한 날짜 순서대로 여기에 나타나요.',
    en: 'No tutorials have been verified yet. Once a tutorial is checked against the official docs, it will appear here in order of verification date.',
  },
  'recent.verified': { ko: '확인', en: 'Verified' },
  // NewsItem
  'news.source': { ko: '공식 출처', en: 'Official source' },
  'news.tutorial': { ko: '관련 튜토리얼', en: 'Related tutorial' },
  'news.channel.Claude 앱': { ko: 'Claude 앱', en: 'Claude app' },
  'news.channel.뉴스': { ko: '뉴스', en: 'News' },
  // TutorialGrid
  'grid.empty': { ko: '아직 이 조건에 맞는 튜토리얼이 없어요.', en: 'No tutorials match these criteria yet.' },
  'grid.search': { ko: '제목·도구로 찾기', en: 'Search by title or tool' },
  'grid.placeholder': { ko: '예: 클로드, 엑셀, MCP', en: 'e.g. Claude, Excel, MCP' },
  'grid.levelFilter': { ko: '수준 필터', en: 'Level filter' },
  'grid.catFilter': { ko: '분야 필터', en: 'Topic filter' },
  'grid.level': { ko: '수준', en: 'Level' },
  'grid.cat': { ko: '분야', en: 'Topic' },
  'grid.allBtn': { ko: '전체', en: 'All' },
  'grid.none': { ko: '조건에 맞는 튜토리얼이 없어요. 필터를 바꿔 보세요.', en: 'No tutorials match. Try changing the filters.' },
  'grid.count': { ko: '튜토리얼 {n}개', en: '{n} tutorials' },
  // 404
  'nf.title': { ko: '페이지를 찾을 수 없어요', en: 'Page not found' },
  // Illustration 등 일러스트 aria
  'illu.hero': { ko: '로봇과 말풍선, 반짝이 일러스트', en: 'Illustration of a robot, a speech bubble, and sparkles' },
} as const;

export type Key = keyof typeof dict;

export function t(lang: Lang, key: Key, vars?: Record<string, string | number>): string {
  let s: string = dict[key][lang];
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
  return s;
}

/** 날짜 표기: ko 2026년 10월 31일 / en Oct 31, 2026 */
export function formatDateLang(d: Date | undefined, lang: Lang): string {
  if (!d) return '';
  const y = d.getUTCFullYear(), m = d.getUTCMonth(), day = d.getUTCDate();
  if (lang === 'en') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[m]} ${day}, ${y}`;
  }
  return `${y}년 ${m + 1}월 ${day}일`;
}
