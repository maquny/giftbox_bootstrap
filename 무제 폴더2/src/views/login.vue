<template>
	<div>
		<h1>{{name}}</h1>
		<loginFrom />
	</div>
</template>

<script>
	import loginFrom from '@/components/loginFrom'

	export default{
		name: 'login',
		data() {
			return {
				name: 'login page'
			}
		},
		components: {
			loginFrom
		}
	}
</script>

<style>
	h1{font-size:24px;font-weight:bold;}
</style>