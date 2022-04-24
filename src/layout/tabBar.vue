<template>
	<div class="tabbar">
		<van-tabbar route>
			<van-tabbar-item to="/home">
				<span>首页</span>
				<template #icon="props">
					<img v-if="props.active" src="@/assets/tabIcon/home_active.png" alt="">
					<img v-else src="@/assets/tabIcon/home.png" alt="">
				</template>
			</van-tabbar-item>
			<van-tabbar-item to="/deviceCenter">
				<span>设备中心</span>
				<template #icon="props">
					<img v-if="props.active" src="@/assets/tabIcon/device_active.png" alt="">
					<img v-else src="@/assets/tabIcon/device.png" alt="">
				</template>
			</van-tabbar-item>
			<van-tabbar-item to="/company">
				<span>资源单位</span>
				<template #icon="props">
					<img v-if="props.active" src="@/assets/tabIcon/company_active.png" alt="">
					<img v-else src="@/assets/tabIcon/company.png" alt="">
				</template>
			</van-tabbar-item>
			<van-tabbar-item to="/mine">
				<span>我的</span>
				<template #icon="props">
					<img v-if="props.active" src="@/assets/tabIcon/mine_active.png" alt="">
					<img v-else src="@/assets/tabIcon/mine.png" alt="">
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
