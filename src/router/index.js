import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const home = r => require.ensure([], () => r(require('../views/home.vue')), 'home');
const choose = r => require.ensure([], () => r(require('../components/severContent.vue')), 'choose');
const list = r => require.ensure([], () => r(require('../components/showList.vue')), 'list');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      children:[
        {
          path:'choose',
          name:'Choose',
          component:choose,
        },
        {
          path:'list',
          name:'List',
          component:list,
        }
      ]
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
