<template>
  <div
    class="buoyPopup"
    :class="addclass"
    @click="clickEvent"
    @touchstart="ontouchstart"
    @touchmove="ontouchmove"
    @touchend="ontouchend"
    :style="{
      width: itemWidth + 'px',
      height: itemHeight + 'px',
      left: left + 'px',
      top: top + 'px'
    }"
    ref="buoyPopup"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "buoy-popup",
  props: {
    addclass: {
      type: String,
      default: ""
    },
    itemWidth: {
      type: Number,
      default: () => {
        return 60;
      }
    },
    itemHeight: {
      type: Number,
      default: () => {
        return 60;
      }
    },
    gapWidth: {
      type: Number,
      default: () => {
        return 14;
      }
    },
    coefficientHeight: {
      type: Number,
      default: () => {
        return 0.5;
      }
    }
  },
  data() {
    return {
      left: 0,
      top: 0
    };
  },
  created() {
    // 初始化位置
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
    this.left = this.clientWidth - this.itemWidth - this.gapWidth * 2;
    this.top = this.clientHeight * this.coefficientHeight;
  },
  methods: {
    clickEvent() {
      this.$emit("clickEvent");
    },
    ontouchstart(e) {
      e.stopPropagation();
      this.$refs.buoyPopup.style.transition = "none";
    },
    ontouchmove(e) {
      e.stopPropagation();
      if (e.targetTouches.length === 1) {
        let touch = event.targetTouches[0];
        let left = touch.clientX - this.itemWidth / 2;
        let top = touch.clientY - this.itemHeight / 2;
        if (touch.clientX - this.itemWidth / 2 < 0) {
          left = 0;
        } else if (touch.clientX + this.itemWidth / 2 > this.clientWidth) {
          left = this.clientWidth - this.itemWidth;
        }
        if (touch.clientY - this.itemHeight / 2 < 0) {
          top = 0;
        } else if (touch.clientY + this.itemHeight / 2 > this.clientHeight) {
          top = this.clientHeight - this.itemHeight + this.gapWidth;
        }
        this.left = left;
        this.top = top;
      }
    },
    ontouchend(e) {
      e.stopPropagation();
      this.$refs.buoyPopup.style.transition = "all 0.3s";
      if (this.left > this.clientWidth / 2) {
        this.left = this.clientWidth - this.itemWidth - this.gapWidth * 2;
      } else {
        this.left = this.gapWidth;
      }
      if (this.top <= this.gapWidth) {
        this.top = this.gapWidth * 2;
      } else {
        let bottom = this.clientHeight - this.itemHeight - this.gapWidth;
        if (this.top >= bottom) {
          this.top = bottom;
        }
      }
    }
  }
};
</script>

<style scoped>
.buoyPopup {
  z-index: 20;
  transition: all 0.3s;
  position: fixed;
  background: #f0f;
  border-radius: 50%;
}
</style>
