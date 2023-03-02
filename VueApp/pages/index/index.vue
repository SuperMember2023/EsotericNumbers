<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="login('univerify')">手机一键登录</button>
		<button @click="login('weixin')">微信登录</button>
	</view>
</template>

<script>
	const univerifyInfoKey = 'univerifyInfo';
	export default {
		data() {
			return {
				title: '登录',
				isLogin: false,
				providerList: [],
				univerifyBtnLoading: false,
				openid: "",
				access_token: ""

			}
		},
		onLoad() {
			uni.hideTabBar()
			var univerfy = uni.getStorageSync(univerifyInfoKey);
			var arr = Object.keys(univerfy);
			console.info("登录成功===:" + JSON.stringify(univerfy)+"=="+arr.length)
			if (arr.length == 0) {
				console.info("未登录")
				uni.showToast({
					title: '未登录',
					icon: 'none',
					duration: 2000
				});
				setTimeout(() => {
					uni.hideLoading();
					uni.switchTab({
						url: "/pages/list/list"
					})
				}, 5000);
			} else {
				console.info("登录成功")
				//跳转到登录成功页面
				uni.switchTab({
					url: "/pages/list/list"
				})
			}
			// uni.getProvider({
			// 	service: 'oauth',
			// 	success: (result) => {
			// 		this.providerList = result.provider.map((value) => {
			// 			let providerName = '';
			// 			switch (value) {
			// 				case 'weixin':
			// 					providerName = '微信登录'
			// 					break;
			// 				case 'qq':
			// 					providerName = 'QQ登录'
			// 					break;
			// 				case 'univerify':
			// 					providerName = '一键登录'
			// 					break;
			// 			}
			// 			console.info("getProvider===" + providerName + " value:" + value)
			// 			return {
			// 				name: providerName,
			// 				id: value
			// 			}
			// 		});

			// 	},
			// 	fail: (error) => {
			// 		console.log('获取登录通道失败', error);
			// 	}
			// });
		},
		methods: {
			login(key) {
				//一键登录
				console.info("开始测试一键登录,先启动预加载")
				// this.loading('登录中...',2000);
				let that = this;
				switch (key) {
					case 'univerify':
						uni.preLogin({
							provider: key,
							success(res) {
								console.info("预加载成功=", res)
								that.dologin(key);
							},
							fail(err) {
								uni.showModal({
									showCancel: false,
									title: '预加载失败',
									content: err.errMsg
								});
								// uni.switchTab({
								// 	url: "/pages/list/list"
								// })
							}
						})
						break;
					case 'weixin':
						that.dologin(key);
						break;
				}


			},
			dologin(key) {
				console.info("开始一键登录===")
				let that = this;
				uni.login({
					provider: key,
					success: async (res) => {
						console.log('login success:', res);
						// this.Toast({
						// 	title: '登录成功'
						// })
						// 更新保存在 store 中的登录状态
						// this.isLogin = true;

						// #ifdef APP-PLUS
						//设置登录的类型
						// this.setUniverifyLogin(provider.id === 'univerify')
						that.openid = res.authResult.openid;
						that.access_token = res.authResult.access_token;
						console.info("登录成功===" + that.openid + "===" + that.access_token);
						that.loginByUniverify("univerify", res)
						// #endif
						// #ifdef MP-WEIXIN
						console.info("微信登录===")
						that.weixinLogin(res)
						// #endif



					},
					fail: (err) => {
						console.log('login fail:', err);

						// 一键登录点击其他登录方式
						if (err.code == '30002') {
							uni.closeAuthView();
							this.Toast({
								title: '其他登录方式'
							})
							return;
						}

						// 未开通
						if (err.code == 1000) {
							uni.showModal({
								title: '登录失败',
								content: `${err.errMsg}\n，错误码：${err.code}`,
								confirmText: '开通指南',
								cancelText: '确定',
								success: (res) => {
									if (res.confirm) {
										setTimeout(() => {
											plus.runtime.openWeb(
												'https://ask.dcloud.net.cn/article/37965'
											)
										}, 500)
									}
								}
							});
							return;
						}

						// 一键登录预登陆失败
						if (err.code == '30005') {
							uni.showModal({
								showCancel: false,
								title: '预登录失败',
								content: err.errMsg
							});
							return;
						}

						// 一键登录用户关闭验证界面
						if (err.code != '30003') {
							uni.showModal({
								showCancel: false,
								title: '登录失败',
								content: JSON.stringify(err)
							});
						}
					},
					complete: () => {
						this.univerifyBtnLoading = false;
					}
				});
			},
			loginByUniverify(provider, res) {
				console.info("登录成功=====")
				// console.info("loginByUniverify ====", provider, "==" + JSON.stringify(res))
				//设置登录状态
				// this.setUniverifyLogin(true);
				console.info("this.openid==")
				uni.closeAuthView();

				const univerifyInfo = {
					provider,
					...res.authResult,
				}
				console.info("univerifyInfo===" + JSON.stringify(univerifyInfo))

				var p1 = new Promise((resolve, reject) => {

					console.info("Promise===" + JSON.stringify(univerifyInfo))
					uni.request({
						url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login',
						method: 'POST',
						data: univerifyInfo,
						success: (res) => {
							console.info("success===" + JSON.stringify(res))
							const data = res.data
							if (data.success) {
								resolve(data.phoneNumber)
							} else {
								console.info("失败===" + data.msg)
								uni.showModal({
									showCancel: false,
									title: '手机号获取失败',
									content: `${data.msg}\n，错误码：${data.code}`
								})
							}

						},
						fail: (err) => {
							console.info("fail===" + JSON.stringify(err))
							// reject(err)
						}
					})
				});
				p1.then((number) => {
					this.phoneNumber = number;
					uni.setStorageSync(univerifyInfoKey, univerifyInfo)
					uni.showModal({
						showCancel: false,
						title: '登录成功',
						content: `${number}`,
						success: ((res) => {
							if (res.confirm) {
								console.log('comfirm') //点击确定之后执行的代码
								uni.switchTab({
									url: "/pages/list/list"
								})
							}
						})
					})

				}).catch(err => {
					uni.showModal({
						showCancel: false,
						title: '手机号获取失败',
						content: `${err.errMsg}，错误码：${err.code}`
					})
				})
			},
			weixinLogin(res) {
				// #ifdef MP-WEIXIN
				console.warn('如需获取openid请参考uni-id: https://uniapp.dcloud.net.cn/uniCloud/uni-id')
				uni.request({
					url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center',
					method: 'POST',
					data: {
						action: 'loginByWeixin',
						params: {
							code: res.code,
							platform: 'mp-weixin'
						}
					},
					success(res) {
						console.log(res);
						if (res.data.code !== 0) {
							console.log('获取openid失败：', res.data.errMsg);
							return
						}
						uni.setStorageSync('openid', res.data.openid)
					},
					fail(err) {
						console.log('获取openid失败：', err);
					}
				})
				// #endif
			},
			loading: function(content, time) {
				uni.showLoading({
					title: content
				});
				setTimeout(() => {
					uni.hideLoading();
					uni.switchTab({
						url: "/pages/list/list"
					})
				}, time);
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
