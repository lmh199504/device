import { reqUserInfo } from '@/api/user'
import { getToken, setToken, removeToken, removeInfo } from '@/utils/auth'
const state = {
	token: getToken(),
	userInfo: {}
}
const mutations = {
	SET_TOKEN: (state, token) => {
		setToken(token)
		state.token = token
	},
	SET_INFO: (state, info) => {
		state.userInfo = info
	}
}
const actions = {
	resetUser({ commit }) {
		commit('SET_TOKEN', '')
		commit('SET_INFO', {})
		removeInfo()
		removeToken()
	},
	getInfo({ commit }) {
		return new Promise((resolve, reject) => {
			reqUserInfo()
			.then(res => {
				commit('SET_INFO', res.data)
				resolve(res)
			})
			.catch(() => {
				reject('error')
			})
			
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
