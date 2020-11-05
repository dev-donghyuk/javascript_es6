$(document).ready(function(){
	var mySwiper = new Swiper ('.main_slider', {
	    // Optional parameters
	    direction: 'vertical',
	    loop: true,
	    effect:'fade',
	    autoplay:{
	    	delay:3000
	    },
	    // If we need pagination
	    pagination: {
	      el: '.swiper-pagination',
	      clickable:true,
	    },
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  })
	var sw = true;
	$('.main_slider .btn_play').click(function(){
		if(sw==true){
			$(this).addClass('on');
			mySwiper.autoplay.stop();
			sw = false;
		}else{
			$(this).removeClass('on');
			mySwiper.autoplay.start();
			sw = true;
		}
	});
	$('.bot_header .gnb li').mouseenter(function(){
		$(this).find('.depth2_wrap').show();
	});
	$('.bot_header .gnb li').mouseleave(function(){
		$(this).find('.depth2_wrap').hide();
	});
});