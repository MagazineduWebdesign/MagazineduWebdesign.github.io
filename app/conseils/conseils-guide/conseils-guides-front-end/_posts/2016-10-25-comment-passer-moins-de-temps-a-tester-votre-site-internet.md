---
layout: "conseils-default"
title: "Comment passer moins de temps à tester votre site Internet ?"
date: "2016-10-25 00:23:57"
path1: "conseils"
path2: "guides"
path3: "front-end"
category: "guides"
tags: "guides-front-end"
sponsored: "true"
by: "MDW + BrowseEmAll"
by-url: "http://www.browseemall.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign"
intro: "J'ai récemment participé à des tests manuels de comptabilité pour un site Internet sur l'ensemble des navigateurs Web du marché. Le constat : cette nécessité s'avère être une corvée, longue et fastidieuse. Il existe pourtant différentes approches pour réduire la douleur induite par les tests de navigateurs."
description: "Liste d'astuces pour améliorer l'efficacité de vos tests de compatibilité cross-browser."
carte-optin-downoload-pdf: "false"
---
{% include components/content-post-default-figure-image.html param="test-site-web-compatibilite-navigateur.jpg" %}

Voici une liste d'astuces pour améliorer l'efficacité de vos tests cross-browser. Que vous fassiez partie d'une importante équipe responsable d'un portefeuille de grands sites, ou que vous soyez seul au commande d'un projet sur les animaux de compagnie, j'espère que vous trouverez quelque chose utile pour votre quotidien.

## Une chose à retenir avant d'aller plus loin

 **La complexité de votre projet détermine la complexité de vos tests** . Assurez-vous d'adopter l'approche la plus simple dès le début de votre projet. Cela sera payant à long terme.

Les conseils de test listés ci-dessous peuvent être difficile à implémenter sur des projets existants. Je vous invite donc à les inclure le plus tôt possible dans votre réflexion lorsque vous débuterez un nouveau projet.

## Miser sur le traditionnel

Il est facile de se laisser emporter par la dernière technologie tendance, mais une partie importante de votre public utilisent des navigateurs plus anciens, moins performants. Il est préférable d'opter pour une approche bien établie pour tout le monde.

En utilisant les dernières fonctionnalités d'un navigateur à la mode, vous ouvrez une brèche à l'incohérence. Vous introduisez délibérément une variation multi-navigateurs. Choisissez les technologies que vous utilisez avec soin. Limitez votre choix de nouvelles fonctionnalités à celles qui auront le plus grand avantage pour l'utilisateur et qui seront supportées par l'ensemble des navigateurs du marché.

 **Liens utiles :**

