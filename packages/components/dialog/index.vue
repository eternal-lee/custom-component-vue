<template>
  <div class="custom-dialog" :style="{ zIndex: zIndexNum }" v-if="visible">
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
import { reactive, ref, watch } from 'vue'
import { zIndexPlus } from './../../zIndex/index'
export default {
  name: 'eterDialog',
  props: {
    visible: {
      type: Boolean
    },
    title: {
      type: String,
      default: '标题'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    msg: {
      type: String,
      default: '内容信息'
    },
    zIndex: {
      type: Number,
      default: 0
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
    },
    onClickConfirm: {
      type: Function,
      default: () => Promise.resolve()
    },
    onClose: {
      type: Function,
      default: () => Promise.resolve()
    },
    remove: {
      type: Function,
      default: () => Promise.resolve()
    }
  },
  emits: ['update:visible'],
  setup(props, { emit, attrs }) {
    let { zIndex, onClickConfirm, onClose, remove } = reactive(props)
    const zIndexNum = zIndex || ref(zIndexPlus())
    const zIndexFunc = zIndex => {
      return zIndexPlus(zIndex)
    }
    const overlayHandle = () => {
      if (!props.closeOnClickOverlay) return
      cancleBtn()
    }
    const cancleBtn = async () => {
      let _onClose = attrs.onOnClose || onClose
      if (_onClose && typeof _onClose === 'function') {
        try {
          await _onClose()
        } catch (e) {
          return false
        }
      }
      destoryDom()
    }

    const confirmBtn = async () => {
      let _onClickConfirm = attrs.onOnClickConfirm || onClickConfirm
      if (_onClickConfirm && typeof _onClickConfirm === 'function') {
        try {
          await _onClickConfirm()
        } catch (e) {
          return false
        }
      }
      destoryDom()
    }

    let destoryDom = async () => {
      let _remove = attrs.remove || remove
      if (_remove && typeof _remove === 'function') {
        await _remove()
      }
    }
    // 监听弹层v-model
    watch(
      () => props.visible,
      val => {
        emit('update:visible', val)
      }
    )

    return {
      zIndexNum,
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .dialog_mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 50%);
  }

  .dialog_box {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1001;
    width: 80%;
    max-width: 500px;
    color: #212121;
    background: rgba(255, 255, 255);
    border-radius: 4px;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 600px) {
      width: 400px;
    }

    .dialog_content {
      padding: 17px 20px 0;
    }

    .custom-title {
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #212121;
      text-align: center;
    }

    .custom-content {
      padding: 21px 0 29px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #212121;
      letter-spacing: 0;

      &.center {
        text-align: center;
      }
    }
  }

  .custom-footer-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 49px;
    text-align: center;
    border-top: 1px solid #bdbdbd;

    .footer-btn {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #212121;
    }

    .footer-left {
      position: relative;
      overflow: hidden;
      color: #4da9ff;

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        height: 200%;
        content: '';
        border: 1px solid #bdbdbd;
        transform: scale(0.5) translateZ(0);
        transform-origin: 0 0;
      }
    }
  }
}
</style>
