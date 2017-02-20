<template>
 <div id="home">
 	<!--轮播图-->
 	<div class="swiper-container">
	    <div class="swiper-wrapper">
     		<div class="swiper-slide bigImg" v-for='img in bigImg' ><img :src='img.src' alt="" /></div> 
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	</div>
	<!--导航栏-->
	<div class="home_nav">
		<a href="javascript:void(0);">
			<img src="../assets/1001.png"/>
			<p>每日签到</p>
		</a>
		<a href="javascript:void(0);">
			<img src="../assets/1002.png"/>
			<p>十元专区</p>
		</a>
		<a href="javascript:void(0);">
			<img src="../assets/1003.png"/>
			<p>邀请赚钱</p>
		</a>
		<a href="javascript:void(0);">
			<img src="../assets/1004.png"/>
			<p>免费抢金币</p>
		</a>
		<a href="javascript:void(0);">
			<img src="../assets/1005.png"/>
			<p>摇红包</p>
		</a>
	</div>
	<!--获奖信息-->
	<div class="swiper-container home_trophyMsg">
		<div  class="swiper-wrapper">
			<div v-for="obj in trophyMsg"><img src="../assets/cont_notice.png"/>恭喜<span>{{obj.username}}</span>获得&ensp;（第{{obj.qishu}}期）&ensp;{{obj.title}}</div>
		</div>
	</div>
	<!--即将揭晓title-->
	<h1>即将揭晓<span>></span></h1>
	<!--获奖信息图片-->
	<div class="home_trophyMsgImg">
		<div v-for="obj in clearfix">
			<img :src="obj.codegoodspic" alt="" />
			<p>恭喜<span>{{obj.username}}</span>获得</p>
		</div>
	</div>
	<!--搜索框-->
	<div class="home_serch">
		<input type="text" placeholder="请输入商品名称进行搜索"/><button></button>
	</div>
	<!--导航栏-->
	
	<div class="goods_nav">
		<ul class="goods_nav_left">
			<li v-for="obj in goods_nav_left" @click="home_nav_border(obj)">
				<span :class="obj.cla">{{obj.text}}</span>
			</li>
		</ul>
		<div class="goods_nav_right">
			<div></div><p>分类</p>
		</div>
	</div>
	<!--所有商品-->
	<ul class="home_allGoods">
		<li v-for="wares in allWares">
			<img :src="wares.goodspic" alt="" />
			<p class="home_introduce">第（{{wares.codeperiod}}）期&emsp;{{wares.goodssnme}}</p>
			<p class="home_price">价值：￥{{wares.codeprice}}</p>
			<div class="home_buy">
				<div class="home_join">立即参与</div>
				<div class="home_carImg"></div>
			</div>
		</li>
	</ul>
 </div>
</template>

