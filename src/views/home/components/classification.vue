<template>
	<div class="classification">
		<van-swipe class="my-swipe" :autoplay="false" indicator-color="white">
			<van-swipe-item class="swiper_item" v-for="(item, index) in 4" :key="index">
				<van-row :gutter="20">
					<van-col :span="6">
						<img src="@/assets/images/home/menu01.png" alt="">
						<span>分类1</span>
					</van-col>
					<van-col :span="6">
						<img src="@/assets/images/home/menu01.png" alt="">
						<span>分类1</span>
					</van-col>
					<van-col :span="6">
						<img src="@/assets/images/home/menu01.png" alt="">
						<span>分类1</span>
					</van-col>
					<van-col :span="6">
						<img src="@/assets/images/home/menu01.png" alt="">
						<span>分类1</span>
					</van-col>
				</van-row>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.classification{
		padding: 30px;
		.my-swipe{
			height: 160px;
		}
		.swiper_item{
			text-align: center;
			height: 60;
			img{
				width: 70px;
				height: 70px;
			}
			span{
				font-size: 24px;
				color: #666;
				display: block;
				line-height: 28px;
			}
		}
		/deep/ .van-swipe__indicators{
			bottom: 0;
			.van-swipe__indicator{
				background: #E5E5E5;
			}
			.van-swipe__indicator--active{
				width: 31px;
				height: 5px;
				background: #FF9000!important;
				border-radius: 3px;
			}
		}
	}
</style>