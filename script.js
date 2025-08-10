let compteur = 0;

const bouton = document.getElementById('bouton-compteur');
const affichage = document.getElementById('affichage-compteur');

bouton.addEventListener('click', function() {
    compteur++;
    affichage.textContent = compteur;
});