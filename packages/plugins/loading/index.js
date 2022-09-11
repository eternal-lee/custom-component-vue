import { createApp, reactive } from 'vue'
import myLoad from './index.vue'

let _opts = reactive({
  visible: true
})

let _install = null
let _dom = null

const $load = opt => {
  const mountNode = document.createElement('div')
  _opts = {
    ..._opts,
    ...opt
  }

  _install = createApp(myLoad, {
    ..._opts,
    'onUpdate:visible': () => {
      $load.close()
    }
  }).mount(mountNode)

  if (_opts.getContainer) {
    _dom = document.querySelector(_opts.getContainer)
    _dom.appendChild(_install.$el)
    return
  }
  document.body.appendChild(_install.$el)
  return $load // 返回该实例
}

$load.show = $load
$load.close = () => {
  if (_opts.getContainer) {
    _install && _dom && _dom.removeChild(_install.$el)
  } else {
    _install && document.body.removeChild(_install.$el)
  }
  _install = null
}

$load.install = app => {
  app.config.globalProperties.$eterLoad = $load
}

export { $load }

export default $load
