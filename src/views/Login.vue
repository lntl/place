<template>
<div class="relat">
	<div class="btn-sign sign" v-if="!toggle">
		<button class="btn white" v-on:click="togglemod('signup')">Sign up</button>
	</div>
	<transition name="bounce">
		<Signup v-if="signup"></Signup>
	</transition>
	<button class="btn back" v-if="toggle" v-on:click="togglemod('back')">Cancel</button>
</div>
</template>

<script>
import { mapState } from "vuex";
import Signup from '../components/Signup.vue'

export default {
  name: 'Login',
    data(){
    return{
			signup: false,
			google: false,
			toggle:false
    }
	},
	components: {
		Signup
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
  }
}
</script>

<style scoped>
.btn-sign{
	opacity: 1;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  display: none;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>