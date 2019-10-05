# Page web d'illustration des fonctions avec paramètres et/ou valeur de retour en JavaScript

## Description

Une page web qui introduit aux fonctions avec paramètres et/ou valeur de retour en JavaScript.

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

### Fonctions avec paramètres

La manière d'écrire une fonction que nous avons vu à l'exemple précédent peut être utile, mais que faire si le code à l'intérieur de la fonction avait besoin d'une information extérieure? Dans l'exemple précédent, la fonction `casserOeufNumero` devait remplacer ces lignes:

```javascript
console.log("Prise de l'oeuf numéro " + numeroOeuf);
console.log("Cassage de l'oeuf numéro " + numeroOeuf);
console.log("Conservation du jaune d'oeuf dans la coquille de l'oeuf numéro " + numeroOeuf);
```

Mais, pour ce faire, la fonction `casserOeufNumero` aurait besoin de savoir le numéro de l'oeuf à casser. C'est en ce sens que l'on peut dire que cette fonction a besoin d'une "information extérieure": la fonction en a besoin, mais ce n'est pas elle qui la connaît, c'est le code qui l'appelle qui la connaît.

Question nommenclature, cette "information extérieure" s'appelle un _paramètre_. On dit que le code qui exécute la fonction _passe un paramètre_ à cette fonction. En passant, dans le jargon, on dit généralement _"appeler une fonction"_, même si on dit parfois aussi "exécuter une fonction".

La manière de définir une fonction qui reçoit un paramètre est celle-ceci:

```javascript
function casserOeufNumero(numeroOeuf) { // Définit une fonction appelée "casserOeufNumero"
                                        // qui reçoit un seul paramètre appelé
                                        // "numeroOeuf".
    console.log("Prendre l'oeuf numéro " + numeroOeuf);
    console.log("Casser l'oeuf numéro " + numeroOeuf);
    console.log("Conserver le jaune d'oeuf dans la coquille de l'oeuf numéro " + numeroOeuf);
}
```

On appelle cette fonction de la même manière qu'une fonction qui ne prend pas de paramètre, sauf qu'on met le paramètre entre parenthèses.

Encore une fois, ce n'est pas particulièrement compliqué à écrire. Il faut juste comprendre quand utiliser des paramètres. Plus bas se retrouvent des énoncés qui décrivent des fonctions, suivi d'explications de la raison pour laquelle ces fonctions reçoivent des paramètres ou non.

À noter qu'une fonction peut recevoir deux (ou plus) paramètres si nécessaire:

```javascript
// Définition de la fonction
function additionner(a, b) { // Définit une fonction appelée "additionner" qui
                             // reçoit deux paramètres: un premier appelé
                             // "a", puis un deuxième appelé "b".
    console.log(a + b);
}

// Appel de la fonction
additionner(1, 2); // Appelle "additionner" en lui passant "1" comme valeur de "a"
                   // et "2" comme valeur de "b".
```

### Valeur de retour d'une fonction

Une fonction peut certes _faire_ quelque chose, mais on voudrait peut-être aussi qu'une fonction _calcule_ quelque chose. Par exemple, c'est bien qu'une fonction `multiplierPar2` affiche le résultat de la multiplication de son paramètre par 2, mais peut-être qu'afficher le résultat sur la console du navigateur ne nous intéresse pas beaucoup. Peut-être qu'on voudrait plutôt que la fonction _calcule_ le résultat puis nous _retourne_ ce résultat pour que l'on puisse le mettre dans une variable, par exemple.

Voici comment faire:

```javascript
function multiplierPar2(x) {
    return x * 2; // Calcule x fois 2 puis retourne ce résultat
}

// Appeler la fonction et mettre sa valeur de retour dans une variable.
let y = multiplierPar2(3.2);
```

Si vous vous rappelez ou utilisez encore vos maths d'école, une fonction JavaScript qui retourne une valeur ressemble beaucoup à une fonction mathématique, comme `f(x) = 2x`. À l'école, on pouvait dire _"Soit `y = f(3.2)`"_. Ça ressemble pas mal à notre code JavaScript: `let y = multiplierPar2(3.2);`. Hmm...

