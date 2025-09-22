import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './app/App.vue'
import router from './app/router'

import '@/shared/ui/styles/styles.scss'
import '@scaffold-org/scaffold-uikit/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
