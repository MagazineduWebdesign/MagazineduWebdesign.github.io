---
layout: "conseils-default"
title: "Intégration continue – développez votre application mobile 200 fois plus vite"
date: "2016-07-21 00:23:57"
path1: "conseils"
path2: "guides"
path3: "developpement"
category: "guides"
tags: "guides-developpement"
sponsored: "true"
by: "MDW + Greenhouse CI"
by-url: "https://greenhouseci.com/?ref=magazineduwebdesign"
intro: "Découvrez comment l’intégration continue, et le process de travail qui va de pair, peut aider votre équipe à développer une application mobile plus rapidement et ainsi obtenir un avantage commercial majeur sur les app stores."
description: "L'intégration continue (CI : Continuous integration) est un ensemble de pratiques et d’outils de développement qui peuvent vous aider à créer plus rapidement une meilleure application pour vos utilisateurs."
carte-optin-downoload-pdf: "false"
---

Dans son rapport 2015, Puppet Labs conclut que les équipes ayant embrassé les méthodologies [Devops](https://fr.wikipedia.org/wiki/Devops) – dont l’intégration continue constitue un élément central – déploient leur code **30 fois plus fréquemment** et **200 fois plus vite** que les équipes n’ayant pas mis en place ce type de pratiques. Elles rencontrent également 60% moins d’erreurs et trouvent des solutions **168 fois plus vite** – [source](https://puppet.com/resources/white-paper/2015-state-devops-report).

Voici ce que vous apprendrez dans cet article :

- Qu'est-ce que l'intégration continue ?
- Pourquoi devrais-je adopter un processus d’intégration continue et quels sont ses avantages ?
- Quels sont les bénéfices des plateformes cloud d’intégration continue ?

## Qu'est-ce que l'intégration continue ?

L'intégration continue (CI : Continuous integration) est une approche du développement qui favorise les tests et le reporting de changements sur une base de code en temps réel. Cela signifie que chaque nouvelle intégration de code est vérifiée automatiquement par des scénarios de test afin de détecter le plus rapidement possible les erreurs.

L’objectif de l’intégration continue pour des applications mobiles est d’établir un système de feedback rapide et pertinent qui permettra aux développeurs de corriger ou d’adapter les intégrations à une application au fur et à mesure de son développement. Le bénéfice à court terme est une réduction significative des problèmes de compatibilité et la garantie d’offrir une expérience utilisateur irréprochable grâce à des mises à jour stables.

A l'origine utilisée pour le développement de logiciels standards, l'intégration continue (CI) a connu une importante adoption pour le développement d’applications mobiles. La CI est fortement associée à des pratiques automatisées de construction et de test. Le but est de construire le logiciel ou l'application à chaque fois qu'une modification est appliquée, afin de détecter et confirmer les erreurs d'intégration lorsqu’elles se produisent. Par construction, il faut entendre processus de compilation, d’inspection, d'essai et de déploiement des nouveaux segments intégrés au code source pour prouver que tout fonctionne parfaitement.

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}

Ce process d’intégration et de déploiement continu nécessite des outils et des services. A la lecture de cet article, vous en découvrirez un certain nombre, dont la plateforme <a onclick="ga('send', 'event', 'Publicite', 'click', 'Greenhouse CI post');" href="https://greenhouseci.com/" title="plateforme cloud d'intégration continue pour le développement d'applications mobiles" target="_blank" rel="nofollow">Greenhouse CI</a>, particulièrement adaptée au développement d’applications mobiles.

## Pourquoi devrais-je adopter un processus d’intégration continue et quels sont ses avantages ?

Les échecs sont inévitables, mais vous avez le contrôle sur la vitesse à laquelle vous les détectez. La rapidité avec laquelle vous affrontez l'échec peut être la différence entre la position de leader du marché et le peloton essayant de rattraper l’échappée. C’est une des raisons pour laquelle l’intégration, le développement continu et le mouvement Devops ont gagné tellement d’ampleur ces dernières années.

### Inspection de votre process de développement actuel

Examinons de près votre équipe de développement. La plupart des équipes de développeurs – même dans les startups agiles – ont une profonde peur du changement. Cette peur peut paralyser votre productivité et votre agilité.
Le changement n’est parfois pas le bienvenu dans une équipe de développeurs. Ils préféreront faire avec les obstacles, les frustrations et les pertes de temps tant qu’il leur sera permis de le faire. La routine, c’est sacrée !

