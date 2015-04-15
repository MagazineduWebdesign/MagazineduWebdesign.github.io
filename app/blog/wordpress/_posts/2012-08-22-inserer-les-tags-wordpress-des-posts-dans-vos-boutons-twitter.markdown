---
title: Insérer les tags WordPress des posts dans vos boutons Twitter
date: 2012-08-22 17:22:56
category: wordpress
tags: 
- jekyll
- topic
intro: L'efficacité de l’Optimisation pour les Médias Sociaux n'est plus à prouver. Les contenus publiés sur ces derniers peuvent représenter une source non négligeable de trafic pour votre site Web. Encore faut-il que ces contenus jouissent d'une visibilité sur ces plateformes sociales.
description: L'efficacité du SMO n'est plus à prouver. Dans ce tutoriel, nous aborderons l'optimisation de l'URL de partage Twitter à l'aide des tags WP.
image: tag-wordpress-et-twitter-api.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
---

L'efficacité de l’Optimisation pour les Médias Sociaux n'est plus à prouver. Les contenus publiés sur ces derniers peuvent représenter une source non négligeable de trafic pour votre site Web. Encore faut-il que ces contenus jouissent d'une visibilité sur ces plateformes sociales.

L’astuce WordPress du jour consiste à optimiser l’URL de partage [Twitter](http://magazineduwebdesign.com/exemples-d-utilisations-creatives-de-l-api-twitter "Exemples d'utilisation de l'API Twitter") en y insérant les tags WordPress relatifs à vos articles sous la forme des fameux hashtags.

Avantage ? Rendre plus facilement accessible vos articles partagés via le bouton Twitter lorsqu’une recherche par hashtags est effectuée sur la plateforme de micro-blogging.

Rassurez-vous, l’implémentation de cette technique WordPress est simple. Et surtout efficace pour ceux et celles souhaitant gravir les pans de la montagne SMO.

##Récupérer le slug des tags relatifs à votre article WordPress

Pour cela, vous devez au préalable appeler les tags de votre article via la fonction [get_the_tags](http://codex.wordpress.org/Function_Reference/get_the_tags "Codex WordPress Fonction get_the_tags").

Deuxième étape : déterminez quelles données de vos tags vous souhaitez insérer dans votre URL de partage Twitter. Dans notre cas, nous souhaitons conserver seulement le slug des tags.

Insérez le code suivant au-dessus de l’URL :


{% highlight php %}
<?php
// Obtenir les tags
$posttags = get_the_tags();
// Obtenir le slug des tags
if ($posttags) {
  foreach($posttags as $tag) {
  $hashtag[] = $tag -> slug;
  }
}
else {}
?>
{% endhighlight %}

##Inclure les tags avec l’aide de l’API Twitter

Les slugs des tags sont prêts, il ne vous reste plus qu’à les réunir dans une seule chaîne de caractères via la fonction PHP `implode()`. Repérez l’attribut `data-hashtags` et insérez-y votre chaîne comme dans l’exemple suivant :

{% highlight php %}
<a href="https://twitter.com/share" class="twitter-share-button" data-url="<?php the_permalink(); ?>" data-text="<?php urlencode(the_title()); ?>" data-hashtags="<?php echo implode(", ",$hashtag);?>" data-via="MagDuWebdesign" data-lang="fr" data-related="MagDuWebdesign">Tweeter</a>
{% endhighlight %}

Et voilà, vos tweets sont désormais aptes à figurer en bonne place dans les pages de résultats Twitter.