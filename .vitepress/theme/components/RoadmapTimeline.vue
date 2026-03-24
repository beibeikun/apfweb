<script setup lang="ts">
import { withBase } from 'vitepress'

type RoadmapStatus = 'shipped' | 'in_progress' | 'planned'

type RoadmapItem = {
  text: string
  link?: string
}

type RoadmapPhase = {
  period: string
  title: string
  status: RoadmapStatus
  items: RoadmapItem[]
}

const phases: RoadmapPhase[] = [
  {
    period: '26 年 Q1 季度早期开发',
    title: '核心工作流与基础能力',
    status: 'shipped',
    items: [
      { text: '系统设置（路径、仓库、Excel 映射、压缩规则）', link: '/settings' },
      { text: '改名压缩', link: '/rename-compress' },
      { text: '整理排序', link: '/organize-sort' },
      { text: '选中改名', link: '/selection-rename' },
      { text: '备份归档', link: '/archive' },
    ],
  },
  {
    period: '26 年 Q1 季度测试版开发',
    title: '实用工具与仓库管理',
    status: 'shipped',
    items: [
      { text: '提取主图', link: '/extract-main' },
      { text: '图片校对', link: '/image-verify' },
      { text: '拍品查询', link: '/lot-query' },
      { text: '仓库分析', link: '/warehouse-analysis' },
      { text: '拍品删除', link: '/warehouse-delete' },
    ],
  },
  {
    period: '26 年 Q1 季度',
    title: '功能完善与测试',
    status: 'in_progress',
    items: [
      {text: '完善更多实用功能' },
      {text: 'windows端应用测试与优化' },
      {text: '日语页面优化补全' },
      {text: 'v1.0.0 windows / mac 版本发布' },
    ],
  },
  {
    period: '26 年 Q2 季度',
    title: '已排期待开发',
    status: 'planned',
    items: [
      { text: '更多图片处理策略与批处理编排' },
      { text: '性能与稳定性持续优化' },
      { text: '视觉效果优化' },
    ],
  },
  {
    period: '26 年 Q3 季度及以后',
    title: '已计划开发',
    status: 'planned',
    items: [
      { text: '仓库备份/整合/维护机制' },
      { text: '与工作流/业务系统的对接与定制能力' },
    ],
  },
  {
    period: '27 年 Q1 季度及以后',
    title: '研讨中',
    status: 'planned',
    items: [
      { text: '更多语言支持' },
      { text: '网页端部署与应用，实现云端跨平台使用' },
    ],
  },
]

const statusLabel: Record<RoadmapStatus, string> = {
  shipped: '已上线',
  in_progress: '进行中',
  planned: '计划中',
}
</script>

<template>
  <section class="roadmap-timeline" aria-label="产品路线图时间轴">
    <ol class="roadmap-timeline__list">
      <li
        v-for="(phase, i) in phases"
        :key="i"
        class="roadmap-timeline__item"
        :data-status="phase.status"
      >
        <div class="roadmap-timeline__track" aria-hidden="true">
          <span class="roadmap-timeline__dot" />
        </div>
        <article class="roadmap-timeline__card">
          <header class="roadmap-timeline__head">
            <span class="roadmap-timeline__badge">{{ phase.period }}</span>
            <span class="roadmap-timeline__status">{{ statusLabel[phase.status] }}</span>
            <h3 class="roadmap-timeline__title">{{ phase.title }}</h3>
          </header>
          <ul class="roadmap-timeline__bullets">
            <li v-for="(item, j) in phase.items" :key="j" class="roadmap-timeline__bullet">
              <a
                v-if="item.link"
                class="roadmap-timeline__link"
                :href="withBase(item.link)"
              >{{ item.text }}</a>
              <span v-else>{{ item.text }}</span>
            </li>
          </ul>
        </article>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.roadmap-timeline {
  margin: 1.5rem 0 2rem;
}

.roadmap-timeline__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.roadmap-timeline__item {
  position: relative;
  display: grid;
  grid-template-columns: 1.25rem 1fr;
  gap: 0 1rem;
  padding-bottom: 1.5rem;
}

.roadmap-timeline__item:last-child {
  padding-bottom: 0;
}

.roadmap-timeline__track {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 0.35rem;
}

.roadmap-timeline__track::after {
  content: '';
  position: absolute;
  top: 0.85rem;
  bottom: -1.5rem;
  left: 50%;
  width: 2px;
  margin-left: -1px;
  background: var(--vp-c-divider);
}

.roadmap-timeline__item:last-child .roadmap-timeline__track::after {
  display: none;
}

.roadmap-timeline__dot {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  border: 2px solid var(--vp-c-bg);
  box-shadow: 0 0 0 1px var(--vp-c-divider);
}

.roadmap-timeline__item[data-status='shipped'] .roadmap-timeline__dot {
  background: var(--vp-c-brand-1);
}

.roadmap-timeline__item[data-status='in_progress'] .roadmap-timeline__dot {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.roadmap-timeline__item[data-status='planned'] .roadmap-timeline__dot {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-text-3);
}

.roadmap-timeline__card {
  margin-top: -0.15rem;
  padding: 1rem 1.1rem 1.05rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.roadmap-timeline__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 0.65rem;
  margin-bottom: 0.65rem;
}

.roadmap-timeline__badge {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
}

.roadmap-timeline__status {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
}

.roadmap-timeline__item[data-status='shipped'] .roadmap-timeline__status {
  color: var(--vp-c-brand-1);
}

.roadmap-timeline__item[data-status='in_progress'] .roadmap-timeline__status {
  color: var(--vp-c-brand-1);
}

.roadmap-timeline__title {
  flex-basis: 100%;
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.roadmap-timeline__bullets {
  margin: 0;
  padding-left: 1.15rem;
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
  line-height: 1.55;
}

.roadmap-timeline__bullet {
  margin: 0.35rem 0;
}

.roadmap-timeline__bullet:first-child {
  margin-top: 0;
}

.roadmap-timeline__bullet:last-child {
  margin-bottom: 0;
}

.roadmap-timeline__link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.roadmap-timeline__link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}
</style>
