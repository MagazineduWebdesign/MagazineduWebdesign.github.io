---
title: Personnalisation du lien WordPress Read more
date: 2013-05-10 17:22:56
category: wordpress
tags:
- tutoriels
- wordpress
intro:
description: Voici la technique que j'ai employée pour personnaliser l'URL du read more et y insérer un attribut title reprenant le titre de l'article
image: wordpress-personnaliser-read-more.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl: http://codex.wordpress.org/Customizing_the_Read_More
viatitle: Codex WordPress
---

Si vous avez configurer votre site WordPress pour laisser apparaître uniquement un extrait des articles sur la page d’accueil, WordPress vous offrent plusieurs options pour afficher le lien Lire la suite – aka Read more.

Les extraits des posts au sein de WordPress peuvent être affichés via deux solutions :

* La première est manuelle : vous devez insérer la balise `more` à l’endroit souhaité dans le texte via le bouton présent dans le Wysiwyg des posts WordPress.
* La deuxième option insère automatiquement le lien « Read more » à la suite des 55 premiers termes de l’article. Pour cela, il faut remplacer dans vos templates `the_content {}` par `the_excerpt{}`.
Pour ma part, je préfère employer la première solution car elle permet de contrôler plus précisément le contenu de l’extrait d’article.

##Problèmes rencontrés

En revanche, j’ai rencontré deux problèmes lorsque j’ai souhaité utiliser cette technique :

* Par défaut, le fait de cliquer sur le lien Read more ouvre la page de l’article et provoque le défilement de la page jusqu’à la section du document contenant l’ancre nommée `#more-xxx`. Cette section correspondant à l’emplacement où l’auteur de l’article à insérer la balise `<!–more–>`. Je trouve ce scroll automatique gênant pour [l’utilisabilité](http://magazineduwebdesign.com/tag/ux/).
* WordPress ne propose pas la possibilité de renseigner l’attribut `title` du lien Read more. J’ai souhaité améliorer [l’accessibilité](http://magazineduwebdesign.com/tag/accessibilite/) de mon site Web en insérant le titre de l’article dans l’attribut `title` du lien.

J’ai donc chercher à remédier à ces deux « problèmes » en personnalisant le Read more.

##Personnaliser le lien WordPress « Read more »

Voici la technique que j’ai employée pour supprimer la référence à l’ancre `#more` dans l’URL de l’article et y insérer un attribut `title` reprenant le titre de l’article :

// Ajouter l'attribut title et retirer la balise #more du lien "Read more"
function mon_lire_la_suite() {
 return ' <a class="ma-classe" href="' . get_permalink() . '" title="Lire la suite - ' . get_the_title() . '">Lire la suite...</a>';
}
add_filter( 'the_content_more_link', 'mon_lire_la_suite' );

Insérez le code ci-dessus dans le fichier functions.php de votre thème WordPress.

D’autres options de personnalisation des extraits d’articles et de leur lien Read more sont disponibles sur le Code WordPress.