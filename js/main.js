$(function () {
    // Tabs
    $('.tab-item').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab-item--active');
        $($(this).closest('.tabs').siblings().find('div')).removeClass('tab-content--active');

        $(this).addClass('tab-item--active');
        $($(this).attr('data-id')).addClass('tab-content--active');

    });

    // Reviews slider
    $('.reviews__slider-box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="reviews__slider-btn reviews__slider-btn--prev"><img src="images/icons/arrow-prev.svg" alt="prev arrow"></button>',
        nextArrow: '<button class="reviews__slider-btn reviews__slider-btn--next"><img src="images/icons/arrow-next.svg" alt="next arrow"></button>',
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Select
    $('select').styler({});

    // Goods-info dropdown 
    $('.goods__info-title').on('click', function () {
        $(this).toggleClass('goods__info-title--active');
        $(this).next().slideToggle(700);
    });
    // Mobile menu
    $('.menu__btn').on('click', function () { 
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.mobile-menu__list').toggleClass('mobile-menu__list--active');
    });
    // btn to-top
    $('.to-top__link').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 20
        }, 600);
    });
});