var li = document.querySelectorAll('li')

li.forEach((e)=>{
    e.id = crypt(e.id, e.children[1].textContent)
})

function crypt(texte, texteCle){
    var cle = ""
    if (texteCle.length < texte.length){
        for (var k = 0; k < texte.length; k+= texteCle.length){
            cle += texteCle
        }
    }else{
        cle = texteCle.substring(0, texte.length)
    }
    var numCle; 
    var numTexte;
    var res = ""
    cle = cle.toLowerCase()
    texte = texte.toLowerCase()
    for (var i = 0; i < texte.length; i++){
        for (var j = 0; j < alphabet.length; j++){
            if (cle[i] == alphabet[j]){
                numCle = j
            }
            if (texte[i] == alphabet[j]){
                numTexte = j
            }
        }
        res += alphabet[(numCle +numTexte )%26]
    }
    return res
}

function decrypt(texte, texteCle){
    var cle = ""
    if (texteCle.length < texte.length){
        for (var k = 0; k < texte.length; k+= texteCle.length){
            cle += texteCle
        }
    }else{
        cle = texteCle.substring(0, texte.length)
    }
    var numCle; 
    var numTexte;
    var res = ""
    cle = cle.toLowerCase()
    texte = texte.toLowerCase()
    for (var i = 0; i < texte.length; i++){
        for (var j = 0; j < alphabet.length; j++){
            if (cle[i] == alphabet[j]){
                numCle = j
            }
            if (texte[i] == alphabet[j]){
                numTexte = j
            }
        }
        var test = (numTexte -numCle %26)
        if (test < 0){
            test += 26
        }
        res += alphabet[test]
    }
    return res
}
