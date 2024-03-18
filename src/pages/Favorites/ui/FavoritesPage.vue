<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { ProductList } from '@/widgets/ProductList'
import { stores } from '@/entities/Product/model'

const store = stores.useProductsStore()
const { products } = storeToRefs(store)

onMounted(async () => {
  await store.getFavoritesProducts()
})
</script>

<template>
  <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

  <ProductList :products="products" is-favorites />
</template>
