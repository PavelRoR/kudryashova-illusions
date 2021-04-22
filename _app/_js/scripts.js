$(document).ready(function () {
    // Якорь
    /* Якорь */
    $(".header-menu li a, a.button-mobile").click(function (f) {
        f.preventDefault();
        var a = $(this).attr("href"),
            b = $(a).offset().top;
        $("body,html").animate({
            scrollTop: b
        }, 500);

    });
    // Мобильное меню
    var mobMenu = $('.mobile-menu'),
        headNav = $('.header-nav'),
        mml1 = $('.mobile-menu-line-1'),
        mml2 = $('.mobile-menu-line-2'),
        mml3 = $('.mobile-menu-line-3'),
        body = $('body');

    mobMenu.on('click', function () {
        if (!headNav.hasClass('nav-active')) {
            $(this).css('position', 'fixed');
            body.css('overflow', 'hidden');
            headNav.addClass('nav-active');
            mml1.addClass('switched');
            mml2.addClass('switched');
            mml3.addClass('switched');
        } else {
            $(this).css('position', 'absolute');
            body.css('overflow', 'auto');
            headNav.removeClass('nav-active');
            mml1.removeClass('switched');
            mml2.removeClass('switched');
            mml3.removeClass('switched');
        }
    });
    // Работа форм
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this);
            if (!email.val().match(reNone)) {
                message.text('↖ Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                message.text('Подтвердите соглашение ↘').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                return true
            }
        });
        email.click(function () {
            message.slideUp(500);
        });
        check.click(function () {
            message.slideUp(500);
        });
    });
    $('.marquee-question').marquee({
        duration: 15000,
        startVisible: true,
        duplicated: true
    });
    // Слайдер с Тамарой
    $('.author-slides').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 300,
        arrows: false,
        centerPadding: '0',
        centerMode: false,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    /*Конец документа*/
});