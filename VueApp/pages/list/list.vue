<template>
	<view class="u-demo">
		<view>
			<u-alert-tips type="primary" title="相同 timerId 的按钮一定时间内只能点击1次"></u-alert-tips>
		</view>

		<view class="btn-box">
			<u-input v-model="inputValue" placeholder="请输入商品名称" placeholder-class="color:#4a4a4a"/>
			<u-button @click="btnClick('A3')" timer-id="A">查询</u-button>
			<u-button @click="testco()">请求云对象的方法</u-button>
		</view>
		<view>
			<!-- <u-button @click="testco()">请求云对象的方法</u-button> -->
			<u-subsection :list="list" v-model="current" active-color="#ff9900" mode="button" ></u-subsection>
		</view>
		<u-row gutter="0">
			<u-col span="1">
				<view ></view>
			</u-col>
			<u-col span="2" >
				<view >XXX</view>
			</u-col>
			<u-col span="5">
				<view >{{zhuguaName}}</view>
			</u-col>
			<u-col span="3">
				<view >{{bianguaName}}</view>
			</u-col>
		</u-row>
		<u-row gutter="0">
			<u-col span="1">
				<view >神</view>
			</u-col>
			<u-col span="2" >
				<view >【伏卦】</view>
			</u-col>
			<u-col span="5">
				<view >【主卦】</view>
			</u-col>
			<u-col span="3">
				<view >【变卦】</view>
			</u-col>
		</u-row>
		<view v-for="(item, index) in userArr">		
			<u-row gutter="0">
				<u-col span="1">
					<view class="demo-layout bg-purple">妻财</view>
				</u-col>
				<u-col span="2" align="center" >
					<view class="demo-layout bg-purple-light" >{{fuYao[index]}}</view>
				</u-col>
				<u-col span="5" align="center">
	<!-- 				<view v-if="item == '1' || item == '3'" class="demo-layout bg-purple-light">▅▅▅</view>
					<view v-else><view v-html="'▅&#12288;▅'" class="demo-layout bg-purple-light"></view></view> -->
					<view class="demo-layout bg-purple-light" v-html="zhugua[index]"></view>
				</u-col>
				<u-col span="4" align="center">
		<!-- 			<view v-if="item == '1' || item == '2'" class="demo-layout bg-purple-light">▅▅▅</view>
					<view v-else><view v-html="'▅&#12288;▅'" class="demo-layout bg-purple-light"></view></view> -->
					<view class="demo-layout bg-purple-light" v-html="biangua[index]"></view>
				</u-col>
			<!-- 	<u-col span="2">
					<view class="demo-layout bg-purple-light">{{chungua[index]}}</view>
				</u-col> -->
			</u-row>
		</view>
		
	</view>
</template>

<script>
	import sortdata from '@/sortData.js'
	var numObj = {};
	export default {
		data() {
			return {
				list: [
						{
							name: '性别未选择'
						}, 
						{
							name: '男'
						}, 
						{
							name: '女'
						}
				],
				current: 0,
				userArr:"111111",
				inputValue:"",				
				seen:true,
				chungua:[],
				najia:['','','','','',''],
				zhuguaName:'',
				bianguaName:'',
				zhugua:['','','','','',''],
				biangua:['','','','','',''],
				zhuganShiYing:[],
				bianganShiYing:[],
				fuYao:['','','','','','']
			}
		},
		
		onLoad() {
			let cgua = sortdata.getChunGuaData(this.userArr);
			{
				this.chungua = cgua[2];
			}
		},
		
		methods: {
			btnClick(name) {
				let wuxingIndex = {
				    //金、木、水、火、土
					'金':0,
					'木':1,
					'水':2,
					'火':3,
					'土':4,
				}
				
				if(this.inputValue.length == 6)
				{
					this.userArr=this.inputValue;
					
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
					let tempFuYao = sortdata.getFuYao(zhuData)//伏爻纳甲
					//处理主卦
					for(let i=0; i<this.userArr.length; i++)
					{
						let item = this.userArr.charAt(i);
						let zhuGuaYao = zhuguanajia[i]
						let zhuFuYao = tempFuYao[i]
						let wuxin = zhuGuaYao[1]
						let liuqing = zhuGuaGongliuQing[sortdata.getWuXingIndex(wuxin)[1]]
						//this.fuYao[i] = zhuGuaGongliuQing[sortdata.getWuXingIndex(zhuFuYao[i])[1]]+zhuFuYao
						let fuYaoWuXin = sortdata.getWuXingIndex(zhuFuYao[1])
						this.fuYao[i] = zhuGuaGongliuQing[fuYaoWuXin[1]] + tempFuYao[i]
						console.log(fuYaoWuXin)
						if(item == '0' || item == '2')
						{
							this.zhugua[i] = '▅&#12288;▅ ' + liuqing+zhuGuaYao +' '+ this.zhuganShiYing[i]+(item == '2'?' X':'');
						}else
						{
							this.zhugua[i] = '▅▅▅ ' + liuqing+zhuGuaYao +' '+ this.zhuganShiYing[i]+(item == '3'?' 〇':'');
						}
					}
					
					let bianguanajia = sortdata.getBianGuaNajia(this.userArr)
					
					
					//处理主卦
					for(let i=0;i<this.userArr.length;i++)
					{
						let item = this.userArr.charAt(i);
						let bianGuaYao = bianguanajia[i]
						let wuxin = bianGuaYao[1]
						let liuqing = zhuGuaGongliuQing[sortdata.getWuXingIndex(wuxin)[1]]
						
						if(item == '0' || item == '3')
						{
							this.biangua[i] = '▅&#12288;▅ ' + liuqing+ bianGuaYao+' '+ this.bianganShiYing[i];
						}else
						{
							this.biangua[i] = '▅▅▅ ' + liuqing + bianGuaYao+' '+this.bianganShiYing[i];
						}
					}
			
					this.zhuguaName = zhuData[1] + ' '+ (zhuGuaGong == undefined ? '' :zhuGuaGong)
					this.bianguaName = bianData[1]+ ' '+ (bianGuaGong == undefined? '':bianGuaGong)
					// this.$u.toast(zhuGuaGongliuQing)
				}else
				{
					this.$u.toast("卦名不对");
				}
			},
			async testco() { // 注意异步
				const userdata = uniCloud.importObject('userdata') // 导入云对象
				try {
					const res = await userdata.sum(1,2) //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
					console.log(res) // 结果是3
					this.$u.toast(res);
				} catch (e) {
					console.log(e)
				}
				uniCloud.callFunction({
					name:"data"
				}).then(res=>{
					console.log(res)
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {
		padding: 20rpx 20rpx;
	}
	.btn-box {
		display: flex;
		margin-top: 20rpx;
	}
	.u-row {
		margin: 10rpx 0;
	}
	
	.demo-layout {
		// height: 80rpx;
		border-radius: 2rpx;
	}
	
	.bg-purple {
		font-size: 22rpx;
		background: #d3dce6;
	}
	
	.bg-purple-light {
		font-size: 22rpx;
		background: #e5e9f2;
	}
	
	.bg-purple-dark {
		font-size: 22rpx;
		background: #99a9bf;
	}
</style>
