<template>
  <div>
    <Loader v-if="loading"></Loader>
    <form class="sign" @submit="checkForm" method="post">
      <input type="email" v-model="email" class="field" name="email" placeholder="youremail@mail.com" onfocus="this.placeholder=''" onblur="this.placeholder='youremail@mail.com'">
      <input type="password"  v-model="password" class="field" name="password" placeholder="*********" onfocus="this.placeholder=''" onblur="this.placeholder='*********'">
      <div class="mention">By clicking any of the Sign Up buttons,<br>I agree to the terms of service</div>
      <button class="btn white" >Sign up</button>
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
      loading: false,
      email:"",
      password:""
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
    checkForm (e) {
      e.preventDefault()
      var v = this;
      var datas = {
        email : v.email,
        password : v.password
      }
      if(v.loading===false){
        v.loading=true;
        this.$store.dispatch('getUsers',datas);
      }
      setTimeout(function(){
        v.loading = false;
        v.setLoad();
      },2000)
    },
    setLoad(){
      this.$router.push('/home');
    }
	},
  mounted: function(){
    //this.$store.getters('getUsers');
  }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>