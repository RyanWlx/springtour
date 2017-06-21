<template>
	<header class="home-header" id="jsHeader">
	    <a class="global-logo" href="http://m.springtour.com/" data-role="ga" data-done="Logo" data-tag="springtour">
	        <i class="icon-logo"></i>
	    </a>
	    <a class="global-location location" href="http://m.springtour.com/site/substation/cityList" data-role="ga" data-done="出发城市" data-tag="上海">
	        <em data-id="61">上海</em><i class="icon-open"></i>
	    </a>
	    <a class="global-search" href="http://m.springtour.com/site/search" data-role="ga" data-done="搜索" data-tag="搜索栏">
	        <i class="icon-search"></i><input class="global-searchInpt" type="text" value="" placeholder="目的地/景点/门票等">
	    </a>
	</header>
</template>

<script>

	export default {

		data(){
			return{

			}
		},
		computed:{

		}
	}
</script>

<style lang="scss" scoped>
	.home-header{
	    position: fixed;
	    top: 0;
	    right: 0;
	    left: 0;
	    text-align: right;
    	z-index: 10;
	    height: 1.88rem;
	    line-height: 1.88rem;
	    padding: 0 .6rem;
	    background-color: #fff;
	}
	.global-logo {
	    font-size: 3.5rem;
	    margin-top: -.88rem;
	    display: inline-block;
	    float: left;
	    i {
    		color: #00BE88;
		}
	}
	.icon-logo:before {
	    content: "\e937";
	}
	.global-location em {
	    display: inline-block;
	    margin-top: -2px;
	    width: 2.1rem;
	    height: .52rem;
	    overflow: hidden;
	    color: #666;
	    font-size: .52rem;
	    line-height: .55rem;
	}
	.global-location i {
	    color: #aaa;
	    margin-left: .213rem;
	}
	.icon-open:before {
	    content: "\e90c";
	}
	.global-search {
	    display: inline-block;
	    width: 54%;
	    height: 1.28rem;
	    line-height: 1.28rem;
	    padding: 0 .426rem;
	    margin-left: .213rem;
	    box-sizing: border-box;
	    border-radius: 1.28rem;
	    background-color: #e0e2e5;
	}
	.global-search i {
	    margin-right: .213rem;
	    color: #96989b;
	}
	.icon-search:before {
	    content: "\e918";
	}
	.global-searchInpt {
	    width: 88%;
	    line-height: 1rem;
	    text-align: left;
	    background-color: transparent;
	}
</style>