const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
const card = document.getElementById('card')
const card2 = document.getElementById('card2')
const containerRating = document.querySelector('.card__rating')
const btnSubmit = document.querySelector('.btn-submit')
let rating = document.querySelectorAll('.rating')
let numberSelected = 0

containerRating.addEventListener('click', e => {
    numberSelected = e.target.innerText

    for(const ele of rating){
        if(ele.innerText === numberSelected){
            ele.classList.add('print')
        }else{
            ele.classList.remove('print')
        }
    }

})

btnSubmit.addEventListener('click', () => {
    if(numberSelected !== 0){
        card.style.display = 'none'
        template.getElementById('opt').textContent = numberSelected
    
        const clone = template.cloneNode(true)
        fragment.append(clone)
        card2.appendChild(fragment)
    }
})