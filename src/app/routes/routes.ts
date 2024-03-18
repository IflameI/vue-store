import { createRouter, createWebHistory } from 'vue-router'

export enum RoutesLabelEnum {
  Sneakers = 'Sneakers',
  Favorites = 'Favorites'
}

export enum RoutesLinkEnum {
  Sneakers = '/',
  Favorites = '/favorites'
}

const routes = [
  {
    path: RoutesLinkEnum.Sneakers,
    name: RoutesLabelEnum.Sneakers,
    component: () => import('@/pages/Sneakers')
  },
  {
    path: RoutesLinkEnum.Favorites,
    name: RoutesLabelEnum.Favorites,
    component: () => import('@/pages/Favorites')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
