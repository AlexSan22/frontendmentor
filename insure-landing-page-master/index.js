const btnHamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu__links')
const btnClose = document.querySelector('.close')
const bgNav = document.querySelector('.menu__bg-nav')
const subHeader = document.querySelector('.sub-header')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

btnHamburger.addEventListener('click', () => {
    btnClose.style.zIndex = '1'
    // menu.style.transform = 'translateY(0)'
    menu.style.display = 'block'
    bgNav.style.display = 'block'
    subHeader.style.display = 'none'
    main.style.display = 'none'
    footer.style.display = 'none'
})

btnClose.addEventListener('click', () => {
    btnClose.style.zIndex = '-1'
    // menu.style.transform = 'translateY(-150%)'
    menu.style.display = 'none'
    bgNav.style.display = 'none'
    subHeader.style.display = 'flex'
    main.style.display = 'block'
    footer.style.display = 'block'
})
