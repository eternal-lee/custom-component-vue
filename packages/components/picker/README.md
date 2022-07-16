### Picker 选择器

#### API

| 参数                | 说明                                             | 类型             | 默认值 |
| :------------------ | ------------------------------------------------ | :--------------- | :----- |
| show-toolbar        | 是否显示顶部栏                                   | boolean          | false  |
| columns             | 对象数组，配置每一列显示的数据                   | Column[]         | []     |
| title               | 顶部栏标题                                       | string           | -      |
| confirm-button-text | 确认按钮文字                                     | string           | 确认   |
| cancel-button-text  | 取消按钮文字                                     | string           | 取消   |
| confirm-button-text | 确认按钮文字                                     | string           | 确认   |
| cancel-button-text  | 取消按钮文字                                     | string           | 取消   |
| value-key           | 选项对象中，选项文字对应的键名                   | string           | text   |
| show-toolbar        | 是否显示顶部栏                                   | boolean          | false  |
| defaultIndex        | 单列选择时，默认选中项的索引                     | number \| string | 0      |
| item-height         | v2.8.6 选项高度，支持 px vw vh rem 单位，默认 px | number \| string | 44     |
| visibleItemCount    | 可见的选项个数                                   | number \| string | 6      |
| round               | 是否显示圆角                                     | Boolean          | false  |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                           | boolean          | true   |

#### slot

| 名称                 | 说明                    | 参数   |
| :------------------- | :---------------------- | :----- |
| default              | 自定义整个顶部栏的内容  | -      |
| title                | 自定义标题内容          | -      |
| v-slot:option="item" | v2.10.11 自定义选项内容 | object |

自定义内容的使用

```html
<template v-slot:option="item">
  <div class="custom__item">{{ item.data }}</div>
</template>
```

#### Events

| 事件名  | 说明                                                              | 回调参数                                                                                            |
| :------ | ----------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| confirm | 点击完成按钮时触发<br/>注意：当传入多列数据时，返回值为数组格式。 | 单列：选中值，选中值对应的索引 <br/>多列：所有列选中值，所有列选中值对应的索引                      |
| cancel  | 点击取消按钮时触发 <br />注意：当传入多列数据时，返回值为数组格式 | 单列：选中值，选中值对应的索引 <br/>多列：所有列选中值，所有列选中值对应的索引                      |
| change  | 选项改变时触发 <br />注意：当传入多列数据时，返回值为数组格式。   | 单列：Picker 实例，选中值，选中值对应的索引 <br/> 多列：Picker 实例，所有列选中值，当前列对应的索引 |

#### Column 数据结构

当传入多列数据时，columns 为一个对象数组，数组中的每一个对象配置每一列，每一列有以下 key:

| 键名         | 说明                       | 类型     |
| :----------- | :------------------------- | :------- |
| values       | 列中对应的备选值           | string[] |
| defaultIndex | 初始选中项的索引，默认为 0 | number   |
| className    | 为对应列添加额外的类名     | any      |
| children     | 级联选项                   | Column   |

##### PS: 仅此借鉴 vant 组件结合使用
