<template>
	
	<div>
		个人中心
		<!--根部-->
		<foot></foot>
	</div>
	
    
</template>

<script>
	
	import foot from '@/components/foot.vue';
	export default {
		name: 'person',
		components:{foot},
		data() {
			
			return {
				
				nav:['首页','分类','购物车','个人中心']
			}
			
		}
	}
</script>

<style>
</style>