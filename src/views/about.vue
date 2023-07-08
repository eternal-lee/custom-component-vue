<template>
  <div class="about">
    <h1>This is an about page</h1>
    <eter-buoy customClass="buoyPopup"></eter-buoy>

    <eterPicker :columns="column" @pickerChange="handle">
      <!-- <template #option="{ item }">
        <div class="aaa" style="height: 44px">{{ item }}</div>
      </template> -->
    </eterPicker>
    选中的索引：{{ index }}
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const column = ref([
      '杭州',
      '宁波',
      '温州',
      '绍兴',
      '湖州',
      '嘉兴',
      '金华',
      '衢州'
    ])
    let index = ref(0)

    function handle(idx) {
      index.value = idx
    }

    return {
      column,
      index,
      handle
    }
  }
}
</script>

<style lang="less" scoped>
.buoyPopup {
  background: chartreuse;
}
</style>
