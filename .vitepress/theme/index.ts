import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import RoadmapTimeline from './components/RoadmapTimeline.vue'
import RoadmapTimeline_ja from './components/RoadmapTimeline_ja.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('RoadmapTimeline', RoadmapTimeline)
    app.component('RoadmapTimeline_ja', RoadmapTimeline_ja)
  },
} satisfies Theme
