import vue from "vue";
import ToastComponent from "./toast.vue";

// eslint-disable-next-line no-unused-vars
var typeMap = ["success", "info", "warning", "error", "danger", "default"];

// 组件构造器，构造一个vue组件实例
const ToastConstructor = vue.extend(ToastComponent);

const showToast = options => {
  options = options || {};
  if (typeof options === "string") {
    options = {
      msg: options
    };
  }
  options.isShow = true;
  const instance = new ToastConstructor({
    el: document.createElement("div"),
    data: options
  });
  // 添加节点
  document.body.appendChild(instance.$el);
  // 过渡时间
  const timer = setTimeout(() => {
    instance.isShow = false;
    document.body.removeChild(instance.$el);
    clearTimeout(timer);
  }, options.duration || 1500);
};

typeMap.map(type => {
  showToast[type] = options => {
    if (typeof options === "string") {
      options = {
        msg: options
      };
    }
    options.type = type;
    return showToast(options);
  };
});
// 全局注册
const registryToast = () => {
  vue.prototype.$showMsgToast = showToast;
};

export default registryToast;
