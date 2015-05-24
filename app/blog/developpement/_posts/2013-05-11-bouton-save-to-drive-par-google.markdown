---
title: Google annonce la sortie du bouton Save to Drive
date: 2013-05-11 17:22:56
category: developpement
tags:
- outils
- techniques
intro: Google a annoncé cette semaine la sortie d'une nouvelle fonctionnalité pour Google Drive – le bouton Save to Drive. Il permet en un clic de sauvegarder n'importe quel fichier d'une page Web sur son compte.
image: oreilly.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl: http://thenextweb.com/google/2013/05/09/google-launches-a-one-click-button-to-save-files-on-the-web-to-google-drive/
viatitle: thenextweb
---

<p>La fonctionnalité est disponible dès à présent, vous pouvez donc l’implémenter sur votre site en quelques lignes de codes.</p>
<h2>Le bouton Save to Drive en action</h2>
<div id="attachment_5153" class="wp-caption alignnone" style="width: 565px"><img class="size-full wp-image-5153" title="save-to-drive-en-action" src="https://s3-eu-west-1.amazonaws.com/mdw-img/large/save-to-drive-en-action.jpg" alt="save-to-drive-en-action" width="555" height="541"><p class="wp-caption-text">Le bouton «&nbsp;Save to Drive&nbsp;» en action</p></div>
<p>Si vous souhaitez le mettre en place sur votre site Web, insérez le code HTML suivant :</p>
{% highlight html %}
<script src=”http://apis.google.com/js/plusone.js”></script>
<div data-filename=”My Statement.pdf” data-sitename=”My Company Name” data-src=”/path/to/myfile.pdf”></div>
{% endhighlight %}
<p>Avec cette fonctionnalité, Google tente de <a title="Archives pour Expérience utilisateur sur MDW" href="http://magazineduwebdesign.com/ux-design/">simplifier l’expérience utilisateur</a> en évitant à l’internaute de devoir effectuer un clic droit pour sauvegarder un document Web en local. En un seul clic, l’utilisateur archive directement le document sur son compte Google Drive.</p>
<p>Pour l’utilisabilité des sites Web proposant des PDFs, des vidéos ou des images en téléchargement direct, ce bouton peut avoir un certain intérêt.</p>
<p><strong>Consultez également</strong>&nbsp;:&nbsp;<a title="Plugin de sauvegarde automatique de données WordPress vers Google Drive" href="http://magazineduwebdesign.com/sauvegarde-automatique-wordpress-google-drive">Backup WordPress vers Google Drive</a>.</p>