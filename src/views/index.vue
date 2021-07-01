<template>
  <div>
    <hello></hello>
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
      <template #title>
        dasdd
      </template>
      <template #msg>
        我是内容，你是谁?
      </template>
    </cusDialog>
  </Teleport>
</template>

<script>
import hello from '@/components/HelloWorld'
import { getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'home',
  setup() {
    const { proxy: _self } = getCurrentInstance()
    _self.$showDialog && _self.$showDialog({
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

    const { visible } = toRefs(state)
    onMounted(() => {})

    return {
      visible,
      state,
      handleShowDialog,
      handleCloseDialog,
      handleOk
    }
  },
  components: {
    hello
  }
}
</script>

<style lang="less" scoped></style>
