let section4 = document.getElementById("section4");

let titre = document.createElement("h2");

let titreTexte = document.createTextNode("Titre bonus");

titre.appendChild(titreTexte);

section4.appendChild(titre);


let paragraphe = document.createElement("p");
paragraphe.id = "paragrapheBonus";

let paragrapheTexte = document.createTextNode("Ceci est un paragraphe bonus.");

paragraphe.appendChild(paragrapheTexte);

section4.appendChild(paragraphe);

let liste = document.querySelector("#paragrapheBonus");

liste.classList.add("styleBleu", "styleGras");