console.log("-------------------------------------------------");
console.log("Exercice 3");
console.log("-------------------------------------------------");

function fibo(positionCherchee) {
    if (positionCherchee == 0) {
        return 0;
    }
    else {
        let pam1 = 0; // Le 'positionActuelle moins 1'-ième entier de Fibonacci
        let pa = 1;   // Le 'positionActuelle'-ième entier de Fibonacci
        let positionActuelle = 2; // On connaît déjà les 2 premiers entiers de Fibonacci. On est donc rendus au deuxième.

        // Tant que l'on n'est pas arrivés au millionième...
        while (positionActuelle < positionCherchee) {
            // ...calculer le prochain entier de Fibonacci:
            let prochain = pa + pam1;

            // Mettre pam1 et pa à jour pour la prochaine exécution de la boucle.
            pam1 = pa;
            pa = prochain;

            positionActuelle = positionActuelle + 1;
        }

        // Enfin, retourner l'entier trouvé.
        return pa;
    }
}

// Afficher le 50-ième entier de Fibonacci.
//
// Essayer de changer pour une autre position pour savoir si le code
// fonctionne pour d'autres valeurs. Utiliser une liste des entiers de
// Fibonacci pour vérifier le résultat:
// http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibtable.html
//
// À noter qu'il est normal qu'à partir d'une certaine position 
// (en l'occurence, 80) la valeur calculée ne soit pas exacte.
console.log(fibo(50));
