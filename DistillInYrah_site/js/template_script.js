// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('../templates/base_template.html') //charge le contenu de base_template.html -header et footer
    .then(response => response.text())
    .then(data => {
        document.querySelector('body').innerHTML = data; // dit que les données du fichier auquel on a accès sont les données du fichier que l'on edit actuellement
    });
});
