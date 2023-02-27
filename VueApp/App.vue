<script>
	import {Solar,Lunar} from 'lunar-javascript'
	export default {
		globalData: 
		{
			userData: undefined,
		},
		onLaunch: function() {
			console.log('App Launch')
			// uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
			console.log(uni.$u.config.v);
			var lunar = Lunar.fromDate(new Date());
			var eightChar = lunar.getEightChar();
			console.log(eightChar.getYear());
			// console.log(Lunar.fromDate(new Date()).toFullString())
			// let solar = Solar.fromYmd(1986,5,29);
			// console.log(solar.toFullString());
			// console.log(solar.getLunar().toFullString());
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
    @import "./uni_modules/vk-uview-ui/index.scss";
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-PLUS-NVUE */
	@import '@/common/uni.css';
	/* #endif*/
</style>