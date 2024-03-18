import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'
import { router } from './routes'
import { store } from './store/store'

export const application = createApp(App).use(router).use(store).use(autoAnimatePlugin)
