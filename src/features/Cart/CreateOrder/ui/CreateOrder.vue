<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { stores } from '@/entities/Cart/model'

const store = stores.useCartStore()
const { productsInCart, totalPrice } = storeToRefs(store)

const isCreatingOrder = ref<Boolean>(false)

const createOrder = async () => {
  await store.createOrder()
}

const cartIsEmpty = computed(() => productsInCart.value.length === 0)
const buttonDisabled = computed(() => isCreatingOrder.value || cartIsEmpty.value)
</script>

<template>
  <button
    :disabled="Boolean(buttonDisabled)"
    @click="createOrder"
    class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
  >
    {{ totalPrice ? 'Оформить заказ' : 'Добавьте хотя бы одну пару кроссовок' }}
  </button>
</template>
