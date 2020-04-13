import products from '@/middleware/products'

describe('Middleware/products', () => {
  it('should dispatch the action', () => {
    const store = {
      dispatch: jest.fn(),
      state: {
        currentFilter: {
          label: 'pet'
        }
      }
    }
    products({ store })
    expect(store.dispatch).toHaveBeenCalled()
  })
})
