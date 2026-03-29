<script setup lang="ts">
import type { DefineComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomeFeatureCarousel from './components/HomeFeatureCarousel.vue'
import LogoWall from './components/LogoWall.vue' // 1. 引入 Logo 墙组件

const Layout = DefaultTheme.Layout as DefineComponent
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <p class="home-hero-disclaimer">*当前为早期预览版，核心功能已可商用，欢迎预约演示与定制</p>
      <!-- <LogoWall />  -->
    </template>
    
    <template #home-features-before>
      <div class="home-features-title-wrap">
        <h2 class="home-features-title"></h2>
      </div>
      <HomeFeatureCarousel />
    </template>
  </Layout>
</template>