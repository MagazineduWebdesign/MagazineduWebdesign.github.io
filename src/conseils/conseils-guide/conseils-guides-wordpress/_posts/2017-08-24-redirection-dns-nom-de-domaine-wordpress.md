---
layout: "conseils-default"
title: "3 solutions pour associer un nom de domaine à un site WordPress"
date: "2017-08-24 00:23:57"
path1: "conseils"
path2: "guides"
path3: "wordpress"
category: "guides"
tags: "guides-wordpress"
sponsored: "true"
by: "MDW + Web.design"
by-url: "https://web.design/?coupon=MAGAZINEDUWEB"
intro: "Laissez vous guider étape par étape pour associer votre nom de domaine à votre site [WordPress](http://www.magazineduwebdesign.com/conseils/guides/wordpress/). Dans ce guide pratique, vous apprendrez à éditer vos serveurs DNS ou votre zone DNS en fonction de vos besoins."
image-no-cover-book: "redirection-nom-de-domaine.jpg"
description: "3 techniques différentes pour réaliser une redirection DNS d'un nom de domaine vers un site Web WordPress."
---

**Note** : le Magazine du Webdesign encourage tous vos talents en vous offrant un **nom de domaine gratuit** en .design. 1 an sans engagement. Aucune carte bancaire est nécessaire. Juste un .design gratuit pour vos projets. Utilisez le code coupon [MAGAZINEDUWEB](https://web.design/?coupon=MAGAZINEDUWEB) — cliquez pour copier et ouvrir le site.

## Pourquoi éditer ses serveurs ou sa zone DNS

Si vous changez de registrar, il peut être nécessaire de changer de serveurs DNS. Certains registrars ne permettent pas de continuer à utiliser leurs serveurs lorsque vous transférez votre domaine chez un concurrent. Il est aussi possible que vous disposiez d’un serveur dédié faisant office de serveurs DNS. Il vous faudra alors éditer votre DNS pour utiliser votre nom de domaine avec ce serveur dédié.

Si vous désirez modifier le serveur hébergeant votre site Web ou vos mails suite à un changement d’hébergeur par exemple, il vous faudra modifier votre zone DNS. Une fois celle-ci mise à jour, votre domaine pointera vers ces nouveaux serveurs.

Pour associer un nom de domaine à un site Web, vous avez donc 3 possibilités :

- La redirection par changement de serveurs DNS ;
- La redirection par entrée CNAME ;
- La redirection par A-Record (ou type A ou A).

**Important** : si après modification, vous souhaitez utiliser le service [email](http://www.magazineduwebdesign.com/conseils/guides/l-erreur-critique-qui-endommage-la-plupart-de-vos-templates-email/) de votre registrar avec votre domaine, vous devez éditer l'entrée CNAME ou A-Record de votre zone DNS. si vous n'utilisez pas le service email de votre registrar, optez pour le changement de serveurs DNS.

## Définition de DNS

Le DNS (ou Domain Name System) permet de convertir un nom de domaine en adresse IP. Vos requêtes pourront ainsi arriver jusqu’au serveur cible. Le DNS joue le rôle d'annuaire : il se charge de convertir un nom de domaine en une adresse IP.

Lors de votre première connexion à un site web, le navigateur demande au serveur DNS (l’annuaire) l’adresse IP du nom de domaine. Il le garde ensuite en mémoire et redirige toutes les requêtes à l’adresse IP correspondante, qui permet alors l'affichage du site web.

## Différences serveurs / zone DNS

Les serveurs DNS associés à votre nom de domaine sont sollicités en premier par le navigateur Web avant de passer la main à la zone DNS liée.

La zone DNS est un fichier contenant différents données telles que les coordonnées des serveurs hébergeant votre site ou vos mails. Ces coordonnées peuvent être sous la forme d’adresse IP ou de noms d’hôtes.

## Les différents types d'entrées d’une zone DNS

### Entrée A-Record

Une entrée de type A-Record fait correspondre un nom d’hôte à une adresse IP. Par exemple, une des entrées de type A du domaine magazineduwebdesign.com est 192.30.252.153.

### Entrée CNAME

Une entrée CNAME sert à créer un alias d’un nom d’hôte vers un autre nom d’hôte. Seul un nom d’hôte peut être indiqué, et non une adresse IP. Par exemple, l'entrée CNAME pour le sous-domaine www.magazineduwebdesign.com est magazineduwebdesign.github.io.

## Comment changer les serveurs DNS

Cette solution est pour beaucoup la plus pratique. Entrez les nouveaux DNS via l'interface de votre fournisseur actuel de domaine. Certains hébergeurs ne permettent pas d'effectuer ces changements vous-même. Il faut alors effectuer une demande au support de votre hébergeur.

Au sein de votre compte client, vous pouvez accéder à l'interface d'administration des DNS sous l'appellation "Gestion DNS", "Serveurs DNS", "DNS", "Domain Name Server" ou encore "Name server".

Vous avez généralement 2 champs DNS présents. Ce sont ceux de votre hébergeur actuel.

Ajoutez en premier lieu vos nouvelles adresses de serveurs DNS. Dans la plupart des cas au nombre de 2. Par exemple :

- ns1.hebergeur.com
- ns2.hebergeur.com

Puis supprimez les anciens champs DNS.

N'oubliez pas d'enregistrer les modifications.

**Note 1** : le changement DNS rendent inaccessibles les services supplémentaires fournis par votre hébergeur (e-mail ou autres). De même pour les sous-domaines associés à votre nom de domaine, ils ne seront plus utilisables avec une redirection par DNS.

**Note 2** : le changement DNS ne supprime pas les obligations que vous avez auprès de votre ancien registrar. Ce dernier vous fournit toujours le nom de domaine et tous les services qui lui sont associés. Vous devez continuer à renouveler votre nom de domaine et régler ce registrar chaque année. Sans cela, votre domaine sera résilié.

## Comment changer une entrée A-Record de la zone DNS

Dans l'interface d'administration de votre registrar, vous devez avoir accès à un écran nommée "Zone DNS".

Affichez cet écran et ajoutez une nouvelle entrée A-Record pour votre domaine ou sous-domaines. L'interface vous demandera l'adresse IP vers laquelle le domaine doit nouvellement pointer.

Bien souvent, il vous sera demandé si vous désirez également que le sous-domaine www pointe également vers la même adresse IP que le domaine principal. Cochez la case si tel est votre cas.

Il se peut que vous ayez 2 entrées A-Record à renseigner. Par exemple, votre première entrée A doit faire pointer monsite.com vers 192.30.252.153 et votre deuxième entrée A doit faire pointer monsite.com vers 192.30.252.154.

Supprimez ensuite les anciennes entrées A.

**Note 1** : vous trouverez l'adresse IP du serveur sur lequel est hébergé votre site WordPress dans la documentation de votre hébergeur. Il s'agit d'une opération courante. Vous n'aurez pas de mal à trouver cette information.

**Note 2** : l'entrée A-Record permet la redirection de votre nom de domaine tout en gardant accès aux services de votre hébergeur (notamment les comptes e-mail).

## Comment changer une entrée CNAME de la zone DNS

Restons sur l'écran "Zone DNS".

Vous souhaitez par exemple faire pointer votre sous-domaine en www vers un nom d'hôte spécifique. Exemple, www.magazineduwebdesign.com vers l'adresse GitHub magazineduwebdesign.github.io. Pour ce faire, Ajoutez une nouvelle entrée CNAME pour le sous-domaine www. L'interface vous demandera le nom d'hôte vers lequel le sous-domaine doit nouvellement pointer.

Si une ancienne entrée CNAME était configurée pour le sous-domaine www, supprimez-la.

**Note 1** : vous trouverez le nom d'hôte dans la documentation de votre hébergeur.

**Note 2** : l'entrée CNAME permet la redirection de votre nom de domaine tout en gardant accès aux services de votre hébergeur (notamment les comptes e-mail).

## Pourquoi un temps de propagation ?

Le TTL (Time To Live pour durée de vie) indique la période durant laquelle une information doit être conservée en cache après modification par votre hébergeur. Un TTL moyen est de 3 600 secondes soit 1 heure.

## Délais moyen d'un temps de propagation

A ne pas confondre avec le TTL. Il s'agit du temps de synchronisation des modifications avec l'ensemble du réseau.

### TTL Serveurs DNS

Une modification de vos serveurs DNS peut prendre jusqu’à 48h.

### TTL Zone DNS

Une modification dans votre zone DNS peut prendre jusqu’à 24h.

Ce temps de propagation est source de certaines incompréhension. Il se peut que le domaine soit associé au bon site sur votre navigateur et qu'un de vos utilisateurs voit une ancienne version de votre site. C'est normal et ce même après avoir reçu une confirmation de modification de la part de votre registrar. Il faudra vous armer de patience.

## On en parle ?!

Avez-vous des commentaires, des questions, de l'amour ou de la haine ? Envoyez tout ça à guillaume@magazineduwebdesign.com. Si vous n'aimez pas les e-mails, envoyez un tweet à [@MagDuWebdesign](https://twitter.com/MagDuWebdesign).

## Supporté par Web.design

_[Web.design](https://web.design/) est fier de soutenir le Magazine du Webdesign dans son effort pour défendre et promouvoir une large communauté de designer et de développeurs_.

En partenariat avec le Magazine du Webdesign, obtenez un **nom de domaine gratuit** en .design pendant une durée d'un an sans engagement. Aucune information de paiement ne vous sera demandée. Recherchez le nom de domaine de votre choix en cliquant sur le code coupon [MAGAZINEDUWEB](https://web.design/?coupon=MAGAZINEDUWEB).

## Si vous avez apprécié cet article, vous pourriez être intéressé(e) par :

-  [Comment éviter un nom de domaine tout naze pour son portfolio](http://www.magazineduwebdesign.com/conseils/guides/comment-choisir-le-nom-de-domaine-de-son-portfolio/) ;
-  [Installer WordPress en local avec XAMPP sur Windows](http://www.magazineduwebdesign.com/conseils/guides/installer-wordpress-local-xampp/) ;
-  [Installer WordPress en local avec Wamp sur Windows](http://www.magazineduwebdesign.com/conseils/guides/installer-wordpress-local-wampserver/) ;
-  [28 faits que vous ignorez à propos de WordPress [INFOGRAPHIE]](http://www.magazineduwebdesign.com/conseils/guides/les-secrets-de-wordpress/).

Prenez soin de vous. A bientôt — [@guillaumpalayer](https://twitter.com/guillaumpalayer).
