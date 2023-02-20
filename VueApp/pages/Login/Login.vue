<template>
		<view>
			<view v-if="seen">现在你看到我了</view>
			<view v-else>你看不到我了</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					seen: false
				}
			}
		}
	</script>