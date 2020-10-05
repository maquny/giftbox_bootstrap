<template>
	<div>
		<slot></slot>

		<b-form @submit="phoneSubmit" name="pageName">
			<div class="from_2box">
				<b-form-group
				id="input-group-phone"
				label="가입 당시 인증받은 휴대전화 번호를 통해 아이디를 찾을 수 있습니다."
				label-for="input-phone"
				description="본인 명의의 휴대폰으로 인증해주세요."
				>
				<b-form-input
				id="input-phone"
				v-model="form.phone"
				type="text" 
				required
				@keyup="phoneNum"
				maxlength="11"
				placeholder="휴대폰번호 - 제외 후 입력"
				></b-form-input>
				</b-form-group>

				<b-button type="submit" variant="secondary" class="login_btn">아이디 찾기</b-button>
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
		props:['pageName'],
		name: 'findid',
		data() {
			return {
				form: {
					phone: '',
				},
				onlyNumber:'',
			}
		},
		methods: {
			phoneSubmit(evt) {
				console.log(this.form.phone)
				if(this.form.phone.length >= 11){
					//success 
					this.$router.push({ name: 'login', params: {page: 'successfindid'}})
					
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