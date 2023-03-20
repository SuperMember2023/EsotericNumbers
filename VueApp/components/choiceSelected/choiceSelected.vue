<template>
	<view class="container">
		<view  class="selected-area" @click="btnShowHideClick">
			<text class="selected-text">{{selectContent}}</text>
			<image style="width: 30rpx;height: 30rpx;padding-right: 20rpx;"
				:src="isShowChoice?'../../static/images/arrow_up.png':'../../static/images/arrow_down.png'"></image>

		</view>
		<view v-if="isShowChoice" class="dialog-area" @click="hideDialog">
			<view :class="isfullDisplay?'dialog-list':'dialog-list-small'" @click.stop="dialogClick">
				<view :class="selectContent !== item.name ?'dialog-list-item':'dialog-list-item-select'"
					v-for="(item, index) in choiceList" :key="index" @click="btnChoiceClick(index)">
					<text style="margin: 0 20rpx;">{{item.name}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "ChoiceSelected",
		data() {
			return {
				isShowChoice: false,
				// currentItemValue: ''
				height:0
			};
		},
		props: {
			selectContent: String,
			choiceIndex: Number,
			currentItem: Number, //父类操作的列表index
			choiceList: {},
			isfullDisplay: false,
		},
		onLoad() {
			console.info(this.selectContent + " choiceIndex:" + this.choiceIndex)
		},
		methods: {
			// btnShowHideClick() {
			// 	console.log('执行了点击方法')

			// },
			// 显示与隐藏选择内容
			btnShowHideClick: function() {
				var _this = this
				var screenHeight = uni.getSystemInfoSync().windowHeight;
				if (_this.isShowChoice) {
					_this.isShowChoice = false
				} else {
					_this.isShowChoice = true
					console.info("asdfasdfafs ")
					const query = uni.createSelectorQuery().in(this);
					query.select('.container').boundingClientRect(data => {
						// console.log("得到布局位置信息" + JSON.stringify(data));
						// console.log("节点离页面顶部的距离为" + data.top);
						console.log("节点离页面顶部的距离为" + data.top+ " h: "+(data.top+300)+"===screenHeight:"+screenHeight+" :"+(screenHeight/2) );
						// this.viewHeight = data.height
						_this.height = (data.top+300)-(screenHeight);
						if(_this.height>0){
							console.info("开始滚动==="+_this.height);
							uni.pageScrollTo({
								scrollTop: _this.height
							})
						}
					}).exec();


				}
			},
			hideDialog: function() {
				console.log('点击了阴影部分')
				var _this = this;
				_this.isShowChoice = false;
			},
			dialogClick: function(res) {
				console.log('点击了dialog')
			},
			// 选择
			btnChoiceClick: function(position) {
				var _this = this
				_this.isShowChoice = false
				// _this.$emit("onChoiceClick", position, _this.currentItem)
				console.info("btnChoiceClick====="+position);
				_this.$emit("onChoiceClick", position);
			},
		}
	}
</script>

<style>
	.container {
		margin: 10rpx 10rpx 10rpx 0;
		padding-left: 10rpx;
		/* 	background-color: aqua; */
		/* height: 100vh; */
	}

	.selected-area {
		display: flex;
		flex-direction: row;
		align-items: center;
		/* width: 90%; */
		min-height: 70rpx;
		border: 2rpx solid #878585;
		border-radius: 8rpx;
		/* margin-right: 20rpx; */


	}

	.selected-text {
		flex-grow: 1;
		color: #878585;
		font-size: 30rpx;
		padding-left: 20rpx;
		padding-top: 5rpx;
		padding-bottom: 5rpx;

	}



	.line {
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		border: 1rpx solid red;
	}

	.dialog-area {
		position: absolute;
		
		width: 100%;
		height: calc(100% - 62rpx);
		/* background: red; */
		z-index: 99;
	}

	.dialog-list {
		position: absolute;
		/*定位的百分比是参照父容器的宽高*/
		/* left: 48%; */
		top: 8rpx;
		/*使用transform实现元素的居中是参考元素本身的宽高*/
		/* transform: translate(-48%, 0); */
		width: 90%;
		/* width:max-content; */
		/* max-height: 80vh; */
		background: white;
		border-radius: 5rpx;
		box-shadow: 5px 5px 10px gray;
		z-index: 100;
	}

	.dialog-list-small {
		position: absolute;
		/* left: 10%; */
		top: 8rpx;
		/* transform: translate(-10%, 0); */
		width: 80%;
		background: white;
		border-radius: 5rpx;
		box-shadow: 5px 5px 10px gray;
		z-index: 100;
	}

	.dialog-list scroll-view {
		width: 100%;
		max-height: 80vh;
	}

	.dialog-list-item {
		width: 100%;
		padding: 15rpx 0;
		margin: 15rpx 0;

	}

	.dialog-list-item-select {
		width: 100%;
		padding: 15rpx 0;
		margin: 15rpx 0;
		background-color: #F7F7F7;
	}

	.dialog-list-item:hover {
		background-color: #F7F7F7;
	}
</style>
