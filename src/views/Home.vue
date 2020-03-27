<template>
	<div>
		<router-link to="/"  class="btn">Cancel</router-link>
		<transition name="bounce">
			<Mappix></Mappix>
		</transition>
	</div>
</template>
<script>
import { mapState } from "vuex";
import Mappix from '../components/Mappix.vue'

export default {
  name: 'Home',
    data(){
    return{
    }
	},
	components: {
		Mappix,
	},
	methods: {
	},
  computed: {
    ...mapState({
    })
  },
  mounted: function(){
  }
}
</script>

<style scoped>

</style>