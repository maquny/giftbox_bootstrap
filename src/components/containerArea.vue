<template>
  <div class="about">
    <h1>{{ msg }} This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'containerArea',
  props: {
    msg: String
  }
}
</script>