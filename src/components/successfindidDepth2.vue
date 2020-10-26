<template>
	<div>
		<slot></slot>

		<b-form @submit="phoneSubmit" name="pageName">
			<div class="from_2box">
				<b-form-group
				id="input-group-phone"
				label-for="input-password"
				label="새로운 비밀번호"
				>
				<b-form-input
				id="input-password"
				v-model="form.password"
				type="text" 
				required
				maxlength="15"
				placeholder="영문/숫자/특수문자 조합 4~15자리"
				></b-form-input>
				</b-form-group>

				<b-form-group
				id="input-group-repassword"
				label-for="input-repassword"
				label="새로운 비밀번호 확인"
				>
				<b-form-input
				id="input-repassword2"
				v-model="form.rePassword"
				type="text"
				required
				maxlength="15"
				placeholder="영문/숫자/특수문자 조합 4~15자리"
				></b-form-input>
				</b-form-group>

				<b-button type="submit" variant="secondary" class="login_btn">비밀번호 재설정</b-button>
			</div>
		</b-form>

		<b-card class="mt-3" header="Form Data Result">
			<pre class="m-0">{{ form }}</pre>
		</b-card>
	</div>
</template>
<script>
	export default{
		name: 'successfindidDepth2',
		data() {
			return {
				form: {
					password:'',
					rePassword: ''
				},
			}
		},
		methods: {
			phoneSubmit(evt) {
				console.log(this.form.phone)
				if(this.form.phone.length >= 11){
					//success this.$router.push({ name: 'login', params: {page: 'successfindidDepth2'}})
					
					evt.preventDefault()
					alert(JSON.stringify(this.form))
				} else {
					alert('휴대폰번호 형식이 올바르지 않습니다.')
				}
				
			},
			phoneNum(){
				return this.form.phone = this.form.phone.replace(/[^0-9]/g, '');
			}
		}
	}
</script>

<style scoped="">
.from_2box{padding:20px 0;border-bottom:solid 1px #ddd;margin-bottom:10px;}
.btn.login_btn{width:100%;border-radius:0;}
.sub_text p{font-size:.75em;margin-bottom:.4rem;}
</style>