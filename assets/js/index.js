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


    const menuBtn = document.querySelector('.header__burger')
    const menu = document.querySelector('.menu')
    const menuItems = menu.querySelectorAll('.nav__link')
    menuBtn.addEventListener('click', e => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
    })

    menuItems.forEach(link => {
        link.addEventListener('click', e => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
        })
    })
})