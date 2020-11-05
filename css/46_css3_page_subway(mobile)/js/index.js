$(document).ready(function(){
	$(function(){
      $('.btn_map').click(function(){
        $(this).addClass('on');
        $('.search').addClass('on');
      })
      $('body').click(function(e){
        if($(e.target).closest('.map_wrap').length == 0){
          $('.btn_map').removeClass('on');
          $('.search').removeClass('on');
        }
        console.log($(e.target).closest('.map_wrap').length);
      });
      $('.btn_menu').click(function(){
        $('#menu,body').addClass('on');
        $('#cover').fadeIn(500);
      });
       $('.btn_close').click(function(){
        $('#menu,body').removeClass('on');
        $('#cover').fadeOut(500);
      });
       $('.bot_menu li a').click(function(){
          $(this).next().stop().slideToggle(300);
          /*$(this).addClass('on').parent().siblings().find('a').removeClass('on');*/
          $(this).toggleClass('on');
       });
       /*$('.btn_tab li').click(function(){
          $('.btn_tab li').removeClass('on');
          $(this).addClass('on');
       });*/
       var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        speed:1000,
        autoplay:{
        delay:3000
        },
        pagination: {
          el: '.swiper-pagination',
        },
        /*navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },*/
        /*scrollbar: {
          el: '.swiper-scrollbar',
        },*/
      });
       //제품슬라이더
       var mySwiper2 = new Swiper ('.product_slider', {
        // Optional parameters
        //direction: 'vertical',
        // loop: true,
        autoHeight:true,
        observer:true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        /*scrollbar: {
          el: '.swiper-scrollbar',
        },*/
      });
       $('.product_slider_wrap .product_slider:gt(0)').hide();
       $('.btn_tab li').click(function(){
        var num = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.product_slider_wrap .product_slider').eq(num).show().siblings().hide();
       });
       $('#main.franchise .location .btn_location').click(function(){
       	$(this).toggleClass('on').siblings().slideToggle();
       });
       var mySwiper = new Swiper ('.banner_slider', {
		    // Optional parameters
		    //direction: 'vertical',
		    loop: true,

		    // If we need pagination
		    pagination: {
		      el: '.swiper-pagination',
		    },

		    // Navigation arrows
		    /*navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },*/

		    // And if we need scrollbar
		    /*scrollbar: {
		      el: '.swiper-scrollbar',
		    },*/
 	 })
    });
});