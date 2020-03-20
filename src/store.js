import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		user:{},
	},
	mutations: {
    setUser: function(state, data){
      state.user = data;
		},
	},
	actions: {
    getUsers: function({commit}){
			// axios.get('http://localhost/api_place/getUser').then(response => {
      //   commit('setUser', response.data);
      // })
			commit('setUser', {name:"Lucas", loading_content:false});
		}
	}
})