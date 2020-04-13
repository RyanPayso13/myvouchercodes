import getters from '@/store/getters'
const data = [
  {
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
  },
  {
    id: 1,
    product: 'car',
    name: 'BMW 120d MSport 1995cc',
    price: 23400,
    features: {
      'cover-type': 'Comprehensive',
      claims: 'No previous claims',
      excess: 0,
      'protected-ncb': true,
      'additional-drivers': 'No additional drivers',
      'cover-start-date': '2018-10-22T00:00:00'
    }
  },
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
  },
  {
    id: 4,
    product: 'pet',
    name: 'Joey',
    features: { breed: 'Cat', 'cover-start-date': '2018-09-01T00:00:00' }
  }
]

describe('Getters', () => {
  it('should group the products by type', () => {
    const state = {
      products: data
    }
    const actual = getters.groupedProductsByType(state)
    expect(actual).toEqual({
      car: [
        {
          features: {
            'additional-drivers': 'No additional drivers',
            claims: 'No previous claims',
            'cover-start-date': '2018-10-23T00:00:00',
            'cover-type': 'Comprehensive',
            excess: 0,
            'protected-ncb': false
          },
          id: 0,
          name: 'BMW 330ci Sport Coupe 2979cc',
          price: 41033,
          product: 'car'
        },
        {
          features: {
            'additional-drivers': 'No additional drivers',
            claims: 'No previous claims',
            'cover-start-date': '2018-10-22T00:00:00',
            'cover-type': 'Comprehensive',
            excess: 0,
            'protected-ncb': true
          },
          id: 1,
          name: 'BMW 120d MSport 1995cc',
          price: 23400,
          product: 'car'
        },
        {
          features: {
            'additional-drivers': 'No additional drivers',
            claims: 'No previous claims',
            'cover-start-date': '2018-09-01T00:00:00',
            'cover-type': 'Comprehensive',
            excess: 500,
            'protected-ncb': true
          },
          id: 2,
          name: 'Hyundai Santa Fe Premium CRDI (4WD) 2199cc',
          price: 51410,
          product: 'car'
        }
      ],
      pet: [
        {
          features: { breed: 'Dog', 'cover-start-date': '2018-09-01T00:00:00' },
          id: 3,
          name: 'Benji',
          product: 'pet'
        },
        {
          features: { breed: 'Cat', 'cover-start-date': '2018-09-01T00:00:00' },
          id: 4,
          name: 'Joey',
          product: 'pet'
        }
      ]
    })
  })

  it('should return all the products', () => {
    const state = {
      products: data
    }
    const actual = getters.filterProductList(state)
    expect(actual()).toEqual(data)
  })

  it('should filter the products', () => {
    const state = {
      products: data
    }
    const actual = getters.filterProductList(state)
    expect(actual('pet')).toEqual([
      {
        features: { breed: 'Dog', 'cover-start-date': '2018-09-01T00:00:00' },
        id: 3,
        name: 'Benji',
        product: 'pet'
      },
      {
        features: { breed: 'Cat', 'cover-start-date': '2018-09-01T00:00:00' },
        id: 4,
        name: 'Joey',
        product: 'pet'
      }
    ])
  })
})
