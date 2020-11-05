$(document).ready(function(){
	var mySwiper = new Swiper ('.main_slider', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
    autoplay:{
    	delay:5000,
    },
    effect:'fade',
    speed:1000,

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    */
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  	})
  	var sw = true;
  	$('#main .main_slider .btn_play').click(function(){
  		if(sw==true){
  			$(this).addClass('on');
  			mySwiper.autoplay.stop();
  			sw = false;
  		}else{
  			$(this).removeClass('on');
  			mySwiper.autoplay.start();
  			sw = true;
  		};
  	});
    $('.bot_header .bot_header_inner>.gnb>li').mouseenter(function(){
      $(this).find('.depth2_wrap').stop().slideDown(150);
    });
    $('.bot_header .bot_header_inner>.gnb>li').mouseleave(function(){
      $(this).find('.depth2_wrap').stop().slideUp(150);
    });
});