import axios from 'axios'
import {
	Toast
} from 'vant'
import store from '@/store'
import router from '@/router'
import {
	baseURL
} from '@/config/index.js'
import {
	getToken
} from '@/utils/auth'
const service = axios.create({
	baseURL: baseURL,
	timeout: 60 * 1000
})

service.interceptors.request.use(
	config => {
		const token = getToken()
		if (token) {
			config.headers['X-Auth-Token'] = token
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	response => {
		console.log(response)
		const res = response.data
		const code = res.code
		switch (code) {
			case 200:
				if (res.data) {
					return Promise.resolve(res.data)
				} else {
					return Promise.resolve(res)
				}
				case 401:
					// console.log("退出")
					store.dispatch('user/resetUser')
					router.replace('/login')
					return Promise.reject()
				case 403:
					store.dispatch('user/resetUser')
					router.replace('/login')
					return Promise.reject()
				case 500:
					var msg = res && res.msg
					Toast.fail(msg ? msg : '网络异常稍后再试~')
					return Promise.reject(res)
				default:
					return Promise.resolve(res)
		}
	},
	error => {
		const status = error?.response?.status
		switch (status) {
			case 401:
				Toast.fail('登录状态失效')
				store.dispatch('user/resetUser')
				router.replace('/login')
				return Promise.reject(error)
			case 403:
				Toast.fail('登录状态失效')
				store.dispatch('user/resetUser')
				router.replace('/login')
				return Promise.reject(error)
			default:
				Toast.fail('网络异常稍后再试~')
				return Promise.reject(error)
		}
	}
)

export default service
