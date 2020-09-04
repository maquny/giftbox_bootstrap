<template>
  <div class="home">
    <mainBanner />
    <containerArea />
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
