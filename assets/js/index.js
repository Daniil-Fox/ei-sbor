window.addEventListener('DOMContentLoaded', e => {
    new Swiper('.proj__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            prevEl: '.proj-prev',
            nextEl: '.proj-next',
        }
    })
})