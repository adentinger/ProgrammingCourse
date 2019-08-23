# Page web d'introduction à JavaScript

## Description

Une page web qui introduit à JavaScript.

## Comment utiliser

Ouvrir le fichier `index.html` avec votre navigateur web.

## Commentaires

### Pourquoi utiliser le JavaScript ?

Fini les plaisanteries ; nous commençons à arriver dans le coeur de notre mini-cours.

Pourquoi avons-nous besoin de plus que ce que nous avons appris? Nous avons vu qu'avec du HTML et du CSS, nous sommes capables d'afficher des éléments à l'écran et de modifier leur apparence à souhait, même si ce n'est pas forcément du grand art parce que nous manquons d'expérience. "Qu'y a-t-il à apprendre de plus?" direz-vous peut-être.

Afficher du texte et des images, certes, c'est bien. Pour autant, à moins d'avoir un site web qui ne fait qu'afficher de l'information (comme un site web de restaurant, typiquement), notre site web n'est pas supposé afficher tout le temps la même chose dans toutes les situations. Nous voudrions plutôt savoir comment faire un site web interactif. Par exemple, il serait bien que, lorsqu'on clique sur un bouton, quelque chose se passe sur notre page web, ou que l'utilisateur puisse écrire son nom quelque part, et que le texte `"Bonjour, <un tel>!"` s'affiche. Bien qu'en soi, cela ne soit pas très impressionnant, être capables de faire cela ouvre la porte à des actions beaucoup plus complexes que ce qu'on peut faire simplement avec du HTML et du CSS.

Pour rendre les pages interactives, aujourd'hui, l'immense majorité des sites internet utilisent un langage appelé JavaScript.

### Qu'est-ce que le JavaScript ?

Contrairement à HTML et CSS, JavaScript est réellement un langage de programmation. Qu'est-ce qu'un langage de programmation? En deux mots, c'est un moyen pour décrire à un ordinateur des tâches à effectuer.

### Exemples de lignes de code en JavaScript

Illustrons par quelques exemples de lignes code JavaScript. Notez que vous pouvez exécuter ces lignes vous-mêmes en remplaçant le contenu du fichier `script/main.js` par ces lignes, puis en ouvrant/rafraîchissant la page `index.html`.

La ligne suivante...

    2+3;

...demande au navigateur de calculer le résultat de 2+3. Facile! Pour autant, cette ligne ne fait rien puisqu'une fois que le navigateur a calculé 2+3, on ne lui dit pas de faire quoi que ce soit avec le résultat.

Il serait peut-être plus intéressant de pouvoir voir le résultat de 2+3. C'est justement ce que fait cette ligne de code:

    console.log(2+3);

Cette ligne commence déjà à avoir l'air compliquée ; il y a un `console`, un point, un `log` et des parenthèses qui entourent le `2+3`. Mais on peut oublier ça pour l'instant. Ce qui est important, c'est que cette ligne affiche ce qui est entre les parentèses (ici, `2+3`, donc `5`) dans la console du navigateur. On peut accéder à la console en ouvrant les outils développeur de son navigateur, comme dans l'image ci-dessous.

![Un "5" affiché dans la console de développement du navigateur][console_5]

À part des nombres, il y a d'autres valeurs que l'on peut obtenir et afficher en JavaScript. Par exemple, cette ligne dit d'écrire le texte `Hello, World!` dans la console:

    console.log("Hello, World!");

![Le texte "Hello, World!" affiché dans la console][console_helloworld]

Nous verrons d'autres types de données lorsque nécessaire.

Une dernière chose: en JavaScript, et dans beaucoup de langages, une "ligne de code" se termine au point-virgule, pas à la fin de la ligne. Donc, cette ligne de code...

    console.log(2+3);

...est équivalente à celle-ci...

        console
     .   
           log

            (
                 2  +3
                )


                ;

...mais est évidemment beaucoup moins lisible.

Pour voir comment exécuter un fichier JavaScript dans une page HTML, ouvrir dans un éditeur de texte comme VSCode le fichier
`index.html` et voir les commentaires.

[console_5]: images/console_log_5.png
[console_helloworld]: images/console_log_hello_world.png
