<script setup lang="ts">
import { stores } from '@/entities/Product/model'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  isFavorite: Boolean
})
const store = stores.useProductsStore()

const addToFavorite = async () => {
  await store.addProductToFavorite(props.id)
}

const removeFromFavorite = async () => {
  await store.removeProductFromFavorite(props.id)
}

const onClickFavoriteButton = () => {
  if (!props.isFavorite) {
    addToFavorite()
  } else {
    removeFromFavorite()
  }
}
</script>

<template>
  <div @click="onClickFavoriteButton">
    <img
      :src="isFavorite ? 'src/assets/icons/like-2.svg' : 'src/assets/icons/like-1.svg'"
      alt="Favorite"
    />
  </div>
</template>
