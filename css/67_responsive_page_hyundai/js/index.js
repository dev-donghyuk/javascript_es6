$(document).ready(function () {
  $(function () {
    $(".m_gnb>li").click(function () {
      $(this).toggleClass("on").siblings().removeClass("on");
      $(this)
        .find(".depth2")
        .stop()
        .slideToggle(400)
        .parents("li")
        .siblings()
        .find(".depth2")
        .stop()
        .slideUp(400);
    });
    $(".btn_menu").click(function () {
      $(".mgnb_wrap").addClass("on");
    });
    $(".btn_close").click(function () {
      $(".mgnb_wrap").removeClass("on");
    });
    $(".gnb li").mouseenter(function () {
      $("#header").addClass("on");
      $(".depth2_cover").stop().slideDown(250);
      $(".depth2").stop().slideDown(250);
    });
    $(".depth2_cover").mouseleave(function () {
      $("#header").removeClass("on");
      $(".depth2_cover").stop().slideUp(250);
      $(".depth2").stop().slideUp(250);
    });
    $(".btn_lang").click(function () {
      $(".lang_list").show();
    });
    $(".lang_list").mouseleave(function () {
      $(".lang_list").hide();
    });
    $(".btn_scroll").click(function () {
      var pos = $(".section_1").offset().top;
      $("body,html").animate({ scrollTop: pos }, 1000);
    });

    var mySwiper = new Swiper(".news_slider", {
      // Optional parameters
      //direction: 'vertical',
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      breakpoints: {
        758: {
          slidesPerView: "auto",
          slidesPerGroup: 1,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    $(".tab_wrap li").click(function () {
      var num = $(this).index();
      console.log(num);
      $(".cover").stop().fadeIn(300);
      $(".modal_list").addClass("on").find("li").eq(num).show();
    });
    $(".btn_close").click(function () {
      $(".cover").stop().fadeOut(300);
      $(".modal_list").removeClass("on").find("li").hide();
    });
    $(".list li").mouseenter(function () {
      $(this).addClass("on").siblings().find("a").css({ opacity: 0.7 });
      $(this).find(".link").addClass("on");
    });
    $(".list li").mouseleave(function () {
      $(this).removeClass("on").siblings().find("a").css({ opacity: 1 });
      $(this).find(".link").removeClass("on");
    });
    $(".btn_family").click(function () {
      $(this).toggleClass("on");
      $(this).next().stop().slideToggle(400);
    });
    /*$(window).scroll(function(){
				var pos = $(window).scrollTop()
				console.log(pos)
				if(pos>=400){
					$('.section_1').addClass('on')
				}
			});
			$(window).scroll(function(){
				var pos = $(window).scrollTop()
				console.log(pos)
				if(pos>=1050){
					$('.section_2').addClass('on')
				}
			});*/
    $(window).scroll(function () {
      var sec_1 = $(".section_1");
      var sec_2 = $(".section_2");

      var pos = $(window).scrollTop();

      var posec_1 = $(".section_1").offset().top;
      var posec_2 = $(".section_2").offset().top;
      console.log(posec_1);
      console.log(posec_2);
      if (posec_1 <= pos + 650) {
        $(".section_1").addClass("on");
      }
      if (posec_2 <= pos + 650) {
        $(".section_2").addClass("on");
      }
    });
  });
});