Vous avez peut être déjà connu une de ces situations :

- Combien de temps faut-il à votre équipe d’ingénieurs pour corriger une erreur et expédier une solution de qualité en production ?
- Votre équipe n’a-t-elle jamais eu à faire des correctifs en direct sur le code en production ?
- Est-ce que tout c’est bien passé ?
- Votre équipe peut prototyper et tester en production une refonte majeure de l'interface utilisateur en direct sans perturber l'expérience de tous vos utilisateurs ?
- Avez-vous déjà attendu des semaines ou des mois pour des changements simples avant qu’ils ne soient disponibles pour vos utilisateurs finaux ?

Imaginons maintenant une alternative à ce process :

- Les erreurs en production peuvent être résolues en moins de 24 heures, sur un rythme régulier et avec un risque proche de zéro.
- Presque toutes les erreurs sont détectées avant qu’elles aient une chance de gêner les utilisateurs.
- Les nouvelles fonctionnalités peuvent être activées et désactivées, testées en toute sécurité, et progressivement déployées en production.
- En parallèle des modifications apportées au code en production, toutes les métriques clés du produit sont suivies en temps réel, afin d’être en mesure de suivre l'impact des changements sur les résultats de votre entreprise.

Lequel des deux scénarios préférez-vous ?

<figure class="figure-img mod-note-img">

    <img data-interchange="[https://s3-eu-west-1.amazonaws.com/mdw-images/small/tumblr_inline_o91sd7DrzA1raprkq_500.gif, (small)],[https://s3-eu-west-1.amazonaws.com/mdw-images/medium/tumblr_inline_o91sd7DrzA1raprkq_500.gif, (medium)],[https://s3-eu-west-1.amazonaws.com/mdw-images/large/tumblr_inline_o91sd7DrzA1raprkq_500.gif, (large)]" class="note-container-img" alt="Le déploiement qui se déroule à la perfection" width="auto" height="auto" />
    <noscript><img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/tumblr_inline_o91sd7DrzA1raprkq_500.gif" alt="Le déploiement qui se déroule à la perfection" width="auto" height="auto" /></noscript>

  <figcaption>Le déploiement qui se déroule à la perfection.</figcaption>
</figure>

Afin d’arriver à ce type de pratique, une équipe de développement doit faire des choses qui vont à l’encontre de ses plus profondes convictions. Et ce n’est pas par manque de bon sens. Une équipe de développement ne fera aucun changement si elle ne se sent pas autorisée à le faire. La plupart du temps, l’immobilisme vient du fait que l’optimisation d’un workflow n’est pas perçue comme prioritaire à court terme. Et la responsabilité revient non pas à l’équipe de développeurs mais au lead. Une équipe de développement doit sentir le soutien de ses managers pour investir dans des process efficaces. Si aucun temps n’est alloué à l’optimisation des environnements et des workflows, l’amélioration ne peut avoir lieu.

Un lead efficace doit encourager son équipe à tester et innover dans de nouvelles pratiques de développement en lui allouant les ressources nécessaires.

Votre équipe a besoin de temps pour écrire des tests automatisés pour chaque fonction et chaque correction. Si vous n’automatisez pas la vérification de la qualité du code (QA), vous passerez la plupart de votre temps sur de la QA manuelle avec un comportement de sapeur-pompier en perpétuelle opération anti-incendie. L’automatisation de la QA est un des fondement de l’intégration continue. Si vous ne le faite pas, vos concurrents innovants prendront vite le pas sur vous.

Cela peut paraître comme un frein à la productivité de l’équipe à court terme, mais les effets à long terme d’une automatisation de workflow sont bénéfiques.
Quelques lignes supplémentaires de code apportent une stabilité à votre produit et à vos process de travail. Même si cela prend plus de temps de développer une nouvelle fonctionnalité et les tests associés, les gains sur votre productivité sont étonnants. Un investissement dans la stabilité et l'automatisation est un pas vers plus d'agilité.

Arrêtez de perdre votre temps de développement à éteindre les incendies. Concentrez-vous sur le développement de votre application. Encouragez votre équipe à automatiser votre workflow et à composer avec les autres bonnes pratiques d’intégration continue.

