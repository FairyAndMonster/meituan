const state = {
  curPosition:''
}
//action
const actions = {
  async getPosition({ commit, state }) {
    let { status, data } = await this.$axios.get('http://cp-tools.cn/geo/getPosition');
    if (status === 200) {
      const curPosition = data.province;
      commit('setPosition', { curPosition })
    }
    
  }
}

//mutations
const mutations = {
  setPosition(state, { curPosition }) {
    state.curPosition = curPosition
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}