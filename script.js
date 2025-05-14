//🎯 Objectifs : Manipulation de tableaux, fonctions, boucles, conditions et DOM.
//🟢 Niveau 1 – Créer une tâche et la mettre dans un tableau
//Crée un champ de saisie et un bouton "Ajouter". Lorsqu'on clique sur "Ajouter", la tâche saisie doit être ajoutée à un tableau `tasks`.
//Affiche un message dans la console pour vérifier que la tâche a bien été ajoutée au tableau.
//🟡 Niveau 2 – Afficher les tâches sous forme de cartes
//Pour chaque tâche dans le tableau `tasks`, crée une carte HTML affichant le texte de la tâche.
//Utilise une boucle pour afficher dynamiquement toutes les tâches dans un conteneur `<div id="taskList"></div>`.

let tableautask = [];

document.getElementById("bouton").addEventListener("click", function(){
    let task = document.getElementById("input").value;
    tableautask.push(`${task}`)
    console.log(`${tableautask}`);
    
})

