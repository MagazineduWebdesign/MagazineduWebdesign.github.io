---
title: jQuery, déterminer le nombre d’éléments input checkbox cochés
date: 2013-02-20 17:22:56
category: "developpement"
tags:
- javascript
- tutoriels
intro: J'ai dû récemment me confronter à la création d'un questionnaire HTML dont l'objectif était d'afficher en direct le score du répondant. Mon premier réflexe a été Google. Durant 20 min., j'ai recherché un plugin WordPress pouvant correspondre à mon besoin. Vaine recherche.
image: tutoriel-jquery-selecteur-checked.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

Lasse de ma paresse, je vais me balader sur l’API jQuery où j’ai trouvé le sélecteur checked. Une merveille pour créer en quelques minutes un bloc Score total au sein d’un questionnaire. Découvrez le détail de l’astuce.

Pour consulter le résultat de mon dur labeur :

<a class="button primary radius" href="http://magazineduwebdesign.com/accessibilite-web-ckecklist" target="_blank">Explorer la démo</a>


##Tutoriel – sélecteur jQuery checked

La première chose à faire est de créer votre questionnaire. Il faut donc mettre en place un formulaire HTML contenant une liste de contrôles du type checkbox :

{% highlight html %}
<form>
  <ol>
    <fieldset>
      <legend>Questionnaire</legend>
      <li><label><input type="checkbox" name="nom" value="1" /> Item un</label></li>
      <li><label><input type="checkbox" name="nom" value="2" /> Item deux</label></li>
      <li><label><input type="checkbox" name="nom" value="3" /> Item trois</label></li>
      <li><label><input type="checkbox" name="nom" value="4" /> Item quatre</label></li>
      <li><label><input type="checkbox" name="nom" value="5" /> Item cinq </label></li>
    </fieldset>
  </ol>
</form>
{% endhighlight %}

La suite est très simple, on construit un bloc affichant le score du répondant :

{% highlight html %}
<p class="total"></p>
{% endhighlight %}

On comptabilise le nombre de checkboxes cochées via l’utilisation du [sélecteur jQuery checked](http://api.jquery.com/checked-selector/ "sélecteur jQuery checked") :

{% highlight js %}
<script type="text/javascript">
/* Score total */
var scoretotal = function() {
  var n = $( "input:checked" ).length; // Contrôle nombre checked
  $( "p.total" ).text( "Score : " + n + "/5" ); // Récupération valeur + insertion dans paragraphe
};
scoretotal();
$( "input[type=checkbox]" ).on( "click", scoretotal );
</script>
{% endhighlight %}

On définit une variable `Score total` puis on contrôle combien d’éléments `input` sont cochés.

La touche finale : on récupère la valeur totale et on l’insère dans le bloc Score total à l’aide de la méthode `.text()`.

Voilà!