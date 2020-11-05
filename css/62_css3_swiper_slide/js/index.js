$(document).ready(function(){
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
    speed:1000,
    autoplay:{
    	delay:3000 //지연시간
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
	var sw = true;
	$('.btn_play').click(function(){
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
});
  