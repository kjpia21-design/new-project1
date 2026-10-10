// 사용법: node scripts/screenshot.mjs [baseUrl]
// 미리 `npm run preview`(기본 4321) 또는 `npm run dev`를 띄워 둔다. playwright는 전역 설치본을 사용한다.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require(execSync('npm root -g').toString().trim() + '/playwright'); }

const base = (process.argv[2] ?? 'http://localhost:4321/new-project1').replace(/\/$/, '');
const out = 'docs/screenshots/step1';
fs.mkdirSync(out, { recursive: true });

const exe = fs.existsSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome') ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : undefined;
const browser = await pw.chromium.launch({ executablePath: exe });

const shots = [
  ['home', '/', false],
  ['tutorials', '/tutorials/', false],
  ['tutorials-filtered', '/tutorials/?level=practical&category=claude', false],
  ['claude-index', '/claude/', false],
  ['coming-soon', '/claude/c01-overview/', false],
  ['start-practical', '/start/practical/', false],
  ['components-preview', '/components-preview/', false],
];
const sizes = { desktop: { width: 1280, height: 800 }, mobile: { width: 375, height: 812 } };

for (const [theme, label] of [['light', ''], ['dark', '-dark']]) {
  for (const [sizeName, viewport] of Object.entries(sizes)) {
    const ctx = await browser.newContext({ viewport, colorScheme: theme });
    const page = await ctx.newPage();
    await page.addInitScript((t) => { try { localStorage.setItem('starlight-theme', t); } catch {} }, theme);
    for (const [name, path] of shots) {
      const resp = await page.goto(base + path, { waitUntil: 'networkidle' });
      if (!resp || resp.status() >= 400) { console.log('SKIP', path, resp?.status()); continue; }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) console.log(`OVERFLOW ${sizeName} ${theme} ${path}: ${overflow}px`);
      // 기본 스크린샷은 라이트 데스크톱/모바일, 다크는 접미사
      await page.screenshot({ path: `${out}/${name}-${sizeName}${label}.png`, fullPage: true });
    }
    await ctx.close();
  }
}
await browser.close();
