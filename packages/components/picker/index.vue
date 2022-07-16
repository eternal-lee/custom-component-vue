<template>
  <van-popup
    v-model="periodPopupModel"
    class="customPopup"
    :close-on-click-overlay="closeOnClickOverlay"
    :round="round"
    position="bottom"
    get-container="body"
    overlay-class="period-overlay-mask"
  >
    <van-picker
      show-toolbar
      :title="title"
      :cancel-button-text="cancelButtonText"
      :confirm-button-text="confirmButtonText"
      :value-key="valueKey"
      :columns="columns"
      :item-height="itemHeight"
      :default-index="defaultIndex"
      :visible-item-count="visibleItemCount"
      @cancel="handleClickCancel"
      @confirm="handleClickConfirm"
      @change="handleChange"
    >
      <template slot="title">
        <slot name="title">
          {{ title }}
        </slot>
      </template>
      <template #option="item">
        <!-- 这里的item就是每一个选项，可以是一个对象也可以是一个字符串 -->
        <slot name="option" :data="item"></slot>
      </template>
    </van-picker>
  </van-popup>
</template>

<script>
export default {
  name: 'custpicker',
  props: {
    value: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 是否显示顶部栏
    showToolbar: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 顶部标题
    title: {
      type: [String, Number],
      default: () => {
        return ''
      }
    },
    cancelButtonText: {
      type: String,
      default: () => {
        return '取消'
      }
    },
    confirmButtonText: {
      type: String,
      default: () => {
        return '确认'
      }
    },
    // 选项对象中，选项文字对应的键名
    valueKey: {
      type: String,
      default: () => {
        return 'text'
      }
    },
    // 对象数组，配置每一列显示的数据
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 选项行高
    itemHeight: {
      type: [Number, String],
      default: () => {
        return 44
      }
    },
    // 单列选择时，默认选中项的索引
    defaultIndex: {
      type: [Number, String],
      default: () => {
        return 0
      }
    },
    // 是否在点击遮罩层后关闭
    closeOnClickOverlay: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    // 是否展示圆角
    round: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 可见的选项个
    visibleItemCount: {
      type: [Number, String],
      default: () => {
        return 5
      }
    },
    onConfirm: {
      type: Function,
      default: _ => Promise.resolve()
    },
    onCancel: {
      type: Function,
      default: _ => Promise.resolve()
    },
    onChange: {
      type: Function,
      default: _ => Promise.resolve()
    }
  },
  watch: {
    value(val) {
      this.periodPopupModel = val
    },
    periodPopupModel(val) {
      this.$emit('input', val)
    }
  },
  data() {
    return {
      periodPopupModel: false
    }
  },
  methods: {
    async handleClickConfirm(value, index) {
      let onConfirm = this.$listeners.onConfirm || this.onConfirm
      if (onConfirm && typeof onConfirm === 'function') {
        await onConfirm(value, index)
      }
      this.periodPopupModel = false
    },
    async handleClickCancel() {
      let onCancel = this.$listeners.onCancel || this.onCancel
      if (onCancel && typeof onCancel === 'function') {
        await onCancel()
      }
      this.periodPopupModel = false
    },
    async handleChange(picker, value, index) {
      let onChange = this.$listeners.onChange || this.onChange
      if (onChange && typeof onChange === 'function') {
        await onChange(picker, value, index)
      }
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-picker__toolbar {
  font-size: 16px;
}
</style>
