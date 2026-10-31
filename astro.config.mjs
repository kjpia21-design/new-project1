// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import fs from 'node:fs';
import path from 'node:path';

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

export default defineConfig({
  site: 'https://ai-trend-catchup.com',
  redirects: legacyEnRedirects(),
  integrations: [
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
        // 폰트 CDN에 미리 연결해 글꼴 교체로 인한 화면 밀림(CLS)을 줄인다.
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: '' } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
          },
        },
      ],
      routeMiddleware: './src/routeMiddleware.ts',
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
        Head: './src/components/Head.astro',
        Header: './src/components/Header.astro',
      },
      plugins: [starlightLinksValidator()],
      sidebar: [
        {
          label: 'Getting Started', translations: { ko: '시작하기' },
          items: [
            { label: 'Beginner start', translations: { ko: '입문자 시작점' }, slug: 'start/beginner' },
            { label: 'Practitioner start', translations: { ko: '실무자 시작점' }, slug: 'start/practical' },
            { label: 'Advanced start', translations: { ko: '고급 사용자 시작점' }, slug: 'start/advanced' },
            { label: 'Find by job role', translations: { ko: '직무별로 찾기' }, slug: 'roles' },
          ],
        },
        { label: 'AI First Steps', translations: { ko: 'AI 첫걸음' }, collapsed: true, items: [{ autogenerate: { directory: 'basics' } }] },
        {
          label: 'Mastering Claude', translations: { ko: 'Claude 완전 정복' },
          collapsed: true,
          items: [
            { label: 'Claude news', translations: { ko: 'Claude 최신 소식' }, slug: 'claude-news' },
            { autogenerate: { directory: 'claude' } },
          ],
        },
        {
          label: 'Tutorials by Topic', translations: { ko: '분야별 튜토리얼' },
          collapsed: true,
          items: [
            { label: 'Chat AI Basics', translations: { ko: '대화형 AI 기본기' }, collapsed: true, items: [{ autogenerate: { directory: 'chat' } }] },
            { label: 'Coding & Agents', translations: { ko: '코딩·에이전트' }, collapsed: true, items: [{ autogenerate: { directory: 'coding' } }] },
            { label: 'Image, Video & Voice', translations: { ko: '이미지·영상·음성' }, collapsed: true, items: [{ autogenerate: { directory: 'media' } }] },
            { label: 'Automation & Productivity', translations: { ko: '업무 자동화·생산성' }, collapsed: true, items: [{ autogenerate: { directory: 'automation' } }] },
            { label: 'Trending AI Agents', translations: { ko: '화제의 AI 에이전트' }, collapsed: true, items: [{ autogenerate: { directory: 'agents' } }] },
            { label: 'Advanced for Developers', translations: { ko: '개발자 심화' }, collapsed: true, items: [{ autogenerate: { directory: 'dev' } }] },
          ],
        },
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
          ],
        },
        {
          label: 'Reference', translations: { ko: '참고 자료' },
          collapsed: true,
          items: [
            { label: 'Ready-to-use prompts', translations: { ko: '바로 쓰는 프롬프트 모음' }, slug: 'start/prompts' },
            { label: 'AI glossary', translations: { ko: 'AI 용어 사전' }, slug: 'start/glossary' },
            { label: 'All tutorials', translations: { ko: '전체 튜토리얼' }, slug: 'tutorials' },
            { label: 'Recent updates', translations: { ko: '최근 업데이트' }, slug: 'updates' },
            { label: 'About', translations: { ko: '소개' }, slug: 'about' },
          ],
        },
      ],
    }),
  ],
});
