<script setup lang="ts">
import { stores } from '@/entities/Cart/model'
import { storeToRefs } from 'pinia'

const store = stores.useCartStore()
const { totalPrice } = storeToRefs(store)
const { toggleCart } = store
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img src="@/assets/img/logo.png" alt="Logo" class="w-11" />
        <div>
          <h2 class="font-bold text-xl uppercase">Vue Sneakers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li @click="toggleCart" class="flex items-center gap-3 cursor-pointer">
        <img src="@/assets/icons/cart.svg" alt="Cart" />
        <b>{{ totalPrice }} руб.</b>
      </li>
      <router-link to="/favorites">
        <li class="flex items-center gap-3 cursor-pointer">
          <img src="@/assets/icons/heart.svg" alt="Favorite" />
          <span>Закладки</span>
        </li>
      </router-link>
      <li class="flex items-center gap-3 cursor-pointer">
        <img src="@/assets/icons/profile.svg" alt="Favorite" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
