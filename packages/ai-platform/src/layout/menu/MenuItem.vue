<script setup lang="ts">
import { reactive, h, ref, VNodeChild } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

interface Item {
  meta?: Meta
  name?: string
  path: string
}
interface Meta {
  icon?: () => VNodeChild | undefined | string
  title: string
  hidden?: boolean
}
const props = defineProps<{
  items: Item[]
}>()

const menuOptions: MenuOption[] = reactive([])

// async function asyncRenderIcon(platform: string, icon: any) {
//   const modules = {
//     antd: await import('@vicons/antd'),
//     carbon: await import('@vicons/carbon'),
//     fa: await import('@vicons/fa'),
//     fluent: await import('@vicons/fluent'),
//     ionicons4: await import('@vicons/ionicons4'),
//     ionicons5: await import('@vicons/ionicons5'),
//     material: await import('@vicons/material'),
//     tabler: await import('@vicons/tabler')
//   }
//   const { [icon]: iconComp } = modules[platform]
//   return () => h(NIcon, null, { default: () => h(iconComp) })
// }

function RenderRouterLink(path: string, title: string) {
  return () =>
    h(
      RouterLink,
      {
        to: {
          path: path
        }
      },
      {
        default: () => title
      }
    )
}

props.items.forEach(async (item) => {
  item.component = null
  console.log('item')
  console.log(item)

  let menuOption: MenuOption = {}
  if (item.meta!.hidden) {
    return
  }
  menuOption.label = RenderRouterLink('/' + item.path, item.meta!.title)
  menuOption.key = item.path
  //let platform = item.meta!.icon!.split(' ')[0]
  //let iconName = item.meta!.icon!.split(' ')[1]
  //menuOption.icon = await asyncRenderIcon(platform, iconName)
  menuOption.icon = item.meta!.icon
  console.log('menuOption')
  console.log(menuOption)
  menuOptions.push(menuOption)
})

const activeKey = ref(sessionStorage.getItem('path') || 'chat')

const activeKeyChange = (path: string) => {
  console.log(path)
  sessionStorage.setItem('path', path)
}
</script>

<template>
  <n-menu :options="menuOptions" :icon-size="28" :default-value="activeKey" @update:value="activeKeyChange" />
</template>

<style lang="scss" scoped>
:deep(.n-menu-item-content-header) {
  font-size: 0.78rem;
}

:deep(.n-menu-item):hover {
  .n-menu-item-content__icon {
    font-size: 32px !important;
  }
}

:deep(.n-menu-item-content) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 32px;

  .n-menu-item-content__icon {
    margin-right: 0px !important;
  }
}

:deep(.n-menu-item) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 64px;
  height: 64px;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      :deep(.n-icon) {
        color: #ccc !important;
        padding: 10px;
      }
    }
  }

  .item:hover {
    cursor: pointer;

    :deep(.n-icon) {
      color: #000 !important;
      transition: font-size 0.2s;
      font-size: 30px !important;
    }
  }

  .item:active {
    :deep(.n-icon) {
      color: #000 !important;
      transition: font-size 0.2s;
      font-size: 30px !important;
    }
  }
}
</style>
