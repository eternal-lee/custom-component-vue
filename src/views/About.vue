<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-field
      readonly
      clickable
      label="城市"
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
    />
    <custpicker
      v-model="showPicker"
      title="标题"
      :columns="columns"
      :round="true"
      @onConfirm="onConfirm"
    >
      <div class="title" slot="title">标题</div>
      <template v-slot:option="item">
        <div class="custom__item">{{ item.data }}</div>
      </template>
    </custpicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']
    }
  },
  methods: {
    onConfirm(value, index) {
      this.value = value + index
      this.showPicker = false
    }
  }
}
</script>

<style scoped lang="less">
.title {
  font-size: 16px;
}
</style>