Plus bas se retrouvent des énoncés qui décrivent des fonctions, suivi d'explications de la raison pour laquelle ces fonctions retournent une valeur ou non.

## Énoncés de fonctions

### Énoncés

Pour chacun des énoncés suivants, on se pose les questions suivantes:

- Cette fonction doit-elle prendre des paramètres?

- Retourne-t-elle une valeur?

- Comment l'écrire?

À noter qu'écrire la fonction correspondant aux énoncés 3 et 4 est plutôt difficile si l'on n'a pas l'habitude d'écrire du code, alors ne pas se laisser décourager si on a du mal à voir comment l'écrire. On peut se contenter à partir de l'énoncé de comprendre si la fonction doit prendre des paramètres et/ou doit avoir une valeur de retour. Le code qui résoud l'énoncé est quand-même fourni pour que l'on puisse le lire et essayer de comprendre comment il fonctionne.

#### E1 - Énoncé

On veut écrire une fonction qui vérifie si une valeur `x` est égale à 1, à 2 ou à 3, puis affiche `"oui"` si c'est le cas, `"non"` sinon.

#### E2 - Énoncé

On veut écrire une fonction qui affiche l'entier qui précède 1000.

#### E3 - Énoncé

On veut écrire une fonction qui vérifie si un entier `n` donné est premier, c'est-à-dire si aucun entier entre `2` et `n-1` ne divise `n`.

**Note**: La fonction suivante vérifie si `d` divise `n`, et retourne `true` si oui, `false` sinon. La solution à cet énoncé, plus bas, suppose que cette fonction a été définie quelque part dans le code.

```javascript
function divise(d, n) {
    return (n % d) === 0;
}
```

#### E4 - Énoncé

On veut écrire une fonction qui détermine le plus petit entier parfait, c'est-à-dire le plus petit entier `n` dont la somme des entiers plus petits que `n` et qui divisent `n` est égale à `n`.

Par exemple, les diviseurs de 28 sont 1, 2, 4, 7, 14 et 28. La somme des diviseurs de 28 qui sont plus petits que 28 est donc `1 + 2 + 4 + 7 + 14`, ce qui vaut aussi 28. 28 est donc un entier parfait.

**Note**: La solution à cet énoncé, plus bas, utilise aussi la fonction `divise`.

### Solutions

#### E1 - Solution

- Cette fonction prend un seul paramètre: `x`, puisqu'au moment d'écrire la fonction, on ne sait pas d'avance quelle sera la valeur de `x`. On a donc besoin de recevoir ce paramètre.

- Cette fonction n'a pas besoin de retourner une valeur: l'énoncé ne nous demande que d'afficher quelque chose.

Voici une manière d'écrire cette fonction:

```javascript
function afficherEstUnOuDeuxOuTrois(x) {
    if (x === 1 || x === 2 || x === 3) {
        console.log("oui");
    }
    else {
        console.log("non");
    }
}
```

#### E2 - Solution

- Cette fonction n'a pas besoin de recevoir de paramètre, puisque l'énoncé donne déjà toutes informations dont nous avons besoin pour l'écrire.

- Cette fonction n'a pas besoin de retourner une valeur: l'énoncé ne nous demande que d'afficher quelque chose.

Voici une manière d'écrire cette fonction:

```javascript
function afficherEntierPrecedant1000() {
    console.log(999);
}
```

#### E3 - Solution

- Cette fonction doit recevoir un paramètre, `n`, puisqu'on ne sait pas d'avance sur quelle valeur de `n` on va tomber.

- Cette fonction doit retourner `true` ou `false`: l'énoncé ne nous dit pas quoi faire si l'entier est premier (ni quoi faire s'il ne l'est pas), donc c'est le code qui appelera notre fonction qui saura quoi faire.

