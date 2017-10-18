---
layout: "conseils-default"
title: "Comment réaliser un audit d'accessibilité Web en 1h"
date: "2017-10-18 00:23:57"
path1: "conseils"
path2: "guides"
path3: "ux-design"
category: "guides"
tags: "guides-ux-design"
sponsored: "false"
metadata: "true"
by: "Guillaume"
by-url: "https://twitter.com/guillaumpalayer"
intro: "Optimiser l'accessibilité d'une application Web assure un accès universel à vos contenus et services. Un internaute doit être en mesure de consulter vos pages Web peu importe sa condition physique, psychique ou matérielle. Pour se faire, l'accessibilité Web impose le respect de standards pour mettre en page et baliser un site Web. Découvrez nos conseils et outils pour établir un diagnostic d'accessibilité Web en 60 minutes chrono."
description: "Apprenez à auditer votre site Web en moins d'une heure pour détecter les problèmes d'accessibilité Web."
carte-optin-downoload-pdf: "false"
image-no-cover-book: "accessibilite-web-audit-en-moins-1h.jpg"
canonical-url: "https://www.content-avenue.fr/journal/realiser-un-audit-daccessibilite-web-en-1h"
---

> La puissance du Web réside dans son universalité. Un accès pour tous, quelle que soit la déficience est un aspect essentiel.

— Tim Berners-Lee, créateur du [World Wide Web](https://home.cern/fr/topics/birth-web).

## Minute 1

### Le contraste des couleurs

Outre leurs qualités esthétiques, les couleurs ont une grande influence sur la structure d'un document. Par structure, il faut entendre lisibilité. Le contraste entre un texte et son arrière plan détermine en grande partie le confort de lecture.

En France, les troubles de la vision sont les atteintes sensorielles les plus fréquentes. Ils concernent trois personnes sur quatre âgées de plus de 20 ans et 97 % des plus de 60 ans ( [Ministères des solidarités et de la santé](http://drees.social-sante.gouv.fr/etudes-et-statistiques/publications/etudes-et-resultats/article/troubles-de-la-vision-sept-adultes-sur-dix-portent-des-lunettes) ). Bien que fréquents, ces troubles se corrigent facilement.

Néanmoins, d'autres handicaps visuels tels que les différents [daltonismes](https://fr.wikipedia.org/wiki/Daltonisme) sont le quotidien de nombreux internautes. Avoir connaissance du degré de contraste des couleurs sur vos pages Web est un premier pas pour obtenir une accessibilité au top.

Vous pouvez vérifier le contraste de vos palettes de couleurs avec les outils [Contrast ratio](http://leaverou.github.io/contrast-ratio/) et [Colorblind Web page filter](https://www.toptal.com/designers/colorfilter).

## Minute 15

### Le Web sémantique

Les internautes en mobilité réduite ou avec des troubles visuels utilisent régulièrement des [technologies d'assistance à la lecture](http://webaim.org/techniques/screenreader/). Ces outils interprètent la structure d'une page Web grâce à ses balises et attributs. C'est notamment le cas avec les balises headings servant à distinguer les titres des sous-titres au sein d'un contenu. Certains outils d'assistance à la lecture utilisent également l'imbrication des balises HTML5 section, article, header, footer et aside pour hiérarchiser les sections de contenus entre elles et en tirer du sens.

Pour contrôler la sémantique induite par le balisage et la hiérarchie de vos pages Web, utilisez les outils en ligne [HTML5 outliner](https://gsnedders.html5.org/outliner/) et [Wave](http://wave.webaim.org/). Pour en savoir plus sur le balisage et le Web sémantique, lisez les [recommandations du W3C sur l'accessibilité (WAI-ARIA)](https://www.w3.org/TR/wai-aria/) et cette [explication concernant la structure sémantique d'une page Web](http://www.magazineduwebdesign.com/html5-heading-structure-semantique-page-web/).

## Minute 45

### La navigation et les raccourcis clavier

L'utilisation de la touche Tabulation est le quotidien de nombreuses personnes sur le Web. Les navigateurs Web et lecteurs d'écran l'emploient pour parcourir les liens et contrôles de formulaires dans l'ordre où ils apparaissent au sein du code HTML. Elle constitue donc une alternative de navigation, à l'aide du clavier.

Pour tester la compatibilité de vos pages avec une navigation au clavier, appuyez à plusieurs reprises sur votre touche Tabulation (souvent abrégée en Tab). Si le focus sur les éléments HTML de type a, area, button, input, object, select et textarea ne suit pas un enchaînement logique, utilisez l'attribut tabindex. Il permet de modifier ce parcours naturel de navigation au clavier et restaurer une logique d'exploration. Rendez-vous sur [Mozilla Developer Network](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex) pour davantage d'informations sur l'utilisation de cet attribut.

## L'accessibilité Web au service de votre conversion

Améliorer l'accessibilité de votre application web vous permettra de toucher un public plus large tel que les seniors et toutes les personnes souffrant de troubles sensoriels. Une interface adaptée à leurs besoins peut augmenter significativement les conversions et la fidélisation de ces publics. Cela vaut bien 60 minutes d'audit :-).

## On en parle ?!

Avez-vous des commentaires, des questions, de l'amour ou de la haine ? Envoyez tout ça à guillaume@magazineduwebdesign.com. Si vous n'aimez pas les e-mails, envoyez un tweet à [@MagDuWebdesign](https://twitter.com/MagDuWebdesign).

## Ressources complémentaires

- [40 points à checker pour atteindre le nirvāṇa de l’accessibilité Web](http://www.magazineduwebdesign.com/accessibilite-web-ckecklist/) ;
- [Comment passer moins de temps à tester votre site Internet ?](http://www.magazineduwebdesign.com/conseils/guides/comment-passer-moins-de-temps-a-tester-votre-site-internet/) ;
- [les avantages de l'intégration continue](http://www.magazineduwebdesign.com/conseils/guides/integration-continue-application-mobile/) pour le développement d'applications mobiles ;
- [Testez votre style guide, pas votre site Web](http://www.magazineduwebdesign.com/conseils/guides/testez-votre-style-guide-pas-votre-site-web/).

Cet article a été publié à l'origine sur [content-avenue.fr](https://www.content-avenue.fr/journal/realiser-un-audit-daccessibilite-web-en-1h).

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}
