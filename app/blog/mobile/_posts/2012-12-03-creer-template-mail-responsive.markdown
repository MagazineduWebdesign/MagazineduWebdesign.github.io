---
title: Réaliser un template mail responsive 100% compatible avec les clients mails et navigateurs mobiles
date: 2012-12-03 17:22:56
category: mobile
tags:
- email
- mobile
- responsive
intro: De nos jours, de plus en plus d'emails sont lus sur les terminaux mobiles. Avec une évolution de la lecture sur mobile aussi marquée, les campagnes d'e-mailing se doivent d'être compatibles avec le plus grand nombre de terminaux.
image: template-mail-responsive-par-zurb.jpg
image-legende:
auteur: MagDuWebdesign
keyword_title:
keyword_desc:
viaurl:
viatitle:
---

Le studio Zurb l’a bien compris et a donc décidé de réaliser une série de 5 templates mail responsive. Les fêtes de fin d’année approchant, ils sont disponibles en téléchargement gratuit sur le Zurb’s playground[Zurb’s playground](http://www.zurb.com/playground/responsive-email-templates "Zurb’s playground").

##Fonctionnement d’un template mail responsive

Étonnamment, les media queries ne sont pas nécessairement requises.
La cause ? Une compatibilité médiocre des clients mails et navigateurs mobiles.

Zurb n’a pas complètement omis les media queries de ses templates, elles sont implémentées pour les clients mails compatibles.

##Magie du tag viewport

Même si les media queries ne sont pas utilisées, il est nécessaire de recourir au tag viewport afin de s’assurer que la largeur du template corresponde à celle du device. Sans cela, certains supports dont iOS implémenteraient une largeur de 980px par défaut.

{% highlight html %}
<meta name="viewport" content="width=device-width" />
{% endhighlight %}

Mise en place du template mail fluide

L’un des challenge a été de contraindre la largeur du template mail sur les supports desktop et de donner une largeur 100% sur les terminaux mobiles.

La solution est de fixer la largeur maximale des cellules à 600px. Lorsqu’une résolution inférieure à 600px pointe le bout de son nez, la largeur des cellules s’ajuste progressivement.

{% highlight html %}
<table>
  <tr>
    <td></td>
    <td class="container"><!-- CONTENU --></td>
    <td></td>
  </tr>
</table>
{% endhighlight %}

{% highlight css %}
.container {
  max-width:600px!important;
  display:block!important;
  margin:0 auto!important; /* centrer */
  clear:both!important;
}
{% endhighlight %}

Astuce pour un template mail responsive à deux colonnes

Certains templates proposés par Zurb contiennent deux colonnes. Cela est sympa sur desktop mais sur mobile, il nous faut un template 1 colonne.

Zurb a trouvé l’astuce en attribuant une largeur et un float à chacune des 2 colonnes. Si le conteneur .column-wrap a une largeur supérieure à 600px, les deux colonnes s’affichent côte-à-côte, si la largeur est inférieure, elles s’afficheront l’une en-dessous de l’autre.

{% highlight html %}
<div class="column-wrap">
  <div class="column">
    <table>
      <tr>
        <td>
          <!-- CONTENU -->
        </td>
      </tr>
    </table>
  </div>
  <div class="column">
    <table>
      <tr>
        <td>
          <!-- CONTENU -->
        </td>
      </tr>
    </table>
  </div>
</div>
{% endhighlight %}

{% highlight css %}
.column-wrap {
  padding:0!important;
  margin:0 auto;
  max-width:600px!important;
}

.column {
  width: 300px;
  float:left;
}
{% endhighlight %}

##Merci Zurb

Zurb nous offre l’opportunité d’optimiser facilement nos [templates mail mobile](http://magazineduwebdesign.com/templates-mail-mobile "template email mobile") pour que l’expérience utilisateur soit la plus homogène sur tous les écrans. Ne vous en privez pas, [téléchargez les templates mail responsive](http://www.zurb.com/playground/responsive-email-templates "téléchargez les templates mail responsive").