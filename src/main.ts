import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DashboardLayout from './components/layouts/DashboardLayout.vue'
import EmptyLayout from './components/layouts/EmptyLayout.vue'
import './assets/main.css'
import 'v-calendar/dist/style.css'
import * as store from './core/store'
import * as request from './core/request'
import { createPinia } from 'pinia'
import Maska from 'maska'

const pinia = createPinia()

const app = createApp(App)
app.use(store.store, store.key)
app.use(Maska)
app.component('default-layout', DashboardLayout)
app.component('empty-layout', EmptyLayout)
app.provide(request.key, request.axios)
app.use(router)
app.use(pinia)
app.mount('#app')
