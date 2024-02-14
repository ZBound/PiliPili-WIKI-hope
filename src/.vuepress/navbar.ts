import { navbar } from "vuepress-theme-hope";

export default navbar([ 
	{
    text: "首页",
    icon: "home",
    link:   "/",
  },
  {
    text: "常见问题",
    icon: "question-circle",
    link:   "/",
  },
 {
        text: "客户端推荐",
		icon: "comments",
        children: [
          { text: "Apple 系列", link: "https://t.me/PiliPiliTv" },
          { text: "安卓系列", link: "https://t.me/PiliPiliUltraTv_bot" },
		  { text: "Windows", link: "https://t.me/PiliPiliUltraTv_bot" },
		  { text: "Linux", link: "https://t.me/PiliPiliUltraTv_bot" },
    ],
  },
  {
        text: "联系我们",
		icon: "comments",
        children: [
          { text: "讨论组", link: "https://t.me/PiliPiliTv" },
          { text: "开号bot", link: "https://t.me/PiliPiliUltraTv_bot" },
    ],
  },
]);

