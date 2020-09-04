<template>
    <div id="app" name="pageName">
        <defaultHeader />
        <router-view />
        <defaultFooter />
    </div>
</template>
<script>
    import defaultHeader from '@/commoncontents/defaultHeader.vue'
    import defaultFooter from '@/commoncontents/defaultFooter.vue'
    export default {
        name: 'Home',
        components: {
            defaultHeader,
            defaultFooter,
        }
    }
</script>
<style>
#app{}
</style>
