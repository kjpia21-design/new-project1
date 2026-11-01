// 사용법: node scripts/og-images.mjs
//   → 영어판 public/og/<id>.png, 한국어판 public/og/ko/<id>.png (1200x630) 생성
// HTML 템플릿을 Playwright(Chromium)로 캡처한다. 글꼴은 node_modules/pretendard 의 가변 woff2를 @font-face로 직접 싣는다(시스템 폰트 의존 없음).
// 디자인: src/styles/custom.css 라이트 토큰(웜 뉴트럴 + 코랄 포인트), HeroIllustration.astro의 점 격자·노드 그래픽, Illustration.astro의 라인 아이콘.
// 섹션을 추가·변경하면 아래 SECTIONS와 src/components/Head.astro의 목록을 함께 고친다. Chromium은 /opt/pw-browsers 의 것을 쓴다(`playwright install` 금지).
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require(execSync('npm root -g').toString().trim() + '/playwright'); }

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const FONT = path.join(ROOT, 'node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2');
const fontData = fs.readFileSync(FONT).toString('base64');

// 라이트 모드 토큰 (src/styles/custom.css)
const C = {
  bg: '#fcfbfa', surface: '#ffffff', surface2: '#f8f6f3',
  ink: '#1c1917', ink2: '#4b4540', ink3: '#6e6761', ink4: '#a39b94',
  line: '#e6e1db', lineStrong: '#cfc8c0',
  coral: '#ff7a59', coralInk: '#c2461f', coralSoft: '#fcf1ec',
};
// Illustration.astro 의 tone 팔레트 (라이트)
const TONES = {
  coral: { bg: '#fcf1ec', fg: '#c2461f', dot: '#ff7a59' },
  green: { bg: '#e6f2ea', fg: '#1f6b3a', dot: '#3f9a62' },
  blue: { bg: '#e6eef9', fg: '#1f4f8a', dot: '#3f7ac4' },
  purple: { bg: '#efebf9', fg: '#4a3690', dot: '#7a62c4' },
  yellow: { bg: '#fbf1dc', fg: '#6f4a05', dot: '#cf9120' },
};

const SITE = { en: 'Catch Up on AI Trends', ko: '최신 AI 트렌드 따라 잡기' };
const KICKER = { en: 'Easy, step-by-step AI tutorials', ko: '쉽게, 단계별로 따라 하는 AI 튜토리얼' };
const DOMAIN = 'ai-trend-catchup.com';

