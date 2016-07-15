---
title: Astuce WordPress, créer un bouton via un shortcode
date: 2012-09-17 17:22:56
category: "wordpress"
tags: 
- techniques
- tutoriels  
intro: Vous avez installé WordPress. Votre thème a été paramétré. Vous éditez vos premières pages et articles, et là, Paf... Il vous manque la fonctionnalité indispensable pour compléter l'article dont vous rêviez.
description: L'astuce WordPress du jour qui vous permettra d'agrémenter vos articles d'un bouton entièrement customisable grâce aux shortcodes WordPress.
image: shortcode-bouton-magazine-du-webdesign.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
---

Pas de panique, WordPress regorge de solutions en tous genres. L’astuce WordPress qui vous permettrait d’agrémenter votre fameux article d’un bouton de téléchargement par exemple, se nomme Shortcode.


L’API des shortcodes a été introduite dans WordPress à partir de la version 2.5. Un shortcode est un raccourcis se présentant sous cette forme :

`[shortcode]Votre contenu[/shortcode]`

dite enveloppante, ou via cette forme :

`[shortcode]`

Cette dernière est dite à fermeture automatique.

L’objectif est d’automatiser l’ajout d’items tels que des galeries d’images, un lecteur vidéo, un bouton cliquable renvoyant au chargement d’un document, cela sans écrire la moindre ligne de code HTML.

Pour simplifier, il s’agit d’une formule magique que l’on insert directement dans l’éditeur de texte Wordress, que ce soit en mode visuel ou en mode HTML.

##Comment créer un shortcode bouton

###1ère étape – Déclarer le shortcode dans votre fichier functions.php

{% highlight php %}
/* Shortcode bouton */
function bouton($atts, $content = null) {
 extract(shortcode_atts(array(
 'lien' => '#',
 'couleur' =>'bleu'
 ), $atts));
 return '<a class="bouton '.$couleur.'" href="'.$lien.'" target="_blank">' . do_shortcode($content) . '</a>';
}
add_shortcode('bouton', 'bouton');
{% endhighlight %}

Pour l’instant, nous allons faire simple. Nous souhaitons créer un shortcode dit enveloppant (Cf. paragraphe ci-dessus) dont la forme finale ressemblera à ceci :

`[bouton]Mon contenu[/bouton]`

Nous lui ajoutons deux options : la couleur du bouton et  l’URL de destination.

La fonction `add_shortcode()` est utilisée pour enregistrer le gestionnaire du shortcode. Elle comprend deux paramètres :

* le nom du shortcode (dans notre cas, bouton, qui sera utilisé dans l’éditeur de texte de WordPress),
* le nom de la fonction de rappel.

Donc, nous déclarons notre fonction bouton, via laquelle nous incluons les attributs `Couleur` et `Lien` de notre shortcode bouton.

Nos attributs ont une valeur par défaut (# et bleu), au cas où l’utilisateur ne les compléterait pas ou de manière inattendue lors de l’édition d’un article. De même pour le contenu du shortcode, nous devons prévoir le cas où l’utilisateur n’insère pas de contenu en appliquant un deuxième paramètre à notre gestionnaire de shortcode :

`$content = null`

Ensuite nous devons déterminer quel contenu le gestionnaire de shortcode doit retourner :

{% highlight php %}
return '<a class="bouton '.$couleur.'" href="'.$lien.'" target="_blank">' . do_shortcode($content) . '</a>';
{% endhighlight %}

Cela produira :

{% highlight php %}
<a class="bouton bleu" href="monlien" target="_blank">Mon ancre</a>
{% endhighlight %}

L’attribut Lien peut recevoir comme type de contenu une URL et l’attribut Couleur une des deux class CSS que nous allons définir ci-dessous : bleu et orange.

###2ème étape – Nous chartons le bouton en déclarant quelques CSS

{% highlight css %}
/* Format bouton */
.bouton{
    display: inline-block;
    width: auto;
    margin: 0 .75em;
    padding: .37em 1.5em;
    color: white;
    text-align:center;
    border-radius: 5px;
}
.bouton:hover{
    text-decoration:none;
}
.bouton:active{
    background-color:#E05820;
    color: white;
    text-decoration:none;
}
/* Couleur bouton */
.bouton.orange {
    background-color:#E15821;
}
.bouton.bleu {
    background-color:#174a5d;
}
{% endhighlight %}

###3ème étape – Insérez le shortcode dans l’éditeur WordPress

Dans votre éditeur WYSIWYG, copiez-collez le shortcode suivant :

{% highlight html %}
[bouton couleur="orange" lien="http://codex.wordpress.org/Shortcode_API"]L'API Shortcode WordPress[/bouton]
{% endhighlight %}

Le résultat :

<a class="button primary radius" href="http://codex.wordpress.org/Shortcode_API">L’API Shortcode WordPress</a>

##Facile, n’est-ce pas ? Allons plus loin

Vous souhaitez sans doute avoir la main sur plusieurs aspects de votre bouton. Par exemple, modifiez en quelques secondes la taille de votre bouton, la couleur de son background et de son ancre.

Rien de plus simple, reprenons notre fonction bouton, et ajoutons-lui quelques attributs supplémentaires :

{% highlight php %}
/* Shortcode bouton */
function button($atts, $content = null) {
 extract(shortcode_atts(array(
 'link' => '#',
 'color' =>'',
 'taille' =>'medium',
 'bgcouleur' =>'',
 'couleurtexte' => ''
 ), $atts));
 return '<a style="background-color:'.$bgcouleur.';color:'.$couleurtexte.';" class="button '.$taille.' '.$color.'" href="'.$link.'" target="_blank">' . do_shortcode($content) . '</a>';
}
add_shortcode('button', 'button');
{% endhighlight %}

Embellissons ces nouvelles options en saupoudrant un peu de CSS pour gérer les tailles du bouton :
{% highlight css %}
/* Bouton taille */
.bouton.full {
    display: block !important;
}
.bouton.petit {
    font-size: .75em;
}
.bouton.medium {
    font-size: .875em;
}
.bouton.large{
    font-size: 1.125em;
}
{% endhighlight %}

Nous avons ainsi quatre formats de bouton disponibles :

* full (prenant l’ensemble de la largeur disponible),
* petit (parce que c’est grand d’être petit),
* medium,
* large.

Notre shortcode final est le suivant :

{% highlight html %}
[bouton taille="large" bgcouleur="#009900" couleurtexte="#efefef" lien=""]Mon contenu[/bouton]
{% endhighlight %}

Les options sont infinies, vous pourriez par exemple :

* insérer des icônes dans le bouton,
* contrôler la couleur des icônes,
* contrôler la valeur de l’attribut target du lien

Vous l’aurez compris, c’est vous le patron.

N’hésitez pas à partager vos idées en commentant cet article.