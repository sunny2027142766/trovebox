<script setup lang="ts"></script>

<template>
  <NConfigProvider class="h-screen">
    <n-message-provider>
      <RouterView />
    </n-message-provider>
    <!-- <NGlobalStyle /> -->
  </NConfigProvider>
</template>

<style scoped></style>