-  [Les challenges de la détection](https://www.html5rocks.com/en/tutorials/detection/) — HTML5 Rocks ;
-  [Modernizr ](https://modernizr.com/) — Librairie permettant de détecter quelles sont les fonctionnalités HTML, CSS et JavaScript offertes par le navigateur de l'utilisateur ;
-  [StatCounter GlobalStats](http://gs.statcounter.com/) - Données d'utilisation des navigateurs par zones géographiques.

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}

## Un design simple

A quand remonte votre dernière rencontre avec un scroll parallaxe ? Ils se font de plus en plus rares, néanmoins ces gimmicks graphiques priorisant la forme au contenu se reproduisent à vive allure.

Heureusement, le récent regain d'intérêt pour les [systèmes de design](http://airbnb.design/building-a-visual-language/) met en évidence les avantages d'une approche cohérente et simple. La forme doit suivre la fonction et non l'inverse.

Faire du simple et du beau est plus facile à dire qu'à faire. Nous sommes tous tentés d'introduire de l'innovation dans nos projets. Néanmoins, rappelez-vous que la nouveauté engendre des risques en terme de compatibilité et donc plus de temps à passer pour tester.

Vous aurez toujours le temps d'innover sur votre projet après son lancement.

 **Liens utiles :**

-  [Airbnb design system](http://airbnb.design/building-a-visual-language/) ;
-  [Lean product design](https://pages.18f.gov/lean-product-design/) au sein du [18F](https://18f.gsa.gov/) .

## Réduire le nombre de composants de design

Au fil du temps, un projet a souvent tendance à prendre de l'ampleur et à développer un grand nombre de composants similaires mais avec des micro-variations, chacune avec leur propre intégration.

Ce sont ces variations qui augmentent de manière exponentielle le temps nécessaire pour tester et corriger les erreurs. De plus, le nombre important d'éléments accroît les chances qu'une modification est des répercutions non souhaitées sur d'autres éléments.

Un inventaire de votre design est le premier pas pour être en mesure de réduire le nombre de composants de votre projet et le temps nécessaire aux tests. Vous pouvez ensuite les répertorier au sein d'un [style guide](https://standards.usa.gov/) .

 **Liens utiles :**

- Exemple d'un [styles guide](https://standards.usa.gov/) ;
-  [Styleguide.io](http://styleguides.io/) – Articles et outils pour les styles guides.

## Tester son style guide en front

Le styles guide vous permet d'avoir une vue d'ensemble sur votre design. Il peut agir comme un guide de design documentant les modèles et les principes d'un design cohérent et partagé avec toute votre équipe projet. Mais il peut également servir comme guide de développement front end.

Mettre à l'épreuve votre styles guide au sein de différents navigateurs peut être un outil puissant pour vos tests.

Si vous n'avez pas encore de styles guide en HTML, pas de panique. Vous pourrez le construire pas à pas au fil des itérations sur votre projet.

 **Liens utiles :**

- Exemples de styles guide frontend : [AuthO](http://styleguide.auth0.com/) , [Salesforce](https://www.lightningdesignsystem.com/)

## Réduire le nombre de points de rupture

Moins de points de rupture (en anglais break points) au sein de votre design responsive engendre moins de variations et donc moins de tests à effectuer. Mais cela nécessite une étroite collaboration entre le design et le développement front end.

 **Liens utiles :**

-  [Utiliser les media queries](https://developer.mozilla.org/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries) – Mozilla ;
-  [Principes de base de la conception de sites Web adaptatifs](https://developers.google.com/web/fundamentals/design-and-ui/responsive/?hl=fr) – Google ;
-  [Crafting high-quality media queries](http://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/) – Brad Frost.

## Tester plusieurs navigateurs en même temps

De nombreux outils proposent de tester son site Internet sur différents navigateurs et différents OS. Il y a du gratuit et du payant. Un seul bémol : la plupart sont des solutions cloud avec des serveurs de tests aux U.S.

Ma connexion Internet transatlantique n'étant pas très en forme, j'ai opté récemment pour la solution de cross testing en local [BrowseEmAll](http://www.browseemall.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) .

 **Les avantages :**

- C'est super rapide – pas de cloud et pas de connexion transocéanique. Que du local ;
- 70 navigateurs disponibles y compris mobiles ;
- Live testing : possibilité de tester mes environnements de préprod et mes [localhost](http://localhost) en live ;

{% include components/content-post-default-figure-image.html param="browseemall-live-testing.png" %}

- Comparatif navigateurs : comparer jusqu'à 4 navigateurs côte à côte et synchronisés entre eux ;

{% include components/content-post-default-figure-image.html param="browseemall-compare-testing.png" %}

- Générateur de captures d'écran sur l'ensemble de la hauteur d'écran ;

{% include components/content-post-default-figure-image.html param="browseemall-screenshot-testing.png" %}

- Page analytics : rapport sur les potentielles sources d'erreurs HTML, CSS et JavaScript ;
- Support du framework de test Selenium.

La [licence BrowseEmAll](http://www.browseemall.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) est disponible au tarif de $249. Un prix plus que raisonnable par rapport à la concurrence (~28% moins cher) et le gain de temps. [**Faites le test**](http://www.browseemall.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) .

## Anticiper les problèmes avant de tester

Un grand nombre de bugs sont dus à des erreurs ou des problèmes communs en HTML, CSS ou JavaScript. Ces erreurs sont faciles à détecter. Au lieu d'attendre les tests manuels pour les trouver ou les découvrir par hasard au détour d'un clic, nous pouvons utiliser des outils pour les repérer en amont des tests.

Ces outils sont l'assurance que certains types d'erreur n'arriveront plus. Par conséquence, un gain de temps car vous n'aurez pas à les tester.

Voici quelques outils que j'utilise lorsque je suis en mode $dev :

### Code linters

-  [W3C Markup Validation Service](https://validator.w3.org/) – Test HTML via URL ou upload de fichiers ;
-  [HTML Tidy](http://www.html-tidy.org/) – Corrige et nettoie les fichiers HTML ;
-  [htmllint](https://www.npmjs.com/package/htmllint) – Test et nettoyage HTML5 ;
-  [CSS Lint](http://csslint.net/) – Test de qualité CSS ;
-  [stylelint](http://stylelint.io/) – Test de qualité CSS ;
-  [JSHint](http://jshint.com/about/) et [ESLint](http://eslint.org/) – Test de la qualité du code JavaScript ;

### Statistiques CSS

-  [Parker](https://github.com/katiefenn/parker/) – Outil d'analyses de feuilles de styles ;
-  [Spécificités CSS](http://csswizardry.com/2014/10/the-specificity-graph/) ;
-  [Générateur de vos spécificités CSS](https://jonassebastianohlsson.com/specificity-graph/) ;

### CSS prefix

-  [Bourbon](http://bourbon.io/) – Un jeu d'outils Sass léger ;
-  [LESS Elements](http://lesselements.com/) – Un ensemble de mixins pour LESS ;
-  [PostCSS](http://postcss.org/) – Un outil pour la transformation CSS ;
-  [Autoprefixer](https://github.com/postcss/autoprefixer) – Ajouter des préfixes aux propriétés CSS ;
-  [Emmet](http://emmet.io/) – Outil d'édition HTML et CSS ;

## Amélioration continue

Cette liste de conseils n'est qu'un aperçu de toutes les techniques pour améliorer vos tests de sites Internet. J'aborderai dans un prochain article l'automatisation des tests et les astuces pour tirer profit de votre style guide. Vous avez déjà de quoi faire avec les conseils listés ci-dessus.

### Quelle approche mettre en place en priorité ?

A vous de voir car chaque projet et chaque équipe est différente. A votre place, je parierais sur la simplification et la rationalisation de votre design, puis j’enchaînerais avec l'achat de la licence [BrowseEmAll](http://www.browseemall.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) . Non pas parce que c'est le [sponsor](http://www.magazineduwebdesign.com/sponsors/) de cet article, mais juste parce que le gain de temps en phase de test est énorme. Et le temps, c'est ce que j'ai de plus précieux.

Bref, faites une chose à la fois, observez ce qui fonctionne, répétez et améliorez.

Et si vous avez une équipe de support client, travailler avec eux pour comprendre les tendances dans les feedbacks utilisateurs et les tickets de support. Cela peut être une révélation en terme d'efficacité et de priorisation.

---

Si vous avez apprécié cet article, vous pourriez être intéressé(e) par [les avantages de l'intégration continue](http://www.magazineduwebdesign.com/conseils/guides/integration-continue-application-mobile/) pour le développement d'applications mobiles.

Un grand merci à [BrowseEmAll](http://www.browseemall.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) pour avoir sponsorisé la rédaction de cet article. Si vous souhaitez faire connaître vos produits et vos services, consultez la page [Sponsors](http://www.magazineduwebdesign.com/sponsors/) .

—Guillaume du [Magazine du Webdesign](http://www.magazineduwebdesign.com/) .
