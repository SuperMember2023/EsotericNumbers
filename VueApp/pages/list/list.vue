<template>
	<view class="u-demo">
		<view>
			<u-alert-tips type="primary" title="相同 timerId 的按钮一定时间内只能点击1次"></u-alert-tips>
		</view>

		<view class="btn-box">
			<u-input v-model="inputValue" placeholder="请输入卦序号:102322" placeholder-class="color:#4a4a4a"/>
			<u-button @click="btnClick('A3')" timer-id="A">查询</u-button>
			<!-- <u-button @click="testco()">请求云对象的方法</u-button> -->
		</view>
		<view>
			<u-line color="#2979ff"></u-line>
		</view>
		<view  v-html="shijian">
		</view>
		<view  v-html="sizhu">
		</view>
		<view  v-html="shenSha">
		</view>
		<view>
				显示全伏爻：<u-switch v-model="fuYaoCellShow" size="25" ></u-switch> 显示纳音：<u-switch v-model="nayinShow" size="25" ></u-switch> 显示星宿：<u-switch v-model="xinxiuShow" size="25" ></u-switch>
				<u-line color="#2979ff"></u-line>
		</view>
		<u-row gutter="0">
			<u-col span="1" >
				<view ></view>
			</u-col>
			<u-col span="2" v-if="fuYaoCellShow">
				<view ></view>
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
		
			<u-col span="2" v-if="fuYaoCellShow">
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
					<view class="demo-layout bg-purple">{{liuShen[index]}}</view>
				</u-col>
				<u-col span="2" align="center" v-if="fuYaoCellShow">
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
	import {Solar,Lunar} from 'lunar-javascript'
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
				fuYao:['','','','','',''],
				
				
				//四柱信息
				sizhu:'',
				shijian:'',
				liuShen:[],
				shenSha:'',
				fuYaoShow:true,
				fuYaoCellShow:true,
				nayinShow:true,
				xinxiuShow:true,
			}
		},
		
		onLoad() {
			let cgua = sortdata.getChunGuaData(this.userArr);
			{
				this.chungua = cgua[2];
			}
			let date = new Date()
			var lunar = Lunar.fromDate(date);
			var eightChar = lunar.getEightChar();
			this.sizhu = '干支：'+lunar.getYearInGanZhiByLiChun()+'&#12288;'+ lunar.getMonthInGanZhiExact()+'&#12288;'+ lunar.getDayInGanZhiExact()+'&#12288;'+lunar.getTimeInGanZhi()+' 空亡：'+lunar.getDayXunKong();
				
			let year = date.getFullYear()
			let month = date.getMonth() + 1
			month >= 9 ? month :  month='0'+month
			let day = date.getDate()
			day >= 9 ? day : day = '0'+ day
			let hour = date.getHours()
			hour >= 9 ? hour : hour = '0'+hour 
			let minute = date.getMinutes()
			minute >= 9 ?  minute : minute ='0'+minute
			let second = date.getSeconds()
			second >= 9 ? second : second = '0'+second
			this.shijian = '时间：'+year + '-'+month+'-'+day+"  "+hour+":"+minute+'【'+lunar.getMonthInChinese()+'月'+lunar.getDayInChinese()+'】'
			
			this.liuShen = sortdata.getLiuShen(lunar.getDayGanExact())
			this.shenSha ='神煞：贵人:'+sortdata.getTianGanShenSha(lunar.getDayGanExact())[0]+' 文昌:'+sortdata.getTianGanShenSha(lunar.getDayGanExact())[1] +' 天喜:'+sortdata.getDiZhiShenSha(lunar.getYearZhiExact())
		},
		
		methods: {
			btnClick(name) {
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
					this.fuYaoShow = tempFuYao.length > 0
					//处理主卦
					for(let i=0; i<this.userArr.length; i++)
					{
						let item = this.userArr.charAt(i);
						let zhuGuaYao = zhuguanajia[i]
						
						let wuxin = zhuGuaYao[1]
						let liuqing = zhuGuaGongliuQing[sortdata.getWuXingIndex(wuxin)[1]]
						// let fywuxin = fuYaoWuXin.length> 0?fuYaoWuXin[1]:'' 
						if(this.fuYaoShow)
						{
							let zhuFuYao = tempFuYao[i]
							let fuYaoWuXin = sortdata.getWuXingIndex(zhuFuYao[1])
							this.fuYao[i] = zhuGuaGongliuQing[fuYaoWuXin[1]] + tempFuYao[i]
						}
							
						let ganzhi = zhuGuaYao.substring(0,2)
						let nayin = this.nayinShow?sortdata.getNayin(ganzhi):''
						if(item == '0' || item == '2')
						{
							this.zhugua[i] = '▅&#12288;▅ ' + liuqing+zhuGuaYao +nayin +' '+ this.zhuganShiYing[i]+(item == '2'?' X':'');
						}else
						{
							this.zhugua[i] = '▅▅▅ ' + liuqing+zhuGuaYao +nayin+' '+ this.zhuganShiYing[i]+(item == '3'?' 〇':'');
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
						let ganzhi = bianGuaYao.substring(0,2)
						let nayin = this.nayinShow?sortdata.getNayin(ganzhi):''
						if(item == '0' || item == '3')
						{
							this.biangua[i] = '▅&#12288;▅ ' + liuqing+ bianGuaYao + nayin//+' '+ this.bianganShiYing[i];
						}else
						{
							this.biangua[i] = '▅▅▅ ' + liuqing + bianGuaYao + nayin//+' '+this.bianganShiYing[i];
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
</style>
