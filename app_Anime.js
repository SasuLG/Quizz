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
            if ((e.id == 'bonGod' && e.children[0].style.backgroundColor == 'orange') || cheat){
                box[e.value-1].style.backgroundColor = '#83bd71'
                score ++
                bon = true;
            }else if (e.children[0].style.backgroundColor == 'orange'){
                e.style.removeProperty("background-color")
                if (!bon){
                    box[e.value-1].style.backgroundColor = '#f44242'
                }
                e.children[1].style.backgroundColor = '#cc3d6a'
            }else{
                if (!bon){
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
    
}


//mettre un id différent sur les 4 réponses (les memes pour toutes les questions) et modifier une cle de base (césar) en la mutipliant par la value du bouton valider utilisé
//ne marche que sur un quizz ou alors la partie de la clé sur un différent

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