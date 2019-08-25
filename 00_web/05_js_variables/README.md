# Page web d'illustration des variables en JavaScript

## Description

Une page web qui introduit aux variables en JavaScript.

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

Dans le dernier exemple, nous avons vu quelques exemples de lignes de code en JavaScript. Comme il s'agit de la première fois que nous programmons, il vaut mieux aller doucement et introduire les concepts petit à petit. Mais, le plus important lorsque l'on veut apprendre quelque chose en programmation, c'est d'essayer soi-même pour voir ce qui causera des erreurs, ce qui fonctionnera correctement et ce qui ne causera pas d'erreurs mais ne fonctionnera pas comme attendu, et pourquoi.

### Les variables

Un premier concept, relativement simple mais parmi les plus importants, et celui d'une "variable". Cette ligne...

```javascript
let maVariable;
```

...crée une variable appelée `maVariable`.

Si nous reprenons l'exemple des boîtes, une boîte est utilisée comme contenant pour quelque chose. Mais si nous avons beaucoup de boîtes, comment les différencier? On pourrait les identifier par un nom.

De la même manière, une variable est un contenant pour une valeur et porte un nom. Par exemple, on peut mettre le nombre `-2.3` dans la variable appelée `maVariable` avec cette ligne :

```javascript
maVariable = -2.3;
```

On pourrait aussi mettre la chaîne de caractères `"Hello, World!"` dans cette variable:

```javascript
maVariable = "Hello, World!";
```

Mettre une valeur dans une variable en remplace le contenu. Donc, ici...

```javascript
let uneValeur = 5;
uneValeur = -8.32;
uneValeur = "ABCDEF";
```

...une fois que ces trois lignes ont été exécutées, la variable `uneValeur` contient comme valeur la chaîne de caractères `"ABCDEF"`.

Par la suite, on peut utiliser la valeur de la variable en utilisant son nom, comme ceci:

```javascript
let a = 2;
console.log(a); // Affiche "2"
console.log(a + 4.5); // Affiche "6.5"
```

Rendus à ce point-ici, pour bien comprendre le concept de variable, le mieux est d'essayer pas soi-même. Voir le fichier `main.js` dans le dossier `scripts` pour des suggestions de tests.
