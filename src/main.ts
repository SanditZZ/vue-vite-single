import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

import Particles from "vue3-particles";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(Particles);
app.mount('#app')
