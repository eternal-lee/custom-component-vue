# eterl-ui

## Install

---

Using npm to install:

```javascript
// 最新版本
npm install eterl-ui
```

## Quick start

---

<h3>Vue.js</h3>
You can import in your main.js file

```javascript
import customComVue from 'eterl-ui'
import 'eterl-ui/lib/eterl-ui.css'

Vue.use(customComVue)
```

### 组件使用：

<p style="color: red;cursor: pointer">eterBuoy：</p>

```javascript
<eter-buoy></eter-buoy>
```

<p style="color: red;cursor: pointer">eterDialog：</p>

```javascript
<eterDialog />
```

<p style="color: red;cursor: pointer">eterRate：</p>

```javascript
<eterRate v-model="" />
```

### 插件的使用

#### [$eterDialog API 附件](./docs//eterDialog.md)

##### Methods 方法

```javascript
// 显示
_self.$eterDialog()
// 隐藏弹窗
_self.$eterDialog.hide()

// OR
let _dialog = _self.$eterDialog()

_dialog.close()
```

#### $eterLoad() &emsp; API

##### Methods 方法

| 方法名 | 说明         | 参数    | 返回值 |
| :----- | :----------- | :------ | ------ |
| show   | 显示 loading | options |
| close  | 隐藏 loading |         |

```javascript
$eterLoad() // $eterLoad.show()
// 隐藏
_self.$eterLoad.close()

// OR
let loading = _self.$eterLoad()

loading.close()
```

##### Options 选项

| 属性         | 说明                           | 类型   | 默认值             |
| :----------- | :----------------------------- | :----- | ------------------ |
| zIndex       | 指定 loading 组件 dom 元素层级 | number | `()=>zIndexPlus()` |
| text         | 显示在加载图标下方的加载文案   | string |                    |
| getContainer | 挂载到指定容器 默认 body 上    | string | `body`             |

##### Picker Options 选项

方法：@pickerChange 得到对应索引值

| 属性             | 说明                           | 类型             | 默认值           |
| :--------------- | :----------------------------- | :--------------- | ---------------- | --- |
| defaultIndex     | 单列选择时，默认选中项的索引   | number \| string | 0                |
| columns          | 对象数组，配置每一列显示的数据 | Column[]         | []               |
| visibleItemCount | 可见的选项个数                 | string           | number \| string | 6   |
| itemHeight       | 选项高度 px                    | number \| string | 44               |
