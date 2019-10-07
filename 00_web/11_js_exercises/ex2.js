console.log("-------------------------------------------------");
console.log("Exercice 2");
console.log("-------------------------------------------------");

function afficherTriangle(n) {
    // Faire 'n' fois...
    let i = 0;
    while (i < n) { // ('i' ira de '0' à 'n - 1' inclusivement.
                    // On aurait aussi pu utiliser une boucle 'for' à la place d'un 'while'.)

        // ...afficher une ligne:

        let nombreDeX = i + 1;

        // Commencer par une chaîne de caractères vide, ...
        let ligneAAfficher = "";

        // ...puis faire 'nombreDeX' fois...
        let j = 0;
        while (j < nombreDeX) { // ('j' ira de 0 à 'nombreDeX - 1' inclusivement).

            // ...ajouter un `x` à la ligne à afficher...
            ligneAAfficher = ligneAAfficher + "x";

            j = j + 1;
        }

        // ...et enfin afficher la ligne.
        console.log(ligneAAfficher);

        i = i + 1;
    }
}

// Essayer de changer le nombre de lignes pour voir si le code fonctionne
// pour d'autres valeurs que juste 4.
afficherTriangle(4);
