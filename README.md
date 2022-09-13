# custom-component-vue

## Install

---

Using npm to install:

```javascript
// 最新版本
npm install custom-component-vue
```

## Quick start

---

<h3>Vue.js</h3>
You can import in your main.js file

```javascript
import customComVue from 'custom-component-vue'
import 'custom-component-vue/lib/custom-component-vue.css'

Vue.use(customComVue)
```

### 组件使用：

#### 详情见依赖包docs文件夹

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

#### $eterDialog API 附件

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
