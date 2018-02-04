<template>
	
	<div class="home">
		<!--轮播-->
		<banner></banner>
		<!--产品列表-->
		<PrList></PrList>
		<!--根部-->
		<foot></foot>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import banner from '@/components/banner.vue';
	import PrList from '@/components/list.vue';
	import foot from '@/components/foot.vue';
	export default {
    name: 'home',
    components:{banner,PrList,foot},
    computed: {
     // Getting Vuex State from store/modules/movie

  },
    methods: {
    // Dispatching getMovie
//  getMovie: function () {
//    this.$store.dispatch('getMovie')
//  }
  },
  created () {
    // Getting movies data on created
    //this.getMovie()
  }
}
</script>

<style>
	
</style>