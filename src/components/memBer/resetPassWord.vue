<template>
	<div>
		<slot></slot>
		<div>
			아래 정보 확인 후 비밀번호를 재설정하세요.<br/>
			비밀번호는 고객센터에서 안내 또는 수정이 불가합니다
		</div>

		<b-form @submit="phoneSubmit">
			<div class="from_2box">
				<b-form-group
				id="input-group-id"
				label-for="input-id"
				>
				<b-form-input
				id="input-id"
				v-model="form.id"
				type="email"
				required
				placeholder="아이디(이메일)을 입력해주세요."
				></b-form-input>
				</b-form-group>

				<b-form-group
				id="input-group-phone"
				label-for="input-phone"
				>
				<b-form-input
				id="input-phone"
				v-model="form.phone"
				type="text" 
				required
				@keyup="phoneNum"
				maxlength="11"
				placeholder="휴대폰번호 - 제외 후 입력해주세요."
				></b-form-input>
				</b-form-group>

				<b-form-group
				id="input-group-name"
				label-for="input-name"
				>
				<b-form-input
				id="input-name"
				v-model="form.name"
				type="text"
				required
				placeholder="가입자 이름 입력해주세요."
				></b-form-input>
				</b-form-group>

				<b-button type="submit" variant="secondary" class="login_btn">다음</b-button>
			</div>
		</b-form>

		<div class="sub_text">
			<p>* 휴대폰번호 입력시 (-)는 제외하고 입력해 주세요.</p>
			<p>* 본인 인증 시 제공되는 정보는 인증 이외의 용도로 이용 또는 저장하지 않습니다.</p>
			<p>* 휴대폰 인증은 본인 명의의 휴대폰으로만 인증이 가능합니다. (14세 미만 이용 불가)</p>
			<p>* 인증이 되지 않을 경우, 고객센터(1:1문의 바로가기)로 문의 하시기 바랍니다.</p>
		</div>

	</div>
</template>
<script>
	export default{
		name: 'resetPassWord',
		data() {
			return {
				form: {
					id:'',
					phone: '',
					name:''
				},
				onlyNumber:'',
			}
		},
		methods: {
			phoneSubmit(evt) {
				console.log(this.form.phone)
				if(this.form.phone.length >= 11){
					//success 
					this.$router.push({ name: 'login', params: {page: 'successfindidDepth2'}})
					
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