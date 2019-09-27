# Page web d'illustration des fonctions sans paramètres en JavaScript

## Description

Une page web qui introduit aux fonctions sans paramètres en JavaScript.

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

_NOTE: L'explication des fonctions a été répartie sur 2 exemples pour que l'explication ne soit pas trop longue._

### Pourquoi les fonctions?

Imaginez ouvrir un livre de recettes de cuisine mais que, plutôt que d'être organisé en recettes, le livre ne contienne aucune indication, aucune section, aucune table des matières. À la place, le texte lui-même décrit à quelle page aller pour trouver les desserts et qu'à cette page, on dit que les gâteaux sont 53 pages plus loin mais que les recettes des viennoiseries sont 2 pages plus loin, que 53 pages plus loin, plutôt que de simplement expliquer qu'il faut monter les oeufs en neige, on explique en détail quel ustensile utiliser, comment récupérer le blanc, quand s'arrêter de battre le blanc, et qu'à la recette suivante, qui a également besoin de faire monter des oeufs en neige, on décrive aussi les mêmes étapes en détail... On ne s'en sortirait jamais.

Le code que l'on peut écrire jusqu'à présent ressemblerait à ce mauvais livre de cuisine. Oui, nous sommes capables d'exécuter du code dépendamment d'une condition, oui nous sommes capables de répéter du code dépendamment d'une condition. Avec suffisamment de code, nous serions capables de faire beaucoup, beaucoup de choses déjà. Pour autant, notre code n'aurait aucune structure, beaucoup de code devrait être écrit à l'identique à plusieurs endroits pour faire la même chose, etc.

Est-ce qu'il ne serait pas plus intéressant de donner un nom à un ensemble de lignes de code pour que ces instructions beaucoup trop détaillées et compliquées...

```javascript
for (numeroOeuf = 0; numeroOeuf < 6; numeroOeuf = numeroOeuf + 1) {
    console.log("Prise de l'oeuf numéro " + numeroOeuf);
    console.log("Cassage de l'oeuf numéro " + numeroOeuf);
    console.log("Conservation du jaune d'oeuf dans la coquille de l'oeuf numéro " + numeroOeuf);
}

lesBlancsSontEnNeige = false;
while (!lesBlancsSontEnNeige) {
    console.log("Battage de tous les oeufs");
    lesBlancsSontEnNeige = /* instructions pour vérifier si les oeufs sont en neige */;
}

console.log("Ajout du sucre");
console.log("Ajout du lait");
console.log("Ajout du beurre fondu");

console.log("Prise une spatule");
console.log("Incorporation des ingrédients en oxygénant le mélange avec un mouvement de rotation en utilisant la spatule prise à l'étape précédente jusqu'à ce que le mélange soit homogène");
```

...ressemble plutôt à ceci...

```javascript
for (numeroOeuf = 0; numeroOeuf < 6; numeroOeuf = numeroOeuf + 1) {
    casserOeufNumero(numeroOeuf);
}
faireMonterLesOeufsEnNeige();
ajouterLesIngredients();
incorporerLesIngredients();
```

Ce dernier code est évidemment beaucoup plus clair que le premier! C'est ce que permettent de faire les fonctions.

À noter, pour ma défense, que les fonctions sont réellement absolument nécessaires si on veut interagir avec une page web, comme nous l'avons peut-être vu dans l'exemple du site web de _Vendre, Inc._ Quand on verra explicitement comment faire ces interactions, on aura absolument besoin des fonctions.

### Qu'est-ce qu'une fonction?

Une fonction est une variable qui contient des lignes de code.

### Comment exécuter une fonction?

L'exemple précédent montre comment exécuter des fonctions : il faut mettre le nom de la fonction (par exemple, `faireMonterLesOeufsEnNeige`) suivi de parenthèses. Donc, `faireMonterLesOeufsEnNeige()` exécute la fonction qui s'appelle `faireMonterLesOeufsEnNeige`.

### Comment écrire une fonction?

Voici comment on pourrait écrire `faireMonterLesOeufsEnNeige`:

```javascript
function faireMonterLesOeufsEnNeige() {
    lesBlancsSontEnNeige = false;
    while (!lesBlancsSontEnNeige) {
        console.log("Battre tous les oeufs");
        lesBlancsSontEnNeige = /* instructions pour vérifier si les oeufs sont en neige */;
    }
}
```

Ces lignes définissent la fonction appelée `faireMonterLesOeufsEnNeige`. Cela signifie qu'une fois qu'après avoir écrit ces lignes, nous pouvons exécuter cette fonction.

Pas trop compliqué pour l'instant, mais disons qu'il commence à y avoir beaucoup de choses dont il faut se rappeler la manière d'écrire! C'est peut-être un peu normal. On peut toujours se reporter aux exemples appropriés pour se rappeler comment tout écrire, si on oublie.

### Conclusion

Voir `main.js` pour des exemples de tests possibles pour mieux comprendre les fonctions en javascript.