Éliminer la peur et votre vitesse de déploiement croîtra de manière exponentielle. L’impact sera d’autant plus grand si votre équipe de développeurs est amenée à grandir. Cela ne serait d’ailleurs pas étonnant si vous intégrer très tôt dans votre croissance les bonnes pratiques de l’intégration continue. Un gage de succès pour la suite. A chaque fois qu’une opportunité d’amélioration se présente, sautez sur l’occasion !

## Quels sont les avantages des plateformes cloud d’intégration continue ?

### Solution autogérée vs dans le cloud

En parlant de bonnes pratiques, une des premières à adopter est le fait de déterminer quel type de CI sélectionné : hébergée dans le cloud ou autogérée sur vos serveurs. Cette décision dépend entièrement du degré de contrôle que vous souhaitez sur votre solution de CI.

### Solution autogérée pour l'intégration continue des applications mobiles

Les solutions de CI autogérée (serveur en interne au sein de votre organisation) comportent l’avantage d’offrir une grande souplesse dans leur fonctionnement. Il existe des centaines de hooks, de triggers et d’intégrations qui permettent d’automatiser avec une grande flexibilité un nombre important de tâches au sein de votre environnement de développement.

Un autre avantage est l’autonomie gagnée par rapport à une solution de CI dans le cloud. Si la plateforme en ligne met la clé sous la porte ou est achetée, vous aurez des garanties limitées sur l’avenir de votre outil de travail. Avec les solutions de serveurs sur site, la plupart offrent un service de migration – un gage de sécurité en cas d’événement imprévu. Exemple avec Bamboo, la solution de serveur d’intégration continue d'Atlassian, qui offre une option pour migrer votre configuration Jenkins.

Votre écosystème interne d’outils est également une bonne raison de choisir une solution de CI autogérée – plus vous aurez de contrôle sur votre serveur CI, plus il sera facile pour vous de créer et de manager vos outils internes et votre environnement de build.

Une solution autogérée est généralement plus évolutive qu'une solution cloud. Vous êtes le seul mettre des ressources humaines et techniques attribuées à la configuration et à la personnalisation de votre système d’intégration continue. L’unique inconnue reste la maintenance à long terme qui peut se révéler importante.

### Les plateformes cloud pour l’intégration continue des applications mobiles

L'un des principaux arguments de vente des solutions de CI hébergées est la facilité avec laquelle vous pouvez commencer à travailler, contrairement aux solutions autogérées qui demandent beaucoup de temps et d'efforts pour la configuration. Comme tout système interne, les bénéfices d’un serveur de CI autogérée ne sont pas immédiatement visibles. En revanche, avec des solutions hébergées, vous voyez généralement des gains immédiats de productivité et de contrôle sur la qualité, car tout est déjà pré-configuré ou requiert une configuration minime. Toutefois, si d'autres fonctionnalités sont souhaitées par une équipe de développeurs, elle devra attendre que la plateforme de CI innovent pour en bénéficier.

Un autre point positif des solutions de CI hébergées est le fait qu’elles ont investi beaucoup plus d'efforts dans les problématiques de design. Leurs interfaces sont faciles à prendre en main. Ce qui n’est pas forcément le cas des solutions autogérées.

<figure class="figure-img mod-note-img">
  <a onclick="ga('send', 'event', 'Publicite', 'click', 'Greenhouse CI post');" href="https://greenhouseci.com/" title="plateforme cloud d'intégration continue pour le développement d'applications mobiles" target="_blank" rel="nofollow">
    <img data-interchange="[https://s3-eu-west-1.amazonaws.com/mdw-images/small/product_screenshot_2_build_list.png, (small)],[https://s3-eu-west-1.amazonaws.com/mdw-images/medium/product_screenshot_2_build_list.png, (medium)],[https://s3-eu-west-1.amazonaws.com/mdw-images/large/product_screenshot_2_build_list.png, (large)]" class="note-container-img" alt="plateforme cloud d'intégration continue pour le développement d'applications mobiles" width="736" height="auto" />
    <noscript><img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/product_screenshot_2_build_list.png" alt="plateforme cloud d'intégration continue pour le développement d'applications mobiles" width="736" height="auto" /></noscript>
  </a>
  <figcaption>Interface de Greenhouse CI.</figcaption>
</figure>

En parallèle d’un effort constant sur l’UI design, les solutions hébergées ont depuis longtemps orienté leur roadmap vers le développement mobile. Certaines, comme Greenhouse CI, se concentrent exclusivement sur le build, le test et le déploiement d’applications mobiles iOS, Android, Cordova & Ionic.

