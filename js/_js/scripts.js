//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend flipclock.min.js
var isIE = false || !!document.documentMode;

if (isIE) {
    let head = document.getElementsByTagName("head")[0],
        link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}
$(document).ready(function () {

    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });

    /* Таймер */
    var clock;
    var futureDate = new Date("September 5, 2018 03:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
        // $('.button-buy').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3751&clean=true&lg=ru');
        // $('.price-full span').css('textDecoration', 'none');
        // $('.timer, .price-sale, .price-today').remove();
    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                // $('.button-buy').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3751&clean=true&lg=ru');
                // $('.price-full span').css('textDecoration', 'none');
                // $('.timer, .price-sale, .price-today').remove();
            }
        },
    });



    /*Конец документа*/
});