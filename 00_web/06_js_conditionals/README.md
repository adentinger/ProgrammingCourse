# Page web d'illustration des conditionnelles en JavaScript

## Description

Une page web qui introduit aux conditionnelles (`if`) en JavaScript.

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

Nous savons maintenant comment utiliser des variables pour conserver des valeurs. D'un autre côté, le code que nous pouvons écrire maintenant n'aurait pas encore beaucoup d'utilité.

Par exemple, supposons que nous voulions afficher la liste de commandes d'un client. On voudrait peut-être que, si notre utilisateur n'a jamais passé de commandes, plutôt que de ne rien afficher, on affiche un message comme `"(Aucune commande passée pour l'instant)"`. Donc, notre code devrait faire quelque chose si le client a passé au moins une commande, et autre chose sinon. C'est ce que permettent de faire les conditionnelles.

### Les conditions

Une condition (aussi appelé "booléen") est un test qui retourne soit vrai, soit faux. Une condition est une valeur, et peut donc être mise dans une variable. Voici quelques exemples de conditions:

```javascript
true    // Condition toujours vraie
false   // Condition toujours fausse
a === b // Condition vraie si la variable a est égale à la variable b
a !== b // Condition vraie si a est différent de b
a > b   // Condition vraie si a est plus grand que (mais pas égal à) b
a <= b  // Condition vraie si a est plus petit (ou égal) à b
```

Ces tests sont possibles quelque soient les contenus de `a` et de `b`. On peut donc comparer des nombres, des chaînes de caractères, ou même d'autres booléens! Le fichier `main.js` contient des exemples de tests qui pourraient être intéressants à essayer soi-même pour mieux comprendre comment fonctionnent les conditions.

### Les conditionnelles (`if`)

Une conditionnelle est simplement une instruction que l'on veut que du code s'exécute ou non dépendamment d'une condition. Voici un exemple:

```javascript
if (a === 0) {
    console.log("a vaut 0");
}
else if (a === 1) {
    console.log("a vaut 1");
}
else {
    console.log("a ne vaut ni 0 ni 1");
}
```

Dans ce code, si `a` vaut 0, alors la première condition est vraie, ce qui fera afficher `"a vaut 0"` dans la console. Sinon, si `a` vaut 1, alors la seconde condition est vraie, ce qui fera afficher `"a vaut 1"` dans la console. Sinon, on affiche `"a ne vaut ni 0 ni 1"`.

À noter qu'une conditionnelle doit absolument avoir un `if` au début, mais qu'on peut ne pas mettre de `else if`, ou alors en mettre plusieurs. Le `else` est aussi optionnel, mais doit être mis en dernier.

### Conclusion

Avec les conditionnelles dans notre boîte à outils, le code JavaScript que nous pouvons écrire pourra désormais s'adapter à des conditions. Ce ne sera plus qu'une question de mettre des conditionnelles là où nécessaire pour que notre code fasse ce qu'on veut dans les conditions que l'on veut. Pour autant, il nous manque évidemment encore quelques outils essentiels. En attendant, voir `main.js` pour des exemples de tests possibles pour mieux comprendre les conditionnelles.
