import { h, Teleport } from "@vue/runtime-dom"

export function renderTeleport(Component) {
  return {
    name: Component.name,
    render(ctx) {
      let { teleport } = ctx
      if (teleport){
        return h(
          Teleport,// 标签名称
          { to: teleport },
          h(Component)
        )
      }
      return h(Component)
    },
    props: {
      teleport: {
        type: [String, Function],
        default: 'body'
      }
    }
  }
}
