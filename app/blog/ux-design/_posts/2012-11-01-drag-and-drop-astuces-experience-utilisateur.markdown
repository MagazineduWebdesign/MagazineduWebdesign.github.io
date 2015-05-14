---
title: Utilisabilité du Drag and Drop, astuces pour une meilleure expérience utilisateur
date: 2012-11-01 17:22:56
category: ux-design
tags: 
- ux
intro: Le drag and drop ou glissé-déposé est une interaction de plus en plus répandue au sein des interfaces graphiques. Cette technique imaginée par le PARC (Palo Alto Research Center) s'est immiscée sur tous nos terminaux fixes et mobiles. S'inspirant du monde réel, cette interaction offre à l'utilisateur la possibilité de déplacer des éléments graphiques présents à l'écran d'un endroit à un autre.
description:
image: drag-and-drop.jpg
image-legende:
keyword_title:
keyword_desc:
reference-name:
reference-title:
reference-url:
reference-02-name:
reference-02-title:
reference-02-url:
viaurl:
viatitle:
---

<p>Pratique et ludique, les actions du <strong>dragging</strong> et du <strong>dropping</strong> doivent néanmoins respecter certains principes d’<strong>utilisabilité</strong> afin de ne pas nuire à l’expérience globale de l’utilisateur. Cet article aborde les quelques règles à suivre pour les 4 phases du drag and drop : l’<strong>invitation</strong>, l’<strong>initiation</strong>, le <strong>déplacement</strong> et la <strong>validation</strong>.</p>
<h2>Invitation à dragger l’objet</h2>
<p>Chaque mécanisme permettant d’interagir avec une interface graphique doit être mise en évidence. L’utilisateur doit être averti de la <strong>possibilité de glisser un objet</strong> par une <strong>modification graphique</strong> de ce dernier ou par une <strong>transformation de l’aspect du curseur</strong>.</p>
<div id="attachment_1686" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1686" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/invitation-dragging.jpg" alt="invitation-dragging" width="555" height="242"><p class="wp-caption-text">Notifier à l’utilisateur l’alternative du drag and drop.</p></div>
<h3>★&nbsp;Recommandations</h3>
<ul>
<li><strong>Mise en surbrillance</strong> de l’objet au passage du curseur,</li>
<li>Modification de l’<strong>aspect du curseur</strong> lors de son passage sur un objet draggable,</li>
<li>Certaines interfaces proposent un <strong>tutoriel</strong> présentant les interactions autorisées lors de la première utilisation,</li>
<li>Dans la mesure du possible, informez l’utilisateur des possibilités d’interactions par une <strong>info bulle</strong> ou par des <strong>instructions</strong> directement dans la zone droppable,</li>
<li>Si l’utilisateur recompose une liste d’une manière autre que le drag and drop, il est souhaitable de l’<strong>informer</strong> de l’existence de l’alternative du glissé-déposé.</li>
</ul>
<h2>Phase du dragging</h2>
<p>L’utilisateur est maintenant clairement informé des possibilités de glissé-déposé. Il nous faut désormais le <strong>guider</strong> pas à pas durant l’interaction en lui donnant des informations sur son action de drag.</p>
<h3>Latence du dragging</h3>
<p>Initier le dragging que lorsque <strong>3 ou 4 pixels</strong> ont été parcourus par le curseur&nbsp;permettra à l’utilisateur de voir l’action ayant permis le déplacement de l’objet. De plus, cette latence lui évitera d’accomplir un acte non souhaité.</p>
<div id="attachment_1683" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1683" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/dragging-latence.jpg" alt="dragging-latence" width="555" height="242"><p class="wp-caption-text">Insérer un délai avant d’autoriser le déplacement de l’objet.</p></div>
<h3>Apparence de l’objet draggé</h3>
<p>L’utilisateur doit comprendre que son action de dragging est bien prise en compte par l’interface. Il est donc nécessaire de le lui <strong>notifier</strong> par une modification graphique de l’objet draggé.</p>
<p>Les options les plus courantes sont la mise en <strong>transparence</strong> de l’objet, la <strong>réduction</strong> de sa taille ou sa <strong>transformation</strong>.</p>
<p>Cette <strong>modification graphique</strong> de l’élément permet d’informer mais peut également faciliter son déplacement.</p>
<div id="attachment_1682" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1682" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/dragging-apparence-objet.jpg" alt="dragging-apparence-objet" width="555" height="274"><p class="wp-caption-text">L’apparence de l’objet informe de l’action de dragging en cours.</p></div>
<h3>Identité de l’objet</h3>
<p>Si une modification graphique de l’élément draggé est opérée, il est indispensable d’indiquer l’identité de cet objet dans un encart dédié. Et de préférence proche de l’objet. Si l’action porte sur un groupe d’objet, une indication de leur <strong>nombre</strong> est la bienvenue. L’utilisateur est alors avisé sur ce dont il agit.</p>
<div id="attachment_1688" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1688" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/nom-objet.jpg" alt="nom-objet" width="555" height="336"><p class="wp-caption-text">Donner une identité à l’objet draggé.</p></div>
<h3>Indication graphique de la zone droppable</h3>
<p>La <strong>zone de réception</strong> de l’objet ou drop doit être identifiée rapidement par l’utilisateur. Un standard de plus en plus commun aux interfaces graphiques est de délimiter la zone droppable à l’aide de <strong>pointillés</strong>.</p>
<div id="attachment_1690" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1690" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/zone-droppable.jpg" alt="zone-droppable" width="555" height="336"><p class="wp-caption-text">Indiquer la zone de réception via un texte ou un élément graphique.</p></div>
<h3>Grille de contraintes pour les déplacements d’objets</h3>
<p>Le terme <em>guider&nbsp;</em>prend tout son sens avec cette recommandation. Suivant la configuration de la zone de drop, il est parfois utile de <strong>baliser le mouvement</strong> de l’utilisateur afin de faciliter la réussite de son action. Cela peut se traduire par la mise en place de <strong>couloirs verticaux</strong> et <strong>horizontaux</strong> contraignant les possibilités de déplacement.</p>
<div id="attachment_1685" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1685" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/grille-dragging.jpg" alt="grille-dragging" width="555" height="336"><p class="wp-caption-text">Guider le déplacement des objets.</p></div>
<h3>Magnétisme</h3>
<p>La <strong>rapidité d’exécution</strong> est ce qui définit le glissé-déposé. Ne pas forcer l’utilisateur à positionner l’élément draggé de manière précise sur la zone de drop permet de <strong>fluidifier</strong> la conclusion de l’interaction. L’accomplissement de tâches répétées de drag and drop n’en sera que plus facile.</p>
<p>La <strong>proximité</strong> et la <strong>taille de la zone droppable</strong> est également très important. Plus la distance sera réduite entre les éléments draggés et la zone de drop, plus l’action sera réalisée facilement.&nbsp;C’est le principe de la <strong><a title="Loi de Fitts" href="http://fr.wikipedia.org/wiki/Loi_de_Fitts" target="_blank">loi de Fitts</a></strong>.</p>
<div id="attachment_1687" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1687" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/magnetisme-drop.jpg" alt="magnetisme-drop" width="555" height="336"><p class="wp-caption-text">Faciliter l’arrivée de l’objet sur la cible.</p></div>
<p>Voici un <a title="Buzz HTML5 audio démo" href="https://developer.mozilla.org/en-US/demos/detail/buzz-html5-audio-demo/launch" target="_blank">exemple d’interface</a> où l’insertion dans la zone de drop est complétée lorsque l’objet est à moins de 10 px de cette dernière.</p>
<h3>Autorisation du drop de l’objet</h3>
<p>Indiquez visuellement sur l’objet draggé si la zone de drop est valide ou non.&nbsp;Il est néanmoins plus intuitif d’informer dans un premier temps l’utilisateur sur ce qu’<strong>il peut faire plutôt que sur ce qu’il ne peut pas faire</strong>.</p>
<p>L’emplacement du curseur est le point de référence pour déterminer la <strong>position du drag</strong>. De cette manière, l’objet draggé n’activera pas inopinément la zone de drop.</p>
<div id="attachment_1684" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1684" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/drop-no-drop.jpg" alt="drop-no-drop" width="555" height="336"><p class="wp-caption-text">Annoncer ce que l’on peut et ne peut pas faire.</p></div>
<h3>★&nbsp;Recommandations</h3>
<ul>
<li>Insérer un <strong>laps de temps</strong> entre le clic et l’action de drag,</li>
<li><strong>Modifier l’apparence graphique</strong> de l’objet draggé,</li>
<li><strong>Identifier</strong> l’objet draggé,</li>
<li><strong>Indiquer</strong> la zone de drop,</li>
<li><strong>Guider</strong> le déplacement de l’objet,</li>
<li>Faciliter le drop de l’objet dans la zone de réception en veillant à la taille et à la proximité de cette dernière. <strong>Principes de la <a title="Loi de Fitts" href="http://fr.wikipedia.org/wiki/Loi_de_Fitts" target="_blank">loi de Fitts</a></strong>,</li>
<li><strong>Notifier</strong> à l’utilisateur les zones autorisées à recueillir des objets,</li>
<li>La <strong>position du drag</strong> doit être déterminée par l’emplacement du curseur,</li>
<li>Eviter le <strong>scroll</strong> de la page durant le dragging.</li>
</ul>
<h2>Phase du dropping</h2>
<p>La zone du drop est atteinte, l’utilisateur peut ainsi exécuter le drop de l’élément. L’informer lors de cette phase est primordial pour éviter toutes frustrations.</p>
<h3>Notification du drop</h3>
<p>Une notification par un <strong>texte</strong> ou un <strong>changement graphique</strong> de la zone de drop aidera l’utilisateur à savoir que son action a bien été validée.</p>
<div id="attachment_1689" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1689" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/notification-drop.jpg" alt="notification drop" width="555" height="228"><p class="wp-caption-text">Informer de la réussite de l’action de drop.</p></div>
<h3>Suppression des choix</h3>
<p>Laissez le choix à l’utilisateur de pouvoir <strong>annuler</strong> ou <strong>modifier</strong> son action de drop. L’utilisateur doit rester maître de ses choix.</p>
<div id="attachment_1681" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1681" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/Controle.jpg" alt="Controle" width="555" height="228"><p class="wp-caption-text">L’utilisateur doit conserver le contrôle sur chaque phase du drag and drop.</p></div>
<h3>★&nbsp;Recommandations</h3>
<ul>
<li><strong>Notifier</strong> à l’utilisateur la validation du drop,</li>
<li>Permettre la <strong>suppression</strong> ou la <strong>modification</strong> de son action.</li>
</ul>
<h2>Fournir un moyen alternatif au drag and drop</h2>
<p><strong>Le drag and drop est un raccourci</strong>, il ne doit pas être l’unique mécanisme en place. Une barre d’outils offrant les mêmes options que le drag and drop doit être mise à disposition.</p>
<div id="attachment_1693" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-1693" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/alternative-drag-and-drop.jpg" alt="alternative-drag-and-drop" width="555" height="274"><p class="wp-caption-text">Le drag and drop n’est qu’un raccourci.</p></div>
<h2>Conclusion</h2>
<p>Le drag and drop est un formidable outil ajoutant une touche d’interactivité aux interfaces graphiques. Sa principale qualité est la <strong>rapidité</strong> d’exécution de tâches nécessitant un nombre de clics élevé. Néanmoins, il doit être perçu comme un <strong>raccourci</strong> et non comme l’unique option disponible.</p>
<p>Sa mise en place ne doit pas se faire dans le seul but de réaliser un drag and drop. Sa nécessité doit être clairement établie. L’objectif est de faciliter l’interaction au moyen d’un outil plus <strong>direct et rapide</strong>.</p>
<p>Alors attention à l’effet SWEB… pardon, l’effet de mode :-)</p>