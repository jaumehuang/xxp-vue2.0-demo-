<template>
	<div class="list">
		<img :src="item.OriginalImge" v-for="item in getMoreExpertList" />
        
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
	</div>

</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import InfiniteLoading from 'vue-infinite-loading';
	import store from '@/store/index'
	export default {
		name: 'list',
		data() {
			return {
				msg: 'Hello Vuex',
                getMoreExpertList:[],  //用来存放数据的数组
                page_no:1,   //默认显示第一页数据
                page_size:6,//每次请求7条
			}
		},
		components: {
        InfiniteLoading
         },
		methods: {
			getCourseList() {
                var that=this;
				this.$http.get('http://wapxxps.jshcn.cn/apiashx.ashx?action=GetProductList', {

						params: {
							PageIndex: this.page_no,
							PageCount: this.page_size,
							IsShow: "IsHot",
						},
						timeout: 3000,
					})
					.then(function(response) {

						if((JSON.parse(response.data.Msg)).length){
						
							that.getMoreExpertList = that.getMoreExpertList.concat(JSON.parse(response.data.Msg));
							 that.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                            that.page_no+=1;  //将页码加1
                          
						}else{
							
							that.$refs.infiniteLoading.$emit('$InfiniteLoading:complete'); //没有数据显示没有更多
						}
					})
					.catch(function(error) {

						if(error.status == 'timeout') { //超时,status还有success,error等值的情况
							　　　　　　　　　　
							alert("超时");　　　　
						}
					});

			},
	     onInfinite() {
	     	
            if(this.page_no!=1){  //是因为我在页面初始化时请求了第一页的数据，所以当页面等于2时才请求数据
                 this.getCourseList()
              }
            
            },
		},
		created() {
			// Getting movies data on created
//			 this.getMoreExpertList.length = 0;
             this.getCourseList();
		}

	}
</script>

<style lang="scss">
	.list {
		img {
			width: 50%;
			height:162px;
		}
	}
</style>