<template>
  <div class="home">
    <mainBanner />
    <containerArea/> 
    <!-- msg="Welcome to Your Vue.js App" -->
  </div>
</template>

<script>
import mainBanner from '@/components/mainBanner'
import containerArea from '@/components/containerArea'

export default {
  name: 'Home',
  components: {
    mainBanner,
    containerArea
  }
}
</script>
