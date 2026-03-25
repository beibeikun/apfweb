<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'

const slides = [
  { label: '系统总览', light: '/xtzl_l.png', dark: '/xtzl_d.png', alt: '全流程处理' },
  { label: '选中改名', light: '/xzgm_l.png', dark: '/xzgm_d.png', alt: '高效效率' },
  { label: '备份归档', light: '/bfgd_l.png', dark: '/bfgd_d.png', alt: '各种图片处理策略' },
  { label: '图片校对', light: '/tpjd_l.png', dark: '/tpjd_d.png', alt: '跨平台兼容' },
  { label: '图片检查', light: '/tpjc_l.png', dark: '/tpjc_d.png', alt: '多线程加速' },
  { label: '系统设置', light: '/xtsz_l.png', dark: '/xtsz_d.png', alt: '服务器备份保障' },
] as const

const { isDark } = useData()
const activeIndex = ref(0)

const currentSlide = computed(() => slides[activeIndex.value])

const imageSrc = computed(() => {
  const s = currentSlide.value
  return withBase(isDark.value ? s.dark : s.light)
})

function selectSlide(i: number) {
  activeIndex.value = i
}
</script>

<template>
  <section class="home-feature-carousel" aria-roledescription="carousel">
    <div class="home-feature-carousel__viewport" aria-live="polite">
      <img
        :key="activeIndex + '-' + (isDark ? 'd' : 'l')"
        class="home-feature-carousel__image"
        :src="imageSrc"
        :alt="currentSlide.alt"
      />
    </div>
    <div class="home-feature-carousel__tabs" role="tablist" aria-label="特性截图切换">
      <button
        v-for="(slide, i) in slides"
        :key="slide.label"
        type="button"
        role="tab"
        class="home-feature-carousel__tab"
        :class="{ 'home-feature-carousel__tab--active': i === activeIndex }"
        :aria-selected="i === activeIndex"
        @click="selectSlide(i)"
      >
        {{ slide.label }}
      </button>
    </div>
  </section>
</template>
