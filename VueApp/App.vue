<script>
	export default {
		globalData:{
			
		},
		onLaunch: function() {
			console.log('App Launch')
			// uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
			console.log(uni.$u.config.v);
			// uniCloud.callFunction({
			// 	name:"data"
			// }).then(res=>
			// {
			// 	console.log(res)
			// })
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
    @import "./uni_modules/vk-uview-ui/index.scss";
</style>