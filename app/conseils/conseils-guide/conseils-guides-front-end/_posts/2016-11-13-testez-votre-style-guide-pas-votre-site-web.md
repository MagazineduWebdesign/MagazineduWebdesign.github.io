---
layout: "conseils-default"
title: "Testez votre style guide, pas votre site Web"
date: "2016-11-13 00:23:57"
path1: "conseils"
path2: "guides"
path3: "front-end"
category: "guides"
tags: "guides-front-end"
sponsored: "true"
by: "MDW + Browserling"
by-url: "https://www.browserling.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign"
intro: "Les tests de navigateurs sont des tests d'intégration pour les fonctionnalités côté client, c'est-à-dire tout ce qui se passe dans un navigateur Web. Lorsque je conçois un nouveau site Web, j'utilise généralement des tests manuels pour optimiser les fonctionnalités et le design en frontend. Cela implique d'ouvrir l'URL du site à tester dans un ou plusieurs navigateurs et d'interagir avec la page. Cette approche des tests multi-navigateurs est chronophage. Le style guide frontend s'avère être une solution idéale pour réduire le temps de test d'un site Internet. Voyons ensemble pourquoi."
description: "En tant que développeur frontend, découvrez les avantages d'utiliser un style guide pour les tests de site Web multi-plateformes et multi-navigateurs. Plus bonus outil gratuit."
carte-optin-downoload-pdf: "false"
---

## Le style guide frontend

Pour un designer, un style guide – ou guide de style en français – est un document centralisant les éléments de design composant une application ou un site Web : la navigation, les blocs de textes et d'images, les boutons, les liens texte, etc. Il peut prendre la forme d'un document PDF, d'une image ou d'un page HTML disponible en ligne.

La première version du style guide est généralement produite par le designer puis est mise en scène via un document Web par un développeur frontend. Pour cela, on utilise généralement les langages HTML, CSS et JavaScript. On peut alors identifier ce document comme un style guide frontend.

{% include components/content-post-default-figure-image.html param="salesforce-style-guide-frontend.jpg" %}

Le style guide sert de point de référence afin de s'assurer que le système de design est cohérent avec l'identité graphique du projet. Il permet également de conserver une homogénéité pour les caractéristiques de chaque composant de design : tailles de police, couleurs, marges externes et internes, etc.

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}

### Une approche différente du design

Ce document facilite la communication entre différents acteurs d'un projet en délimitant un périmètre précis pour l'aspect graphique et les interactions d'une application en ligne.

