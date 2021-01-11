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
    // Mask for phone input and validate forms
    $('input[type=tel]').mask("+7 (999) 999-99-99");

    $.validator.methods.cyrillic = function (value, element) {
        return this.optional (element) || /^[А-Яа-яЁё]+$/.test(value);
    }
    
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    cyrillic: true,
                    minlength: 2
                },
                phone: "required"
            },
            messages: {
                name: {
                    required: "Введите имя",
                    cyrillic: "В имени допустима только кириллица, без пробелов и знаков препиния",
                    minlength: jQuery.validator.format("Введите минимум {0} символа!")
                },
                phone: "Введите номер телефона"
            }
        });
    }

    validateForms('.modal-call__form');
    validateForms('.modal-calc__form');
    validateForms('.contacts-form__form');
});