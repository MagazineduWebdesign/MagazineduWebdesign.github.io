---
layout: "ressources-default"
title: "Updown.io – une solution de monitoring de sites Web économique et facile"
date: "2016-11-22 00:23:57"
path1: "ressources"
path2: "outils-services"
path3: "developpement"
category: "ressources-outils-services-developpement"
sponsored: "true"
by: "MDW + Updown"
url-demo: "https://updown.io/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign"
logo: "updown-logo.png"
intro: "L'aspect le plus intéressant du métier de blogger est de pouvoir partager et échanger avec des personnes plus intelligentes que soi. J'ai eu la chance de faire la rencontre de Adrien, créateur de l'outil [updown.io](https://updown.io/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign). Un service en ligne qui vérifie le statut de votre site Web en envoyant périodiquement une requête HTTP HEAD à l'URL de votre choix. Il vous avertit alors par e-mail, Slack ou SMS lorsque votre [site Web](http://www.magazineduwebdesign.com/inspirations/ui-design/sites-web/) ne répond pas correctement."
description: "Un service en ligne qui vérifie le statut de votre site Web en envoyant périodiquement une requête HTTP HEAD à l'URL de votre choix. Il vous avertit alors par e-mail, Slack ou SMS lorsque votre site Web ne répond pas correctement."
---

## Pourquoi monitorer son site Web

J'ai imaginé 2 scénarios où ce service de [monitoring de sites Web](https://updown.io/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) pourrait vous sauver les f***es.

### 1. Vous êtes un indépendant ou vous travaillez en agence

J'ai rarement eu des bonnes expériences avec les prestataires d'hébergement et de stockage en ligne. La plupart vous annoncent une garantie de fonctionnement à 99,9% sur une période d'un an. Un rapide calcul permet d'identifier que votre site Web peut être dans les choux durant 9h. Sur un an, cela reste raisonnable. Mais il y a cette fameuse loi de Murphy :

