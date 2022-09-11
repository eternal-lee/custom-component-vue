## 弹窗 API

### Props 参数

| 参数                | 说明                       | 类型      | 默认值     |
| :------------------ | -------------------------- | :-------- | :--------- |
| v-model(visible)    | 是否展示弹窗               | _boolean_ | `true`     |
| title               | 标题                       | _string_  | `标题`     |
| msg                 | 内容                       | _string_  | `内容信息` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭弹窗 | _boolean_ | `true`     |
| zIndex              | 层级                       | _number_  | --         |
| showCancelButton    | 是否展示关闭按钮           | _boolean_ | `true`     |
| showConfirmButton   | 是否展示确认按钮           | _boolean_ | `true`     |
| cancleBtnText       | 关闭按钮文案               | _string_  | `取消`     |
| confirmBtnText      | 确认按钮文案               | _string_  | `确认`     |

### Events 事件

| 事件           | 说明               |      回调参数       | 返回值 |
| -------------- | ------------------ | :-----------------: | :----: |
| onClickConfirm | 点击确认按钮时触发 | _event: MouseEvent_ |   -    |
| onClose        | 点击取消按钮时触发 | _event: MouseEvent_ |   -    |

### Slots 插槽

| 名称  | 说明     |
| ----- | -------- |
| title | 标题     |
| msg   | 内容信息 |
