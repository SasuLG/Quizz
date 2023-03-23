var all = document.querySelector('#quizz')
var all2 = document.querySelector('header')
var all3 = document.querySelector('p')



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

var bonus = document.querySelector('#niveauBonus')
if (bonus != undefined){
    bonus.style.display = 'none'
}

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

var audio = document.querySelectorAll('audio')
audio.forEach(e=>{
    //e.hidden = true
    //e.volume = 0.5
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
    var value2 = this.value
    var bon = false
    var bool = false
    if (audio[value2] != undefined){
        audio[value2].addEventListener('click', startAudio(value2))
    }

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
                bool = true
                e.parentElement.parentElement.classList.remove('loose')
                e.parentElement.parentElement.classList.add('win')
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
                if(!bool)e.parentElement.parentElement.classList.add('loose')
            }else{
                if (!bon && !cheat){
                    box[e.value-1].style.backgroundColor = '#f44242'
                    if(!bool)e.parentElement.parentElement.classList.add('loose')
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
    
    
    if (value2 == box.length-1){
        var scorePercent = score/(box.length-1)*100
        percent.innerHTML = parseInt(scorePercent) + "%"

        resultat.removeAttribute('hidden', 'hidden')
        var p = document.createElement('p')
        resultat.prepend(p)
        resultat.classList.add('fin')
        if (scorePercent <= 10){
            p.innerHTML = "Bon joue sérieusement stp (j'ai pas fait tout ça pou rien)"
        }else if(scorePercent < 50){
            p.innerHTML = "T'es pas très bon toi"
        }else if (scorePercent <= 80){
            p.innerHTML = "Pas mal tu t'y connais bien"
            if (all.classList.value == 'hard'){
                next[next.length-1].removeAttribute('hidden', 'hidden')
            }
        }else if (scorePercent <= 90){
            p.innerHTML = "Waw t'es chaud mon reuf"
            if (all.classList.value == 'hard'){
                next[next.length-1].removeAttribute('hidden', 'hidden')
            }
        }else{
            p.innerHTML = "Fin bro, prend une douche stp (non je dec t'es trop fort)"
            if (all.classList.value == 'hard'){
                next[next.length-1].removeAttribute('hidden', 'hidden')
            }
            resultat.classList.add('finWin')
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

next[next.length-1].addEventListener('click', go)

function go(){
    if (bonus != undefined){
        bonus.style.display = 'flex'
        all.style.display = 'none'
        all2.style.display = 'none'
        all3.style.display = 'none'
    }

}


/*
if (audio != undefined){
    audio[0].hidden = false
}
*/

function startAudio(value2){
    if (audio[value2].hidden != true){
        if (audio[value2] != undefined){
            audio[value2-1].pause()
            audio[value2].play();
        }
    }
}

/*
bonGod : dzrIzh
mauBat : olyDlx
tjrPas : vuvRlw
tesNul : vpwPfp
*/