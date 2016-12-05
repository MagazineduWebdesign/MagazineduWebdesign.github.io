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
by-url: ""
intro: ""
description: ""
---

Dans le monde, seules 4 à 6 applications mobiles présentent sur un téléphone sont utilisées quotidiennement. Un chiffre en mettre en parallèle avec un autre : 60% des applications présentent sur le Play store n'ont jamais été installées TK. Je n'installe que très rarement des nouvelles applications sur mon téléphone, faute de place. D'où ces 2 questions : pourquoi s'embêter à développer des applications natives pour des smartphones à la mémoire saturée ? Existe-t-il un moyen de se débarrasser de la friction d'installation ?
La réponse est oui grâce à une solution hybride : les progressive Web Apps.
Sous ce nom exotique se cache une techno très simple : un site Web au design responsive empruntant des comportements propres aux applicatons mobiles natives. Une alternative crédible qui a toute sa place sur l'écran d'accueil de nos téléphone.
Pourquoi y croire ? Car Google a déclaré la guerre aux frictions engendrées par la nécessité d'installer une appli sur son téléphone. Sa réponse est le programme [Android instant Apps](https://developer.android.com/topic/instant-apps/index.html). Les progressives Web Apps sont une partie de la solution qui permettrai de résoudre les frictions d'installation en faisant l'économie du développement d'une application native.

## Progressive web app – le meilleur des 2 mondes
Voici une animation présentant le parcours pour accéder à la progressive Web App de AliExpress.

{% include components/content-post-default-figure-image.html param="progressive-web-app-aliexpress.gif" %}

La démo ci-dessus décrit le cheminement nécessaire pour accéder à la progressive Web App de AliExpress. Il faut d'abord se rendre sur le site Web d'AliExpress via le navigateur mobile Chrome, ajouter à l'écran d'accueil AliExpress, puis ouvrir la progressive Web App via l'icône installée sur l'écran d'accueil du téléphone.

