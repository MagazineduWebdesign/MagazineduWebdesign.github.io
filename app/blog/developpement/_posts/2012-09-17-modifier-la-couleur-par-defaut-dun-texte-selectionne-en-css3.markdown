---
title: Modifier la couleur par défaut d’un texte sélectionné en CSS3
date: 2012-09-17 17:22:56
category: design
tags:
- css3
- tutoriels
intro: Comment se distinguer des autres lorsque la concurrence est rude ? L'attention portée à chaque détail. En Web design, ces détails peuvent être la distinction majeure en regard d'un site Web concurrent.
image: Blog-Web-design-tutorial-et-inspiration-Magazine-du-Webdesign.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

Et cela peut commencer par un des plus petits détails : la couleur par défaut bleu d’un texte sélectionné.

Rien de plus simple ! Pour modifier la couleur de sélection, ouvrez votre fichier style.css et ajoutez les lignes de code suivantes :

{% highlight css %}
::selection{
  background-color: #444;
  color: white;
}

/* Firefox */
::-moz-selection {
  background-color: #444;
  color: white;
}
{% endhighlight %}

N’oubliez pas de modifier la couleur pour qu’elle corresponde à votre charte graphique.

`::selection` est une déclaration CSS3 prise en compte par Chrome, Safari, IE9+, and Opera.

`::-moz-selection` est la déclaration propre à Firefox.

Vous pouvez tester ce tuto en sélectionnant le texte de cet article.