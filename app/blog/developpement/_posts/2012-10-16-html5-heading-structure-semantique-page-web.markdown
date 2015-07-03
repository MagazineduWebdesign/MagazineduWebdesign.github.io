---
title: Headings HTML5 – au service de la sémantique
date: 2012-10-16 17:22:56
category: developpement
tags:
- html5
- techniques
intro: C'est officiel depuis quelques jours, l'HTML5 dispose désormais d'une feuille de route pour la publication de ses spécifications.
image: class-header-semantics.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl: http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html
viatitle: whatwg.org
---
Le W3C a annoncé une [standardisation officiel](http://dev.w3.org/html5/decision-policy/html5-2014-plan.html "standardisation officiel") en 2014. Une bonne nouvelle pour tous, cela permettra aux développeurs et aux navigateurs d’avoir une référence unique. Et c’est tant mieux, parce que le Web regorge d’utilisations plus qu’hasardeuses des nouvelles spécifications HTML5. Un seul exemple : les éléments sémantiques. Un peu de révisions avant les examens de fin d’année ?

##La sémantiquoi ?

La sémantique est l’étude du sens des unités lexicales – les mots et de leurs combinaisons.

>Nous définirons (…) le mot comme l’unité sémantique minima de la parole. (…) La science du mot s’appelle lexicologie. Elle comportera deux subdivisions, selon qu’on s’intéresse au nom ou au sens.
>L’aspect formel des mots est examiné par la morphologie (…). Les significations lexicales constituent le domaine de la sémantique. 
><cite>S. Ullmann, [Précis de sém. fr.](http://www.cnrtl.fr/definition/semantique "Précis de sém. fr."), Berne, éd. A. Francke, 1952, p. 33.</cite>

##Appliqué au Web, cela donne le Web sémantique

Tim Berners Lee fut le premier a énoncé le terme de Web sémantique dans un article intitulé [The Semantic Web](http://www.scientificamerican.com/article.cfm?id=the-semantic-web "The Semantic Web") (Scientific American Magazine, 17 mai 2001). Ce terme désigne une évolution du Web offrant la possibilité d’exploiter et d’interpréter automatiquement les données disponibles via des agents logiciels. L’accomplissement de cette lourde tâche revient au W3C dont un des principaux objectifs est de concevoir les techniques capables de tirer parti des données contenues dans les environnements fermés des bases de données en ligne.

###Finalités du Web sémantique ?

**Les limites et les inconvénients du Web** :

* Disparité des formats, des informations,
* Description et indexation insuffisante des ressources,
* Recherche approximative d’informations,
* Absence d’exploitation sémantique des liens hypertexte.

**Objectifs du Web sémantique** :

Métamorphoser le Web en un lieu où les ressources circuleraient librement entre machines afin d’être analysées, exploitées et distribuées via des services et des applications variés.

<figure>
  <img class="left" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/Semantic_Web_Stack.png" alt="Semantic_Web_Stack" width="" height="">
  <figcaption>Le Semantic Web Stack – Photo Wikipédia</figcaption>
</figure>

Cela libérerait l’utilisateur d’une partie importante du travail de recherche et d’exploitation d’informations en les lui restituant sous une forme intelligible.

Pour atteindre son objectif, le Web sémantique a besoin de s’appuyer sur le Web des données afin d’obtenir des données structurées à l’aide de liens (URI) et de métadonnées(RDF, Dublin Core, etc.). Via cette structuration, le Web s’autorise à :

* Exprimer explicitement les relations sémantiques entre les données, à l’instar de l’hypertexte pour les pages,
* Simplifier l’utilisation et la recomposition des ressources par les agents logiciels,
* Enrichir d’annotations les ressources du web, décrivant leurs contenus et leurs facultés,
* Offrir une standardisation de la structure des ressources,
* Développer une lexicographie universelle pour la production, le stockage et l’échange des données.

###Les nouveaux éléments sémantiques HTML5

Le Web sémantique ne se limite pas à la structuration des bases de données. Une structuration des pages Web est également nécessaire. Cela passe par l’utilisation de nouvelles spécifications telles que :

* Les microdata,
* La RDFa,
* Les microformats,
* Les éléments sémantiques HTML5.

Vous l’aurez compris, le Web sémantique est là pour faire le ménage. Il lui faut de la structure, de l’ordre.

La gestion des headings HTML5

Rétrospective

Un des principaux enjeux de l’HTML5 est la gestion des headings.

Avec l’HTML4, nous devons simplement déclarer un chapelet de tags `H1` ⇒ `H6` pour créer une hiérarchie logique au sein de nos pages Web. L’arborescence de la structure d’un document et de ses éléments peut être détaillée en veillant à ne pas ignorer l’ordre hiérarchique : un tag h3 ne peut pas être déclaré à la suite d’un tag `h1`.

Les moteurs de recherches et les lecteurs d’écran les interprètent telle une succession d’occurrences hiérarchisées, sans se préoccuper de leur emplacement au sein du document. Le rendu du DOM (Document Object Model) – l’arborescence de la structure d’un document et de ses éléments – sera interprété de la manière suivante :

{% highlight txt %}
Titre de la page (h1)
    |
    +-- Sous section (h2)
            |
            +-- Sous section (h3)
                    |
                    +-- Sous section (h4)
                            |
                            +-- Sous section (h5)
                                    |
                                    +-- Sous section (h6)
{% endhighlight %}

Comment faire si nous souhaitons détailler davantage le plan de notre page en ajoutant des noeuds aux sous-sections ?

Avec l’HTML4, la  création d’un nouveau noeud au sein de l’arborescence doit se faire via l’insertion d’un h4 entre deux h3 par exemple. Pas très intuitif.

{% highlight html %}
<h1>Titre de la page</h1>
<h2>Section</h2>
<p>...</p>
<h3>Sous-section</h3>
<p>...</p>
<h4>Nouveau noeud</h4>
<h3>Sous-section</h3>
<p>…</p>
{% endhighlight %}

Avec cette astuce, l’arborescence de notre document sera la suivante :

{% highlight txt %}
Titre de la page (h1)
    |
    +-- Sous section (h2)
            |
            +-- Sous section (h3)
            |       |
            |       +-- *Nouveau noeux* (h4)
            +-- Sous section (h3)
            |
            +-- Sous section (h3)
            |
            +-- Sous section (h3)
{% endhighlight %}

Le « poids sémantique » de notre nouveau noeud au sein de l’arborescence est ainsi réduit par rapport à son parent `h3`. Cela permet aux lecteurs d’écran et aux bots des moteurs de recherches d’interpréter correctement l’organisation des éléments au sein de la page.

##L’HTML5, une nouvelle structure de page Web

<figure>
  <img class="left" src="https://s3-eu-west-1.amazonaws.com/mdw-images/large/html5-badge-h-semantics.png" alt="html5-badge-h-semantics" width="" height="">
  <figcaption>Badge HTML5</figcaption>
</figure>

Avec l’HTML5, la structure l0gique d’un document Web – son plan – est dictée par l’imbrication et l’emplacement des headings dans les nouvelles balises sémantiques telles que `<header>`, `<footer>`, `<nav>`, `<article>`, `<hgroup>`, `<aside>` et `<section>`.

Avec l’HTML4, la seule manière de structurer l’arborescence d’un document est l’emploi des tags h1⇒ h6. Dorénavant, l’arborescence est élaborée en fonction des noeuds crées par les balises HTML5 et leurs headings.

<aside>
  <h2>Voyons ensemble la définition de ces éléments sémantiques</h2>
  <dl>
    <dt><dfn>section</dfn></dt>
    <dd>L’élément `section` représente une section d’un document ou d’une application Web. Une section comprend un bloc ou un groupe de contenus sur une thématique commune, devant être accompagnée d’un heading. Les exemples d’utilisations peuvent être la définition des chapitres, des tabs d’une page, ou des sections d’une thèse. Une page d’accueil d’un site Web peut être séquencée via une section d’introduction, une autre consacrée à la présentation d’un service et une dernière pour la partie coordonnées de contact.</dd>
    <dt><dfn>nav</dfn></dt>
    <dd>L’élément `nav` représente une section d’une page reliant des pages ou des parties d’une page : c’est une section servant à la navigation. L’élément `nav` doit être employé uniquement pour relier les sections les plus importantes d’un site Web. Il est courant de retrouver une liste de liens en footer, pointant vers les grandes rubriques. Dans de tels cas, l’utilisation de l’élément `nav` n’est pas nécessaire. À lui seul, l'élément `footer` peut remplir ce rôle.</dd>
    <dt><dfn>article</dfn></dt>
    <dd>L’élément `article` représente un item contenant une composition indépendante de l’agencement d’un document, d’une page, d’une application ou d’un site Web et étant destinée à être réutilisée de manière autonome dans un autre agencement, par exemple au sein d’un flux de syndication. Cela peut être un message de forum, un article, une section de login, un widget, un commentaire, ou tout autre élément indépendant du contenu le juxtaposant.</dd>
    <dt><dfn>aside</dfn></dt>
    <dd>L’élément `aside` représente une section d’une page dont le contenu est relatif aux blocs de contenus adjacents, mais ne peut pas être fusionné à ces derniers. Il est généralement employé en tant que sidebars, citations, publicités, groupement d’éléments nav et d’autres contenus à différencier du contenu principal de la page.</dd>
    <dt><dfn>hgroup</dfn></dt>
    <dd>L’élément `hgroup` est un groupement des tags `h1` ⇒ `h6` lorsque le titre d’une section comporte plusieurs niveaux hiérarchiques, tels que des sous-titres ou une baseline.</dd>
    <dt><dfn>header</dfn></dt>
    <dd>L’élément `header` représente une section d’introduction. Il peut contenir le titre (`h1` à `h6`) ou un groupe de titre (`hgroup`), néanmoins cela n’a rien d’obligatoire. L’élément `header` est utilisé également pour envelopper des sections d’une page tels que les items de navigations, les logos, les formulaires de recherche, les informations relatives à la publication d’un article, etc.</dd>
    <dt><dfn>footer</dfn></dt>
    <dd>L’élément `footer` représente généralement la partie inférieure des blocs de contenus le précédant ou le pied de page de l’élément racine du document : auteur, copyright, liens vers des ressources relatives, annexes, date, etc.</dd>
  </dl>
</aside>

##Comparons la valeur sémantique de ce changement advenu avec l’HTML5

Prenons l’exemple suivant en HTML4 :

{% highlight html %}
<div id="header">
  <h1>Le temps et l'espace</h1>
</div>
<div id="article">
  <h2>Qu'est-ce que le temps</h2>
  <p>...</p>
  <h2>Qu'est-ce que l'espace</h2>
  <p>...</p>
</div>
{% endhighlight %}

L’arborescence du document sera celle-ci :

{% highlight txt %}
Le temps et l'espace (h1)
    |
    +-- Qu'est-ce que le temps (h2)
    |
    +-- Qu'est-ce que l'espace (h2)
{% endhighlight %}

L’ensemble du code est valide en HTML4 et en HTML5. Néanmoins l’HTML5 apporte de nouveaux éléments donnant une valeur sémantique en plus à notre document.

ID header ne donne aucune information sur sa nature lorsque le document est parcouru. Sa valeur sémantique est nulle. De même pour ID article.  Les user agents Web tels que les navigateurs, les robots d’indexation, en passant par les lecteurs d’écran ou les navigateurs braille ne sont pas en mesure d’interpréter la valeur sémantique d’un ID.

L’HTML5 avec les balises <header> et <article> compense cette absence de valeur sémantique en notifiant à qui veut l’entendre que nous sommes en présence d’une en-tête de document et d’un bloc de contenu indépendant de l’agencement de la page.

##HTML5 et bon sens

Voici une structure typique d’une page Web en HTML5 :

{% highlight html %}
<header>
	<hgroup>
	  <h1>Mon site</h1>
	  <h2>Baseline</h2>
	</hgroup>
</header>
<article>
	<header>
	  <h1>Titre de l'article</h1>
	</header>
	<h2>Sous-section</h2>
	<p>...</p>
</article>
<article>
	<header>
	  <h1>Titre de l'article</h1>
	</header>
	<h2>Sous-section</h2>
	<p>...</p>
</article>
<aside>
	<h1>Sidebar</h1>
	<p>...</p>
</aside>
<footer>
	<section>
	  <h1>Blog roll</h1>
	  <p>...</p>
	</section>
</footer>
{% endhighlight %}

L’arborescence de la page sera la suivante :

{% highlight txt %}
Mon site (h1)
    |
    +-- Titre de l'article (h1)
    |       |
    |       +-- Sous section (h2)
    +-- Titre de l'article (h1)
    |       |
    |       +-- Sous section (h2)
    +-- Sidebar (h1)
    |
    +-- Blog roll(h1)
{% endhighlight %}

Que ce passe-t-il si nous ne déclarons aucun heading dans notre page Web ?

{% highlight txt %}
Racine indéfinie
    |
    +-- Section indéfinie
    |
    +-- Section indéfinie
    |
    +-- Section indéfinie
    |
    +-- Section indéfinie
{% endhighlight %}

On observe un maintien de l’arborescence. Ce sont les balises `<article>`, `<section>` et `<aside>` qui créent les noeuds – les sections – au sein de l’arborescence. En revanche, le fait de supprimer les headings ôte toute valeur sémantique à l’arborescence. Dans cet exemple, le rôle des headings est de nommer les noeuds du document Web.

Les balises `<section>`, `<article>`, `<nav>` et `<aside>` sont les seuls éléments HTML5 permettant de sectionner un document ou une page Web. Cette faculté se traduit par la création des noeuds au sein de l’arborescence représentant les sections du document.

Il est donc impératif que ces balises comportent au minium un heading. Dans le cas contraire, la section créée ne sera pas nommée et restera donc comme indéfinie pour les agents logiciel. Une perte sémantique sèche !

##Le syndrome <section>

L’élément section est un des plus générique : il est utilisé afin de créer une section sur une thématique donnée au sein d’un document.

Et comme nous venons de le voir, cet élément doit être accompagné d’un heading pour faire sens aux yeux des agents logiciel.

###Une section dans une section dans une section…

**Alors pourquoi l’utiliser comme un simple élément `<div>`**?

`<section>` supporte sans problème l’ajout d’attributs tels que les `ID` ou les `class`. Cela permet d’avoir le contrôle de son apparence.

Ok, mais pourquoi l’utiliser à tout va comme un simple élément d’habillage graphique ? Alors que l’on vient à peine de voir que ce dernier à une utilisation et un mode d’emploi bien spécifique.

Ce que je remarque fréquemment dans bon nombre de templates, tutoriels et Cie labellisés HTML5 est l’utilisation abusive de l’élément `<section>`.

Un simple exemple :

{% highlight html %}
<header>
  <hgroup>
    <h1>Mon site</h1>
  </hgroup>
</header>

<section class="mon-article">
	<article>
		<h1>Titre de l'article</h1>
	</article>
</section>
{% endhighlight %}

`<section>` pourrait être remplacé par un élément `<div>`, l’aspect final de la page serait le même.

Par contre, si nous analysons la structure sémantique du document, nous observons la création d’un noeud substituant la position enfant de l’élément `<article>` :

{% highlight txt %}
Mon site (h1)
    |
    +-- Section indéfinie
            |
            +-- Titre de l'article (h1)
{% endhighlight %}

L’ensemble de la structure sémantique de la page Web est remise en cause. En plus de brouiller les pistes pour les agents logiciel, l’utilisation abusive des éléments `<section>` alourdit le poids de votre code et augmente la profondeur d’imbrication de vos éléments. Les performances de votre site Web n’en seront que plus réduites.

Pour vos assurez de la bonne implémentation des nouveaux éléments sémantiques HTML5, je vous conseille d’utiliser l’outil en ligne [HTML5 Outliner](http://gsnedders.html5.org/outliner/ "HTML5 Outliner").

##Conclusion

A l’aide de standards et en bâtissant un système capable de manipuler les données dans de bonnes conditions d’interopérabilité, le Web sémantique ouvre un accès « intelligent » à l’information.