export const baseURL = '/api'

// 闽政通登录
export const authURL = process.env.NODE_ENV == 'development' ?
	'http://10.0.9.62:8080/oauth2/authorization/haicangentappeal' :
	'https://qyfw.haicang.gov.cn/api/oauth2/authorization/haicangentappeal'
// export const authURL = 'http://10.0.9.62:8080/oauth2/authorization/haicangentappeal'