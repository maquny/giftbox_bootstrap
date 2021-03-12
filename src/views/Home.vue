<template>
  <div class="home">
    <mainBanner />
    <containerArea/> 
  </div>
</template>

<script>
    import mainBanner from '@/components/home/mainBanner'
    import containerArea from '@/components/home/containerArea'

    export default {
      name: 'Home',
      data(){
        return{
            mdl_tkn:''
        }
      },
      components: {
        mainBanner,
        containerArea
    },
    created() {
        // 환경 변수 출력
        //console.log(process.env.VUE_APP_BASE_URL);
    },
    watch: {
    }
}
</script>
