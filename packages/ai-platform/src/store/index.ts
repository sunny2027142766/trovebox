import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()

// 全局注册 store
export function setupStore(app: App<Element>) {
  store.use(
    createPersistedState({
      auto: true
    })
  )
  app.use(store)
}

export { store }
