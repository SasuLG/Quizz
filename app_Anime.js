var alphabet = "abcdefghijklmnopqrstuvwxyzéè'.0123456789()"
alphabet += " "

var percent = document.querySelector('span')
var circle = document.querySelector('circle')


var next = document.querySelectorAll('.next')
next.forEach(e=>{
    e.setAttribute('hidden', 'hidden')
})
var resultat = document.querySelector('#resPercent')
resultat.setAttribute('hidden', 'hidden')
var score = 0;
var i = 0


var inputs = document.querySelectorAll('li')
var cheat = false;
var box = document.querySelectorAll('.quiznumber')
//var box = document.querySelectorAll('.quizzBox')

box[4].addEventListener('click', cheater)
var buttons = document.querySelectorAll('.buttons')

function cheater(){
    i++
    if (i >=10){
        cheat = true
        alert("c'est pas bien de tricher, mais bon pas grave")
    }
}


buttons.forEach((e)=>{
    e.addEventListener('click', valider)
})

inputs.forEach((e)=>{
    e.addEventListener('click', res)
    //e.id = crypt(e.id, e.children[1].textContent)
})


function res(){
    var value = this.value
    var id = this.id
    inputs.forEach(element => {
        if (element.value === value){
            for (let i = 0; i < element.children.length; i++){
                element.children[i].style.removeProperty("background-color")
            }
            
            
            if (element.children[0].id !== id && element.children[0].checked === true && element.value == value){
                element.children[0].checked = false;
            }
            
        }
    });
    for (let i = 0; i < this.children.length; i++){
        this.children[i].style.backgroundColor = 'orange'

    }
}

function valider(){
    /*
    reponse.forEach(e=>{
        var oui = decrypt(e.id, e.children[1].textContent)
    })
    */
    var value2 = this.value
    var bon = false
    this.removeEventListener('click', valider)
    inputs.forEach(e=>{
        if (this.value == e.value){
            e.removeEventListener('click', res)
            if (decrypt('wqzkgl', 'tricheur')== decrypt(e.id, e.children[1].textContent)){
                e.children[1].style.backgroundColor = '#83bd71'

            }  
            if ((decrypt('wqzkgl', 'tricheur') == decrypt(e.id, e.children[1].textContent) && e.children[0].style.backgroundColor == 'orange') || (cheat)){
                box[e.value-1].style.backgroundColor = '#83bd71'
                score ++
                bon = true;
                if (cheat && e.children[1].style.backgroundColor == 'orange' ){
                    e.children[1].style.backgroundColor = '#83bd71'
                    
                }
                if (cheat){
                    score -= 0.75
                }
            }else if (e.children[0].style.backgroundColor == 'orange'){
                e.style.removeProperty("background-color")
                if (!bon && !cheat){
                    box[e.value-1].style.backgroundColor = '#f44242'
                }
                e.children[1].style.backgroundColor = '#cc3d6a'
            }else{
                if (!bon && !cheat){
                    box[e.value-1].style.backgroundColor = '#f44242'
                }
            }
        }
    })
    next.forEach(e=>{
        if (e.children[0].value == value2){
            e.removeAttribute('hidden', 'hidden')
        }
    })
    this.setAttribute('hidden', 'hidden')
    
    
    if (value2 == 15){
        var scorePercent = score/(box.length-1)*100
        percent.innerHTML = parseInt(scorePercent) + "%"

        resultat.removeAttribute('hidden', 'hidden')
        var p = document.createElement('p')
        resultat.prepend(p)
        if (scorePercent <= 10){
            p.innerHTML = "Bon joue sérieusement stp (j'ai pas fait tout ça pou rien)"
        }else if(scorePercent < 50){
            p.innerHTML = "T'es pas très bon toi"
        }else if (scorePercent <= 80){
            p.innerHTML = "Pas mal tu t'y connais bien"
        }else if (scorePercent <= 90){
            p.innerHTML = "Waw t'es chaud mon reuf"
        }else{
            p.innerHTML = "Fin bro, prend une douche stp (non je dec t'es trop fort)"
        }

        var divRes = document.createElement('div')
        divRes.classList.add('divRes')
        resultat.append(divRes)
        var listScore = document.createElement('p')
        listScore.innerHTML = "ton score est de " + score + "/" + (box.length-1)
        divRes.append(listScore)
        circle.style.strokeDashoffset = 440- (scorePercent*440) /100
        if (scorePercent >=50){
            circle.style.stroke = '#83bd71'
            box[box.length-1].style.backgroundColor = '#83bd71'
        }else{
            box[box.length-1].style.backgroundColor = '#f44242'
        }
    }

}



//quand cheat enlever la bonne réponse




/*
bonGod : dzrIzh
mauBat : olyDlx
tjrPas : vuvRlw
tesNul : vpwPfp
*/