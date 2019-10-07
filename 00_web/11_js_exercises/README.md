# Exercices de base en JavaScript

## Description

Des exercices pour pratiquer son JavaScript :) .

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

Dans l'exemple précédent, nous avons eu quelques énoncés de fonctions et nous nous étions demandés si ces fonctions avaient besoin de paramètres et/ou d'une valeur de retour.

Ici, nous ferons d'autres exercices qui nous feront pratiquer tout ce que nous avons jusqu'à présent. Nous résolverons ensemble, étape par étape, les premiers exercices pour comprendre comment raisonner pour résoudre les suivants.

Il n'y a évidemment aucun mal à regarder les exemples précédents pour se rappeler, par exemple, comment fonctionnent les conditionnelles, les boucles, les fonctions...

Pour écrire et exécuter votre code, utiliser les fichiers `.js` de ce dossier.

### Exercice 1 (expliqué)

__**Énoncé**__

Déclarer la variable `pays` et y assigner, au choix, soit `"USA"` soit `"Canada"`. Aussi déclarer la variable `sexe` et y assigner, au choix, soit `"F"` soit `"H"`.

On veut que le code en-dessous affiche `"J'aime la tourtière"` si `pays` vaut `Canada`. En plus, si `sexe` vaut `"F"`, alors on doit afficher `"Bonjour, Madame"`, sinon, si `sexe` vaut `"H"`, alors on doit afficher `"Bonjour, Monsieur"`.

__**Résolution**__

On m'a demandé de déclarer deux variables et de leur donner des valeurs, alors je commence par le faire:

```javascript
let pays = "USA";
let sexe = "F";
```

Ensuite, on veut que je fasse quelque chose de différent dépendamment de la valeur de la variable `pays` et aussi quelque chose dépendamment de `sexe`. Autrement dit, on m'a demandé quelque chose qui ressemble à: _"Si X, alors faire Y, sinon faire Z"_. Donc je dois utiliser des conditionnelles. Je n'ai rien besoin de répéter plusieurs fois, donc pas de boucles.

OK, alors comment vont s'agencer mes conditionnelles? Déjà, selon l'énoncé, je vois que, si le `pays` est `"Canada"`, alors je dois afficher un message. Donc ça veut dire que je dois commencer par faire ceci:

```javascript
let pays = "USA";
let sexe = "F";

// Si le pays est le Canada...
if (pays === "Canada") {
    // ...alors afficher un message.
    console.log("J'aime la tourtière");
}
```

Bon, maintenant, la question est: est-ce que ce n'est _que_ lorsque le `pays` n'est pas `"Canada"` que je dois vérifier le genre de la personne? Non, selon l'énoncé et la logique, peu importe si la personne vient du Canada ou non, je dois toujours afficher `"Bonjour, Madame"` si c'est une femme et `"Bonjour, Monsieur"` si c'est un homme.

Alors comment faire que l'affichage de la salutation se fasse dans tous les cas? En fait, je dois d'abord vérifier le pays et afficher `"J'aime la tourtière"`, et _ensuite_, une fois que cette partie-là du travail est faite, je dois vérifier le genre de la personne. J'en arrive donc à ce code:

```javascript
let pays = "USA"; // Changer pour "Canada" pour voir si le code fait ce qu'il
                  // est supposé faire.
let sexe = "F";   // Changer pour "H" pour voir si le code fait ce qu'il est
                  // est supposé faire.

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
```

Je vais aussi mettre mon code dans une fonction pour que, si nécessaire dans mon code, je puisse appeler ma fonction plusieurs fois sans avoir besoin de copier-coller le même code partout. Ma fonction aura besoin de savoir le `pays` et le `sexe` de la personne mais ne calcule rien. J'aurai donc deux paramètres et aucune valeur de retour.

```javascript
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

// Essayer de changer le pays par "Canada" pour voir si le code fait
// ce qu'il est supposé faire. Aussi essayer de changer le sexe par "H"
// pour la même raison.
saluer("USA", "F");
```

Évidemment, j'ai énormément détaillé le raisonnement. Quelqu'un qui sait suffisamment bien programmer aurait su écrire ce code en quelques secondes (20-30s?) sans avoir besoin de forcer son esprit. Ça devient du déjà-vu.

### Exercice 2 (expliqué)

__**Énoncé**__

On veut afficher `n` lignes de telle sorte que la première ligne contienne 1 caractère `x`, la deuxième 2 caractères `x`, jusqu'à la `n`-ième, qui doit en contenir `n`.

Par exemple, pour `n` valant 5, on doit afficher:

```text
x
xx
xxx
xxxx
xxxxx
```

__**Résolution**__

On a besoin d'une variable `n`, alors je commence par la déclarer.

```javascript
let n = 4;
```

Ensuite, je vois que l'énoncé demande que l'on affiche `n` lignes. Comme je ne sais pas d'avance combien `n` vaut, je ne peux pas copier la même ligne de code `n` fois (et puis, ça serait moche de faire ça!). Donc, si je dois afficher une ligne `n` fois, ça veut dire que je dois utiliser une boucle.

