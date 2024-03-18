<script setup lang="ts">
import type { IProduct } from '@/app/model'
import { ProductCard } from '@/entities/Product'
import { AddToFavorite } from '@/features/Product/AddToFavorite/ui'
import { AddToCart } from '@/features/Cart/AddToCart/ui'

defineProps({
  products: Array<IProduct>,
  isFavorites: Boolean
})
</script>

<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :img="product.imageUrl"
      :title="product.title"
      :price="product.price"
      :isFavorite="product.isFavorite"
    >
      <template v-slot:button-like>
        <AddToFavorite :id="product.id" :isFavorite="product.isFavorite" />
      </template>
      <template v-slot:add-to-cart-button>
        <AddToCart :product="product" />
      </template>
    </ProductCard>
  </div>
</template>
