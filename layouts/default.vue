<template>
  <div class="container mx-auto mt-8 px-4">
    <FilterList />
    <nuxt />
  </div>
</template>

<script>
import FilterList from '@/components/Filter/FilterList/FilterList.vue'

export default {
  components: {
    FilterList
  },
  middleware: 'products'
}
</script>
