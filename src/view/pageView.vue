<template>
	 <div class="pages-view">
	 	
	 	<router-view></router-view>
	 	 <!--根部-->
         <foot></foot>
	 </div>
	
</template>

<script>
	
import foot from '@/components/foot.vue';
export default {
  name: 'pageView',
  components:{foot}
}
</script>

<style>
</style>