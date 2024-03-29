<template>
  <div class="login-form">
    <n-form ref="formRef" :model="form" :rules="rules" label-placement="left">
      <n-form-item path="username">
        <n-input v-model:value="form.username" type="email" placeholder="请输入邮箱">
          <template #prefix>
            <n-icon size="18" color="#808695">
              <PersonOutline />
            </n-icon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item path="password">
        <n-input v-model:value="form.password" type="password" show-password-on="click" placeholder="请输入密码">
          <template #prefix>
            <n-icon size="18" color="#808695">
              <LockClosedOutline />
            </n-icon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item path="isCaptcha">
        <div class="w-full">
          <mi-captcha theme-color="#36AD6A" width="300" :logo="Logo" @success="onAuthCode" />
        </div>
      </n-form-item>
      <n-form-item class="default-color">
        <div class="flex justify-between items-center">
          <div class="flex-initial">
            <n-checkbox v-model:checked="autoLogin">自动登录</n-checkbox>
          </div>
          <div class="flex-initial order-last">
            <a href="javascript:;">忘记密码</a>
          </div>
        </div>
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="handleLogin" block :loading="loading">登录</n-button>
      </n-form-item>
      <!-- <n-form-item class="default-color">
        <div class="flex view-account-other">
          <div class="flex-initial">
            <span>其他登陆方式</span>
          </div>
          <div class="flex-initial mx-2">
            <a href="javascript:;">
              <n-icon size="24" color="#2d8cf0">
                <LogoGithub />
              </n-icon>
            </a>
          </div>
          <div class="flex-initial mx-2">
            <a href="javascript:;">
              <n-icon size="24" color="#2d8cf0">
                <LogoGithub />
              </n-icon>
            </a>
          </div>
        </div>
        <div class="flex-initial" style="margin-left: auto">
          <a href="javascript:;">注册账号</a>
        </div>
      </n-form-item> -->
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Logo from '@/assets/icons/logo.svg'

const form = reactive({
  username: '',
  password: '',
  isCaptcha: false
})

const autoLogin = ref(false)

const loading = ref(false)
const handleLogin = () => {}

const onAuthCode = () => {}

const rules = {
  username: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
  password: [{ required: true, message: '请输入序号', trigger: 'blur' }],
  isCaptcha: [
    {
      required: true,
      type: 'boolean',
      message: '请点击按钮进行验证码校验',
      trigger: 'change'
    }
  ]
}
</script>

<style lang="scss" scoped></style>
