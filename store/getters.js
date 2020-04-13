const getters = {
  groupedProductsByType: (state) => {
    return [...state.products].reduce(function(acc, obj) {
      const key = obj.product
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  },
  filterProductList: (state) => (filter = 'all') => {
    const list = [...state.products]
    return filter === 'all'
      ? list
      : list.filter((item) => item.product === filter)
  }
}

export default getters
