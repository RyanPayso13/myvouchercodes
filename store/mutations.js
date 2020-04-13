const mutations = {
  setCurrentFilter(state, payload) {
    state.currentFilter = payload
  },
  getProducts(state, payload) {
    state.products = payload
  }
}

export default mutations
