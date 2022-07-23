import components from './components'
import * as plugins from './plugins/index'

import buoypopup from './components/buoyPopup/index'
import custpicker from './components/picker/index'

import showDialog from './plugins/dialog/index'
import showToast from './plugins/customToast/index'

import initRem from './utils/rem'

let utils = {
  components,
  plugins,
  initRem,

  buoypopup,
  custpicker,
  showDialog,
  showToast
}

const install = Vue => {
  Vue.use(components)
  Vue.use(plugins)

  Vue.use(buoypopup)
  Vue.use(custpicker)
  Vue.use(showDialog)
  Vue.use(showToast)
  Vue.prototype.$utils = utils
}

export {
  components,
  plugins,
  initRem,
  buoypopup,
  custpicker,
  showDialog,
  showToast
}

export default {
  ...utils,
  install
}
