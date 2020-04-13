<template>
  <div class="m-2">
    <button
      class="capitalize relative border-2 hover:border-red-500 text-grey-500 p-6 rounded font-bold overflow-visible"
      :class="activeFilterClass"
      @click="setActiveFilter()"
    >
      {{ label }}
      <div
        class="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 text-white bg-red-500 rounded-full"
      >
        {{ count }}
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterItem',
  props: {
    label: {
      type: String,
      default: 'label'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    activeFilterClass() {
      return this.$route.params.category === this.label
        ? 'border-red-500'
        : 'border-blue-500'
    }
  },
  methods: {
    setActiveFilter() {
      this.$store.dispatch('setCurrentFilter', {
        label: this.label,
        count: this.count
      })
      this.$router.push({ path: `/products/${this.label}` })
    }
  }
}
</script>
