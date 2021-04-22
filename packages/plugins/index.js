import dialog from './dialog/index.js'

const plugins = { dialog }

const install = Vue => {
  Object.keys(plugins).map(item => {
    Vue.use(item)
  })
}
// 如果是直接引入的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { install, dialog }
export default { install, dialog }
