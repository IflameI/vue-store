import type { IProduct } from '@/app/model'
import { defineStore } from 'pinia'
import { computed, ref, type ComputedRef, type Ref } from 'vue'
import { Api } from '../../api'

interface ICartStore {
  productsInCart: Ref<IProduct[]>
  totalPrice: ComputedRef<number>
  vatPrice: ComputedRef<number>
  orderId: Ref<number | null>
  isCartOpen: Ref<boolean>
  createOrder: () => Promise<void>
  toggleCart: () => void
  addProductToCart: (product: IProduct) => void
  removeProductFromCart: (productId: number) => void
  checkIsProductInCart: (productId: number) => boolean
}

const NAMESPACE = 'cart'

export const useCartStore = defineStore(NAMESPACE, (): ICartStore => {
  const productsInCart = ref<IProduct[]>(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : []
  )
  const isCartOpen = ref(false)
  const orderId = ref<number | null>(null)

  const totalPrice = computed(() => {
    return productsInCart.value.reduce((sum, product) => sum + product.price, 0)
  })

  const vatPrice = computed(() => {
    return Math.round((totalPrice.value * 5) / 100)
  })

  async function createOrder() {
    const { data } = await Api.createOrder(productsInCart.value, totalPrice.value)
    orderId.value = data.id

    productsInCart.value = []
    localStorage.setItem('cart', JSON.stringify(productsInCart.value))
  }

  function addProductToCart(product: IProduct) {
    productsInCart.value.push(product)
    localStorage.setItem('cart', JSON.stringify(productsInCart.value))
  }

  function removeProductFromCart(productId: number) {
    productsInCart.value = productsInCart.value.filter(
      (productInCart) => productInCart.id !== productId
    )
    localStorage.setItem('cart', JSON.stringify(productsInCart.value))
  }

  function checkIsProductInCart(productId: number) {
    return productsInCart.value.some((product) => product.id === productId)
  }

  function toggleCart() {
    isCartOpen.value = !isCartOpen.value
    orderId.value = null
  }

  return {
    productsInCart,
    totalPrice,
    vatPrice,
    isCartOpen,
    orderId,
    createOrder,
    toggleCart,
    addProductToCart,
    removeProductFromCart,
    checkIsProductInCart
  }
})
