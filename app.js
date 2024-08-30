// Créer un élément bouton
let button = document.createElement('button');

// Ajouter du texte au bouton
button.innerHTML = "Cliquez-moi";

// Ajouter un ID au bouton (optionnel)
button.id = "mon-bouton";

// Ajouter une classe au bouton (optionnel)
button.className = "bouton-classe";

// Ajouter une fonction au clic du bouton (optionnel)
button.onclick = function() {
    alert('Vous avez cliqué sur le bouton !');
};

// Sélectionner l'élément parent où ajouter le bouton
let container = document.getElementById('button-container');

// Ajouter le bouton au conteneur
container.appendChild(button);
