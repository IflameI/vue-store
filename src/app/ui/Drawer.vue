<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { stores } from '@/entities/Cart/model'
import { CreateOrder } from '@/features/Cart/CreateOrder/ui'
import { CartProductList } from '@/widgets/Cart/CartProductList/ui'
import { DrawerHead } from './'
import { InfoBlock } from '@/shared/ui'

const store = stores.useCartStore()
const { productsInCart, totalPrice, vatPrice, orderId } = storeToRefs(store)
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead @close-drawer="store.toggleCart" />

    <div v-if="!totalPrice || orderId" class="flex items-center h-full">
      <InfoBlock
        v-if="!totalPrice && !orderId"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
        image-url="src/assets/icons/package-icon.png"
      />
      <InfoBlock
        v-if="orderId"
        title="Заказ оформлен!"
        :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
        image-url="src/assets/icons/order-success-icon.png"
      />
    </div>

    <div v-else>
      <CartProductList :products-in-cart="productsInCart" />

      <div class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }} ₽</b>
        </div>

        <div class="flex gap-2">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ vatPrice }} ₽</b>
        </div>

        <CreateOrder />
      </div>
    </div>
  </div>
</template>
