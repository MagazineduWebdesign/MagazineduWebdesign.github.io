---
title: Holder.js, une librairie d’images par défaut côté client
date: 2012-11-04 17:22:56
category: design
tags:
- ressources
- techniques
intro: Holder fourni des images par défaut directement côté client. Pouvant fonctionner en ligne et hors ligne, ce script offre une API permettant de créer des styles d’images personnalisés.
image: holder-js-client-side-image-placeholders.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

Holder utilise l’élément canvas et les [Data URI scheme](http://fr.wikipedia.org/wiki/Sch%C3%A9ma_d%27URI "Data URI scheme") afin de produire le rendu de l’image par défaut directement dans le navigateur.

L’avantage de ce script est de rendre l’utilisateur totalement autonome pour la production de [wireframes HTML](http://magazineduwebdesign.com/place-a-la-pratique-les-outils-de-wireframing-html-33 "Wireframes HTML") et de prototypes d’applications Web. Il ne dépend plus d’un service tiers d’images par défaut.

##Comment utiliser Holder.js

Vous devez appeler le script : `<script src="holder.js"></script>`.

Lorsque vous souhaitez utiliser une image par défaut, spécifiez-le directement dans l’attribut source de vos balises `<img>` comme ceci : `<img src="holder.js/200x300">`

`200` est la largeur de l’image et `300` sa hauteur.

Holder autorise l’insertion de textes dans l’image générée. L’apparence de cette dernière telle que la couleur de l’arrière-plan et du texte peut être contrôlée en ajoutant au script vos paramètres personnalisés.

Pour plus de détails, consultez le [site Web dédié](http://imsky.github.com/holder/).

Les navigateurs supportés sont :

* Chrome 1+
* Firefox 3+
* Safari 4+
* Internet Explorer 9+, avec un support dégradé pour IE6-8
* Android 1+
