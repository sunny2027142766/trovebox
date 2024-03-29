import { App, h } from 'vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { NIcon } from 'naive-ui'

import { ChatBot } from '@vicons/carbon'
import { Home } from '@vicons/tabler'
import Layout from '@/layout/Index.vue'
import { createRouterGuards } from './router-guards'

const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/exception/403/403.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/500.vue')
  }
]

const routePC: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/login',
    meta: {
      title: '主页',
      icon: () => h(NIcon, null, { default: () => h(Home) })
    },
    children: [
      {
        path: 'chat',
        name: 'chat',
        component: () => import('@/views/chat/index.vue'),
        meta: {
          title: '会话',
          icon: () => h(NIcon, null, { default: () => h(ChatBot) })
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/user-login.vue'),
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404'
  },
  ...errorRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routePC
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router
