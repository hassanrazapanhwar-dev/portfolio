
const bar = document.getElementById('bar')
const closeBar = document.getElementById('close')
const navbar = document.getElementById('navbar')

bar.addEventListener('click', () => {
    navbar.classList.add('active')
})

closeBar.addEventListener('click', () => {
    navbar.classList.remove('active')
})

document.addEventListener('click', (e)=>{
    if(!e.target.closest('#navbar') & !e.target.closest('#bar')){
        navbar.classList.remove('active')
    }
})