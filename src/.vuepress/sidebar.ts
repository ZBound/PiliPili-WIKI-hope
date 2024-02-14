import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
	 {
      text: "关于我们",
      icon: "user-group",
      prefix: "about/",
      link: "about/001",
      children: "structure",
    },
    {
      text: "快速开始",
      icon: "lightbulb",
      prefix: "quick/",
      link: "quick/001",
      children: "structure",
    },
   {
      text: "进阶配置",
      icon: "gears",
      prefix: "advanced/",
      link: "advanced/001",
      children: "structure",
    },
	{
      text: "常见问题",
      icon: "question-circle",
      prefix: "question",
      link: "question",
      children: "structure",
    },
  ],
});
