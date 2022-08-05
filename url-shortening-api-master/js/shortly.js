const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
const results = document.querySelector('.results')
const btnShort = document.querySelector('.shorten__btn')
const input = document.querySelector('.shorten__input')
const mesageError = document.querySelector('.mesage-error')
const loader = document.querySelector('.loader')

const fetchData = async  value => {
    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
        const data = await res.json()

        validUrl(value)
        showShortUrl(data)
    } catch (error) {
        console.error(error)
    }finally{
        loader.style.display = 'none'
        let copy = `<button class="shorten__btn-button">Shorten It!</button>`
        btnShort.innerHTML = copy
      
    }

} 

loader.style.display = 'none'
let correctUrl = /^(ftp|http|https):\/\/[^ "]+$/

const validUrl = (url) => {
    if(correctUrl.test(url)){
        input.classList.remove('input-bg-error')
        mesageError.classList.add('mesage-error')
        mesageError.classList.remove('mesage-error-activo')
    }else{
        input.classList.add('input-bg-error')
        mesageError.classList.remove('mesage-error')
        mesageError.classList.add('mesage-error-activo')
    }
}

const showShortUrl = (data) => {

    template.querySelector('p').textContent = data.result.original_link
    template.querySelector('input').value = data.result.short_link
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    results.appendChild(fragment)

    copyUrl(results)
    
    
}



const copyUrl = (results) => {
    const btnsCopy = results.querySelectorAll('button')
    const inputCopy = results.querySelectorAll('input')
    let count = 0
    inputCopy.forEach(input => {
        count++
        input.dataset.id = count
    })
    count = 0
    btnsCopy.forEach(btn => {
        count++
        btn.dataset.id = count
        btn.addEventListener('click', (e) => {
            const btnSelect = e.target.dataset.id
            for(const ele of btnsCopy){
                if(btnSelect === ele.dataset.id){
                    ele.textContent = 'Copied!'
                    ele.style.backgroundColor = 'hsl(257, 27%, 26%)'
                }else{
                    ele.textContent = 'Copy'
                    ele.style.backgroundColor = 'hsl(180, 66%, 49%)'
                }
            }
            for(const input of inputCopy){
                if(btnSelect === input.dataset.id){
                    input.select()
                    document.execCommand('copy')
                }
            }
        })
    })
}


btnShort.addEventListener('click', (e) => {
    e.preventDefault()
    fetchData(input.value)
    input.value = ''
     
    btnShort.innerHTML = `<span class="loader"></span>`
})




