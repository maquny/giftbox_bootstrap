<template>
	<div class="login_container col-md-5">
		<h2>{{ $route.name }}</h2>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		name: 'board',
	}
</script>
<style scoped="">
.login_container{margin:0 auto;padding:100px 0;}
</style>​