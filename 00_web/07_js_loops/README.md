# Page web d'illustration des boucles en JavaScript

## Description

Une page web qui introduit aux boucles (`for` et `while`) en JavaScript.

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

Nous avons vu dans le dernier exemple comment écrire des conditions en JavaScript et comment les utiliser pour que notre code s'adapte à ces conditions.

Revenons à l'exemple où nous voulons que notre code s'adapte au nombre de commandes passées par un client d'un site web. Lorsqu'on écrit le code, on ne sait pas combien de commandes le client aura passées (cela dépend du client qui est connecté). On ne peut pas décider d'afficher, par exemple, 5 commandes, puisque le client aurait très bien pu passer 2 commandes, ou aucune, ou 10. Il nous faudrait plutôt un moyen pour que notre code puisse s'adapter au nombre de commandes passées l'utilisateur.

C'est ce que les boucles permettent de faire. Les boucles permettent de répéter du code plusieurs fois.

### La boucle `while`

Je ne sais pas comment vous faites cuire votre pizza, mais, personnellement, je la mets au four, puis, tant qu'elle n'est pas cuite, j'attend une minute.

C'est l'idée de la boucle `while`: exécuter le même code tant qu'une condition est vraie. La syntaxe devrait vous être familière puisqu'elle ressemble aux conditionnelles :

```javascript
while (/* la pizza est crue */) {
    // Attendre une minute
}
```

Ce code s'exécutera comme suit:

1) Vérifier que la pizza est crue. Si vrai, aller à 2), sinon aller à 4).
2) Attendre une minute.
3) Aller à 1).
4) Continuer l'exécution du programme avec ce qui est écrit après l'accolade fermante du `while`.

En langage plus familier, on pourrait aussi verbalement dire: _"Tant que la pizza est crue, attendre une minute"_, d'où le nom `while` ("tant que" en anglais).

Pour un exemple peut-être un peu plus concret, voici du code qui affiche les entiers entre 0 et 9 inclusivement:

```javascript
i = 0;
while (i <= 9) {
    console.log(i);
    i = i + 1;
}
```

Ce code s'exécutera comme suit:

1) Mettre 0 dans `i`.
2) Vérifier si `i` est plus petit ou égal à 9. Si vrai, alors aller à 3), sinon aller à 6).
3) Afficher `i`.
4) Faire `i + 1` et mettre le résultat dans `i`.
5) Aller à 2).
6) Continuer l'exécution du programme avec ce qui est écrit après l'accolade fermante du `while`.

### La boucle `for`

La boucle `for` permet aussi d'exécuter du code plusieurs fois.

J'hésitais à en parler puisqu'en fait, on n'a jamais _vraiment_ besoin d'une boucle `for` ; on peut toujours écrire la même chose avec une boucle `while`. Pour autant, les programmeurs les utilisent constamment, surtout pour les boucles où on compte de un en un (comme l'exemple dans la section précécente), puisqu'il est plus facile à reconnaître que la personne qui a écrit le code voulait compter de un en un. Donc, lorsqu'on cherche sur internet comment faire quelque chose, il est nécessaire de comprendre les boucles `for` pour pouvoir lire les exemples de code d'autres personnes.

À la rigueur, pour l'instant, il est plus important d'être bien familiers avec la manière d'écrire des boucles `while` puisque l'on peut toujours s'en sortir avec.

Plutôt que d'expliquer la boucle `for`, écrivons-en une et voyons des boucles `while` qui font la même chose. Ce code...

```javascript
for (i = 0; i <= 9; i = i + 1) {
    console.log(i);
}
```

...est équivalent à celui de la boucle `while` de tout-à-l'heure, à savoir:

```javascript
i = 0;
while (i <= 9) {
    console.log(i);
    i = i + 1;
}
```

De manière plus générale, ceci...

```javascript
for (/* initialisation */; /* condition */; /* fin de boucle */) {
    /* faire quelque chose */
}
```

...est équivalent (à un détail mineur près) à ceci:

```javascript
/* initialisation */;
while (/* condition */) {
    /* faire quelque chose */
    /* fin de boucle*/;
}
```

Bon, on pourrait parler des boucles `for` un peu plus. Par exemple, on pourrait montrer qu'on peut écrire une boucle `for` qui compte en descendant de N en N plutôt qu'en montant en faisant `i = i - N` plutôt que `i = i + 1`.

### Conclusion

Voir `main.js` pour des exemples de tests possibles pour mieux comprendre les boucles `while` et `for`.
