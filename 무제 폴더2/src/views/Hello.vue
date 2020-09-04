<template>
  <div class="hello">
   
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: () => {
    return {
      toDoItems: []
    }
  },
  created () {
    axios.get('http://127.0.0.1:5000/todo/')
      .then(response => {
        this.toDoItems = response.data.map(r => r.data)

      })
      .catch(e => {
        console.log('error : ', e)
      })
  }
}
</script>
