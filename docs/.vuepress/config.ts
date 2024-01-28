import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { searchProPlugin } from 'vuepress-plugin-search-pro';

import head from './head';

export default defineUserConfig({
  lang: 'en-US',
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
    searchProPlugin({
      indexContent: true,
    }),
  ],
  bundler: viteBundler({}),
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
