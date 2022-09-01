import components from './components'
import * as plugins from './plugins'

const install = app => {
  if (install.installed) return false
  install.installed = true
  for (const key in components) {
    if (Object.prototype.hasOwnProperty.call(components, key)) {
      const component = components[key]
      app.component(component.name, component)
    }
  }
  // 插件的使用use 
  app.use(plugins)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  components,
  plugins
}

export default {
  install,
  components,
  plugins
}
