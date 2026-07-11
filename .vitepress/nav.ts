import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: 'About', link: '/about' },
  { text: 'Eittlandic', link: '/eittlandic/', activeMatch: '/eittlandic/*' },
  { text: 'Proto-Ñyqy', link: '/proto-nyqy/', activeMatch: '/proto-nyqy/*' },
  { text: 'Zikãti', link: '/zikãti' },
]
