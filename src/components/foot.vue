<template>
	<footer>
		
		<router-link  :to="{ name: 'home'}"  >
                     首页
          </router-link>
          <router-link  :to="{ name: 'classify'}"  >
                     分类
          </router-link>
             <router-link  :to="{ name: 'cart'}"  >
             购物车
          </router-link>
         <router-link  :to="{ name: 'person'}"  >
          个人中心
          </router-link>
	</footer>
</template>

<script>
	export default {
		name: 'foot',
		data() {
			
			return {
				
				nav:['首页','分类','购物车','个人中心']
			}
			
		}
	}
</script>

<style lang="scss">
	footer{
		
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		background: #fff;
		border-top:1px solid #333;
		a{
			display: inline-block;
			width:24%;
			text-align: center;
			height:60px;
			line-height: 60px;
			font-size: 16px;
			
		}
	}
</style>