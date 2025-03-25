import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的博客",
  description: "基于 VitePress 的个人博客",
  lang: 'zh-CN',
  base: '/blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    lastUpdated: true,

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '文章分类',
        items: [
          { text: '技术笔记', link: '/posts/tech/' },
          { text: '生活随笔', link: '/posts/life/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: `Copyright 2024-${new Date().getFullYear()}`
    }
  }
})
