import components from './components'
import * as plugins from './plugins/index'

import initRem from './utils/rem'

let utils = {
  components,
  plugins,
  initRem
}

const install = Vue => {
  Vue.use(components)
  Vue.use(plugins)
  Vue.prototype.$utils = utils
}

export { components, plugins, initRem }

export default {
  ...utils,
  install
}
