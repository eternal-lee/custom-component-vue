import custpicker from './index.vue'

custpicker.install = function(Vue) {
  Vue.component(custpicker.name, custpicker)
}

export default custpicker
