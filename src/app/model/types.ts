export type IProduct = {
  id: number
  imageUrl: string
  title: string
  price: number
  item_id?: number
  favoriteId?: number | null
  isFavorite: boolean
  isAdded?: boolean
}
