---
title: Affichez vos articles WordPress les plus populaires grâce aux stats Jetpack
date: 2013-02-05 17:22:56
category: wordpress
tags: 
- plugin
- wordpress
intro: Afficher ses contenus les plus lus est un des meilleurs moyens pour mettre en valeur son travail et ainsi attirer de nouveaux lecteurs.
description: Jetpack Post View est un plugin permettant d'afficher une liste de vos meilleures publications en se basant sur vos stats Jetpack.
image: Plugin-WordPress-JetPack-Post-Views-articles-populaires.png
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
---

<p>Si vous avez mis en place le plugin de statistiques Jetpack, voici une astuce pour en tirer profit sur le front de votre site.</p>
<p><img class="right" title="Jetpack post View - plugin WordPress articles populaires" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/jetpack-post-views-articles-populaires-wordpress.png" alt="Jetpack post View - plugin WordPress articles populaires" width="236" height="286"><strong>Jetpack Post View</strong> est un plugin <a title="Archives WordPress" href="http://magazineduwebdesign.com/wordpress/" target="_blank">WordPress</a> permettant d’afficher une liste de vos meilleures publications en se basant sur vos stats Jetpack. Ce plugin utilise votre <a title="apikey.wordpress.com" href="https://apikey.wordpress.com/" target="_blank">clé d’API WordPress</a>&nbsp;pour vous proposer un widget listant les <strong>articles les plus populaires</strong> de votre blog.</p>
<p>Une option dans le widget permet de contrôler l’affichage du nombre de vues par articles.</p>
<p>Vous pouvez afficher cette information où bon vous semble en ajoutant le code suivant à vos templates (par ex. dans le bloc méta de votre&nbsp;<code>single.php</code>).</p>

{% highlight php %}
<?php echo get_post_meta( $post->ID, 'jetpack-post-views', true ); ?>
{% endhighlight %}

<p>Les données du widget sont mises à jour toutes les heures si le plugin est activé.</p>
<p><strong><a title="Jetpack Post Views" href="http://wordpress.org/extend/plugins/jetpack-post-views/" target="_blank">Jetpack Post Views</a></strong> est un plugin gratuit disponible via le répertoire de plugins WordPress. Bon test.</p>