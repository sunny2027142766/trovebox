<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

interface MenuItem {
  id: number
  menuName: string
  menuIcon: string
  menuPath: string
  extraUrl: string
  isExtra: boolean
}
const menuList = ref<MenuItem[]>([
  {
    id: 1,
    menuName: '对话',
    menuIcon: 'bx:chat',
    menuPath: '/chat',
    extraUrl: '',
    isExtra: false
  },
  {
    id: 2,
    menuName: '脑图',
    menuIcon: 'ri:mind-map',
    menuPath: '/mind',
    extraUrl: '',
    isExtra: false
  },
  {
    id: 3,
    menuName: 'MJ绘画',
    menuIcon: 'custom:midjourney',
    menuPath: '/mj',
    extraUrl: '',
    isExtra: false
  },
  {
    id: 4,
    menuName: '首页',
    menuIcon: 'bx:bx-home',
    menuPath: '/home',
    extraUrl: '',
    isExtra: false
  }
])

const router = useRouter()
const route = useRoute()
const activeRoutePath = computed(() => route.path)

const isActive = (item: MenuItem) => {
  return activeRoutePath.value.startsWith(item.menuPath)
}
const handleToPage = (item: MenuItem) => {
  const { menuPath } = item
  if (menuPath) {
    return router.push({ path: menuPath })
  }
}
</script>
<template>
  <div class="bg-white dark:bg-[#25272c] border-solid border-t border-gray-200">
    <div
      class="grid border-t py-2 dark:border-t-neutral-800 grid-cols-2"
      :style="{ gridTemplateColumns: `repeat(${menuList.length}, minmax(0, 1fr))` }">
      <a
        v-for="item in menuList"
        :key="item.id"
        :class="[isActive(item) ? 'text-[#18A058FF] dark:text-[#18A058FF]' : '']"
        class="cursor-pointer text-center leading-4"
        @click="handleToPage(item)">
        <Icon :icon="item.menuIcon" class="text-xl"> </Icon>
        <p class="text-xs">{{ item.menuName }}</p>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
