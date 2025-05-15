//🎯 Objectifs : Manipulation de tableaux, fonctions, boucles, conditions et DOM.
//🟢 Niveau 1 – Créer une tâche et la mettre dans un tableau
//Crée un champ de saisie et un bouton "Ajouter". Lorsqu'on clique sur "Ajouter", la tâche saisie doit être ajoutée à un tableau `tasks`.
//Affiche un message dans la console pour vérifier que la tâche a bien été ajoutée au tableau.
//🟡 Niveau 2 – Afficher les tâches sous forme de cartes
//Pour chaque tâche dans le tableau `tasks`, crée une carte HTML affichant le texte de la tâche.
//Utilise une boucle pour afficher dynamiquement toutes les tâches dans un conteneur `<div id="taskList"></div>`.
//🟠 Niveau 3 – Supprimer une tâche
//Ajoute un bouton "Supprimer" à chaque carte de tâche. Lorsqu'on clique sur ce bouton, la tâche correspondante doit être supprimée du tableau `tasks`.
//Mets à jour l'affichage des tâches après la suppression./
//🔵 Niveau 4 – Modifier une carte
//Ajoute un bouton "Modifier" à chaque carte de tâche. Lorsqu'on clique sur ce bouton, ouvre un `prompt()` pour permettre à l'utilisateur de modifier le texte de la tâche.
//Si un texte valide est saisi, remplace la tâche dans le tableau et mets à jour l'affichage.
//🔴 Niveau 5 – Bonus facultatif
//Propose une fonction `editTask(index)` qui permet d'ouvrir un prompt avec le texte actuel de la tâche. L'utilisateur peut modifier la tâche et valider.
//La tâche modifiée est ensuite mise à jour dans le tableau et l'affichage est réactualisé sans recharger la page.

let tableautask = [];
let task = document.getElementById("input").value;
document.getElementById("bouton").addEventListener("click", function () {
    let task = document.getElementById("input").value;
    if (task.trim() !== "") {
        tableautask.push(`${task}`)
        let divtask = document.createElement("div");
        divtask.classList.add("divtask");
        document.getElementById("section2").appendChild(divtask);
        let p = document.createElement("p");
        p.textContent = task;
        divtask.appendChild(p);
        let button = document.createElement("button");
         button.classList.add("buttonsuppr");
         button.textContent = "Supprimer";
         button.addEventListener("click", function(){
            divtask.remove();
         })
         divtask.appendChild(button);
        console.log(`${tableautask}`);
    }
    else{
        alert(`Veuillez entrer une tâche!`)
    }
})

