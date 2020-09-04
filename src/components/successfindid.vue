<template>
	<div>
		<slot></slot>
		<div name="pageName" class="success">
			<h4>#회원이름# 님이 가입하신 아이디는</h4>
			<h5>abc****@gmail.com <br/>입니다.</h5>
			<h6>(가입일 : yyyy년 mm월 dd일)</h6>
		</div>

		<div class="success_btn">
			<router-link to="/login">로그인</router-link>
			<router-link to="/Hello">비밀번호 찾기</router-link>
		</div>
		<b-card class="mt-3" header="Form Data Result">
			<pre class="m-0">{{ form }}</pre>
		</b-card>
	</div>
</template>
<script>
	export default{
		props:['pageName'],
		name: 'findid',
		data() {
			return {
				form: {
					id: '',
					joinDate:''
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped="">
.success_btn{padding:20px 0;border-bottom:solid 1px #ddd;margin-bottom:10px;}
.success_btn:after{content:'';display:block;clear:both;}
.success_btn a{float:left;width:48%;margin:0 1%;text-align:center;height:40px;line-height:40px;}
.success_btn a:first-child{color: #fff;
    background-color: #007bff;
    border-color: #007bff;}
.success_btn a:first-child + a{color:#444;border:solid 1px #ccc;}

.success h4,
.success h5,
.success h6{text-align:center;padding:10px;}
</style>