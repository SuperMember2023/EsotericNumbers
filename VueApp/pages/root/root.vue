<template>
	<view>
		<view class="nai" :style="{'height':navHeight+'px','padding-top':statusBarHeight+'px'}">
			<view class="top-tl">
				六爻预测
			</view>
			<view class="top-tl-tip">
				快速排盘，专业测算
			</view>
		</view>
		<view class="body">
			<view class="content-top"></view>
			<view class="content-view">
				<view class="content-view-s">
					<view style="color:#4a4a4a">占事标题</view>
					<input class="input-default" placeholder="请输入您所测何事" v-model="dataInput"
						placeholder-class="color:#4a4a4a" />
					<view style="color:#4a4a4a;margin-top: 10rpx;">起卦时间{{choiceIndex}}</view>
					<uni-datetime-picker type="datetime" v-model="dateInstance" class="u-config-item" />
					<view style="color:#4a4a4a;margin-top: 20rpx;margin-bottom: 20rpx;">起卦方式</view>
					<choice-selected :isfullDisplay="true" :selectContent="selectContent" :choiceIndex="choiceIndex" :choiceList="choiceList"
						@onChoiceClick="onChoiceClick"></choice-selected>

				</view>
				<!-- 在线起卦 -->
				<view v-if="choiceIndex == 1" class="content-view-s">
				</view>

				<!-- 手动起卦 -->
				<view v-if="choiceIndex == 2" class="content-view-s">
					<view class="view-item" style="margin-bottom: 20rpx;" v-for="(item, index) in yaolists">
						<view class="view-item-title">{{item.title}}</view>
						<view class="view-item-select">
							<choice-selected :isfullDisplay="false" :selectContent="selectyaos[index]" :choiceIndex="yaoSelectChoiceid[index]"
								:choiceList="columns" :currentItem="index" @onChoiceClick="onChoiceClick">
							</choice-selected>
						</view>
					</view>
					<button class="u-config-item" @click="btnStart"
						style="margin-bottom: calc(var(--window-bottom) + 10px);">开始</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import choiceSelected from '@/components/choiceSelected/choiceSelected.vue';
	import {
		Solar,
		Lunar
	} from 'lunar-javascript'
	export default {
		components: {
			choiceSelected
		},
		data() {
			return {
				navHeight: '', //整体顶部导航栏的高度
				statusBarHeight: '', //状态栏高度
				choiceList: [{
						choiceItemId: 0,
						name: "请选择"
					},
					{
						choiceItemId: 1,
						name: "在线起卦"
					},
					{
						choiceItemId: 2,
						name: "手动起卦"
					}
				],
				selectContent: '手动起卦',
				choiceIndex: 2,
				yaolists: [{
					title: '初爻',
					value: 0,
				}, {
					title: '二爻',
					value: 1,
				}, {
					title: '三爻',
					value: 2,
				}, {
					title: '四爻',
					value: 3,
				}, {
					title: '五爻',
					value: 4,
				}, {
					title: '六爻',
					value: 5,
				}],
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false,
				columns: [{
					name: '请选择',
					choiceItemId: -1
				}, {
					name: '▅▅　▅▅　少阴',
					choiceItemId: 0
				}, {
					name: '▅▅▅▅▅　　少阳',
					choiceItemId: 1
				}, {
					name: '▅▅　▅▅ Ⅹ老阴',
					choiceItemId: 2
				}, {
					name: '▅▅▅▅▅ 〇 老阳',
					choiceItemId: 3
				}],
				selectyaos: [],
				yaoSelectChoiceid: [],
				type: 'text',
				dateInstance: new Date(),
				dataInput: ''

			}
		},
		onShow() {
			this.selectyaos = ["请选择", "请选择", "请选择", "请选择", "请选择", "请选择"]
			this.yaoSelectChoiceid = [-1, -1, -1, -1, -1, -1]
		},
		onLoad() {
			let {
				statusBarHeight,
				system
			} = uni.getSystemInfoSync()
			this.statusBarHeight = statusBarHeight
			this.navHeight = statusBarHeight + (system.indexOf('iOS') > -1 ? 50 : 48)
			console.info("this.navHeight===" + this.navHeight)
			this.dateInstance = new Date()
			let date = this.dateInstance
			var lunar = Lunar.fromDate(this.dateInstance);
			var eightChar = lunar.getEightChar();
			let year = date.getFullYear()
			let month = date.getMonth() + 1
			month >= 9 ? month : month = '0' + month
			let day = date.getDate()
			day >= 9 ? day : day = '0' + day
			let hour = date.getHours()
			hour >= 9 ? hour : hour = '0' + hour
			let minute = date.getMinutes()
			minute >= 9 ? minute : minute = '0' + minute
			let second = date.getSeconds()
			second >= 9 ? second : second = '0' + second
			this.shijian = '时间：' + year + '-' + month + '-' + day + "  " + hour + ":" + minute + '【' + lunar
				.getMonthInChinese() + '月' + lunar.getDayInChinese() + '】'
		},
		methods: {
			//index 是第几爻 对应的selectyaos  yaoSelectChoiceid
			onChoiceClick(position, index) {
				let _self = this;
				if (index != undefined) {
					console.log("onyaoClick position: " + position + "---index: " + index);
					_self.selectyaos[index] = _self.columns[position].name;
					_self.yaoSelectChoiceid[index] = position;
				} else { //起卦方式
					_self.choiceIndex = position;
					_self.selectContent = _self.choiceList[position].name;
				}
			},
			btnStart() {
				let userArrt = this.yaoSelectChoiceid[0] + this.yaoSelectChoiceid[1] + this.yaoSelectChoiceid[2] + this
					.yaoSelectChoiceid[3] + this.yaoSelectChoiceid[4] + this.yaoSelectChoiceid[5]
				console.log("userArrt===" + userArrt)
				if (this.yaoSelectChoiceid[0] < 0 || this.yaoSelectChoiceid[1] < 0 || this.yaoSelectChoiceid[2] < 0 || this
					.yaoSelectChoiceid[3] < 0 || this.yaoSelectChoiceid[4] < 0 || this.yaoSelectChoiceid[5] < 0) {
					this.$u.toast("您没有完成手工指定");
					return;
				}
				const userinfo = {
					name: userArrt,
					data: this.dateInstance,
					dataInput: this.dataInput
				}
				getApp().globalData.userData = userinfo
				uni.switchTab({
					url: '/pages/list/list?userinfo=${encodeURIComponent(JSON.stringify(userinfo))}'
				})

				// this.$u.toast(this.defaultSelector2);
			}
		}
	}
