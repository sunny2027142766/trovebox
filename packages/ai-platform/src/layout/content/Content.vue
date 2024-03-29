<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="content">
    <RouterView :key="route.path" />
  </div>
</template>

<style lang="scss" scoped>
.content {
  @include bfc;
}
</style>
