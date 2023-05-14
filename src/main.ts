// ./src/main.ts

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import router from './router/routes'
import App from './App.vue'
import appVv from './app.vv'
import './css/tailwind.css'
import './gsap'
import './fontAwesome'
import './css/prism-theme-vars.css'

import Particles from 'vue3-particles'


const app = createApp(App)
const head = createHead()

app.provide('vv', appVv)

app.use(router)
app.use(head)
app.use(Particles)

app.mount('#app')