<script>
export default {
  data () {
    return {
    	bigImg:[],
    	trophyMsg:[],
    	clearfix:[],
    	goods_nav_left:[
    		{
    			text:'即将揭晓',
    			cla:'goods_nav_left1-1'
    		},
    		{
    			text:'最新',
    			cla:'goods_nav_left1'
    		},
    		{
    			text:'人气',
    			cla:'goods_nav_left1'
    		},
    		{
    			text:'价值',
    			cla:'goods_nav_left1'
    		}
    	],
    	home_nav_border:function(obj){
    		for(var i = 0;i < this.goods_nav_left.length;i++){
    			this.goods_nav_left[i].cla = 'goods_nav_left1';
    		}
    		obj.cla = 'goods_nav_left1-1';
    		console.log(obj)
    	},
    	allWares:[]
    }
  },
	created () {
		this.$http.get('/data/slider').then(function(data){
			this.bigImg = data.body.listItems //第一个data是形参
		});
		this.$http.get('/data/trophyMsg').then(function(data){
			this.trophyMsg = data.body.listItems //第一个data是形参
		});
		this.$http.get('/data/banner').then(function(data){
			this.clearfix = data.body.listItems //第一个data是形参
		});
		this.$http.get('/data/indexdata').then(function(data){
			this.allWares = data.body.listItems //第一个data是形参
		});
	},
	mounted () {
	 	var mySwiper1 = new Swiper('.swiper-container', {
	       direction: 'horizontal',
	       loop: true,
	      pagination: '.swiper-pagination',//小圆点
		    paginationClickable: true,//实现控制点击小点控制图片切换 
		   	autoplay : 2500,//可选选项  自动轮播auto 
		    autoplayDisableOnInteraction: false,//实现点击切换后还会自动轮播(重启autoplay属性)
		    loop:true,  //循环
		    observer:true//更新swiper
	    });
	     var mySwiper2 = new Swiper('.home_trophyMsg', {
	        direction: 'vertical',
	        slidesPerView: 1,
	        spaceBetween: 30,
	        loop:true,
	        autoplay : 1000,
	        mousewheelControl: true
	     })
	}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.bigImg>img{
		width: 100%;
	}
	.home_nav{
		overflow: hidden;
		width: 100%;
		padding-top: 0.5rem;
		a{
			float: left;
			width: 20%;
			text-align: center;
			img{
				width: 60%;
			}
			p{
				font-size: 1.1rem;
				color: #7C7C7C;
				line-height: 2rem;
			}
		}
	}
	.home_trophyMsg{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 1.2rem;
		line-height: 2rem;
		padding:0  0.5rem;
		box-sizing: border-box;
		height: 2rem;
		img{
			width: 1.5rem;
			margin-bottom: -0.3rem;
		}
	}
	#home h1{
		margin-top: 0.5rem;
		font-size: 1.3rem;
		color: #FF6600;
		box-sizing: border-box;
		padding:0 0.5rem;
		font-weight: 600;
		span{
			float: right;
			color: #C6C6C6;
		}
	}
	.home_trophyMsgImg{
		width: 95%;
		margin: 0.5rem 2.5%;
		border-radius: 1rem ;
		border: 0.25rem solid #EBEBEB;
		display: flex;
		div{
			flex: 1;
			text-align: center;
			padding: 0.5rem 0;
			img{
				width: 80%;
			}
		}
	}
	
	.home_serch{
		width: 98%;
		margin: 0.25rem 1%;
		border: 0.3rem solid #EBEBEB;
		/*height: 2.5rem;*/
		overflow: hidden;
		padding:0 0.1rem;
		box-sizing: border-box;
		border-radius: 0.5rem;
		input{
			width: 90%;
			height: 2rem;
			float: left;
			border-radius: 0.5rem 0 0 0.5rem;
			border: 0.3rem solid #EBEBEB;
			border-right: none;
		}
		button{
			border: none;
			width: 2.2rem;
			border-radius: 0 0.5rem 0.5rem 0;
			height: 2.4rem;
			background:#5A5A5A url(../assets/inputSearch.png) no-repeat center;
			background-size: 100%;
			float: left;
		}
	}
	
	.goods_nav{
		width: 100%;
		height: 3.5rem;
		display: flex;
		font-size: 1.1rem;
		border-top: 0.1rem solid #CDCDCD;
		border-bottom: 0.1rem solid #CDCDCD;
		.goods_nav_left{
			flex: 10;
			height: 100%;
			display: flex;
			li{
				flex: 1;
				text-align: center;
				box-sizing: border-box;
				padding-top: 0.9rem;
				span{
					padding: 0.5rem 0;
				}
				.goods_nav_left1-1{
					border-bottom: 0.2rem solid red;
				}
			}
		}
		.goods_nav_right{
			border-left: 0.1rem solid #cdcdcd;
			flex: 3;
			height: 100%;
			line-height: 1.5rem;
			box-sizing: border-box;
			padding: 1rem 0;
			div{
				margin-bottom: -1rem;
				width: 1.5rem;
				height: 1.5rem;
				float: left;
				margin-left: 1.6rem;
				background: red;
				background: url(../assets/set.png) no-repeat 0 71.5%;
				background-size: 150% 2200%;
			}
			p{
				float: left;
			}
		}
	}
	.home_allGoods{
		background:#EDEDED ;
		overflow: hidden;
		li{
			width: 49.5%;
			float: left;
			margin: 0.2rem 0.25%;
			background: #fff;
			text-align: center;
			img{
				width: 60%;
				height: 9.7rem;
			}
			p{
				font-size: 1.1rem;
				width: 95%;
                margin: 0.2rem 2.5%;
			}
			.home_introduce{
				overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
			}
			.home_price{
				text-align: left;
			}
			.home_buy{
				height: 3rem;
				box-sizing: border-box;
				width: 90%;
				margin: 0 5%;
				overflow: hidden;
				.home_join{
					float: left;
					width: 70%;
					height: 2.5rem;
					line-height: 2.3rem;
					margin: 0.25rem 0.5rem;
					font-size: 1.3rem;
					border-radius: 2rem;
					box-sizing: border-box;
					border: #FF6600 solid 0.1rem;
					color: #f60;
				}
				.home_carImg{
					float: left;
					width: 2.5rem;
					height: 2.5rem;
					background:#f60 url(../assets/set.png) no-repeat left 9.5%;
					background-size: 100% 1250%;
					margin: 0.25rem auto;
					border-radius: 50%;
				}
				
			}
		}
	}
</style>
