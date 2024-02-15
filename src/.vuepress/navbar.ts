import { navbar } from "vuepress-theme-hope";

export default navbar([ 
	{
    text: "首页",
    icon: "home",
    link:   "/",
  },
    {
    text: "进阶教程",
    icon: "gears",
    link:   "advanced/",
  },
  {
    text: "常见问题",
    icon: "question-circle",
    link:   "question",
  },
  {
        text: "联系我们",
		icon: "comments",
        children: [
          { text: "讨论组", link: "https://t.me/PiliPiliTv" },
		  { text: "更新频道", link: "https://t.me/PiliPiliTv_Notify" },
          { text: "开号bot", link: "https://t.me/PiliPiliUltraTv_bot" },
    ],
  },
]);

