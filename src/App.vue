<template>
  <div id="index">
    <router-view></router-view>
    <div id="index_footer">
    	<a v-for="nav in navArr" :href="nav.url" :class="nav.cla" @click="change(nav)"><div></div>{{nav.txt}}</a>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			navArr : [
				{
					url : "#/Home",
					cla : "index_btn1-1",
					txt : "云购",
					index : 1
				},
				{
					url : "#/NewAnnounce",
					cla : "index_btn2",
					txt : "最新揭晓",
					index : 2
				},
				{
					url : "#/Bask",
					cla : "index_btn3",
					txt : "晒单",
					index : 3
				},
				{
					url : "#/ShopCar",
					cla : "index_btn4",
					txt : "购物车",
					index : 4
				},
				{
					url : "#/Mine",
					cla : "index_btn5",
					txt : "我的云购",
					index : 5
				}
			]
		}
	},
	methods : {
		change : function(obj){
			for(var i = 0;i < this.navArr.length;i++){
				this.navArr[i].cla = 'index_btn' + this.navArr[i].index
			}
			obj.cla = 'index_btn' + obj.index + '-1'
		}
	}
}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
		font-family: "微软雅黑";
	}
	a{
		text-decoration: none;
		color: #ccc;
	}
	ul,ol,li{
		list-style: none;
	}
	#index{
		padding-bottom: 4rem;
	}
	#index_footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 4rem;
		display: flex;
		background: #F7F7F7;
		border-top: 1px solid #EBEBEB;
		a{
			line-height: 1.3rem;
			font-size: 1.2rem;
			flex: 1;
			text-align: center;
			height: 100%;
			/*雪碧图*/
			div{
				height: 2.7rem;
				width: 100%;
			}
		}
		.index_btn1 div{
				background: url(assets/footer.png) no-repeat center 36%;
				background-size: 45% 1400%;
			}
		.index_btn2 div{
			background: url(assets/footer.png) no-repeat center 50.5%;
			background-size: 45% 1400%;
		}
		.index_btn3 div{
			background: url(assets/footer.png) no-repeat center 64.7%;
			background-size: 45% 1400%;
		}
		.index_btn4 div{
			background: url(assets/footer.png) no-repeat center 7%;
			background-size: 45% 1400%;
		}
		.index_btn5 div{
			background: url(assets/footer.png) no-repeat center 21.7%;
			background-size: 45% 1400%;
		}
		.index_btn1-1{
			color:#FF6600;
			div{
				background: url(assets/footer.png) no-repeat center 29%;
				background-size: 45% 1400%;
			}
		} 
		.index_btn2-1{
			color:#FF6600;
			div{
				background: url(assets/footer.png) no-repeat center 43.5%;
				background-size: 45% 1400%;
			}
		}
		.index_btn3-1{
			color:#FF6600;
			div{
				background: url(assets/footer.png) no-repeat center 57.7%;
				background-size: 45% 1400%;
			}
		}
			
		.index_btn4-1{
			color:#FF6600;
			div{
				background: url(assets/footer.png) no-repeat center 0%;
				background-size: 45% 1400%;
			}
		} 
			
		.index_btn5-1{
			color:#FF6600;
			div{
			background: url(assets/footer.png) no-repeat center 14.7%;
			background-size: 45% 1400%;
		}
		}
		
	}
</style>
