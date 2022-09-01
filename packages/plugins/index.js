import dialog from './dialog/index.js'
import loading from './loading/index'

const plugins = { dialog, loading }

const install = app => {
  if (install.installed) return false
  install.installed = true
  for (const key in plugins) {
    if (Object.prototype.hasOwnProperty.call(plugins, key)) {
      app.use(plugins[key])
    }
  }
}

export { install, dialog, loading }
export default { install, ...plugins }
