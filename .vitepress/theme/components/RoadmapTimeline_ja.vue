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
    period: '26年Q1 開発初期',
    title: 'コアワークフローと基礎機能',
    status: 'shipped',
    items: [
      { text: 'システム設定（パス、リポジトリ、Excelマッピング、圧縮ルール）', link: '/settings' },
      { text: 'リネーム・圧縮', link: '/rename-compress' },
      { text: '整理・並べ替え', link: '/organize-sort' },
      { text: '選択リネーム', link: '/selection-rename' },
      { text: 'バックアップ・アーカイブ', link: '/archive' },
    ],
  },
  {
    period: '26年Q1 ベータ版開発',
    title: 'ユーティリティツールとリポジトリ管理',
    status: 'shipped',
    items: [
      { text: 'メイン画像の抽出', link: '/extract-main' },
      { text: '画像校正', link: '/image-verify' },
      { text: '出品物照会', link: '/lot-query' },
      { text: 'リポジトリ分析', link: '/warehouse-analysis' },
      { text: '出品物削除', link: '/warehouse-delete' },
    ],
  },
  {
    period: '26年Q1',
    title: '機能改善とテスト',
    status: 'in_progress',
    items: [
      {text: '大規模言語モデル（LLM）連携による、出品物リネーム・照会等の複雑な業務の迅速化' },
      {text: 'プッシュ通知対応、タスク完了時のモバイル通知' },
      {text: 'さらなる実用機能の拡充' },
      {text: 'Windows版アプリのテストと最適化' },
      {text: '日本語ページの最適化と補完' },
      {text: 'v1.0.0 Windows / Mac版リリース' },
    ],
  },
  {
    period: '26年Q2',
    title: '開発予定（スケジュール済み）',
    status: 'planned',
    items: [
      { text: '画像処理戦略の追加とバッチ処理のオーケストレーション' },
      { text: 'パフォーマンスと安定性の継続的な最適化' },
      { text: 'ビジュアルエフェクトの最適化' },
    ],
  },
  {
    period: '26年Q3以降',
    title: '開発計画中',
    status: 'planned',
    items: [
      { text: 'リポジトリのバックアップ・統合・保守メカニズム' },
      { text: 'ワークフローや業務システムとの連携・カスタマイズ機能' },
    ],
  },
  {
    period: '27年Q1以降',
    title: '検討中',
    status: 'planned',
    items: [
      { text: '多言語サポートの拡大' },
      { text: 'Web版のデプロイと運用による、クラウド経由のクロスプラットフォーム利用の実現' },
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
