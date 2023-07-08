import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'

import { Button, Popup } from 'vant'
import 'vant/lib/index.css'

import customComponentVue from './../packages/index'
console.warn(customComponentVue)

const app = createApp(App)
app.use(router).use(store).use(vueAxios, axios)

app.use(Button).use(Popup)

app.use(customComponentVue)

app.config = {
  NODE_ENV: process.env.NODE_ENV
}
app.config.globalProperties.$axios = axios

console.warn('process.env.NODE_ENV', process.env.NODE_ENV)
app.mount('#app')