```javascript
let n = 4;

// Faire 'n' fois...
let i = 0;
while (i < n) { // ('i' ira de '0' à 'n-1' inclusivement.
                // On aurait aussi pu utiliser une boucle 'for' à la place d'un 'while'.)

    // ...afficher une ligne.
    // ??

    i = i + 1;
}
```

Il reste à compléter l'intérieur de la boucle `while`. Pour afficher plusieurs `x` sur la même ligne, je ne peux pas appeler `console.log` plusieurs fois puisque ça afficherait plusieurs lignes avec un seul `x`. Pour le faire, je dois donc appeler `console.log` une fois pour afficher une chaîne de caractères qui contient déjà le bon nombre de `x`. Comment faire?

La première fois que la boucle `while` est appelée, `i` vaut 0 et je dois afficher un seul `x`. La deuxième fois, `i` vaut 1 et je dois en afficher deux. Donc, pour n'importe quelle valeur de `i`, je dois afficher `i + 1` caractères `x` sur la ligne. La dernière question est donc: comment créer une chaîne de caractères qui contient plusieurs `x`?

On peut mettre deux chaînes de caractères `a` et `b` ensemble en faisant `a + b`. Par exemple, si `a` vaut `"Hello, "` et `b` vaut `"World!"`, alors `a + b` vaut `"Hello, World!"`. Si je ne l'avais pas su, j'aurais cherché sur internet quelque chose comme _"javascript put strings together"_ (_"javascript mettre chaînes de caractères ensemble"_), ou, en meilleur jargon, _"javascript concatenate strings"_ (_"javascript concaténer chaînes de caractères"_) et j'aurais vu quelque part qu'on peut faire soit `a + b` soit `a.concat(b)` pour les mettre ensemble.

On peut utiliser ça pour créer une chaîne de caractères contenant plusieurs `x`. On peut commencer avec une chaîne de caractères qui ne contient rien, et y rajouter un `x` plusieurs fois jusqu'à ce qu'on ait le bon nombre de `x` dedans. Puisqu'on doit répéter l'action de rajouter un `x`, c'est que l'on doit utiliser une boucle. On arrive donc au code suivant:

```javascript
let n = 4; // Changer pour vérifer si le code fonctionne bien pour d'autres valeurs.

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
```

Je vais aussi mettre mon code dans une fonction pour que, si nécessaire dans mon code, je puisse appeler ma fonction plusieurs fois sans avoir besoin de copier-coller le même code partout. Ma fonction a besoin de savoir la valeur de `n` mais ne calcule rien. J'aurai donc un paramètre mais aucune valeur de retour.

```javascript
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

afficherTriangle(4);
```

### Exercice 3 (expliqué)

__**Énoncé**__

Quel est le cinquantième entier de Fibonacci?

Chaque entier de Fibonacci est généré en faisant la somme des deux précédents. Les premier et deuxième entiers de Fibonacci sont 0 et 1.

__**Résolution**__

Je ne me laisse pas impressionner par le fait qu'on cherche le cinquantième nombre de Fibonacci. Si on cherchait le quatrième ou le millionième, le problème ne serait pas plus ni moins facile, sauf que l'on pourrait calculer le quatrième à la main, ou que l'on aurait une réponse aproximative à partir du 80-ième pour des raisons que nous n'expliquerons pas ici.

Puisque je cherche le centième, ça veut dire que je dois générer le prochain nombre de Fibonacci 48 fois. Autrement dit, je dois répéter le même code 48 fois, ce qui implique une boucle. Je commence donc avec ce code:

```javascript
let positionCherchee = 50;

let pam1 = 0; // Le 'positionActuelle moins 1'-ième entier de Fibonacci
let pa = 1;   // Le 'positionActuelle'-ième entier de Fibonacci
let positionActuelle = 2; // On connaît déjà les 2 premiers entiers de Fibonacci. On est donc rendus au deuxième.

// Tant que l'on n'est pas arrivés au millionième...
while (positionActuelle < positionCherchee) {
    // ...calculer le prochain entier de Fibonacci:
    // ??

    positionActuelle = positionActuelle + 1;
}

// Enfin, afficher l'entier.
console.log(pa);
```

Finalement, on doit calculer le prochain entier de Fibonacci. L'énoncé nous le dit: il s'agit de la somme des deux entiers précédents. C'est ce que je fais:

```javascript
let positionCherchee = 50;

let pam1 = 0; // Le 'positionActuelle moins 1'-ième entier de Fibonacci
let pa = 1;   // Le 'positionActuelle'-ième entier de Fibonacci
let positionActuelle = 2; // On connaît déjà les 2 premiers entiers de Fibonacci. On est donc rendus au deuxième.

// Tant que l'on n'est pas arrivés au millionième...
while (positionActuelle < positionCherchee) {
    // ...calculer le prochain entier de Fibonacci:
    pa = pa + pam1;

    // Mettre pam1 à jour pour la prochaine exécution de la boucle.
    pam1 = pa;

    positionActuelle = positionActuelle + 1;
}

// Enfin, afficher l'entier.
console.log(pa);
```

