<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="item in bannerList"><img :src="item.Value"/></swiper-slide>
   
    <!-- Optional controls -->
   <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'banner',
   components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
        
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay:true,
          delay: 1000,
          direction : 'horizontal',
          pagination: {
             el: '.swiper-pagination',
           },
        },
        bannerList:0
    }
    
   },
   methods: {
   	
			banner() {
        
        var that=this;
				this.$http.get('http://wapxxps.jshcn.cn/apiashx.ashx?action=GetBanner', {

						params: {
							ConfigType: 5
						},
						timeout: 1000,
					})
					.then(function(response) {
					
						that.bannerList=JSON.parse(response.data.Msg);		
					})
					.catch(function(error) {

						if(error.status == 'timeout') { //超时,status还有success,error等值的情况
							　　　　　　　　　　
							alert("超时");　　　　
						}
					});

			}
		},
		created() {
			// Getting movies data on created
			this.banner()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("../assets/css/swiper.min.css");
</style>
<style scoped lang="scss">

 .swiper-slide{

/* 	 height:300px;*/
 	 width:100%;
 	 img{
 	 	width:100%;
 	 }
 }
  .hello{ 
     h3{
     	 color:red;
     }
  } 
</style>
