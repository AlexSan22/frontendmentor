const btnHamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const imgWorking = document.querySelector('#img-working')
const ladingText = document.querySelector('.lading-text')

menu.classList.add('menu-hidden')

function toggleMenu(){
    imgWorking.classList.toggle('menu-hidden')
    menu.classList.toggle('menu-hidden')
    ladingText.classList.toggle('show-text')
}

btnHamburger.addEventListener('click', () => {
    toggleMenu()
})