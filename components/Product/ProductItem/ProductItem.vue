<template>
  <li class="m2">
    <div class="border-2 rounded my-4 pb-4 lg:pb-0">
      <h3 class="text-center text-xl border-b-2 p-4 lg:text-left">
        {{ product.name }}
      </h3>
      <div class="flex flex-col text-center lg:flex-row lg:text-left">
        <div
          class="flex-1 py-4 lg:pt-4 lg:pl-2 border-b-2 lg:border-b-0 lg:border-r-2"
        >
          <div
            v-for="(value, key) in product.features"
            :key="key"
            data-testid="feature"
            class="flex flex-row px-2"
          >
            <div class="capitalize mr-2 mb-2 text-right lg:text-left flex-1">
              {{ key | toFormattedKey }}:
            </div>
            <div
              v-if="key === 'cover-start-date'"
              class="flex-1 ml-2  mb-2 text-left"
            >
              {{ value | toDate }}
            </div>
            <div
              v-else-if="key === 'excess'"
              class="flex-1 ml-2 mb-2 text-left"
            >
              {{ value | toCurrency }}
            </div>
            <div v-else class="flex-1 ml-2 mb-2 text-left">
              {{ value }}
            </div>
          </div>
        </div>
        <div
          v-if="product.price"
          data-testid="price"
          class="flex-1 text-2xl py-4 border-b-2 lg:border-b-0 lg:p-0 lg:self-center lg:text-4xl lg:text-center"
        >
          <span class="self-end">{{ product.price | toCurrency }}</span>
        </div>
        <div
          class="flex-1 self-center pt-4 text-center lg:flex lg:flex-row lg:self-stretch lg:pt-0 lg:border-l-2"
        >
          <button
            class="relative border-2 hover:border-red-500 border-blue-500 rounded font-bold p-4 lg:self-center lg:mx-auto"
          >
            CTA
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
