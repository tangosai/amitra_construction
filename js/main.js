$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        speed: 1500,
//        autoplay: {
//            delay: 5500,
//            disableOnInteraction: false,
//        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    })

    //SWIPER-EVENT
    mySwiper.on('slideChangeTransitionStart', function () {

        anime({
            targets: '.swiper-slide-active .slide-right img',
            scale: [1.2, 1],
            opacity: [0, 1],
            easing: 'easeInOutQuart'
        });

        anime({
            targets: '.swiper-slide-active .slide-left .element',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150, {
                start: 500
            }),
            easing: 'easeInOutQuart'
        });


    });

    anime({
        targets: 'header',
        scaleX: [0, 1],
        translateX: [-400, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.logo a',
        rotate: 360,
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.menu ul li',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, {
            start: 700
        }),
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.slide-right img',
        scale: [1.2, 1],
        opacity: [0, 1],
        delay: anime.stagger(200, {
            start: 2000,
            from: 'last'
        }),
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.swiper-slide-active .slide-left .element',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(250, {
            start: 1700
        }),
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.swiper-button-prev',
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.swiper-button-next',
        translateX: [100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: 'easeInOutQuart'
    });


});
