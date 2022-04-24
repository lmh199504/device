
import request from '@/utils/request'

export const reqUserInfo = () => request({
	url: '/userinfo',
	method: 'GET'
})