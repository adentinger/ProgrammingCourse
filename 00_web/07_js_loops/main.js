// ----------------------------------------------------------------------------
// -                               BOUCLE WHILE                               -
// ----------------------------------------------------------------------------
console.log("-- BOUCLE WHILE");

console.log("Comment écrire une boucle while?");
a = 0;
while (a < 10) {
    console.log("Hello world!"); // "Hello world!" s'affichera 10 fois
    a = a + 1;
}


console.log("Il arrive parfois d'écrire des boucles qui ne se terminent jamais ; oops");
// Oops ; oublié d'ajouter 1 à b à l'intérieur de cette boucle.
// La condition restera vraie à l'infini puisque b restera à 0 pour
// toujours, donc la console affichera '0' à l'infini.
// Autres conséquences:
// un des coeurs du processeur sera à 100% d'utilisation, la page web
// ne répondra plus et le ventilateur de l'ordinateur va se mettre à
// tourner plus vite que la normale...
// IMPORTANT: Fermer la page web pour arrêter le massacre :) . Supprimmer
// ou remettre en commentaire le code avant de rouvrir la page.

// Décommenter cette boucle pour essayer.
// b = 0;
// while (b <= 9) {
//     console.log(b);
// }

console.log("Que se passe-t-il si on utilise autre chose qu'un booléen dans la condition du while?");
// Suggestion: essayer while avec une chaîne de caractères vide (ceci: "") et
// while avec une chaîne de caractères non vide (par exemple "abc").
// Essayer aussi while avec zéro comme condition, avec un nombre négatif, etc.

// ----------------------------------------------------------------------------
// -                                BOUCLE FOR                                -
// ----------------------------------------------------------------------------
console.log("-- BOUCLE FOR");

console.log("Comment écrire une boucle for?");
for (i = 0; i < 10; i = i + 1) {
    console.log(i);
}

console.log("Comment écrire une boucle for qui va en descendant?");
// NOTE: Pour produire le même résultat, on aurait aussi pu
// aller en montant de 1 en 1, comme dans le test précédent, mais
// afficher 9-i plutôt que d'afficher i.
for (i = 9; i >= 0; i = i - 1) {
    console.log(i);
}

console.log("Comment écrire une boucle for qui va en montant de 3 en 3?");
console.log("À faire.");

console.log("Comment pourrait-on réécrire cette boucle while en une boucle for?");
b = 0;
while (b < 20) {
    console.log(b);
    b = b + 1;
}
console.log("À faire.");
