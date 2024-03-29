<template>
  <div class="qrcode">
    <div>
      <img :src="url" alt="qrcode" />
    </div>
    <div>
      <p>请使用微信小程序“TroveBox如意百宝囊”扫描二维码</p>
    </div>
    <div>当前状态：{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
const url = ''
const text = '未扫码'
</script>

<style lang="scss" scoped>
.qrcode {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    width: 300px;
    height: 300px;
  }
}
</style>
