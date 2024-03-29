<template>
  <div class="flex mx-auto bg-green-100">
    <n-card class="max-w-[400px]">
      <n-tabs
        class="card-tabs"
        default-value="qrsignin"
        size="large"
        animated
        pane-wrapper-style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">
        <n-tab-pane name="qrsignin" tab="二维码登录">
          <QrCodeLogin />
        </n-tab-pane>
        <n-tab-pane name="signin" tab="密码登录">
          <PasswordLogin />
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <MiniRegister />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import QrCodeLogin from './qr-code-login.vue'
import PasswordLogin from './password-login.vue'
import MiniRegister from './mini-register.vue'
</script>

<style lang="scss" scoped></style>
