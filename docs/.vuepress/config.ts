import { defineUserConfig, defaultTheme } from 'vuepress';
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';
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
  plugins: [removeHtmlExtensionPlugin()],
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
          {
            text: 'The Country',
            link: '/eittlandic/country',
          },
          {
            text: 'Linguistic Typology',
            link: '/eittlandic/typology',
          },
          {
            text: 'Phonology',
            link: '/eittlandic/phonology',
          },
          {
            text: 'Grammar',
            link: '/eittlandic/grammar',
          },
          {
            text: 'Dictionary',
            link: '/eittlandic/dictionary',
          },
        ],
      },
      {
        text: 'Proto-Ñyqy',
        link: '/proto-nyqy/',
        collapsible: true,
        children: [
          {
            text: 'Introduction',
            link: '/proto-nyqy/introduction',
          },
          {
            text: 'Culture and People',
            link: '/proto-nyqy/culture-and-people',
          },
          {
            text: 'Linguistic Typology',
            link: '/proto-nyqy/typology',
          },
          {
            text: 'Phonology',
            link: '/proto-nyqy/phonology',
          },
          {
            text: 'Syntax',
            link: '/proto-nyqy/syntax',
          },
          {
            text: 'Dictionary',
            link: '/proto-nyqy/dictionary',
          },
        ],
      },
      '/zikãti/',
    ],
  }),
});
