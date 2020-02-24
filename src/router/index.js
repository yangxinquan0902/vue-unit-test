import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
