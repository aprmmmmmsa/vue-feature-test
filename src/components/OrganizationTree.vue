// src/components/OrganizationChart.vue
<template>
  <div class="organization-chart">
    <div v-for="node in data.children" :key="node.id" class="node">
      <div class="node-content">
        <span>{{ node.name }}</span>
        <div class="percentage">{{ node.shareholdingPercent }}%</div>
      </div>
      <div v-if="node.children" class="children">
        <OrganizationChart :data="node"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Shareholder } from '@/types/Shareholder';

export default defineComponent({
  name: 'OrganizationChart',
  props: {
    data: {
      type: Object as PropType<Shareholder>,
      required: true
    }
  }
});
</script>

<style scoped>
.organization-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.node {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  background: #f9f9f9;
  position: relative;
}

.node-content {
  padding: 10px;
}

.percentage {
  font-weight: bold;
  color: #333;
}

.children {
  margin-top: 10px;
}

.node + .node {
  border-top: 2px dashed #333;
}
</style>
