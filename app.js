var timer = 100
var i = 0
var h = document.querySelector('h1')

h.onclick = ()=>{
    if (i == 0){
        setInterval(() =>{
            h.classList.toggle('red')
        }, timer)
        i++
    }else{
        i = 0
    }
    console.log(i)
}




