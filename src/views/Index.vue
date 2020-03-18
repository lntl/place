<template>
  <div class="content mod">
    <Navbar></Navbar>
  </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'index',
  props: {
    msg: String
  },
  components: {
    Navbar
  }
}
</script>