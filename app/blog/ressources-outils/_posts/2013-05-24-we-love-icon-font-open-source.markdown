---
title: WLIF – le like Google Web font pour les icon fonts open source
date: 2013-05-24 17:22:56
category: ressources-outils
tags:
- fonts-gratuites
- icones
intro:
image: we-love-icon-font-service-en-ligne-icon-font-open-source.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

We Love Icon Font est un service en ligne reprenant l’ensemble des caractéristiques de Google Web Fonts à une différence près, vous n’y trouverez que des icon fonts gratuites et open source.

Les icon fonts sont des fichiers composés d’[icônes](http://magazineduwebdesign.com/icones-flat-design "icônes"), de symboles et de glyphes. Pour utiliser une [icon font](http://magazineduwebdesign.com/icon-font-gratuite-personnalisee-fontastic "icon font") dans vos projets Web, il vous faut employer la déclaration CSS `@font-face` à l’instar des fontes Web classiques.

L’innovation apportée par WLIF est que vous n’avez pas à héberger les fichiers de la fonte. Il vous suffit d’ajouter le code suivant dans les premières lignes de votre principal fichier CSS :

{% highlight css %}
@import url(http://weloveiconfonts.com/api/?family=zocial);
/* zocial */
[class*="zocial-"]:before {
  font-family: 'zocial', sans-serif;
}
{% endhighlight %}

Puis appelez la classe correspondant à l’icône souhaitée dans votre document Web :

{% highlight html %}
<span class="zocial-dribbble"></span>
{% endhighlight %}

Et c’est tout !

Un service en ligne bien pratique. Néanmoins, le seul inconvénient est que vous dépendrez d’un service externe.

<p style="text-align: center;"><a class="button primary radius" href="http://weloveiconfonts.com/" target="_blank">We Love Icon Font</a></p>
<p>Les icon fonts fournies par WLIF sont les suivantes :</p>
<ul>
<li><a href="https://github.com/fontello/brandico.font" target="_blank">Brandico</a></li>
<li><a href="http://entypo.com/" target="_blank">entypo</a></li>
<li><a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></li>
<li><a href="http://pfefferle.github.com/openwebicons/#weloveiconfonts" target="_blank">OpenWeb Icons</a></li>
<li><a href="http://typicons.com/" target="_blank">Typicons</a></li>
<li><a href="http://zocial.smcllns.com/" target="_blank">zocial</a></li>
</ul>
<p>Son créateur&nbsp;<a href="http://twitter.com/TimPietrusky" target="_blank">@TimPietrusky</a>&nbsp;prévoit d’en ajouter très bientôt. Si vous souhaitez découvrir d’autres horizons du monde des icon fonts, je vous invite à consulter notre <a title="22 icon Fonts gratuites – La grosse liste" href="http://magazineduwebdesign.com/icon-font-gratuite">collection de 22 icon fonts gratuites</a>.</p>
