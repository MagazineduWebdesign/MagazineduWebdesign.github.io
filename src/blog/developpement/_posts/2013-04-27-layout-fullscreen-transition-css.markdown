---
title: Template fullscreen avec transition de page en CSS
date: 2013-04-27 17:22:56
category: "developpement"
tags:
- css3
- tutoriels
intro: Codrops propose une très sympathique démo d'un template fullscreen avec une transition de page en CSS.
image: FullscreenLayoutPageTransitions-569x309.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl: http://tympanus.net/codrops/2013/04/23/fullscreen-layout-with-page-transitions/
viatitle: Codrops
---

L’état initial du template se compose de 4 blocs flexibles. Au clic sur un des blocs, ce dernier s’étend pour occuper l’ensemble de l’écran tandis que les autres s’effacent dans un joli fade out. Lors de la fermeture du bloc, celui-ci revient à sa position de départ accompagné de ces trois autres compères.

Un autre type de transition est disponible dans la section « Works » où les items du portfolio sont consultables via un panel apparaissant par le bas de l’écran. La fermeture s’effectue dans un mouvement inverse à l’arrivée du panel, du haut vers le bas.

L’ensemble a été réalisé avec les propriétés CSS transitions et une surcouche JavaScript. Les templates sont fluides et quelques media queries ont été insérées pour adapter la taille des éléments aux petites résolutions.

La qualité des transitions est impressionnante sur Desktop. En revanche, les mobiles ne sont pas trop copains avec ce type d’animation (Test sur Nexus S/4 et tablette Windows). A contrôler sur iPhone, je n’ai pas pu tester. Si vous faîtes le test sur iOS, tenez-nous informés en commentant l’article.