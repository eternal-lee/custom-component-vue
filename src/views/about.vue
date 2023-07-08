<template>
  <div class="about">
    <h1>This is an about page</h1>
    <eter-buoy customClass="buoyPopup"></eter-buoy>

    <eterPicker :columns="column">
      <!-- <template #option="{ item }">
        <div class="aaa" style="height: 44px">{{ item }}</div>
      </template> -->
    </eterPicker>
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

    return {
      column
    }
  }
}
</script>

<style lang="less" scoped>
.buoyPopup {
  background: chartreuse;
}
</style>
