<template>
	<div>
		<comSwiper></comSwiper>

		<nav class="nav-content ">
	        <div class="home-link">
	            <a href="http://m.springtour.com/guonei" class="nav-wrap" data-role="ga" data-done="产品大类" data-tag="国内游">
	                <span class="gny"></span>
	                <em>国内游</em>
	            </a>
	            <a href="http://m.springtour.com/dujia" class="nav-wrap" data-role="ga" data-done="产品大类" data-tag="出境游">
	                <span class="cjy"></span>
	                <em>出境游</em>
	            </a>
	            <a href="http://m.springtour.com/zhoubianyou" class="nav-wrap" data-role="ga" data-done="产品大类" data-tag="周边游">
	                <span class="zby"></span>
	                <em>周边游</em>
	            </a>
	            <a href="http://m.springtour.com/youlun" class="nav-wrap" data-role="ga" data-done="产品大类" data-tag="邮轮">
	                <span class="yl"></span>
	                <em>邮轮</em>
	            </a>
	            <a href="http://m.springtour.com/flight" class="nav-wrap" data-role="ga" data-done="产品大类" data-tag="机票">
	                <span class="jp"></span>
	                <em>机票</em>
	            </a>
	            <a href="http://www.booking.com/index.html?aid=1215985" class="nav-wrap" data-role="ga" data-done="产品大类" data-tag="酒店">
	                <span class=""></span>
	                <em>酒店</em>
	            </a>
	            <a href="http://m.springtour.com/ziyouxing" class="nav-wrap" data-role="ga" data-done="产品大类" data-tag="自由行">
	                <span class="zyx"></span>
	                <em>自由行</em>
	            </a>
	            <a href="http://m.springtour.com/gentuanyou" class="nav-wrap" data-role="ga" data-done="产品大类" data-tag="跟团游">
	                <span class="gty"></span>
	                <em>跟团游</em>
	            </a>


	        </div>
	        <div class="home-nav-link">
	            <a href="http://m.springtour.com/menpiao" class="home-nav-item" data-role="ga" data-done="产品小类" data-tag="门票">
	                <i class=""></i>
	                <span>门票</span>
	            </a>
	            <a href="http://m.springtour.com/%E4%B8%8A%E6%B5%B7-%E7%9B%B4%E9%80%9A%E8%BD%A6" class="home-nav-item" data-role="ga" data-done="产品小类" data-tag="景区直通车">
	                <i class="iconh-jqztc"></i>
	                <span>景区直通车</span>
	            </a>
	            <a href="http://pages.springtour.com/activity?id=34691&amp;type=2" class="home-nav-item" data-role="ga" data-done="产品小类" data-tag="尾单疯抢">
	                <i class=""></i>
	                <span>尾单疯抢</span>
	            </a>
	            <a href="http://m.springtour.com/site/tour/Dingzhi" class="home-nav-item" data-role="ga" data-done="产品小类" data-tag="春秋定制">
	                <i class=""></i>
	                <span>春秋定制</span>
	            </a>
	            <a href="http://pages.springtour.com/activity?id=35770&amp;type=2" class="home-nav-item" data-role="ga" data-done="产品小类" data-tag="点评有奖">
	                <i class=""></i>
	                <span>点评有奖</span>
	            </a>
	            <a href="http://pages.springtour.com/Special/s170612sqyl/Index.aspx" class="home-nav-item" data-role="ga" data-done="产品小类" data-tag="宝贝出邮季">
	                <i class=""></i>
	                <span>宝贝出邮季</span>
	            </a>

	        </div>
	    </nav>
	</div>
</template>

<script>

	import comSwiper from '../com/swiper'
	import '../../css/index.scss'
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

<style lang="scss" scope>
</style>