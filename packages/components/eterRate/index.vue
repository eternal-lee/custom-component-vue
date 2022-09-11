<template>
  <div class="eterl-rate">
    <div
      class="eterl-rate_item"
      :style="{
        marginRight: gutter + 'px'
      }"
      v-for="(item, index) in list"
      :key="index"
    >
      <i
        class="iconfont rate__icon icon-star-full"
        :style="{
          color: item.color || voidColor,
          fontSize: size + 'px'
        }"
      ></i>
      <template v-if="item.status === 'half'">
        <i
          class="iconfont rate__icon"
          :class="
            item.value > 0.5 ? 'icon-star-full halfFull' : 'icon-24gf-starHalf'
          "
          :style="{
            color: color,
            fontSize: size + 'px',
            width: item.value + 'em'
          }"
        ></i>
      </template>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import NP from 'number-precision'
export default {
  name: 'eterRate',
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    // 图标间距，默认单位为px
    gutter: {
      type: Number,
      default: 2
    },
    // 选中颜色
    color: {
      type: String,
      default: '#f00'
    },
    // 未选中颜色
    voidColor: {
      type: String,
      default: '#c8c9cc'
    },
    size: {
      type: Number,
      default: 14
    },
    count: {
      type: [Number, String],
      default: 5
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    let { modelValue, color, allowHalf, readonly } = reactive(props)

    const list = computed(() =>
      new Array(+props.count)
        .fill('')
        .map((_, i) => getRateStatus(modelValue, i + 1))
    )

    function getRateStatus(value, index) {
      if (value >= index) {
        return {
          value: 1,
          status: 'full',
          color: color
        }
      }
      if (value + 0.5 >= index && allowHalf && !readonly) {
        return { status: 'half', value: 0.5 }
      }

      if (value + 1 >= index && allowHalf && readonly) {
        return {
          value: NP.plus(NP.minus(value, index), 1),
          status: 'half'
        }
      }

      return { status: 'void', value: 0 }
    }

    return {
      list,

      getRateStatus
    }
  }
}
</script>

<style scoped lang="less">
.eterl-rate {
  display: inline-flex;

  .eterl-rate_item {

    display: inline-block;
    position: relative;
    margin-right: 2px;
    padding: 0;

    i.iconfont {
      display: block;

      &.rate__icon {
        width: 1em;
        position: relative;
      }

      &.icon-24gf-starHalf,
      &.halfFull {
        width: 0.5em;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
