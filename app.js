var timer = 200
var h = document.querySelector('h1')
var can = false
h.addEventListener("mousedown", (e) => {
    can=!can    
})

setInterval(() =>{
    if(can)h.classList.toggle('red')
    else h.classList.remove('red')
}, timer)
