// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { groupClaude } from './src/data/topic-groups.mjs';

// 예전 영문 주소(/en/...)는 영어가 루트(/)로 옮겨 오면서 사라졌다. 옛 링크가 깨지지 않게 같은 페이지로 보낸다.
function legacyEnRedirects() {
  const root = 'src/content/docs';
  /** @type {Record<string, string>} */
  const out = { '/en': '/' };
  const walk = (dir) => {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const rel = path.relative(root, full);
      if (rel === 'ko' || rel.startsWith('ko' + path.sep)) continue;
      if (fs.statSync(full).isDirectory()) { walk(full); continue; }
      if (!/\.mdx?$/.test(name) || name === '404.mdx') continue;
      const slug = rel.replace(/\.mdx?$/, '').split(path.sep).join('/').replace(/(^|\/)index$/, '');
      if (!slug) continue;
      out[`/en/${slug}`] = `/${slug}/`;
    }
  };
  walk(root);
  return out;
}

const SITE = 'https://ai-trend-catchup.com';

// 사이트맵 <lastmod>: 문서 frontmatter의 lastVerified(두 언어)를 URL별로 모은다. 날짜가 없는 페이지는 lastmod를 넣지 않는다.
function lastVerifiedByUrl() {
  const root = 'src/content/docs';
  /** @type {Map<string, string>} */
  const out = new Map();
  const walk = (dir) => {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (fs.statSync(full).isDirectory()) { walk(full); continue; }
      if (!/\.mdx?$/.test(name)) continue;
      const fm = fs.readFileSync(full, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
      if (/^draft:\s*true\s*$/m.test(fm)) continue;
      const m = fm.match(/^lastVerified:\s*['"]?(\d{4}-\d{2}-\d{2})['"]?\s*$/m);
      if (!m) continue;
      const slug = path.relative(root, full).replace(/\.mdx?$/, '').split(path.sep).join('/').replace(/(^|\/)index$/, '');
      out.set(new URL(slug ? `/${slug}/` : '/', SITE).href, m[1]);
    }
  };
  walk(root);
  return out;
}
const LASTMOD = lastVerifiedByUrl();

// Claude 섹션 사이드바: 하위 그룹(접힘 기본, 현재 글이 든 그룹은 Starlight가 펼친다). 목록에 없는 새 글은 "기타"로 자동 편입.
function claudeSidebarGroups() {
  const names = fs.readdirSync('src/content/docs/claude')
    .filter((n) => /\.mdx?$/.test(n))
    .map((n) => n.replace(/\.mdx?$/, ''))
    .filter((n) => n !== 'index');
  return groupClaude(names).map((g) => ({
    label: g.en,
    translations: { ko: g.ko },
    collapsed: true,
    items: g.slugs.map((s) => ({ slug: `claude/${s}` })),
  }));
}

export default defineConfig({
  site: SITE,
  redirects: legacyEnRedirects(),
  integrations: [
    // Starlight가 자동으로 넣는 사이트맵을 직접 설정한다(Starlight는 이미 있으면 다시 넣지 않는다). i18n 값은 Starlight 기본 설정과 같다.
    sitemap({
      i18n: { defaultLocale: 'root', locales: { root: 'en', ko: 'ko' } },
      // HTML 페이지만(RSS 등 .xml 엔드포인트 제외)
      filter: (page) => !/\.xml$/.test(page),
      serialize(item) {
        const lastmod = LASTMOD.get(item.url);
        const en = item.links?.find((l) => l.lang === 'en');
        return {
          ...item,
          ...(lastmod ? { lastmod } : {}),
          ...(item.links && en ? { links: [...item.links, { lang: 'x-default', url: en.url }] } : {}),
        };
      },
    }),
    starlight({
      title: { en: 'Catch Up on AI Trends', ko: '최신 AI 트렌드 따라 잡기' },
      description:
        'Step-by-step tutorials that explain the latest AI tools in plain language. 최신 AI 도구를 쉽게 설명하는 단계별 튜토리얼 사이트예요.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        ko: { label: '한국어', lang: 'ko' },
      },
      favicon: '/favicon.svg',
      head: [
        // 글꼴(Pretendard Variable)은 CDN 대신 node_modules/pretendard 에서 셀프호스팅한다(아래 customCss). 외부 연결 의존과 화면 밀림(CLS)을 줄인다.
      ],
      routeMiddleware: './src/routeMiddleware.ts',
      customCss: ['pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css', './src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
        Head: './src/components/Head.astro',
        Header: './src/components/Header.astro',
      },
      plugins: [starlightLinksValidator()],
      sidebar: [
        {
          label: "What's new", translations: { ko: '새 소식' },
          items: [
            { label: 'This week in AI', translations: { ko: '이번 주 AI 변경점' }, slug: 'weekly' },
            { label: 'Claude news', translations: { ko: 'Claude 소식' }, slug: 'claude-news' },
            { label: 'Site changelog', translations: { ko: '사이트 수정 기록' }, slug: 'updates' },
          ],
        },
        {
          label: 'Learning paths by level', translations: { ko: '수준별 학습 경로' },
          collapsed: true,
          items: [
            { label: 'Choose your level', translations: { ko: '수준 고르기' }, slug: 'levels' },
            { label: 'Learning path: Beginner', translations: { ko: '학습 경로: 입문' }, slug: 'start/beginner' },
            { label: 'Learning path: Practitioner', translations: { ko: '학습 경로: 실무' }, slug: 'start/practical' },
            { label: 'Learning path: Advanced', translations: { ko: '학습 경로: 고급' }, slug: 'start/advanced' },
          ],
        },
        { label: 'AI First Steps', translations: { ko: 'AI 첫걸음' }, collapsed: true, items: [{ autogenerate: { directory: 'basics' } }] },
        { label: 'Mastering Claude', translations: { ko: 'Claude 완전 정복' }, collapsed: true, items: [{ slug: 'claude' }, ...claudeSidebarGroups()] },
        { label: 'Chat AI Basics', translations: { ko: '대화형 AI 기본기' }, collapsed: true, items: [{ autogenerate: { directory: 'chat' } }] },
        { label: 'Personal AI Agents', translations: { ko: '개인 AI 에이전트' }, collapsed: true, items: [{ autogenerate: { directory: 'agents' } }] },
        { label: 'Image, Video & Voice', translations: { ko: '이미지·영상·음성' }, collapsed: true, items: [{ autogenerate: { directory: 'media' } }] },
        { label: 'Automation & Productivity', translations: { ko: '업무 자동화·생산성' }, collapsed: true, items: [{ autogenerate: { directory: 'automation' } }] },
        { label: 'Coding Tools', translations: { ko: '코딩 도구' }, collapsed: true, items: [{ autogenerate: { directory: 'coding' } }] },
        { label: 'Advanced for Developers', translations: { ko: '개발자 심화' }, collapsed: true, items: [{ autogenerate: { directory: 'dev' } }] },
        {
          label: 'AI by Job Role', translations: { ko: '직무별 AI 활용' },
          collapsed: true,
          items: [
            { label: 'Guides by job role: overview', translations: { ko: '직무별 가이드 소개' }, slug: 'roles' },
            { label: 'Marketers & Content', translations: { ko: '마케터·콘텐츠' }, slug: 'roles/marketer' },
            { label: 'Office, Planning & Management', translations: { ko: '사무·기획·관리직' }, slug: 'roles/office' },
            { label: 'Teachers & Instructors', translations: { ko: '교사·강사' }, slug: 'roles/teacher' },
            { label: 'Students & Job Seekers', translations: { ko: '학생·취업 준비생' }, slug: 'roles/student' },
            { label: 'Developers', translations: { ko: '개발자' }, slug: 'roles/developer' },
            { label: 'Solo Business Owners', translations: { ko: '1인 사업자·소상공인' }, slug: 'roles/solo-business' },
            { label: 'Researchers & Grad Students', translations: { ko: '연구자·대학원생' }, slug: 'roles/researcher' },
            { label: 'Sales & Customer Support', translations: { ko: '영업·고객 지원' }, slug: 'roles/sales-support' },
            { label: 'Designers & Visual Creators', translations: { ko: '디자이너·비주얼 제작자' }, slug: 'roles/designer' },
            { label: 'HR & Recruiting', translations: { ko: '인사·채용 담당' }, slug: 'roles/hr' },
          ],
        },
        {
          label: 'Toolbox', translations: { ko: '도구함' },
          collapsed: true,
          items: [
            { label: 'All tutorials', translations: { ko: '전체 튜토리얼' }, slug: 'tutorials' },
            { label: 'Ready-to-use prompts', translations: { ko: '바로 쓰는 프롬프트 모음' }, slug: 'start/prompts' },
            { label: 'AI glossary', translations: { ko: 'AI 용어 사전' }, slug: 'start/glossary' },
            { label: 'About', translations: { ko: '소개' }, slug: 'about' },
          ],
        },
      ],
    }),
  ],
});