Outre l'aspect documentaire d'un guide de style, son emploi durant les tests frontend peut être source d'un gain de temps important. Et comme [l'explique la team design de Airbnb](http://airbnb.design/the-way-we-build/) , il permet d'approcher le design d'une manière différente. Je vous invite à explorer [Styleguides.io](http://styleguides.io) pour davantage de ressources sur l'emploi de style guide dans vos process de design.

{% include components/content-post-default-figure-image.html param="airbnb-the-way-we-build.png" %}

## L'avantage du style guide pour les tests de site Web

L'avantage ci-dessous est valable uniquement si le guide de style est à jour et que chacun des composants de design listé au sein du guide ne dépend pas d'autres éléments pour assurer un rendu final stable. Et ce dans n'importe quel contexte d'utilisation.

Par exemple, un bouton doit être fonctionnel d'un point de vue esthétique et technique aussi bien dans un bloc de texte qu'au sein d'une barre de navigation. Chaque composant doit donc être autonome et compatible avec tous les usages autorisés par l'interface à laquelle il appartient. [Brad Frost](https://twitter.com/brad_frost) propose une excellente définition concernant l'autonomie et la compatibilité des composants de design. Je vous conseille vivement de lire son livre [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) pour en apprendre plus.

{% include components/content-post-default-figure-image.html param="brad-frost-atomic-design.png" %}

### Un seul écran pour les contrôler tous

En partant de ce principe, l'avantage est d'être en mesure de tester la quasi totalité des interfaces d'un site Web via une seule URL. D'un simple scroll vertical, il est possible de visualiser le rendu et le fonctionnement de tous les éléments composant une interface.

### La fin des scénarios de tests multi-écrans

Une deuxième conséquence positive de l'emploi d'un style guide est la réduction du temps dédié à l'écriture de scénarios de tests. Avec un guide de style, il n'est plus nécessaire de définir les chemins de navigations à emprunter pour vérifier l'aspect et le comportement de l'ensemble des composants de design disséminés sur des dizaines de pages Web.

### Des tests de sites Web responsives plus rapides

La troisième conséquence est la réduction du temps pour les tests responsives. Nul besoin de changer d'appareils et de résolutions d'écran sur une multitude d'URLs. Avec une seule page – votre style guide – vous pouvez tester le comportement responsive de tous vos composants de design. Cela représente une réduction drastique du nombre de manipulations nécessaires lors des tests.

### Les alliés d'un style guide pour les tests multi-plateformes et multi-navigateurs

L'investissement en temps et en matériel pour effectuer les tests frontend d'un site Web peuvent s'avérer très lourd. Le style guide est un premier pas vers plus d'efficacité. Néanmoins, il ne supprime pas pour autant la nécessité de configurer un environnement de tests multi-plateformes et multi-navigateurs.

Il existe heureusement des services qui peuvent vous aider à tester un site Web sur de nombreux navigateurs de manière interactive ou via des captures d'écran.

## Browserling – Test interactif en direct sur des dizaines de navigateurs Web

J'ai souhaité donner une chance à l'outil de test en ligne [Browserling](https://www.browserling.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) afin d'être en mesure de vous présenter ces avantages et le gain de temps qu'il promet.

{% include components/content-post-default-figure-image.html param="browserling.jpg" %}

Voyons ensemble ce qu'il offre pour le test d'un style guide ou d'un site Web complet.

- Live testing : possibilité de tester une interface en direct peu importe si votre projet est en ligne ou en local grâce au [reverse-proxy utilisant la techno SSH](https://www.browserling.com/local-testing). Vous pouvez interagir avec les navigateurs en direct comme s'ils étaient installés sur votre ordinateur ;
- Des versions de navigateurs authentiques tournant sur d'authentiques versions d'OS. [Browserling](https://www.browserling.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) exécute les navigateurs sur ses serveurs via des machines virtuelles. Ils n'utilisent pas d'émulateurs ;
- Les dernières versions de navigateurs sont automatiquement disponibles des leur sortie officielle ;
- Aucune installation de plugins n'est nécessaire pour accéder au service et l'utiliser en toute sécurité et de manière anonyme.

Les offres payantes permettent de déverrouiller vos navigateurs préférés tels qu'Internet Explorer 6, 7, 8, 10, 11 et également des tunnels SSH, des changements de résolution, des captures d'écran, un explorateur de bugs et un support client premium.

{% include components/content-post-default-figure-image.html param="internet-explorer-joke-firefox-browserling-comic.png" %}

Le premier prix commence à [17 EUR](https://www.browserling.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) par mois d'utilisation mais grâce au Magazine du Webdesign, vous bénéficiez de 25% de réduction avec le code promo [MDW25](https://www.browserling.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign). Vous pouvez annuler votre abonnement quand bon vous semble.

Browserling offre une multitude d' [outils](https://www.browserling.com/tools) et d' [extensions](https://www.browserling.com/extensions) pour faciliter la vie des développeurs. Je vous invite à tester par vous même les gains de productivité que vous pourrez obtenir avec ce service. Et si vous avez 2 min en plus, je vous conseille la lecture de leur [web-série illustrée](https://comic.browserling.com/) sur le quotidien des développeurs.

{% include components/content-post-default-figure-image.html param="big-bang-before.png" %}

## Style guide + Browserling = ❤

Le style guide en ligne est une réelle avancée pour tester de multiple composants de design sur un unique écran. D'un simple scroll, les compatibilités navigateur et OS peuvent être détectées.

Le style guide couplé à un service tel que [Browserling](https://www.browserling.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) est un avantage important pour gagner du temps sur les plannings de tests frontend multi-navigateurs et multi-plateformes d'un site Internet.

N'hésitez pas à partager vos questions sur Twitter avec la mention @MagDuWebdesign.

---

Si vous avez apprécié cet article, vous pourriez être intéressé(e) par

- les [avantages de l’intégration continue pour le développement d’applications mobiles](http://www.magazineduwebdesign.com/conseils/guides/integration-continue-application-mobile/) ;
-  [Comment passer moins de temps à tester votre site Internet ?](http://www.magazineduwebdesign.com/conseils/guides/comment-passer-moins-de-temps-a-tester-votre-site-internet/).

Un grand merci à [Browserling](https://www.browserling.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) pour avoir sponsorisé la rédaction de cet article. Si vous souhaitez faire connaître vos produits et vos services, consultez la page [Sponsors](http://www.magazineduwebdesign.com/sponsors/).

— [Guillaume du Magazine du Webdesign](https://www.linkedin.com/in/gpalayer).
