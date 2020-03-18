<template>
<div class="">
  <div class="nav" id="before">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <p class="baseline">
      the place to watch everything.
    </p>
    <button class="btn white">Sign up</button>
    <button class="btn google"><span class="b">G</span><span class="r">o</span><span class="j">o</span><span class="b">g</span><span class="v">l</span><span class="r">e</span></button>
    {{user.name}}
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
    this.$store.dispatch('getUsers');
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
