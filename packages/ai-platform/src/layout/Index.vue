<script setup lang="ts">
import SiderBar from './siderbar/index.vue'
import FooterBar from './footerbar/index.vue'
import { useBasicLayout } from '@/hooks'
import { computed } from 'vue'

const { isMobile } = useBasicLayout()

const getMobileMainClass = computed(() => {
  if (isMobile.value) return ['rounded-none', 'shadow-none']
  return ['dark:border-neutral-800']
})

const getMobileLayoutClass = computed(() => {
  if (isMobile.value) return ['flex-col']
  return ['dark:border-neutral-800']
})
</script>
<template>
  <div class="h-full dark:bg-[#24272e] transition-all p-0">
    <div class="h-full overflow-hidden">
      <div class="transition h-full relative flex" :class="getMobileLayoutClass">
        <SiderBar v-if="!isMobile" />
        <n-layout-content class="h-full flex-1" :class="getMobileMainClass">
          <RouterView v-slot="{ Component, route }">
            <component :is="Component" :key="route.fullPath"></component>
          </RouterView>
        </n-layout-content>
        <FooterBar v-if="isMobile" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