</script>

<style lang="scss">
	$uni-item-ceil-height:80rpx;
	$uni-back-color:#3872FE;
	$uni-font-w-color:#DFF3FA;
	$uni-border-color:#F7F7F7;

	.nai {
		display: flex;
		flex-direction: column;
		align-items: left;
		background-color: $uni-back-color;

		.top-tl {
			margin-left: 20rpx;
			color: $uni-font-w-color;
			font-size: 36rpx;
			margin-top: 8rpx;
		}

		.top-tl-tip {
			color: $uni-font-w-color;
			margin-left: 20rpx;
			font-size: 20rpx;
			margin-top: 8rpx;
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.content-top {
		background-color: $uni-back-color;
		height: 200rpx;
	}

	.content-view {
		display: flex;
		flex-direction: column;
		align-self: center;
		height: 100%;
		width: 94%;
		position: absolute;
		top: 180rpx;
	}

	.content-view-s {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: white;
		border-radius: 10px;
		border: 1px solid $uni-border-color;
		margin-bottom: 20rpx;
		padding: 20rpx;
	}

	.input-default {
		height: 80rpx;
		background-color: $uni-border-color;
		margin: 10rpx 10rpx 10rpx 0;
		padding-left: 10rpx;
		border-radius: 10px;
		border: 1px solid $uni-border-color;
	}

	.view-item {
		display: flex;
		flex-direction: row;
		height: 80rpx;
		align-items: center;

		.view-item-title {
			text-overflow: ellipsis;
			white-space: nowrap;
			font-weight: bold;
		}

		.view-item-select {
			width: 100%;
			margin-left: 20rpx;
		}
	}

	.u-config-item {
		width: 100%;
		margin-top: 15rpx;
	}


	/****/



	.button {
		width: 450rpx;
	}

	.col {
		padding: 100rpx 100rpx;
	}


	.list-item {
		// background: #FFFFFF;
		display: flex;
		flex-direction: column;

		.list-item-cel {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			height: $uni-item-ceil-height;

			.list-item-cel-view {
				width: 100%;
				overflow: hidden;
				/*隐藏*/
				white-space: nowrap;
				/*不换行*/
				text-overflow: ellipsis;
				align-self: center;
			}
		}
	}

	.list-item-cel-line {
		height: 1px;
		width: 100%;
		background: #F5F5F5; //$uni-line-color;
	}
</style>
