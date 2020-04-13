<template>
  <h2 class="text-center text-3xl capitalize">
    {{ filter.label }} {{ filter.count }}
  </h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageTitle',
  computed: {
    ...mapState({
      filter: (state) => state.currentFilter
    })
  }
}
</script>
