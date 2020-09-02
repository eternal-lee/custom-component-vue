## custom-component-vue

### Install

```
npm i custom-component-vue -S

# OR

yarn add custom-component-vue --dev

```

### Usage

#### Import and registry

```
import customComVue from 'custom-component-vue'

import 'custom-component-vue/lib/custom-component-vue.css'

Vue.use(customComponent.customToast)

Vue.use(customComVue.buoyPopup)

// OR

Vue.component('buoy-popup', customComVue.buoyPopup)

```

#### Wrap the content by buoyPopup

> 组件内使用：

```
<buoy-popup></buoy-popup>
```
```
this.$showMsgToast[`${type}`](msg)

// OR 

this.$showMsgToast({type: `${type}`,msg: `${msg]`)
```
> 组件模板：

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