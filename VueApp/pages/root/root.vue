<template>
	<view>
		<!-- <view class="nai">六爻预测</view> -->
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
					<choice-selected :selectContent="selectContent" :choiceIndex="choiceIndex" :choiceList="choiceList"
						@onChoiceClick="onChoiceClick"></choice-selected>

				</view>
				<!-- 在线起卦 -->
				<view v-if="choiceIndex == 2" class="content-view-s">
					<view class="view-item" style="margin-bottom: 20rpx;" v-for="(item, index) in yaolists">
						<view class="view-item-title">{{item.title}}</view>
						<view class="view-item-select">
							<choice-selected :selectContent="selectyaos[index]" :choiceIndex="yaoSelectChoiceid[index]"
								:choiceList="columns" :currentItem="index" @onChoiceClick="onChoiceClick">
							</choice-selected>
						</view>
					</view>
					<button class="u-config-item" @click="btnStart">开始</button>
				</view>
				<!-- 手动起卦 -->
				<view v-if="choiceIndex == 2" class="content-view-s">


				</view>



			</view>

		</view>


		<!-- <u-section title="占事标题" :right="false"></u-section>
			<u-input :type="type" :border="true" v-model="dataInput" class="u-config-item" placeholder="请输入您所测何事" />
			<u-section title="手式时间" :right="false" class="u-config-item"></u-section>
			<uni-datetime-picker type="datetime" v-model="dateInstance" class="u-config-item" />
			<view v-for="(item, index) in yaolists">
				<view class="list-item">
					<view class="list-item-cel">
						<view class="list-item-cel-view">{{item.title}}</view>
						<view class="list-item-cel-view">{{columns[item.value].title}}</view>
					</view>
					<view class="list-item-cel-line"></view>
				</view>
			</view> -->



		<!-- <u-row gutter="16" class="u-config-item">
					<u-col span="2">
						<view class="demo-layout bg-purple">六爻</view>
					</u-col>
					<u-col span="4">
						<u-button @click="show6 = true" border="false" class="button">{{yaoName6}}</u-button>
						<u-picker mode="selector" v-model="show6" :default-selector="defaultSelector6" :range="columns"
							@confirm="confirm6"></u-picker>
					</u-col>
				</u-row>
				<u-row gutter="16" class="u-config-item">
					<u-col span="2">
						<view class="demo-layout bg-purple">五爻</view>
					</u-col>
					<u-col span="4">
						<u-button @click="show5 = true" border="false" class="button">{{yaoName5}}</u-button>
						<u-picker mode="selector" v-model="show5" :default-selector="defaultSelector5" :range="columns"
							@confirm="confirm5"></u-picker>
					</u-col>
				</u-row>
				<u-row gutter="16" class="u-config-item">
					<u-col span="2">
						<view class="demo-layout bg-purple">四爻</view>
					</u-col>
					<u-col span="4">
						<u-button @click="show4 = true" border="false" class="button">{{yaoName4}}</u-button>
						<u-picker mode="selector" v-model="show4" :default-selector="defaultSelector4" :range="columns"
							@confirm="confirm4"></u-picker>
					</u-col>
				</u-row>
				<u-row gutter="16" class="u-config-item">
					<u-col span="2">
						<view class="demo-layout bg-purple">三爻</view>
					</u-col>
					<u-col span="4">
						<u-button @click="show3 = true" border="false" class="button">{{yaoName3}}</u-button>
						<u-picker mode="selector" v-model="show3" :default-selector="defaultSelector3" :range="columns"
							@confirm="confirm3"></u-picker>
					</u-col>
				</u-row>
				<u-row gutter="16" class="u-config-item">
					<u-col span="2">
						<view class="demo-layout bg-purple">二爻</view>
					</u-col>
					<u-col span="4">
						<u-button @click="show2 = true" border="false" class="button">{{yaoName2}}</u-button>
						<u-picker mode="selector" v-model="show2" :default-selector="defaultSelector2" :range="columns"
							@confirm="confirm2"></u-picker>
					</u-col>
				</u-row>
				<u-row gutter="16" class="u-config-item">
					<u-col span="2">
						<view class="demo-layout bg-purple">初爻</view>
					</u-col>
					<u-col span="4">
						<u-button @click="show1 = true" border="false" class="button">{{yaoName1}}</u-button>
						<u-picker mode="selector" v-model="show1" :default-selector="defaultSelector1" :range="columns"
							@confirm="confirm1"></u-picker>
					</u-col>
				</u-row>
				<u-button :ripple="true" ripple-bg-color="#909399" class="u-config-item" @click="btnStart">开始</u-button>
				 -->





		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<!-- <u-tabbar v-model="current" :list="list" :mid-button="false"></u-tabbar> -->
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
				//columns: ['▅▅▅▅▅　　少阳', '▅▅　▅▅　少阴', '▅▅▅▅▅ 〇 老阳', '▅▅　▅▅ Ⅹ老阴'],
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
				selectyaos: ["请选择", "请选择", "请选择", "请选择", "请选择", "请选择"],
				yaoSelectChoiceid: [0, 0, 0, 0, 0, 0],
				current: 0,
				yaoName1: "请选择",
				yaoName2: "请选择",
				yaoName3: "请选择",
				yaoName4: "请选择",
				yaoName5: "请选择",
				yaoName6: "请选择",
				defaultSelector1: [-1],
				defaultSelector2: [-1],
				defaultSelector3: [-1],
				defaultSelector4: [-1],
				defaultSelector5: [-1],
				defaultSelector6: [-1],
				type: 'text',
				dateInstance: new Date(),
				dataInput: ''

			}
		},
		onLoad() {
			let {
				statusBarHeight,
				system
			} = uni.getSystemInfoSync()
			this.statusBarHeight = statusBarHeight
			this.navHeight = statusBarHeight + (system.indexOf('iOS') > -1 ? 44 : 48)



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
			// onChoiceClick: function(position) {
			// 	console.log("onChoiceClick : " + position);
			// 	var _self = this;
			// 	_self.choiceIndex = position;
			// 	_self.selectContent = _self.choiceList[position].name;
			// },
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
			confirm1(index) {
				this.$u.toast(this.columns[index].title);
				this.yaoName1 = this.columns[index].title;
				this.defaultSelector1[0] = index;
			},
			confirm2(index) {
				this.$u.toast(this.columns[index]);
				this.yaoName2 = this.columns[index];
				this.defaultSelector2[0] = index;
			},
			confirm3(index) {
				this.$u.toast(this.columns[index]);
				this.yaoName3 = this.columns[index];
				this.defaultSelector3[0] = index;
			},
			confirm4(index) {
				this.$u.toast(this.columns[index]);
				this.yaoName4 = this.columns[index];
				this.defaultSelector4[0] = index;
			},
			confirm5(index) {
				this.$u.toast(this.columns[index]);
				this.yaoName5 = this.columns[index];
				this.defaultSelector5[0] = index;
			},

			confirm6(index) {
				this.$u.toast(this.columns[index]);
				this.yaoName6 = this.columns[index];
				this.defaultSelector6[0] = index;
			},
			columnchange(e) {
				console.log(e);
			},
			btnClick(name) {
				console.log(name);
				this.$u.toast(name);
			},
			btnStart() {
				// let userArrt = this.defaultSelector6[0] + this.defaultSelector5[0] + this.defaultSelector4[0] + this
				// 	.defaultSelector3[0] + this.defaultSelector2[0] + this.defaultSelector1[0]
				// console.log(userArrt)
				// if (this.defaultSelector1 < 0 || this.defaultSelector2 < 0 || this.defaultSelector3 < 0 || this
				// 	.defaultSelector4 < 0 || this.defaultSelector5 < 0 || this.defaultSelector6 < 0) {
				// 	this.$u.toast("您没有完成手工指定");
				// 	return;
				// }
				
				let userArrt = this.defaultSelector6[0] + this.defaultSelector5[0] + this.defaultSelector4[0] + this
					.defaultSelector3[0] + this.defaultSelector2[0] + this.defaultSelector1[0]
				console.log("userArrt==="+userArrt)
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
			font-size: 40rpx;
			color: $uni-font-w-color;
			font-size: 40rpx;
			margin-top: 10rpx;
		}

		.top-tl-tip {
			color: $uni-font-w-color;
			margin-left: 20rpx;
			font-size: 22rpx;
			margin-top: 10rpx;
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
		top: 200rpx;
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
