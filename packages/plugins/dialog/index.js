import { createApp } from 'vue'
import DialogConstructor from './../../components/dialog/index.vue'

let _install = null
// 创建挂载实例
const mountNode = document.createElement('div')
let createMount = opts => {
  document.body.appendChild(mountNode)

  _install = createApp(DialogConstructor, {
    ...opts,
    remove() {
      $eterDialog.hide()
    }
  })
  return _install.mount(mountNode)
}

const $eterDialog = (options = {}) => {
  options.visible = true
  createMount(options)

  return $eterDialog
}

$eterDialog.hide = () => {
  _install && _install.unmount()
  _install && document.body.removeChild(mountNode)
  _install = null
}

$eterDialog.install = app => {
  app.config.globalProperties.$eterDialog = $eterDialog
}

export default $eterDialog
