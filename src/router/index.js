import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Layout',
		component: Layout,
		redirect: '/home',
		children: [{
				path: 'home',
				name: 'Home',
				component: () => import('@/views/home'),
				meta: {
					title: '首页'
				}
			},
			{
				path: 'deviceCenter',
				name: 'DeviceCenter',
				component: () => import('@/views/deviceCenter'),
				meta: {
					title: '设备中心'
				}
			},
			{
				path: 'company',
				name: 'Company',
				component: () => import('@/views/company'),
				meta: {
					title: '资源单位'
				}
			},
			{
				path: 'mine',
				name: 'Mine',
				component: () => import('@/views/mine'),
				meta: {
					title: '资源单位'
				}
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login'),
		meta: {
			title: '登录'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
