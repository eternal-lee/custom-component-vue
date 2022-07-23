import buoypopup from './index.vue'

buoypopup.install = function(Vue) {
  if (buoypopup.install.installed) return false
  buoypopup.install.installed = true

  Vue.component(buoypopup.name, buoypopup)
}

export default buoypopup
