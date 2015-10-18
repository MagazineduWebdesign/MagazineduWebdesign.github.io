---
title: Photo sphere – La galerie Android et Google+ disponible en widget Web
date: 2013-05-04 17:22:56
category: ressources-outils
tags:
- ressources
intro: Google vient de lancer le widget Photo Sphere que vous pouvez désormais intégrer dans n'importe quel site.
image: Photo-sphere-La-galerie-Android-et-Google-plus-disponible-en-widget-Web-01.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

Les images 360 degrés prises avec les devices Android ne sont plus limitées à un usage restreint sur Google+ et Google Maps.

Photo Sphere est une fonctionnalité apparue avec la sortie de la version Android Jelly Bean 4.2. Les nouveaux terminaux Nexus peuvent ainsi réaliser des prises de vues panoramiques couvrant les axes horizontaux et verticaux. Si vous êtes un adepte de Google Street View, vous devez certainement avoir une idée de comment cela fonctionne. La personne prenant la photo est au centre du panorama, elle peut diriger l’objectif dans n’importe quelle direction et zoomer comme bon lui semble.

Jusqu’à aujourd’hui, elle pouvait visualiser et partager ses photos sphere uniquement sur les services Google. Grâce au travail de [Colby Brown](http://www.colbybrownphotography.com/can-photo-spheres-change-the-way-we-experience-the-world/) et de l’équipe d’ingénieurs Android, il est désormais possible d’insérer un slide show de photos sphere directement dans un site Web.

<div style="text-indent: 0px; margin: 0px; margin-bottom: 16px; padding: 0px; background-color: transparent; border-style: none; float: none; line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 555px; height: 300px; background-position: initial initial; background-repeat: initial initial;" id="___panoembed_3"><iframe frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="position: static; top: 0px; width: 555px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 300px;" tabindex="0" vspace="0" width="100%" id="I6_1367617942744" name="I6_1367617942744" src="https://ssl.gstatic.com/pano/embed/?bsv&amp;imageurl=https%3A%2F%2Flh4.googleusercontent.com%2F--DtXrsskQ7s%2FUYPZ8CRkbOI%2FAAAAAAABSKk%2FVFeUB8iQ2to%2FPANO_20130430_201548.jpg&amp;fullsize=4000%2C2000&amp;croppedsize=4000%2C2000&amp;offset=0%2C0&amp;displaysize=800%2C500&amp;hl=en-US&amp;origin=http%3A%2F%2Fwww.colbybrownphotography.com&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.fr.QDK8zzloe8I.O%2Fm%3D__features__%2Fam%3DUQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAItRSTPE8u-hLdYY-XiwC6GBqbOtkeBA1Q#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled&amp;id=I6_1367617942744&amp;parent=http%3A%2F%2Fwww.colbybrownphotography.com&amp;rpctoken=12492413" allowtransparency="true" data-gapiattached="true"></iframe></div>

Si vous souhaitez partager vos propres photos sphere, Google a publié des [instructions](https://developers.google.com/panorama/web/) pour utiliser la nouvelle visionneuse. Il vous faudra activer l’API Google+ en insérant la ressource JavaScript suivante :

{% highlight html %}
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
{% endhighlight %}

Puis ajouter la visionneuse Photo Sphere à votre page en utilisant l’élément g:panoembed :

{% highlight html %}
<g:panoembed imageurl="https://lh5.googleusercontent.com/-kr97Eucg6sM/UKGEuvo_eBI/AAAAAAAAi0s/adq8uqyhm_k/photo.jpg"
fullsize="4096,2048"
croppedsize="4096,1380"
offset="0,480"
displaysize="600,400"/>
{% endhighlight %}

L’option autorotate permet d’activer la rotation automatique du panorama.

Nice move Google.
