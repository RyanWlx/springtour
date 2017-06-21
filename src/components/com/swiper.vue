<template>
	<div class="sp-banner">
		<Swipe class="s-swipe">
			<SwipeItem class="slide"><img src="/static/img/swiper3.jpg"/></SwipeItem>
			<SwipeItem class="slide"><img :src="sweiperArr[1]"/></SwipeItem>
			<SwipeItem class="slide"><img :src="sweiperArr[2]"/></SwipeItem>
			<SwipeItem class="slide"><img :src="sweiperArr[3]"/></SwipeItem>
		</Swipe>
		
	</div>
</template>
<script>
	import {Swipe,SwipeItem} from 'vue-swipe'
	import 'vue-swipe/dist/vue-swipe.css'

	export default{
		data(){
			return {
				sweiperArr:['/static/img/swiper1.jpg','/static/img/swiper2.jpg','/static/img/swiper3.jpg','/static/img//swiper4.jpg']
			}
		},
		components:{
			Swipe,
			SwipeItem
		},
		computed:{

		}
	}
</script>

<style lang="scss" scope>
	.sp-banner {
	    position: relative;
	    height:4.7rem;
	    .mint-swipe-indicators >.is-active{
	    	width: 16px;
		    border-radius: 8px;
		    background-color: #00BE88;
		    opacity: 1
	    }
	    .mint-swipe-item img {
		    width: 100%;
		    height: 4.7rem;
		}
	}
	
</style>