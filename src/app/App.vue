<script lang="ts" setup>
import { ref, provide, watch, computed, type Ref } from 'vue'
import { DefaultLayout } from '@/app/layouts'
import type { IProduct } from './model'

export type Cart = {
  cart: Ref<IProduct[]>
  closeDrawer: () => void
  openDrawer: () => void
  removeFromCart: (item: IProduct) => void
  addToCart: (item: IProduct) => void
}

const cart = ref<IProduct[]>([])

const isDrawerOpen = ref<Boolean>(false)

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0)
})

const vatPrice = computed(() => {
  return Math.round((totalPrice.value * 5) / 100)
})

const closeDrawer = () => {
  isDrawerOpen.value = false
}

const openDrawer = () => {
  isDrawerOpen.value = true
}

const addToCart = (item: IProduct) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item: IProduct) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart
})

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)
</script>

<template>
  <DefaultLayout>
    <router-view> </router-view>
  </DefaultLayout>
</template>

<style lang="scss">
@import 'styles/style';
</style>
