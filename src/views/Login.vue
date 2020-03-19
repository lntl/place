<template>
<div>
	<div class="btn-sign sign" v-if="!toggle">
		<button class="btn white" v-on:click="togglemod('signup')">Sign up</button>
		<button class="btn google" v-on:click="togglemod('google')">
		<span class="b">G</span><span class="r">o</span><span class="j">o</span><span class="b">g</span><span class="v">l</span><span class="r">e</span>
		</button>
	</div>
	<transition name="component-fade">
		<Signup v-if="signup"></Signup>
	</transition>
	<transition name="component-fade">
		<GgleSign v-if="google"></GgleSign>
	</transition>
	<button class="btn back" v-if="toggle" v-on:click="togglemod('back')">Cancel</button>
</div>
</template>

<script>
import { mapState } from "vuex";
import Signup from '../components/Signup.vue'
import GgleSign from '../components/GgleSign.vue'

export default {
  name: 'Navbar',
    data(){
    return{
			signup: false,
			google: false,
			toggle:false
    }
	},
	components: {
		Signup,
		GgleSign
	},
	methods: {
    togglemod: function (event) {
			this.toggle=true;
			if(event==="signup"){
				this.signup=true;
				this.google=false;
			} else if(event==="google") {
				this.signup=false;
				this.google=true;
			} else if(event==="back"){
				this.toggle=false;
				this.signup=false;
				this.google=false;
			}
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

<style scoped>
.btn-sign{
	opacity: 1;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}
</style>