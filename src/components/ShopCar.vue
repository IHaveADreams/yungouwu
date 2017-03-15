<template>
 <div id="car">
	<!--返回栏-->
	<div class="back">
		<p class="backImg"></p>
		<p class="backText">返回</p>
	</div>
 </div>
</template>

<script>
export default {
  data () {
    return {
    	myCar:[]
    }
    
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
</style>
