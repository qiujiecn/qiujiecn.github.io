import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/qiujiecn",
  // 站点的标题。
  title: "QiuJie's Note",
  // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标签。
  description: "QiuJie's Note",
  // 相对于项目根目录的 markdown 文件所在的文件夹
  srcDir: "../docs",
  outDir: "../notes",
  // 当设置为 true 时，VitePress 将从 URL 中删除 .html 后缀。
  cleanUrls: true,
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
