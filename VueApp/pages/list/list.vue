<template>
	<view class="u-demo">
<!-- 		<view>
			<u-alert-tips type="primary" title="相同 timerId 的按钮一定时间内只能点击1次"></u-alert-tips>
		</view> -->
		<u-gap height="20" bg-color="#FFFFFF"></u-gap>
		<!-- <u-section class="mb-10" fontSize="32rpx" title="基本信息" type="line" :showLine="true" :right="true" sub-title="" padding="0 0 5px 10px" /> -->
		<view class="category">
			<view class="category-line"></view>
			<view class="category-title">基本信息</view>
		</view>

		<view class="quanyao">
			<view class="btn-box">
				<input class="input-default" placeholder="请输入卦序号:102322" v-model="inputValue" placeholder-class="color:#4a4a4a" />
				<view class="btn-default" @click="btnClick('A3')">查询</view>
			</view>
			<u-line margin="10rpx"></u-line>
		</view>
		<view class="quanyao">
			<view class="lable-view">
				<view class="lable-view-title">时间：</view>
				<view v-html="shijian"></view>
			</view>
			<u-line margin="10rpx"></u-line>
		</view>
		<view class="quanyao">
			<view class="lable-view">
				<view class="lable-view-title">干支：</view>
				<view v-html="sizhu"></view>
			</view>
			<u-line margin="10rpx"></u-line>
		</view>
		<view class="quanyao">
			<view class="lable-view">
				<view class="lable-view-title">神煞：</view>
				<view v-html="shenSha"></view>
			</view>
			<u-line margin="10rpx"></u-line>
		</view>
		<view class="quanyao">
			<view class="lable-view">
				<checkbox-group @change="checkboxChange" class="check-box">
					<label v-for="item in items" :key="item.value">
						<checkbox :value="item.value" :checked="item.checked" style="transform:scale(0.7)" />
						{{item.name}}
					</label>
				</checkbox-group>
			</view>
			<u-line margin="10rpx"></u-line>
		</view>

		<view class="category">
			<view class="category-line"></view>
			<view class="category-title">卦象信息</view>
		</view>
		<view class="list-item">
			<view class="list-item-cel">
				<view class="list-item-cel-view" style="-webkit-flex: 0.3;flex: 0.3;"></view>
				<view class="list-item-cel-view" style="-webkit-flex: 0.5;flex: 0.5;" v-if="fuYaoCellShow"></view>
				<view class="list-item-cel-view" style="-webkit-flex: 1;flex: 1;" >{{zhuguaName}}</view>
				<view class="list-item-cel-view" style="-webkit-flex: 0.3;flex: 0.3;"></view>
				<view class="list-item-cel-view" style="-webkit-flex: 1;flex: 1;" v-if="bianguaShow">{{bianguaName}}</view>
			</view>
			<view class="list-item-cel-line"></view>
		</view>
		<view class="list-item">
			<view class="list-item-cel">
				<view class="list-item-cel-view" style="-webkit-flex: 0.3;flex: 0.3;">神</view>
				<view class="list-item-cel-view" style="-webkit-flex: 0.5;flex: 0.5;" v-if="fuYaoCellShow">【伏卦】</view>
				<view class="list-item-cel-view" style="-webkit-flex: 1;flex: 1;" >【主卦】</view>
				<view class="list-item-cel-view" style="-webkit-flex: 0.3;flex: 0.3;"></view>
				<view class="list-item-cel-view" style="-webkit-flex: 1;flex: 1;" v-if="bianguaShow" >【变卦】</view>
			</view>
			<view class="list-item-cel-line"></view>
		</view>

		<view v-for="(item, index) in userArr" class="list-style">
			<view class="list-item">
				<view class="list-item-cel">
					<view class="list-item-cel-view" style="-webkit-flex: 0.3;flex: 0.3;" v-if="liuShen">{{liuShen[index]}}</view>
					<view class="list-item-cel-view" style="-webkit-flex: 0.5;flex: 0.5;color:red" v-if="fuYaoCellShow&&banFuYao[index]">{{fuYao[index]}}</view>
					<view class="list-item-cel-view" style="-webkit-flex: 0.5;flex: 0.5;" v-else-if="fuYaoCellShow">{{fuYao[index]}}</view>
					<view class="list-item-cel-view" style="-webkit-flex: 1;flex: 1;" v-html="zhugua[index]"></view>
					<view class="list-item-cel-view" style="-webkit-flex: 0.3;flex: 0.3;">{{zhuganShiYing[index]}}</view>
					<view class="list-item-cel-view" style="-webkit-flex: 1;flex: 1;" v-html="biangua[index]" v-if="bianguaShow"></view>
				</view>
				<view class="list-item-cel-sub" v-if="banFuYao[index]&&!fuYaoCellShow">
					<view class="list-item-cel-sub-view" style="-webkit-flex: 0.3;flex: 0.3;" v-if="liuShen"></view>
					<view class="list-item-cel-sub-view" style="-webkit-flex: 0.5;flex: 0.5;" ></view>
					<view class="list-item-cel-sub-view" style="-webkit-flex: 1;flex: 1;" >伏神:{{fuYao[index]}}</view>
					<view class="list-item-cel-sub-view" style="-webkit-flex: 0.3;flex: 0.3;"></view>
					<view class="list-item-cel-sub-view" style="-webkit-flex: 1;flex: 1;" v-if="bianguaShow"></view>
				</view>
				<view class="list-item-cel-line"></view>
			</view>
		</view>
		<u-gap height="20" bg-color="#FFFFFF"></u-gap>
		<view class="category">
			<view class="category-line"></view>
			<view class="category-title">反馈信息</view>
		</view>
	</view>
