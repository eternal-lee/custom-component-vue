## 评分 API

### Props 参数

| 参数                | 说明                    | 类型      | 默认值    |
| :------------------ | ----------------------- | :-------- | :-------- |
| v-model(modelValue) | 当前分值                | _number_  | 0         |
| gutter              | 图标间距，默认单位为 px | _number_  | `2`       |
| color               | 选中的颜色              | _string_  | `#f00`    |
| voidColor           | 未选中时的颜色          | _string_  | `#c8c9cc` |
| size                | 图标大小，默认单位为 px | _number_  | `14`      |
| count               | 图标总数                | _number_  | `5`       |
| readonly            | 只读(目前只支持只读)    | _boolean_ | `true`    |
| allow-half          | 是否允许半选            | _boolean_ | `false`   |

```javascript
设置 allow-half 属性后可以选中半星

设置 readonly(默认为true) 和 allow-half 属性后，Rate 组件可以展示任意小数结果
```
