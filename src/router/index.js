import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/buttonGuide.vue'),
    },
    {
      path: '/buttonGuide',
      name: 'buttonGuide',
      component: () => import('../views/buttonGuide.vue'),
    },
    {
      path: '/selectboxGuide',
      name: 'selectboxGuide',
      component: () => import('../views/selectboxGuide.vue'),
    },
    {
      path: '/textInputGuide',
      name: 'textInputGuide',
      component: () => import('../views/textInputGuide.vue'),
    },
    {
      path: '/radioButtonGuide',
      name: 'radioButtonGuide',
      component: () => import('../views/radioButtonGuide.vue'),
    },
    {
      path: '/checkboxGuide',
      name: 'checkboxGuide',
      component: () => import('../views/checkboxGuide.vue'),
    },
    {
      path: '/pagingGuide',
      name: 'pagingGuide',
      component: () => import('../views/pagingGuide.vue'),
    },
    {
      path: '/switchGuide',
      name: 'switchGuide',
      component: () => import('../views/switchGuide.vue'),
    },
    {
      path: '/labelGuide',
      name: 'labelGuide',
      component: () => import('../views/labelGuide.vue'),
    },
    {
      path: '/tooltipGuide',
      name: 'tooltipGuide',
      component: () => import('../views/tooltipGuide.vue'),
    },
    {
      path: '/accordionGuide',
      name: 'accordionGuide',
      component: () => import('../views/accordionGuide.vue'),
    },
    {
      path: '/textGuide',
      name: 'textGuide',
      component: () => import('../views/textGuide.vue'),
    },
    {
      path: '/tableGuide',
      name: 'tableGuide',
      component: () => import('../views/tableGuide.vue'),
    },
    {
      path: '/flexBasisGuide',
      name: 'flexBasisGuide',
      component: () => import('../views/tailwind/flexBasisGuide.vue'),
    },
    {
      path: '/flexDirectionGuide',
      name: 'flexDirectionGuide',
      component: () => import('../views/tailwind/flexDirectionGuide.vue'),
    },
    {
      path: '/flexWrapGuide',
      name: 'flexWrapGuide',
      component: () => import('../views/tailwind/flexWrapGuide.vue'),
    }
  ],
})

export default router
