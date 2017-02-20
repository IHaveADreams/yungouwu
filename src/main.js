// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
//require('./style/index.scss') 
import Swiper from './../static/swiper.min.js'
require('./../static/swiper.min.css')
import router from './router'

Vue.use(VueResource)
	/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})