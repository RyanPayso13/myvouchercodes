import { mount } from '@vue/test-utils'
import FilterList from '@/components/Filter/FilterList/FilterList.vue'

describe('FilterList.vue', () => {
  let wrapper
  const $route = {
    params: {
      category: ''
    }
  }

  beforeEach(() => {
    wrapper = mount(FilterList, {
      mocks: {
        $route
      },
      computed: {
        groupedProductsByType: () => {
          return {
            car: [
              { id: 0, name: 'BMW 330ci Sport Coupe 2979cc' },
              { id: 1, name: 'BMW 120d MSport 1995cc' }
            ],
            pet: [
              { id: 2, name: 'Joey' },
              { id: 3, name: 'Benji' }
            ]
          }
        }
      }
    })
  })

  it('should exist', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render the filters', () => {
    const filters = wrapper.findAll('button')
    expect(filters.length).toEqual(2)
  })
})
