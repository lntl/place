import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		user:{name:"Lucas"},
		loader:{is : false},
		mappix:{}
	},
	mutations: {
    setUser: function(state, data){
      state.user = data;
		},
		setLoader: function(state, data){
      state.loader = data;
		},
		setMap: function(state, data){
			state.mappix = data;
			console.log(state.mappix);
		},
	},
	actions: {
    getUsers: function({commit}){
			commit('setUser', {name:"lucas"});
		},
		getLoader: function({commit}, datas){
			console.log(datas);
			commit('setLoader', datas);
		},
		getMap: function({commit}){
			axios.get('http://localhost:8081/getMap').then(response => {
        commit('setMap', response.data);
      })
		}
	}
})