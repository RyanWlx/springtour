import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from '../App.vue'
import Index from '../components/page/index.vue'
import Destination from '../components/views/destination.vue'
import Myspringtour from '../components/views/myspringtour.vue'

export default new VueRouter({
	routes:[{
		path:'/',
		redirect:'/index',
		component:App,
		children:[
			{path:'index',name:'index',component:Index},
			{path:'destination',name:'destination',component:Destination},
			{path:'myspringtour',name:'myspringtour',component:Myspringtour}
		]
	}]
});