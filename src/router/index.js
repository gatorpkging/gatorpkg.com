import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import ServicesView from '@/views/ServicesView.vue'
import ContactView from "@/views/ContactView.vue";


const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { title: 'Gator Packaging | Home' }
  },
  {
    path: '/services',
    component: ServicesView,
    meta: { title: 'Gator Packaging | Services' }
  },
  {
    path: '/contact',
    component: ContactView,
    meta: { title: 'Gator Packaging | Contact' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Gator Packaging';
})

export default router;
