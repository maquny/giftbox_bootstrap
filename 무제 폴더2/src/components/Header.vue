<template>
    <div id="header" class="">
        <router-link to="/" class="logo">logo</router-link>
        <div class="menu">
            <router-link to="/about">A123out</router-link>
            <router-link to="/HelloWorld">Hel123loWorld</router-link>
            <router-link to="/login">login</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
#header{width:1200px;margin:0 auto;}
#header:after{content:'';display:block;clear:both;}
.logo{float:left;width:200px;height:60px;}
.menu{float:left;}
.menu a{float:left;}
</style>