<template>
	
	<div>
		<!--产品列表-->
		<PrList></PrList>
	</div>
	
    
</template>

<script>
	
	import PrList from '@/components/list.vue';
	export default {
		name: 'classify',
		components:{PrList},
		data() {
			
			return {
				
				nav:['首页','分类','购物车','个人中心']
			}
			
		}
	}
</script>

<style>
</style>