Pour résumé, il faut 2 ingrédients clés pour accéder aux contenus de la PWA – Progressive Web App. Une icône installée sur l'écran d'accueil du téléphone après avoir sélectionné l'option `Ajouter à mon écran d'accueil` dans Chrome. Et un splash screen affiché après le tap sur l'icône pour faire patienter l'utilisateur durant le téléchargement des contenus.
Vous remarquerez l'absence de la barre d'adresse, bien que la PWA soit générée grâce au moteur du navigateur Chrome.
La liste des principaux composants nécessaires pour transformer votre site Web responsive en progressive Web App :
- Un prototcole de connexion sécurisée via SSL (ex. https://monsupersite.com) ;
- Un fichier JSON ;
- Une icône de votre site Web en plusieurs tailles – aka Favicon ;
- Et quelques lignes de JavaScript pour gérer les connexions réseaux et les pushs de notifications.

L'objectif de cet article est de définir de manière macro les progressive Web Apps et leurs avantages. Pour une présentation technique détaillée, je vous invite à consulter le [guide sur les progressive Web Apps][eda538a3] rédigé par l'équipe de développeurs Google. Elle vous expliquera en détaille comment mettre en place votre première PWA. Le point moins funky : seuls quelques navigateurs mobiles sont compatibles pour l'instant. La techno est officiellement supportés dans le navigateur Chrome et Firefox TK. D'autres acteurs sont en train de suivre le mouvement. C'est bon signe.

  [eda538a3]: https://developers.google.com/web/progressive-web-apps/ "Guide progressive Web Apps"

## Les caractéristiques et les avantages d'une progressive Web App
J'ai relevé plusieurs caractéristiques qui sont à mon sens autant d'indicateurs de la viabilité du concept pour un grand nombre d'acteurs sur le Web.

### Zero install
Avec les PWA, nul besoin d'avoir 40 Mb disponibles sur son smartphone. Seule une icône sera installée sur le home screen et quelques données seront hébergés directement dans le cache du moteur de rendu Chrome.

> Les progressive Web Apps sont des poids-plumes dans le monde des apps.

Avec les PWA, il n'est plus nécessaire de désinstaller des applis ou supprimer des photos si l'on veut installer une nouvelle Apps. A mon sens, un gain de temps et moins de frustration pour l'utilisateur.
Pour la petite histoire, AliExpress a fait croître son taux de conversion de 104% pour les nouveaux utilisateurs grâce à la mise en place d'une progressive Web App.

### Engageante
Les progressive Web Apps permettent d'engager l'utilisateur avec les notifications similaires à celles des Apps natives. Une excellente manière de garder le contact avec sa base d'utilisateur. Si vous avez un site ecommerce, c'est idéal pour les relances de panier abandonné.
TK image

### Offline-first
Les PWA offrent une indépendance par rapport aux conditions incertaines des réseaux de téléphonie. Lors de la première utilisation, certains écrans ou la totalité de la progressive Web App peuvent être téléchargés et stockés sur téléphone. Cette fonctionnalité hors-ligne donne une autonomie partielle ou complète par rapport aux conditions du réseau mobile. Les données stockées en local seront automatiquement mises à jour lorsque le réseau de communication sera à nouveau accessible.

### Responsive
Opter pour les progressives Web Apps est synonyme d'économies sur les côuts de développement. Vu qu'il s'agit d'un site Web responsive, il est compatible par défaut avec la majorité des plateformes (iOS, Android, Firefox OS et Windows Phone) et la majorité des devices (desktop/tablette/mobile). Nul besoin de dépenser une fortune dans le développement d'une application iOS et Android. Les technologies de développement standardisés par le W3C permettent d'avoir une place cosy sur l'écran d'accueil des smartphones de vos utilisateurs. Cette simplication du développement vaut également pour l'intégration continue : maintenance et évolution d'une seule version d'application.

### 60 fps
Je mentionnais plus haut le fait que les PWA sont ni plus ni moins un site Web avec des comportements d'une application mobile native. Cela se traduit comme on l'a vue par une gestion des données offlines mais également par de riches animations de l'interface. Un fichier CSS optimisé permet un rendu fluide des animations UI TK lien interne. Pour un retour d'expérience détaillée sur des animations optimisées au sein d'une PWA, je vous invite à lire l'article concernant la création de Pockedex TK lien. Des API Web pour les animations sont en cours de standardisation. Elles permettront d'aller au-delà de ce qui actuellement possible avec les animations CSS. TK verfication des propos et lien vers API web.

### SEO friendly
Comme il s'agit d'un site Web, l'ensemble des contenus peuvent être parcourus par les robots d'indexation des moteurs de recherche. Un avantage par rapport aux difficultés d'indexer des contenus disponibles uniquement sur une application native.

### Sécurisée
De nombreux acteurs du ecommerce optent pour les PWA car elles offrent le même niveau de sécurité qu'une application native. L'ensemble des données transitent par des connexions SSL. Cela permet de traiter aussi bien des données personnelles sensibles que des informations de paiement. Voici une liste des acteurs ecommerce proposant une progressive Web App à leur base d'utilisateurs :
- AliExpress ;
- TK

### Accessible
En plus d'être accessibles pour les moteurs de recherche, les PWA le sont également pour les personnes nécessitant une technologie d'assistance pour parcourir le Web. Je pense aux personnes agées et à toutes les personnes souffrant d'une déficience motrice ou visuelle.

Les standards Web en terme d'accessibilité sont stabibilisés, ce qui n'est pas le cas pour les guidelines des grands tels que Apple ou Google. Chacun y va de sa recette personnelle pour assurer l'accessibilité des applications natives sur sa plateforme.
Les PWA sont l'opportunité de s'appuyer sur un standard universel d'accessibilité reconnu par tous grâce au travail du W3C. Un gain de temps pour les développeurs et l'assurance d'un contenu accessible pour tous.

Un autre aspect de l'accessibilité des PWA résident dans le coût pour l'utilisateur final. De nombreux acteurs du Web africain et asiatique optent pour la PWA. Elle offre aux utilisateurs une première expérience du produit sans nécessité le téléchargement de dizaines de Mo à l'instar une application native. Les utilisateurs africains et asiatiques sont plus regardant sur la taille d'une application car le coût d'1 méga est souvent beaucoup plus élevé qu'en Occident. Les PWA rendent le contenu du Web plus accessible en levant la barrière du coût des données.

### Interconnectée
Les PWA sont social media ready grâce à la puissance de l'URL. Si une personne partageant un contenu présent au sein d'une appli native, le contenu doit être disponible en version Web pour que les utiliateurs n'ayant pas l'appli puissent quand même accéder au contenu. Cette duplication complexifie l'écosystème de l'appli. Grâce au système d'URL naturellement présent dans les PWA, tous les contenus sont accessibles peut importe si la personne a ou non l'application installée sur son téléphone.

J'en ai fini avec les caractéristiques des progressives Web Apps. Je voulais vous présenter ce qui me semblent être leurs principaux avantages face aux applications mobiles natives.
Les PWA ont des qualités naturellement connectées aux valeurs qui prévalent sur Internet : l'ouverture, à tous, peu importe le lieu et le moyen pour y accéder.

Les progressive Web apps ne sont pas la réponse à tous vos projets mobiles. Une application de jeu développée en natif ne sera pas remplacer par une progressive Web App. Néanmoins, les projets d'application mobile natives sur lesquels j'ai travaillé auraient pu être réalisés avec l'approche progressive. Beaucoup d'applications sur les stores ne nécessitent pas des options offertes par un développement natif.



## Faciliter l'expérience mobile
Est-ce le prémisse d'un déclin des applications mobiles telles qu'on les connait aujourd'hui. Nope.
