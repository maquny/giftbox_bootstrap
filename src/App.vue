<template>
    <div id="app" :class="$mq">
        <defaultHeader />
        <router-view />
        <defaultFooter />
    </div>
</template>
<script>
    import defaultHeader from '@/components/layout/defaultHeader.vue'
    import defaultFooter from '@/components/layout/defaultFooter.vue'
    export default {
        name: 'app',
        components: {
            defaultHeader,
            defaultFooter,
        }
    }
</script>
<style>
#app{}
</style>
