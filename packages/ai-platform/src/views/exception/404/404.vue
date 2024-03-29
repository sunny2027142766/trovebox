<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handleToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <n-result status="404" title="404 资源不存在" size="huge" description="生活总归带点荒谬">
      <template #footer>
        <n-button @click="handleToHome">返回主页</n-button>
      </template>
    </n-result>
  </div>
</template>

<style lang="scss" scoped></style>
