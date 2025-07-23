// Main Hero Swiper Initialization
new Swiper('.main-hero-swiper-container', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Logo Swiper Initialization
new Swiper('.logo-swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    freeMode: true,
    freeModeMomentum: false,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 60,
        },
    }
}); 