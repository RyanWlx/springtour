import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		headerState:true,
		contactState:false
	},
	mutations: {
		changeHeaderState (state, boolean) {
	      state.headerState = boolean
	    },
	    changeContactState (state, boolean){
	    	state.contactState = boolean
	    }
	},
	actions: {
		// es6解构写法
	    changeHeaderState ({commit}, status) {
	      commit('changeHeaderState', status)
	    },
	    changeContactState ({commit}, status){
	    	commit('changeContactState', status)
	    }
	},
	getters: {
		getHeaderState(state){
			return state.headerState
		},
		getContactState(state){
			return state.contactState
		}
	}
})