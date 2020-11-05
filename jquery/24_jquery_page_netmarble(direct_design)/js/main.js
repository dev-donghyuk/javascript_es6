$(document).ready(function(){
  $('.btn_menu').click(function(){
    $('#menu').addClass('on');
    $('#cover').stop().fadeIn(800);
    $('body').addClass('on');
  });
  $('.btn_close').click(function(){
    $('#menu').removeClass('on');
    $('#cover').stop().fadeOut(800);
    $('body').removeClass('on');
  });

  $('.tab>li').click(function(){
    var num = $(this).index();
    console.log(num)
    $(this).addClass('on').siblings().removeClass('on');
    $('.box_wrap').eq(num).show().siblings().hide()
  });
	var mySwiper = new Swiper ('.main_slider', {
    //direction: 'vertical',
    loop: true,
    autoplay:{delay:5000},
    speed:1000,
    effect:'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });
	var mySwiper = new Swiper ('.pc_slider', {
    //direction: 'vertical',
    //loop: true,
    slidesPerView:8,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });
	var mySwiper = new Swiper ('.m_slider', {
    //direction: 'vertical',
    //loop: true,
    slidesPerView:4,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });
	$('.pc_slider .swiper-slide .mask').mouseenter(function(){
		$(this).find('.cover').addClass('on');
	});
	$('.pc_slider .swiper-slide .mask').mouseleave(function(){
		$(this).find('.cover').removeClass('on');
	});
	$('.m_slider .swiper-slide .mask').mouseenter(function(){
		$(this).addClass('on');
	});
	$('.m_slider .swiper-slide .mask').mouseleave(function(){
		$(this).removeClass('on');
	});
	$('#footer .btn_family').click(function(){
		$(this).toggleClass('on');
		$('#footer .family_menu').stop().slideToggle(400);
	});
});