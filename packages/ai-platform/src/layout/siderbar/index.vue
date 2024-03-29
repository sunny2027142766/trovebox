<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
// import { useBasicLayout } from '@/hooks'
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

// const { isMobile } = useBasicLayout()
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
    extraUrl: 'https://trovebox.fukaluosi.online/',
    isExtra: false
  }
])
const router = useRouter()
const route = useRoute()
const activeRoutePath = computed(() => route.path)

// const getMobileLayoutClass = computed(() => {
//   if (isMobile.value) return ['flex-rol', 'w-full', 'border-0']
//   return ['flex-col', 'w-sider', 'h-full', 'border-r']
// })

// const getIconMobileLayoutClass = computed(() => {
//   if (isMobile.value) return ['flex', 'flex-rol', 'items-center', 'pt-0', 'w-full']
//   return ['flex', 'flex-col', 'pt-1', 'items-center']
// })
const isActive = (item: MenuItem) => {
  return activeRoutePath.value.startsWith(item.menuPath)
}
const handleToPage = (item: MenuItem) => {
  const { menuPath, extraUrl } = item
  if (extraUrl !== '') {
    window.open(extraUrl)
    return
  }
  if (menuPath) {
    return router.push({ path: menuPath })
  }
}
</script>
<template>
  <div
    class="flex flex-col w-sider h-full border-r min-w-[70px] bg-[#fff] pb-2 dark:bg-[#25272d] dark:border-[#3a3a40] border-[#efeff5]"
    style="border-right: 1px solid #efeff5">
    <main class="flex-1 flex-grow-1 mb-5 overflow-auto mt-6">
      <NScrollbar :size="1">
        <div class="flex h-full flex-col items-center space-y-3">
          <a
            v-for="item in menuList"
            :key="item.id"
            @click="handleToPage(item)"
            class="cursor-pointer flex flex-col items-center justify-center bg-[#f1f5f9] w-[52px] h-[52px] rounded-xl hover:bg-[#e7f5ed] hover:text-[#18A058]"
            :class="[isActive(item) ? 'text-[#18A058] dark:text-[#18A058]' : ' text-black/60']">
            <Icon :icon="item.menuIcon" class="text-2xl text-current"> </Icon>
            <p class="text-xs">{{ item.menuName }}</p>
          </a>
        </div>
      </NScrollbar>
    </main>
    <div class="flex flex-col justify-between items-center">
      <!-- <NTooltip trigger="hover" placement="right">
        <template #trigger>
          <Icon icon="uil:github" class="text-3xl cursor-pointer mb-5"></Icon>
        </template>
        GitHub
      </NTooltip>

      <NTooltip trigger="hover" placement="right">
        <template #trigger>
          <Icon icon="uil:github" class="text-3xl cursor-pointer mb-5"></Icon>
        </template>
        GitHub
      </NTooltip> -->
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
