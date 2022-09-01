<template>
  <div class="loading" v-show="visible" @click="close">
    <slot name="default">
      <div class="txt" v-if="title">{{ title }}</div>
      <div class="loading_gif">
        <img class="gif" src="./../../styles/loading.gif" alt="" />
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
    padding: 6px 15px;
  }
  .loading_gif {
    .gif {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
