---
title: Filtrer vos articles via les custom taxonomies des post types WordPress
date: 2012-08-08 17:22:56
category: wordpress
tags: 
- jekyll
- topic
intro: Parcourir un portfolio, une bibliothèque d’objets, une liste d'items n'est pas toujours aisé lorsque une grande quantité d'informations y est présentée. Avec l'avènement des custom post types WordPress, il est possible de créer facilement des listes d'items accompagnées d'un système de filtres.
description: Tutoriel complet vous révélant comment filtrer et organiser vos articles via les termes des custom taxonomies des post types WordPress.
image: filtrer-custom-posts-par-termes-custom-taxonomies-wordpress.png
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
---

Via cette solution de tri, l’utilisabilité de votre site Web s’en trouvera fortement améliorée, en simplifiant la navigation et en réduisant le temps de recherche. Dans ce tutoriel, vous trouverez les codes sources, les instructions et nos conseils pour parvenir à filtrer vos custom posts via les taxonomies des custom post types WordPress.

[Télécharger la démo](https://www.google.com "Google's Homepage")


##Quelles fonctions WordPress utiliser ?
WordPress est votre ami. Vous avez besoin de quelques unes de ses fonctions :

* [register_post_type](http://codex.wordpress.org/Post_Types "register_post_type") : vous permet de créer un système d’articles spécifiques à une thématique donnée,
* [register_taxonomy](http://codex.wordpress.org/Function_Reference/register_taxonomy "register_taxonomy") : permet de créer une classification d’articles,
* [wp_dropdown_pages](http://codex.wordpress.org/Function_Reference/wp_dropdown_pages "wp_dropdown_pages") : permet l’affichage des pages de votre site sous la forme d’une liste déroulante,
* [get_terms](http://codex.wordpress.org/Function_Reference/get_terms "get_terms") : permet d’obtenir les termes d’une classification (taxonomie),
* [get_term_by](http://codex.wordpress.org/Function_Reference/get_term_by "get_term_by") : permet de définir quelles informations des termes de la taxonomie définis au dessus, vous souhaitez voir remonter de la base de données en front-end.

Et c’est parti.

##Pour commencer

On commence avec la création de vos customs post types.
Leur intitulé dépend du contenu de votre site. Ici, nous prendrons comme exemples : livres, poissons, arbres, animaux, autres.

Localisez votre fichier functions.php se trouvant à la racine de votre thème WordPress. Si vous n’en avez pas, créez-le.

##Mettez en place vos custom post types et vos custom taxonomies

1. Dans votre fichier functions.php, commencez par créer les customs post types Livres, Poissons, Arbres, Animaux et Autres via la fonction `register_post_type`,
2. Toujours dans votre fichier functions.php, [créez les taxonomies](http://codex.wordpress.org/Function_Reference/register_taxonomy "Codex WordPress - Fonction Register Taxonomy") (les classifications d’articles) qui correspondent aux customs post types. Par exemple, nos taxonomies pourraient se nommer `Genre_NomDuCustomPostType`.

##Affecter vos post types à des modèles de pages

1. Constituez les modèles de pages relatifs à chaque custom post type servant à afficher la liste des custom posts. Afin de pouvoir filtrer nos custom posts, nous les présenterons sous la forme d’une liste n’affichant que le titre de ces derniers. Dans chacune des balises `<li>`, il vous faut insérer les termes de la taxonomie du custom post. Cela est nécessaire afin de pouvoir appliquer la propriété CSS `display:none` via JQuery (step 4) lorsque le filtre est activé par l’utilisateur.

{% highlight php %}
<?php wp_reset_postdata(); ?>
<?php query_posts('posts_per_page=-1&post_type=livres'); ?>
<?php if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); $termes = get_the_terms(get_the_id(), 'genres_livres'); $termes_slug = array();
	  if (is_array($termes)) {foreach($termes as $terme) {$termes_slug[] = $terme --> slug;}
	  }?>
	<ul>
		<li id="post-<?php the_ID(); ?>" class="taxonomie <?php echo '' . implode(' , ', $termes_slug) . '">"></li>
	</ul>
	<?php endwhile; ?>
<?php endif; ?>
{% endhighlight %}

2. Créez les pages de vos customs post types via la manager WordPress, à partir des templates créés.

##Step 2 : Création de la liste déroulante des pages

Nos classifications d’articles sont établies, A présent, nous souhaitons afficher les pages relatives à ces dernières sous la forme d’une liste déroulante dans la sidebar afin que l’utilisateur puisse sélectionner la liste d’articles qu’il souhaite consulter. Toujours suivant notre exemple, ici nos listes d’articles sont : livres, poissons, arbres, animaux et autres. Via la fonction `wp_dropdown_pages`, nous composons notre liste de pages dans `functions.php` :

{% highlight php %}
function get_liste_cpt_sidebar() {?>
<aside>
	<h3 class="widget-title"></h3>
	<form id="liste_cpt" method="get" name="liste_cpt">
	 <?php $select = wp_dropdown_pages('show_option_none=Sélection%20bibliothèque&depth=1&sort_column=menu_order&echo=0');?> $select = preg_replace("#]*)>#", "", $select);
	 echo $select;
	 ?>
	<noscript>
	<input type="submit" name="submit" value="view" />
	</noscript>
	</form>
</aside>
<?php ?>}
{% endhighlight %}

Dans vos modèles de pages, vous devez appeler en sidebar la fonction nouvellement créée afin d’afficher la liste déroulante :

{% highlight php %}
<?php if (function_exists('get_liste_cpt_sidebar')) get_liste_cpt_sidebar();?>
{% endhighlight %}

Votre liste déroulante des pages de votre site est désormais visible en sidebar.

##Step 3 : Création des filtres de nos listes d’articles à l’aide des custom taxonomies WordPress

Afin de créer notre système de filtres, nous devons faire appel aux termes des taxonomies précédemment créées.

Nous souhaitons afficher les termes relatifs à la taxonomie d’un custom post type, sous la forme d’une liste.

Pour cela, vous devez au préalable appeler les termes de votre taxonomie via la fonction `get_terms` et déterminer quelles données de vos termes vous souhaitez voir remonter en front-end. Dans notre cas, nous souhaitons exposer le nom des termes, le slug et le nombre d’occurrences d’items par terme à l’aide de la fonction `get_term_by`.

Dans votre fichier `functions.php`, coller les lignes de codes suivantes :

{% highlight php %}
function custom_taxonomie_filtre_genres_livres() { ?>
<?php $termes = get_terms("genres_livres"); $count = count($termes); if ( $count --> 0 ){
  foreach($termes as $terme) {
  $tous_termes[] = $terme -> name;
  }
}?>
<aside>
	<h3 class="widget-title">Filtrer par :</h3>
	<div id="filtres"><a id="tous" class="current" href="#"> Tous </a>
	<?php if ( is_array($tous_termes) && count($tous_termes) --> 0 ): ?>
	<?php $terme_arr = array_unique($tous_termes);
	 	foreach( $terme_arr as $terme ): 
	 		$sort = get_term_by('name', $terme, 'type');?-->
	 	<?php endforeach; ?>
	<?php endif; ?></div>
</aside>
<?php ?>}
{% endhighlight %}

Dans vos modèles de pages, vous devez appeler en sidebar la fonction ci-dessus afin de déployer la liste des filtres constituée des termes de nos custom taxonomies :

{% highlight php %}
<?php if (function_exists('custom_taxonomie_filtre_genres_livres')) custom_taxonomie_filtre_genres_livres();?>
{% endhighlight %}

Le système de filtrage des custom posts est maintenant visible dans votre sidebar.

##Step 4 : Afficher les custom posts relatifs au filtre sélectionné via JQuery

Notre système de filtres ne fonctionnerait pas sans l’ajout d’une surcouche JQuery. Rappelez-vous, nous avons créé nos listes de custom posts au sein desquels nous avons inséré les termes de la taxonomie à laquelle ils appartiennent. Grâce à cela, nous allons pouvoir cacher les custom posts  n’appartenant pas au filtre sélectionné par l’utilisateur en leurs appliquant la propriété `display:none`. Créez un fichier `filtre.js` et copiez-collez le code suivant :

{% highlight js %}
jQuery(document).ready(function(jQuery){
  jQuery(function(){
    jQuery("#tous").click(function(){
      jQuery(".taxonomie").slideDown();
      jQuery("#filtres a").removeClass("actif");
      jQuery(this).addClass("actif");
      return false;
    });
    jQuery(".filtrer").click(function(){
      var filtre = jQuery(this).attr("id");
      jQuery(".taxonomie").hide();
      jQuery("."+ filtre).show();
      jQuery("#filtres a").removeClass("actif");
      jQuery(this).addClass("actif");
      return false;
    });
  });
});
{% endhighlight %}

Via les quelques lignes de codes ci-dessus, vous pourrez également appliquer au filtre sélectionné un état « actif » via l’ajout de la class `actif`.

![alt text](https://s3-eu-west-1.amazonaws.com/mdw-img/large/liste-filtre-terme-custom-taxonomie.png "Logo Title Text 1")

##Step 5 : on charte le tout via CSS

{% highlight css %}
/* =Select pages custom post types
----------------------------------------------- */
select {
  padding: .5em;
  background-color: #F9F9F9;
  color: #666666;
  line-height: 1.2em;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  -webkit-border-radius: 2px;
}
/* =Liste filtres custom taxonomies
----------------------------------------------- */
#filtres a{
  display:block;
  margin: 5px 3px;
  padding: 3px 5px;
  border: 1px solid #D9D9D9;
  background-color:#F9F9F9;
  color:#666;
  text-decoration:none;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
#filtres a.current{background-color:#DDD;}
#filtres a:hover{background-color:#33B5E5;color:#FFF;}
#filtres a.actif{
  background-color:#0099CC;
  color:#FFF;
  -webkit-box-shadow: 0 2px 2px rgba(0,0,0,.2) inset;
  -moz-box-shadow: 0 2px 2px rgba(0,0,0,.2)inset;
  box-shadow: 0 2px 2px rgba(0,0,0,.2)inset;
}
span.filtres_sidebar_compteur{
  float: right;
  margin-left: 10px;
  padding: 0 8px;
  border: 1px solid #CCC;
  background-color: #DDD;
  border-radius: 2px;
  font-size: 12px;
  line-height: 1.9em;
  text-align: center;
  color: #444;
}
#filtres a:hover span,#filtres a.actif span{
  background-color: white;
  border: 1px solid #0DA4C2;
  color: #666;
}
{% endhighlight %}

Et le tour est joué.