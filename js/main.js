'use strict'

$('document').ready(function () {
    $('.slider').slick({
        arrow: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 4000,
        easing: 'ease',
        autoplay: true
    })
})