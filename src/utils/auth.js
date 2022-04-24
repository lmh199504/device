
import Cookie from 'js-cookie'
const tokenKey = 'token'

export const getToken = () => {
	return Cookie.get(tokenKey)
}

export const removeToken = () => {
	Cookie.remove(tokenKey)
}

export const setToken = (token) => {
	Cookie.set(tokenKey, token)
}


// 用户信息保存
const userInfo = 'userInfo'

export const getInfo = () => {
	const data = Cookie.get(userInfo)
	return data ? JSON.parse(data) : undefined
}

export const removeInfo = () => {
	Cookie.remove(userInfo)
}
export const setInfo = (info) => {
	Cookie.set(userInfo, JSON.stringify(info))
}
