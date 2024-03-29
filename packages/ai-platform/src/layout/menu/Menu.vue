<script setup lang="ts">
import { useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue'
const route = useRoute()
</script>

<template>
  <div class="ai-menu mx-2">
    <MenuItem :items="route.matched[0].children"> </MenuItem>
  </div>
</template>

<style lang="scss" scoped>
@include b(menu) {
  height: 100%;
  padding: 16px 0px 16px 0px;
  overflow: hidden;

  @include e(items) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
