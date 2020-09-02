## custom-component-vue

### Install

```
npm i custom-component-vue -S

# OR

yarn add custom-component-vue --dev

```

### Usage

#### Import and registry

##### 方法一 (使用export default方式)
```
import customComVue from 'custom-component-vue'

import 'custom-component-vue/lib/custom-component-vue.css'

Vue.use(customComponent.customToast)

Vue.use(customComVue.buoyPopup)

// OR

Vue.component('buoy-popup', customComVue.buoyPopup)

```
#### 方法二 (使用export方式)
```
import { buoyPopup, customToast } from 'custom-component-vue'

import 'custom-component-vue/lib/custom-component-vue.css'

Vue.use(customToast)

Vue.use(buoyPopup)

// OR

Vue.component('buoy-popup', buoyPopup)

```

#### Wrap the content by buoyPopup

### 组件内使用：

```
<buoy-popup></buoy-popup>
```
```
this.$showMsgToast[`${type}`](msg)

// OR 

this.$showMsgToast({type: `${type}`,msg: `${msg]`)
```
### 组件模板：

```
<div
  class="buoyPopup"
  :class="addclass"
  @click="clickEvent"
  :style="{
    width: itemWidth + 'px',
    height: itemHeight + 'px',
    left: left + 'px',
    top: top + 'px'
  }"
  ref="buoyPopup"
>
  <slot />
</div>

```

---

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

* 注意： 发布npm 需要先运行 -> npm run lib

## export default 和 export 区别：

### 说明

1.export与export default均可用于导出常量、函数、文件、模块等

2.你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用

3.在一个文件或模块中，export、import可以有多个，export default仅有一个

4.通过export方式导出，在导入时要加{ }，export default则不需要

```
1.export
//a.js
export const str = "blablabla~";
export function log(sth) { 
  return sth;
}
对应的导入方式：

//b.js
import { str, log } from 'a'; //也可以分开写两次，导入的时候带花括号

2.export default
//a.js
const str = "blablabla~";
export default str;
对应的导入方式：

//b.js
import str from 'a'; //导入的时候没有花括号

```