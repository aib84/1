jQuery(function ($) {

    /*======================Slick Slider====================*/
    $('.testimonials__slider').slick({
        horizontal: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        easing: 'easeInOutBack',
        responsive: [{
            breakpoint: 479,
            settings: {
                arrows: false,
                dots: true,
            }
        }]
    });

    /*======================Burger menu====================*/


    $('.fa-bars ').on('click', function () {
        $('.mob-navigation').show();
        $(this).hide();
        $('.fa-xmark').show();

    });
    $('.fa-xmark').on('click', function () {
        $('.mob-navigation').hide();
        $(this).hide();
        $('.fa-bars').show();
    });
});
    /*======================Burger Menu====================*/
    // $('.menu__hamburger').click(function (event) {
    //     $('.menu__hamburger').toggleClass('active');
    // });

    //     $('.menu__hamburger').click(function (event) {
    //         $('.menu__hamburger,.header__menu').toggleClass('active');
    //         $('body').toggleClass('lock');
    //     });

    // });
