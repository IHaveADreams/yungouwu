<template>
	<div id="bask">
		<div class="back">
			<p class="backImg"></p>
			<p class="backText">返回</p>
		</div>
		<div class="bask_nav">
			<p>最新晒单</p>
			<p>人气晒单</p>
			<p>评论最多</p>
		</div>
		<ul class="new_ul">
			<li v-for="msg in msgs " class="new_content">
				<div class="new_photo"><img :src="msg.imgurl"/></div>
				<div class="new_comment">
					<p class="new_ctnt_title">
						<span class="new_username">{{msg.user}}</span>
						<span class="new_sd_title">{{msg.sd_title}} </span>{{msg.time}}
					</p>
					<p class="new_comment_content">
						{{msg.sd_content}}
					</p>	
					<p class="new_comment_img">
						<img v-for="imgUrl in msg.commentImg" :src="imgUrl" alt="" />
					</p>
					
						
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					msgs: []
				}
			},
			created() {
				this.$http.get('/data/news').then(function(data) {
					this.msgs = data.body //第一个data是形参
					for(var i = 0;i < this.msgs.length;i++){
						this.msgs[i].imgurl = "http://m.yungowu.cn/statics/uploads/" + this.msgs[i].pic;
						this.msgs[i].commentImg = this.msgs[i].sd_photolist.split(';');
						this.msgs[i].commentImg.pop()
						for(var j = 0; j < this.msgs[i].commentImg.length;j++){
							this.msgs[i].commentImg[j] = "http://m.yungowu.cn/statics/uploads/" + this.msgs[i].commentImg[j]
						}
					}
					console.log(this.msgs[2].commentImg);
				});
			}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.back {
		width: 100%;
		height: 3.4rem;
		background: #f60;
		padding-top: 0.3rem;
		padding-left: 1rem;
		box-sizing: border-box;
		.backImg {
			height: 2.5rem;
			width: 1.5rem;
			background: url(../assets/mainIcon.png) no-repeat left 60%;
			background-size: 480% 900%;
			float: left;
		}
		.backText {
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
	
	.bask_nav {
		display: flex;
		border-bottom: 0.2rem solid #C6C6C6;
		p {
			flex: 1;
			text-align: center;
			line-height: 1.4rem;
			margin: 0.8rem 0;
			font-size: 1.4rem;
			border-right: 0.1rem solid #999999;
		}
		p:nth-child(3) {
			border: none;
		}
	}
	.new_ul{
		background: #f4f4f4;
		padding-top: 0.5rem;
		.new_content{
			width: 100%;
			display: flex;
			margin-bottom: 0.8rem;
			.new_photo{
				flex: 1.5;
				text-align: center;
				img{
					width: 70%;
					border-radius: 50%;
					margin-top: 1rem;
					border: 0.2rem solid #fff;
				}
			}
			.new_comment{
				padding: 0.5rem;
				padding-left: 1rem;
				border: 0.1rem solid #DCDCDC;
				margin: 0.5rem 1rem 0 0;
				background: #fff;
				border-radius: 0.5rem;
				box-shadow: 0.1rem 0.1rem 0.1rem #e7e7e7;
				flex:7.2;
				color: #999;
				font-size: 1.1rem;
				.new_ctnt_title{
					line-height: 2rem;
					vertical-align: middle;
					.new_username{
						color: #2af;
						font-size: 1.4rem;
					}
					.new_sd_title{
						color: #666;
						font-size: 1.2rem;
						
					}
				}
				.new_comment_content{
					
				}
				.new_comment_img{
					margin-top: 0.5rem;
					img{
						margin-top: 0.5rem;
						height: 6rem;
						margin-right: 0.8rem;
					}
				}
				
			}
			
		}
	}
		
</style>