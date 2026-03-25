<script setup lang="ts">
import type { DefineComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomeFeatureCarousel from './components/HomeFeatureCarousel.vue'

const Layout = DefaultTheme.Layout as DefineComponent
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <p class="home-hero-disclaimer">*当前为早期预览版，核心功能已可商用，欢迎预约演示与定制</p>
    </template>
    <template #home-features-before>
      <div class="home-features-title-wrap">
        <h2 class="home-features-title"></h2>
      </div>
      <HomeFeatureCarousel />
    </template>
  </Layout>
</template>
