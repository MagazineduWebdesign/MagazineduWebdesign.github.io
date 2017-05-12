---
layout: "conseils-default"
title: "L'erreur critique qui endommage la plupart de vos templates email"
date: "2017-05-12 00:23:57"
path1: "conseils"
path2: "guides"
path3: "design"
category: "guides"
tags: "guides-design"
sponsored: "true"
by: "MDW + Sarbacane"
by-url: "https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign"
intro: "J'ai écris cet article le 1er mai. Cette journée de repos m'a permis de faire le tri dans mes emails. La plupart sont des newsletters ou des notifications de réseaux sociaux. J'ai parcouru un à un ces emails afin de décider si je souhaitais encore leur accorder un espace dans ma boîte de réception. Le cerveau humain excelle dans la reconnaissance de répétitions, de modèles, de tendances. En parcourant ces emails, je me suis aperçu que certains critères favorisaient ma désinscription ou mon désintérêt.
<br><br>
J'ai même trouvé une erreur catégorie grosse bourde. Elle est signé Adidas et avait comme sujet la participation au marathon de Boston 2017, voir l'image ci-dessous. Je vous laisse imaginer la [réaction](https://twitter.com/anthonypierro5/status/854483263108370437/photo/1) des participants. Je n'ai pas trouvé d'autre erreur de niveau olympique. Néanmoins, j'en ai reperé quelques unes à ne pas reproduire dans votre template email."
description: "Analyse d'une erreur trop souvent commise dans un template email et conseils pour y remédier avec exemples à l'appui."
carte-optin-downoload-pdf: "false"
image-no-cover-book: "sarbacane-erreurs-design-template-email.jpg"
image: "sarbacane-erreurs-design-template-email.jpg"
---
## L'absence d'un texte de description personnalisé accompagnant l'objet de l'email

{% include components/content-post-default-figure-image.html param="exemple-de-texte-de-description-dans-inbox-by-gmail.jpg" %}

Qu'il soit caché ou visible dans le corps de l'email, le texte de description (parfois appelé preheader) est utilisé pour informer le récepteur du contenu de l'email. Les clients mail Web et natifs proposent souvent un texte de description à droite ou en-dessous de l'objet. Il permet de présenter de manière concise le contenu de l'email sans nécessiter son ouverture. Si cette description de l'email n'est pas personnalisée, le client mail sélectionnera les premiers mots qu'il trouve dans le template email.

Cela peut donner des résultats surprenant qui ne sont pas engageants pour le lecteur.

### Exemples de texte de description

**Moins engageant** :

-  *Si vous ne voyez pas cette newsletter correctement...*. Je n'ai aucune envie d'ouvrir une newsletter m'indiquant un problème en guise de bienvenue.

**Plus engageant** :

-  *Happy Friday :-)...* Un petit mot gentil et un smiley est tout ce dont j'ai besoin :-).

{% include components/content-post-default-figure-image.html param="exemples-texte-preheader-template-email.jpg" %}

### Les 5 erreurs courantes à éviter dans le texte de description d'un email

J'emploi le terme *Erreur* car cette description est un moyen sûr d'optimiser son taux d'ouverture. Au même titre que l'objet d'un email, il est primordiale de la travailler en évitant les 5 erreurs suivantes :

1. Répéter le nom de l'expéditeur. Exemple dans l'image ci-dessus (rouge) avec la répétition du terme *Finimize*.
2. Dupliquer le nom de la campagne emailing ou de la newsletter. Exemple dans l'image ci-dessus avec notre cher Tobias van Schneider.
3. Afficher la valeur de l'attribut `alt` de la première image disponible dans le template. Cela se produit si le client mail ne rencontre aucun texte en amont de l'image. Il considérera le contenu de l'attribut `alt` de la première balise `<img>` comme texte de description. Exemple dans l'image ci-dessus avec Long Tail Pro. Le terme *image* est issu de l'attribut `alt` appartenant au logo situé dans le corps de l'email.
4. Afficher un texte invitant à consulter l'email dans le navigateur. Une des erreurs les plus courantes.
5. Ignorer la limite de caractères (~80) pour le texte de description au sein de la boîte de réception et de la notification sur mobile. L'ellipse — les 3 petits points — peut créer des confusions chez vos lecteurs. Le blog [myemma.com](http://content.myemma.com/blog/10-essential-email-design-tips-from-justine-jordan) en a relevé quelques unes dans l'image ci-dessous.

{% include components/content-post-default-figure-image.html param="exemples-de-texte-de-description-preheader-email.png" %}

**Note** : découvrez [comment créer un texte de description invisible dans votre template email](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-1/) mais néanmoins pris en compte par les clients mail. Pratique pour ne pas surcharger votre design.

## Un template email avec une largeur fixe

J'ai un exemple parfait pour cette erreur : Voyages SNCF. Cela fait des années qu'ils m'envoient des moitiés d'email. La seule solution pour déchiffrer la partie droite de l'email est d'atteindre la barre de défilement horizontale située en bas du template. Cette solution fonctionne sur Inbox Desktop mais pas sur l'application mobile. Pour info, j'ai signalé le problème à leur support client. Mon message est resté sans réponse :-/.

