---
title: Comment contrôler la compression WordPress des JPEG
date: 2012-10-03 17:22:56
category: wordpress
tags:
- techniques
- tutoriels  
intro:
description: L'astuce du jour consiste à obtenir le contrôle de la compression WordPress des JPGs exécutée par défaut lors de l'upload d'images
image: wordpress-compression-jpg.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl: http://bit.ly/GQhzw6
viatitle: WP-snippets
---
<p class="panel radius">Découvrez les meilleures pratiques de compression de fichiers images en explorant la <a href="http://www.magazineduwebdesign.com/collection/optimiser-les-images-pour-un-web-plus-rapide/">collection d'outils pour optimiser vos images</a> du Magazine du Webdesign, actualisée chaque jour.</p>
L’astuce du jour consiste à obtenir le contrôle de la compression WordPress des JPG exécutée par défaut lors de l’upload d’images. WordPress compresse vos images à 90%, cela est très pratique afin d’accélérer le temps de chargement de vos pages. Néanmoins, pour un blog de photographie, ça le fait moyen.

Donc, voici votre sésame HD amis photographes à placer dans votre fichier functions.php (ou dans un fichier dédié aux filtres WordPress) :

{% highlight php %}
/* compression JPEG */
add_filter('jpeg_quality', function($arg){return 100;});
{% endhighlight %}

Modifiez la valeur 100 pour obtenir le résultat souhaité. J’utilise pour mes visuels une compression à 80% afin d’obtenir un bon ratio qualité/compression.

`jpeg_quality` requière la version PHP 5.3.1. Pour l’utiliser avec une version PHP < 5.3.1, vous devrez utiliser ce code :

{% highlight php %}
/* compression JPEG */
add_filter( 'jpeg_quality', create_function( '', 'return 100;' ) );
{% endhighlight %}