> Tout ce qui est susceptible de mal tourner, tournera nécessairement mal
>
> – Edward A. Murphy Jr, ingénieur aérospatial [Bio](https://fr.wikipedia.org/wiki/Loi_de_Murphy)

J'ai pu expérimenter les foudres de mes clients lorsque un serveur lâchait en pleine campagne promotionnelle. La recette parfaite pour qu'un client vous estampille _incapable_ sur le front _e_ t vous inscrive durablement dans sa liste noire des prestataires à éviter.

Même si vous n'y êtes pour rien, à ces yeux, c'est vous le [DevOps](http://www.magazineduwebdesign.com/conseils/guides/integration-continue-application-mobile/) chargé du bon fonctionnement des Internets.

{% include components/content-post-default-figure-image.html param="data-center-google-campus-mountain-view.jpg" %}

### Quel est le lien avec Updown ?

Updown vous permet d'être informé jusqu'à 30 secondes après un incident que votre site Internet subit une avarie. Lorsqu'une erreur est détectée, vous recevez une notification Slack, un [email](http://www.magazineduwebdesign.com/conseils/guides/design-newsletter-7-hacks-pour-des-emails-qui-convertissent/) et/ou un SMS.

Cette surveillance 24h/24 et 7j/7 vous permet d'être le premier informé qu'un site Internet est indisponible. C'est toujours plus agréable de le savoir avant vos clients. Vous passez ainsi pour le sauveur, le héro des Internets toujours à l'affût d'un malencontreux downtime (serveur H.S.).

Vous aurez plus de chance de fidéliser votre clientèle sur le long terme en passant pour un partenaire de confiance. [La rétention](https://thoughtbot.com/playbook/measuring/aarrr?ref=magazineduwebdesign.com) est le nerf de la guerre si vous voulez durer dans votre business.

### 2. Vous êtes un entrepreneur

Cela fait 1 an que j'utilise [un thème Jekyll](http://www.magazineduwebdesign.com/ressources/themes-jekyll/) avec les services de [Github pages](https://pages.github.com/) et de Amazon S3. Beaucoup moins de problèmes de chargement et d'indisponibilité qu'avec mon ancien serveur OVH. L'expérience utilisateur est davantage agréable bien que de nombreuses optimisations sont possibles.

Magazine du Webdesign est un projet passion. Je n'ai pas de gros enjeux économiques si mes serveurs me lâchent sans prévenir.

Il en est tout autrement lorsque vous êtes le créateur d'un service Sass ou un ecommercant préparant sont plus gros CA pour les périodes des fêtes ou le black Friday. Un site Web indisponible durant 1 heure à cause d'une erreur serveur peut se traduire par des centaines de milliers d'Euros en moins dans la banque.

En tant qu'entrepreneur, être informé le plus tôt possible d'un incident serveur permet d'éviter la catastrophe. Les fonctionnalités et la tarification simplifiées de Updown sont une assurance vie obligatoire pour tous business en ligne. Des solutions concurrentes existent mais elles sont généralement plus complexes en terme d'utilisation et avec un coût plus élevé.

## Une solution de vérification du statut d'un site Web simple et robuste

Updown propose l'essentiel nécessaire pour [monitorer simplement son site Internet](https://updown.io/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign). La première étape consiste à créer un compte via Github/Google connect ou via email. Plusieurs options sont à déterminer :

- L'URL du site Web à surveiller ;
- La fréquence de vérification du statut du site Web. Vous avez le choix entre 10 min, 5 min, 2 min, 1 min et 30 secondes ;

Des options avancées permettent de générer une alerte personnalisée : vous pouvez demander à l’outil de détecter les performances en fonction d'un seuil d' [Apdex](https://updown.uservoice.com/knowledgebase/articles/915588/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) – calcul de la performance perçue côté client ;

Vous pouvez également choisir d’exclure certains serveurs de monitoring pour éviter les filtrages IP ou pour concentrer votre surveillance sur des zones géographiques spécifiques.

Il est également possible de vérifier le contenu même d'une page au lieu de son statut HTTP en ciblant un ou plusieurs mots / expressions.

L’outil résume les indicateurs de statut et de performance au sein d'un tableau de bord super clean.

{% include components/content-post-default-figure-image.html param="updown-statistiques.jpg" %}

Et vous avez la possibilité de créer une page de statut disponible via votre propre nom de domaine à initialiser via un `CNAME`.

Updown offre une solution simple pour surveiller un site Web ou des dizaines. Testez [updown.io](https://updown.io/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) pour votre portfolio ou le site Web d'un client en profitant de **100 000 requêtes gratuites sans sortir la CB** .

## Des tarifs clairs sans engagement

Pour ce qui est du pricing, les offres vont de 0,06 EUR par mois à 1,17 EUR pour surveiller un site Web selon la fréquence des requêtes de monitoring.

Dans tous les cas, vous payez uniquement ce que vous utilisez, requête par requête. Pratique pour assurer un max durant un pic saisonnier.

Adrien – le créateur de la solution – assure par ailleurs un excellent service de support pour vous former et vous aider à profiter de tout le potentiel de Updown. Si vous souhaitez en savoir plus, je vous invite à tester gratuitement le service avec le site Web de votre choix. 100 000 requêtes de surveillance vous sont offertes sans engagement.

Pour les curieux, lisez l'histoire de Updown sur [indiehackers.com](https://www.indiehackers.com/businesses/updown-io/?ref=magazineduwebdesign.com).

Testez par vous même Updown et envoyez vos questions directement sur [Twitter](https://twitter.com/MagDuWebdesign) avec la mention @MagDuWebdesign.

Pour conclure, porn cable tax !

{% include components/content-post-default-figure-image.html param="porn-cable-data-center-oklahoma-google.jpg" %}

---

Si vous avez apprécié cet article, vous pourriez être intéressé(e) par :

-  [Optimiser les images pour un Web plus rapide](http://www.magazineduwebdesign.com/collection/optimiser-les-images-pour-un-web-plus-rapide/) ;
-  [Testez votre style guide, pas votre site Web](http://www.magazineduwebdesign.com/conseils/guides/testez-votre-style-guide-pas-votre-site-web/) ;
-  [Comment passer moins de temps à tester votre site Internet ?](http://www.magazineduwebdesign.com/conseils/guides/comment-passer-moins-de-temps-a-tester-votre-site-internet/)
-  [Intégration continue – développez votre application mobile 200 fois plus vite](http://www.magazineduwebdesign.com/conseils/guides/integration-continue-application-mobile/).

Un grand merci à Updown pour avoir sponsorisé la rédaction de cet article. Si vous souhaitez faire connaître vos produits et vos services, consultez la page [Sponsors](http://www.magazineduwebdesign.com/sponsors/).

— [Guillaume du Magazine du Webdesign](https://www.linkedin.com/in/gpalayer).
