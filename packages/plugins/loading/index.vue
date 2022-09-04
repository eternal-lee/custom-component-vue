<template>
  <div class="loading" v-show="visible" @click="close">
    <slot name="default">
      <div class="middle">
        <div class="loading-container">
          <div class="loading-spinner">
            <svg class="loading-circular" viewBox="25 25 50 50">
              <circle cx="50" cy="50" r="20" fill="none" />
            </svg>
          </div>
        </div>
      <div class="txt" v-if="title">{{ title }}</div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    visible: {
      type: Boolean
    },
    title: {
      type: String,
      default: () => {
        return '加载中...'
      }
    }
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    function close() {
      emit('update:visible', false)
    }

    function hide() {
      emit('update:visible', false)
    }

    return {
      close,
      hide
    }
  }
}
</script>

<style scoped lang="less">
.loading {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .txt {
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 12px;
  }

  &-container {
    position: relative;
    padding: 20px;
    font-size: 0;
    color: #c8c9cc;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
  }

  &-spinner {
    color: white;
    position: relative;
    width: 40px;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    animation: loading-rotate 0.8s linear infinite;
    animation-duration: 2s;
  }

  &-circular {
    display: block;
    width: 100%;
    height: 100%;

    circle {
      stroke: currentcolor;
      stroke-linecap: round;
      stroke-width: 3;
      animation: loading-circular 1.5s ease-in-out infinite;
    }
  }
}
@keyframes loading-rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
@keyframes loading-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>
