## 浮标 API

### Props 参数

| 参数               | 说明                                       | 类型                      | 默认值                                    
| :----------------- | ----------------------------------- | :------------------------ | :-------
| customClass        | 自定义类名                                 | _string_                  | -                                         
| item-width         | 浮窗宽度,单位为 px                         | _number_                  | `76`                                      
| item-height        | 浮窗高度,单位为 px                         | _number_                  | `76`                                      
| gapWidth           | 浮标距离左右边框的距离                     | _number_                   | `14`
| get-container      | 指定挂载的节点                             | _string \| () => Element_ | `body`    
| closeIcon          | 是否显示关闭图标                            | _boolean_                 | `true`    

### Events 事件

| 事件       | 说明     |      回调参数       | 返回值 |
| ---------- | -------- | :-----------------: | :----: |
| clickEvent | 点击事件 | _event: MouseEvent_ |   -    |

### Slots 插槽

| 名称    | 说明       |
| ------- | ---------- |
| -       | 自定义内容 |
| close   | 关闭按钮   |
