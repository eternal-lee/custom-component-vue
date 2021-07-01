import { createApp } from 'vue'
import DialogConstructor from './../../components/dialog'

let $inst
// 创建挂载实例
let createMount = opts => {
  const mountNode = document.querySelector('body')
  document.body.appendChild(mountNode)

  const app = createApp(DialogConstructor, {
    ...opts,
    modelValue: true,
    remove() {
      app.unmount(mountNode)
      document.body.removeChild(mountNode)
    }
  })
  return app.mount(mountNode)
}

const $showDialog = (options = {}) => {
  options.visible = true
  $inst = createMount(options)

  return $inst
}

$showDialog.install = app => {
  app.config.globalProperties.$showDialog = $showDialog
}

export default $showDialog