</template>

<script>
	import sortdata from '@/sortData.js'
	import {
		Solar,
		Lunar
	} from 'lunar-javascript'
	var numObj = {};
	export default {
		data() {
			return {
				items: [{
						value: 'fuYaoCellShow',
						name: '全伏爻'
					}, {
						value: 'nayinShow',
						name: '纳音'
					},
					{
						value: 'xinxiuShow',
						name: '星宿'
					}
				],
				current: 0,
				userArr: "111111",
				inputValue: "",
				seen: true,
				chungua: [],
				najia: ['', '', '', '', '', ''],
				zhuguaName: '',
				bianguaName: '',
				zhugua: ['', '', '', '', '', ''],
				biangua: ['', '', '', '', '', ''],
				zhuganShiYing: ['', '', '', '', ''],
				bianganShiYing: [],
				fuYao: ['', '', '', '', '', ''],
				banFuYao: [false, false, false,false,false,false],
				shiyingdong: ['', '', '', '', '', ''],
				content: `<p>露从今夜白，月是故乡明</p>
									<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
								`,

				//四柱信息
				sizhu: '',
				shijian: '',
				liuShen: ['','','','',''],
				shenSha: '',
				fuYaoShow: true,
				fuYaoCellShow: false,
				nayinShow: false,
				xinxiuShow: false,
				bianguaShow: false,
				textAlign: 'left'
				
			}
		},

		onLoad() {
			let platform = uni.getSystemInfoSync().platform
			console.log("platform:"+platform)
			switch (platform) {
				case 'android':
					this.fuYaoShow = false
					this.fuYaoCellShow = false
					this.nayinShow = false
					break;
				case 'ios':
					this.fuYaoShow = false
					this.fuYaoCellShow = false
					this.nayinShow = false
					break;
				default:
					this.fuYaoShow = true
					this.fuYaoCellShow = true
					this.nayinShow = true
					break;
			}
		},
		onShow() {
			let userData = getApp().globalData.userData
			let date = undefined
			if (userData != undefined) {
				date = userData.data ? new Date(userData.data) : new Date()
				this.userArr = userData.name
				this.load()
			} else {
				date = new Date()
			}
			
			var lunar = Lunar.fromDate(date);
			var eightChar = lunar.getEightChar();
			this.sizhu = lunar.getYearInGanZhiByLiChun() + '&#12288;' + lunar.getMonthInGanZhiExact() +
				'&#12288;' + lunar.getDayInGanZhiExact() + '&#12288;' + lunar.getTimeInGanZhi() + ' 空亡：' + lunar
				.getDayXunKong();

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
			
			this.shijian = year + '-' + month + '-' + day + "  " + hour + ":" + minute + '【' + lunar
				.getMonthInChinese() + '月' + lunar.getDayInChinese() + '】'

			
			this.liuShen = sortdata.getLiuShen(lunar.getDayGanExact().trim())
			
			let tianGanShenShaData = sortdata.getTianGanShenSha(lunar.getDayGanExact())
			if(tianGanShenShaData!= undefined){
				//神煞：
				this.shenSha = '贵人:' + tianGanShenShaData[0] + '&#12288;' + ' 文昌:' + tianGanShenShaData[1] + '&#12288;' + ' 天喜:' + sortdata.getDiZhiShenSha(lunar
						.getYearZhiExact())
			}
		},
		methods: {
			load() {
				let zhuguanajia = sortdata.getZhuGuaNajia(this.userArr)

				let zhuData = sortdata.getData(sortdata.getZhuGuaData(this.userArr));
				let bianData = sortdata.getData(sortdata.getBianGuaData(this.userArr));

				let zhushiyin = zhuData[3];
				let bianshiyin = bianData[3];

				this.zhuganShiYing = sortdata.getShiYing(zhushiyin)
				this.bianganShiYing = sortdata.getShiYing(bianshiyin)
				let zhuGuaGong = sortdata.getGuaGong(zhuData)
				let bianGuaGong = sortdata.getGuaGong(bianData)
				let zhuGuaGongliuQing = sortdata.getGuaGongWuXin(zhuData)
				let bianGuaGongliuQing = sortdata.getGuaGongWuXin(bianData)
				let tempFuYao = sortdata.getFuYao(zhuData) //伏爻纳甲
				console.log(tempFuYao)
				this.fuYaoShow = tempFuYao.length > 0
				let isShowBianYao = false
				let fuYaoDic = {'子孙':false,'官鬼':false,'妻财':false,'父母':false,'兄弟':false};
				//处理主卦
				for (let i = 0; i < this.userArr.length; i++) {
					let item = this.userArr.charAt(i);
					let zhuGuaYao = zhuguanajia[i]
					let wuxin = zhuGuaYao[1]
					let liuqing = zhuGuaGongliuQing[sortdata.getWuXingIndex(wuxin)[1]]
					// console.log(liuqing)
					fuYaoDic[liuqing] = true;
				}
				//处理主卦
				for (let i = 0; i < this.userArr.length; i++) {
					let item = this.userArr.charAt(i);
					let zhuGuaYao = zhuguanajia[i]

					let wuxin = zhuGuaYao[1]
					let liuqing = zhuGuaGongliuQing[sortdata.getWuXingIndex(wuxin)[1]]
					
					if (this.fuYaoShow) {
						//计算伏爻
						let zhuFuYao = tempFuYao[i]
						let fuYaoWuXin = sortdata.getWuXingIndex(zhuFuYao[1])
						this.fuYao[i] = zhuGuaGongliuQing[fuYaoWuXin[1]] + tempFuYao[i]
						// console.log(zhuGuaGongliuQing[fuYaoWuXin[1]]+"  "+ fuYaoDic[zhuGuaGongliuQing[fuYaoWuXin[1]]])
						if(!fuYaoDic[zhuGuaGongliuQing[fuYaoWuXin[1]]])
						{
							this.banFuYao[i] = true
						}else
						{
							this.banFuYao[i] = false
						}
					}
					
					let ganzhi = zhuGuaYao.substring(0, 2)
					let nayin = this.nayinShow ? sortdata.getNayin(ganzhi) : ''
					if (item == '0' || item == '2') {
						this.zhugua[i] = '▅&#12288;▅ ' + liuqing + zhuGuaYao + nayin + ' ' + this.zhuganShiYing[i] + (
							item == '2' ? ' X' : '');
						this.zhugua[i] = '▅&#12288;▅ ' + liuqing + zhuGuaYao + nayin
						this.zhuganShiYing[i] = this.zhuganShiYing[i] + (item == '2' ? 'X' : '');
					} else {
						this.zhugua[i] = '▅▅▅ ' + liuqing + zhuGuaYao + nayin + ' ' + this.zhuganShiYing[i] + (item ==
							'3' ? ' 〇' : '');
						this.zhugua[i] = '▅▅▅ ' + liuqing + zhuGuaYao + nayin
						this.zhuganShiYing[i] = this.zhuganShiYing[i] + (item == '3' ? '〇' : '');
					}
					
					if(item == '2' || item == '3')
					{
						isShowBianYao = true;
					}
				}

				let bianguanajia = sortdata.getBianGuaNajia(this.userArr)
				let platform = uni.getSystemInfoSync().platform
				switch (platform) {
					case 'android':
						this.bianguaShow = this.fuYaoCellShow?false:isShowBianYao;
						break;
					case 'ios':
						this.bianguaShow = this.fuYaoCellShow?false:isShowBianYao;
						break;
					default:
						this.bianguaShow = isShowBianYao;
						break;
				}
				
				//处理变卦
				for (let i = 0; i < this.userArr.length; i++) {
					let item = this.userArr.charAt(i);
					let bianGuaYao = bianguanajia[i]
					let wuxin = bianGuaYao[1]
					let liuqing = zhuGuaGongliuQing[sortdata.getWuXingIndex(wuxin)[1]]
					let ganzhi = bianGuaYao.substring(0, 2)
					let nayin = this.nayinShow ? sortdata.getNayin(ganzhi) : ''
					nayin = ''
					if (item == '0' || item == '3') {
						this.biangua[i] = '▅&#12288;▅ ' + liuqing + bianGuaYao + nayin //+' '+ this.bianganShiYing[i];
					} else {
						this.biangua[i] = '▅▅▅ ' + liuqing + bianGuaYao + nayin //+' '+this.bianganShiYing[i];
					}
				}

				this.zhuguaName = zhuData[1] + ' ' + (zhuGuaGong == undefined ? '' : zhuGuaGong)
				this.bianguaName = bianData[1] + ' ' + (bianGuaGong == undefined ? '' : bianGuaGong)
			},
			btnClick() {
				if (this.inputValue.length == 6) {
					this.userArr = this.inputValue
					this.load()
					// this.$u.toast(zhuGuaGongliuQing)
				} else {
					this.$u.toast("卦名不对");
				}
			},
			async testco() { // 注意异步
				const userdata = uniCloud.importObject('userdata') // 导入云对象
				try {
					const res = await userdata.sum(1, 2) //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
					console.log(res) // 结果是3
					this.$u.toast(res);
				} catch (e) {
					console.log(e)
				}
				uniCloud.callFunction({
					name: "data"
				}).then(res => {
					console.log(res)
				})
			},
			checkboxChange: function(e) {
				var items = this.items,
					values = e.detail.value;
				// console.info("values===" + values)
				if (values.indexOf('fuYaoShow') >= 0) {
					this.fuYaoShow = true;
				} else {
					this.fuYaoShow = false;
				}
				if (values.indexOf('fuYaoCellShow') >= 0) {
					this.fuYaoCellShow = true;
				} else {
					this.fuYaoCellShow = false;
				}
				if (values.indexOf('nayinShow') >= 0) {
					this.nayinShow = true;
				} else {
					this.nayinShow = false;
				}
				// console.info("this.fuYaoCellShow:"+this.fuYaoCellShow+" this.fuYaoShow:"+this.fuYaoShow);
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.indexOf(item.value) >= 0) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				this.load()
			}

		}
	}
