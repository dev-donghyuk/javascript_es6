$(document).ready(function () {
    $('#btn_page li').click(function () {
        var num = $(this).index();
        console.log(num);
        $('#btn_page li').removeClass('on');
        $(this).addClass('on');
        if (num == 0) {
            $('body,html').stop().animate({ scrollTop: 0 }, 1000);
        } else if (num == 1) {
            $('body,html').stop().animate({ scrollTop: 1277 }, 1000);
        } else if (num == 2) {
            $('body,html').stop().animate({ scrollTop: 2302 }, 1000);
        } else if (num == 3) {
            $('body,html').stop().animate({ scrollTop: 3302 }, 1000);
        } else if (num == 4) {
            $('body,html').stop().animate({ scrollTop: 4442 }, 1000);
        } else if (num == 5) {
            $('body,html').stop().animate({ scrollTop: 5482 }, 1000);
        } else if (num == 6) {
            $('body,html').stop().animate({ scrollTop: 6482 }, 1000);
        } else if (num == 7) {
            $('body,html').stop().animate({ scrollTop: 7482 }, 1000);
        } else if (num == 8) {
            $('body,html').stop().animate({ scrollTop: 8465 }, 1000);
        } else if (num == 9) {
            $('body,html').stop().animate({ scrollTop: 9614 }, 1000);
        } else if (num == 10) {
            $('body,html').stop().animate({ scrollTop: 10692 }, 1000);
        } else {
            $('body,html').stop().animate({ scrollTop: 11832 }, 1000);
        }
    });
    $('#section_1 .btn_down_1').click(function () {
        $('body,html').animate({ scrollTop: 1277 }, 1000);
    });
    $('#section_2 .btn_down_2').click(function () {
        $('body,html').animate({ scrollTop: 2302 }, 1000);
    });
    $('#section_3 .btn_down_3').click(function () {
        $('body,html').animate({ scrollTop: 3302 }, 1000);
    });
    $('#section_4 .btn_down_4').click(function () {
        $('body,html').animate({ scrollTop: 4442 }, 1000);
    });
    $('#section_5 .btn_down_5').click(function () {
        $('body,html').animate({ scrollTop: 5482 }, 1000);
    });
    $('#section_6 .btn_down_6').click(function () {
        $('body,html').animate({ scrollTop: 6482 }, 1000);
    });
    $('#section_7 .btn_down_7').click(function () {
        $('body,html').animate({ scrollTop: 7482 }, 1000);
    });
    $('#section_8 .btn_down_8').click(function () {
        $('body,html').animate({ scrollTop: 8465 }, 1000);
    });
    $('#section_9 .btn_down_9').click(function () {
        $('body,html').animate({ scrollTop: 9614 }, 1000);
    });
    $('#section_10 .btn_down_10').click(function () {
        $('body,html').animate({ scrollTop: 10692 }, 1000);
    });
    $('#section_11 .btn_down_11').click(function () {
        $('body,html').animate({ scrollTop: 11832 }, 1000);
    });
    $('.slide').slick({
        autoplay: false,
        arrows: true,
        fade: true,
        speed: 1500,
    });
    $('.color_left li').click(function () {
        var num = $(this).index();
        console.log(num);
        $('.color_left li').removeClass('on');
        $('.color_left li').eq(num).addClass('on');
        $('.color_right li').removeClass('on');
        $('.color_right li').eq(num).removeClass('on');
        $('.img_2_l img').removeClass('on');
        $('.img_2_l img').eq(num).addClass('on');
        $('.img_2_r img').removeClass('on');
        $('.img_2_r img').eq(num).removeClass('on');
    });
    $('.color_right li').click(function () {
        var num = $(this).index();
        console.log(num);
        $('.color_right li').removeClass('on');
        $('.color_right li').eq(num).addClass('on');
        $('.color_left li').removeClass('on');
        $('.color_left li').eq(num).removeClass('on');
        $('.img_2_r img').removeClass('on');
        $('.img_2_r img').eq(num).addClass('on');
        $('.img_2_l img').removeClass('on');
        $('.img_2_l img').eq(num).removeClass('on');
    });
    $(window).scroll(function () {
        var y = $(document).scrollTop();
        console.log(y);
        if (y > 1277) {
            $('#section_2 .header').addClass('on');
        } else {
            $('#section_2 .header').removeClass('on');
        }
        if (y >= 1276 && y < 2301) {
            $('#section_2 .img').addClass('on');
        } else if (y >= 2301 && y < 3301) {
            $('#section_3 .img_1').addClass('on');
            $('#section_3 .img_2').addClass('on');
        } else if (y >= 3301 && y < 4441) {
            $('#section_4 .img_wrap').addClass('on');
            $('#section_4 .img_2').addClass('on');
        } else if (y >= 4441 && y < 5481) {
            $('#section_5 .img_2').addClass('on');
            $('#section_5 .img_3').addClass('on');
        } else if (y >= 5481 && y < 6481) {
            $('#section_6 .img_box .phone_1').addClass('on');
            $('#section_6 .img_box .phone_2').addClass('on');
            $('#section_6 .img_wrap').addClass('on');
            $('#section_6 .effect_3').addClass('on');
            $('#section_6 .effect_4').addClass('on');
            $('#section_6 .img_wrap .img_1').addClass('on');
            $('#section_6 .img_wrap .img_2').addClass('on');
            $('#section_6 .img_wrap .img_3').addClass('on');
            $('#section_6 .img_wrap .img_4').addClass('on');
            $('#section_6 .img_wrap .img_5').addClass('on');
            $('#section_6 .img_wrap .img_6').addClass('on');
        } else if (y >= 6481 && y < 7481) {
            $('#section_7 .img_1').addClass('on');
        } else if (y >= 8464 && y < 9614) {
            $('#section_9 h2').addClass('on');
            $('#section_9 h3').addClass('on');
            $('#section_9 .btn_down_9').addClass('on');
            $('#section_9 .img_1').addClass('on');
            $('#section_9 .img_2').addClass('on');
        } else if (y >= 9614 && y < 10691) {
            $('#section_10 .img_1').addClass('on');
            $('#section_10 .img_2').addClass('on');
        } else if (y >= 10691 && y < 11831) {
            $('#section_11 .img_1').addClass('on');
            $('#section_11 .img_2').addClass('on');
        } else if (y > 11831) {
            $('#section_12 .img_1').addClass('on');
        }
        if (y >= 0 && y <= 1276) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(0).addClass('on');
        } else if (y >= 1277 && y <= 2301) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(1).addClass('on');
        } else if (y >= 2302 && y <= 3301) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(2).addClass('on');
        } else if (y >= 3302 && y <= 4441) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(3).addClass('on');
        } else if (y >= 4442 && y <= 5481) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(4).addClass('on');
        } else if (y >= 5482 && y <= 6481) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(5).addClass('on');
        } else if (y >= 6482 && y <= 7481) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(6).addClass('on');
        } else if (y >= 7482 && y <= 8464) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(7).addClass('on');
        } else if (y >= 8465 && y <= 9714) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(8).addClass('on');
        } else if (y >= 9715 && y <= 10691) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(9).addClass('on');
        } else if (y >= 10692 && y <= 11831) {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(10).addClass('on');
        } else {
            $('#btn_page li').removeClass('on');
            $('#btn_page li').eq(11).addClass('on');
        }
    });
});
