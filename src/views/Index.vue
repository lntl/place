<template>
  <div class="content mod">
    <Navbar></Navbar>
    <Login></Login>
  </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
import Login from '../views/Login.vue'

export default {
  name: 'index',
  props: {
    msg: String
  },
  components: {
    Navbar,
    Login
  }
}
</script>