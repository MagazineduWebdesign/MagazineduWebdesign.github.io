---
layout: "conseils-default"
title: "Design d'email – Comment innover en 2017"
date: "2017-02-01 00:23:57"
path1: "conseils"
path2: "guides"
path3: "design"
category: "guides"
tags: "guides-design"
sponsored: "true"
by: "MDW + Sarbacane"
by-url: "https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign"
intro: "Je vous annonçais en 2012 que le [design responsive était l'avenir des templates e-mail](http://www.magazineduwebdesign.com/templates-mail-mobile/). Je dois avouer que l'adaptation des emails aux contraintes du mobile a pris plus de temps que prévu. Les grands changements annoncés pour 2013/14 ont pratiquement tous eu lieu en 2016. Gmail et Inbox by Gmail [supportent désormais les media queries](https://developers.google.com/gmail/design/css) et [iOS 10 nous offre à nouveau le support de la balise HTML5 video](https://litmus.com/blog/9-things-you-need-to-know-about-email-in-ios-10). Toutes ces années d'attente n'ont pas étaient passées en vain. 2017 sera l'année de l'email riche en contenus et plus mobile."
description: "Tour d'horizon des grandes évolutions en terme de design pour les templates email. Plus riche en contenu vidéo et plus responsive."
carte-optin-downoload-pdf: "false"
---
La semaine dernière, je vous présenté les [statistiques email](http://www.magazineduwebdesign.com/conseils/guides/statistiques-email-2017/) utiles pour préparer cette nouvelle année grâce au soutien de l'équipe [Sarbacane](https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) 😍.

On y apprend qu'en 2016, la proportion de clics au sein des emails sur mobile a dépassé celle sur desktop, se plaçant au dessus des 55%. Ce chiffre illustre la nécessité pour les créateurs d'emails d'adapter leur design aux contraintes du mobile.

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}

Un autre fait intéressant est le nombre élevé d'emails reçus de la part des marques. 2 personnes sur 5 au Royaume-Uni affirment recevoir plus de 41 messages de marques par semaine ([source](https://dma.org.uk/uploads/misc/58232e26621ff-consumer-email-tracking-report-2016_58232e266214c.pdf)). Les acteurs de l'email marketing doivent donc trouver des moyens pour sortir du lot.

Voyons quelles peuvent être les options de design les plus adaptées pour des emails plus engageants.

## Le retour de la vidéo

La plupart des clients e-mail ne supportent pas la lecture d'une vidéo. Pour les designers, l'alternative consiste à insérer des images au format .gif.

Les images animées permettent de dynamiser un message et de mettre en scène un univers de marque plus vivant. Le seul bémol du .gif est sa qualité. C'est adapté pour mettre en scène des illustrations vectorisées, tels que peuvent le faire Bankin et Trello.

<figure class="figure-img mod-img-small-align-middle">
  <img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/email-trello-avec-gif.gif" alt="email-trello-avec-gif" width="580" height="auto"/>
  <figcaption>Un email mettant en scène la mascotte de l'application Trello avec un arrière plan festif et animé en GIF.</figcaption>
</figure>

<figure class="figure-img mod-img-small-align-middle">
  <img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/email-bankin-avec-gif.gif" alt="email-bankin-avec-gif" width="580" height="auto"/>
  <figcaption>Email du service Bankin avec un sympathique GIF.</figcaption>
</figure>

Mais lorsqu'on souhaite insérer des univers de marque plus réalistes, le grain de l'image est trop important avec le .gif. On obtient un rendu moins qualitatif.

### Remplacer le .gif par la vidéo grâce à iOS 10

Apple avait abandonné le support de la balise `<video>` au sein d'iOS 8 en 2014. La sortie d'iOS 10 a remis la vidéo au centre de la scène. Apple mail est désormais capable de lire une vidéo.

