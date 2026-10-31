// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  site: 'https://ai-trend-catchup.com',
  integrations: [
    starlight({
      title: { ko: '최신 AI 트렌드 따라 잡기', en: 'Catch Up on AI Trends' },
      description:
        '최신 AI 도구를 쉽게 설명하고, 단계별로 따라 할 수 있는 한국어 튜토리얼 사이트입니다.',
      defaultLocale: 'root',
      locales: {
        root: { label: '한국어', lang: 'ko' },
        en: { label: 'English', lang: 'en' },
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
      },
      plugins: [starlightLinksValidator()],
      sidebar: [
        {
          label: '시작하기', translations: { en: 'Getting Started' },
          items: [
            { label: '입문자 시작점', translations: { en: 'Beginner start' }, slug: 'start/beginner' },
            { label: '실무자 시작점', translations: { en: 'Practitioner start' }, slug: 'start/practical' },
            { label: '고급 사용자 시작점', translations: { en: 'Advanced start' }, slug: 'start/advanced' },
            { label: '직무별로 찾기', translations: { en: 'Find by job role' }, slug: 'roles' },
          ],
        },
        { label: 'AI 첫걸음', translations: { en: 'AI First Steps' }, collapsed: true, items: [{ autogenerate: { directory: 'basics' } }] },
        {
          label: 'Claude 완전 정복', translations: { en: 'Mastering Claude' },
          collapsed: true,
          items: [
            { label: 'Claude 최신 소식', translations: { en: 'Claude news' }, slug: 'claude-news' },
            { autogenerate: { directory: 'claude' } },
          ],
        },
        {
          label: '분야별 튜토리얼', translations: { en: 'Tutorials by Topic' },
          collapsed: true,
          items: [
            { label: '대화형 AI 기본기', translations: { en: 'Chat AI Basics' }, collapsed: true, items: [{ autogenerate: { directory: 'chat' } }] },
            { label: '코딩·에이전트', translations: { en: 'Coding & Agents' }, collapsed: true, items: [{ autogenerate: { directory: 'coding' } }] },
            { label: '이미지·영상·음성', translations: { en: 'Image, Video & Voice' }, collapsed: true, items: [{ autogenerate: { directory: 'media' } }] },
            { label: '업무 자동화·생산성', translations: { en: 'Automation & Productivity' }, collapsed: true, items: [{ autogenerate: { directory: 'automation' } }] },
            { label: '화제의 AI 에이전트', translations: { en: 'Trending AI Agents' }, collapsed: true, items: [{ autogenerate: { directory: 'agents' } }] },
            { label: '개발자 심화', translations: { en: 'Advanced for Developers' }, collapsed: true, items: [{ autogenerate: { directory: 'dev' } }] },
          ],
        },
        {
          label: '직무별 AI 활용', translations: { en: 'AI by Job Role' },
          collapsed: true,
          items: [
            { label: '직무별 가이드 소개', translations: { en: 'Guides by job role: overview' }, slug: 'roles' },
            { label: '마케터·콘텐츠', translations: { en: 'Marketers & Content' }, slug: 'roles/marketer' },
            { label: '사무·기획·관리직', translations: { en: 'Office, Planning & Management' }, slug: 'roles/office' },
            { label: '교사·강사', translations: { en: 'Teachers & Instructors' }, slug: 'roles/teacher' },
            { label: '학생·취업 준비생', translations: { en: 'Students & Job Seekers' }, slug: 'roles/student' },
            { label: '개발자', translations: { en: 'Developers' }, slug: 'roles/developer' },
            { label: '1인 사업자·소상공인', translations: { en: 'Solo Business Owners' }, slug: 'roles/solo-business' },
          ],
        },
        {
          label: '참고 자료', translations: { en: 'Reference' },
          collapsed: true,
          items: [
            { label: '바로 쓰는 프롬프트 모음', translations: { en: 'Ready-to-use prompts' }, slug: 'start/prompts' },
            { label: 'AI 용어 사전', translations: { en: 'AI glossary' }, slug: 'start/glossary' },
            { label: '전체 튜토리얼', translations: { en: 'All tutorials' }, slug: 'tutorials' },
            { label: '최근 업데이트', translations: { en: 'Recent updates' }, slug: 'updates' },
            { label: '소개', translations: { en: 'About' }, slug: 'about' },
          ],
        },
      ],
    }),
  ],
});
