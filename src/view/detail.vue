<template>
	<div class="detail">

		<template v-for="item in arrList">

			<div class="top">
				<img :src="item.OriginalImge" />
				<div class="title">{{item.Name}}</div>
			</div>
			<div class="details" v-html="item.Detail">

			</div>

		</template>

	</div>
</template>

<script>
	export default {
		name: 'detail',

		data() {

			return {

				nav: ['首页', '分类', '购物车', '个人中心'],
				arrList: [],
				tt: '',
			}

		},
		methods: {

			GetData() {
				let that = this;
				this.$http.get('http://wapxxps.jshcn.cn/apiashx.ashx?action=GetProduct', {

						params: {

							ProductGuid: this.$route.query.Guid
						},
						timeout: 3000,
					})
					.then(function(response) {

						let HtmlUtil = {
							/*1.用正则表达式实现html转码*/
							htmlEncodeByRegExp: function(str) {
								var s = "";
								if(str.length == 0) return "";
								s = str.replace(/&/g, "&amp;");
								s = s.replace(/</g, "&lt;");
								s = s.replace(/>/g, "&gt;");
								s = s.replace(/ /g, "&nbsp;");
								s = s.replace(/\'/g, "&#39;");
								s = s.replace(/\"/g, "&quot;");
								return s;
							},
							/*2.用正则表达式实现html解码*/
							htmlDecodeByRegExp: function(str) {
								var s = "";
								if(str.length == 0) return "";
								s = str.replace(/&amp;/g, "&");
								s = s.replace(/&lt;/g, "<");
								s = s.replace(/&gt;/g, ">");
								s = s.replace(/&nbsp;/g, " ");
								s = s.replace(/&#39;/g, "\'");
								s = s.replace(/&quot;/g, "\"");
								return s;
							}
						};
						let arr = JSON.parse(response.data.Msg);
						let encodeHtml = HtmlUtil.htmlEncodeByRegExp(arr[0].Detail);
						let decodeHtml = HtmlUtil.htmlDecodeByRegExp(encodeHtml);
						that.tt = decodeHtml;
						arr[0].Detail = decodeHtml;
						that.arrList = arr;

					})
					.catch(function(error) {

						if(error.status == 'timeout') { //超时,status还有success,error等值的情况
							　　　　　　　　　　
							alert("超时");　　　　
						}
					});
			}

		},
		created() {

			this.GetData()
			
		}
	}
</script>

<style lang="scss">
	.top {
		img {
			width: 100%;
			height: 300px;
		}
	}
</style>