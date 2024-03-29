import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "PiliPili WIKI",
  description: "PiliPili WIKI",
  theme,
  head: [
    // 引入文楷屏幕版字体
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://registry.npmmirror.com/lxgw-wenkai-screen-web/latest/files/style.css',
      },
    ],
    // 可以继续添加其他 head 元素
  ],
	
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
