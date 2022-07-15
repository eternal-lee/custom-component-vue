<template>
  <div
    class="buoyPopup"
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
    ref="buoyPopup"
  >
    <slot />
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
export default {
  name: 'buoy-popup',
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
        return 0.5
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
    }
  },
  data() {
    return {
      zIndex: zIndexPlus(),
      left: 0,
      top: 0
    }
  },
  mixins: [PortalMixin()],
  created() {
    // 初始化位置
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
    this.left =
      this.clientWidth - this.itemWidth - this.gapWidth * this.distanceMultiple
    this.top = this.clientHeight * this.coefficientHeight
  },
  methods: {
    clickEvent() {
      this.$emit('clickEvent')
    },
    ontouchstart(e) {
      e.stopPropagation()
      this.$refs.buoyPopup.style.transition = 'none'
    },
    ontouchmove(e) {
      e.stopPropagation()
      if (e.targetTouches.length === 1) {
        let touch = event.targetTouches[0]
        let left = touch.clientX - this.itemWidth / 2
        let top = touch.clientY - this.itemHeight / 2
        if (touch.clientX - this.itemWidth / 2 < 0) {
          left = 0
        } else if (touch.clientX + this.itemWidth / 2 > this.clientWidth) {
          left = this.clientWidth - this.itemWidth
        }
        if (touch.clientY - this.itemHeight / 2 < 0) {
          top = 0
        } else if (touch.clientY + this.itemHeight / 2 > this.clientHeight) {
          top = this.clientHeight - this.itemHeight
        }
        this.left = left
        this.top = top
      }
    },
    ontouchend(e) {
      e.stopPropagation()
      this.$refs.buoyPopup.style.transition = 'all 0.3s'
      if (this.left > this.clientWidth / 2) {
        this.left =
          this.clientWidth -
          this.itemWidth -
          this.gapWidth * this.distanceMultiple
      } else {
        this.left = this.gapWidth
      }
      if (this.top <= this.gapWidth) {
        this.top = this.gapWidth * 2
      } else {
        let bottom = this.clientHeight - this.itemHeight - this.gapWidth
        if (this.top >= bottom) {
          this.top = bottom
        }
      }
    },
    removeEl() {
      if (this.$el) this.$el.style.display = 'none'
      if (document.body.contains(this.$el)) {
        document.body.removeChild(this.$el)
        this.$destroy('buoy-popup')
      }
    }
  },
  destroyed() {
    this.removeEl()
  },
  deactivated() {
    this.removeEl()
  }
}
</script>

<style scoped>
.buoyPopup {
  z-index: 20;
  transition: all 0.3s;
  position: fixed;
  border-radius: 50%;
  cursor: pointer;
}
</style>
