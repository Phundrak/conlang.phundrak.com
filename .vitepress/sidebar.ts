import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  '/eittlandic/': [
    { text: 'Index', link: '/eittlandic/' },
    { text: 'The Country', link: '/eittlandic/country' },
    { text: 'Typological Outline', link: '/eittlandic/typology' },
    { text: 'Phonetics & Translitteration', link: '/eittlandic/phonology' },
    { text: 'Grammar', link: '/eittlandic/grammar' },
    { text: 'Dictionary', link: '/eittlandic/dictionary' },
    { text: 'Names & Places', link: '/eittlandic/names-and-places' },
  ],
  '/proto-nyqy/': [
    { text: 'Index', link: '/proto-nyqy/' },
    { text: 'Introduction', link: '/proto-nyqy/introduction' },
    { text: 'Culture of the Proto-Ñyqy people', link: '/proto-nyqy/culture-and-people' },
    { text: 'Typological Outline', link: '/proto-nyqy/typology' },
    { text: 'Phonetics & Phonology', link: '/proto-nyqy/phonology' },
    { text: 'Syntax', link: '/proto-nyqy/syntax' },
    { text: 'Dictionary', link: '/proto-nyqy/dictionary' },
  ]
}
