var next = document.querySelectorAll('.next')
next.forEach(e=>{
    e.setAttribute('hidden', 'hidden')
})
var score = 0;

var key = 4 //key*value 

var inputs = document.querySelectorAll('li')
var cheat = false;
var box = document.querySelectorAll('.quiznumber')
//var box = document.querySelectorAll('.quizzBox')


var buttons = document.querySelectorAll('.buttons')



buttons.forEach((e)=>{
    e.addEventListener('click', valider)
})

inputs.forEach((e)=>{
    e.addEventListener('click', res)
})

function res(){
    var value = this.value
    inputs.forEach(element => {
        if (element.value === value){
            for (let i = 0; i < element.children.length; i++){
                element.children[i].style.removeProperty("background-color")

            }
        }
    });
    for (let i = 0; i < this.children.length; i++){
        this.children[i].style.backgroundColor = 'orange'

    }


}
function valider(){
    var value2 = this.value
    this.removeEventListener('click', valider)
    inputs.forEach(e=>{
        if (this.value == e.value){
            e.removeEventListener('click', res)
            if (e.id == 'bonGod'){
                e.children[1].style.backgroundColor = '#83bd71'

            }

            if ((e.id == 'bonGod' && e.children[0].checked) || cheat){
                box[e.value-1].style.backgroundColor = '#83bd71'
                score ++
            }else if (e.children[0].checked){
                e.style.removeProperty("background-color")
                e.children[1].style.backgroundColor = '#cc3d6a'
                box[e.value-1].style.backgroundColor = '#f44242'
            }else{
                box[e.value-1].style.backgroundColor = '#f44242'
            }
        }
    })
    next.forEach(e=>{
        if (e.children[0].value == value2){
            e.removeAttribute('hidden', 'hidden')
        }
    })
    this.setAttribute('hidden', 'hidden')
    
}




//DECHECKED !!!!!!!!!!!! (quand tu as checked meme si il ne l'est pas à la fin, il est en rouge)


//mettre un id différent sur les 4 réponses (les memes pour toutes les questions) et modifier une cle de base (césar) en la mutipliant par la value du bouton valider utilisé
//ne marche que sur un quizz ou alors la partie de la clé sur un différent

/*key*value
key = 3
bonGod = ERQJR G
mauBad = PDXED G
tjrPas = WMUSD V
tesNul = ERQJR G

key = 6
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 9
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 12
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 15
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 18
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 21
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 24
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 27
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 30
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 33
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 36
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 39
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 42
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

key = 45
bonGod = 
mauBad = 
tjrPas = 
tesNul = 

*/