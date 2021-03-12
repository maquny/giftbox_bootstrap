<template>
	<div>
		<slot name="header"></slot>
		<button id="nextDeptnBtn" class="btnn grd bTcont" @click="loginGo">로그인 하러가기</button>
	</div>
</template>
<script>
	export default{
		name: 'signUpComplete',
		created() {
            this.$emit('checkeddetail', {name: 'successSignUp', sta: true, hiddenCont: true});
        },
        methods: {
        	loginGo(){
        		this.$router.push({name: 'logInFrom', path: 'logInFrom'}, function() {
					// console.log("로그인 페이지로 이동합니다.");
				})
        	}
        }
	}
</script>

<style scoped="">
</style>