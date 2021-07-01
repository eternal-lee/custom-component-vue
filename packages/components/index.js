import cusDialog from './dialog/index.vue'

const components = { cusDialog }

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
