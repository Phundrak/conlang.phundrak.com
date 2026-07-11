// -*- mode: typescript; -*-
import { defineConfig, HeadConfig } from 'vitepress';
import appHead from './head';
import { sidebar } from './sidebar';
import { nav } from './nav';

export default defineConfig({
  title: "Phundrak's Conlangs",
  cleanUrls: true,
  description: 'Documentation of the constructed languages made by Phundrak',
  head: appHead as HeadConfig[],
  srcDir: './docs',
  themeConfig: {
    sidebar,
    nav,
    outline: {
      level: 'deep'
    },
    search: {
      provider: 'local'
    },
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    linkify: true,
    typographer: true,
    headers: {
      level: [1, 2, 3, 4, 5]
    }
  },
})
