<template>
	<footer class="ch-footer flex">
		
    	<router-link class="footer-a flex-1" :to="{name:'index'}">
	        <i class="icon-home"></i><em>首页</em>
	    </router-link>
    
    	<router-link class="footer-a flex-1 " :to="{name:'destination'}">
	        <i class="icon-address"></i><em>目的地</em>
	    </router-link>
    
    	<a class="footer-a flex-1" data-deal="contact" @click="changeContact">
	        <i class="icon-phone"></i><em>联系我们</em>
	    </a>
    
    	 <router-link class="footer-a flex-1 " :to="{name:'myspringtour'}">
	        <i class="icon-user"></i><em>我的春秋</em>
	    </router-link>
	    
	    
	</footer>
</template>

<script>

	export default {

		data(){
			return {

			}
		},
		created(){

		},
		computed:{

		},
		methods:{
			changeContact(){
				this.$store.dispatch('changeContactState', true)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.ch-footer {
	    z-index: 10;
	    height: auto;
	    padding: .2rem 0;
	    position: fixed;
	    bottom: 0;
	    border-top: 1px solid #ddd;
	    background-color: #f7f7f7;
	    line-height: 1;
	    box-sizing: border-box;
    	overflow: hidden;
    	right:0;
    	left:0;
	}
	.ch-footer a {
	    display: block;
	    color: #999;
	}
	footer a.on i {
	    color: #00BE88;
	}
	.ch-footer i {
	    font-size: 1.2rem;
	}
	.icon-home:before {
	    content: "\e936";
	}
	.ch-footer em {
	    display: block;
	    font-size: .48rem;
	}
	.icon-address:before {
	    content: "\e920";
	}
	.icon-phone:before {
	    content: "\e90d";
	}
	.icon-user:before {
	    content: "\e935";
	}
	.ch-footer{
		ul {
			li{
				-webkit-box-flex: 1;
			    -moz-box-flex: 1;
			    -webkit-flex: 1;
			    -ms-flex: 1;
			    flex: 1;
			    display:block;
			}
		}
	}
</style>