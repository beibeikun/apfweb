<script setup lang="ts">
import type { DefineComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomeFeatureCarousel from './components/HomeFeatureCarousel.vue'

const Layout = DefaultTheme.Layout as DefineComponent
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <p class="home-hero-disclaimer">*早期开发阶段预览，不代表最终版效果</p>
    </template>
    <template #home-features-before>
      <div class="home-features-title-wrap">
        <h2 class="home-features-title"></h2>
      </div>
      <HomeFeatureCarousel />
    </template>
  </Layout>
</template>
