// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  site: 'https://kjpia21-design.github.io',
  base: '/new-project1',
  integrations: [
    starlight({
      title: '최신 AI 트렌드 따라 잡기',
      description:
        '최신 AI 도구를 쉽게 설명하고, 단계별로 따라 할 수 있는 한국어 튜토리얼 사이트입니다.',
      defaultLocale: 'root',
      locales: {
        root: { label: '한국어', lang: 'ko' },
      },
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
          },
        },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
      },
      plugins: [starlightLinksValidator()],
      sidebar: [
        {
          label: '시작하기',
          items: [
            { label: '입문자 시작점', slug: 'start/beginner' },
            { label: '실무자 시작점', slug: 'start/practical' },
            { label: '고급 사용자 시작점', slug: 'start/advanced' },
          ],
        },
        { label: 'Claude 완전 정복', collapsed: true, items: [{ autogenerate: { directory: 'claude' } }] },
        { label: '화제의 AI 에이전트', collapsed: true, items: [{ autogenerate: { directory: 'agents' } }] },
        { label: '대화형 AI 기본기', collapsed: true, items: [{ autogenerate: { directory: 'chat' } }] },
        { label: '코딩·에이전트', collapsed: true, items: [{ autogenerate: { directory: 'coding' } }] },
        { label: '이미지·영상·음성', collapsed: true, items: [{ autogenerate: { directory: 'media' } }] },
        { label: '업무 자동화·생산성', collapsed: true, items: [{ autogenerate: { directory: 'automation' } }] },
        { label: '전체 튜토리얼', slug: 'tutorials' },
        { label: '최근 업데이트', slug: 'updates' },
        { label: '소개', slug: 'about' },
      ],
    }),
  ],
});
