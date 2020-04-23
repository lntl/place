import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// import VueSocketIO from 'vue-socket.io'
Vue.config.productionTip = false

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'localhost:8081/index.html',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   },
// }))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
