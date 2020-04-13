const actions = {
  async getProducts({ commit }) {
    const result = await this.$axios.get(`${process.env.browserBaseUrl}`, {
      progress: true
    })
    commit('getProducts', result.data.quotes)
  },
  setCurrentFilter({ commit }, payload) {
    commit('setCurrentFilter', payload)
  }
}

export default actions
