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
			commit('setUser', {name:"Lucas"});
		}
	}
})