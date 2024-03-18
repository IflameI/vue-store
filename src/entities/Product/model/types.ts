import type { IProduct } from '@/app/model'

export interface IFilters {
  sortBy: string
  title?: string
}

export interface IFavoritesResponse {
  id: number
  product: IProduct
}

export interface IAddToFavoriteResponse {
  id: number
}

export type IProductFilters = {
  sortBy: string
  title?: string | null
}
