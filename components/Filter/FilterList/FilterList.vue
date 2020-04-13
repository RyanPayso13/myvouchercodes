<template>
  <nav class="flex flex-row justify-center lg:justify-start">
    <FilterItem
      v-for="(value, name) in groupedProductsByType"
      :key="name"
      :label="name"
      :count="value.length"
    />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterItem from '@/components/Filter/FilterItem/FilterItem.vue'

export default {
  name: 'FilterList',
  components: {
    FilterItem
  },
  computed: {
    ...mapGetters(['groupedProductsByType'])
  }
}
</script>
