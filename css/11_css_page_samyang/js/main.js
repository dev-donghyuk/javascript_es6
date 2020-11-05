$(document).ready(function () {
    $('.gnb>li').mouseenter(function () {
        $('.middle_header_wrap').stop().animate({ height: 363 }, 350);
        $('.depth2').stop().fadeIn(350);
    });
    $('.middle_header_wrap').mouseleave(function () {
        $('.middle_header_wrap').stop().animate({ height: 95 }, 350);
        $('.depth2').stop().fadeOut(350);
    });

    $('.slider_box').slick({
        autoplay: true,
        dots: true,
        speed: 1200,
        fade: true,
    });
    $('.banner_slide').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    $('.slide').slick({
        autoplay: false,
        arrows: false,
        dots: true,
        variableWidth: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3,
    });
    $('.box_a2').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    var modal, btn, video, g_cover;
    modal = $('.modal');
    btn = $('.btn_close');
    video = $('.video');
    g_cover = $('.g_cover');
    $(video).click(function () {
        $(g_cover).fadeIn(300);
        $(modal).fadeIn(300);
    });
    $(btn).click(function () {
        $(g_cover).fadeOut(300);
        $(modal).fadeOut(300);
    });
    $('.btn_family').click(function () {
        $('.list').slideDown(300);
    });
    $('.list').mouseleave(function () {
        $('.list').slideUp(300);
    });
});