Il reste quand-même un problème dans ce code: On ne change la valeur de `pam1` par celle de `pa` qu'une fois que l'on a remplacé la valeur de `pa`. Par exemple, si `pam1` vallait 2 et que `pa` vallait 3, on changerait `pa` par 5, puis on changerait `pam1` par `pa`, qui vaut maintenant 5. On se retrouve donc avec `pam1 == 5` et `pa == 5`, ce qui veut dire qu'on a perdu la valeur 3, dont on a besoin. Normalement, on voudrait que, la prochaine fois que la boucle s'exécute, on ait `pam1 == 3` et `pa == 5` de manière à pouvoir calculer l'entier de Fibonacci suivant.

Je pourrais essayer de faire l'inverse: mettre d'abord `pam1` à jour, puis calculer le prochain entier. Mais, à ce moment-là, je me retrouverais avec le problème inverse: `pam1` aurait été mis à jour trop tôt. Si `pam1` vallait 2 et `pa` vallait 3, alors on aurait tout de suite changé `pam1` par 3, ce qui aurait fait en sorte que l'on calcule le prochain entier de Fibonacci comme vallant 6, ce qui est incorrect vu qu'on aurait dû le calculer comme étant `2 + 3 == 5`.

Si on n'a pas compris, on peut toujours afficher les valeurs de `pam1` et de `pa` à l'intérieur de la boucle et le comparer à ce à quoi on s'attendrait si on calculait les entiers de Fibonacci à la main.

Donc, ma seule option est de d'abord calculer le prochain entier de Fibonacci sans toucher à `pam1` ni à `pa`, et, _ensuite_, de mettre à jour `pam1` par `pa` et `pa` par l'entier que j'avais calculé. Entre temps, je vais donc devoir stocker le prochain entier de Fibonacci dans une troisième variable.

J'arrive donc au code suivant:

```javascript
let positionCherchee = 50;

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

// Enfin, afficher l'entier.
console.log(pa);
```

Si c'était un cas réel, peut-être qu'ailleurs dans mon code, moi ou quelqu'un d'autre aurait besoin de trouver d'autres entiers de Fibonacci que le cinquantième. Je vais donc mettre mon code dans une fonction même si je sais d'avance qu'ici on cherche le cinquantième.

Je vais faire prendre en paramètre la position cherchée pour que ma fonction puisse résoudre le problème pour n'importe quelle position cherchée. Je vais aussi lui faire retourner l'entier de Fibonacci à cette position pour que ma fonction n'ait pas besoin de savoir ce qu'on veut faire avec cet entier, même si je sais qu'ici on veut seulement l'afficher.

```javascript
function fibo(positionCherchee) {
    let pam1 = 1; // Le 'positionActuelle moins 1'-ième entier de Fibonacci
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

// Afficher le 50-ième entier de Fibonacci.
console.log(fibo(50));
```

### Exercice 4

Quelle est la somme des entiers entre 1 et 1000? Ne _pas_ utiliser la formule toute faite, à savoir `1000 * 1001 / 2`.

**Résultat cherché:** 500500.

### Exercice 5

Quelle est la somme des entiers entre 1 et 1000 qui divisibles par 3 ou par 5?

**Résultat cherché:** 234168.

**Aide**

La fonction `divise` ci-dessous vérifie si `n` est divisible par `d`. Elle retourne donc `true` si oui, et `false` sinon.

```javascript
function divisible(n, d) {
    // Retourne 'true' si le reste de la division de n par d est zéro.
    return (n % d) === 0;
}
```

### Exercice 6

Afficher la table de multiplication des entiers entre 1 et `n`.

**Résultat cherché:** Pour `n == 7`, le code doit afficher:

```text
1 2 3 4 5 6 7
2 4 6 8 10 12 14
3 6 9 12 15 18 21
4 8 12 16 20 24 28
5 10 15 20 25 30 35
6 12 18 24 30 36 42
7 14 21 28 35 42 49
```

Pour `n == 10`:

```text
1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
4 8 12 16 20 24 28 32 36 40
5 10 15 20 25 30 35 40 45 50
6 12 18 24 30 36 42 48 54 60
7 14 21 28 35 42 49 56 63 70
8 16 24 32 40 48 56 64 72 80
9 18 27 36 45 54 63 72 81 90
10 20 30 40 50 60 70 80 90 100
```

**Aide**

Pour transformer une variable `x` qui contient un nombre en une chaîne de caractères, on peut faire `x.toString()`. Par exemple, si `x` vaut `2.5`, alors `x.toString()` retourne la chaîne de caractères `"2.5"`.
