$(document).ready(function () {
    var btn_close, popup, li, header, depth2;
    btn_close = $('.btn_close');
    popup = $('#popup');
    li = $('.gnb>li');
    header = $('#header');
    depth2 = $('.gnb>li>.depth2');
    $(btn_close).click(function () {
        $(popup).slideUp(250);
    });
    $(li).mouseenter(function () {
        $(header).stop().animate({ height: 370 }, 450);
        $(depth2).stop().fadeIn(400);
    });
    $(header).mouseleave(function () {
        $(header).stop().animate({ height: 103 }, 450);
        $(depth2).stop().fadeOut(400);
    });
    $('.slider_box').bxSlider({
        auto: true,
        speed: 250,
    });
    $('.banner_slide').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    $('.btn_tab>li').click(function () {
        $('.btn_tab>li').removeClass('on');
        $(this).addClass('on');
    });
    $('.btn_tab>.l_1').click(function () {
        $('.list_1').show();
        $('.list_2').hide();
        $('.list_3').hide();
        $('.list_4').hide();
    });
    $('.btn_tab>.l_2').click(function () {
        $('.list_1').hide();
        $('.list_2').show();
        $('.list_3').hide();
        $('.list_4').hide();
    });
    $('.btn_tab>.l_3').click(function () {
        $('.list_1').hide();
        $('.list_2').hide();
        $('.list_3').show();
        $('.list_4').hide();
    });
    $('.btn_tab>.l_4').click(function () {
        $('.list_1').hide();
        $('.list_2').hide();
        $('.list_3').hide();
        $('.list_4').show();
    });
});
