<template>
<div class="">
  <div class="nav" id="before">
    <img class="logo" alt="Vue logo" src="../assets/logo.svg">
    <p class="baseline">
      the bonbail messire everywhere.
    </p>
    <!-- {{user.name}} -->
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Navbar',
    data(){
    return{

    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
    })
  },
  mounted: function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
