import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import GitGuide from './components/GitGuide.vue'
import Repos from './components/Repos.vue'
import Contribute from './components/Contribute.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/git', component: GitGuide },
  { path: '/repos', component: Repos },
  { path: '/contribute', component: Contribute }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
