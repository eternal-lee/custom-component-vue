import components from './components'
import * as plugins from './plugins/index'

import initRem from './utils/rem'

let custUtils = {
  components,
  plugins,
  initRem
}

const install = function(Vue) {
  Vue.use(components)
  Vue.use(plugins)
  Vue.prototype.$custUtils = custUtils
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export { components, plugins, initRem }

export default {
  ...custUtils,
  install
}
