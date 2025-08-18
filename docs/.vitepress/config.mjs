import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 8000, // 警告阈值提高到 8MB
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vue')) return 'vue'
              if (id.includes('vitepress')) return 'vitepress'
              return 'vendor'
            }
          }
        }
      }
    }
  },

  title: "我的知识库", // 浏览器标签标题，站点标题

  description: "一个基于 VitePress 的 Markdown 文档网站",

  base: "/my-vitepress-site/",   // ⚠️ 这里一定要写成仓库名（前后带/）

  themeConfig: {
    nav: [
      { text: "首页", link: "/" }, // 导航到首页
      { text: "指南", link: "/guide/" }, // 导航到 /docs/guide/index.md
      { text: "关于", link: "/about" }, // 导航到 /docs/about.md
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/你的用户名/你的仓库" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南首页",
          link: "/guide/",
        },
        {
          text: "安装与使用",
          collapsed: false,
          items: [
            { text: "安装说明", link: "/guide/install" },
            { text: "快速开始", link: "/guide/start" },
            { text: "运筹学", link: "/guide/运筹学" },
          ],
        },
        {
          text: "进阶",
          collapsed: true,
          items: [
            {
              text: "配置",
              items: [
                { text: "基础配置", link: "/guide/config/basic" },
                { text: "主题配置", link: "/guide/config/theme" },
              ],
            },
            {
              text: "部署",
              items: [
                { text: "GitHub Pages", link: "/guide/deploy/github" },
                { text: "Vercel", link: "/guide/deploy/vercel" },
              ],
            },
          ],
        },
      ],
    },

    outlineTitle: "页面导航",
  },
});
