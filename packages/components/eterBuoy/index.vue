<template>
  <div
    v-if="isShow"
    class="eterBuoy"
    :class="customClass"
    @click="clickEvent"
    @touchstart="ontouchstart"
    @touchmove.prevent.stop="ontouchmove"
    @touchend="ontouchend"
    :style="{
      width: itemWidth + 'px',
      height: itemHeight + 'px',
      left: left + 'px',
      top: top + 'px',
      zIndex: zIndex
    }"
    ref="eterBuoy"
  >
    <slot />
    <template v-if="closeIcon">
      <slot name="close">
        <div class="close" @click.stop="handleClickClose">
          <i class="iconfont icon-close"></i>
        </div>
      </slot>
    </template>
  </div>
</template>

<script>
/* customClass : 自定义calss名
 * itemWidth/itemHeight: 浮标宽度/高度
 * gapWidth: 浮标距离左右边框的距离
 * coefficientHeight： 初始化top位置 位于屏幕高度%比
 * distanceMultiple: 浮标距离右边框距离的倍数
 */
import { PortalMixin } from './../../mixins/portal'
import { zIndexPlus } from './../../zIndex/index'
import {
  getCurrentInstance,
  onActivated,
  onDeactivated,
  onMounted,
  reactive,
  ref
} from 'vue'
export default {
  name: 'eterBuoy',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    itemWidth: {
      type: Number,
      default: () => {
        return 60
      }
    },
    itemHeight: {
      type: Number,
      default: () => {
        return 60
      }
    },
    gapWidth: {
      type: Number,
      default: () => {
        return 14
      }
    },
    coefficientHeight: {
      type: Number,
      default: () => {
        return 0.8
      }
    },
    distanceMultiple: {
      type: Number,
      default: () => {
        return 2
      }
    },
    // 挂载到指定容器 默认body上
    getContainer: {
      type: [String, Function],
      default: 'body'
    },
    closeIcon: {
      type: Boolean,
      default: true
    }
  },
  mixins: [PortalMixin()],
  emits: [
    'clickEvent',
    'ontouchstart',
    'ontouchmove',
    'ontouchend',
    'removeEl'
  ],
  setup(props, context) {
    let {
      itemWidth,
      itemHeight,
      gapWidth,
      distanceMultiple,
      coefficientHeight
    } = reactive(props)
    let clientWidth = 0
    let clientHeight = 0
    let left = ref(0)
    let top = ref(0)
    let zIndex = ref(zIndexPlus())

    let isShow = ref(true)

    let { proxy: _self } = getCurrentInstance()

    onMounted(() => {
      // 初始化位置
      clientWidth = document.documentElement.clientWidth
      clientHeight = document.documentElement.clientHeight
      let _left = clientWidth - itemWidth - gapWidth * distanceMultiple
      let _top = clientHeight * coefficientHeight
      console.warn(left)
      left.value = _left
      top.value = _top
    })

    function handleClickClose() {
      isShow.value = false
    }

    let clickEvent = () => {
      context.$emit('clickEvent')
    }

    let ontouchstart = e => {
      e.stopPropagation()
      _self.$refs.eterBuoy.style.transition = 'none'
    }

    function ontouchmove(e) {
      e.stopPropagation()
      if (e.targetTouches.length === 1) {
        let touch = e.targetTouches[0]
        let _left = touch.clientX - itemWidth / 2
        let _top = touch.clientY - itemHeight / 2
        if (touch.clientX - itemWidth / 2 < 0) {
          _left = 0
        } else if (touch.clientX + itemWidth / 2 > clientWidth) {
          _left = clientWidth - itemWidth
        }
        if (touch.clientY - itemHeight / 2 < 0) {
          _top = 0
        } else if (touch.clientY + itemHeight / 2 > clientHeight) {
          _top = clientHeight - itemHeight
        }
        left.value = _left
        top.value = _top
      }
    }
    function ontouchend(e) {
      e.stopPropagation()
      _self.$refs.eterBuoy.style.transition = 'all 0.3s'
      if (left.value > clientWidth / 2) {
        left.value = clientWidth - itemWidth - gapWidth * distanceMultiple
      } else {
        left.value = gapWidth
      }
      if (top.value <= gapWidth) {
        top.value = gapWidth * 2
      } else {
        let bottom = clientHeight - itemHeight - gapWidth
        if (top.value >= bottom) {
          top.value = bottom
        }
      }
    }

    let removeEl = () => {
      if (_self.$el) _self.$el.style.display = 'none'
      if (document.body.contains(_self.$el)) {
        document.body.removeChild(_self.$el)
        _self.$destroy('buoy-popup')
      }
    }

    onActivated(() => {
      removeEl()
    })

    onDeactivated(() => {
      removeEl()
    })

    return {
      clientWidth,
      clientHeight,
      left,
      top,
      zIndex,
      isShow,

      handleClickClose,
      clickEvent,
      ontouchstart,
      ontouchmove,
      ontouchend,
      removeEl
    }
  }
}
</script>

<style scoped lang="less">
@import './../../styles/less/index.less';
.eterBuoy {
  z-index: 20;
  transition: all 0.3s;
  position: fixed;
  border-radius: 50%;
  cursor: pointer;
  background: #f0f;

  .close {
    width: 14px;
    height: 14px;
    position: absolute;
    right: -2px;
    top: -6px;
  }
}
</style>
