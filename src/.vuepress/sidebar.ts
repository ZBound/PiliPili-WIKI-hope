import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
	 {
      text: "关于我们",
      icon: "user-group",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
    {
      text: "快速开始",
      icon: "lightbulb",
      prefix: "quick/",
      link: "quick/",
      children: "structure",
    },
   {
      text: "进阶教程",
      icon: "gears",
      prefix: "advanced/",
      link: "advanced/",
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
