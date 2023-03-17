//element.setAttribute("hidden", "hidden");

var inputs = document.querySelectorAll('li')
//var inputs = document.querySelectorAll('label')

//var inputs2 = document.querySelectorAll('li label') pour tester tous les li value 1...

var buttons = document.querySelectorAll('button')

var box = document.querySelectorAll('.quizzBox')


buttons.forEach((e)=>{
    e.addEventListener('click', valider)
})

inputs.forEach((e)=>{
    e.addEventListener('click', res)
})

function res(){
    console.log(this)
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
    //console.log(this)
    //console.log(box[this.value-1])
    //box[0].classList.add('inputChecked')
    //console.log(box[0])
    
    this.removeEventListener('click', valider)
    inputs.forEach(e=>{
        if (this.value == e.value){
            e.removeEventListener('click', res)
        }
    })
}






//enlever le _1 et juste tester si le bon est checked
//puis le remove des inputs
//Selection juste la bonne réponse et si elle est pas validé, mettre faux
//utilise value (de la question)


//mettre un id différent sur les 4 réponses (les memes pour toutes les questions) et modifier une cle de base (césar) en la mutipliant par la value du bouton valider utilisé
//ne marche que sur un quizz ou alors la partie de la clé sur un différent