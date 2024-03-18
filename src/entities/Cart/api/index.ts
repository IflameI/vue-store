import { API_URL } from '@/shared/config'
import axios from 'axios'
import type { ICreateOrderResponse } from '../model'
import type { IProduct } from '@/app/model'

const ORDERS_URL = `${API_URL}/orders`

export const Api = {
  createOrder: async (products: IProduct[], totalPrice: number) => {
    const options = {
      items: products,
      totalPrice
    }
    try {
      return await axios.post<ICreateOrderResponse>(`${ORDERS_URL}`, options)
    } catch (e) {
      throw new Error('Failed to create order')
    }
  }
}
