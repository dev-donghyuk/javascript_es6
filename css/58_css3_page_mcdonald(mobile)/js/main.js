$(document).ready(function(){
	var mySwiper = new Swiper ('.main_slider', {
    //direction: 'vertical',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable:true
    }
  });
	var mySwiper = new Swiper ('.menu_slider', {
    //direction: 'vertical',
    loop: true,
    autoHeight:true,
    observer:true,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    }
  });
	$('.btn_tab li').click(function(){
		var num = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.menu_slider').hide().eq(num).show();
	});
  $('.btn_menu').click(function(){
    $('#menu').addClass('on');
    $('#cover').fadeIn(300);
  })
  $('.btn_close').click(function(){
    $('#menu').removeClass('on');
    $('#cover').fadeOut(300);
  })
  $('.m_gnb .gnb .active').click(function(){
    $(this).toggleClass('on');
    $(this).find('.depth2').stop().slideToggle(300).parent().siblings().removeClass('on').find('.depth2').slideUp(300);
  });
   $('#menu .modal_search input').keyup(function(){
        var num= ($(this).val().length)
        if(num == 0){
            $('.cover').hide();
            $('.s_btn_reset').hide();
        }else{
            $('.cover').show();
            $('.s_btn_reset').show();
        };
    });
    $('#menu .modal_search .s_btn_reset').click(function(){
        $('.modal_search .cover').hide();
        $(this).hide();
        $('.modal_search input').val('');
    });
    var mySwiper = new Swiper ('.store_slider', {
    loop: true,
    autoplay:false,
    pagination: {
      el: '.swiper-pagination',
    },
  })
    $('.tab li').click(function(){
      $(this).addClass('on').siblings().removeClass('on')
    });
    $('.btn_right').click(function(){
      $('.tab li.on').removeClass('on').next().addClass('on')
    });
    $('.btn_left').click(function(){
      $('.tab li.on').removeClass('on').prev().addClass('on')
    });
    $('.section_1 .search_wrap input').keyup(function(){
        var num= ($(this).val().length)
        if(num == 0){
            $('.section_1 .search_wrap .btn_reset').hide();
        }else{
            $('.section_1 .search_wrap .btn_reset').show();
        };
    });
    $('.section_1 .search_wrap .btn_reset').click(function(){
        $(this).hide();
        $('.section_1 .search_wrap input').val('');
    });
});