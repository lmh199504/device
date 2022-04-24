<template>
	<div class="swiper">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item class="swiper_item" v-for="(item, index) in 4" :key="index">
				<img src="@/assets/images/home/banner.png" alt="">
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.swiper{
		margin-top: -100px;
		padding: 30px;
		height: 204px;
		.swiper_item{
			border-radius: 10px;
			img{
				height: 204px;
			}
		}
	}
</style>