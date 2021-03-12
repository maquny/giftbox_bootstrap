import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfor: null,
		isLogin: false,
		isLoginError: false,
		deviceType: '',
		userData: []
	},
	getters: {
		doubleCounter: function (state) {
			return state.isLogin
		}
	},
	mutations: {
		logInSuccess(state, payLoad){
			state.isLogin = true
			state.isLoginError = false
			state.userInfor = payLoad
			localStorage.setItem('loginSta', state.isLogin);
		},

		logInError(state){
			state.isLogin = false
			state.isLoginError = true
		},

		logOut(state){
			state.isLogin = false
			state.isLoginError = true
			state.userInfor= null
			localStorage.setItem('loginSta', state.isLogin);
		},

		deviceValue(state, payLoad){
			state.deviceType = payLoad
		},

		userDataValue(state, payLoad){
			state.userData = payLoad
		},

	},
	actions: {
		login({ commit }, loginObj){
			axios
			.post(''+process.env.VUE_APP_BASE_URL+'/users/login/', loginObj,{ withCredentials: true })
			.then( res => {
				if(res.status === 200){
					commit('logInSuccess', res.data.name)
					router.push({name: 'Home', path: '/'})
				}
			})
			.catch( err => {
				commit('logInError')
				if(err.response.data.message === process.env.VUE_APP_LOGIN_MESSAGE){
					alert("정보가 일치하지 않습니다.\n다시 확인 후 시도해주세요.")
				} else {
					// console.log(2)
				}

				if(err.response.data.message == "suspended user"){
					alert("정보가 일치하지 않습니다.\n다시 확인 후 시도해주세요.")
				}
			});
		},

		checkSession: function({ commit }){
			this.dispatch('mutationsCheckSession').then(function(userSta) {
				if(userSta.status != 200){
					commit('logOut')
				} else {
					commit('logInSuccess', userSta.data.name)
				}
			});
		},

		mutationsCheckSession(){
			return new Promise(function(resolve, reject) {
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/info/', { withCredentials: true })
				.then( res => {
					resolve(res);
				})
				.catch( err => {
					resolve('err');
				});
			});
		},

		userDataVal: function({ commit }, data){
			commit('userDataValue', data)
		},

		checkDevice: function({ commit }, data){
			commit('deviceValue', data)
		},

		logOut({ commit }){
			axios
			.get(process.env.VUE_APP_BASE_URL+'/logout', {withCredentials: true})
			.then( res => {
				commit('logOut')
				if(router.history.current.name != 'Home'){
					router.push({name: 'Home', path: '/'})
				}
			})
			.catch( err => {
				// console.log(err);
			});
		}
	},
	modules: {
	}
})

