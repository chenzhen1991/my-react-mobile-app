import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/layouts/basicLayout', routes: [
        { path: '/', component: '@/pages/index' },
        {
          path: '/',
          component: '@/layouts/SecurityLayout',
          routes: [
            { path: '/cart', component: '@/pages/cart/index' },
            { path: '/olist', component: '@/pages/olist/index' },
            { path: '/user', component: '@/pages/user/index' },
            { path: '/login', component: '@/pages/login/index' },
          ]
        }
      ]},
  ],
});
