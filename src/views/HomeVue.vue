<template>
  <h1>Features</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="handleClickOrgChart">Org Chart</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const count = ref(0);

function handleClickOrgChart() {
  console.log("Click Btn");
  router.push("/org-chart");
}

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}

.card button {
  display: block;
  margin-bottom: 10px; /* Add spacing between buttons */
}
</style>
