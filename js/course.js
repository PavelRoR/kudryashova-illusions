$(document).ready(function () {
    /* Якорь */
    $("a:not('.button-cost'):not('.button-prep'):not('.text-rev-link')").click(function (f) {
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
    /* Таймер */
    $(function () {
        var clock;
        var date = new Date("May 12, 2021 00:00 UTC+3");
        var currentDate = new Date();

        var link1 = {
            name: $('#link-1'),
            linkText: new Array('https://shop.iomp.ru/?r=ordering/cart/as1&id=157&clean=true&lg=ru')
        };
        var link2 = {
            name: $('#link-2'),
            linkText: new Array('https://shop.iomp.ru/?r=ordering/cart/as1&id=160&clean=true&lg=ru')
        };
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
                    $('.cost-full span').addClass('unbroken');
                }
            }
        });
    });
    /*Видео-отзывы*/
    $(".video-wrapper-rev").click(function () {
        $(".video-wrapper-rev iframe").each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
        })
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>')
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
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        centerMode: true,
        appendArrows: '.arrows',
        responsive: [
             {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 561,
      settings: {
        slidesToShow: 1
      }
    }
        ]
    });
    $('.slick-dots').wrap('<div class="container container-revs">');
    $('.text-rev-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    /*Конец документа*/
});
