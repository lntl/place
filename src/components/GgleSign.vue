<template>
	<div class="sign">
		Google login
	</div>
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
  mounted: function(){
    this.$store.dispatch('getUsers');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>