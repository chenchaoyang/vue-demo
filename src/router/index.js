import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/page/home/home.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'
import test1 from '@/page/test/test1.vue'
import test2 from '@/page/test/test2.vue'
import test3 from '@/page/test/test3.vue'
import test4 from '@/page/test/test4.vue'
import test5 from '@/page/test/test5.vue'
let routers = [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '/test1',
      component: test1
    }, {
      path: '/test2',
      component: test2
    }, {
      path: '/test3',
      component: test3
    }, {
      path: '/test4',
      component: test4
    }, {
      path: '/test5',
      component: test5
    }]
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
];



export default new Router({
  routes: routers
})
