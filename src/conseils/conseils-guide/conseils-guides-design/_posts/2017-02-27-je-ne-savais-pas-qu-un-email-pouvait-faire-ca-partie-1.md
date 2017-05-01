---
layout: "conseils-default"
title: "Je ne savais pas qu'un email pouvait faire ça ! (Partie I)"
date: "2017-02-27 00:23:57"
path1: "conseils"
path2: "guides"
path3: "design"
category: "guides"
tags: "guides-design"
sponsored: "true"
by: "MDW + Sarbacane"
by-url: "https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign"
intro: "Voici quelques astuces pour optimiser le design d'email et impressionner vos collègues avec la classe de [Salt Bae](https://www.instagram.com/p/BO9dI9ujWNI)."
description: "Astuces oour afficher un logo d'expéditeur dans Gmail & Inbox by Gmail, afficher un élément en position fixe, insérer un texte de preheader non visible par l'utilisateur, etc."
carte-optin-downoload-pdf: "false"
image-no-cover-book: "salt-bae.gif"
---
Je publierai la semaine prochaine une [seconde partie](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-2/) avec de belles innovations pour [designer un template e-mail](http://www.magazineduwebdesign.com/conseils/guides/design-d-email-comment-innover-en-2017/). L'objectif est de vous apporter des solutions simples et élégantes en prenant en compte toutes les contraintes que l'on connait au secteur. J'ai sélectionné des approches qui permettent d'innover sans nécessiter de lourds investissements en développement ou en configuration.

## Au programme

1. **Afficher un logo d'expéditeur dans Gmail & Inbox by Gmail** ;
2. **Accompagner l'objet avec un texte de description/preheader fantôme** ;
3. **Afficher un élément en position fixe dans un email** ;
4. **Proposer un bouton d'action directement depuis la boîte de réception** ;
5. **[Lire une vidéo dans un email](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-2/) (disponible dans la partie II)** ;
6. **[Insérer un bouton centré dans un email](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-2/) (disponible dans la partie II)** ;
7. **[Supprimer l'icône de téléchargement de l'image dans Gmail](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-2/) (disponible dans la partie II)** ;
8. **[Expérimenter avec les Web Fonts](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-2/) (disponible dans la partie II)**.

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}

## 1. Afficher un logo d'expéditeur dans Gmail & Inbox by Gmail

Le moyen le plus rapide pour sortir du lot parmi les dizaines d'emails reçus chaque jour par vos lecteurs. Google offre la possibilité d'afficher votre logo ou une photo de profil à côté du nom d'expéditeur.

{% include components/content-post-default-figure-image.html param="logo-du-magazineduwebdesign-dans-inbox-by-gmail.png" %}

**Note** : j'ai investi 6 mois pour faire fonctionner cette astuce. C'est pour cette raison que je la mets en première position #Fier #PasDoué.

**How-To** : Gmail en mode grille et Inbox by Gmail affichent l'avatar utilisé sur la page Google+ de l'expéditeur. Plusieurs conditions sont à réunir :

