import { defineConfig } from 'vitepress'

// 1. 重新组织教程侧边栏，拆分为多个板块 (Groups)
const tutorialSidebar = [
  { text: '首页', link: '/tutorials/' }, 
  {
    text: '基础配置',
    collapsed: false,
    items: [
      { text: '激活密钥/许可证', link: '/activation' },
      { text: '系统设置', link: '/settings' },
    ]
  },
  {
    text: '核心工具',
    collapsed: false,
    items: [
      { text: '选中改名', link: '/selection-rename' },
      { text: '改名压缩', link: '/rename-compress' },
      { text: '整理排序', link: '/organize-sort' },
      { text: '备份归档', link: '/archive' },
    ]
  },
  {
    text: '实用工具',
    collapsed: false,
    items: [
      { text: '提取主图', link: '/extract-main' },
      { text: '图片校对', link: '/image-verify' },
    ]
  },
  {
    text: '仓库工具',
    collapsed: false, // 默认折叠，保持侧边栏简洁
    items: [
      { text: '仓库分析', link: '/warehouse-analysis' },
      { text: '拍品查询', link: '/lot-query' },
      { text: '拍品删除', link: '/warehouse-delete' },
    ]
  }
]

// 2. 下载页面的侧边栏
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
  description: '专注拍卖业服务的图片管理工作流工具，赋能拍卖企业图片资产全面升级',
  base: '/apfweb/',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        outline: {
          label: '本页目录', // 这里就是修改 "On this page" 的地方
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              root: { // 针对简体中文环境的翻译
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                  },
                  modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                      closeText: '关闭'
                    }
                  }
                }
              }
            }
          }
        },
        nav: [
          { text: '教程', link: '/tutorials/' },
          { text: '下载', link: '/download' },
          { text: '路线图', link: '/roadmap' },
          { text: '激活', link: '/activation' },
          { text: '关于', link: '/about' },
        ],
        sidebar: {
          // 下面所有教程相关的路径都共用这个分组侧边栏
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
          
          // 下载和路线图共用下载侧边栏
          '/download': downloadSidebar,
          '/roadmap': downloadSidebar,
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      themeConfig: {
        nav: [{ text: 'ロードマップ', link: '/roadmap' }],
        // 如果需要，这里也可以定义日本语版本的 sidebar
      },
    },
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/apfweb/app_icon_master_1024.png',
        type: 'image/png',
      },
    ],
  ],

  themeConfig: {
    logo: '/app_icon_master_1024.png',

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/beibeikun/apfweb' },
    ],

    footer: {
      message: '',
      copyright: 'Copyright © 2026 APF. All rights reserved.',
    },
  },
})