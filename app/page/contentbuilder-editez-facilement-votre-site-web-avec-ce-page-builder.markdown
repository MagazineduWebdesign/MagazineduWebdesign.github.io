---
layout: "ressources-default"
title: "ContentBuilder – Editez facilement votre site Web avec ce page builder"
date: "2016-09-05 00:23:57"
path1: "ressources"
path2: "outils-services"
path3: "design"
category: "ressources-outils-services-design"
sponsored: "true"
by: "MDW + ContentBuilder"
url-demo: "https://www.prototypo.io/"
logo: "innovastudio-logo.jpeg"
image-sub-post-intro: "contentbuilder-js-editeur.jpg"
intro: "Avec ce page builder, vous pouvez désormais éditer via Drag & drop des contenus dans votre propre site Internet / CMS."
description: "Un éditeur de contenu user friendly vous permettant de modifier facilement vos pages Web en utilisant un mélange de WYSIWYG classique et une expérience de drag & drop."
noindex: "true"
---
ContentBuilder.js est un plugin jQuery qui convertit un élément  &lt;div&gt; d’une page Web en un bloc éditable. Vous pouvez utiliser le plugin dans vos applications web, CMS, etc. Contrairement aux autres éditeurs, le plugin vous fournit des blocs de contenu très bien conçus, prêts à être glisser-déposer au sein de n’importe quelle zone de vos pages. Vous pouvez même créer vos propres blocs de contenu.

Un éditeur de texte user friendly qui peut vous aider à modifier facilement vos pages Web en utilisant un mélange de [WYSIWYG](https://fr.wikipedia.org/wiki/What_you_see_is_what_you_get) classique et une expérience de drag & drop.ContentBuilder.js repose sur jQuery et utilise des blocs comme unité d'édition.Chaque section sur la page est un bloc et selon leur type, diverses commandes d'édition sont disponibles.Ces blocs peuvent facilement être déplacés par glisser-déposer, et plus de 150 nouveaux blocs de contenu préréglés peuvent être ajoutés au sein d’une page Web à partir d’une barre latérale sur l'écran.

<figure class="figure-img mod-note-img">
  <img data-interchange="[https://s3-eu-west-1.amazonaws.com/mdw-images/small/contentbuilder-js-blocs-de-contenus-preregles.png, (small)],[https://s3-eu-west-1.amazonaws.com/mdw-images/medium/contentbuilder-js-blocs-de-contenus-preregles.png, (medium)],[https://s3-eu-west-1.amazonaws.com/mdw-images/large/contentbuilder-js-blocs-de-contenus-preregles.png, (large)]" class="note-container-img" alt="plus de 150 nouveaux blocs de contenu préréglés" width="736" height="auto" />
  <noscript><img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/contentbuilder-js-blocs-de-contenus-preregles.png" alt="plus de 150 nouveaux blocs de contenu préréglés" width="736" height="auto" /></noscript>
  <figcaption>Plus de 150 nouveaux blocs de contenu préréglés.</figcaption>
</figure>

L’avantage d’une telle solution réside dans le fait que des utilisateurs n’ayant pas un bagage technique très développé peuvent être en mesure d’éditer une page Web ou un [site design](http://www.magazineduwebdesign.com/inspirations/ui-design/sites-web/) via quelques gestes.ContentBuilder.js inclut également la possibilité de dupliquer des blocs existants de contenu. Cela a pour avantage de tirer profit des dispositions existantes de contenu sans les reproduire étape par étape.Cet éditeur de site Web peut être utilisé sur tous types d’applications, indépendamment de la technologie en arrière plan.ContentBuilder.js est également disponible en tant que plugin [WordPress](http://www.magazineduwebdesign.com/conseils/guides/wordpress/) sous le nom de [WP Content Builder](http://innovastudio.com/content-builder-for-wordpress.aspx). Ce WordPress theme builder est accessible via une licence commerciale disponible à partir de $99.

## Comment utiliser ce page builder

Inclure les fichiers HTML et JS nécessaire au sein de votre site Internet :

{% highlight js %}
$("#contentarea").contentbuilder({      
  snippetFile: 'snippets.html'      
  });
{% endhighlight %}

Le paramètre snippetFile vous permet de spécifier un fichier html contenant une typologie de blocs de contenu. Vous pouvez donc ajouter vos propres snippets.

Pour obtenir le contenu HTML, déclarez :

{% highlight js %}
var sHTML = $('#contentarea').data('contentbuilder').html();
{% endhighlight %}

Vous trouverez ci-dessous un exemple de snippet :

{% highlight html %}
<div data-thumb="assets/simple/thumbnails/01.png">
  <div>
    <h1>Heading 1</h1>
    <p>Lorem Ipsum is simply dummy text...</p>
  </div>
</div>
<div data-thumb="assets/simple/thumbnails/02.png">
  <div>
    <p>Lorem Ipsum is simply dummy text...</p>
  </div>
</div>
<div data-thumb="assets/simple/thumbnails/03.png">
  <div>
    <img src="assets/simple/header.jpg" />
  </div>
</div>

{% endhighlight %}

<figure class="figure-img mod-note-img">
  <img data-interchange="[https://s3-eu-west-1.amazonaws.com/mdw-images/small/contentbuilder-js-snippet.jpg, (small)],[https://s3-eu-west-1.amazonaws.com/mdw-images/medium/contentbuilder-js-snippet.jpg, (medium)],[https://s3-eu-west-1.amazonaws.com/mdw-images/large/contentbuilder-js-snippet.jpg, (large)]" class="note-container-img" alt="Création d'un custom snippet ContentBuilder" width="auto" height="auto" />
  <noscript><img src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/contentbuilder-js-snippet.jpg" alt="Création d'un custom snippet ContentBuilder" width="auto" height="auto" /></noscript>
  <figcaption>Création d'un custom snippet ContentBuilder.</figcaption>
</figure>

## Demos

- Un [simple bloc de contenu](http://innovastudio.com/builderdemo/example5.html) ;
- Une [page de contenu](http://innovastudio.com/builderdemo/example2.html) ;
- Un autre style de page de contenu.

## Conclusion

En explorant le fonctionnement et les démos ci-dessus, vous aurez certainement compris le potentiel de ce page builder. En implémentant quelques lignes de code .js, ce plugin jquery permet à quiconque de modifier via son navigateur une page Web ou un site Internet dans son ensemble.

J’ai déjà vu par le passé des outils promettant ce type de fonctionnement mais je n’avais jusqu’à présent pas été convaincu de leur facilité d’utilisation et par dessus tout de leur flexibilité. [ContentBuilder.js](http://innovastudio.com/content-builder.aspx) nous offre une belle promesse via une interface user friendly et une adaptabilité à tout type d’environnement technique avec une possibilité d’inclure et de modifier à la volé des blocs de contenus personnalisés.

La [licence standard](http://innovastudio.com/content-builder/buy.aspx) de ce site builder est disponible à partir de $69, soit environ 60 €.

Faites le test et partagez votre expérience sur la page [Facebook](https://www.facebook.com/MagazineDuWebdesign/) et le compte [Twitter](https://twitter.com/@MagDuWebdesign) du Magazine du Webdesign.
