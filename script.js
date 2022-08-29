
var choix = true;
function change() {
    var elts = document.getElementsByClassName('division');
    var bouton = document.getElementsByClassName('bouton1');
    var text = document.getElementsByTagName('p');
    if (choix == true) {
        elts[0].style.backgroundColor = 'rgb(148, 72, 1)';
        elts[1].style.backgroundColor = 'rgb(148, 72, 1)';
        elts[2].style.backgroundColor = 'rgb(148, 72, 1)';
        elts[3].style.backgroundColor = 'rgb(148, 72, 1)';
        text[0].style.color = 'rgb(148, 72, 1)';
        text[1].style.color = 'black';
        text[2].style.color = 'black';
        text[3].style.color = 'black';
        text[4].style.color = 'black';
        bouton[0].style.backgroundColor = 'rgb(148, 72, 1)';
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
// function f_validation() {
//     var text = document.getElementsByTagName('input');
//     var textC = document.getElementsByTagName('textarea');
//     alert('Votre prénom :     ' + text[0].value  + '\nVotre Nom :     '  + text[1].value + '\nVotre numèro de téléphone :     '  + text[2].value+ '\nVotre adresse mail :     '  + text[3].value + '\n et votre commentaire :     '  + textC[0].value );
// }


// var prenom = document.getElementById('champ_prenom');
// var prenom_m = document.getElementById('prenom_manquant');

function f_validation() {
    var prenom = document.getElementById('champ_prenom');
    var prenom_m = document.getElementById('prenom_manquant');

    var nom = document.getElementById('champ_nom');
    var nom_m = document.getElementById('nom_manquant');

    var tel = document.getElementById('champ_tel');
    var tel_m = document.getElementById('tel_manquant');

    var email = document.getElementById('champ_email');
    var email_m = document.getElementById('email_manquant');


    // if (!prenom.value) {
    //     e.preventDefault();
    //     prenom_m.textContent = 'P';
    //     prenom_m.style.color = 'black';
    // }
        if(!prenom.value){
            prenom_m.textContent = "Donner votre prénom SVP!";
            prenom_m.style.color = "black";
        }
        else if(!nom.value){
            prenom_m.textContent = ""; //effacer le message d'alerte du champ précédant
            nom_m.textContent = "Donner votre nom SVP!";
            nom_m.style.color = "black";
            
        }
        else if(!tel.value){
            nom_m.textContent = "";//effacer le message d'alerte du champ précédant
            tel_m.textContent = "Donner votre numèro de téléphone SVP!";
            tel_m.style.color = "black";
            
        }
        else if(!email.value){
            tel_m.textContent = "";//effacer le message d'alerte du champ précédant
            email_m.textContent = "Donner votre adresse Email SVP!";
            email_m.style.color = "black";
            
        }
        else{
            email_m.textContent = "";//effacer le message d'alerte du champ précédant
            var text = document.getElementsByTagName('input');
            var textC = document.getElementsByTagName('textarea');
            alert('Votre prénom :     ' + text[0].value  + '\nVotre Nom :     '  + text[1].value + '\nVotre numèro de téléphone :     '  + text[2].value+ '\nVotre adresse mail :     '  + text[3].value + '\n et votre commentaire :     '  + textC[0].value );
            }
    

   
}


// var elts = document.getElementsByClassName('division');  + text[1].value  + text[2].value + text[3].value + text[4].value

// Je prends le deuxième paragraphe
// J'accède à son attribut style
// Puis à sa propriété color
// elts[1].style.backgroundColor = 'yellow';