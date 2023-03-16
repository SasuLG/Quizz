//element.setAttribute("hidden", "hidden");

var inputs = document.querySelectorAll('label')
console.log(inputs)
var buttons = document.querySelectorAll('button')
console.log(buttons)

var box = document.querySelectorAll('.quizzBox')


console.log(box[0])
buttons.forEach((e)=>{
    e.addEventListener('click', valider)
})

inputs.forEach((e)=>{
    e.addEventListener('click', res)
})

function res(){
    if (this.style.backgroundColor == 'orange'){
        console.log('oui')
        return
    }else{
        this.style.backgroundColor = 'orange'
        console.log('non')
    }
    
    //this.classList.add('inputChecked')
    //this.removeEventListener('click', res)
}
function valider(){
    console.log(this)
    
    console.log(box[this.value-1])
    //box[0].classList.add('inputChecked')
    //console.log(box[0])
    
    this.removeEventListener('click', valider)
}

/*
inputs.forEach((e)=>{
    if (e.hasAttribute('class')){
        console.log(e)  
    }
    if (e.checked){
        e.classList.add('inpuChecked')
    }
})

function oui(){
    console.log('oui')
}
*/



































//enlever le _1 et juste tester si le bon est checked
//puis le remove des inputs
//Selection juste la bonne réponse et si elle est pas validé, mettre faux
//utilise value (de la question)