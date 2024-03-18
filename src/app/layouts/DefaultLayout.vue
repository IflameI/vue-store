<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { stores } from '@/entities/Cart/model'
import { Drawer, Header } from '../ui'

const store = stores.useCartStore()
const { isCartOpen } = storeToRefs(store)
</script>

<template>
  <Drawer v-if="isCartOpen" />

  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-20">
    <Header />

    <div class="p-10">
      <slot />
    </div>
  </div>
</template>
