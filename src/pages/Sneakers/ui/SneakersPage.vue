<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { ProductList } from '@/widgets/ProductList'
import { stores, type IFilters } from '@/entities/Product/model'

const store = stores.useProductsStore()
const { products } = storeToRefs(store)

const filters: IFilters = reactive({
  sortBy: 'title',
  title: ''
})

const onSelectChange = (event: Event) => {
  filters.sortBy = (event.target as HTMLSelectElement).value
}

const onSearchInputChange = (event: Event) => {
  filters.title = (event.target as HTMLInputElement).value
}

const fetchProducts = async () => {
  await store.getProducts(filters.sortBy, filters.title)
}

onMounted(async () => {
  await fetchProducts()
})

watch(filters, fetchProducts)
</script>

<template>
  <div class="flex justify-between items-center mb-10">
    <h1 class="text-3xl font-bold">Все кроссовки</h1>
    <div class="flex items-center gap-4">
      <select
        @change="onSelectChange"
        class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
      >
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>
      <div class="relative">
        <input
          @input="onSearchInputChange"
          type="text"
          class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
          placeholder="Поиск..."
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src="@/assets/icons/search.svg" />
        </div>
      </div>
    </div>
  </div>

  <div class="mt-10">
    <ProductList :products="products" />
  </div>
</template>
