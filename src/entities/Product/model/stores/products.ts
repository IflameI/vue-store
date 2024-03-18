import { defineStore } from 'pinia'
import type { IProductFilters } from '../types'
import { ref, type Ref } from 'vue'
import { Api } from '../../api'
import type { IProduct } from '@/app/model'

interface IProductStore {
  products: Ref<IProduct[]>
  favorites: Ref<IProduct[]>
  getFavoritesProducts: () => Promise<void>
  addProductToFavorite: (id: number) => Promise<void>
  removeProductFromFavorite: (id: number) => Promise<void>
  getProducts: (sortBy: string, title?: string) => Promise<void>
}

const NAMESPACE = 'products'

export const useProductsStore = defineStore(NAMESPACE, (): IProductStore => {
  const products = ref<IProduct[]>([])
  const favorites = ref<IProduct[]>([])

  async function getProducts(sortBy: string, title?: string) {
    const params: IProductFilters = {
      sortBy
    }

    if (title) {
      params.title = `*${title}*`
    }

    const { data } = await Api.getProducts(params)
    products.value = data
  }

  async function getFavoritesProducts() {
    const { data } = await Api.getFavorites()
    products.value = data
  }

  async function addProductToFavorite(id: number) {
    await Api.addToFavorite(id)

    const product = products.value.find((product) => product.id === id)

    if (product) {
      product.isFavorite = true
    }
  }

  async function removeProductFromFavorite(id: number) {
    await Api.removeFromFavorite(id)

    const product = products.value.find((product) => product.id === id)

    if (product) {
      product.isFavorite = false
    }
  }

  return {
    products,
    favorites,
    getFavoritesProducts,
    addProductToFavorite,
    removeProductFromFavorite,
    getProducts
  }
})
