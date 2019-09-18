/**
 * Le nombre de commandes affichées.
 */
let numCommandesAffichees = 0;

/**
 * Le numéro de la prochaine commande que l'on affichera
 * si on clique sur le bouton "+".
 */
let numeroDeLaProchaineCommande = 0;

/**
 * true si on est en train d'afficher la ligne par défault
 * "(aucune commande passée)", sinon false.
 */
let ligneParDefautAffichee = true;

/**
 * Fonction décrivant quoi faire lorsque le bouton "+" est cliqué
 */
function boutonPlusAEteClique() {
    console.log("Bouton '+' cliqué");

    if (numCommandesAffichees === 0) {
        // Retirer la ligne par défaut
        retirerDerniereLigne();
    }

    // Ces accolades ("{}") créent un objet JavaScript.
    // Un objet est encore un autre type de valeur. Un peu comme les
    // tableaux, un objet contient un ensemble de valeurs. La différence
    // est que, pour obtenir les valeurs d'un objet, on doit utiliser le
    // nom qu'on a donné aux valeurs dans cet objet.
    //
    // Par exemple, pour obtenir ce qu'on avait mis dans "numero" qui est dans "commandeAAjouter", on ferait
    // "commandeAAjouter.numero".
    let commandeAAjouter = {
        numero: numeroDeLaProchaineCommande,
        nom: "Article #" + numeroDeLaProchaineCommande,
        description: "Lorem ipsum dolor sit amet #" + numeroDeLaProchaineCommande + "."
    };

    // Exécute la fonction "creerLigne" avec la valeur "commandeAAjouter"
    // comme paramètre.
    // Comme creerLigne retourne une valeur, on prend cette valeur et on la
    // met dans la variable "ligne".
    let ligne = creerLigne(commandeAAjouter);

    // Cherche partout sur la page un élément pour lequel on a mis "commandes"
    // comme "id", et met cet élément dans la variable "tableauCommandes".
    let tableauCommandes = document.querySelector("#commandes");

    // Ajouter la ligne à tableauCommandes.
    tableauCommandes.appendChild(ligne);
    
    numeroDeLaProchaineCommande = numeroDeLaProchaineCommande + 1;
    numCommandesAffichees = numCommandesAffichees + 1;
}

/**
 * Fonction décrivant quoi faire lorsque le bouton "-" est cliqué
 */
function boutonMoinsAEteClique() {
    console.log("Bouton '-' cliqué");

    if (numCommandesAffichees > 0) {
        // Nous affichions effectivement des commandes ; donc on accepte d'en
        // enlever une.


        // Un peu comme tout à l'heure pour chercher le tableau, cette ligne
        // cherche un élément de la page et le met dans la variable "listeDesLignesAffichées".
        //
        // Comment aurions nous pu savoir qu'il fallait écrire mettre "#commandes > tr:nth-child(2)"
        // pour obtenir la première ligne du tableau? Dans Chrome, ouvrir les
        // outils pour développeur (F12 ou CTRL+SHIFT+I). Sur la fenêtre qui apparaît,
        // cliquer sur l'onglet "Éléments", chercher <table id="commandes"> puis survoler
        // avec la souris les sous-éléments jusqu'à ce que, sur la page, la ligne contenant
        // la première commande soit en bleu. Faire un clic droit sur ce sous-élément, puis
        // choisir "Copy Selector". La chaîne de caractères "#commandes > tr:nth-child(2)"
        // sera copiée dans le presse-papier ; on peut ensuite la coller dans notre code.
        //
        // Je crois qu'on peut faire à peu près la même chose sur Firefox et sur les
        // autres navigateurs web.
        let ligne = document.querySelector("#commandes > tr:nth-child(2)");

        // Mettre les classes CSS "fondu" et "cache" pour que l'opacité de la ligne
        // change. Cette ligne transforme
        // <tr class="fondu">...données de la commande...</tr>
        // en
        // <tr class="fondu cache">...données de la commande...</tr>
        ligne.setAttribute("class", "fondu cache");

        // Dans 500 millisecondes (0.5 secondes), faire "retirerDerniereLigneEtMettreLigneParDefaut()".
        // Ceci permet à l'animation de disparition en fondu de se jouer avant que
        // l'on supprimme la ligne.
        setTimeout(retirerDerniereLigneEtMettreLigneParDefaut, 500);
    }
    else {
        console.log("On est arrivés à 0 commandes affichées ; on n'en supprime plus.")
    }
}

/**
 * Fonction à laquelle on donne une commande, qui crée une ligne du tableau contenant
 * les informations de cette commande, et qui renvoie ("retourne") la ligne
 * du tableau.
 */
