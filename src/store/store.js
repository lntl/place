import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);


const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";


export default new Vuex.Store({
  state: {
		user:{},
		isLoggedIn: !!localStorage.getItem("token"),
		loader:{is : false}
	},
	mutations: {
		[LOGIN] (state) {
      state.pending = true;
		},
		[LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    },
    setUser: function(state, data){
      state.user = data;
		},
		setLoader: function(state, data){
      state.loader = data;
		}
	},
	actions: {
    getUsers: function({commit}, datas){
			console.log(this.state.isLoggedIn)
			if(this.state.isLoggedIn){
				datas.token = localStorage.getItem("token");
			}
			axios.post('http://localhost:8083/suscribe', datas).then(response => {
				if(response.data!=false){
					console.log(response);
					commit(LOGIN_SUCCESS);
					localStorage.setItem("token", "JWT");
					commit('setUser', response.data);
				} else {
					commit(LOGOUT);
				}
			})
		},
		getLoader: function({commit}, datas){
			commit('setLoader', datas);
		},
		logout: function({commit}){
			localStorage.removeItem("token");
			commit(LOGOUT);
			this.$router.push('/');
		}
	},
	getters: {
		isLoggedIn: state => { return state.isLoggedIn },
		user: state => { return state.user }
	}
})