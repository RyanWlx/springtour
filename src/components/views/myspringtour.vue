<template>

	<div>
		我的春秋
	</div>

</template>

<script>

	export default {
		data(){
			return {}
		},
		created(){
			this.$store.dispatch('changeContactState', false);
		}
	}
</script>