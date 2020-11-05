$(document).ready(function () {
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        dots: true,
    });
    var sw = 0;
    $('.btn_menu').click(function () {
        if (sw == 0) {
            $(this).addClass('on');
            sw = 1;
            $('#menu').stop().show();
        } else {
            $(this).removeClass('on');
            sw = 0;
            $('#menu').stop().hide();
        }
    });
    var sw2 = 0;
    $('.btn_ps').click(function () {
        if (sw2 == 0) {
            $(this).addClass('on');
            sw2 = 1;
            $('.slide').slick('slickPause');
        } else {
            $(this).removeClass('on');
            sw2 = 0;
            $('.slide').slick('slickPlay');
        }
    });
    $('#scroll_top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 0);
    });
    $(window).scroll(function () {
        var y = $(document).scrollTop();
        console.log(y);
        if (y >= 50) {
            $('#scroll_top').stop().fadeIn(200);
        } else {
            $('#scroll_top').stop().fadeOut(200);
        }
    });
});
