<template>
  <div class="custom-dialog" :style="{ zIndex: zIndex }" v-if="visible">
    <div class="dialog_mask" @click="overlayHandle"></div>
    <div class="dialog_box" :style="{ zIndex: zIndexFunc(2) }">
      <div class="dialog_content">
        <div class="custom-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="custom-content center">
          <slot name="msg">{{ msg }}</slot>
        </div>
      </div>
      <div class="custom-footer-box">
        <div
          class="footer-left footer-btn"
          @click.stop="cancleBtn"
          v-if="showCancelButton"
        >
          {{ cancleBtnText }}
        </div>
        <div
          class="footer-right footer-btn"
          @click.stop="confirmBtn"
          v-if="showConfirmButton"
        >
          {{ confirmBtnText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch } from 'vue'
import { zIndexPlus } from './../../zIndex/index'
export default {
  name: 'cusDialog',
  props: {
    visible: {
      type: Boolean
    },
    title: {
      type: String
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    msg: {
      type: String,
      default: '内容信息'
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    cancleBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确认'
    }
  },
  emits: ['cancleBtn', 'confirmBtn', 'onOk', 'onClose', 'update:visible'],
  setup(props, context) {
    const zIndex = ref(zIndexPlus())
    const zIndexFunc = zIndex => {
      return zIndexPlus(zIndex)
    }
    const overlayHandle = () => {
      if (!props.closeOnClickOverlay) return
      cancleBtn()
    }
    const cancleBtn = () => {
      context.emit('update:visible', false)
      context.emit('onClose')
    }

    const confirmBtn = () => {
      context.emit('onOk')
    }
    // 监听弹层v-model
    watch(
      () => props.visible,
      val => {
        context.emit('update:visible', val)
      }
    )
    return {
      zIndex,
      zIndexFunc,
      overlayHandle,
      cancleBtn,
      confirmBtn
    }
  }
}
</script>

<style lang="less">
.custom-dialog {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .dialog_mask {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .dialog_box {
    z-index: 1001;
    width: 80%;
    max-width: 500px;
    border-radius: 4px;
    color: #212121;
    background: rgba(255, 255, 255);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .dialog_content {
      padding: 17px 20px 0;
    }
    .custom-title {
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #212121;
    }
    .custom-content {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #212121;
      letter-spacing: 0;
      padding: 21px 0 29px 0;
      &.center {
        text-align: center;
      }
    }
  }
  .custom-footer-box {
    border-top: 1px solid #bdbdbd;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 49px;
    .footer-btn {
      flex: 1;
      height: 100%;
      color: #212121;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .footer-left {
      color: #4da9ff;
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        -ms-transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        border: 1px solid #bdbdbd;
        -ms-transform: scale(0.5) translateZ(0);
        -webkit-transform: scale(0.5) translateZ(0);
        transform: scale(0.5) translateZ(0);
        height: 200%;
      }
    }
  }
}
</style>
