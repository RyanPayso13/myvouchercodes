import Vue from 'vue'

export const toCurrency = (value) => {
  if (isNaN(value)) {
    return value
  }
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0
  })
  return formatter.format(value)
}

export const toDate = (value) => {
  const d = new Date(value)
  return isNaN(Date.parse(value)) || typeof value !== 'string'
    ? value
    : d.toLocaleDateString()
}

export const toFormattedKey = (value) => {
  return typeof value !== 'string' ? value : value.split('-').join(' ')
}

Vue.filter('toCurrency', toCurrency)
Vue.filter('toDate', toDate)
Vue.filter('toFormattedKey', toFormattedKey)
