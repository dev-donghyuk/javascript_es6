$(document).ready(function () {
    $('.slider_box').bxSlider({
        auto: true,
        speed: 1000,
    });

    $('.btn_close').click(function () {
        $('#popup').fadeOut();
    });

    $('.gnb>.gnba').mouseenter(function () {
        console.log('완료');
        $('.gnb>.gnba>.depth2').stop().fadeIn(300);
    });
    $('.gnb>.gnba').mouseleave(function () {
        $('.gnb>.gnba>.depth2').stop().fadeOut(300);
    });
    $('.gnb>.gnbb').mouseenter(function () {
        $('.gnb>.gnbb>.depth2').stop().fadeIn(300);
    });
    $('.gnb>.gnbb').mouseleave(function () {
        $('.gnb>.gnbb>.depth2').stop().fadeOut(300);
    });
    $('.gnb>.gnbc').mouseenter(function () {
        $('.gnb>.gnbc>.depth2').stop().fadeIn(300);
    });
    $('.gnb>.gnbc').mouseleave(function () {
        $('.gnb>.gnbc>.depth2').stop().fadeOut(300);
    });
    $('.gnb>.gnbd').mouseenter(function () {
        $('.gnb>.gnbd>.depth2').stop().fadeIn(300);
    });
    $('.gnb>.gnbd').mouseleave(function () {
        $('.gnb>.gnbd>.depth2').stop().fadeOut(300);
    });
    $('.gnb>.gnbe').mouseenter(function () {
        $('.gnb>.gnbe>.depth2').stop().fadeIn(300);
    });
    $('.gnb>.gnbe').mouseleave(function () {
        $('.gnb>.gnbe>.depth2').stop().fadeOut(300);
    });
});
