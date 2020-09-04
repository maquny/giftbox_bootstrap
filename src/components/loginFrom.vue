<template>
	<div>
		<slot></slot>
		<b-form @submit="onSubmit">
			<div class="from_1box">
				<b-form-group
				id="input-group-1"
				label="아이디"
				label-for="input-1"
				>
				<b-form-input
				id="input-1"
				v-model="form.id"
				type="email"
				required
				placeholder="아이디(이메일)을 입력해주세요."
				></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-2" label="비밀번호" label-for="input-2">
					<b-form-input
					id="input-2"
					v-model="form.password"
					required
					placeholder="비밀번호를 입력해주세요."
					></b-form-input>
				</b-form-group>

				<b-button type="submit" variant="primary" class="login_btn">로그인</b-button>
			</div>

			<b-form-group id="input-group-4">
				<b-form-checkbox v-model="form.checked" value="autoLogin">로그인 유지</b-form-checkbox>
			</b-form-group>
		</b-form>

		<div class="user_infor">
			<router-link to="/login/findId">아이디 찾기</router-link>
			<router-link to="/Hello/passwordRe">비밀번호 재설정</router-link>	
			<router-link to="/Hello" class="sign_up_btn">회원가입</router-link>	
		</div>
		
		<b-card class="mt-3" header="Form Data Result">
			<pre class="m-0">{{ form }}</pre>
		</b-card>
	</div>
</template>
<script>
	export default{
		name: 'loginFrom',
		data() {
			return {
				form: {
					id: '',
					password: '',
					checked: '',
				},
			}
		},
		methods: {
			onSubmit(evt) {
				console.log(this.form)
				evt.preventDefault()
				alert(JSON.stringify(this.form))
			}
		}
	}
</script>

<style scoped="">
.from_1box{padding:20px 0;border-bottom:solid 1px #ddd;margin-bottom:10px;}
.btn.login_btn{width:100%;border-radius:0;}
.user_infor{text-align:center;}
.user_infor a{color:#444;font-size:.75em;}
.user_infor a:first-child:before{display:none;}
.user_infor a:first-child + a:before{content:'/';display:inline-block;clear:both;padding:0 5px;}
.sign_up_btn{float:left;width:100%;background-color:#fff;height:40px;line-height:40px;text-align:center;color:#444;margin-top:10px;border:solid 1px #ccc;}
</style>