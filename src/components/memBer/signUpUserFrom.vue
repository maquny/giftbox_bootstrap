<template>
	<div>
		<form @submit.prevent="submitForm">
		    <b-form-input
		      id="input-userId"
		      v-model="from.userId"
		      placeholder="Enter your userId"
		      v-on:blur="handleBlur"
		      trim
		    ></b-form-input>
		    <b-form-input
		      id="input-pwd"
		      v-model="from.pwd"
		      placeholder="Enter your pwd"
		      trim
		    ></b-form-input>
		    <b-form-input
		      id="input-tel"
		      v-model="from.tel"
		      placeholder="Enter your tel"
		      trim
		    ></b-form-input>
		    <b-form-input
		      id="input-mobileOperator"
		      v-model="from.mobileOperator"
		      placeholder="Enter your mobileOperator"
		      trim
		    ></b-form-input>
		    <b-form-input
		      id="input-birth"
		      v-model="from.birth"
		      placeholder="Enter your birth"
		      trim
		    ></b-form-input>
		    <b-form-input
		      id="input-gender"
		      v-model="from.gender"
		      placeholder="Enter your gender"
		      trim
		    ></b-form-input>
		    <b-form-input
		      id="input-email"
		      v-model="from.email"
		      placeholder="Enter your email"
		      trim
		    ></b-form-input>

		    <b-button variant="primary" class="login_btn" @click="submitForm(from)" >로그인</b-button>

		</form>
	</div>
</template>
<script>

    // "userId": "qwer1234@asdf.com",
    // "pwd": "12341234",    
    // "tel": "56781234",
    // "mobileOperator": "kt",
    // "birth": "880929",
    // "gender": "m",
    // "foreigner": null,
    // "email": "qwer1234@asdf.com",
    // "name": "송",
    // "ci": null

	import axios from "axios"

	export default{
		name: 'signUpUserFrom',
		data(){
			return {
				from: {
					userId: 'sdfun3@naver.com',
					pwd: '12341234',
					tel: '01026306793',
					mobileOperator: 'lg',
					birth: '830530',
					gender: 'm',
					email: 'sdfun3@naver.com',
				}
			}
		},
		methods: {
			
			submitForm(fromData) {
				axios
				.post('http://dev.back.makepin.co.kr:8080/users/signin/', fromData)
				.then( res => {
					console.log(res);
				})
				.catch( err => {
					console.log(err.response.data.message);
				});

				console.log(fromData);
			},

			handleBlur(){
				axios
				.get('http://dev.back.makepin.co.kr:8080/users/checkEmailDuplicate/'+this.from.userId+'', { withCredentials: true })
				.then( res => {
					console.log(res);
				})
				.catch( err => {
					console.log(err.response.data.message);
				});

			}
		},
	}
</script>

<style scoped="">

</style>