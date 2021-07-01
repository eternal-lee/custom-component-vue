import * as type from './mutation-type'

const mutations = {
  [type.SET_USER_INFO](state, name) {
      state.userInfo.name = name
  }
}

export default mutations