```javascript
function estPremier(n) {
    // On n'a pas encore trouvé de diviseur de n, puisqu'on n'a
    // encore rien fait.
    aTrouveUnDiviseur = false;

    // Pour chaque entier entre 2 et n-1...
    for (d = 2; d <= n - 1; d = d + 1) {
        // ...si d divise n...
        if (divise(d, n)) {
            // ...alors on a trouvé un diviseur de n.
            aTrouveUnDiviseur = true;
        }
    }

    // n est premier si on n'a pas trouvé de diviseur de n.
    return !aTrouveUnDiviseur;
}
```

**NOTE MATHÉMATIQUE POUR LES MATHEUX DE SERVICE**: La fonction ci-haut retourne `true` pour `n` valant `0` ou `1`, alors que `0` et `1` ne sont pas premiers (la vraie définition d'un entier permier est: _Un entier naturel ("positif") `n` qui a **exactement** 2 diviseurs: `1` et `n`_). Ce n'est pas le but de l'execice, mais, pour les puristes, voici une fonction `estPremier` qui gère tous les cas:

```javascript
function estPremier(n) {
    if (n <= 1) {
        // Cas particuliers: 0, 1 et les nombres négatifs ne sont pas premiers.
        return false;
    }
    else {
        // On n'a pas encore trouvé de diviseur de n, puisqu'on n'a
        // encore rien fait.
        aTrouveUnDiviseur = false;

        // Pour chaque entier entre 2 et n-1...
        for (d = 2; d <= n - 1; d = d + 1) {
            // ...si d divise n...
            if (divise(d, n)) {
                // ...alors on a trouvé un diviseur de n.
                aTrouveUnDiviseur = true;
            }
        }

        // n est premier si on n'a pas trouvé de diviseur de n.
        return !aTrouveUnDiviseur;
    }
}
```

#### E4 - Solution

- Cette fonction n'a pas besoin de prendre de paramètre ; l'énoncé nous dit déjà tout. L'énoncé parlait d'une valeur `n` simplement pour nous expliquer ce qu'était un nombre parfait.

- Cette fonction doit retourner la valeur voulue: l'énoncé ne nous dit pas quoi faire avec la valeur, donc c'est le code qui appelera notre fonction qui saura quoi faire de la valeur.

Voici une manière d'écrire cette fonction:

```javascript
function plusPetitEntierParfait() {
    // La valeur n'a pas encore été trouvée.
    valeurTrouvee = false;
    // La première valeur que nous essaierons est 1.
    valeurEssayee = 1;
    // Tant que la valeur n'a pas été trouvée...
    while (!valeurTrouvee) {
        // ...cherchons si valeurEssayee est un nombre parfait.

        // Pour l'instant, on n'a pas encore trouvé de diviseur de valeurEssayee, donc la somme vaut 0.
        sommeDesDiviseurs = 0;

        // Pour chaque entier entre 1 inclusivement et valeurEssayee exclusivement...
        for (d = 1; d < valeurEssayee; d = d + 1) {
            // ...si d divise valeurEssayee, alors...
            if (divise(d, valeurEssayee)) {
                // ...on ajoute d à la somme des diviseurs trouvés.
                sommeDesDiviseurs = sommeDesDiviseurs + d;
            }
        }

        // Si la somme des diviseurs de valeurEssayee est égale à valeurEssayee...
        if (sommeDesDiviseurs === valeurEssayee) {
            // ...alors on a trouvé la valeur souhaitée...
            valeurTrouvee = true;
        }
        else {
            // ...sinon, passer à la prochaine valeur.
            valeurEssayee = valeurEssayee + 1;
        }
    }

    // La valeur a été trouvée. La retourner.
    return valeurEssayee;
}
```

Autre définition possible de la fonction:

```javascript
function plusPetitEntierParfait() {
    // Je suis allé voir en ligne une liste des nombres parfaits, et 6 est le plus petit :) .
    return 6;
}
```

### Conclusion

Voir `main.js` pour des exemples de tests possibles sur les fonctions pour mieux comprendre les fonctions en javascript.
