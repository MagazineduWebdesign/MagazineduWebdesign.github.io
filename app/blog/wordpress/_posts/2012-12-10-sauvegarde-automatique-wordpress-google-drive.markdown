---
title: Plugin de sauvegarde automatique de données WordPress vers Google Drive
date: 2012-12-10 17:22:56
category: wordpress
tags: 
- techniques
- wordpress
intro: Google Drive est un formidable outil de stockage en ligne. Il semble être également un bon moyen de sauvegarde de données pour WordPress.
description: Le plugin Google Drive for WordPress permet de créer des sauvegarde WordPress automatiques de données vers Google Drive.
image: Google-Drive-for-WordPress-WordPress-Plugins.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
---

<p>Avec le <strong>plugin de sauvegarde&nbsp;</strong><a title="Google Drive for WordPress" href="http://wordpress.org/extend/plugins/wp-google-drive/" target="_blank">Google Drive for WordPress</a>, il est désormais possible de créer des <strong>sauvegardes automatiques de données WordPress</strong> directement sur <strong>Google Drive</strong>.</p>
<p>Dans cet article, nous aborderons la configuration du plugin étape par étape afin de <a title="Backup WordPress – Le top 6 des plugins gratuits" href="http://magazineduwebdesign.com/backup-wordpress-plugin-gratuit">programmer une sauvegarde automatique de votre <strong>base de données</strong></a>.</p>
<h2><span style="color: #888888;">Etape 1</span> :&nbsp;Installation du plugin</h2>
<p><strong>Google Drive for WordPress</strong>&nbsp;est un plugin gratuit disponible dans le répertoire de plugins WordPress. Téléchargez et installez le plugin pour commencer la configuration de <strong>sauvegarde WordPress</strong> vers Google Drive.</p>
<h2><span style="color: #888888;">Etape&nbsp;2</span> :&nbsp;Configurer votre compte Google pour donner accès à l’API</h2>
<p>Une fois le plugin installé, un onglet <em>Configure Google&nbsp;</em>a été créé dans le menu de votre tableau de bord WordPress. Dirigez-vous sur cet onglet et cliquez sur <strong>Google API Console</strong>&nbsp;afin d’obtenir un &nbsp;OAuth 2.0 client ID.</p>
<p><img title="Etape 2 - Configurer votre compte Google pour donner accès à l'API" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/etape-2-Configurer-votre-compte-Google-pour-donner-acces-a-l-API.jpg" alt="Etape 2 - Configurer votre compte Google pour donner accès à l'API" width="555" height="215"></p>
<p>Rendez-vous sur l’onglet <em>API Access</em> et cliquez sur<em> Créez un&nbsp;OAuth 2.0 client ID.</em></p>
<p><img title="Etape 2-1 : Configurer votre compte Google pour donner accès à l'API" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/etape-2-1-Configurer-votre-compte-Google-pour-donner-acces-a-l-API.jpg" alt="Etape 2-1 : Configurer votre compte Google pour donner accès à l'API" width="555" height="239"></p>
<p>Donnez un nom à votre projet, ex. «&nbsp;Sauvegarde WordPress mon site&nbsp;» et uploadez un logo pour ce dernier (optionnel).</p>
<h2><span style="color: #888888;">Etape&nbsp;3</span> :&nbsp;Créer un ID client</h2>
<p>Sélectionnez l’option <em>Web application</em> pour&nbsp;<em>Application type.</em></p>
<p><img title="Etape 3 : Créer un ID client" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/etape-3-creer-une-id-client.jpg" alt="Etape 3 : Créer un ID client" width="555" height="425"></p>
<p>Copiez l’<strong>authorization redirecting url</strong> donnée par le plugin dans votre tableau de bord WordPress et collez-la dans le champ <em>Your site or hostname. </em>Changez le <em>https</em> en <em>http</em> si vous n’avez pas de SSL.</p>
<p>Cliquez sur <em>Create Client ID</em> pour récupérer votre&nbsp;<strong>Client ID</strong> et votre <strong>Client secret</strong>.</p>
<h2><span style="color: #888888;">Etape&nbsp;4</span> : Autoriser l’accès pour la sauvegarde WordPress</h2>
<p>Copiez-collez votre Client ID et votre Client Secret dans les champs de la page du plugin sur votre tableau de bord. Cliquez sur <em>Autorisez l’accès</em>.</p>
<p><img title="Etape 4 : Autoriser l'accès pour la sauvegarde WordPress" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/etape-4-Demande-dautorisation.jpg" alt="Etape 4 : Autoriser l'accès pour la sauvegarde WordPress" width="555" height="227"></p>
<h2><span style="color: #888888;">Etape&nbsp;5</span> :&nbsp;Configurer le plugin Google Drive for WordPress</h2>
<p>Vous avez autorisé l’accès du plugin à votre compte Google. Vous pouvez à présent configurer le plugin.</p>
<p>Déterminez quels sont les fichiers et les dossiers de votre installation WordPress à sauvegarder. Il est possible de définir&nbsp;la fréquence et le nombre de sauvegarde à conserver. N’oubliez pas d’inclure la sauvegarde de votre base de données.</p>
<p><img title="Etape 5 : Configurer le plugin Google Drive for WordPress" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/Etape-5-1-Configurer-le-plugin-Google-Drive-for-WordPress.jpg" alt="Etape 5 : Configurer le plugin Google Drive for WordPress" width="555" height="444"></p>
<p>La configuration est terminée, la programmation de votre prochain backup <a title="WordPress" href="http://magazineduwebdesign.com/wordpress/">WordPress</a> est bien prise en compte.</p>
<h2><span style="color: #888888;">Etape&nbsp;6</span> :&nbsp;Contrôler la sauvegarde WordPress</h2>
<p>Assurez-vous que la programmation de votre <strong>sauvegarde automatique</strong> fonctionne. Rendez-vous sur votre Google Drive puis cliquez sur <em>My Drive.</em>&nbsp;Un fichier .zip de votre <strong>sauvegarde WordPress</strong> doit être présent à la racine du Drive.</p>
<p><img title="Contrôler la sauvegarde WordPress" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/My-Drive-Google-Drive1.jpg" alt="Contrôler la sauvegarde WordPress" width="555" height="208"></p>
<p>Si vous ne souhaitez pas attendre la prochaine sauvegarde, vous pouvez vous rendre sur <strong>On Time Backup</strong> et procéder à un <strong>backup immédiat</strong> de votre données WordPress.</p>
<p><img title="Sauvegarde WordPress automatique" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/On-Time-Backup-Wordpress-to-Google-Drive.jpg" alt="Sauvegarde WordPress automatique" width="552" height="183"></p>
<p>Vous n’êtes jamais à l’abri d’une éventuelle attaque ou d’une erreur sur votre serveur. L’assurance de retrouver saine et sauve une <strong>sauvegarde de vos données</strong> sur <strong>Google Drive</strong> vous permet de dormir sur vos 2 oreilles. Vous aurez la possibilité de la consulter sur n’importe quel support desktop et mobile ou de la partager avec d’autres personnes. Si vous n’avez pas encore un tel système en place, c’est le bon moment pour agir. Lorsque le jour fatal arrivera, ce sera l’occasion d’un <strong>Give me five mental</strong> !</p>