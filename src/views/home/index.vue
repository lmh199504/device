<template>
	<div class="home">
		<div class="banner">
			<img src="@/assets/images/home/top_banner.png" alt="">
		</div>
		<!-- 轮播图 -->
		<SwiperCom />
		<!-- 类目分类 -->
		<Classification />
		<!-- 分割线 -->
		<div class="divider"></div>
		<!-- 热门设备 -->
		<HotDevice />
	</div>
</template>

<script>
	import SwiperCom from './components/swiper.vue'
	import Classification from './components/classification.vue'
	import HotDevice from './components/hotDevice.vue'
	export default {
		name: 'Home',
		components: {
			SwiperCom,
			Classification,
			HotDevice
		}
	}
</script>

<style scoped lang="less">
	.home {
		.banner {
			img {
				width: 100%;
				height: auto;
			}
		}
		.divider{
			width: 100%;
			height: 13px;
			background: #E6E6E6;
		}
	}
</style>
