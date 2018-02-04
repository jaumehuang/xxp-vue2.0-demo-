<template>
	
	<div>
		购物车
		<!--根部-->
		<foot></foot>
	</div>
	
    
</template>

<script>
	
	import foot from '@/components/foot.vue';
	export default {
		name: 'cart',
		components:{foot},
		data() {
			
			return {
				
				nav:['首页','分类','购物车','个人中心']
			}
			
		}
	}
</script>

<style>
</style>>