// 문구는 src/lib/i18n.ts(cat.*, cc.*.desc)와 astro.config.mjs 사이드바 라벨을 따른다.
const SECTIONS = [
  { id: 'default', icon: 'sparkle', tone: 'coral',
    en: { name: 'Catch Up on AI Trends', sub: 'The newest AI tools explained in plain language, with hands-on tutorials for every level.' },
    ko: { name: '최신 AI 트렌드 따라 잡기', sub: '새로 나온 AI 도구를 쉽게 설명하고, 입문부터 고급까지 직접 따라 하는 튜토리얼로 안내해요.' } },
  { id: 'basics', icon: 'basics', tone: 'green',
    en: { name: 'AI First Steps', sub: 'From signing up and your first question to safe use and AI on your phone.' },
    ko: { name: 'AI 첫걸음', sub: '가입부터 첫 질문, 안전하게 쓰는 법, 휴대폰 활용까지 처음 시작하는 분을 위한 기본기.' } },
  { id: 'claude', icon: 'claude', tone: 'coral',
    en: { name: 'Mastering Claude', sub: 'From choosing a model to projects, connectors, skills, Claude Code, and the API.' },
    ko: { name: 'Claude 완전 정복', sub: '모델 고르기부터 프로젝트, 커넥터, 스킬, Claude Code, API까지 차근차근.' } },
  { id: 'claude-news', icon: 'news', tone: 'yellow',
    en: { name: 'Claude News', sub: 'Official updates that matter to working professionals, explained in plain language.' },
    ko: { name: 'Claude 최신 소식', sub: '공식 업데이트 가운데 실무자에게 중요한 것만 골라 쉬운 말로 정리했어요.' } },
  { id: 'agents', icon: 'agents', tone: 'purple',
    en: { name: 'Trending AI Agents', sub: 'Meet Meta Muse, Grok Bot, and ChatGPT Dots, and learn how to use them safely.' },
    ko: { name: '화제의 AI 에이전트', sub: 'Meta Muse, Grok Bot, ChatGPT Dots 비교와 안전하게 쓰는 수칙.' } },
  { id: 'dev', icon: 'dev', tone: 'blue',
    en: { name: 'Advanced for Developers', sub: 'Tool use, Agent SDK, MCP servers, CI automation, and evals.' },
    ko: { name: '개발자 심화', sub: '도구 사용, Agent SDK, MCP 서버, CI 자동화, 평가까지 한 단계 더 깊이.' } },
  { id: 'chat', icon: 'chat', tone: 'green',
    en: { name: 'Chat AI Basics', sub: 'Prompts, summaries, data analysis, and document writing you can trust.' },
    ko: { name: '대화형 AI 기본기', sub: '프롬프트, 요약, 데이터 분석, 문서 작성까지 질문을 잘하고 결과를 믿고 쓰는 법.' } },
  { id: 'coding', icon: 'coding', tone: 'blue',
    en: { name: 'Coding & Agents', sub: 'Claude Code, Cursor, building web tools, and agents that work with you.' },
    ko: { name: '코딩·에이전트', sub: 'Claude Code, Cursor, 웹 도구 만들기, AI와 함께 만들고 고치는 개발 워크플로.' } },
  { id: 'media', icon: 'media', tone: 'purple',
    en: { name: 'Image, Video & Voice', sub: 'Image and video generation, transcribing recordings, and speech synthesis.' },
    ko: { name: '이미지·영상·음성', sub: '이미지·영상 생성, 녹음 정리, 음성 합성까지 만들고 다듬는 생성형 AI 도구.' } },
  { id: 'automation', icon: 'automation', tone: 'coral',
    en: { name: 'Automation & Productivity', sub: 'Notion, email and calendar, Zapier/Make, and connectors that take over repetitive work.' },
    ko: { name: '업무 자동화·생산성', sub: 'Notion, 메일·캘린더, Zapier/Make, 커넥터로 반복 업무를 AI에게 맡기는 방법.' } },
];

// Illustration.astro 와 같은 24x24 라인 아이콘(stroke 1.75). news 는 같은 규칙으로 추가한 아이콘.
const ICONS = {
  sparkle: '<path d="M12 3.5l2.2 6.3L20.5 12l-6.3 2.2L12 20.5l-2.2-6.3L3.5 12l6.3-2.2z"/>',
  claude: '<path d="M12 3.5l2.2 6.3L20.5 12l-6.3 2.2L12 20.5l-2.2-6.3L3.5 12l6.3-2.2z"/>',
  chat: '<path d="M20 12a8 8 0 0 1-11.7 7.1L4 20.5l1.4-4.3A8 8 0 1 1 20 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" stroke-width="2.4"/>',
  coding: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
  media: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M21 15.5l-4.5-4-6.5 7.5"/>',
  automation: '<path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12l1-8z"/>',
  agents: '<rect x="4" y="8.5" width="16" height="11" rx="3"/><path d="M12 8.5V4.5M9.5 4.5h5M2.5 13v3M21.5 13v3"/><path d="M9 14h.01M15 14h.01" stroke-width="2.4"/>',
  dev: '<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="M7 9.5l3 3-3 3M13 15.5h4"/>',
  basics: '<path d="M12 21v-8.5"/><path d="M12 12.5C12 8.5 9 6 4.5 6c0 4.5 3 7 7.5 6.5z"/><path d="M12 10.5c0-3.5 2.5-6 7.5-6 0 3.5-2.5 6.5-7.5 6.5z"/>',
  news: '<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="M7 9h4v4H7zM14 9h3M14 13h3M7 16.5h10"/>',
};

