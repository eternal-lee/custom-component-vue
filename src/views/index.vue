<template>
  <div>
    <hello></hello>
    <eterRate v-model="num" allow-half />
    <div>{{ priceFilter(aa) }}</div>
    <van-button type="info" @click="aa++">plus-{{ aa }}</van-button>
    <van-button type="primary" @click="visible = !visible">主要按钮</van-button
    ><br />
    <svg class="circular" width="40" height="40">
      <circle
        cx="20"
        cy="20"
        r="10"
        stroke="rgb(25, 137, 250)"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
      ></circle>
    </svg>
    <svg height="0.5">
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        style="stroke: rgb(99, 99, 99); stroke-width: 2"
      />
    </svg>
    <svg width="0.5">
      <path d="M 100 10 100 100" style="stroke: gray; stroke-width: 0.5" />
    </svg>
  </div>
  <Teleport to="body">
    <eterDialog
      v-model:visible="visible"
      title="标题"
      :closeOnClickOverlay="false"
      @onClose="handleClose"
      @onClickConfirm="handleOk"
    >
      <template #title> dasdd </template>
      <template #msg> 我是内容，你是谁? </template>
    </eterDialog>
  </Teleport>
  <eter-buoy :itemWidth="50"><template #close>as</template></eter-buoy>
</template>

<script>
import myHooks from './../mixins/myHooks'
import hello from '@/components/HelloWorld'
import {
  getCurrentInstance,
  nextTick,
  onMounted,
  reactive,
  ref,
  toRefs
} from 'vue'
export default {
  name: 'home',
  setup() {
    onMounted(() => {
      nextTick(() => {
        clickLeft()
      })
    })
    // 使用 `toRefs` 创建对prop的 `user` property 的响应式引用
    // aa 是常量 则需要用toRefs做响应式
    const { aa, clickLeft } = myHooks()
    let num = ref(3.4)
    const { proxy: _self } = getCurrentInstance()
    let _loading = _self.$eterLoad && _self.$eterLoad()
    setTimeout(() => {
      // _self.$eterLoad && _self.$eterLoad.close()
      _loading.close()
      _dialog.hide()
    }, 1000)

    let _dialog =
      _self.$eterDialog &&
      _self.$eterDialog({
        title: '努力中',
        visible: true,
        zIndex: 2000,
        onClickConfirm: () => {
          console.warn(99999)
        },
        onClose: () => {
          return Promise.reject()
        }
      })
    const state = reactive({
      visible: false
    })
    const handleShowDialog = () => {
      state.visible = true
    }

    const handleClose = () => {
      state.visible = false
    }

    const handleOk = () => {
      console.log('ok')
      handleClose()
    }

    const priceFilter = val => {
      if (!val) return 0
      return '￥' + Number(val).toFixed(2)
    }

    const { visible } = toRefs(state)

    return {
      num,
      aa,
      visible,
      state,
      handleShowDialog,
      handleClose,
      handleOk,
      priceFilter
    }
  },
  components: {
    hello
  }
}
</script>

<style lang="less" scoped>
.eterBuoy {
  background: chartreuse;
}

.circular circle {
  animation: loading-circular 1.5s ease-in-out infinite;
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
