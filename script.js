const nav = document.querySelector('#nav-bar ul')
const openToggle = document.querySelector('#open')
const closeToggle = document.querySelector('#close')

openToggle.addEventListener('click', () =>{
    nav.classList.remove('list')
    openToggle.style.display = 'none'
    closeToggle.style.display = 'block'
})
closeToggle.addEventListener('click', () =>{
    nav.classList.add('list')
    openToggle.style.display = 'block'
    closeToggle.style.display = 'none'
})