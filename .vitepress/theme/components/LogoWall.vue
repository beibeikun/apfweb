<script setup lang="ts">
import { withBase } from 'vitepress'

const logos = [
  { name: '合作伙伴 A', url: '/logos/logo-a.png', link: '#' },

]
</script>

<template>
  <section class="vp-logo-wall">
    <p class="logo-wall-title">受到众多优秀拍卖行与机构的信任</p>
    <div class="logo-wall-track">
      <div class="logo-item" v-for="logo in logos" :key="logo.name">
        <a v-if="logo.link" :href="logo.link" target="_blank" rel="noopener" :title="logo.name">
          <img :src="withBase(logo.url)" :alt="logo.name" />
        </a>
        <img v-else :src="withBase(logo.url)" :alt="logo.name" :title="logo.name" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.vp-logo-wall {
  max-width: 1152px;
  /* 调整上边距使其与上方的提示文字保持呼吸感，调整下边距隔开下方的特性轮播 */
  margin: 3rem auto 4rem; 
  padding: 0 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-wall-title {
  font-size: 0.875rem; /* 字号缩小，更显精致 */
  font-weight: 600;
  color: var(--vp-c-text-3); /* 使用 VitePress 内置的三级文字颜色，呈现柔和的灰色 */
  letter-spacing: 0.08em; /* 增加字间距，提升高级感 */
  margin-bottom: 2rem;
}

.logo-wall-track {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem 3rem;
  width: 100%;
}

.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-item img {
  max-width: 130px;
  height: 36px; /* 强制统一高度，防止不同比例的 Logo 显得参差不齐 */
  object-fit: contain;
  filter: grayscale(100%) opacity(0.4); /* 默认完全去色且透明度调低，不喧宾夺主 */
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* 丝滑的缓动函数 */
}

/* 悬浮时的焦点效果：恢复色彩、完全不透明、并附带轻微上浮和放大 */
.logo-item:hover img {
  filter: grayscale(0%) opacity(1);
  transform: translateY(-3px) scale(1.05);
}

/* 桌面端的响应式调整 */
@media (min-width: 768px) {
  .logo-wall-track {
    gap: 3rem 5rem;
  }
  .logo-item img {
    max-width: 160px;
    height: 42px;
  }
}
</style>