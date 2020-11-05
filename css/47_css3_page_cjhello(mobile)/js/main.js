$(document).ready(function(){

var mySwiper = new Swiper ('.main_slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed:1000,
    autoplay:{
    	delay:3000 //자동실행, 지연시간
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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })
	//메인 슬라이더 재생,일시정지
	var sw = true;
	$('.main_slider .btn_slider').click(function(){
		if(sw==true){
			$('.main_slider .btn_slider').addClass('on');
			mySwiper.autoplay.stop();
			sw= !sw;
		}else{
			$('.main_slider .btn_slider').removeClass('on');
			mySwiper.autoplay.start();
			sw= !sw;
		}

	});
    $('header>.btn_search').click(function(){
        $('.modal_search').stop().slideToggle(300);
        $(this).toggleClass('on');
    });
    $('.modal_search input').keyup(function(){
        var num= ($(this).val().length)
        if(num == 0){
            $('.cover').hide();
            $('.btn_reset').hide();
        }else{
            $('.cover').show();
            $('.btn_reset').show();
        };
    });
    $('.modal_search .btn_reset').click(function(){
        $('.modal_search .cover').hide();
        $(this).hide();
        $('.modal_search input').val('');
    });
    $('.menu .r_tab:gt(0)').hide();
    $('.bot_menu .btn_tab li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var num = $(this).index();
        $('.menu .r_tab').eq(num).show().siblings().hide();
    });
    $('.btn_menu').click(function(){
        $('header .menu').addClass('on');
        $('#cover').fadeIn(300);
        $('body,#wrap').addClass('on')
        $('#wrap').animate({'left':320},440)
    });
    $('.btn_close').click(function(){
        $('header .menu').removeClass('on');
        $('#cover').fadeOut();
        $('body,#wrap').removeClass('on')
        $('#wrap').animate({'left':0},440)
    });
    $('.menu .con>li').click(function(){
        $(this).toggleClass('on').find('.depth2').stop().slideToggle(400);
    });
        var mySwiper = new Swiper ('.itd_slider', {
        //direction: 'vertical',
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      })
    $('.btn_family').click(function(){
        $('.family_site').stop().slideToggle(400);
        $(this).toggleClass('on');
    });
});