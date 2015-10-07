---
title: Off-canvas – contrer la verticalité des sites Web mobiles
date: 2012-09-02 17:22:56
category: mobile
tags:
- mobile
- ux
intro: L'optimisation de l'espace d'affichage sur les sites mobiles requiert une certaine dose d'ingéniosité. Placer le contenu, la navigation, la sidebar et le header est déjà un challenge en matière d'architecture de l'information pour une version desktop. La chose devient encore plus ardue pour le Web mobile où l'espace se fait rare.
image: approche-off-canvas-site-mobile.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

<p>Une solution actuellement en vogue consiste à placer la navigation ou une section au sein d’un&nbsp;<strong>volet hors-écran</strong> à l’instar d’applications mobiles comme Evernote, Google+ ou Facebook. Le volet apparaît uniquement si l’utilisateur le désire. Cela me rappelle le côté interactif des livres à tirettes de mon enfance, vous savez…ceux avec les languettes permettant de découvrir un personnage. Partons à la découverte de cette approche, que l’on nommera&nbsp;<strong>off-canvas</strong>.</p>
<p>De nombreuses solutions d’architecture de l’info sont disponibles en responsive.&nbsp;&nbsp;Luke Wroblewski, auteur de&nbsp;<a href="http://www.abookapart.com/products/mobile-first" rel="nofollow"><em>Mobile First</em></a>, mentionne diverses méthodologies dans son article&nbsp;<a href="http://www.lukew.com/ff/entry.asp?1514">Roundup of mobile layout patterns.</a>&nbsp;L’une d’entre elles s’attaque à la <strong>verticalité des contenus</strong> sur les petites résolutions.</p>
<h2>Off-canvas – L’approche off-screen</h2>
<p>Le off-canvas permet l’optimisation de l’espace disponible à l’écran en cachant une section ou un système de navigation lorsque la résolution de l’écran est trop étroite. Le contenu du volet n’apparaît que lorsque l’utilisateur effectue une action.</p>
<p>Cette solution est une alternative au tout vertical, où n’importe quel type d’éléments est disposé l’un au-dessus de l’autre au sein d’une longue page. L’ajustement du contenu ne se fait que sur l’espace visible de l’écran.</p>
<p><strong>Pourquoi ne pas utiliser l’espace disponible hors-écran pour effectuer tous les ajustements nécessaires ?</strong> Il y en a des km<sup>2</sup> en plus !</p>
<p><img class="alignnone size-full wp-image-2285" title="Off-canvas - optimisation de l'architecture de l'info" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/off-canvas-optimisation-architecture-info.jpg" alt="Off-canvas - optimisation de l'architecture de l'info" width="560" height="417"></p>
<p>L’application Android The Verge propose ce type d’expérience. La navigation est disponible via un volet caché, accessible à l’utilisateur d’un seul clic.</p>
<h2>Off-canvas et responsive</h2>
<p>L’espace non alloué à la navigation sur l’écran peut ainsi être affecté à des sections plus importantes pour l’expérience utilisateur. Rien de superflu n’est donc proposé tant qu’aucune action n’est effectuée. Tout reste disponible en seul clic pour les petites résolutions d’écran.</p>
<p>Lorsque la résolution est plus large, la section cachée est visible et accessible sans qu’aucun clic ne soit requis.</p>
<p>Testez par vous même le off-canvas sur un le nouveau site Web responsive The Next Web.</p>
<figure>
  <img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/thenextweb-version-mobile-responsive.jpg" alt="TheNextWeb - version mobile responsive" title="TNW version mobile responsive" width="356"><br />
  <figcaption><a title="thenextweb.com" href="http://thenextweb.com" target="_blank">thenextweb.com</a> – Off-canvas disponible sur les résolutions mobile.</figcaption>
</figure>
<p>Ok ! c’est bien cool tout ça, mais comment intégrer une architecture off-canvas sur un site responsive sans y passer des heures ?</p>
<h2>Création d’un off-canvas sur un site mobile responsive</h2>
<p>Voici quelques outils qui vous permettront de faire le job correctement sans suer du front.</p>
<h3>Off-canvas avec Foundation</h3>
<p>Les créateurs du fameux framework responsive nous offrent <a title="Mise en page off-canvas avec Foundation" href="http://www.zurb.com/playground/off-canvas-layouts" target="_blank">4 variantes de mises en page off-canvas</a> pour les résolutions mobiles.</p>

