<template>
	<div>
		<div class="wrapper-card">
			<p>Hello {{user.first_name}}</p>
			<div class="user-info">
				email : {{user.email}}<br/>
				account valid : <div v-if="(user.is_actv===0)">Not valid</div>
			</div>
		</div>
    <router-link to="/" class="btn white" v-if="isLoggedIn">Logout</router-link> 
		<transition name="bounce">
		</transition>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: 'Home',
    data(){
    return{
			user: this.state.user
    }
	},
	components: {
	},
	methods: {
		logout() {
			var t = this;
			this.$store.dispatch('logout');
			t.routeOut();
		},
		routeOut(){
			this.$router.push('/');
		}
	},
  computed: {
		...mapState({
			user: state => state.user,
		}),
		isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
	},
  mounted: function(){
		console.log( this.$store.getters.user)
		if(!this.isLoggedIn){
			this.$router.push('/');
		}
  }
}
</script>

<style scoped>

</style>