Lorsque le lecteur appuie sur l'icône play, la vidéo est lue en plein écran sur iPhone. A la fermeture de la vidéo, le lecteur est redirigé vers l'email comme le montre cette image créée par [Litmus](https://litmus.com).

{% include components/content-post-default-figure-image.html param="lecteur-video-apple-mail-iphone-ios10.png" %}

Sur iPad, la vidéo est lu directement au sein de l'email. [Litmus](https://litmus.com/blog/9-things-you-need-to-know-about-email-in-ios-10) nous propose la démo suivante :

<figure class="figure-img mod-img-small-align-middle">
  <img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/lecteur-video-apple-mail-ipad-ios10.gif" alt="lecteur-video-apple-mail-ipad-ios10" width="430" height="auto"/>
  <figcaption>Lecteur vidéo au sein d'un email lu avec Apple Mail iPad.</figcaption>
</figure>

C'est un grand pas en avant pour des emails plus riches en contenus. Sans compter le fait que Apple est [premier sur le podium des clients e-mail en 2016](http://www.magazineduwebdesign.com/conseils/guides/statistiques-email-2017/).

### 2017, l'année de l'email vidéo

C'est donc une belle opportunité pour les marques. La vidéo est une excellente alternative au .gif pour apporter plus de dynamise à une campagne email. Elle permet de condenser sur quelques pixels carrés une grande quantité d'information. 2017 pourrait bien être l'année de l'email vidéo.

### Comment créer un lecteur vidéo pour Apple Mail iOS 10

Exemple de code pour implémenter un lecteur vidéo au sein de l'application Apple Mail iOS 10 avec l'intégration d'un support pour les versions précédentes d'iOS. Code proposé par [HTeuMeuLeu sur GitHub](https://gist.github.com/hteumeuleu/826bfad2584bb72f44e5436a1f8605b4).

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
					<a href="https://i.imgur.com/FvJ5aP5.gifv"><img src="http://i.imgur.com/EjaukAV.jpg" alt="" style="width:100%;height:auto;" /></a>
				</div>
			</div>
		</div>
	</body>
	</html>
{% endhighlight %}

La vidéo est-elle l'unique moyen d'apporter un peu de fraîcheur à nos emails en 2017 ? Explorons les autres options.

## Peut-on innover avec des emails plus interactifs

Imaginez un futur où l'utilisateur ne serait plus forcé de visiter une landing page pour réaliser une action suite à la réception d'un email. Le gain de temps sera indéniable pour des milliards de personnes.

On remarquera néanmoins 2 choses :

- L'incompatibilité de la plupart des clients e-mail avec les emails interactifs ;
- L'interactivité des emails n'est possible qu'avec une liste encombrante de hacks techniques.

Une personne en charge d'une campagne email rapportera toujours le coût de conception au retour sur investissement. Si 17 000 lignes de code sont nécessaires pour mettre en scène un email interactif mais que le gain en terme de conversion est similaire à un email classique, il est peu probable qu'un responsable de campagnes email soit prêt à investir de l'argent.

D'autres options plus simples sont à notre portée pour offrir une réelle innovation en 2017.

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}

## Comment optimiser le design de ses emails en 2017

Avant d'investir du temps pour rendre vos emails plus interactifs, je vous conseille d'optimiser les éléments listés ci-dessous.

### Design responsive

Seulement 21% des marques ont un ecosystème email 100% responsive en 2016 ([source](http://www.yesmail.com/resources/benchmarks/email-benchmark-report-q3-2016-mind-gap)). Faire progresser ce chiffre serait une bonne chose pour simplifier la vie à des millions de personnes.

### Segmentation et automatisation

Le design n'est pas lié qu'aux composants graphiques. Le texte est une partie essentielle du design d'email. Proposez des messages plus adaptés aux comportements de votre audience. En fonction d'actions antérieures par exemple. L'automatisation de vos envois et une segmentation plus poussée de vos contacts sont un bon moyen de proposer des emails qui matchent avec les attentes de votre audience.

### Design du texte

Optez pour l'essentiel : un email, un message. Évitez de mélanger les sujets au sein d'un même envoi. Et travaillez vos textes de prévisualisation. Ils sont tous aussi importants que l'objet de l'email. L'usage massif des clients e-mail mobiles rend cette nécessité encore plus importante. Le texte de prévisualisation est crucial pour inciter au clic à la fois dans le panel de notification du téléphone et dans la liste des messages reçues au sein de l'application e-mail.

Avez-vous des commentaires, des questions, de l'amour ou de la haine ? Envoyez tout ça à guillaume@magazineduwebdesign.com. Si vous n'aimez pas les e-mails, envoyez un tweet à [@MagDuWebdesign](https://twitter.com/MagDuWebdesign).

## Supporté par Sarbacane

 _Chez Sarbacane, notre approche de l'emailing nous pousse sans cesse à proposer les meilleurs outils essentiels à la réussite de vos projets. C’est pourquoi nous sommes fiers de soutenir MDW dans son effort pour défendre et promouvoir une large communauté de créateurs d'email._

Sarbacane est l’application emailing de référence en France qui vous permet de :

- Gérer / nettoyer / corriger vos listes de contacts (+ connecteurs avec Wordpress, Magento, PrestaShop…) ;
- Créer des formulaires de collecte (responsives) ;
- Créer des emails (responsives aussi) facilement à partir des 250 templates gratuits fournis ou partir de zéro ;
- **Prévisualisez gratuitement vos emails** avant envoi dans les principales messageries.
- Envoyer via une plateforme de routage haute délivrabilité ;
- Obtenir des statistiques détaillées sur vos envois avec des infos inédites comme le **temps de lecture moyen** ;
- Et plus de [50 autres fonctionnalités à découvrir](https://www.sarbacane.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) qui en font l’une des solutions les plus complètes du marché.

##  **Si vous avez apprécié cet article, vous pourriez être intéressé(e) par :**

- [Design newsletter : 7 Hacks pour des emails qui convertissent](http://www.magazineduwebdesign.com/conseils/guides/design-newsletter-7-hacks-pour-des-emails-qui-convertissent/) ;
- [Statistiques email 2017](http://www.magazineduwebdesign.com/conseils/guides/statistiques-email-2017/).

Prenez soin de vous. A bientôt — [@guillaumpalayer](https://twitter.com/guillaumpalayer).

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}