<figure>
  <img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/offcanvas-foundation.jpg" alt="Off-canvas Foundation" width="550"><br />
  <figcaption>4 templates responsive avec une mise en page off-canvas par Foundation.</figcaption>
</figure>
<p>Avec ces templates responsive, l’adaptation progressive aux écrans mobiles peut se faire de diverses manières. Le template 1 transfère la navigation en footer et cache la sidebar dans un volet hors-écran. Le template 2 conserve la navigation en header sur mobile et dissimule la sidebar hors-écran. Les sections <em>navigation</em> et <em>sidebar</em>&nbsp;des templates 1 et 2 sont accessibles via deux boutons en header.&nbsp;Le template 3 adapte la navigation en une suite de tabs dont chacun des contenus est accessible par sliding.</p>
<p>Le dernier template se rapproche le plus de ce qui est présenté dans cet article, à savoir l’insertion de la <strong>navigation en off-canvas</strong> pour la version mobile du template. Le volet est accessible en un clic via un bouton en header.</p>
<div id="attachment_2326" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-2326" title="Foundation template responsive off-canvas" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/foundation-template-responsive-off-canvas.jpg" alt="Foundation template responsive off-canvas" width="555" height="366"><p class="wp-caption-text">Foundation – template responsive off-canvas.</p></div>
<p>L’adaptation à vos besoins des templates est facilement réalisable à condition d’opérer dans l’environnement du framework Foundation.</p>
<h3>Off-canvas par&nbsp;Jason Weaver</h3>
<p>Jason Weaver a conçu une approche responsive off-canvas en 3 volets. Dans <a title="Jason Weaver off canvas" href="http://jasonweaver.name/lab/offcanvas/" target="_blank">sa démo</a>, il indique les étapes à suivre afin d’afficher et cacher une navigation et une section de contenu sur différentes résolutions via l’utilisation du <strong>JavaScript</strong>, des <strong>media queries</strong> et des <strong>CSS3 transitions</strong>.</p>
<p><img class="alignnone size-full wp-image-2307" title="Off-canvas Jason Weaver" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/offcanvas-jasonweaver.jpg" alt="Off-canvas Jason Weaver" width="550" height="365"></p>
<p>Sur les résolutions les plus étroites, une seul volet apparaît. Sur des résolutions supérieures, deux volets apparaissent pour finalement dévoiler les trois volets sur des résolutions «&nbsp;desktop&nbsp;».</p>
<h3>Off-canvas avec&nbsp;jPanelMenu</h3>
<p>Les loisirs d’Anthony Colangelo n’ont rien en commun avec ceux de la plupart d’entre nous. En tant que développeur, il aime travailler sur de nouveaux projets jQuery et les partager avec le plus grand nombre sur son profil&nbsp;Github. Son dernier bébé se nomme <a title="jpanelmenu.com" href="http://jpanelmenu.com/" target="_blank">jPanelMenu</a>. Il s’agit d’un plugin jQuery créé pour imiter le comportement de nombreuses applications iOS et Android en matière de navigation : un panel contenant la navigation accessible via les trois barres symbolisant l’accès au menu.</p>
<p><img class="alignnone size-full wp-image-2308" title="Off-canvas jPanelMenu" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/offcanvas-jPanelMenu.jpg" alt="Off-canvas jPanelMenu" width="550" height="329"></p>
<p>Cette navigation off-canvas est particulièrement bien adaptée pour les approches responsive. Colangelo recommande l’utilisation du plugin jQuery&nbsp;jRespond afin de contrôler l’activation du off-canvas en fonction des points de rupture.</p>
<h2>Quelques mots pour conclure</h2>
<p>Je pense que la mise en page off-canvas est une approche pertinente pour la réalisation d’un site mobile. Elle permet de lutter efficacement contre la verticalité des pages sur mobile en relayant hors-écran les sections secondaires au contenu tel qu’un menu de navigation ou une sidebar. Inséré au sein d’une approche responsive, le off-canvas permet de bénéficier d’un ajustement progressif. Sur les résolutions les plus grandes, le contenu hors-écran devient visible pour l’utilisateur et accessible sans qu’aucune action ne soit requise.</p>
