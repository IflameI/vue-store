<script setup lang="ts">
import { stores } from '@/entities/Cart/model'

defineProps({
  productId: {
    type: Number,
    required: true
  }
})

const store = stores.useCartStore()
const { removeProductFromCart } = store
</script>

<template>
  <img
    @click="() => removeProductFromCart(productId)"
    class="cursor-pointer opacity-30 hover:opacity-100 transition"
    src="../../../../assets/icons/close.svg"
    alt="Close"
  />
</template>
