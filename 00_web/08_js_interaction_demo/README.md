# Site web de démonstration d'un site web (pseudo-)interactif

## Description

Un site web qui démontre notamment comment faire interagir du JavaScript avec une page web.

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

### Pourquoi cet exemple?

Jusqu'à présent, nous avons vu plusieurs outils dont nous aurons besoin pour écrire des pages web interactives. Il nous en manque encore plusieurs très importants. Pour autant, je ne veux pas que ces tutoriels soient une longue séquence d'exemples et qu'on apprenne bêtement des syntaxes du JavaScript sans pour autant savoir pourquoi nous apprenons cela ni comment nous allons l'utiliser dans notre page web.

Même s'il nous manque encore plusieurs concepts, dans cet exemple, nous verrons ce que nous serons très bientôt capables de faire. Mieux, peut-être qu'en regardant le code de cet exemple, on pourra prendre de l'avance sur les prochains exemples et comprendre une partie des prochains concepts. Ce n'est pas grave si on ne comprend pas encore tout de cet exemple.

À noter que je n'ai personnellement aucun intérêt à rendre la page "belle" et "intuitive". C'est du travail fastidieux que je ne connais pas beaucoup et que je n'aime pas beaucoup non plus. Les développeurs prennent généralement des morceaux de code tout faits pour faire de beaux sites web, ce que nous ne faisons pas ici pour l'instant parce que l'on ne veut pas mélanger les bases, que nous apprenons, avec ce que le code que l'on importerait nous permettrait de faire.

### Explication de l'exemple

Cet exemple présente notre premier site web minimalement interactif. Il s'agit du site web d'une compagnie fictive, Vendre, Inc. Le site contient les pages habituelles sur un site web d'une compagnie: accueil, à propos, etc. On suppose être connecté en tant qu'un utilisateur, même si en réalité il n'y a aucune connexion puisque notre site web fait simplement afficher de l'information.

La seule page interactive est la page des commandes passées, page écrite dans le fichier `html/orders.html`. Elle présente le tableau dont nous avions parlé lorsque nous apprenions les conditionnelles et les boucles : un tableau qui affiche `(aucune commande passée)` si le tableau est vide, sinon qui s'adapte au nombre de commande affichées. Deux boutons permettent d'afficher plus de commandes, ou moins.

Le plus important à noter est que, dans le fichier `html/orders.html`, nous avons ceci:

```html
<button type="button" onclick="boutonPlusAEteClique()">+ Commande</button>
```

Ceci définit un bouton (comme nous l'avons vu dans l'exemple `03_html_demo`), mais on y voit ici quelque chose de plus: ce que le navigateur doit faire quand le bouton est cliqué.

`onclick="boutonPlusAEteClique()"` signifie que, lorsque le bouton est cliqué, on doit exécuter une fonction JavaScript appelée `boutonPlusAEteClique`. Nous parlerons des fonctions dans le prochain exemple ; nous verrons qu'une fonction est une variable qui contient des lignes de code que l'on peut exécuter écrivant le nom de la fonction suivi de paranthèses, comme ici.

La fonction `boutonPlusAEteClique` a été définie dans le fichier `js/orders.js`. Les lignes de code que nous avons mis dans `boutonPlusAEteClique` décrivent donc ce que le navigateur doit faire quand le bouton `"+ Commmandes"` est cliqué.

Le code JavaScript du fichier `js/orders.js` contient beaucoup de commentaire pour expliquer le code, mais, encore une fois, il n'est pas nécessaire de tout comprendre. Plus tard, au fur et à mesure que nous apprendrons de nouveaux concepts, il serait intéressant de retourner voir cet exemple, de relire une partie du code pour voir si on le comprend mieux, et peut-être d'essayer de le modifier pour voir ce qui se passerait.

J'essaie de garder le code JavaScript relativement simple, donc certains détails ne sont pas parfaits. Par exemple, lorsque l'on clique sur le bouton "-" plusieurs fois en un court instant, seule la première ligne du tableau disparaît en fondu, et les autres disparaissent subitement. Cela peut se résoudre, mais complexifierait l'exemple un peu. C'est un détail.

J'ai aussi mis une barre de navigation ("navbar") en haut de toutes les pages. Je l'ai faite à la main (ce qui m'a rappelé que j'aime moyennement faire cela...) ; les fichiers CSS de cet exemple pourraient donc être une bonne première source d'inspiration pour réaliser de futures idées.
