<template>
	<div id="new">
		<!--返回栏-->
		<div class="back">
			<p class="backImg"></p>
			<p class="backText">返回</p>
		</div>
		<!--分类栏-->
		<div class="new_classly">
			全部分类
		</div>
		<ul >
			<li class="new_shop" v-for="data in datas">
				<div class="new_img">
					<img :src="data.codegoodspic"/>
				</div>
				<div class="new_text" @click="ff()">
					<p>获得者：{{data.username}}</p>
					<p>商品价值：￥{{data.codeprice}}</p>
					<p>本次参与: {{data.codeRIpAddr}}人次</p>
					<p>揭晓时间：{{data.codeRTime}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>

	export default {
		name: 'hello',
		data() {
			return {
				datas:[],
				ff:function(){
					console.log(sss)
				}
			}
		},
		created () {
			this.$http.get('/data/zxjx').then(function(data){
				this.datas = data.body.listItems //第一个data是形参
			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/*返回栏*/

.back{
	width: 100%;
	height: 3.4rem;
	background: #f60;
	padding-top: 0.3rem;
	padding-left: 1rem;
	box-sizing: border-box;
	.backImg{
		height: 2.5rem;
		width: 1.5rem;
		background: url(../assets/mainIcon.png) no-repeat left 60%;
		background-size:480% 900%;
		float: left;
	}
	.backText{
		font-size: 1.3rem;
		line-height: 2.3rem;
		color: #fff;
		background: #f60;
		float: left;
		border: 0.1rem solid #E65000;
		border-left: none;
		margin-top: 0.1rem;
		padding: 0 0.8rem 0 0.2rem;
		border-radius: 0 0.5rem 0.5rem 0;
	}
}
#new{
	.new_classly{
		color: #999;
		background: #f7f7f7;
		border-bottom: 0.1rem solid #dedede;
		font-size: 1.3rem;
		line-height: 2.8rem;
		padding-left: 1rem;
		box-sizing: border-box;
		width: 100%;
		/*height: 1.8rem;*/
	}
	.new_shop{
		width: 100%;
		border-bottom: 0.15rem solid #dedede;
		overflow: hidden;
		padding: 0.5rem 0;
		.new_img{
			width: 17%;
			margin: 0.5rem;
			padding: 0.5rem;
			height: 5.5rem;
			line-height: 5.5rem;
			float: left;
			border: 0.1rem solid #e5e5e5;
			img{
				width: 100%;
			}
		}
		.new_text{
			flex: 7.5;
			p{
				font-size: 1.1rem;
			}
			p:nth-child(1){
				margin-top: 1rem;
			}
		}
	}
}
</style>