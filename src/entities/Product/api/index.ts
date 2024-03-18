import { API_URL } from '@/shared/config'
import axios from 'axios'
import type { IProductFilters } from '../model/types'
import type { IProduct } from '@/app/model'

const SNEAKERS_URL = `${API_URL}/items`

export const Api = {
  getFavorites: async () => {
    try {
      return await axios.get<IProduct[]>(`${SNEAKERS_URL}?isFavorite=true`)
    } catch (e) {
      throw new Error('Failed to get list of favorites')
    }
  },
  getProducts: async (params: IProductFilters) => {
    try {
      return await axios.get<IProduct[]>(SNEAKERS_URL, {
        params
      })
    } catch (e: any) {
      throw new Error(`Failed to get list of products. ${e.message}`)
    }
  },
  addToFavorite: async (id: number) => {
    try {
      return await axios.patch<IProduct>(`${SNEAKERS_URL}/${id}`, {
        isFavorite: true
      })
    } catch (error) {
      throw new Error(`Failed to add product to favorites. ${error}`)
    }
  },
  removeFromFavorite: async (id: number) => {
    try {
      return await axios.patch<IProduct>(`${SNEAKERS_URL}/${id}`, {
        isFavorite: false
      })
    } catch (error) {
      throw new Error(`Failed to remove product from favorites. ${error}`)
    }
  }
}
