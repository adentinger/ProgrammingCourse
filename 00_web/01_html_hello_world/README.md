# Page web `"Hello, World!"`

## Description

Une page web qui contient le texte `"Hello, World!"` selon plusieurs formats.

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

Ici, il commence à y avoir certaines choses à expliquer, en particulier au sujet de la façon dont le fichier s'écrit. On pourrait comparer un fichier HTML à un ensemble de "boîtes", chaque boîte pouvant elle-même contenir d'autres boîtes, qui peuvent en contenir d'autres, etc. Par exemple, ceci...

    <html>
      <body>
        <p style="color: #ff0000">Hello, World!</p>
      </body>
    </html>

... devrait être vu comme voulant dire: _"Une boîte de type 'html' contient une boîte de type 'body' qui contient une boîte de type 'p', qui contient le texte 'Hello, World!'"_.

Sur un colis à la poste, y est certes inscrit son nom, ici 'p' par exemple, mais sur la boîte peut aussi y être inscrites d'autres choses, comme le nom du destinataire, par exemple. C'est comme ça que l'on pourrait voir la partie `style="color: #ff0000"`. C'est comme nous voulions dire au navigateur: _"Sur boîte de nom 'p' est inscrit le fait que `style` est `'color: #ff0000'`"_. À ce stade-ci, peu importe ce que `color: #ff0000` veut dire ; l'important est de comprendre comment déchiffrer le fichier.

Un dernier détail: lorsqu'une "boîte" est vide, plutôt que d'écrire: `<ma-boite></ma-boite>`, on peut aussi écrire, pour faire court: `<ma-boîte/>`. Cela explique le fait que la fin de ligne (`<br/>`) soit écrite comme ça.

Question nommenclature, ce qu'on a appelé une "boîte" est en fait un "élément" et les inscriptions sur la boîte (comme `style`) sont ses "propriétés". Un élément à l'intérieur d'un autre élément (comme `body` comparativement à `html`) est un "enfant", et un élément englobant (comme `html` comparativement à `body`) est un "parent".
