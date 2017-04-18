---
layout: "conseils-default"
title: "Je ne savais pas qu'un email pouvait faire ça ! (Partie II)"
date: "2017-03-06 00:23:57"
path1: "conseils"
path2: "guides"
path3: "design"
category: "guides"
tags: "guides-design"
sponsored: "true"
by: "MDW + Sarbacane"
by-url: "https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign"
intro: "Il s'agit de la deuxième partie d'une série d'articles. Vous devriez d'abord lire la [première partie](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-1/). Cette série a pour objectif d'apporter des solutions simples et élégantes pour designer des templates email avec toutes les contraintes que l'on connait au secteur. J'ai sélectionné des approches qui permettent d'innover sans nécessiter de lourds investissements en développement."
description: "Astuces pour intégrer un lecteur vidéo dans un email, centrer un bouton, utiliser les Web fonts, etc."
carte-optin-downoload-pdf: "false"
image-no-cover-book: "sarbacane-post-featured-img-03062017.png"
---

## Au programme

1. **[Afficher un logo d'expéditeur dans Gmail & Inbox by Gmail](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-1/) (disponible dans la partie I)** ;
2. **[Accompagner l'objet avec un texte de description/preheader fantôme](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-1/) (disponible dans la partie I)** ;
3. **[Afficher un élément en position fixe dans un email](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-1/) (disponible dans la partie I)** ;
4. **[Proposer un bouton d'action directement depuis la boîte de réception](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-1/) (disponible dans la partie I)** ;
5. **Lire une vidéo dans un email** ;
6. **Insérer un bouton centré dans un email** ;
7. **Supprimer l'icône de téléchargement de l'image dans Gmail** ;
8. **Expérimenter avec les Web Fonts**.

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}

## 5. Lire une vidéo dans un email

Le moyen le plus rapide et interactif pour délivrer un message dense. Le gif a été pendant longtemps le substitut de la vidéo. La release d'iOS 10 donne une nouvelle fenêtre d'expression aux expéditeurs d'email en autorisant la lecture d'une vidéo directement au sein d'Apple Mail – qui est selon les [récentes statistiques email](http://www.magazineduwebdesign.com/conseils/guides/statistiques-email-2017/) , le client mail le plus populaire.

{% include components/content-post-default-figure-image.html param="lecteur-video-apple-mail-iphone-ios10.png" %}

**How-To** : le code suivant vous ouvrira les portes de l'email vidéo. Proposé par [HteuMeuLeu sur GitHub](https://gist.github.com/hteumeuleu/826bfad2584bb72f44e5436a1f8605b4).

{% highlight html %}
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<title>iOS 10 video</title>
			<style type="text/css">
				@supports (-webkit-overflow-scrolling:touch) and (color:#ffffffff) {
					.video-player { display:block !important; }
					.video-fallback { display:none !important; }
				}
			</style>
		</head>
		<body style="Margin:0; padding:0; font:1em sans-serif; background:#fff;">
			<div style="Margin:0 auto; max-width:600px;">
					<div class="video-player" style="display:none;">
						<video style="width:100%;height:auto;" autoplay muted playsinline loop>
							<source src="https://i.imgur.com/FvJ5aP5.mp4" type="video/mp4" />
							<a href="https://i.imgur.com/FvJ5aP5.gifv"><img src="http://i.imgur.com/EjaukAV.jpg" alt="" /></a>
						</video>
					</div>
					<div class="video-fallback">
						<a href="https://i.imgur.com/FvJ5aP5.gifv"><img 		src="http://i.imgur.com/EjaukAV.jpg" alt="" style="width:100%;height:auto;" /></a>
					</div>
				</div>
			</div>
		</body>
	</html>
{% endhighlight %}

## 6. Insérer un bouton centré dans un email

Le moyen le plus rapide pour proposer un joli design de call to action en cohérence avec votre charte graphique sur tous les devices.

**How-To** : le code suivant est proposé par [Lee Munroe](http://www.leemunroe.com/building-html-email/) et a été légèrement modifié par moi-même pour répondre aux contraintes de design du MDW.

{% highlight html %}
	<table border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; border-collapse: separate !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto; padding-bottom: 24px; margin-left: auto; margin-right: auto;">
		<tbody>
			<tr>
				<td align="center" style="box-sizing: border-box; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 4px; text-align: center; background: #dd2c00;" valign="top"><a href="#" style="box-sizing: border-box; color: #ffffff; text-decoration: none; border-radius: 4px; cursor: pointer; display: inline-block; font-size: 14px; font-weight: normal; text-transform: capitalize; background: #dd2c00; margin: 0; padding: 8px 16px; border: 1px solid #dd2c00;">Mon texte</a></td>
			</tr>
		</tbody>
	</table>
{% endhighlight %}

Campaign Monitor propose [un outil pour générer des boutons d'email](https://buttons.cm/) compatibles avec une majorité de clients email.

## 7. Supprimer l'icône de téléchargement de l'image dans Gmail

Le moyen le plus rapide pour ne pas afficher l'icône de téléchargement dans Gmail lorsqu'une personne survole une grande image sans lien.

{% include components/content-post-default-figure-image.html param="gmail-icone-telecharger-image.png" %}

**How-To** : sur la base d'une solution proposée par [Rémi Parmentier](https://twitter.com/hteumeuleu) , Email on Acid enrichit l'astuce avec ce code qui cible l'icône et annule son affichage. Cette `class` est à déclarer dans le `<head>` de l'email. [Plus d'infos.](https://www.emailonacid.com/blog/article/email-development/prevent-gmail-from-displaying-image-download-button-in-email)

{% highlight html %}
img.g-img + div {display:none;}
{% endhighlight %}

## 8. Expérimenter avec les Web Fonts

Le moyen le plus rapide pour obtenir votre surnom de sorcier de l'emailing. Alors que l'utilisation des Web fonts est une chose courante pour designer un site Web, dans le monde de l'email HTML, les Web fonts sont de l'ordre de l'expérimental. Mailchimp propose [différentes méthodologies](https://templates.mailchimp.com/design/typography/) pour tester les polices Web dans un email. A noter que ces techniques sont pour le moment compatibles qu'avec iOS/Apple Mail, Outlook2000, l'application email par défaut d'Android et Thunderbird.

**How-To** : 3 approches sont disponibles pour inclure une police Web. Soit via l'option `<link>` :

{% highlight html %}
	<link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
{% endhighlight %}

Soit via l'option `@import` :

{% highlight html %}
	<style type="text/css">
	 @import url('http://fonts.googleapis.com/css?family=Open+Sans');
	</style>
{% endhighlight %}

Soit via l'option `@font-face` :

{% highlight html %}
	<style type="text/css">
	 @font-face{
	 font-family:'Open Sans';
	 font-style:normal;
	 font-weight:400;
	 src:local('Open Sans'),
	 local('OpenSans'),
	 url('http://fonts.gstatic.com/s/opensans/v10/cJZKeOuBrn4kERxqtaUH3bO3LdcAZYWl9Si6vvxL-qU.woff') format('woff');
	 }
	</style>
{% endhighlight %}

Après l'étape d'import, vous pouvez déclarer la police :

{% highlight html %}
	<style type="text/css">
	 .emailContent{
	 font-family:'Open Sans', 'Helvetica Neue', Helvetica, sans-serif;
	 }
	</style>
{% endhighlight %}

## On en parle ?!

Avez-vous des commentaires, des questions, de l'amour ou de la haine ? Envoyez tout ça à guillaume@magazineduwebdesign.com. Si vous n'aimez pas les e-mails, envoyez un tweet à [@MagDuWebdesign](https://twitter.com/MagDuWebdesign).

## Supporté par Sarbacane

Chez Sarbacane, notre approche de l'emailing nous pousse sans cesse à proposer les meilleurs outils essentiels à la réussite de vos projets. C’est pourquoi nous sommes fiers de soutenir MDW dans son effort pour défendre et promouvoir une large communauté de créateurs d'email.

Sarbacane est l’application emailing de référence en France qui vous permet de :

- Gérer / nettoyer / corriger vos listes de contacts (+ connecteurs avec Wordpress, Magento, PrestaShop…) ;
- Créer des formulaires de collecte (responsives) ;
- Créer des emails (responsives aussi) facilement à partir des 250 templates gratuits fournis ou partir de zéro ;
-  **Prévisualisez gratuitement vos emails** avant envoi dans les principales messageries.
- Envoyer via une plateforme de routage haute délivrabilité ;
- Obtenir des statistiques détaillées sur vos envois avec des infos inédites comme le **temps de lecture moyen** ;
- Et plus de [50 autres fonctionnalités à découvrir](https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) qui en font l’une des solutions les plus complètes du marché.

## Si vous avez apprécié cet article, vous pourriez être intéressé(e) par :

- [Je ne savais pas qu'un email pouvait faire ça ! (Partie I)](http://www.magazineduwebdesign.com/conseils/guides/je-ne-savais-pas-qu-un-email-pouvait-faire-ca-partie-1/) ;
- [Design d'email – Comment innover en 2017](http://www.magazineduwebdesign.com/conseils/guides/design-d-email-comment-innover-en-2017/) ;
- [Design newsletter : 7 Hacks pour des emails qui convertissent](http://www.magazineduwebdesign.com/conseils/guides/design-newsletter-7-hacks-pour-des-emails-qui-convertissent/) ;
- [Statistiques email 2017](http://www.magazineduwebdesign.com/conseils/guides/statistiques-email-2017/).

Prenez soin de vous. A bientôt — [@guillaumpalayer](https://twitter.com/guillaumpalayer).

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}
