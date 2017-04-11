import Vue from 'vue'
import Router from 'vue-router'
import Resources from '@/components/Resources'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resources',
      component: Resources
    }
  ]
})
