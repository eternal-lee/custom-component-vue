import dialog from './dialog/index.js'

const plugins = { dialog }

const install = app => {
  if (install.installed) return false
  install.installed = true
  for (const key in plugins) {
    if (Object.prototype.hasOwnProperty.call(plugins, key)) {
      app.use(plugins[key])
    }
  }
}

export { install, dialog }
export default { install, dialog }
