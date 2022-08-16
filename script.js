
var choix = true;
function change() {
    var elts = document.getElementsByClassName('division');
    var bouton=document.getElementsByTagName('button');
    var text=document.getElementsByTagName('p');
    if (choix == true) {
        elts[0].style.backgroundColor = 'yellow';
        elts[1].style.backgroundColor = 'yellow';
        elts[2].style.backgroundColor = 'yellow';
        elts[3].style.backgroundColor = 'yellow';
        text[0].style.color = 'yellow';
        text[1].style.color = 'blue';
        text[2].style.color = 'blue';
        text[3].style.color = 'blue';
        text[4].style.color = 'blue';
        bouton[0].style.backgroundColor = 'yellow';
        choix = false;
    }
    else {
        elts[0].style.backgroundColor = 'brown';
        elts[1].style.backgroundColor = 'brown';
        elts[2].style.backgroundColor = 'brown';
        elts[3].style.backgroundColor = 'brown';
        text[0].style.color = 'black';
        text[1].style.color = 'black';
        text[2].style.color = 'black';
        text[3].style.color = 'black';
        text[4].style.color = 'black';
        bouton[0].style.backgroundColor = 'brown';
        choix = true;
    }
}
    
// var elts = document.getElementsByClassName('division');

// Je prends le deuxième paragraphe
// J'accède à son attribut style
// Puis à sa propriété color
// elts[1].style.backgroundColor = 'yellow';