import vue from 'vue'
import dialog from './index.vue'

// 组件构造器，构造一个vue组件实例
const ToastConstructor = vue.extend(dialog)
// eslint-disable-next-line no-unused-vars

let _instance = null

const showDialog = options => {
  return new Promise((resolve, reject) => {
    options = options || {}
    if (typeof options === 'string') {
      options = {
        msg: options
      }
    }
    _instance = new ToastConstructor({
      el: document.createElement('div'),
      data: options
    })
    // 添加节点
    document.body.appendChild(_instance.$el)
    _instance.callback = action => {
      if (action === 'confirm') {
        return resolve('confirm')
      } else if (action === 'cancel') {
        // document.body.removeChild(_instance.$el)
        return reject('cancel')
      }
    }

    window.addEventListener('hashchange', () => {
      _instance.doClose()
    })
    window.addEventListener('popstate', () => {
      _instance.doClose()
    })
  })
}

showDialog.hide = _ => {
  if (_instance) {
    return _instance.doClose()
  }
}

showDialog.show = showDialog

showDialog.install = Vue => {
  Vue.prototype.$showDialog = showDialog
}

export default showDialog
