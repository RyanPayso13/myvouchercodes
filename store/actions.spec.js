import axios from 'axios'
import actions from '@/store/actions'
jest.mock('axios')

describe('Actions', () => {
  it('should set the current filter', () => {
    const commit = jest.fn()
    const payload = {
      label: 'filter',
      count: 99
    }

    actions.setCurrentFilter(
      { commit },
      {
        label: 'filter',
        count: 99
      }
    )
    expect(commit).toHaveBeenCalled()
    expect(commit).toHaveBeenCalledWith('setCurrentFilter', payload)
  })

  it('should get the products', async () => {
    actions.$axios = axios
    const commit = jest.fn()
    const data = {
      quotes: [{ id: 0 }, { id: 1 }, { id: 2 }]
    }
    actions.$axios.get.mockResolvedValue({ data })

    await actions.getProducts({ commit })
    expect(actions.$axios.get).toHaveBeenCalled()
    expect(commit).toHaveBeenCalled()
    expect(commit).toHaveBeenCalledWith('getProducts', data.quotes)
  })
})
