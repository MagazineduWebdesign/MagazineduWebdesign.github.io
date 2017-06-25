---
layout: "conseils-default"
title: "Installer WordPress en local avec XAMPP sur Windows"
date: "2017-06-22 00:23:57"
path1: "conseils"
path2: "guides"
path3: "wordpress"
category: "guides"
tags: "guides-wordpress"
sponsored: "false"
by: "Guillaume Palayer"
by-url: "https://twitter.com/guillaumpalayer"
intro: "Un tutoriel présentant étape par étape l'installation de WordPress en local sur Windows. J'utilise le logiciel gratuit XAMPP pour obtenir un site WordPress en local. Si vous suivez chaque instruction, votre install WordPress sera un succès. Réservez-vous environ 20 minutes pour réaliser chaque étape. J'ai également préparé un tutoriel pour [installer WordPress en local avec WampServer](http://www.magazineduwebdesign.com/conseils/guides/installer-wordpress-local-wampserver/)."
image-no-cover-book: "installer-wordpress-local-xampp.jpg"
description: "Tuto pour installer WordPress en local sur un PC avec le logiciel gratuit XAMPP. Laissez-vous guider étape par étape pour lancer votre site WordPress sur votre serveur local."
---
XAMPP est un ensemble de logiciels permettant de mettre en place facilement un serveur Web local, un serveur FTP et un serveur de messagerie électronique. Un environnement de développement parfait pour obtenir une application Web dynamique comme peut l'être un site WordPress. L'avantage de XAMPP est qu'il est disponible en version ‎Linux, ‎Windows et ‎Mac OS X. Vous pouvez même l'installer sur une clés USB pour avoir une version portable de votre site WordPress.

Découvrez ci-dessous le process étape par étape pour créer un site WordPress en local sur un ordinateur Windows grâce à XAMPP.

## Comment installer XAMPP sur Windows ?

