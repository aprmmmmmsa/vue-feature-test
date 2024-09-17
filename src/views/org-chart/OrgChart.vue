<template>
  <div>
    <h1>Organization Chart</h1>
    <div class="card overflow-x-auto btn-group" id="chart-container">
      <button type="button" @click="handleClickPrimeVue">Prime Vue</button>
      <button type="button" @click="handleClickOrgVue">SyncFunction</button>
    </div>

    <div>
      <button type="button" @click="handleClickHome">Back</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as Vue from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

function handleClickHome() {
  router.push("/");
}

function handleClickPrimeVue() {
  router.push("/prime-vue");
}

function handleClickOrgVue() {
  router.push("/org-v");
}
</script>

<style scoped>
.btn-group {
  margin: 10px;
}
</style>
