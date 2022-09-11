import eterDialog from './dialog/index.vue'
import eterBuoy from './eterBuoy/index.vue'
import eterRate from './eterRate/index.vue'

const components = { eterDialog, eterBuoy, eterRate }

const install = app => {
  if (install.installed) return false
  install.installed = true
  for (const key in components) {
    if (Object.prototype.hasOwnProperty.call(components, key)) {
      const component = components[key]
      app.component(component.name, component)
    }
  }
}

export default {
  install,
  ...components
}
