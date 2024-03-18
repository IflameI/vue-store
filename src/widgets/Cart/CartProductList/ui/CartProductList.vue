<script setup lang="ts">
import type { IProduct } from '@/app/model'
import { CartProduct } from '@/entities/Cart'
import { RemoveFromCart } from '@/features/Cart/RemoveFromCart/ui'

defineProps<{
  productsInCart: IProduct[]
}>()
</script>

<template>
  <div class="flex flex-col flex-1 gap-4 justify-between" v-auto-animate>
    <CartProduct
      v-for="product in productsInCart"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :img="product.imageUrl"
      :price="product.price"
    >
      <template v-slot:remove-button>
        <RemoveFromCart :product-id="product.id" />
      </template>
    </CartProduct>
  </div>
</template>
