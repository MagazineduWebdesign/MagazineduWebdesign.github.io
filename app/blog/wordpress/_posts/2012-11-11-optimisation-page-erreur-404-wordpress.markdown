---
title: Comment optimiser la page WordPress erreur 404 en vue de l’apocalypse
date: 2012-11-11 17:22:56
category: wordpress
tags: 
- techniques 
- tutoriels
intro: Le 21 décembre 2012 risque bien d'être le jour où le nombre de pages Erreur 404 soit le plus élevé de toute l'histoire de l'humanité.
description: Optimisez votre page Erreur 404 WordPress. Mise en place de solutions de sorties pour l'utilisateur et notification par email à l'admin.
image: apocalypse-2012-erreur-404-wordpress.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl: http://codex.wordpress.org/Creating_an_Error_404_Page
viatitle: Codex WordPress
---

En effet, beaucoup de webmasters risquent de manquer à l’appel. Alors à vos claviers pour optimiser votre page 404 WordPress afin d’être prêt pour le grand jour.

##L’objectif : améliorer cette page
![apache-erreur-404](https://s3-eu-west-1.amazonaws.com/mdw-images/large/apache-erreur-404.gif)

##Conseils et astuces pour optimiser une page 404 WordPress

Les utilisateurs de WordPress sont un peu mieux lotis puisque la majorité des thèmes WordPress proposent un template alternatif à la page 404 par défaut d’un serveur Linux ou Windows.

Néanmoins, cette page peut être grandement remaniée. Quand j’atterris sur une page 404 WordPress, j’ai souvent l’impression d’avoir entrouvert la porte de la cave du site. Quelques toiles d’araignées en header, de la terre battue en footer, et le néant dans la colonne de contenu.

Voyons ensemble pourquoi et comment optimiser le template WordPress 404.php.

###Ne pas perdre les survivants avec une sortie prématurée de votre site

Le chat de CheshirePeu importe la raison pour qu’un utilisateur arrive sur une page 404, il ne doit pas pour autant en repartir illico sans avoir une solution de recours à sa portée.

Si ce n’est pas le cas, votre taux de rebonds ou votre de taux de sorties sera très élevé.

Afin d’éviter la perte d’un visiteur, voici 4 astuces WordPress pouvant être facilement mises en place pour accompagner l’utilisateur.

###1. Optimisez le texte de la page 404 et prévenir l’administrateur du site

Il est toujours plus agréable d’avoir un texte personnalisé pour une page 404 qu’un simple et rébarbatif Page non trouvée.

Afin de modifier le texte par défaut, ouvrez votre fichier 404.php et insérez le code suivant :

{% highlight php %}
<header>
	<hgroup>
	  <h1 class="entry-title"><?php _e( 'Oups ! Il semblerait que vous soyez perdu(e)', 'twentyeleven' ); ?></h1>
	  <h2 class="entry-title-no-result"><?php _e( '☠ Page non-trouvé ☠', 'twentyeleven' ); ?></h2>
	</hgroup>
</header>
{% endhighlight %}

Un petit détail en plus pour l’utilisateur, nous lui indiquerons quelle est l’URL fautive.

Nous notifierons également à l’administrateur du site (vous) l’erreur 404 via un email contenant l’URL de l’erreur 404 et l’URL de provenance de l’utilisateur. Cela lui permettra d’identifier plus rapidement l’origine de l’erreur.

Collez à la suite du code précédent ces quelques lignes :

{% highlight php %}
<article id="post-0" class="post error404 hentry not-found">
  <div class="entry-content">
    <p>Vous
    <?php
    $adminemail = get_option('admin_email'); #Adresse email de l'administrateur WordPress
    $siteweb = get_bloginfo('url'); #URL du site Web
    $nomdusiteweb = get_bloginfo('name'); #Nom du site Web
    if (!isset($_SERVER['HTTP_REFERER'])) {
    #Mesage à l'utilisateur
    echo "avez essayé de vous rendre sur "; #construction du message
    $message404 = "Tout n'est pas perdu!";
    } elseif (isset($_SERVER['HTTP_REFERER'])) {
    #Proposition de solutions à l'utilisateur et envoi d'une alerte mail à l'administrateur
    echo "avez cliqué sur le lien <code>";
    #Construction de l'alerte admin
    $messageerreur = "Un utilisateur a essayé de se rendre sur $siteweb"
    .$_SERVER['REQUEST_URI']." et a reçu une erreur 404 (page non trouvée). ";
    $messageerreur .= "Ce n'était pas sa faute, il faut donc intervenir sur cet incident.
    Url d'origine ".$_SERVER['HTTP_REFERER'];
    mail($adminemail, "Erreur 404 pour ".$_SERVER['REQUEST_URI'],
    $messageerreur, "From: $nomdusiteweb <noreply@$siteweb>");
    $message404 = "Un administrateur a été averti de cet incident.";#L'alerte mail admin a été envoyé
    }
    echo " ".$siteweb.$_SERVER['REQUEST_URI']; ?></code>
    mais cette page n'existe plus ou a été déplacée. <?php echo $message404; ?> Vous pouvez revenir en arrière en cliquant sur le bouton "Précédent" de votre navigateur ou essayer une des ces solutions :
    </p>
  </div>
</article>
{% endhighlight %}

L’utilisateur et l’administrateur du site sont désormais informés. Dans le texte, nous avons indiqué à l’utilisateur différentes solutions pour sortir de l’impasse 404.

![Page-introuvable-Magazine-du-Webdesign](https://s3-eu-west-1.amazonaws.com/mdw-images/large/Page-introuvable-Magazine-du-Webdesign.jpg)

Voyons en détails comment mettre en oeuvres ces dernières.

###2. Inserez un formulaire de recherche

Première solution, mettre en place un formulaire de recherche.

![Page-introuvable-section-recherche-Magazine-du-Webdesign](https://s3-eu-west-1.amazonaws.com/mdw-images/large/Page-introuvable-section-recherche-Magazine-du-Webdesign.jpg)

Collez ce code à la suite de la balise de fermeture `</p>` :

{% highlight php %}
<ul>
  <li><?php _e( 'Effectuer une recherche :', 'twentyeleven' ); ?></li>
</ul>
<p><?php get_search_form(); ?></p>
{% endhighlight %}

###3. Proposez de parcourir les catégories du blog

Deuxième solution, proposez une liste déroulante des catégories de votre blog.

Collez ce code à la suite du formulaire de recherche :

{% highlight php %}
<ul>
  <li><?php _e( 'Parcourir nos catégories :', 'twentyeleven' ); ?></li>
</ul>
<p>
  <form action="<?php bloginfo('url'); ?>/" method="get">
    <div>
      <?php
      $select = wp_dropdown_categories('show_option_none=Sélectionner une catégorie&show_count=1&orderby=name&echo=0');
      $select = preg_replace("#<select([^>]*)>#", "<select$1 onchange='return this.form.submit()'>", $select);
      echo $select;
      ?>
      <noscript><div><input type="submit" value="View" /></div></noscript>
    </div>
  </form><!-- listecategories -->
</p>
{% endhighlight %}

Lorsque l’utilisateur aura sélectionné une catégorie, il sera automatiquement redirigé vers la page archive de la catégorie sélectionnée.

![Page-introuvable-section-categories-Magazine-du-Webdesign](https://s3-eu-west-1.amazonaws.com/mdw-images/large/Page-introuvable-section-categories-Magazine-du-Webdesign.jpg)

###4. Mettre à disposition de l’utilisateur un lien de retour à la page d’accueil

Si aucune solution ne conviendrait à l’utilisateur, proposez lui en dernier recours un lien pointant vers votre page d’accueil.

![Page-introuvable-section-home-Magazine-du-Webdesign](https://s3-eu-west-1.amazonaws.com/mdw-images/large/Page-introuvable-section-home-Magazine-du-Webdesign.jpg)

Collez ce code à la suite de la liste déroulante des catégories :

{% highlight php %}
<ul>
  <li>
  	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="Retourner à la page d'accueil" rel="home"><?php _e( 'Se rendre à la page d\'accueil', 'twentyeleven' ); ?></a>
  	</li>
</ul>
{% endhighlight %}

`rel= "home"` est une spécification microformat draft. Tenez vous informé(e) des évolutions via [microformats.org](http://microformats.org/wiki/rel-home-fr)

##Conclusion

Le résultat final :
![Page-introuvable-ensemble-Magazine-du-Webdesign](https://s3-eu-west-1.amazonaws.com/mdw-images/large/Page-introuvable-ensemble-Magazine-du-Webdesign.jpg)

Il est impératif de proposer un template de page 404 efficace et utile à l’utilisateur afin de le garder le plus longtemps possible sur le site et ainsi éviter de voir grimper en flèche votre taux de rebonds.

Les solutions présentées dans ce tutoriel ne sont pas exhaustives. Vous pourriez par exemple insérer une liste d’articles populaires ou le plan du site. Libre à vous de choisir la réponse la plus pertinente à apporter à l’utilisateur.