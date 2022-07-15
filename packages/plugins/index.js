import dialog from './dialog/index.js'
import customToast from './customToast/index'

const plugins = { dialog, customToast }

const install = Vue => {
  for (const key in plugins) {
    if (plugins.hasOwnProperty(key)) {
      Vue.use(plugins[key])
    }
  }
}
// 如果是直接引入的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { install, dialog, customToast }
