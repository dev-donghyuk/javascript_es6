$(document).ready(function(){
  var mySwiper = new Swiper ('.main_slider', {
    direction: 'vertical',
    //loop: true,
    slidesPerview:1,
    mousewheel:true,
    speed:800,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    }
  });
  $('.header_inner .gnb li').mouseenter(function(){
    $(this).find('.depth2').stop().slideDown(300);
  });
   $('.header_inner .gnb li').mouseleave(function(){
    $(this).find('.depth2').stop().slideUp(300);
  });
  $('.list_video li').mouseenter(function(){
  	$(this).addClass('on').siblings().removeClass('on');
  });
  $('.main_slider .btn_next').click(function(){
      mySwiper.slideNext();
  })
  $('.section_3 .banner').slick({
      autoplay:false,
      slidesToShow:3
  });
  //유튜브 모달 팝업
  var arrVideo = ['https://www.youtube.com/embed/qtTAATc31fE','https://www.youtube.com/embed/XptdidvKPUA','https://www.youtube.com/embed/4WmO2Ia9QBw'] 
  $('.main_slider .list_video li').click(function(){
    var num = $(this).index();
    $('#main .modal_video').fadeIn(300);
    $('#main .modal_video .modal_con').eq(num).show().find('iframe').attr('src',arrVideo[num]);
  });
  $('.btn_close').click(function(){
    $('#main .modal_video').fadeOut(300);
    $('#main .modal_video .modal_con').hide();
    $('#main .modal_video .modal_con iframe').attr('src','about:black');
  })
  var sw = true
  $('.util .l_4').click(function(){
    if(sw==true){
      $(this).addClass('on');
      $('.menu').stop().slideDown(300);
      sw = false
    }else{
      $(this).removeClass('on');
      $('.menu').stop().slideUp(300);
      sw = true
    };
  });
});