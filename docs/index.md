# 欢迎来到我的知识库

这是一个基于 **VitePress** 搭建的静态网站。

> 好问题 👍。VitePress 的侧边栏（`sidebar`）支持多级嵌套，语法就是给每个 section 配置 `items`，里面再嵌套子项。

---

## 示例：多级嵌套侧边栏

$$ 
\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}
$$



```js
export default {
  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          text: "指南首页",
          link: "/guide/"
        },
        {
          text: "安装与使用",
          collapsed: false,   // 默认展开
          items: [
            { text: "安装说明", link: "/guide/install" },
            { text: "快速开始", link: "/guide/start" }
          ]
        },
        {
          text: "进阶",
          collapsed: true,    // 默认折叠
          items: [
            {
              text: "配置",
              items: [
                { text: "基础配置", link: "/guide/config/basic" },
                { text: "主题配置", link: "/guide/config/theme" }
              ]
            },
            {
              text: "部署",
              items: [
                { text: "GitHub Pages", link: "/guide/deploy/github" },
                { text: "Vercel", link: "/guide/deploy/vercel" }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

---

## 展现效果

* **一级**

  * 指南首页
  * 安装与使用

    * 安装说明
    * 快速开始
  * 进阶

    * 配置

      * 基础配置
      * 主题配置
    * 部署

      * GitHub Pages
      * Vercel

---

## 注意点

1. **目录对应**：
   上面的链接 `/guide/config/basic` → 实际对应的文件路径：

   ```
   docs/guide/config/basic.md
   ```

   （VitePress 会自动把 `/docs` 作为根目录）

2. **折叠控制**：

   * `collapsed: false` → 默认展开
   * `collapsed: true` → 默认收起

3. **混合模式**：
   你可以在某个 section 里同时放 `link` 和 `items`，这样点击 section 标题会打开一个页面，同时展开子目录。

---

要不要我帮你直接给一个 **完整的 docs 目录结构 + 对应 sidebar 配置** 示例？这样你可以照着建就能马上看到多级目录效果。