Les avantages d’une solution de CI telle que <a onclick="ga('send', 'event', 'Publicite', 'click', 'Greenhouse CI post');" href="https://greenhouseci.com/" title="plateforme cloud d'intégration continue pour le développement d'applications mobiles" target="_blank" rel="nofollow">Greenhouse CI</a> sont nombreux et accessibles en un clic :

- La gratuité jusqu'à 2 dépôts publics ou privés ;
- Le support Android-Gradle, Xcodebuild, [Facebook Xctool](https://github.com/facebook/xctool), avec intégration complète de CocoaPods et Carthage ;
- L’automatisation des builds, des tests unitaires et d’UI à chaque commit ;
- Un historique des versions et l’hébergement des fichiers binaires ;
- L’intégration de TestFlight et de HockeyApp (et d'autres) ;
- La prise en charge des feature branches et des pull requests ;
- Et le tout nouveau support de [AWS Device Farm](https://aws.amazon.com/fr/device-farm/).

## Conclusion
Lors de l'examen d’une solution d'intégration continue, il existe de nombreux facteurs à considérer relatifs à vos objectifs et à la charge de travail de votre équipe. Comme on vient de le voir dans cet article, les bénéfices d’un outil de CI sont variables en fonction de votre choix : solution autogérée ou service de CI dans le cloud. En fonction de votre sélection, cela peut signifier un plus grand degré de sécurité, de personnalisation, de contrôle, plus de rapidité et de facilité dans la configuration, des gains immédiats en productivité et moins de dépendance sur votre expertise interne.

Néanmoins, peu importe la solution, l'automatisation reste la clés du succès. Elle doit être en mesure de produire les feedbacks nécessaires à la prise de décision pour déclencher les bonnes actions au moment opportun.

L’objectif visé : **l'amélioration continue.**

Si vous n'utilisez pas l'intégration continue, je vous encourage vivement à l'essayer. Si vous l'utilisez, il y a peut-être dans cet article quelques idées qui pourront la rendre plus efficace.

Les mesures que vous pouvez implémenter à court terme afin d’accélérer et stabiliser vos pratiques de développement :

- Réalisez des déploiements plus petits mais plus fréquemment ;
- Automatisez davantage vos étapes de déploiement ;
- Concevez votre environnement de travail comme du code en standardisant un maximum de configurations ;
- Implémentez un contrôle de version pour tous les segments de codes produits ;
- Créez des mécanismes communs pour le build et les tests en préproduction et en production.

Je vous invite à faire un point avec votre équipe concernant le choix d’une solution de CI autogérée sur vos propres serveurs ou disponible via le cloud.
Si vous avez besoin d’une solution immédiatement et que vous avez peu de ressources, optez pour une plateforme telle que <a onclick="ga('send', 'event', 'Publicite', 'click', 'Greenhouse CI post');" href="https://greenhouseci.com/" title="plateforme cloud d'intégration continue pour le développement d'applications mobiles" target="_blank" rel="nofollow">Greenhouse CI</a>.

<figure class="figure-img mod-note-img">
  <a onclick="ga('send', 'event', 'Publicite', 'click', 'Greenhouse CI post');" href="https://greenhouseci.com/" title="plateforme cloud d'intégration continue pour le développement d'applications mobiles" target="_blank" rel="nofollow">
    <img data-interchange="[https://s3-eu-west-1.amazonaws.com/mdw-images/small/product_banner-greenhouse.png, (small)],[https://s3-eu-west-1.amazonaws.com/mdw-images/medium/product_banner-greenhouse.png, (medium)],[https://s3-eu-west-1.amazonaws.com/mdw-images/large/product_banner-greenhouse.png, (large)]" class="note-container-img" alt="plateforme cloud d'intégration continue pour le développement d'applications mobiles" width="736" height="auto" />
    <noscript><img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/product_banner-greenhouse.png" alt="plateforme cloud d'intégration continue pour le développement d'applications mobiles" width="736" height="auto" /></noscript>
  </a>
  <figcaption>Greenhouse CI.</figcaption>
</figure>

Quelles sont vos impressions concernant l'intégration continue ? Partagez votre expérience sur le compte [Twitter](https://twitter.com/MagDuWebdesign) du Magazine du Webdesign.

Un grand merci à l’équipe Greenhouse CI pour leur appui concernant la rédaction de cet article.
