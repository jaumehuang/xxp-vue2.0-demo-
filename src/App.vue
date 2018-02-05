<template>
  <div id="app">
    
     <router-view/>
		
     <!--根部-->
		<foot></foot>
  </div>
</template>

<script>
	import foot from '@/components/foot.vue';
export default {
  name: 'App',
  components:{foot}
}
</script>

<style>

</style>
