import * as filters from '@/plugins/filters'

describe('Filters', () => {
  it('should format currency', () => {
    const price = 41033
    expect(filters.toCurrency(price)).toEqual('£41,033')
  })

  it('should format the object keys', () => {
    const key = 'my-key-value'
    expect(filters.toFormattedKey(key)).toEqual('my key value')
  })

  describe('Dates', () => {
    it('should format the date', () => {
      const d = '2018-10-23T00:00:00'
      expect(filters.toDate(d)).toEqual('10/23/2018')
    })

    it('should not format a number', () => {
      const d = 999
      expect(filters.toDate(d)).toEqual(999)
    })

    it('should not format an invalid date', () => {
      const d = '2018-10-33T00:00:00'
      expect(filters.toDate(d)).toEqual(d)
    })
  })
})
