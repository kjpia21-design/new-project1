// 사용법: node scripts/og-images.mjs   → public/og/*.png (1200x630) 생성
// HTML/SVG 템플릿을 Playwright(Chromium)로 캡처한다. 한글은 시스템 폰트(WenQuanYi Zen Hei 등)를 사용한다.
// 섹션을 추가·변경하면 아래 SECTIONS와 src/components/Head.astro의 목록을 함께 고친다.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require(execSync('npm root -g').toString().trim() + '/playwright'); }

const SITE = '최신 AI 트렌드 따라 잡기';
const SECTIONS = [
  { id: 'default', name: '쉽게 따라 하는 AI 튜토리얼', sub: '입문자부터 실무자까지, 단계별로 배우는 한국어 가이드', accent: '#ff7a59', icon: '✨' },
  { id: 'basics', name: 'AI 첫걸음', sub: '처음 시작하는 분을 위한 기본기', accent: '#ff7a59', icon: '🌱' },
  { id: 'claude', name: 'Claude 완전 정복', sub: '요금제부터 Claude Code까지 차근차근', accent: '#e8603c', icon: '🤖' },
  { id: 'claude-news', name: 'Claude 최신 소식', sub: '공식 업데이트를 쉬운 말로 정리', accent: '#d4a72c', icon: '📰' },
  { id: 'agents', name: '화제의 AI 에이전트', sub: '지금 주목받는 에이전트 비교와 안전 수칙', accent: '#8b6fd6', icon: '🕹️' },
  { id: 'dev', name: '개발자 심화', sub: '한 단계 더 깊이 들어가는 개발 가이드', accent: '#3c8dd9', icon: '🛠️' },
  { id: 'chat', name: '대화형 AI 기본기', sub: '질문을 잘하고 결과를 믿고 쓰는 법', accent: '#2fa88a', icon: '💬' },
  { id: 'coding', name: '코딩·에이전트', sub: 'AI와 함께 만들고 고치는 개발 워크플로', accent: '#4f7be0', icon: '💻' },
  { id: 'media', name: '이미지·영상·음성', sub: '만들고 다듬는 생성형 AI 도구', accent: '#e0569a', icon: '🎨' },
  { id: 'automation', name: '업무 자동화·생산성', sub: '반복 업무를 AI에게 맡기는 방법', accent: '#3aa36a', icon: '⚙️' },
];

const robot = (a) => `
<svg viewBox="0 0 360 280" width="470" height="366" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="180" cy="262" rx="120" ry="10" fill="#2b3a55" opacity="0.12"/>
  <circle cx="180" cy="140" r="118" fill="#fff" opacity="0.75"/>
  <line x1="180" y1="62" x2="180" y2="84" stroke="${a}" stroke-width="6" stroke-linecap="round"/>
  <circle cx="180" cy="58" r="10" fill="${a}"/>
  <rect x="116" y="84" width="128" height="104" rx="38" fill="#9ad7f5"/>
  <rect x="132" y="104" width="96" height="62" rx="26" fill="#fff"/>
  <circle cx="157" cy="134" r="11" fill="#2b3a55"/><circle cx="203" cy="134" r="11" fill="#2b3a55"/>
  <circle cx="161" cy="130" r="3.5" fill="#fff"/><circle cx="207" cy="130" r="3.5" fill="#fff"/>
  <path d="M164 152q16 12 32 0" stroke="#2b3a55" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="126" cy="156" r="7" fill="#ffb59f"/><circle cx="234" cy="156" r="7" fill="#ffb59f"/>
  <rect x="138" y="188" width="84" height="48" rx="20" fill="#cfe9f9"/>
  <circle cx="180" cy="212" r="9" fill="${a}"/>
  <rect x="100" y="196" width="28" height="14" rx="7" fill="#9ad7f5"/><rect x="232" y="196" width="28" height="14" rx="7" fill="#9ad7f5"/>
  <rect x="236" y="30" width="96" height="58" rx="22" fill="#fff" stroke="#ffb59f" stroke-width="3"/>
  <path d="M254 88l-8 20 24-18z" fill="#fff" stroke="#ffb59f" stroke-width="3" stroke-linejoin="round"/>
  <path d="M252 86h20" stroke="#fff" stroke-width="5"/>
  <circle cx="262" cy="59" r="5" fill="${a}"/><circle cx="284" cy="59" r="5" fill="#ffd36e"/><circle cx="306" cy="59" r="5" fill="#7cc98a"/>
  <path d="M60 70l7 19 19 7-19 7-7 19-7-19-19-7 19-7z" fill="#ffd36e"/>
  <path d="M296 180l5 13 13 5-13 5-5 13-5-13-13-5 13-5z" fill="#c9b6f2"/>
  <path d="M84 190l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#9fdcb0"/>
</svg>`;

const html = (s) => `<!doctype html><html lang="ko"><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;font-family:'WenQuanYi Zen Hei','Noto Sans CJK KR','Noto Sans KR','Malgun Gothic',sans-serif;
 background:linear-gradient(135deg,#fff4ee 0%,#ffe3da 100%);color:#2b3a55;position:relative}
.bar{position:absolute;left:0;top:0;bottom:0;width:22px;background:${s.accent}}
.blob{position:absolute;right:-80px;top:-120px;width:620px;height:620px;border-radius:50%;background:${s.accent};opacity:.16}
.blob2{position:absolute;left:380px;bottom:-200px;width:420px;height:420px;border-radius:50%;background:#9ad7f5;opacity:.28}
.txt{position:absolute;left:84px;top:70px;width:680px}
.site{display:inline-block;font-size:30px;color:#fff;background:${s.accent};padding:10px 26px;border-radius:999px}
.icon{font-family:'Noto Color Emoji';font-size:84px;margin-top:54px;line-height:1}
h1{font-size:${s.name.length > 9 ? 58 : 78}px;line-height:1.2;margin-top:18px;font-weight:700;letter-spacing:-1px;word-break:keep-all}
.sub{font-size:32px;line-height:1.45;margin-top:24px;color:#4a5a78}
.art{position:absolute;right:30px;top:140px}
.url{position:absolute;left:84px;bottom:42px;font-size:24px;color:${s.accent};font-weight:700}
</style><body><div class="blob"></div><div class="blob2"></div><div class="bar"></div>
<div class="txt"><span class="site">${SITE}</span><div class="icon">${s.icon}</div><h1>${s.name}</h1><p class="sub">${s.sub}</p></div>
<div class="art">${robot(s.accent)}</div><div class="url">kjpia21-design.github.io/new-project1</div></body></html>`;

fs.mkdirSync('public/og', { recursive: true });
const exe = fs.existsSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome') ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : undefined;
const browser = await pw.chromium.launch({ executablePath: exe });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const s of SECTIONS) {
  await page.setContent(html(s));
  await page.screenshot({ path: `public/og/${s.id}.png` });
  console.log('public/og/' + s.id + '.png');
}
await browser.close();
