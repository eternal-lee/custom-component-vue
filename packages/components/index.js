import cusDialog from './dialog/index.vue'
import buoyPopup from './buoyPopup'

const components = { cusDialog, buoyPopup }

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
