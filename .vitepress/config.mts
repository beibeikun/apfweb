import { defineConfig } from 'vitepress'

const tutorialItems = [
  { text: '使用教程首页', link: '/tutorials/' },
  { text: '激活密钥/许可证', link: '/activation' },
  { text: '系统设置', link: '/settings' },
  { text: '改名压缩', link: '/rename-compress' },
  { text: '整理排序', link: '/organize-sort' },
  { text: '选中改名', link: '/selection-rename' },
  { text: '备份归档', link: '/archive' },
  { text: '提取主图', link: '/extract-main' },
  { text: '图片校对', link: '/image-verify' },
  { text: '拍品查询', link: '/lot-query' },
  { text: '仓库分析', link: '/warehouse-analysis' },
  { text: '拍品删除', link: '/warehouse-delete' },
]

const tutorialSidebar = [{ text: '教程目录', items: tutorialItems }]

const downloadSidebar = [
  {
    text: '快捷入口',
    items: [
      { text: '使用教程首页', link: '/tutorials/' },
      { text: '客户端下载', link: '/download' },
      { text: '产品路线图', link: '/roadmap' },
      { text: '激活密钥/许可证', link: '/activation' },
      { text: '系统设置', link: '/settings' },
    ],
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'AuctionPicFlow',
  description:
    '专注拍卖业服务的图片管理工作流工具，赋能拍卖企业图片资产全面升级',
  base: '/APF_web/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/APF_web/app_icon_master_1024.png',
        type: 'image/png',
      },
    ],
  ],

  themeConfig: {
    logo: '/app_icon_master_1024.png',

    nav: [
      { text: '教程', link: '/tutorials/' },
      { text: '下载', link: '/download' },
      { text: '路线图', link: '/roadmap' },
      { text: '激活', link: '/activation' },
      { text: '关于', link: '/about' },
    ],

    sidebar: {
      '/tutorials/': tutorialSidebar,
      '/activation': tutorialSidebar,
      '/settings': tutorialSidebar,
      '/rename-compress': tutorialSidebar,
      '/organize-sort': tutorialSidebar,
      '/selection-rename': tutorialSidebar,
      '/archive': tutorialSidebar,
      '/extract-main': tutorialSidebar,
      '/image-verify': tutorialSidebar,
      '/lot-query': tutorialSidebar,
      '/warehouse-analysis': tutorialSidebar,
      '/warehouse-delete': tutorialSidebar,
      '/download': downloadSidebar,
      '/roadmap': downloadSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/beibeikun/APF_web' },
    ],

    footer: {
      message: '',
      copyright: 'Copyright © 2026 APF. All rights reserved.',
    },
  },
})
