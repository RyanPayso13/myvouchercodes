<template>
  <ul>
    <ProductItem
      v-for="product in productList"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>

<script>
import ProductItem from '@/components/Product/ProductItem/ProductItem'
export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  computed: {
    productList() {
      return this.$store.getters.filterProductList(this.$route.params.category)
    }
  }
}
</script>
