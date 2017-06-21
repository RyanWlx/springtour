<template>
	<div>
		<comSwiper></comSwiper>
	</div>
</template>

<script>

	import comSwiper from '../com/swiper'

	export default {

		data(){
			return {}
		},
		components:{
			comSwiper:comSwiper
		},
		created(){
			this.$store.dispatch('changeContactState', false);
		}
	}
</script>