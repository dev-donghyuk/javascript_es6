$(document).ready(function () {
    $('.main_box').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    $('.slide').slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
    });
    $('.banner_0').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    $('.banner_1').slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
    $('.banner_2').slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
    $('.text_list').slick({
        autoplay: true,
        arrows: true,
        vertical: true,
    });
    var sw = 0;
    $('.btn_m .btn_play').click(function () {
        if (sw == 0) {
            $(this).addClass('on');
            sw = 1;
            $('.main_box').slick('slickPause');
        } else {
            $(this).removeClass('on');
            sw = 0;
            $('.main_box').slick('slickPlay');
        }
    });
    $('.btn_0 .btn_play').click(function () {
        if (sw == 0) {
            $(this).addClass('on');
            sw = 1;
            $('.banner_0').slick('slickPause');
        } else {
            $(this).removeClass('on');
            sw = 0;
            $('.banner_0').slick('slickPlay');
        }
    });
    $('.btn_1 .btn_play').click(function () {
        if (sw == 0) {
            $(this).addClass('on');
            sw = 1;
            $('.banner_1').slick('slickPause');
        } else {
            $(this).removeClass('on');
            sw = 0;
            $('.banner_1').slick('slickPlay');
        }
    });
    $('.btn_2 .btn_play').click(function () {
        if (sw == 0) {
            $(this).addClass('on');
            sw = 1;
            $('.banner_2').slick('slickPause');
        } else {
            $(this).removeClass('on');
            sw = 0;
            $('.banner_2').slick('slickPlay');
        }
    });
    $('.btn .btn_play').click(function () {
        if (sw == 0) {
            $(this).addClass('on');
            sw = 1;
            $('.slide').slick('slickPause');
        } else {
            $(this).removeClass('on');
            sw = 0;
            $('.slide').slick('slickPlay');
        }
    });
    $('#section_4 .btn_play').click(function () {
        if (sw == 0) {
            $(this).addClass('on');
            sw = 1;
            $('.text_list').slick('slickPause');
        } else {
            $(this).removeClass('on');
            sw = 0;
            $('.text_list').slick('slickPlay');
        }
    });
    $('.btn_map').click(function () {
        $(this).toggleClass('on');
        $('#map_active').stop().slideToggle(400);
    });
});
