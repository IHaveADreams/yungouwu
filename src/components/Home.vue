<template>
 <div id="home">
 	<div class="swiper-container">
    <div class="swiper-wrapper">
         		<div class="swiper-slide bigImg" v-for='img in bigImg' ><img :src='img.src' alt="" /></div> 
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
	</div>

 </div>
</template>

<script>
export default {
  data () {
    return {
    	bigImg:[]
    }
  },
	created () {
		this.$http.get('/data/slider').then(function(data){
			this.bigImg = data.data.listItems //第一个data是形参
			console.log(this.bigImg)
		})
	},
	 mounted () {
 var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
      pagination: '.swiper-pagination',//小圆点
	    paginationClickable: true,//实现控制点击小点控制图片切换 
	   	autoplay : 2500,//可选选项  自动轮播auto 
	    autoplayDisableOnInteraction: false,//实现点击切换后还会自动轮播(重启autoplay属性)
	    loop:true,  //循环
	    observer:true//更新swiper
     })

   }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.bigImg>img{
		width: 100%;
	}
</style>
