<template>
	<div>目的地</div>
</template>

<script>

	export default {

		data(){
			return {}
		},
		created(){
			this.$store.dispatch('changeContactState', false);
		},
		computed:{
			
		}
	}
</script>