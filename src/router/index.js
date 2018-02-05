import Vue from 'vue'
import Router from 'vue-router'
//import banner from '@/components/banner'
import home from '../view/home'
import classify from '@/view/classify'
import cart from '@/view/cart'
import person from '@/view/person'
import detail from '@/view/detail'
import pageView from '../view/pageView'
Vue.use(Router)

export default new Router({
	routes: [

		{
			path: '/',
			redirect: '/pages/'
		},
		{
			path: '/pages',
			component: pageView,
			children: [

				{
					path: '',
					redirect: '/pages/'
				},
				{
					path: 'home',
					component: home,
					name: "home"
				},
				{
					path: 'classify',
					component: classify,
					name: "classify"
				},
				{
					path: 'cart',
					component: cart,
					name: "cart"
				},
				{
					path: 'person',
					component: person,
					name: "person"
				},
			]
		},

		{
			path: 'detail',
			name: 'detail',
			component: detail
		}

	]
})