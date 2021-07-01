let actions = {
  asyncGetUserInfo({ commit }) {
    setTimeout( () => {
      commit("getUserInfo", + new Date + 'action')
    })
  }
}


export default actions