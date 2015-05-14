---
title: 40 points à checker pour atteindre le nirvāṇa de l’accessibilité Web
date: 2013-02-13 17:22:56
category: developpement
tags:
- accessibilite
intro: La puissance du Web réside dans son universalité. Un accès pour tous, quelle que soit la déficience est un aspect essentiel — Tim Berners-Lee.
image: accessibilite-web-checklist-magazine-du-webdesign.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

<p><strong>Ce mantra vous fait penser que l’accessibilité de votre site Web est au top ?</strong> Ne le prenez pas mal, mais à mon avis non. Ne vous en faites pas, tout problème a sa solution.</p>
<p>Partons du principe que l’<strong>accessibilité Web</strong> et vous ça fait 2 et que vous priez ardemment les dieux des Internets afin que les 2,5 millions d’handinautes français puissent parcourir vos pages Web. Un miracle peut arrivé sans prévenir, mais il est plus sage de le provoquer en donnant une pichenette via quelques astuces simples à mettre en place.</p>
<h2>Fonctionnement de la checklist</h2>
<p>J’ai regroupé au sein d’une checklist, 40 techniques permettant d’améliorer l’accessibilité Web de vos pages. Pour connaître le niveau d’accessibilité de votre site Web, cochez les techniques déjà mises en place et vous verrez votre score s’accroître dans le compteur. <strong>Cela vous permettra d’établir une to-do list des améliorations à faire à partir des items non-cochés.</strong></p>
<p class="total">Score : 0/40</p><form>
<ol>
<fieldset>
<legend style="margin-bottom: 1em;">
<h2>Accessibilité Web et structure du document</h2>
</legend>
<li><label><input type="checkbox" name="condgen" value="OK">&nbsp;La structure HTML de la page respecte les recommandations du W3C ? </label> <small>Exemple : utilisation des éléments <code>ol</code> pour les listes ordonnées à la place d’un <code>br</code>. Testez votre code avec l’outil <a href="http://validator.w3.org/" target="_blank">validator.w3.org</a>.</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les éléments de mise en forme sont séparés de la structure du document et regroupés dans un fichier .css ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Utilisation du tag <code>title</code> pour nommer les pages et indiquer la nature de leurs contenus ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Présence de l’attribut <code>lang</code> définissant la langue du document ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Mise en place de la technologie <a href="http://www.w3.org/TR/wai-aria/" title="www.w3.org/TR/wai-aria" target="_blank">WAI-ARIA</a> (Web Accessibility Initiative’s Accessible Rich Internet Applications) permettant la définition des rôles et des états de chaque élément HTML ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les sections du document sont hiérarchisées via les headings <code>h1</code> à <code>h6</code> et l’emploi de la technologie ARIA ?</label><br><small>L’utilisation des balises sémantiques HTML5 pour définir le DOM d’un document n’est pas déconseillée, néanmoins toutes les technologies d’assistance ne sont pas encore compatibles. Testez la structure de votre document avec l’outil <a href="http://gsnedders.html5.org/outliner/" title="HTML5 Outliner" target="_blank">HTML5 Outliner</a></small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Indication des headers de tableaux via l’utilisation de la balise <code>th</code> ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Chaque tableau dispose d’un sommaire ? </label><br><small>&lt;table border="0" summary="Calendrier mensuel des événements de… "&gt;</small></li>
</fieldset>
<fieldset>
<legend style="margin-bottom: 1em;">
<h2>Accessibilité, design et contenus</h2>
</legend>
<li><label><input type="checkbox" name="condgen" value="OK">&nbsp;Les contenus sont lisibles lorsque les images sont désactivées ? </label> <small>Prêtez attention au contraste de couleur entre les textes et leur background.</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Le contraste entre l’arrière-plan et le premier plan de votre design est suffisant ? </label><br><small>Faites le test avec l’outil <a href="http://leaverou.github.com/contrast-ratio/" title="Contrast Ratio" target="_blank">Contrast Ratio</a>.</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les tests effectués avec <a href="http://colorfilter.wickline.org/" title="color filter" target="_blank">Color filter</a> pour les déficiences visuelles communes sont concluants ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> La taille de police s’adapte en fonction des paramètres définis par l’utilisateur dans son navigateur ? </label><br><small>Emploi des unités relatives (em) vs unités fixes (px).</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> La taille de police est supérieure à 0.625em (10px) ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les contenus sont accessibles et lisibles quand l’utilisateur double la taille de police ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> La longueur des lignes est comprise entre 55 et 75 caractères espaces compris ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les titres et les liens sont facilement reconnaissables par l’utilisateur ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les titres et les ancres de liens sont explicites pour l’utilisateur ?</label><br><small>Bannir le <em>cliquez ici</em>.</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les liens dont l’ancre n’est pas explicite pour l’utilisateur sont accompagnés d’une description à l’aide de l’attribut <code>title</code> ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Aucun élément de la page ne produit des flashs ou des clignotements plus de 3 fois par seconde ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> L’indicateur de focus est visible lorsque l’utilisateur navigue à l’aide du clavier ?</label><br><small>Utilisation des pointillés standards ou d’indicateurs indépendants de la couleur.</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> La compréhension du contenu ne dépend pas d’un élément graphique ? </label><br><small>Exemple : <em>l’item en rouge est une erreur nécessitant une correction de votre part</em>.</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> L’<a href="http://webaim.org/techniques/screenreader/" title="webaim.org - screenreader" target="_blank">ordre de lecture</a> pour les lecteurs d’écran est similaire à l’ordre visuel ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Chaque élément d’une page est accessible et manipulable via l’utilisation du clavier ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Mise à disposition de raccourcis clavier pour les principales fonctionnalités du site ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Présence d’un lien <em>accès direct au contenu</em> pour les pages contenant un grand nombre d’items de navigation ?</label></li>
</fieldset>
<fieldset>
<legend style="margin-bottom: 1em;">
<h2>Accessibilité des images et des éléments multimédias</h2>
</legend>
<li><label><input type="checkbox" name="condgen" value="OK"> Présence de l’attribut <code>alt</code> sur chaque balise <code>img </code>?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les médias vidéo contiennent une retranscription écrite (sous-titres) ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les médias vidéo et audio sont accompagnés d’une description écrite ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les lecteurs vidéo et audio disposent au minimum d’un contrôle Play accessible via le clavier ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les images ne sont pas employées comme vecteurs d’informations essentielles à la compréhension du document ? </label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les captchas visuels sont accompagnés d’une alternative audio ?</label></li>
</fieldset>
<fieldset>
<legend style="margin-bottom: 1em;">
<h2>Accessibilité et JavaScript</h2>
</legend>
<li><label><input type="checkbox" name="condgen" value="OK"> Utilisation du JavaScript à minima n’obstruant pas la compréhension et la lisibilité du document ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Présence d’une solution alternative pour les utilisateurs n’ayant pas activé le JavaScript ?</label></li>
</fieldset>
<fieldset>
<legend style="margin-bottom: 1em;">
<h2>Accessibilité des formulaires</h2>
</legend>
<li><label><input type="checkbox" name="condgen" value="OK"> Structuration logique des formulaires ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Présence de l’élément <code>label</code> pour chaque item du formulaire (<code>input</code>, <code>select</code>, etc) ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les champs sont accompagnés d’un label explicite ou disposent d’une aide lorsque cela est nécessaire ?</label><br><small>Exemple : <em>Code de sécurité situé au dos de votre CB</em>.</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Utilisation de l’élément <code>fieldset</code> et <code>legend</code> pour les boutons radio et les check boxes lorsque ces derniers appartiennent à un même ensemble? </label><br><small>Exemple : un formulaire demandant de choisir entre A ou B, sa légende est <em>Votre choix ?</em>, cette dernière et les deux options sont encapsulées dans l’élément <code>fieldset</code>.</small></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Les erreurs du formulaire sont notifiées via un texte situé à proximité du champ en cause ou sont listées en haut de page et disposent chacune d’une ancre pointant vers le champ incriminé ?</label></li>
</fieldset>
<fieldset>
<legend style="margin-bottom: 1em;">
<h2>Le test d’accessibilité Web</h2>
</legend>
<li><label><input type="checkbox" name="condgen" value="OK"> Test de vos pages avec l’outil <a href="http://wave.webaim.org/" title="Wave" target="_blank">Wave</a> ?</label></li>
<li><label><input type="checkbox" name="condgen" value="OK"> Présence d’une charte d’accessibilité résumant les actions mises en place sur votre site pour les utilisateurs de technologies d’assistance ?</label></li>
</fieldset>
</ol>
</form>
<p class="total">Score : 0/40</p><p>N’oubliez pas de partager votre score dans les commentaires afin de nous montrer à quel point vous êtes un expert de l’<strong>accessibilité Web</strong>.<br>
Pour en savoir plus sur l’accessibilité Web, consultez le site de l’<a href="http://www.e-accessibility.info/fr/accueil/" target="_blank" title="Association e-accessibility">association e-accessibility</a>.</p>


<script type="text/javascript">
/* Score total */
var $j = jQuery.noConflict();
window.onload = function() {
var scoretotal = function() {
var n = $j( "input:checked" ).length;
$j( "p.total" ).text( "Score : " + n + "/40" );
};
scoretotal();
$j( "input[type=checkbox]" ).on( "click", scoretotal );
};
</script> 