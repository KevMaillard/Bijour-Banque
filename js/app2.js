import { user } from "./user.js";

document.querySelector("#firstname").textContent = user.firstname;

//recupere les infos reseignées et les transforme en variables au click sur VALIDER 
document.querySelector('.valider').addEventListener('click', function(event){


let montant = document.getElementById("montant").value;
let operation = document.getElementById("operation");
let intitule = document.getElementById("intitule").value;
let totalCredit = document.getElementById("totalCredit");
let totalDebit = document.getElementById("totalDebit");
let totalDevise = document.getElementById("devise");
let total = document.getElementById("total");
let listeCredit = document.getElementById("detailsCredit");
let listeDebit = document.getElementById("detailsDebit");
let totalDebitPercent = document.getElementById("totalDebitPercent");
let devise = " €";

event.preventDefault();
console.log(intitule);

    // Si montant indiqué = positif/négatif, alors creation de varibles qui ajoutent la somme et les details a la liste plus total
if (operation.value === "+"){
    console.log(montant);
    var newLi = document.createElement('li');
    listeCredit.appendChild(newLi);
    var newSpan = document.createElement('span');
    newSpan.setAttribute("class", "intitule");
    newLi.appendChild(newSpan);
    newSpan.innerHTML = intitule;
    var newSpan2 = document.createElement('span');
    newSpan2.setAttribute("class", "montant txt-color-gazoil");
    newLi.appendChild(newSpan2);
    newSpan2.innerHTML = Number(montant)+devise;
    totalCredit.innerHTML = Number(totalCredit.innerHTML) + Number(montant);
    console.log(totalCredit.innerHTML);
}
else{
   console.log(montant);
   var newLi = document.createElement('li');
   listeDebit.appendChild(newLi);
   var newSpan = document.createElement('span');
   newSpan.setAttribute("class", "intitule");
   newLi.appendChild(newSpan);
   newSpan.innerHTML = intitule;
   var newSpan2 = document.createElement('span');
   newSpan2.setAttribute("class", "montant txt-color-red");
   newLi.appendChild(newSpan2);
   newSpan2.innerHTML = Number(montant)+devise;
   var newSpan3 = document.createElement('span');
   newSpan3.setAttribute("class", "percent txt-color-red");
   newLi.appendChild(newSpan3);
   newSpan3.innerHTML = ((Number(montant)/Number(totalCredit.innerHTML))*100).toFixed(2) + " %" ;
   totalDebit.innerHTML = Number(totalDebit.innerHTML) + Number(montant) ;
   console.log(totalDebit.innerHTML);
}

// Montant total et style selon resultat
total.innerHTML = (Number(totalCredit.innerHTML) - Number(totalDebit.innerHTML)).toFixed(2);
totalDebitPercent.innerHTML = (Number(totalDebit.innerHTML)/Number(totalCredit.innerHTML)*100).toFixed(2) +" %";

if (Number(total.innerHTML) < 0){
        total.style.color ='red';
        totalDevise.style.color = 'red';
}

else {
    total.style.color ='white';
    totalDevise.style.color = 'white';
}

});