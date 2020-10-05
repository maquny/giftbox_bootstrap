<template>
  <div class="sginup_container" name="pageName">
    <b-button v-b-modal.modal-1>hellohellohellohello</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

  </div>
</template>

<script>

  export default {
    name:'sginup',
    data() {
      return {
        dismissSecs: 10,
      }
    },

    computed: {
      param: function () {
        this.pageName = this.$route.params.page
      }
    },
  }
</script>

<style scoped="">
.sginup_container{width:450px;margin:0 auto;padding:100px 0;}
</style>
