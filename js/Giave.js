const button2d = document.querySelector('.button-2d')
const button3d = document.querySelector('.button-3d')
const khungVe3dcontent = document.querySelector('.KhungVe3D')
const khungVe2dcontent = document.querySelector('.KhungVe2D')


button2d.addEventListener("click", function(){
    button3d.classList.remove('active')
    button2d.classList.add('active')
    khungVe2dcontent.style.display = 'flex'
    khungVe3dcontent.style.display = 'none'

})

button3d.addEventListener("click", function(){
    button2d.classList.remove('active')
    button3d.classList.add('active')
    khungVe2dcontent.style.display = 'none'
    khungVe3dcontent.style.display = 'flex'
})
