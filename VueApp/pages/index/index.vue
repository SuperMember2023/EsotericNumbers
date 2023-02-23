<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="qqLogin">qq一键登录</button>
		<button @click="login">手机一键登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎使用'
			}
		},
		onLoad() {
			uni.hideTabBar()
			// if(this.$mStore.getters.hasLogin){
			// 	console.info("登录成功")
			// 	//跳转到登录成功页面
			// 	uni.switchTab({
			// 		url:"/pages/list/list"
			// 	})
			// }else{
			// 	console.info("未登录成功")
			// }
		},
		methods: {
			qqLogin() {
				let that = this
				console.info("开始跳转")
				this.loading('登录中...',2000);
				uni.getProvider({
					service: "oauth",
					success: function(res) {
						console.info("获取可用服务提供商=" + res.provider)
						if (res.provider.indexOf('qq') > -1) {
							console.info('开始尝试qq登录')
							// that.login()
							//加载圈
							uni.login({
								provider: 'qq',
								success: (lres) => {
									uni.getUserInfo({
										provider: 'qq',
										success: (userRes) => {
											let openId = userRes.userInfo.openId;
											console.info("qq登录成功==openId===" + openId);
											uni.hideLoading();
											// this.$mStore.commit("login",true,1)
											uni.switchTab({
												url: "/pages/list/list"
											})
										}
									})
								},
								fail(lres) {
									console.info("开始尝试qq登录失败=", err)
								}
							})
						}
					},
					fail(err) {
						console.info("获取可用服务提供商失败=", err)
					}
				})
			},
			login: function() {
				//一键登录
				console.info("开始测试一键登录,先启动预加载")
				this.loading('登录中...',2000);
				uni.preLogin({
					provider: 'univerify',
					success(res) {
						console.info("预加载成功=", res)
					},
					fail(err) {
						console.info("预加载失败=", err)
						uni.switchTab({
							url: "/pages/list/list"
						})
					}

				})
				uni.login({
					provider: 'univerify',

				})
			},
			loading: function(content,time){
				uni.showLoading({
					title: content
				});
				setTimeout(()=>{
					uni.hideLoading();
					uni.switchTab({
						url: "/pages/list/list"
					})
				},time);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		margin-bottom: 50px;
	}

	.title {
		font-size: 18rpx;
		color: #8f8f94;
	}
</style>
