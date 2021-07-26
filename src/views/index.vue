<template>
  <div>
    <hello></hello>
    <div>{{ priceFilter(aa) }}</div>
    <van-button type="info" @click="aa++">plus-{{ aa }}</van-button>
    <van-button type="primary" @click="visible = !visible">主要按钮</van-button>
  </div>
  <Teleport to="body">
    <cusDialog
      v-model:visible="visible"
      title="标题"
      :closeOnClickOverlay="false"
      @onClose="handleCloseDialog"
      @onOk="handleOk"
    >
      <template #title> dasdd </template>
      <template #msg> 我是内容，你是谁? </template>
    </cusDialog>
  </Teleport>
  <buoy-popup></buoy-popup>
</template>

<script>
import myHooks from './../mixins/myHooks'
import hello from '@/components/HelloWorld'
import { getCurrentInstance, nextTick, onMounted, reactive, ref, toRefs } from 'vue'
export default {
  name: 'home',
  setup() {
    // 使用 `toRefs` 创建对prop的 `user` property 的响应式引用
    // aa 是常量 则需要用toRefs做响应式
    const { aa, clickLeft } = toRefs(myHooks())
    let num = ref(5)
    const { proxy: _self } = getCurrentInstance()
    _self.$showDialog &&
      _self.$showDialog({
        title: '5646848',
        visible: true
      })
    const state = reactive({
      visible: false
    })
    const handleShowDialog = () => {
      state.visible = true
    }

    const handleCloseDialog = () => {
      state.visible = false
    }

    const handleOk = () => {
      console.log('ok')
      handleCloseDialog()
    }

    const priceFilter = val => {
      if (!val) return 0
      return '￥' + Number(val).toFixed(2)
    }

    const { visible } = toRefs(state)
    onMounted(() => {
      nextTick(() => {
        clickLeft()
      })
    })

    return {
      num,
      aa,
      visible,
      state,
      handleShowDialog,
      handleCloseDialog,
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
.buoyPopup {
  background: chartreuse;
}
</style>
