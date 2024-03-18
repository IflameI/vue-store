<script setup>
defineProps({
  id: Number,
  img: String,
  title: String,
  price: Number
})
</script>

<template>
  <div class="relative flex w-full border border-slate-100 rounded-xl p-4 gap-4">
    <img :src="img" class="w-16 h-16" alt="Sneaker" />
    <div class="flex flex-col w-full">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-5">
        <span class="font-bold">{{ price }} руб.</span>
        <slot name="remove-button" />
      </div>
    </div>
  </div>
</template>
