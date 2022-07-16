<template>
  <!-- 全局提示框 -->
  <transition name="fade" appear>
    <div
      class="toast"
      v-if="isShow"
      v-bind:class="{
        default: type === 'default',
        info: type === 'info',
        success: type === 'success',
        error: type === 'error',
        waring: type === 'waring',
        danger: type === 'danger'
      }"
    >
      {{ msg }}
    </div>
  </transition>
</template>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-58px);
}
.toast {
  position: fixed;
  left: 0;
  top: 60px;
  color: #fff;
  width: 100%;
  height: 58px;
  font-size: 20px;
  border-radius: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.default {
  background: #ecf5ff;
  color: #409eff;
  border: 1px solid #3a8ee6;
}
.info {
  background: #82848a;
}
.success {
  background-image: linear-gradient(270deg, #3e7eff 0%, #7ba6ff 100%);
}
.error {
  background-image: linear-gradient(270deg, #fa6666 0%, #f44336 100%);
}
.waring {
  background: #e6a23c;
}
.danger {
  background: #f56c6c;
}
</style>
