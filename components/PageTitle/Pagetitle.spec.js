import { mount } from '@vue/test-utils'
import PageTitle from '@/components/PageTitle/PageTitle.vue'

describe('PageTitle.vue', () => {
  let wrapper
  const filter = {
    label: 'Car',
    count: 99
  }

  beforeEach(() => {
    wrapper = mount(PageTitle, {
      computed: {
        filter: () => filter
      }
    })
  })

  it('should exist', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render the current filter', () => {
    expect(wrapper.find('h2').text()).toBe('Car 99')
  })
})
