import { createApp, reactive } from 'vue'
import myLoad from './index.vue'

let _opts = reactive({
  visible: true
})

let _install = null

const $load = opt => {
  const mountNode = document.createElement('div')

  _install = createApp(myLoad, {
    ..._opts,
    ...opt,
    'onUpdate:visible': () => {
      $load.hide()
    }
  }).mount(mountNode)

  document.body.appendChild(_install.$el)
}

$load.show = $load
$load.hide = () => {
  _install && document.body.removeChild(_install.$el)
  _install = null
}

$load.install = app => {
  app.config.globalProperties.$myLoad = $load
}

export { $load }

export default $load
