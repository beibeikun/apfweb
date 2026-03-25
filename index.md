---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AuctionPicFlow"
  text: "大模型赋能拍卖业\n智能图片高效工作流"
  tagline: "AI 助力拍卖行 80% 提效，彻底告别繁琐人工操作\n提供 24 小时内快速技术支持与深度定制开发服务"
  image:
    light: /icon_master.png
    dark: /icon_master.png
    alt: APF
  actions:
    - theme: brand
      text: 立即下载
      link: /download
    - theme: alt
      text: 获取激活
      link: /activation
    - theme: alt
      text: 使用教程
      link: /tutorials/
    - theme: alt
      text: 产品路线图
      link: /roadmap

features:
  - icon: 🤖
    title: 大模型智能赋能
    details: 支持接入各类大模型，自动完成拍品改名、目录核对、描述生成等高难度工作。准确率领先行业水平，让拍卖图片资产管理更智能高效。
  - icon: 🔔
    title: Bark 灵活推送
    details: 支持自定义推送内容、标题和接收设备，配置简单、零成本、无需额外订阅。再也不用守着电脑刷新页面，随时随地掌握拍卖图片处理进度，真正做到“处理完就知道”。
  - icon: ⚙️
    title: 全流程自动化处理
    details: 经过真实拍卖行验证的高效图片工作流，一站式覆盖整理、排序、压缩、备份全链路。全面解放运营团队双手，让团队专注高价值业务。
  - icon: 🚀
    title: 效率飞跃 80%
    details: 对比传统人工处理，整体效率提升高达80%。大幅降低人力成本，让团队专注高价值拍卖业务。
  - icon: 🧩
    title: 灵活自定义策略
    details: 支持完全自定义图片处理规则，轻松适配各种复杂业务场景。再也不用为特殊需求妥协，真正实现按需个性化配置。
  - icon: 🖥️
    title: 跨平台兼容
    details: 原生支持 Windows + macOS，部署简单便捷。团队协同零障碍，彻底打破系统壁垒。
---

<style>
:root {
  /* Hero 辉光层：使用与首页标题渐变一致的配色 */
  --vp-home-hero-image-background-image: linear-gradient(
    120deg,
    #4f46e5 20%,
    #06b6d4 55%,
    #56dde7 90%
  );
  /* 官网风格的模糊辉光强度（默认移动端） */
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
