<template>
  <div>
    <PageTitle v-if="filter.label !== null" />
    <ProductList v-if="products.length > 0" />
    <nuxt-child />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageTitle from '@/components/PageTitle/PageTitle.vue'
import ProductList from '@/components/Product/ProductList/ProductList'

export default {
  components: {
    PageTitle,
    ProductList
  },
  computed: {
    ...mapState({
      filter: (state) => state.currentFilter,
      products: (state) => state.products
    })
  }
}
</script>
