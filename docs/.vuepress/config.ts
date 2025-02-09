import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics';
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch';

import head from './head';

const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig({
  lang: 'en-GB',
  title: "Phundrak's Conlangs",
  head: head,
  description: 'Documentation of the constructed languages made by Phundrak',
  markdown: {
    html: false,
    linkify: true,
    typographer: true,
    headers: {
      level: [1, 2, 3, 4, 5],
    },
  },
  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
  ],
  bundler: isProd
    ? viteBundler({})
    : viteBundler({
        viteOptions: {
          server: {
            allowedHosts: true,
          },
        },
      }),
  theme: defaultTheme({
    sidebarDepth: 5,
    repo: 'https://labs.phundrak.com/phundrak/conlang.phundrak.com',
    sidebar: [
      {
        text: 'Index',
        link: '/',
      },
      '/about',
      {
        text: 'Eittlandic',
        link: '/eittlandic/',
        collapsible: true,
        children: [
          '/eittlandic/country',
          '/eittlandic/typology',
          '/eittlandic/phonology',
          '/eittlandic/grammar',
          '/eittlandic/names-and-places',
          '/eittlandic/dictionary',
        ],
      },
      {
        text: 'Proto-Ñyqy',
        link: '/proto-nyqy/',
        collapsible: true,
        children: [
          '/proto-nyqy/introduction',
          '/proto-nyqy/culture-and-people',
          '/proto-nyqy/typology',
          '/proto-nyqy/phonology',
          '/proto-nyqy/syntax',
          '/proto-nyqy/dictionary',
        ],
      },
      '/zikãti',
    ],
  }),
});