const svgIcon = (name, size, color) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

// 오른쪽 장식: HeroIllustration.astro 를 OG 비율에 맞게 다시 그린 점 격자 + 연결 노드 + 카드. 강조 노드에 섹션 아이콘을 넣는다.
const art = (s) => {
  const t = TONES[s.tone];
  return `
<svg class="art" viewBox="0 0 560 630" width="560" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="${C.ink}" opacity="0.16"/></pattern>
    <radialGradient id="glow" cx="58%" cy="45%" r="52%"><stop offset="0" stop-color="${C.coral}" stop-opacity="0.2"/><stop offset="1" stop-color="${C.coral}" stop-opacity="0"/></radialGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.45" stop-color="#fff" stop-opacity="1"/></linearGradient>
    <mask id="m"><rect width="560" height="630" fill="url(#fade)"/></mask>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#1c1917" flood-opacity="0.08"/></filter>
  </defs>
  <rect width="560" height="630" fill="url(#glow)"/>
  <rect width="560" height="630" fill="url(#dots)" mask="url(#m)"/>
  <g fill="none" stroke="${C.ink}" stroke-opacity="0.28" stroke-width="2">
    <path d="M150 440L320 300M320 300L448 372M320 300L418 150M448 372L512 470M150 440L96 320M320 300L190 190"/>
  </g>
  <g fill="${C.surface}" stroke="${C.ink}" stroke-opacity="0.5" stroke-width="2.5">
    <circle cx="150" cy="440" r="11"/><circle cx="448" cy="372" r="11"/><circle cx="418" cy="150" r="11"/>
    <circle cx="512" cy="470" r="8"/><circle cx="96" cy="320" r="8"/><circle cx="190" cy="190" r="8"/>
  </g>
  <circle cx="320" cy="300" r="92" fill="${C.coral}" opacity="0.1"/>
  <circle cx="320" cy="300" r="66" fill="${C.coral}" opacity="0.14"/>
  <g filter="url(#sh)"><rect x="268" y="248" width="104" height="104" rx="22" fill="${C.coral}"/></g>
  <g transform="translate(288 268)">${svgIcon(s.icon, 64, '#ffffff')}</g>
  <g fill="${C.surface}" stroke="${C.ink}" stroke-opacity="0.22" stroke-width="1.5" filter="url(#sh)">
    <rect x="392" y="412" width="140" height="80" rx="14"/>
    <rect x="70" y="80" width="170" height="92" rx="14"/>
  </g>
  <g stroke="${C.ink}" stroke-opacity="0.32" stroke-width="5" stroke-linecap="round">
    <path d="M414 438h58M414 460h90"/>
    <path d="M94 106h78M94 128h118M94 150h56"/>
  </g>
  <rect x="414" y="434" width="22" height="7" rx="3.5" fill="${t.dot}"/>
  <rect x="94" y="102" width="22" height="7" rx="3.5" fill="${C.coral}"/>
</svg>`;
};

