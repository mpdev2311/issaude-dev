import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import DashboardLayout from './components/layouts/DashboardLayout.vue'
import EmptyLayout from './components/layouts/EmptyLayout.vue'
import './assets/main.css';
import * as store from '../src/core/store/store';
import * as request  from '../src/core/services/request'

const app = createApp(App);
app.use(store.store, store.key);
app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);
app.provide(request.key, request.axios); 
app.use(router);
app.mount('#app');