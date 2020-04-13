import mutations from '@/store/mutations'

describe('Mutations', () => {
  it('should set the current filter', () => {
    const filter = {
      label: 'car',
      count: 99
    }
    const state = {
      currentFilter: null
    }
    mutations.setCurrentFilter(state, filter)
    expect(state).toEqual({
      currentFilter: filter
    })
  })

  it('should set the products', () => {
    const products = [
      {
        id: 2,
        product: 'car',
        name: 'Hyundai Santa Fe Premium CRDI (4WD) 2199cc',
        price: 51410,
        features: {
          'cover-type': 'Comprehensive',
          claims: 'No previous claims',
          excess: 500,
          'protected-ncb': true,
          'additional-drivers': 'No additional drivers',
          'cover-start-date': '2018-09-01T00:00:00'
        }
      },
      {
        id: 3,
        product: 'pet',
        name: 'Benji',
        features: { breed: 'Dog', 'cover-start-date': '2018-09-01T00:00:00' }
      }
    ]
    const state = {
      products: []
    }

    mutations.getProducts(state, products)
    expect(state).toEqual({
      products: [...products]
    })
  })
})
