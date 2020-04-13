import { mount, createLocalVue } from '@vue/test-utils'
import { toCurrency, toDate, toFormattedKey } from '@/plugins/filters'
import ProductList from '@/components/Product/ProductList/ProductList.vue'

describe('ProductList.vue', () => {
  let wrapper
  const $route = {
    params: {
      category: 'pet'
    }
  }

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(toCurrency)
    localVue.use(toDate)
    localVue.use(toFormattedKey)
    wrapper = mount(ProductList, {
      localVue,
      mocks: {
        $route
      },
      computed: {
        productList: () => {
          return [
            {
              features: {
                breed: 'Dog',
                'cover-start-date': '2018-09-01T00:00:00'
              },
              id: 3,
              name: 'Benji',
              product: 'pet'
            },
            {
              features: {
                breed: 'Cat',
                'cover-start-date': '2018-09-01T00:00:00'
              },
              id: 4,
              name: 'Joey',
              product: 'pet'
            }
          ]
        }
      }
    })
  })

  it('should exist', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render the products', () => {
    const quotes = wrapper.findAll('.m2')
    expect(quotes.length).toEqual(2)
  })
})
