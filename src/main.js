/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

/*
 * export default 和 export 区别：
 * 1.export与export default均可用于导出常量、函数、文件、模块等
 * 2.你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
 * 3.在一个文件或模块中，export、import可以有多个，export default仅有一个
 * 4.通过export方式导出，在导入时要加{ }，export default则不需要
 */

// 使用export导出
import { buoyPopup } from './../packages/index.js'
// 使用export default导出
import customCom from './../packages/index.js'

Vue.use(buoyPopup)
Vue.use(customCom.customToast)
Vue.config.productionTip = false

console.log(process.env)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