const esc = (x) => x.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const html = (s, lang) => {
  const txt = s[lang];
  const t = TONES[s.tone];
  const isHome = s.id === 'default';
  return `<!doctype html><html lang="${lang}"><meta charset="utf-8"><style>
@font-face{font-family:'Pretendard Variable';font-weight:45 920;font-style:normal;font-display:block;src:url(data:font/woff2;base64,${fontData}) format('woff2-variations')}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{font-family:'Pretendard Variable',sans-serif;background:${C.bg};color:${C.ink};position:relative;-webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}
.frame{position:absolute;inset:0;border:1px solid ${C.line}}
.top{position:absolute;left:0;top:0;right:0;height:6px;background:${C.coral}}
.art{position:absolute;right:0;top:0}
.col{position:absolute;left:84px;top:84px;width:640px;height:462px;display:flex;flex-direction:column}
.kicker{display:flex;align-items:center;gap:12px;font-size:22px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${C.coralInk};margin-bottom:34px}
.kicker .dot{width:10px;height:10px;border-radius:999px;background:${C.coral};flex:none}
.kicker.ko{letter-spacing:0;text-transform:none;font-size:24px}
.tag{display:inline-flex;align-items:center;gap:12px;align-self:flex-start;padding:10px 18px 10px 12px;border-radius:12px;background:${t.bg};color:${t.fg};font-size:24px;font-weight:600;margin-bottom:28px;border:1px solid ${C.line}}
.tag svg{flex:none}
h1{font-size:76px;line-height:1.1;font-weight:700;letter-spacing:-0.03em;word-break:keep-all;overflow-wrap:break-word;text-wrap:balance;color:${C.ink};max-width:640px}
.sub{font-size:28px;line-height:1.5;color:${C.ink2};margin-top:22px;max-width:600px;word-break:keep-all;overflow-wrap:break-word;font-weight:400}
.foot{position:absolute;left:84px;right:84px;bottom:56px;display:flex;align-items:center;gap:16px;font-size:22px;color:${C.ink3};font-weight:500}
.foot .url{color:${C.ink};font-weight:600}
.foot .sep{width:1px;height:20px;background:${C.lineStrong}}
.foot .lang{font-size:18px;font-weight:600;letter-spacing:0.08em;padding:4px 10px;border:1px solid ${C.lineStrong};border-radius:6px;color:${C.ink3}}
</style><body>
<div class="top"></div>
${art(s)}
<div class="col">
  <div class="kicker ${lang}"><span class="dot"></span>${esc(isHome ? KICKER[lang] : SITE[lang])}</div>
  ${isHome ? '' : `<div class="tag">${svgIcon(s.icon, 26, t.fg)}<span>${esc(lang === 'en' ? 'Tutorial series' : '튜토리얼 시리즈')}</span></div>`}
  <h1>${esc(txt.name)}</h1>
  <p class="sub">${esc(txt.sub)}</p>
</div>
<div class="foot"><span class="url">${DOMAIN}${lang === 'ko' ? '/ko/' : ''}</span><span class="sep"></span><span>${esc(isHome ? SITE[lang] : KICKER[lang])}</span><span style="flex:1"></span><span class="lang">${lang === 'ko' ? '한국어' : 'EN'}</span></div>
<div class="frame"></div>
</body></html>`;
};

const exe = fs.readdirSync('/opt/pw-browsers').filter((d) => /^chromium-\d+$/.test(d)).map((d) => `/opt/pw-browsers/${d}/chrome-linux/chrome`).find((p) => fs.existsSync(p));
const browser = await pw.chromium.launch({ executablePath: exe });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

for (const lang of ['en', 'ko']) {
  const dir = path.join(ROOT, 'public/og', lang === 'ko' ? 'ko' : '');
  fs.mkdirSync(dir, { recursive: true });
  for (const s of SECTIONS) {
    await page.setContent(html(s, lang));
    await page.evaluate(() => document.fonts.ready);
    // 제목·부제가 왼쪽 칸(높이 462px)을 넘치면 제목 크기를 줄인다. 제목은 최대 2줄까지만 허용.
    const info = await page.evaluate(() => {
      const col = document.querySelector('.col');
      const h1 = document.querySelector('h1');
      let size = 76;
      const fits = () => {
        const lines = Math.round(h1.getBoundingClientRect().height / (size * 1.1));
        return lines <= 2 && col.scrollHeight <= col.clientHeight;
      };
      while (!fits() && size > 44) { size -= 2; h1.style.fontSize = size + 'px'; }
      return { size, lines: Math.round(h1.getBoundingClientRect().height / (size * 1.1)), overflow: col.scrollHeight > col.clientHeight, font: document.fonts.check('700 20px "Pretendard Variable"') };
    });
    if (info.overflow || !info.font) throw new Error(`${lang}/${s.id}: overflow=${info.overflow} font=${info.font}`);
    const out = path.join(dir, `${s.id}.png`);
    await page.screenshot({ path: out });
    console.log(path.relative(ROOT, out), `(h1 ${info.size}px, ${info.lines} line${info.lines > 1 ? 's' : ''})`);
  }
}
await browser.close();
