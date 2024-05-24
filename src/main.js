// import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'

const app = createApp(App)

app.use(router)
app.use(Meta)

app.mount('#app')