- L'adresse email de l'expéditeur doit correspondre à celle avec laquelle la page Google+ a été créée.
- La page Google+ doit être une [page vérifiée](https://support.google.com/business/answer/4569085?hl=fr).
- Les e-mails doivent être authentifiés en utilisant les méthodologies [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) (Sender Policy Framework) ou [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) (DomainKeys Identified Mail). SPF spécifie quels hôtes sont autorisés à envoyer des messages à partir d'un [domaine](http://www.magazineduwebdesign.com/conseils/guides/comment-obtenir-son-nom-de-domaine-gratuit-extension-design-et-impact-seo/) donné en créant un enregistrement SPF. DKIM permet à l'expéditeur de signer électroniquement les e-mails légitimes d'une manière qui peut être vérifiée par les destinataires en utilisant une clé publique. La plupart des fournisseurs de services pour gérer des campagnes email proposent la possibilité de personnaliser les SPF et DKIM via l'interface d'administration du compte utilisateur.
- Pour savoir le SPF et le DKIM de vos campagnes, ouvrez le menu déroulant situé à droite de l'email dans Gmail ou Inbox et cliquez sur Afficher l'original.

{% include components/content-post-default-figure-image.html param="SPF-et-DKIM-de-la-gazette-du-MDW.jpg" %}

**Note** : j'ai testé différentes approches pour optimiser mon taux d'ouverture. La photo de profil est un bon moyen de proposer un visage plus humain aux emails envoyés tout en optimisant l'ouverture.

J'ai remarqué que Google n'applique pas immédiatement les changements d'avatars dans les boîtes de réception. C'est pour cela que certains abonnés de la [newsletter du Magazine du Webdesign](http://eepurl.com/bi0Uub) aperçoivent le logo du MDW à la place de ma photo de profil. Certainement une histoire de mise en cache.

## 2. Accompagner l'objet avec un texte de description/preheader fantôme

Le moyen le plus rapide d'augmenter votre taux d'ouverture sans polluer le corps de votre [template email](http://www.magazineduwebdesign.com/conseils/guides/design-newsletter-7-hacks-pour-des-emails-qui-convertissent/). De nombreux clients email affichent un texte supplémentaire à côté ou en-dessous de l'objet de l'email. Ils extraient pour cela le premier texte qu'ils trouvent dans le corps de l'email. On peut faire l'économie d'afficher ce preheader dans le corps de l'email avec une ligne de CSS.

{% include components/content-post-default-figure-image.html param="email-dans-boite-de-reception-avec-texte-de-preheader-apparent.png" %}

{% include components/content-post-default-figure-image.html param="email-ouvert-sans-texte-de-preheader-apparent.png" %}

## 3. Afficher un élément en position fixe dans un email

Le moyen le plus rapide d'augmenter le taux de clics d'une campagne email.

{% include components/content-post-default-figure-image.html param="position-fixe-dans-un-email.gif" %}

**How-To** : Email on Acid explique en détails le [process de création d'un email utilisant la position fixe](https://www.emailonacid.com/blog/article/email-development/tutorial-css-fixed-positioning-in-interactive-email) d'un élément pour enrichir l'interaction. Testez la position fixe avec la [démo 1](http://tacobell.mkt7706.com/breakfastjourneyA) et la [démo 2](http://freshinbox.com/examples/basketball-dunk/).

## 4. Proposer un bouton d'action directement depuis la boîte de réception

Le moyen le plus rapide d'augmenter son taux de clics sans nécessiter l'ouverture de l'email dans Gmail et Inbox by Gmail. Par exemple, lorsqu'un utilisateur reçoit une invitation à un événement, on peut lui présenter l'option de confirmation à partir de la boîte de réception.

{% include components/content-post-default-figure-image.html param="bouton-one-click-action-gmail-et-inbox-by-gmail.jpg" %}

**How-To** : Google propose différentes typologies d'actions : one-click, review, go-to, etc. La déclaration se fait via une structuration des données au format [JSON-LD ou MICRODATA](https://developers.google.com/gmail/markup/actions/declaring-actions). Condition supplémentaire : l'expéditeur de l'email doit être [digne de confiance](https://developers.google.com/gmail/markup/registering-with-google) aux yeux de Google.

## On en parle ?!

Avez-vous des commentaires, des questions, de l'amour ou de la haine ? Envoyez tout ça à guillaume@magazineduwebdesign.com. Si vous n'aimez pas les e-mails, envoyez un tweet à [@MagDuWebdesign](https://twitter.com/MagDuWebdesign).

Rendez-vous la semaine prochaine pour découvrir la 2ème partie de cette série d'articles.

## Supporté par Sarbacane

*Chez Sarbacane, notre approche de l'emailing nous pousse sans cesse à proposer les meilleurs outils essentiels à la réussite de vos projets. C’est pourquoi nous sommes fiers de soutenir MDW dans son effort pour défendre et promouvoir une large communauté de créateurs d'email.*

Sarbacane est l’application emailing de référence en France qui vous permet de :

- Gérer / nettoyer / corriger vos listes de contacts (+ connecteurs avec Wordpress, Magento, PrestaShop…) ;
- Créer des formulaires de collecte (responsives) ;
- Créer des emails (responsives aussi) facilement à partir des 250 templates gratuits fournis ou partir de zéro ;
- **Prévisualisez gratuitement vos emails** avant envoi dans les principales messageries.
- Envoyer via une plateforme de routage haute délivrabilité ;
- Obtenir des statistiques détaillées sur vos envois avec des infos inédites comme le **temps de lecture moyen** ;
- Et plus de [50 autres fonctionnalités à découvrir](https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) qui en font l’une des solutions les plus complètes du marché.

## Si vous avez apprécié cet article, vous pourriez être intéressé(e) par :

-  [Sources d'inspiration pour le design de templates email](http://www.magazineduwebdesign.com/conseils/guides/template-email-exemple-inspiration-design/) ;
-  [Je ne savais pas qu'un email pouvait faire ça ! (Partie II)](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-2/) ;
-  [Design d'email – Comment innover en 2017](http://www.magazineduwebdesign.com/conseils/guides/design-d-email-comment-innover-en-2017/) ;
-  [Design newsletter : 7 Hacks pour des emails qui convertissent](http://www.magazineduwebdesign.com/conseils/guides/design-newsletter-7-hacks-pour-des-emails-qui-convertissent/) ;
-  [Statistiques email 2017](http://www.magazineduwebdesign.com/conseils/guides/statistiques-email-2017/).

Prenez soin de vous. A bientôt — [@guillaumpalayer](https://twitter.com/guillaumpalayer).

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}
