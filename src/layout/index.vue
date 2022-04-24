<template>
	<div class="layout">
		<router-view />
		<Tabbar />
	</div>
</template>

<script>
	import Tabbar from './tabBar.vue'
	export default {
		components: {
			Tabbar
		}
	}
</script>

<style>
</style>
