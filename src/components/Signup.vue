<template>
  <div>
    <Loader v-if="loading"></Loader>
    <form class="sign">
      <input type="email" class="field" name="email" placeholder="youremail@mail.com" onfocus="this.placeholder=''" onblur="this.placeholder='youremail@mail.com'">
      <input type="password" class="field" name="password" placeholder="*********" onfocus="this.placeholder=''" onblur="this.placeholder='*********'">
      <div class="mention">By clicking any of the Sign Up buttons,<br>I agree to the terms of service</div>
      <button class="btn white" v-on:click="loader">Sign up</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from '../components/Loader.vue'

export default {
  name: 'Signup',
    data(){
    return{
      loading: false
    }
  },
  components: {
    Loader
	},
  computed: {
    ...mapState({
      user: state => state.user,
    })
	},
	methods: {
    loader () {
      var v = this;
       if(v.loading===false){
         v.loading=true;
         this.$store.dispatch('getLoader',true);
       }
      setTimeout(function(){
        v.loading = false;
        v.setload();
      },5000)
    },
    setload(){
      this.$store.dispatch('getLoader',false);
      this.$router.push('/home');
    }
	},
  mounted: function(){
    this.$store.dispatch('getUsers');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>