function creerLigne(commande) {
    // 1. Créer un élément "<tr></tr>" (qui n'est pas encore affiché)
    // et le mettre dans la variable.
    let nouvelleLigne = document.createElement("tr");
    // 1.1. Mettre à cette ligne la propriété class="apparaitre-en-fondu",
    // Comme si nous avions écris <tr class="apparaitre-en-fondu"></tr> dans l'HTML.
    nouvelleLigne.setAttribute("class", "fondu");


    // 2. De manière similaire, créer les colonnes de cette ligne.

    // 2.1. Créer un élément "<td></td>" pour le numéro de la commande.
    let colonneNumero = document.createElement("td");
    // 2.1.1. Mettre le numéro de la commande comme texte de cette colonne
    // (comme si on avait écrit "<td>le numéro de la commande</td>" dans le HTML).
    colonneNumero.innerText = commande.numero;

    // 2.2 Créer un élément "<td></td>" pour le nom de l'article.
    let colonneNom = document.createElement("td");
    colonneNom.innerText = commande.nom;

    // 2.3 Créer un élément "<td></td>" pour la description de l'article.
    let colonneDescription = document.createElement("td");
    colonneDescription.innerText = commande.description;

    // 3. Ajouter les colonnes à la ligne (dans le bon ordre!)
    nouvelleLigne.appendChild(colonneNumero);
    nouvelleLigne.appendChild(colonneNom);
    nouvelleLigne.appendChild(colonneDescription);

    // 4. Retourner la valeur de la variable nouvelleLigne.
    return nouvelleLigne;
}

/**
 * Retire la dernière ligne du tableau de commandes.
 */
function retirerDerniereLigne() {
    // Voir la fonction "boutonPlusAEteClique" pour un explication de cette
    // ligne.
    let tableauCommandes = document.querySelector("#commandes");
    // Voir la fonction "boutonMoinsAEteClique" pour une explication de cette
    // ligne.
    // NOTE: Cette fonction retourne la valeur spéciale "null" si elle ne
    // trouve pas l'élément.
    let ligne = document.querySelector("#commandes > tr:nth-child(2)");

    let ilYAUneLigne = ligne !== null;
    if (ilYAUneLigne) {
        // Retirer la ligne du tableau.
        tableauCommandes.removeChild(ligne);

        // Si on était en train d'afficher la ligne par défaut,
        // alors on vient de la retirer, donc on n'est plus en train de l'afficher.
        if (ligneParDefautAffichee) {
            ligneParDefautAffichee = false;
        }
        else {
            // Sinon, on a enlevé une commande
            numCommandesAffichees = numCommandesAffichees - 1;
        }
    }
}

/**
 * Retire la dernière ligne, s'il y en a une.
 * Si le nombre de commandes affichées tombe à zéro, alors on affiche la
 * ligne par défaut.
 */
function retirerDerniereLigneEtMettreLigneParDefaut() {
    retirerDerniereLigne();

    if (numCommandesAffichees === 0) {
        afficherLigneParDefaut();
    }
}

/**
 * Affiche "(aucune commande passée)" dans le tableau.
 */
function afficherLigneParDefaut() {
    // Voir la fonction "boutonPlusAEteClique" pour un explication de cette
    // ligne.
    let tableauCommandes = document.querySelector("#commandes");

    // Supprimer une ligne du tableau pour éviter que la ligne
    // "(aucune commande passée)" s'affiche plusieurs fois.
    // Voir la fonction "boutonMoinsAEteClique" pour une explication de cette
    // ligne.
    // NOTE: Cette fonction retourne la valeur spéciale "null" si elle ne
    // trouve pas l'élément.
    let ligne = document.querySelector("#commandes > tr:nth-child(2)");

    let ilYAUneLigne = ligne !== null;
    if (ilYAUneLigne) {
        // Retirer la ligne du tableau.
        tableauCommandes.removeChild(ligne);
    }

    let tr = document.createElement("tr");      // <tr></tr>
    tr.setAttribute("class", "fondu");          // <tr class="fondu"></tr>
    let td = document.createElement("td");      // <td></td>
    td.innerText = "(aucune commande passée)";  // <td>(aucune commande passée)</td>
    tr.appendChild(td);                         // <tr class="fondu"><td>(aucune commande passée)</td></tr>
    tableauCommandes.appendChild(tr);

    ligneParDefautAffichee = true;
}

// Comme cette ligne n'est pas à l'intérieur d'une fonction, elle est exécutée
// avant même que la page soit apparue à l'écran.
// Attendre 0.01 sec le temps que le tableau soit affiché, puis ajouter la ligne
// par défaut.
setTimeout(afficherLigneParDefaut, 10);
