import { createRouter, createWebHashHistory } from "vue-router";

// Function to detect mobile devices
const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileAgents = [
    /android/, /webos/, /iphone/, /ipad/, /ipod/,
    /blackberry/, /windows phone/, /mobile/, /opera mini/
  ];
  const smallScreen = window.innerWidth <= 768;
  return mobileAgents.some(agent => userAgent.match(agent)) || smallScreen;
};

// Dynamic component loader
const loadView = (desktopPath, mobilePath) => {
  return isMobile()
    ? () => import(`@/views/mobile/${mobilePath}.vue`)
    : () => import(`@/views/desktop/${desktopPath}.vue`);
};

const routes = [
  {
    path: '/',
    component: loadView('HomeView', 'HomeView'),
    meta: { title: 'Gator Packaging | Home' }
  },
  {
    path: '/services',
    component: loadView('ServicesView', 'ServicesView'),
    meta: { title: 'Gator Packaging | Services' }
  },
  {
    path: '/contact',
    component: loadView('ContactView', 'ContactView'),
    meta: { title: 'Gator Packaging | Contact' }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Gator Packaging';
});

export default router;
