console.log("-------------------------------------------------");
console.log("Exercice 1");
console.log("-------------------------------------------------");

function saluer(pays, sexe) {
    // Si le pays est le Canada...
    if (pays === "Canada") {
        // ...alors afficher un message.
        console.log("J'aime la tourtière");
    } // Pas de 'else if' ni de 'else' après ce 'if': on n'a rien à faire
      // si le pays n'est pas le Canada.

    if (sexe === "F") { // Ensuite, si le sexe est "F"...
        // ...afficher "Bonjour, Madame"...
        console.log("Bonjour, Madame");
    }
    else if (sexe === "H") { // ...sinon, si le sexe est "H"...
        // ...afficher "Bonjour, Monsieur".
        console.log("Bonjour, Monsieur");
    } // Pas d'autre 'else if' ni de 'else' après ce 'if': on n'a rien à faire
      // si 'sexe' ne vaut ni "F" ni "H".
}

// Essayer de changer le pays pour "Canada" pour voir si le code fait
// ce qu'il est supposé faire. Aussi essayer de changer le sexe pour "F"
// pour la même raison.
saluer("USA", "F");
