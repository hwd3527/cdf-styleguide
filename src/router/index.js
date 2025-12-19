import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/modalGuide',
      name: 'modalGuide',
      component: () => import('../views/modalGuide.vue'),
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
    },
    {
      path: '/flexGuide',
      name: 'flexGuide',
      component: () => import('../views/tailwind/flexGuide.vue'),
    },
    {
      path: '/flexGrowGuide',
      name: 'flexGrowGuide',
      component: () => import('../views/tailwind/flexGrowGuide.vue'),
    },
    {
      path: '/flexShrinkGuide',
      name: 'flexShrinkGuide',
      component: () => import('../views/tailwind/flexShrinkGuide.vue'),
    },
    {
      path: '/orderGuide',
      name: 'orderGuide',
      component: () => import('../views/tailwind/orderGuide.vue'),
    },
    {
      path: '/gridTempColGuide',
      name: 'gridTempColGuide',
      component: () => import('../views/tailwind/gridTempColGuide.vue'),
    },
    {
      path: '/gridColGuide',
      name: 'gridColGuide',
      component: () => import('../views/tailwind/gridColGuide.vue'),
    },
    {
      path: '/gridTempRowGuide',
      name: 'gridTempRowGuide',
      component: () => import('../views/tailwind/gridTempRowGuide.vue'),
    },
    {
      path: '/gridRowGuide',
      name: 'gridRowGuide',
      component: () => import('../views/tailwind/gridRowGuide.vue'),
    },
    {
      path: '/gridRowGuide',
      name: 'gridRowGuide',
      component: () => import('../views/tailwind/gridRowGuide.vue'),
    },
    {
      path: '/gridAutoFlowGuide',
      name: 'gridAutoFlowGuide',
      component: () => import('../views/tailwind/gridAutoFlowGuide.vue'),
    },
    {
      path: '/gridAutoColGuide',
      name: 'gridAutoColGuide',
      component: () => import('../views/tailwind/gridAutoColGuide.vue'),
    },
    {
      path: '/gridAutoRowGuide',
      name: 'gridAutoRowGuide',
      component: () => import('../views/tailwind/gridAutoRowGuide.vue'),
    },
    {
      path: '/gapGuide',
      name: 'gapGuide',
      component: () => import('../views/tailwind/gapGuide.vue'),
    },
    {
      path: '/justifyContentGuide',
      name: 'justifyContentGuide',
      component: () => import('../views/tailwind/justifyContentGuide.vue'),
    },
    {
      path: '/justifyItemsGuide',
      name: 'justifyItemsGuide',
      component: () => import('../views/tailwind/justifyItemsGuide.vue'),
    },
    {
      path: '/justifySelfGuide',
      name: 'justifySelfGuide',
      component: () => import('../views/tailwind/justifySelfGuide.vue'),
    },
    {
      path: '/alignContentGuide',
      name: 'alignContentGuide',
      component: () => import('../views/tailwind/alignContentGuide.vue'),
    },
    {
      path: '/alignItemsGuide',
      name: 'alignItemsGuide',
      component: () => import('../views/tailwind/alignItemsGuide.vue'),
    },
    {
      path: '/alignSelfGuide',
      name: 'alignSelfGuide',
      component: () => import('../views/tailwind/alignSelfGuide.vue'),
    },
    {
      path: '/placeContentGuide',
      name: 'placeContentGuide',
      component: () => import('../views/tailwind/placeContentGuide.vue'),
    },
    {
      path: '/placeItemsGuide',
      name: 'placeItemsGuide',
      component: () => import('../views/tailwind/placeItemsGuide.vue'),
    },
    {
      path: '/placeSelfGuide',
      name: 'placeSelfGuide',
      component: () => import('../views/tailwind/placeSelfGuide.vue'),
    },
    {
      path: '/paddingGuide',
      name: 'paddingGuide',
      component: () => import('../views/tailwind/paddingGuide.vue'),
    },
    {
      path: '/marginGuide',
      name: 'marginGuide',
      component: () => import('../views/tailwind/marginGuide.vue'),
    },
    {
      path: '/widthGuide',
      name: 'widthGuide',
      component: () => import('../views/tailwind/widthGuide.vue'),
    },
  ],
})

export default router
