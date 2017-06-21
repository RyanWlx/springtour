import Vue from 'vue'
import router  from './router/router.js'
import store from './store/store.js'
import vueScrollBehavior from 'vue-scroll-behavior'
import axios from 'axios'
Vue.prototype.$http = axios
const app = new Vue({
	router,
	store
}).$mount('#app')
export default app