</script>

<style lang="scss" scoped>
	$uni-line-color: #DDDDDD;
	$uni-magin:10rpx;
	$uni-magin_big:20rpx;
	$uni-font-size:28rpx;
	$uni-margin-top:15rpx;
	$uni-item-ceil-height:60rpx;
	$uni-item-ceil-sub-height:40rpx;
	$uni-button-height:80rpx;
	// $uni-font-color:#d3dce6;

	.u-demo {
		display: flex;
		flex-direction: column;
		padding: $uni-magin_big $uni-magin_big;
	}

	

	.u-row {
		margin: $uni-magin 0;
	}

	.demo-layout {
		// height: 80rpx;
		border-radius: 2rpx;
	}

	.bg-purple {
		// font-size: 22rpx;
		background: #d3dce6;
	}

	.bg-purple-light {
		// font-size: 22rpx;
		background: #e5e9f2;
	}

	.bg-purple-dark {
		// font-size: 22rpx;
		background: #99a9bf;
	}

	.flex-item {
		width: 33.3%;
		height: 200rpx;
		text-align: center;
		line-height: 200rpx;
	}

	.flex-item-V {
		width: 100%;
		height: 150rpx;
		text-align: center;
		line-height: 150rpx;
	}

	.text {
		margin: 0rpx 0rpx;
		padding: 0 5rpx;
		background-color: #ebebeb;
		height: 62rpx;
		line-height: 62rpx;
		text-align: center;
		color: #000;
		font-size: 30rpx;
	}

	.title {
		margin: 1rpx 2rpx;
		padding: 10rpx 5rpx;
		background-color: #d3dce6;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #777;
		font-size: $uni-font-size;
	}

	/**全伏爻*/
	.btn-box {
		display: flex;
		flex-direction: row;
		margin-top: $uni-magin_big;
	}
	.input-default{
		height: $uni-button-height;
		flex: 4;
		
	}
	.btn-default {
		padding: 10px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: $uni-font-size;
		margin: 4px 2px;
		background-color: #e7e7e7;
		color: black;
		border-radius: 5px;
		flex: 1;
	}
	.btn-default:active {
		background-color: #F4F0F0;
	}

	.category {
		/**分类*/
		display: flex;
		flex-direction: row;
		// background: rebeccapurple;
		align-content: center;
		margin-top: $uni-magin;

		.category-line {
			width: 5rpx;
			height: $uni-font-size;
			border-right: solid #000000 6rpx;
			border-radius: 5rpx;
			align-self: center;
		}

		.category-title {
			margin-left: 10rpx;
			font-weight: bold;
			font-size: $uni-font-size;
		}
	}
	.quanyao {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: $uni-magin;
		margin-bottom: $uni-magin;
		font-size: $uni-font-size;
		// background-color: #99a9bf;
		// word-break: keep-all;
	}

	.lable-view {
		display: flex;
		flex-direction: row;

		.lable-view-title {
			font-weight: bold;
			font-size: $uni-font-size;
			// background-color: #99a9bf;
			word-break: keep-all;
		}
	}

	.check-box {
		// background-color: #ff0000;
	}

	.mb-10 {
		font-size: $uni-font-size;
		color: red;
	}

	.line {
		// color: $uni-line-color;
		margin-top: $uni-magin_big;
		margin-bottom: $uni-magin_big;
		border: 1rpx solid red;
	}

	.list-item {
		// background: #FFFFFF;
		display: flex;
		flex-direction: column;
		
		.list-item-cel {
			display: flex;
			justify-content: space-around;
			height: $uni-item-ceil-height;

			.list-item-cel-view {
				flex: 1;
				overflow: hidden;
				/*隐藏*/
				white-space: nowrap;
				/*不换行*/
				text-overflow: ellipsis;
				align-self: center;
				text-align: center;
			}
		}
		
		.list-item-cel-sub {
			display: flex;
			justify-content: space-around;
			height:30rpx;
			color:#f00;
			font-size: 25rpx;
			font-weight: bold;
			// background-color: #000;
			margin-top: -15rpx;
			
		
			.list-item-cel-sub-view {
				flex: 1;
				// overflow: hidden;
				
				/*隐藏*/
				// white-space: nowrap;
				/*不换行*/
				// text-overflow: ellipsis;
				align-self: left;
				text-align: left;
				
			}
		}
	}

	.list-item-cel-line {
		height: 1px;
		width: 100%;
		background: #F5F5F5; //$uni-line-color;
	}

	/* 奇数行的样式 */
	.list-style:nth-child(odd)>.list-item {
		background: #fff;
	}

	/* 偶数行的样式 */
	.list-style:nth-child(even)>.list-item {
		background: #F5F5F5;
	}
</style>