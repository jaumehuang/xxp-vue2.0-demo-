<template>
	<div class="list">
		
		<ul>
		   <li v-for="item in getMoreExpertList">
		   	 <router-link  :to="{name: 'detail',query: {Guid:item.Guid}}">
		   	  <img :src="item.OriginalImge"  />
		   	  <div class="title">{{item.Name}}</div>
		   	  <div class="price">￥{{item.ShopPrice}}</div>
		   	 </router-link>
		   </li>
		</ul>

        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
	</div>

</template>

<script>import { mapState, mapMutations } from 'vuex';
import InfiniteLoading from 'vue-infinite-loading';
import store from '@/store/index'
export default {
	name: 'list',
	data() {
		return {
			msg: 'Hello Vuex',
			getMoreExpertList: [], //用来存放数据的数组
			page_no: 1, //默认显示第一页数据
			page_size: 6, //每次请求7条
		}
	},
	components: {
		InfiniteLoading
	},
	methods: {
		getCourseList() {
			var that = this;
			this.$http.get('http://wapxxps.jshcn.cn/apiashx.ashx?action=GetProductList', {

					params: {
						PageIndex: this.page_no,
						PageCount: this.page_size,
						IsShow: "IsHot",
					},
					timeout: 3000,
				})
				.then(function(response) {

					if((JSON.parse(response.data.Msg)).length) {

						that.getMoreExpertList = that.getMoreExpertList.concat(JSON.parse(response.data.Msg));
						that.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
						that.page_no += 1; //将页码加1
                        console.log(that.getMoreExpertList)
					} else {

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

			if(this.page_no != 1) { //是因为我在页面初始化时请求了第一页的数据，所以当页面等于2时才请求数据
				this.getCourseList()
			}

		},
	},
	created() {
		// Getting movies data on created
		//			 this.getMoreExpertList.length = 0;
		this.getCourseList();
	}

}</script>

<style lang="scss">
	.list {
		ul{
	zoom: 1;
	padding:0;
	margin:0;
	list-style: none;
}

ul:after {
	content: ".";
	width: 0;
	height: 0;
	visibility: hidden;
	display: block;
	clear: both;
	overflow: hidden;
}
		li{
			width: 50%;
			float:left;
			/*height:162px;*/
			a{
				display: block;
			}
			img{
				height:162px;
				width:100%;
			}
			.title{
				
				overflow: hidden;
	            text-overflow: ellipsis;
	            white-space: nowrap;
			} 
			.price{
				color:red;
			}
		}
		
	}
</style>