---
layout: "conseils-default"
title: "Progressive Web app – la fin des applications mobiles natives ?"
date: "2016-12-04 06:23:57"
path1: "conseils"
path2: "guides"
path3: "developpement"
category: "guides"
tags: "guides-developpement"
sponsored: "false"
by: "Guillaume"
by-url: "https://www.linkedin.com/in/guillaumepalayer"
intro: "Je n'installe que très rarement de nouvelles applications sur mon téléphone, faute de place. D'où ces 2 questions : pourquoi développer des applications natives pour des smartphones à la mémoire saturée ? Existe-t-il un moyen de se débarrasser de la friction d'installation induite par les Apps natives ?
Une partie de la réponse est à chercher dans une solution hybride : les progressive Web Apps.
Sous ce nom exotique se cache une techno très simple : un [site Web au design responsive](http://www.magazineduwebdesign.com/inspirations/ui-design/sites-web/) empruntant des comportements propres aux applicatons mobiles natives. Une alternative crédible qui a toute sa place sur l'écran d'accueil de nos téléphones."
description: "Caractéristiques et avantages d'une progressive Web App – une alternative crédible à l'application mobile native."
---

Pourquoi y croire ? Car Google a déclaré la guerre aux frictions engendrées lors de l'installation d'une application native. Sa réponse est le programme [Android instant Apps](https://developer.android.com/topic/instant-apps/index.html). Autre bonne nouvelle, la team de Google Chrome soutient ouvertement les PWA – Progressive Web Apps. Le mouvement pour réduire les frictions d'installation est lancé. Cet article vous expliquera en détail la nature et les avantages d'une progressive Web App avec de nombreux exemples.

## Progressive Web App – le meilleur des 2 mondes

<figure class="figure-img mod-img-large">
  <img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/progressive-web-app-le-meilleur-des-deux-mondes.gif" alt="Progressive Web App – offline-first" width="640" height="auto"/>
  <figcaption>Progressive Web App – Le meilleur des 2 mondes</figcaption>
</figure>

Ci-dessous, une animation présentant le parcours pour accéder à la progressive Web App de AliExpress – un site ecommerce chinois.

<figure class="figure-video">
<iframe width="640" height="360" src="https://www.youtube.com/embed/lzQhw_wbr7c?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</figure>

Cette vidéo met en scène le cheminement nécessaire pour accéder à la progressive Web App AliExpress :

1. Se rendre sur le site Web d'AliExpress via le navigateur mobile Chrome ;
2. Ajouter à l'écran d'accueil AliExpress ;
3. Ouvrir la progressive Web App via l'icône installée sur l'écran d'accueil du téléphone.

2 ingrédients clés pour passer du site Web classique à la PWA :

- Une icône qui est installée automatiquement sur l'écran d'accueil du téléphone après avoir sélectionné l'option Chrome `Ajouter à mon écran d'accueil` ;
- Un splash screen affiché après le tap sur l'icône pour faire patienter l'utilisateur durant le téléchargement des contenus.

Vous remarquerez l'absence de la barre d'adresse lors de l'ouverture de la PWA AliExpress. Bien que celle-ci soit générée grâce au moteur de rendu du navigateur Chrome. Nous sommes toujours sur un site Web avec une apparence d'application mobile native.

### Ingrédients pour transformer votre site Web responsive en progressive Web App

- Un prototcole de connexion sécurisée via SSL (ex. https://monsupersite.com) ;
- Un fichier JSON ;
- Une icône de votre site Web en plusieurs tailles ;
- Et quelques lignes de JavaScript pour gérer les connexions réseaux et les pushs de notifications.

L'objectif de cet article est de définir de manière macro les progressive Web Apps et leurs avantages. Pour une présentation technique détaillée, je vous invite à consulter le [guide sur les progressive Web Apps][eda538a3] rédigé par Google.

Le point moins funky : tous les navigateurs mobiles ne sont pas compatibles pour l'instant. La techno est officiellement supportée par Chrome et par [Firefox](https://developer.mozilla.org/fr/Apps/Progressive). D'autres acteurs sont en train de suivre le mouvement. C'est bon signe.

  [eda538a3]: https://developers.google.com/web/progressive-web-apps/ "Guide progressive Web Apps"

## Nature et avantages d'une progressive Web App
J'ai relevé plusieurs caractéristiques qui sont à mon sens autant d'indicateurs de la viabilité du concept pour un grand nombre d'acteurs sur le Web.

### Zero install
Avec les PWA, nul besoin d'avoir 40 Mb disponibles sur son smartphone. Seule une icône sera installée sur le home screen du smartphone et quelques données seront hébergées directement dans le cache du moteur de rendu Chrome.

> La progressive Web App est un poids plume dans le monde des apps. Konga – plateforme ecommerce leader en Afrique – a réduit de 92% l'utilisation des données destinées aux premières étapes de leur expérience client. Plus d'infos en consultant la vidéo ci-dessous (2:35).

<figure class="figure-video">
<iframe width="640" height="360" src="https://www.youtube.com/embed/3od1gsnKNC0?list=PLNYkxOF6rcIAWWNR_Q6eLPhsyx6VvYjVb&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</figure>

Les PWA suppriment la nécessité de désinstaller des applis ou d'effacer des photos si l'on veut accéder au contenu d'une nouvelle App. A mon sens, un gain de temps et moins de frustration pour l'utilisateur.
Pour la petite histoire, AliExpress a fait [croître son taux de conversion de 104%](https://developers.google.com/web/showcase/2016/aliexpress) pour les nouveaux utilisateurs grâce à la mise en place d'une progressive Web App.

### Engageante
Les progressive Web Apps permettent d'engager l'utilisateur avec les notifications similaires à celles des Apps natives. Une excellente manière de garder le contact avec sa base d'utilisateurs. Si vous avez un site ecommerce, c'est idéal pour les relances de paniers abandonnés.

<figure class="figure-img mod-img-small-align-middle">
  <img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/progressive-web-app-notification-panel.png" alt="Progressive Web App – panel notification" width="320" height="auto"/>
  <figcaption>Progressive Web App – panel notification</figcaption>
</figure>

### Offline-first
Les PWA offrent une indépendance par rapport aux conditions incertaines des réseaux mobiles. Lors de la première utilisation, certains écrans ou la totalité de la progressive Web App peuvent être téléchargés et stockés sur le téléphone.

Cette fonctionnalité hors-ligne donne une autonomie partielle ou complète par rapport aux conditions du réseau. Les données stockées en local seront automatiquement mises à jour lorsqu'une connexion sera à nouveau disponible.

<figure class="figure-img mod-img-small-align-middle">
  <img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/progressive-web-app-offline-first-info.gif" alt="Progressive Web App – offline-first" width="320" height="auto"/>
  <figcaption>Progressive Web App – offline-first</figcaption>
</figure>

### Responsive
Opter pour les progressives Web Apps est synonyme d'économies sur les côuts de développement. Vu qu'il s'agit d'un site Web responsive, il est compatible par défaut avec la majorité des plateformes (iOS, Android, Firefox OS et Windows Phone) et la majorité des devices (desktop/tablette/mobile). Nul besoin de dépenser une fortune dans le développement d'une application iOS et Android.

Les technologies de développement standardisées par le W3C permettent d'avoir une place cosy sur l'écran d'accueil des smartphones. Cette simplication du développement vaut également pour l'[intégration continue](http://www.magazineduwebdesign.com/conseils/guides/integration-continue-application-mobile/) : maintenance et évolution d'une seule version d'application.

### 60 fps
Je mentionnais plus haut le fait que les PWA sont ni plus ni moins un site Web avec des comportements d'application mobile native. Cela se traduit par une gestion des données en offline mais également par des [UI animations subtiles](http://www.magazineduwebdesign.com/inspirations/ui-design/animations/).

Pour un retour d'expérience détaillée sur des animations optimisées au sein d'une PWA, je vous invite à lire l'article concernant la [création de Pokedex](http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org). Des [API pour les Web animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) sont en cours de standardisation. Cela permettra d'aller au-delà de ce qui actuellement possible avec les [animations CSS](http://www.magazineduwebdesign.com/css3-animation-transition-exemples-tutoriels/).

### SEO friendly
Comme il s'agit d'un site Web, l'ensemble des contenus sont accessibles aux robots d'indexation des moteurs de recherche. Un avantage par rapport aux difficultés d'indexer des contenus disponibles uniquement sur une application native.

### Sécurisée
De [nombreux acteurs du ecommerce](https://developers.google.com/web/showcase/) optent pour les PWA car elles offrent le même niveau de sécurité qu'une application native. L'ensemble des données transitent par des connexions SSL. Cela permet de traiter aussi bien des données personnelles sensibles que des informations de paiement.

### Accessible
En plus d'être accessibles pour les moteurs de recherche, les PWA le sont également pour les personnes nécessitant une technologie d'assistance pour parcourir le Web. Je pense aux personnes agées et à toutes les personnes vivant avec une déficience motrice ou visuelle.

Les [standards Web en terme d'accessibilité](http://www.magazineduwebdesign.com/accessibilite-web-ckecklist/) sont stabibilisés, ce qui n'est pas le cas pour les guidelines de Apple ou de Google. Chacun y va de sa recette pour assurer l'accessibilité des applications natives sur sa plateforme.

Les PWA sont l'opportunité de s'appuyer sur un standard universel d'accessibilité reconnu par tous grâce au travail du W3C. Un gain de temps pour les développeurs et l'assurance d'un contenu accessible.

Un autre aspect de l'accessibilité des PWA résident dans le coût pour l'utilisateur final. De nombreux acteurs du Web africain et asiatique optent pour la PWA. Elle offre aux utilisateurs une première expérience du produit sans nécessité le téléchargement de dizaines de Mo à l'instar d'une application native. Les utilisateurs africains et asiatiques sont plus regardant sur la taille d'une application car le coût d'1 méga est souvent beaucoup plus élevé qu'en Occident.

> Les PWA rendent le contenu du Web plus accessible en levant la barrière du coût des données.

### Interconnectée
Les PWA sont social media ready grâce à la puissance de l'URL. Si une personne partageant un contenu présent au sein d'une appli native, le contenu doit être disponible en version Web pour que les utiliateurs n'ayant pas l'appli puissent quand même accéder au contenu.

Cette duplication complexifie l'écosystème. Grâce aux URL naturellement présents dans les PWA, tous les contenus sont accessibles peu importe si la personne a ou non l'application installée sur son téléphone.

J'en ai fini avec les caractéristiques des progressives Web Apps. Je voulais vous présenter ce qui me semblent être leurs principaux avantages face aux applications mobiles natives.
Les PWA ont **des qualités naturellement connectées aux valeurs qui prévalent sur Internet** : l'ouverture, à tous, peu importe le lieu et le moyen pour y accéder.

##Exemples de progressive Web Apps
Consultez cette liste sur mobile pour profiter de l'expérience PWA :

- [AliExpress](https://m.fr.aliexpress.com/) ;
- [Pokedex](https://www.pokedex.org/) ;
- [Houses](https://housing.com/) ;
- [Konga](https://www.konga.com/) ;
- [Google I/O 2016](https://events.google.com/io2016/).

## Et après ?
Les progressive Web apps ne sont pas la réponse à tous vos projets mobiles. Une application de jeu développée en natif ne sera pour l'instant pas remplacée par une progressive Web App.

Néanmoins, beaucoup d'applications sur les stores ne nécessitent pas des options natives. Elles auraient pu être très facilement développées en employant l'approche progressive.

Les PWA ne symbolisent pas la fin de toutes les applications natives. A l'instar du [Android instant Apps](https://developer.android.com/topic/instant-apps/index.html), les PWA sont une réponse supplémentaire aux nombreux points de friction lors de l'installation d'une App.

Pour développer votre connaissance sur le sujet, je vous invite à regarder la série de vidéos issues du Progressive Web App Summit 2016 organisé par Google.

<figure class="figure-video">
<iframe width="640" height="360" src="https://www.youtube.com/embed/videoseries?list=PLNYkxOF6rcIAWWNR_Q6eLPhsyx6VvYjVb&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</figure>

Quelles sont vos impressions sur les progressive Web Apps ? Réagissez sur le compte [Twitter](https://twitter.com/MagDuWebdesign) du Magazine du Webdesign ou dans le groupe LinkedIn [Web design et développement Web](https://www.linkedin.com/groups/8446027).

—Guillaume du Magazine du Webdesign.
