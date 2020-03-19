<template>
		<form class="sign">
			<input type="email" class="field" name="email" placeholder="youremail@mail.com" >
			<input type="password" class="field" name="password" placeholder="*********">
			<button class="btn white">Sign up</button>
		</form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Signup',
    data(){
    return{

    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
    })
	},
	methods: {

	},
  mounted: function(){
    this.$store.dispatch('getUsers');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>