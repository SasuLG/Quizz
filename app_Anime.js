//var temp = document.querySelector('label')
//console.log(temp.textContent)
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

var key = 4 //key*value 

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
    this.removeEventListener('click', valider)
    inputs.forEach(e=>{
        if (this.value == e.value){
            e.removeEventListener('click', res)
            if (e.id == 'bonGod'){
                e.children[1].style.backgroundColor = '#83bd71'

            }
            if ((e.id == 'bonGod' && e.children[0].style.backgroundColor == 'orange') || (cheat)){ //compte les 4 réponses
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
        resultat.append(p)
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
    }

}


//quand cheat enlever la bonne réponse
//mettre le cercle en vert quand >50% et en rouge sinon
//metter un bordure au cercle

/*key*value
key = 3
bonGod = ERQJR G
mauBat = PDXED W
tjrPas = WMUSD V
tesNul = WHVQX O

key = 6
bonGod = HUTMU J
mauBad = SGAHG Z
tjrPas = ZPXVG Y
tesNul = ZKYTA R

key = 9
bonGod = KXWPX M
mauBad = VJDKJ C
tjrPas = CSAYJ B
tesNul = CNBWD U

key = 12
bonGod = NAZSA P
mauBad = YMGNM F
tjrPas = FVDBM E
tesNul = FQEZG X

key = 15
bonGod = QDCVD S
mauBad = BPJQP I
tjrPas = IYGEP H
tesNul = ITHCJ A

key = 18
bonGod = TGFYG V
mauBad = ESMTS L
tjrPas = LBJHS K
tesNul = LWKFM D

key = 21
bonGod = WJIBJ Y
mauBad = HVPWV O
tjrPas = OEMKV N
tesNul = OZNIP G

key = 24
bonGod = ZMLEM B
mauBad = KYSZY R
tjrPas = RHPNY Q
tesNul = RCQLS J

key = 27
bonGod = CPOHP E
mauBad = NBVCB U
tjrPas = UKSQB T
tesNul = UFTOV M

key = 30
bonGod = FSRKS H
mauBad = QEYFE X
tjrPas = XNVTE W
tesNul = XIWRY P

key = 33
bonGod = IVUNV K
mauBad = THBIH A
tjrPas = AQYWH Z
tesNul = ALZUB S

key = 36
bonGod = LYXQY N
mauBad = WKELK D
tjrPas = DTBZK C
tesNul = DOCXE V

key = 39
bonGod = OBATB Q
mauBad = ZNHON G
tjrPas = GWECN F
tesNul = GRFAH Y

key = 42
bonGod = REDWE T
mauBad = CQKRQ J
tjrPas = JZHFQ I
tesNul = JUIDK B

key = 45
bonGod = UHGZH W
mauBad = FTNUT M
tjrPas = MCKIT L
tesNul = MXLGN E

*/