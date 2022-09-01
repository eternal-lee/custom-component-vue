import { createApp } from 'vue'
import DialogConstructor from './../../components/dialog/index.vue'

let $inst
let _install = null
// 创建挂载实例
const mountNode = document.createElement('div')
let createMount = opts => {
  document.body.appendChild(mountNode)

  _install = createApp(DialogConstructor, {
    ...opts,
    remove() {
      $showDialog.hide()
    }
  })
  return _install.mount(mountNode)
}

const $showDialog = (options = {}) => {
  options.visible = true
  $inst = createMount(options)

  return $inst
}

$showDialog.hide = () => {
  _install.unmount()
  document.body.removeChild(mountNode)
  _install = null
}

$showDialog.install = app => {
  app.config.globalProperties.$showDialog = $showDialog
}

export default $showDialog