- [Téléchargez XAMPP](https://www.apachefriends.org/fr/index.html) ;
- Installez XAMPP à la racine du disque principal de votre PC en ayant les accès administrateur pour votre profil Windows.

**Note** : si vous avez également activé WampServer sur votre ordinateur, vous devez le désactiver afin que XAMPP puisse fonctionner ;

Xampla ! XAMPP est désormais installé :-D.

## Préparation des fichiers WordPress et activation de XAMPP

- Rendez-vous sur [WordPress.org](https://fr.wordpress.org/txt-download/) et télécharger la dernière version du CMS ;
- Décompressez le fichier .zip téléchargé ;
- Ouvrez le dossier WordPress décompressé ;
- Sélectionnez tous les éléments du dossier et copiez-les ;
- Ouvrez le dossier `\xampp\htdocs` situé à la racine de votre disque principal ;
- Créez un sous-dossier ayant le nom de votre projet. Cela permettra de faire cohabiter facilement plusieurs projets ou installations WordPress ;
- Collez tous les éléments dans le dossier `\xampp\htdocs\monProjet`. Une pop up s'affichera vous demandant si vous souhaitez remplacer le fichier index.php, cliquez sur *Remplacer* ;
- Recherchez sur votre PC l'emplacement de l'application XAMPP Control Panel et exécutez-la (avec douceur). Vous pouvez également la trouver via le menu Démarrer/Programmes/XAMPP Control Panel ;
- L'application s'ouvre et affiche différents modules avec des boutons en face de chacun d'entres eux ;
- Cliquez sur le bouton *Start* situé en face des modules Apache et MySQL. Le nom de chaque module doit être surligné en vert après quelques secondes ;

## Créer une base de données locale pour WordPress

-  Dans XAMPP, cliquez sur le bouton Admin du module MySQL ;
- Si un onglet de connexion phpMyAdmin s'ouvre dans votre navigateur Web. Déclarez la valeur *root* pour le champ *utilisateur* ;
- Laissez le champ *mot de passe* vide ;
- Cliquez sur *Exécuter* ;
- Rendez-vous dans l'onglet *Bases de données* de phpMyAdmin ;
- Il faut créer une base de données pour faire fonctionner notre installation WordPress en local. Renseignez le champ *Nom de base de données* et cliquez sur *Créer* ;
- Le nom de votre base de données doit apparaître dans la liste des bases de données située en dessous du bouton *Créer* dans l'onglet *Bases de données* de phpMyAdmin ;

## Comment installer WordPress en local sur Windows ?

- Cliquez sur le bouton *Admin* situé en face du module Apache dans la fenêtre XAMPP ;
- Un onglet dans votre navigateur Web s'ouvre. Il donne des instructions quant aux prochaines étapes pour installer WordPress ;
- Cliquez sur le bouton *C'est parti* situé en bas de page ;
- Renseignez le nom de la base de donnée (créée dans l'onglet phpMyAdmin), le nom de l'utilisateur, dans notre cas "root", pas besoin de mot de passe, ni d'adresse pour la base de données (ou insérez localhost). Il n'est pas nécessaire de modifier le préfixe de la table ;
- Cliquez sur *Valider* ;
- On vous indique que c'est parfait. Cliquez sur *Lancer l'installation* ;
- Une page s'affiche vous demandant des infos sur le site WordPress à créer et votre profil utilisateur ;
- Renseignez le titre de votre futur site WordPress. Il s'affichera dans l'interface d'admin de WordPress, sur la page d'accueil du site et dans l'élément `<title>` du code source de vos pages Web ;
- Complétez le champ *Nom d'utilisateur* et le champ *Mot de passe* pour vous créer un profil utilisateur et accédez à l'admin de votre site Web ;
- Insérez votre adresse mail pour recevoir les notifications d'activités de votre site et le lien de renouvellement de mot de passe. Cette fonction sera opérationnel lorsque votre site sera en ligne et que votre hébergeur autorise la fonction email sur votre serveur ;
- Il n'est pas utile de cocher la case de visibilité auprès des moteurs de recherche. Nous sommes en local ;
- Cliquez sur *Installer* ;
- Cliquez sur *Se connecter* et renseignez vos identifiant et mot de passe ;
- Vous avez désormais accès à l'admin ;
- Pour visualiser votre site WordPress en local, cliquez sur le nom de votre site situé en haut à gauche dans la barre noire de l'administration.

Félicitation ! Vous avez installé WordPress en local.

Pour accéder à votre site WordPress lors de votre prochain démarrage Windows, cliquez sur les boutons Start du module Apache et MySQL situés dans l'application XAMPP. Puis cliquez sur le bouton *Admin* du module Apache pour lancer le localhost. Vous pouvez aussi saisir *localhost* dans la barre d'adresse de votre navigateur Web.

## Pour aller plus loin

La collection de [thèmes WordPress](http://www.magazineduwebdesign.com/ressources/themes-wordpress/) du Magazine du Webdesign. Pour plus d'exhaustivité, consultez [themeforest.net](https://themeforest.net/?ref=carcsn) pour acheter des thèmes et des plugins WordPress.

Le Magazine du Webdesign s'est associé avec WP Engine pour vous proposer une [offre d'hébergement WordPress sécurisé](http://www.magazineduwebdesign.com/deals/wp-engine-coupon/) avec 2 mois gratuits. Vous pouvez également obtenir un [nom de domaine gratuit](http://www.magazineduwebdesign.com/deals/nom-de-domaine-design-coupon/) pendant 1 an grâce aux copains de Porkbun.

Si vous avez besoin d'images pour votre site WordPress, explorez ma liste de [banques d'images libres de droits](http://www.magazineduwebdesign.com/ressources/collection-stocks-photo-image-gratuite-libre-de-droits/). Il y a également des belles images chez [iStock](http://istockphoto.7eer.net/c/262183/258824/4205).

## On en parle ?!

Avez-vous des commentaires, des questions, de l'amour ou de la haine ? Envoyez tout ça à guillaume@magazineduwebdesign.com. Si vous n'aimez pas les e-mails, envoyez un tweet à [@MagDuWebdesign](https://twitter.com/MagDuWebdesign).
