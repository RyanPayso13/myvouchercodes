import { mount } from '@vue/test-utils'
import FilterItem from '@/components/Filter/FilterItem/FilterItem.vue'

describe('FilterItem.vue', () => {
  let wrapper
  const $route = {
    path: '/products',
    params: {
      category: 'filter'
    }
  }
  const $router = {
    push: jest.fn()
  }
  const $store = {
    dispatch: jest.fn()
  }

  beforeEach(() => {
    wrapper = mount(FilterItem, {
      mocks: {
        $route,
        $router,
        $store
      }
    })
  })

  it('should exist', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render a default label', () => {
    const btn = wrapper.find('button')
    expect(btn.text().includes('label')).toBe(true)
  })

  it('should render a default count', () => {
    const count = wrapper.find('button > div')
    expect(count.text()).toBe('0')
  })

  it('should render a props label', () => {
    const wrapper = mount(FilterItem, {
      mocks: {
        $route
      },
      propsData: {
        label: 'filter'
      }
    })
    const btn = wrapper.find('button')
    expect(btn.text().includes('filter')).toBe(true)
  })

  it('should render a props count', () => {
    const wrapper = mount(FilterItem, {
      mocks: {
        $route
      },
      propsData: {
        count: 99
      }
    })
    const count = wrapper.find('button > div')
    expect(count.text()).toBe('99')
  })

  it('should render an inactive border', () => {
    const wrapper = mount(FilterItem, {
      mocks: {
        $route: {
          params: {
            category: 'car'
          }
        }
      },
      propsData: {
        label: 'pet'
      }
    })
    const btn = wrapper.find('button')
    expect(btn.classes('border-red-500')).toBe(false)
    expect(btn.classes('border-blue-500')).toBe(true)
  })

  it('should render an active border', () => {
    const wrapper = mount(FilterItem, {
      mocks: {
        $route: {
          params: {
            category: 'car'
          }
        }
      },
      propsData: {
        label: 'car'
      }
    })
    const btn = wrapper.find('button')
    expect(btn.classes('border-red-500')).toBe(true)
    expect(btn.classes('border-blue-500')).toBe(false)
  })

  it('should navigate the products category', () => {
    const btn = wrapper.find('button')
    btn.trigger('click')
    expect(wrapper.vm.$router.push).toHaveBeenCalled()
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      path: '/products/label'
    })
  })

  it('should set the current filter', () => {
    const btn = wrapper.find('button')
    btn.trigger('click')
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalled()
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      'setCurrentFilter',
      {
        label: 'label',
        count: 0
      }
    )
  })
})
