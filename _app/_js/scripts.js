$(document).ready(function () {
    // Якорь
    /* Якорь */
    $(".header-menu li a").click(function (f) {
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
    $(function () {
        $('.marquee-plan').marquee({
            direction: 'left', //Указывает направление движения содержимого контейнера (left | right | up | down)
            loop: 100, //Задает, сколько раз будет прокручиваться содержимое. "-1" для бесконечного воспроизведения движения
            scrolldelay: 0, //Величина задержки в миллисекундах между движениями
            scrollamount: 50, //Скорость движения контента (px/sec)
            circular: true, //Если "true" - строка непрерывная
            drag: true, //Если "true" - включено перетаскивание строки
            runshort: true, //Если "true" - короткая строка тоже "бегает", "false" - стоит на месте
            hoverstop: true, //true - строка останавливается при наведении курсора мыши, false - строка не останавливается
            inverthover: false, //false - стандартное поведение. Если "true" - строка начинает движение только при наведении курсора
            duplicated: true,
            duration: 400
            // startVisible: true
        });

    });
    // $(function () {
    $('.marquee-question').marquee({
                   duration: 15000,
            startVisible: true,
            duplicated: true
    });
    // });
    /*Конец документа*/
});