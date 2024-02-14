import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "快速开始",
      icon: "laptop-code",
      prefix: "quick/",
      link: "quick/",
      children: "structure",
    },
  ],
});
