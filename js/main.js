$(function () {
    'use strict';
    // Adjust Slider Height
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (navH + upperH));
    
    // Featured Work Shuffle
    $('.featured ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('class'));
        if ($(this).data('class') === 'all') {
            $('.shuffled-img .col-sm').css('opacity', 1);
        } else {
            $('.shuffled-img .col-sm').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});