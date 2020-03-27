<template>
	<div class="sign">
		test
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Mappix',
    data(){
    return{
    }
	},
	components: {

	},
	methods: {
		mapcontruct: function(mapArray){
			console.log(mapArray)
		},
		deployUser: function(){
			console.log('deploy user')
		}
	},
  computed: {
    ...mapState({
			user: state => state.user,
			mappix: state => state.mappix,
    })
  },
  mounted: function(){
		this.$store.dispatch('getMap',false);
		this.mapcontruct(this.$store.state.mapping);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>