<template>
	<div id="load-wrap">
		<span class="loader">
			<p>Loading</p>
			<span></span>
			<span></span>
			<span></span>
		</span>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Loader',
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
    
  }
}
</script>

<style scoped>

</style>