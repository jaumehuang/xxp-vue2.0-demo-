import Vue from 'vue'
import Router from 'vue-router'
//import banner from '@/components/banner'
import home from '@/view/home'
import classify from '@/view/classify'
import cart from '@/view/cart'
import person from '@/view/person'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      redirect: '/pages/'
    },
    {
    	 path: '/pages',
       component: home,
       name:"home"
    },
     {
    	 path: 'home',
       component: home,
       name:"home"
    },
    {
    	 path: 'classify',
       component: classify,
       name:"classify"
    },
    {
    	 path: 'cart',
       component: cart,
       name:"cart"
    },
    {
     	 path: 'person',
       component: person,
       name:"person"
    }

  ]
})
