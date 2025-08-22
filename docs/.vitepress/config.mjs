import { defineConfig } from "vitepress";
// 1. 导入 withMermaid 而不是 mermaidPlugin
import { withMermaid } from "vitepress-plugin-mermaid";

// MathJax 的导入不再需要，VitePress 内置了支持

export default withMermaid(defineConfig({ // 2. 使用 withMermaid 包裹整个配置
  // 3. 简化 MathJax 配置
  markdown: {
    math: true, // 开启数学公式支持，VitePress 会自动使用 markdown-it-mathjax3
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 8000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vue')) return 'vue';
              if (id.includes('vitepress')) return 'vitepress';
              return 'vendor';
            }
          }
        }
      }
    },
    // 4. 从 vite.plugins 中移除 mermaidPlugin
  },

  title: "我的知识库",
  description: "一个基于 VitePress 的 Markdown 文档网站",
  base: "/my-vitepress-site/",

  themeConfig: {
    // 你的 themeConfig 保持不变，这里省略...
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "关于", link: "/about" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/你的用户名/你的仓库" },
    ],
    sidebar: {
      "/guide/": [
        { text: "指南首页", link: "/guide/" },
        {
          text: "安装与使用",
          collapsed: false,
          items: [
            { text: "安装说明", link: "/guide/install" },
            { text: "快速开始", link: "/guide/start" },
            { text: "运筹学", link: "/guide/运筹学" },
          ],
        },
        // ... 其他 sidebar 配置
      ],
    },
    outlineTitle: "页面导航",
  },
}));