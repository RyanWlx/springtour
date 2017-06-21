<template>
	
	<div class="wrap">
		<comHeader></comHeader>
		<comFooter></comFooter>
		<article class="m-ctb">
			<router-view></router-view>
			<contact v-show="getContastState"></contact>
		</article>
		
	</div>
	
</template>

<script type="text/ecmascript-6">

	import comHeader from './components/com/header.vue'
	import comFooter from './components/com/footer.vue'
	import contact from './components/views/contact.vue'
	import './css/common.scss'

	export default {

		data(){
			return {

			}
		},
		components:{
			comHeader: comHeader,
      		comFooter: comFooter,
      		contact:contact
		},
		computed:{
			getContastState(){
				return this.$store.getters.getContactState
			}
		},
		created(){
			var doc = document,
				win = window;
			var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	        recalc = function() {
	            var clientWidth = docEl.clientWidth;
	            if (!clientWidth) return;
	            if (clientWidth > 640) clientWidth = 640;
	            win._fontSize = 20 * (clientWidth / 320);
	            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
	        };

		    if (!doc.addEventListener) return;
		    recalc();
		    win.addEventListener(resizeEvt, recalc, false);
		    doc.addEventListener('DOMContentLoaded', recalc, false);
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>

.m-ct, .m-ctb {
    margin-top: 1.88rem;
}

</style>