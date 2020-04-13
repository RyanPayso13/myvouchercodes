import { mount, createLocalVue } from '@vue/test-utils'
import { toCurrency, toDate, toFormattedKey } from '@/plugins/filters'
import ProductItem from '@/components/Product/ProductItem/ProductItem.vue'

describe('ProductItem.vue', () => {
  let wrapper
  const $route = {
    path: '/products',
    params: {
      category: 'car'
    }
  }
  const $router = {
    push: jest.fn()
  }
  const product = {
    id: 0,
    product: 'car',
    name: 'BMW 330ci Sport Coupe 2979cc',
    price: 41033,
    features: {
      'cover-type': 'Comprehensive',
      claims: 'No previous claims',
      excess: 0,
      'protected-ncb': false,
      'additional-drivers': 'No additional drivers',
      'cover-start-date': '2018-10-23T00:00:00'
    }
  }

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(toCurrency)
    localVue.use(toDate)
    localVue.use(toFormattedKey)
    wrapper = mount(ProductItem, {
      localVue,
      mocks: {
        $route,
        $router
      },
      propsData: {
        product
      }
    })
  })

  it('should exist', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render a name', () => {
    const name = wrapper.find('h3')
    expect(name.text()).toBe(product.name)
  })

  it('should render a price', () => {
    const price = wrapper.find('[data-testid="price"]')
    expect(price.text()).toBe('£41,033')
  })

  it('should render a cta', () => {
    const cta = wrapper.find('button')
    expect(cta.text()).toBe('CTA')
  })

  it('should render additional details', () => {
    const details = wrapper.findAll('[data-testid="feature"] > div')
    expect(details.length).toEqual(12)
    expect(details.at(0).text()).toEqual('cover type:')
    expect(details.at(1).text()).toEqual('Comprehensive')
    expect(details.at(2).text()).toEqual('claims:')
    expect(details.at(3).text()).toEqual('No previous claims')
    expect(details.at(4).text()).toEqual('excess:')
    expect(details.at(5).text()).toEqual('£0')
    expect(details.at(6).text()).toEqual('protected ncb:')
    expect(details.at(7).text()).toEqual('false')
    expect(details.at(8).text()).toEqual('additional drivers:')
    expect(details.at(9).text()).toEqual('No additional drivers')
    expect(details.at(10).text()).toEqual('cover start date:')
    expect(details.at(11).text()).toEqual('10/23/2018')
  })
})
