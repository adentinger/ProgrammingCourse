// Ne pas oublier: Une ligne qui cause une erreur fait
// arrêter l'exécution du script.

let zero        = 0;
let one         = 1;
let pi          = 3.14159265;
let string      = "This is an ex-parrot.";
let condTrue    = true;
let condFalse   = false;

// ----------------------------------------------------------------------------
// -                                 CONDITIONS                               -
// ----------------------------------------------------------------------------
console.log("-- CONDITIONS");

console.log("Comment vérifier une condition?");

console.log(zero === 0);        // true
console.log(one === 0);         // false
console.log(pi > pi);           // false
console.log(pi >= pi);          // true
console.log(true === true);     // true
console.log(false === false);   // true
console.log(true === false);    // false
console.log(0 === false);       // false
let estCeQueZeroVautZero = zero === 0; // "estCeQueZeroVautZero" vaut true
console.log(estCeQueZeroVautZero);     // true

/////////////////////////////////////////////////

console.log("Comment des chaînes de caractères se comparent-elles?");
// Conseil: Regarder la valeur des caractères en ASCII. Par exemple, le
// caractère "A" vaut 65 en ASCII, et le caractère "a" vaut 97, donc
// "a" > "A".
// https://www.sciencebuddies.org/science-fair-projects/references/ascii-table

console.log("abc" === "abc");   // true
console.log("abc" === "Abc");   // false
console.log("abc" < "cba");     // true
console.log("cba" < "abc");     // false
console.log("abc" < "acb");     // true
console.log("acb" < "abc");     // false
console.log("ABC" < "abc");     // true
console.log("%bc" < "Abc");     // true
console.log("[bc" < "Abc");     // false


console.log(""); // Pour afficher une ligne vide.

// ----------------------------------------------------------------------------
// -                               CONDITIONNELLES                            -
// ----------------------------------------------------------------------------
console.log("-- CONDITIONNELLES");

console.log("Comment écrire une condtionnelle?");
if (zero === 0) {
    console.log("zero vaut 0"); // Se fait afficher
}
else if (one === 1) {
    console.log("one vaut 1");  // Ne se fait pas afficher parce que la première
                                // condition était vraie
}
else {
    console.log("zero ne vaut pas 0 et one ne vaut pas 1"); // Ne se fait pas afficher
}

// Autre façon d'écrire la même chose.
isZeroEqualToZero = zero === 0;
console.log(isZeroEqualToZero); // true
isOneEqualToOne = one === 1;
console.log(isOneEqualToOne);   // true
if (isZeroEqualToZero) {
    console.log("zero vaut 0"); // Se fait afficher
}
else if (isOneEqualToOne) {
    console.log("one vaut 1");  // Ne se fait pas afficher parce que la première
                                // condition était vraie
}
else {
    console.log("zero ne vaut pas 0 et one ne vaut pas 1"); // Ne se fait pas afficher
}

console.log("Est-ce qu'une conditionnelle peut ne pas avoir de 'else if'? Peut avoir plusieurs 'else if'? Peut ne pas avoir de 'else'?");
console.log("À faire");