{% include components/content-post-default-figure-image.html param="template-email-voyages-sncf.jpg" %}

### Comment en est-on arrivé là ?

Mes hypothèses pour reproduire cette erreur à domicile :

1. Vouloir à tous prix que son template email mime la mise en page de son site Web ;
2. Intégrer le template email à l'aide d'images. La bannière principale de l'email SNCF est composée de trois images distinctes avec une largeur supérieure à 1024 pixels ;
3. Exiger un nombre minimum de 5 colonnes dans le corps de l'email ;
4. Ignorer l'existence du responsive design et l'approche front-end qui en découle.

Plus sérieusement, je ne connais pas les contraintes de l'équipe email de Voyages SNCF. Néanmoins, les 4 points que je viens de citer sont une bonne manière de réduire à néant l'impact de vos emails.

### Comment sortir de ce problème ?

En prenant une bonne dose de GBS — Gros Bon Sens — et en lisant la suite.

Voyages SNCF fait partie de ces 80% d'entreprises qui n'ont pas embrassé le design responsive pour leurs templates email. Je vous indiquais dans mes [statistiques email 201](http://www.magazineduwebdesign.com/conseils/guides/statistiques-email-2017/) 7 qu'un template responsive pouvait augmenter de 24% le taux de clics.

Néanmoins, de nombreux clients email ne supportent pas les emails responsives. La solution est d'embrasser une approche légère du design. La plupart des emails sont ouverts sur mobile. Pourquoi vouloir afficher 3 colonnes de textes sur mobile ? Une seule colonne est suffisante sur mobile et desktop.

Cela facilitera le développement front-end et limitera les défauts d'affichage sur les clients mails les plus anciens. Ci-dessous, un exemple de template email composé d'une seule colonne.

{% include components/content-post-default-figure-image.html param="grammarly-template-email-1-colonne.jpg" %}

Il n'existe aucune corrélation entre le nombre de colonnes au sein d'un template email et la rentabilité d'une entreprise. Si votre manager ou votre client vous demande d'ajouter une rangée de 4 colonnes car la concurrence le fait, répondez-lui que malgré le nombre réduit de colonnes, Grammarly est un commerce florissant.

Une autre option est de recourir à des outils de routage proposant une compatibilité à 100% sur devices mobiles. A cet effet, [Sarbacane](https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) propose une collection de [templates email](https://www.sarbacane.com/template-emailing/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) compatibles mobile.

{% include components/content-post-default-figure-image.html param="email-builder-sarbacane.png" %}

## On en parle ?!

Avez-vous des commentaires, des questions, de l'amour ou de la haine ? Envoyez tout ça à guillaume@magazineduwebdesign.com. Si vous n'aimez pas les e-mails, envoyez un tweet à [@MagDuWebdesign](https://twitter.com/MagDuWebdesign).

## Supporté par Sarbacane

*Chez Sarbacane, notre approche de l'emailing nous pousse sans cesse à proposer les meilleurs outils essentiels à la réussite de vos projets. C’est pourquoi nous sommes fiers de soutenir MDW dans son effort pour défendre et promouvoir une large communauté de créateurs d'email.*

Sarbacane est l’application emailing de référence en France qui vous permet de :

- Gérer vos listes de contacts avec une compatibilité WordPress, Magento, PrestaShop ;
- Créer des formulaires responsives ;
- Créer des templates email responsives à partir de 250 composants gratuits. Vous pouvez également partir de zéro ;
- **Prévisualisez vos emails** avant envoi dans les principales messageries.
- Envoyer via une plateforme de routage haute délivrabilité ;
- Obtenir des statistiques sur vos envois avec des infos pratiques comme le **temps de lecture moyen** ;
- Et plus de [50 autres fonctionnalités à découvrir](https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) qui en font l’une des solutions les plus complètes du marché.

## Si vous avez apprécié cet article, vous pourriez être intéressé(e) par :

-  [Sources d'inspiration pour le design de templates email](http://www.magazineduwebdesign.com/conseils/guides/template-email-exemple-inspiration-design/) ;
-  [Je ne savais pas qu'un email pouvait faire ça ! (Partie I)](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-1/) ;
-  [Je ne savais pas qu'un email pouvait faire ça ! (Partie II)](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-2/) ;
-  [Design d'email – Comment innover en 2017](http://www.magazineduwebdesign.com/conseils/guides/design-d-email-comment-innover-en-2017/) ;
-  [Design newsletter : 7 Hacks pour des emails qui convertissent](http://www.magazineduwebdesign.com/conseils/guides/design-newsletter-7-hacks-pour-des-emails-qui-convertissent/) ;
-  [Statistiques email 2017](http://www.magazineduwebdesign.com/conseils/guides/statistiques-email-2017/).

Prenez soin de vous. A bientôt — [@guillaumpalayer](https://twitter.com/guillaumpalayer).
