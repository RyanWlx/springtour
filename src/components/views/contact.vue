<template>
<div class="contact">
	<div class="mask z-num mask-show"></div>
	<div class="dialog tel-dialog z-num JS_dialog dialog-center-show" id="JS_dialog-telBox">
		<div class="dialog-box">
			<div class="dialog-hd">
				<i class="close icon-close pnr" @click="closeContact"></i>
			</div>
			<div class="dialog-bd">
				<div class="dialog-txt">
					<img src="http://media.china-sss.com/chunqiu/m/images/home/telqiu.png" class="tel-img">
					<p class="always">实时为您提供咨询服务</p>
				</div>
				<div class="dialog-ft dialog-block">
					<a class="btn on" data-role="ga" data-done="电话咨询" href="tel:400-820-6222">
						<i class="icon-phone"></i>电话客服&nbsp;&nbsp;400-820-6222<span class="tel-free">免长途费</span>
					</a>
					<a class="btn" data-role="ga" data-done="在线客服" target="_blank" href="http://m.springtour.com/site/chat/Connect?code=tour&amp;redirect=true">
						<i class="icon-consult"></i>在线客服
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>

	export default {
		data(){
			return {}
		},
		methods:{
			closeContact(){
				this.$store.dispatch('changeContactState', false);
			}
		}
	}
</script>

<style lang="scss" scope>
.contact{
	.mask {
	    position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 2;
	    background-color: rgba(0,0,0,.5);
	    opacity: 0;
	    -webkit-transition: opacity .5s ease;
	    -ms-transition: opacity .5s ease;
	    -o-transition: opacity .5s ease;
	    transition: opacity .5s ease;
	}
	.mask-show {
	    opacity: 1;
	}
	.z-num {
	    z-index: 19;
	}
	.dialog-center-show {
	    -webkit-transform: translateY(0);
	    -moz-transform: translateY(0);
	    -ms-transform: translateY(0);
	    -o-transform: translateY(0);
	    transform: translateY(0);
	    -webkit-transition: transform .5s ease;
	    -ms-transition: transform .5s ease;
	    -o-transition: transform .5s ease;
	    transition: transform .5s ease;
	}
	.city-dialog, .tel-dialog {
	    -webkit-transform: translateY(-25%);
	    -moz-transform: translateY(-25%);
	    -ms-transform: translateY(-25%);
	    -o-transform: translateY(-25%);
	    transform: translateY(-25%);
	}

	.dialog {
	    width: 13rem;
	    padding: .6rem;
	    margin-left: -6.4rem;
	    box-sizing: border-box;
	    background-color: #fff;
	}
	.alert, .dialog, .dialog-bottom, .dialog-plus {
	    position: fixed;
	    border-radius: .13rem;
	}
	.alert, .dialog {
	    top: 30%;
	    left: 50%;
	}
	.tel-dialog .dialog-bd {
	    font-size: .51rem;
	    color: #aaa;
	}
	.dialog .dialog-hd {
	    margin-bottom: .6rem;
	}

	.dialog .dialog-hd, .dialog-bottom .dialog-hd {
	    position: relative;
	    min-height: .77rem;
	}
	.dialog .dialog-hd i {
	    font-size: .77rem;
	}
	.icon-close:before {
	    content: "\e924";
	}
	.pnr {
	    position: absolute;
	    right: 0;
	}
	.dialog .dialog-bd .dialog-txt {
	    max-height: 7.4rem;
	    overflow-y: auto;
	}
	.tel-dialog .tel-img {
	    width: 4.7rem;
	    min-height: 4.7rem;
	    margin: 0 auto;
	    margin-bottom: .4rem;
	}
	.dialog .dialog-block, .dialog .dialog-inline {
	    text-align: center;
	    margin: .6rem 0 0;
	}
	.dialog .dialog-block a:first-child {
	    margin-bottom: .43rem;
	}
	.dialog .dialog-block .on, .dialog .dialog-inline .on {
	    background-color: #00BE88;
	    color: #fff;
	}

	.dialog .dialog-block .btn, .dialog .dialog-inline .btn {
	    display: block;
	    line-height: 1.49rem;
	    background-color: #ebfaf6;
	    border: 1px solid #00BE88;
	    border-radius: .13rem;
	    color: #00BE88;
	}
	.tel-dialog .on i {
	    color: #fff;
	}

	.tel-dialog .dialog-ft i {
	    display: inline-block;
	    vertical-align: middle;
	    margin-top: -.1rem;
	    margin-right: .2rem;
	    color: #00be88;
	    font-size: .68rem;
	}
	.icon-phone:before {
	    content: "\e90d";
	}
	.tel-dialog .tel-free {
	    display: inline-block;
	    vertical-align: baseline;
	    line-height: 1;
	    padding: .1rem .25rem;
	    margin-left: .2rem;
	    background-color: #fac41e;
	    border-radius: .13rem;
	    font-size: .43rem;
	    color: #fff;
	    position: relative;
	}
	.tel-dialog .tel-free:before {
	    content: '';
	    position: absolute;
	    bottom: 0;
	    left: -.2rem;
	    display: block;
	    border: .2rem solid transparent;
	    border-bottom-color: #fac41e;
	}
	.dialog .dialog-block .btn, .dialog .dialog-inline .btn {
	    display: block;
	    line-height: 1.49rem;
	    background-color: #ebfaf6;
	    border: 1px solid #00BE88;
	    border-radius: .13rem;
	    color: #00BE88;
	}
	.icon-consult:before {
	    content: "\e938";
	}
	.app-btn, .clause h2, .copyright, .sp-empty, .t-aside a, .t-loding, .tel-dialog .dialog-bd, .transmit a {
	    text-align: center;
	}
}
</style>