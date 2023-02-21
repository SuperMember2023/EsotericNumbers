<template>
	<view>
		<view class="u-demo">
			<u-section title="占事标题" :right="false"></u-section>
			<u-input :type="type" :border="true" class="u-config-item" placeholder="请输入您所测何事"/>
			<u-section title="手式指定" :right="false" class="u-config-item"></u-section>
			<u-row gutter="16" class="u-config-item">
				<u-col span="2">
					<view class="demo-layout bg-purple">六爻</view>
				</u-col>
				<u-col span="4">
					<u-button @click="show6 = true" border="false" class="button">{{yaoName6}}</u-button>
					<u-picker mode="selector" v-model="show6"  :default-selector="defaultSelector6" :range="columns" 		@confirm="confirm6"></u-picker>
				</u-col>
			</u-row>
			<u-row gutter="16" class="u-config-item">
				<u-col span="2">
					<view class="demo-layout bg-purple">五爻</view>
				</u-col>
				<u-col span="4">
					<u-button @click="show5 = true" border="false" class="button">{{yaoName5}}</u-button>
					<u-picker mode="selector" v-model="show5"  :default-selector="defaultSelector5" :range="columns" 		@confirm="confirm5"></u-picker>
				</u-col>
			</u-row>
			<u-row gutter="16" class="u-config-item">
				<u-col span="2">
					<view class="demo-layout bg-purple">四爻</view>
				</u-col>
				<u-col span="4">
					<u-button @click="show4 = true" border="false" class="button">{{yaoName4}}</u-button>
					<u-picker mode="selector" v-model="show4"  :default-selector="defaultSelector4" :range="columns" 		@confirm="confirm4"></u-picker>
				</u-col>
			</u-row>
			<u-row gutter="16" class="u-config-item">
				<u-col span="2">
					<view class="demo-layout bg-purple">三爻</view>
				</u-col>
				<u-col span="4">
					<u-button @click="show3 = true" border="false" class="button">{{yaoName3}}</u-button>
					<u-picker mode="selector" v-model="show3"  :default-selector="defaultSelector3" :range="columns" 		@confirm="confirm3"></u-picker>
				</u-col>
			</u-row>
			<u-row gutter="16" class="u-config-item">
				<u-col span="2">
					<view class="demo-layout bg-purple">二爻</view>
				</u-col>
				<u-col span="4">
					<u-button @click="show2 = true" border="false" class="button">{{yaoName2}}</u-button>
					<u-picker mode="selector" v-model="show2"  :default-selector="defaultSelector2" :range="columns" 		@confirm="confirm2"></u-picker>
				</u-col>
			</u-row>
			<u-row gutter="16" class="u-config-item">
				<u-col span="2">
					<view class="demo-layout bg-purple">初爻</view>
				</u-col>
				<u-col span="4">
					<u-button @click="show1 = true" border="false" class="button">{{yaoName1}}</u-button>
					<u-picker mode="selector" v-model="show1"  :default-selector="defaultSelector1" :range="columns" 		@confirm="confirm1"></u-picker>
				</u-col>
			</u-row>
			<u-button :ripple="true" ripple-bg-color="#909399" class="u-config-item" @click="btnStart">开始</u-button>
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<!-- <u-tabbar v-model="current" :list="list" :mid-button="false"></u-tabbar> -->
	</view>
</template>

<script >
	export default {
		data() {
			return {
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						count: 2,
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '放映厅',
						customIcon: false,
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '发布',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "play-right",
						selectedIconPath: "play-right-fill",
						text: '直播',
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false,
				//columns: ['▅▅▅▅▅　　少阳', '▅▅　▅▅　少阴', '▅▅▅▅▅ 〇 老阳', '▅▅　▅▅ Ⅹ老阴'],
				columns: [ '▅▅　▅▅　少阴', '▅▅▅▅▅　　少阳','▅▅　▅▅ Ⅹ老阴','▅▅▅▅▅ 〇 老阳'],
				current: 0,
				yaoName1:"请选择",
				yaoName2:"请选择",
				yaoName3:"请选择",
				yaoName4:"请选择",
				yaoName5:"请选择",
				yaoName6:"请选择",
				defaultSelector1:[-1],
				defaultSelector2:[0],
				defaultSelector3:[0],
				defaultSelector4:[0],
				defaultSelector5:[0],
				defaultSelector6:[0],
				type: 'text'
			}
		},
		methods: {
			confirm1(index) {
				this.$u.toast(this.columns[index]);
				this.yaoName1 = this.columns[index];
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
				this.defaultSelector5[0] = index;
			},
			columnchange(e) {
				console.log(e);
				let column = e.column, index = e.index;
				this.$u.toast("11");
			},
			btnClick(name) {
				console.log(name);
				this.$u.toast(name);
			}
			,
			btnStart()
			{
				// let re = [defaultSelector1,defaultSelector2,defaultSelector3,defaultSelector4,defaultSelector5,defaultSelector6]
				if(this.defaultSelector1 < 0 || this.defaultSelector2 < 0 || this.defaultSelector3< 0 || this.defaultSelector4 < 0 || this.defaultSelector5<0|| this.defaultSelector6<0)
				{
					this.$u.toast("您没有完成手工指定");
					return ;
				}
				this.$u.toast(this.defaultSelector2);
			}
		}
	}
</script>

<style lang="scss">
	.u-demo {
		padding: 100rpx 100rpx;
	}

	.u-config-item {
		margin-top: 15rpx;
	}

	.button {
		width: 450rpx;
	}

	.col {
		padding: 100rpx 100rpx;
	}
</style>
