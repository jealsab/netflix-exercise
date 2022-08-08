
const container=document.querySelector('.c')
const image=document.querySelector('.slider ')

image.addEventListener("click",function(){
    container.classList.add('active')
})
document.querySelector('.trend').addEventListener("click",function(){
    container.classList.add('active')
})


document.querySelector('.continue').addEventListener("click",function(){
    container.classList.add('active')
})

