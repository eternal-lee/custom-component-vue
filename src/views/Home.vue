<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the.
    </p>
    <h3>Installed CLI Plugins</h3>
    <h3>Essential Links</h3>
    <h3>Ecosystem</h3>
    <buoypopup class="fbuoypopup"></buoypopup>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.$showDialog()
      .then(res => {
        console.warn(res)
      })
      .catch(err => {
        console.warn(err)
      })
    this.$showMsgToast({ type: 'error', msg: 'error' })
  }
}
</script>

<style lang="less" scoped>
.fbuoypopup {
  background: #f0f;
}
</style>
