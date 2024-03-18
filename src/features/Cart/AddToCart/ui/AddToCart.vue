<script lang="ts" setup>
import { stores } from '@/entities/Cart/model'
import type { IProduct } from '@/app/model'

defineProps({
  product: {
    type: Object as () => IProduct,
    required: true
  }
})

const store = stores.useCartStore()

const onAddButtonClick = (product: IProduct) => {
  if (store.checkIsProductInCart(product.id)) {
    store.removeProductFromCart(product.id)
  } else {
    store.addProductToCart(product)
  }
}
</script>

<template>
  <img
    @click="() => onAddButtonClick(product)"
    :src="
      !store.checkIsProductInCart(product.id)
        ? 'src/assets/icons/plus.svg'
        : 'src/assets/icons/checked.svg'
    "
    alt="Plus"
  />
</template>
