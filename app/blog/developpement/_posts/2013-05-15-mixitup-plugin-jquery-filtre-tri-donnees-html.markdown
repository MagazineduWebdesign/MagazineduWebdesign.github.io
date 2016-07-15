---
title: MixItUp, le plugin jQuery CSS3 pour filtrer et trier vos listes HTML
date: 2013-05-15 17:22:56
category: "developpement"
tags:
- jquery
- plugin
intro: MixItUp a fait son apparition il y a quelques jours dans le désormais célèbre répertoire de plugins jQuery Unheap. Ce plugin permet de créer en quelques minutes une liste d'items accompagnée d'un système de filtre et de tri.
image: mixitup-plugin-jquery-filtre-tri-liste-html-front.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

Il existe de nombreux plugins jQuery pour filtrer et trier des données. J’avais listé un certain nombre de [solutions de filtrage](http://magazineduwebdesign.com/filtre-plugin-jquery "solutions de filtrage jQuery") dans un précédent article. J’y abordé également les principales règles à respecter pour obtenir une utilisabilité à toutes épreuves accompagnées de quelques exemples. Si vous souhaitez approfondir le sujet, je vous conseille de le lire.

##MixItUp – une solution jQuery polyvalente pour ordonner et filtrer vos listes d’items

MixItUp est un plugin jQuery léger offrant de belles animations lors du filtrage et du tri des contenus. Il s’adapte parfaitement à n’importe quelle structure HTML et CSS, ce qui le rend compatible avec la majorité des mises en page fixes, fluides et responsives. Il conviendra merveilleusement bien à un portfolio ou à un listing d’articles et de produits.

<figure>
  <img class="left" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/mixitup-plugin-jquery-filtre-tri-liste-html.jpg" alt="mixitup-plugin-jquery-filtre-tri-liste-html" width="555" height="274">
</figure>

MixItUp utilise jQuery pour masquer, afficher ou repositionner les éléments de la liste en fonction des filtres que vous avez définis. Une surcouche de CSS3 transitions [CSS3 transitions](http://magazineduwebdesign.com/css3-animation-transition-exemples-tutoriels "CSS3 transitions") anime en douceur les éléments pour les accompagner jusqu’à leur nouvel emplacement.

C’est une approche bien plus efficace que l’utilisation de jQuery `.animate()` et de la position : absolute pour les navigateurs modernes. En n’utilisant pas cette dernière, MixItUp autorise l’emploi des pourcentages et des media queries pour obtenir une mise en page fluide et responsive adaptée aux contraintes des supports mobiles.

<a class="button primary radius" href="http://mixitup.io/" target="_blank">Démo de MixItUp</a>

##Comment utiliser MixItUp

###La liste d’items

Dans un premier temps, mettez en place votre liste d’items :

{% highlight html %}
<ul id="Grid">
	<li class="mix dogs" data-name="Abby" data-age="2"></li>
	<li class="mix cats" data-name="Bucky" data-age="9"></li>
	<li class="mix dogs" data-name="Molly" data-age="5"></li>
	<li class="mix krakens" data-name="Kraken" data-age="3987"></li>
	<li ...
</ul>
{% endhighlight %}

Vous pouvez ajouter des attributs tels qu’un nom ou un âge si vous avez des besoins en terme de tri.

###Le système de filtre

Par défaut, MixItUp déclenche l’action de filtrage lorsqu’un clic est détecté sur un élément comportant la class filter. Cela peut être personnalisé dans la configuration des options. Déterminez vos catégories de filtres en fonction de votre liste d’items comme dans l’exemple ci-dessous :

{% highlight html %}
<ul>
	<li class="filter" data-filter="dogs"></li>
	<li class="filter" data-filter="cats"></li>
	<li class="filter" data-filter="krakens"></li>
	<li class="filter" data-filter="dogs cats"></li>
</ul>
{% endhighlight %}

###Le système de tri

Par défaut, le plugin MixItUp déclenche l’action de tri lorsqu’un clic est détecté sur un élément comportant la class sort. Cela peut être personnalisé dans la configuration des options. Déterminez vos options de tri en insérant les attributs `data-sort` et `data-order`.

{% highlight html %}
<ul>
	<li class="sort" data-sort="data-name" data-order="desc"></li>
	<li class="sort" data-sort="data-name" data-order="asc"></li>
	<li class="sort" data-sort="data-age" data-order="desc"></li>
	<li class="sort" data-sort="data-age" data-order="asc"></li>
	<li class="sort" data-sort="default" data-order="asc"></li>
	<li class="sort" data-sort="random"></li>
</ul>
{% endhighlight %}

###La base

N’oublions pas qu’il s’agit d’un plugin jQuery, il faudra donc appeler le framework jQuery ainsi que le script MixItUp :

{% highlight html %}
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/jquery.mixitup.min.js"></script>
{% endhighlight %}

###Pour les plus courageux

Il s’agit de la liste complète des options de configuration disponibles avec leurs valeurs par défaut.

{% highlight js %}
$('#Grid').mixitup({
targetSelector: '.mix',
filterSelector: '.filter',
sortSelector: '.sort',
buttonEvent: 'click',
effects: ['fade','scale'],
listEffects: null,
easing: 'smooth',
layoutMode: 'grid',
targetDisplayGrid: 'inline-block',
targetDisplayList: 'block',
gridClass: '',
listClass: '',
transitionSpeed: 600,
showOnLoad: 'all',
sortOnLoad: false,
multiFilter: false,
filterLogic: 'or',
resizeContainer: true,
minHeight: 0,
failClass: 'fail',
perspectiveDistance: '3000',
perspectiveOrigin: '50% 50%',
animateGridList: true,
onMixLoad: null,
onMixStart: null,
onMixEnd: null
});
{% endhighlight %}

Consultez également : [Tous les articles sur jQuery du Magazine du Webdesign](http://magazineduwebdesign.com/tag/jquery/ "Articles jQuery sur Magazine du Webdesign")

##La fin

Voilà, vous êtes désormais paré pour mater de la donnée. Si vous n’êtes pas encore très à l’aise avec ce plugin, je vous conseille d’utiliser le [template de base](http://mixitup.io/demos/template) proposé par les [créateurs de MixItUp](http://www.barrelny.com/tools/mixitup/).