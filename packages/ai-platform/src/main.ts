import { createApp } from 'vue'
import App from './App.vue'
import { setupNaive, setupCustomComponents, initFunction } from '@/plugins'
import { setupStore } from '@/store'
import router, { setupRouter } from '@/router'

async function appInit() {
  const app = createApp(App)
  setupNaive(app) // 注册全局常用的 naive-ui 组件
  setupCustomComponents(app) // 注册全局自定义组件
  setupStore(app) // 挂载状态管理
  setupRouter(app) // 挂载路由
  await router.isReady() // 路由准备就绪后挂载APP实例
  app.mount('#app', true) // 挂载到页面
}

appInit().then(() => {
  initFunction()
})
