---
layout: "conseils-default"
title: "Installer WordPress en local avec Wamp sur Windows"
date: "2017-06-22 00:23:57"
path1: "conseils"
path2: "guides"
path3: "wordpress"
category: "guides"
tags: "guides-wordpress"
sponsored: "false"
by: "Guillaume Palayer"
by-url: "https://twitter.com/guillaumpalayer"
intro: "Un tutoriel présentant toutes les étapes nécessaires pour installer WordPress en local (Windows 10). J'utilise le logiciel WampServer pour l'installation. Si vous suivez chaque instruction, votre installation locale de WordPress sera un succès. Réservez-vous environ 20 minutes pour obtenir votre site WordPress en local. J'ai également préparé un tutoriel pour [installer WordPress en local sur Windows avec XAMPP](http://www.magazineduwebdesign.com/conseils/guides/installer-wordpress-local-xampp/). Une alternative plus ouverte que WampServer car elle est compatible avec Linux, Windows, MacOS X et les clés USB."
image-no-cover-book: "installer-wordpress-local-wamp.jpg"
description: "Tuto pour installer WordPress en local sur un PC avec le logiciel gratuit WampServer. Laissez-vous guider étape par étape pour lancer votre site WordPress sur votre serveur local Windows."
---
WampServer propose un environnement de développement sous Windows. Il offre tous les composants nécessaires (serveur Apache2, langage PHP et base de données MySQL) pour obtenir une application Web dynamique. Par exemple, un site WordPress. Avec ça sur votre machine, vous pouvez créer et modifier en local 1, 2, 3 ou 100+ sites Web accessibles via le panel d'administration de WordPress. A noter que WampServer donne accès à phpMyAdmin. Cela permet de gérer plus facilement vos bases de données.

Découvrez ci-dessous le process étape par étape pour créer un site WordPress en local sur un ordinateur Windows.

## Comment installer WampServer sur Windows ?

- Vérifiez la version de votre système sur votre PC : 32 ou 64 bits. Pour trouver l'info, dans la barre de recherche, saisissez *info système* ou ouvrez la fenêtre Windows Paramètres > Info système ;
- [Téléchargez WampServer](http://www.wampserver.com/) 32 ou 64 bits (j'utilise la version 64 pour ce tuto) ;
- Installez Wamp à la racine du disque principal de votre PC en ayant les accès administrateur pour votre profil Windows.

**Note 1** : n'installez pas une nouvelle version de Wamp si vous avez une précédente version sur votre machine. Vous perdrez vos base de données existantes. Plus d'info : [http://forum.wampserver.com/read.php?1,88043](http://forum.wampserver.com/read.php?1,88043) ;

**Note 2** : ne vous précoccupez pas des avertissements concernant les packages Visual studio. 95% des PCs ont déjà ces packages. Plus d'info: [http://forum.wampserver.com/read.php?1,88043](http://forum.wampserver.com/read.php?1,88043) ;

Wampla ! Wamp est désormais installé :-D.

## Préparation des fichiers WordPress et activation de Wamp

- Rendez-vous sur [WordPress.org](https://fr.wordpress.org/txt-download/) et télécharger la dernière version du CMS ;
- Décompressez le fichier .zip téléchargé ;
- Ouvrez le dossier WordPress décompressé ;
- Sélectionnez tous les éléments du dossier et copiez-les ;
- Ouvrez le dossier `\wamp64\www` situé à la racine de votre disque principal ;
- Créez un sous-dossier ayant le nom de votre projet. Cela permettra de faire cohabiter facilement plusieurs projets ou installations WordPress ;
- Collez tous les éléments dans le dossier `\wamp64\www\monProjet`. Une pop up s'affichera vous demandant si vous souhaitez remplacer le fichier index.php, cliquez sur *Remplacer* ;
- Recherchez sur votre PC l'emplacement de l'application WampServer et exécutez-la (avec douceur). Vous pouvez également la trouver via le menu Démarrer/Programmes/WampServer64 ;
- Attendez que l'icône Wamp soit verte dans votre barre des tâches ;

## Comment installer WordPress en local sur Windows ?

- Faites un clique gauche sur cette icône Wamp ;
- Sélectionnez *phpMyAdmin* ;
- Un onglet de connexion s'ouvre dans votre navigateur Web. Déclarez la valeur *root* pour le champ *utilisateur* ;
- Laissez le champ *mot de passe* vide ;
- Cliquez sur *Exécuter* ;
- Rendez-vous dans l'onglet *Bases de données* de phpMyAdmin ;
- Il faut créer une base de données pour faire fonctionner notre installation WordPress en local. Renseignez le champ *Nom de base de données*, laissez tel quel l'option *Interclassement* du menu déroulant et cliquez sur *Créer* ;
- Le nom de votre base de données doit apparaître dans la liste des bases de données située en dessous du bouton *Créer* dans l'onglet *Bases de données* de phpMyAdmin ;

## Comment installer WordPress en local sur Windows ?

- Retour sur l'icône Wamp (verte), cliquer sur [*localhost*](http://localhost) ;
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

## Pour aller plus loin

Si vous êtes à la recherche d'un design contemporain pour votre site Web, consultez la collection de [thèmes WordPress](http://www.magazineduwebdesign.com/ressources/themes-wordpress/) du Magazine du Webdesign. Vous y trouverez une description de quelques thèmes populaires au sein de la communauté WP. La liste est loin d'être exhaustive. Je vous invite à faire un tour sur [themeforest.net](https://themeforest.net/?ref=carcsn) pour acheter des thèmes et des plugins WordPress.

Pour que votre site WordPress soit accessible à tous, il vous faudra un serveur pour héberger les fichiers et un nom de domaine pour que votre audience puisse accéder à vos contenus. Le Magazine du Webdesign s'est associé avec WP Engine pour vous proposer une [offre d'hébergement WordPress sécurisé](http://www.magazineduwebdesign.com/deals/wp-engine-coupon/) avec 2 mois gratuits. Vous pouvez également obtenir un [nom de domaine gratuit](http://www.magazineduwebdesign.com/deals/nom-de-domaine-design-coupon/) pendant 1 an grâce aux copains de Porkbun.

Si vous avez besoin d'images, faites un tour sur ma liste de [banques d'images libres de droits](http://www.magazineduwebdesign.com/ressources/collection-stocks-photo-image-gratuite-libre-de-droits/). Il y a également des belles images chez [iStock](http://istockphoto.7eer.net/c/262183/258824/4205).

## On en parle ?!

Avez-vous des commentaires, des questions, de l'amour ou de la haine ? Envoyez tout ça à guillaume@magazineduwebdesign.com. Si vous n'aimez pas les e-mails, envoyez un tweet à [@MagDuWebdesign](https://twitter.com/MagDuWebdesign).
