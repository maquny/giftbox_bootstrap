import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
		login({ commit }, loginObj){
			axios
			.get(''+process.env.VUE_APP_BASE_URL+'/users/login/id/'+loginObj.id+'/pwd/'+loginObj.pwd+'/', { withCredentials: true })
			.then( res => {
 				if(res.status === 200){
 					router.push('/');
 				}
 			})
			.catch( err => {
				if(err.response.data.message === process.env.VUE_APP_LOGIN_MESSAGE){
					alert("정보가 일치하지 않습니다.\n다시 확인 후 시도해주세요.")
				} else {
					console.log(2)
				}
				console.log(err.response.data.message);
			});
		},

		// faqList({ commit }){
		// 	axios
		// 		.get(''+process.env.VUE_APP_FAQLIST)
		// 		.then( res => {
		//  				//성공시 token : 헤더에 포함시켜 요청
		//  				console.log(res.status, res);
		//  			})
		// 		.catch( err => {
		// 			if(err.response.data.message === process.env.VUE_APP_LOGIN_MESSAGE){
		// 				alert("정보가 일치하지 않습니다.\n다시 확인 후 시도해주세요.")
		// 			} else {
		// 				console.log(2)
		// 			}
		// 			console.log(err.response.data.message);
		// 		});
		// }
	},
	modules: {
	}
})

