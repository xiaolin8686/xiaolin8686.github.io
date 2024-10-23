import { defineUserConfig } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小林博客",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  plugins: [
    searchPlugin({
	  locales: {
        '/': {
          placeholder: '搜索文章',
        },
      },
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
