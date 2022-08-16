
const container=document.querySelector('#carousel')
const image=document.querySelector('.carousel-item ')

image.addEventListener("click",function(){
    container.classList.add('active')
})
