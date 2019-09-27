// ----------------------------------------------------------------------------
// -              FONCTIONS AVEC PARAMÈTRE SANS VALEUR DE RETOUR              -
// ----------------------------------------------------------------------------
console.log("-- FONCTIONS AVEC PARAMÈTRE SANS VALEUR DE RETOUR");

console.log("Comment définir une fonction avec un paramètre?");
function multiplierPar2EtAfficher(x) {
    console.log(x * 2);
}

console.log("Comment définir une fonction qui prend plusieurs paramètres?");
function multiplierEtAfficher(a, b) {
    console.log(a * b);
}

console.log("Comment appeler une fonction qui prend un paramètre?");
multiplierPar2EtAfficher(3.2); // Affiche "6.4"

console.log("Comment appeler une fonction qui prend plusieurs paramètres?");
multiplierEtAfficher(2.5, 1.5); // Affiche "3.75"

console.log("Que se passe-t-il si le nom d'un paramètre à l'intérieur d'une " +
            "fonction est le même que le nom d'une variable dans le code qui " +
            "appelle cette fonction?");
console.log("À faire");
// 1. Définir une fonction qui prend deux paramètres: x et y, et qui
// affiche la valeur de x et la valeur de y.

// 2. Définir une variable x et une variable y et leur donner une valeur
// quelconque mais différente.

// 3. Appeler la fonction définie précédemment avec la variable x comme premier
// paramètre et la variable y comme deuxième paramètre. Regarder quelle sont
// les valeurs de x et de y à l'intérieur de la fonction.

// 4. Ensuite appeler la fonction avec la variable y comme premier paramètre et
// la variable x comme deuxième paramètre. Regarder quelle sont les valeurs de
// x et de y à l'intérieur de la fonction.

// ----------------------------------------------------------------------------
// -                     FONCTIONS AVEC VALEUR DE RETOUR                      -
// ----------------------------------------------------------------------------
console.log("--FONCTIONS AVEC VALEUR DE RETOUR");

console.log("Comment définir une fonction avec une valeur de retour?");
function retourner2() {
    return 2;
}

console.log("Comment utiliser la valeur de retour d'une fonction?");
let a = retourner2();
console.log(a); // Affiche "2".
console.log(retourner2()); // Affiche "2".

console.log("Une fonction a-t-elle le droit d'avoir des paramètres ET une valeur de retour?");
function ajouter(x, y) {
    return x + y;
}
console.log(ajouter(2, 3)); // Affiche "5", donc oui, on a le droit. Encore heureux!

console.log("Que se passe-t-il si une fonction a plusieurs instructions 'return'?");
console.log("À faire");
// 1. Définir une fonction qui retourne une certaine valeur, puis qui affiche
// un message, puis qui retourne une autre valeur.

// 2. Appeler cette fonction. Qu'est-ce qui se fait retourner? Est-ce que le
// message est affiché?
// Astuce pour comprendre ce qui se passe: Comme en maths, une fonction
// JavaScript ne retourne qu'une seule valeur.
