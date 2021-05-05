$(document).ready(function () {
    /* Якорь */
    $("a:not('.button-cost'):not('.button-prep')").click(function (f) {
        // $(".header-menu li a, a.button-mobile,a[href='#prices']").click(function (f) {
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
/*
    if ($(window).width() > 561) {
        $('.marquee-question').marquee({
            duration: 15000,
            startVisible: true,
            duplicated: true
        });
    }
    */
/* Таймер */
$(function () {
    var clock;
    var date = new Date("May 12, 2021 00:00 UTC+3");
    var currentDate = new Date();

    var link1 = {
        name: $('#link-1'),
        linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1058&clean=true&lg=ru')
    };
    var link2 = {
        name: $('#link-2'),
        linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1061&clean=true&lg=ru')
    };
    var link3 = {
        name: $('#link-3'),
        linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1064&clean=true&lg=ru')
    };
    var prepLink = {
        name: $('#prepLink'),
        linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1067&clean=true&lg=ru')
    };


    // if (currentDate < date) {
        var futureDate = date;
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
        clock = $('.clock').FlipClock(diff, {
            clockFace: 'HourlyCounter',
            countdown: true,
            language: 'ru',
            callbacks: {
                stop: function () {
                    $('.timer, .cost-sale, .cost-today,.prepayment').remove();
                    link1.name.attr('href', link1.linkText[0]);
                    link2.name.attr('href', link2.linkText[0]);
                    link3.name.attr('href', link3.linkText[0]);
                    prepLink.name.attr('href', prepLink.linkText[0]);
                    $('.cost-full span').addClass('unbroken');
                }
            }
        });
    // }  else {
    //     var futureDate = dates[1];
    //     var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    //     clock = $('.clock').FlipClock(diff, {
    //         clockFace: 'HourlyCounter',
    //         countdown: true,
    //         language: 'ru',
    //         callbacks: {
    //             stop: function () {
    //                 $('.prepayment').remove();
    //             }
    //         }
    //     });
    // }
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