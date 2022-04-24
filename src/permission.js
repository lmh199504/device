import store from '@/store'
import router from '@/router'

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
	const { token } = to.query
	if(token) {
		store.commit("user/SET_TOKEN", token)
		next('/')
	} else if(whiteList.includes(to.path)) {
		next()
	} else if( store.state.user.token ) {
		await store.dispatch('user/getInfo')
		next()
	} else {
		next('/login')
	}
})