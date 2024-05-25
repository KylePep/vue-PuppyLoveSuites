// import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'

const head = createHead()
const app = createApp(App)

app.use(router)
app.use(head)

app.mount('#app')
