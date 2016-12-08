---
layout: "conseils-default"
title: "Plesk + Git – un outil puissant pour déployer vos sites et vos applications Web"
date: "2016-12-07 06:23:57"
path1: "conseils"
path2: "guides"
path3: "developpement"
category: "guides"
tags: "guides-developpement"
sponsored: "true"
by: "MDW + Plesk"
by-url: "https://www.plesk.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign"
intro: "Il y a quelques jours, j'ai publié un article présentant les avantages d'utiliser Plesk pour [gérer la maintenance et la sécurité de sites WordPress](http://www.magazineduwebdesign.com/conseils/guides/comment-automatiser-la-securite-d-un-site-wordpress/). J'ai souhaité poursuivre mon aventure avec Plesk. Cette fois-ci, j'ai testé la compatibilité de [Plesk avec Git](https://www.plesk.com/extensions/git/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) – le système le plus populaire pour gérer du code. Voilà ce que j'ai appris avec cet outil. Si vous avez un doute sur la prononciation de Git, sachez que c'est [ɡɪt] et non [d͡ʒɪt]."
description: "Tutoriel pour utiliser Git avec Plesk sur un répoertoire local ou hébergé sur GitHub ou BitBucket."
---
**Transparence** : ce contenu fait partie d'une série d'articles sponsorisés par Plesk. Je sélectionne les outils qui me semblent faciliter le quotidien des développeurs et des designers. L'évaluation ci-dessous reflète mes propres opinions. L'objectif est de vous apporter une vue d'ensemble de la solution. L'approche se veut franche et honnête. Voilà.

{% include custom/cartes/carte_ad_medium-rect-in-content.html %}

## Git – une nécessité pour collaborer intelligemment

[Git](https://git-scm.com/) est un système de gestion collaborative de fichiers. Cette technologie répertorie tous les changements survenus au sein d'un document et synchronise ces modifications au sein d'un répertoire commun.

Git gère les historiques de modification et les demandes de synchronisation avec le répertoire. Chaque contributeur affilié au répertoire peut librement modifier ses versions de fichiers sans perturber le développement des autres collaborateurs. Git se chargera de rassembler les versions de chaque collaborateur au sein du répertoire commun. Magique.

Plesk a développé une extension compatible avec la technologie Git. Découvrez comment l'activer et l'utiliser dans la suite de cet article.

## Créer un répertoire Git en local ou utiliser un répertoire Git distant

Plesk permet de centraliser un grand nombre de tâches de développement et de maintenance. C'est notamment le cas pour un workflow basé sur Git.

La première étape consiste à installer Git sur Plesk en se rendant dans le catalogue des extensions. Assurez-vous que votre version de Plesk autorise l'utilisation de Git.

{% include components/content-post-default-figure-image.html param="plesk-catalogue-extensions.jpg" %}

Au sein de Plesk, vous pouvez ajouter deux types de répertoire Git, en fonction de votre process de développement :

- Un **répertoire en local** sur votre machine. Dans ce cas, Git envoie les modifications et les ajouts de fichiers à Plesk. Ce dernier se charge de les déployer sur votre serveur distant.
- Un **répertoire Git distant** hébergé sur [GitHub](http://github.com) ou [BitBucket](http://bitbucket.org). Vous envoyez les changements sur ce répertoire distant. Plesk se charge de déployer les modifications en production.

{% include components/content-post-default-figure-image.html param="plesk-git-set-up-repertoire-local-ou-distant.jpg" %}

## Gestion du déploiement des fichiers

### Gestion des commits et des branches

L'extension Git de Plesk offre la possibilité d'afficher les logs Git pour chaque branche d'un répertoire.

{% include components/content-post-default-figure-image.html param="plesk-historique-commit-repo-git.jpg" %}

Le seul bémol est l'absence de console intégrée au sein de Plesk. Elle permettrait de diminuer le nombre d'applications nécessaires au workflow d' [intégration continue](http://www.magazineduwebdesign.com/conseils/guides/integration-continue-application-mobile/). Il faut donc exécuter les commandes Git dans votre interface en ligne de commande préférée. Ensuite, Plesk se chargera de déployer les modifications en production.

### Méthodologies de déploiements en manuel ou en automatique

L'outil offre différentes approches pour le déploiement. Soit automatique, soit manuelle. A vous de choisir en fonction de votre routine de mise en production.

{% include components/content-post-default-figure-image.html param="plesk-parametre-deploiement-git.jpg" %}

L'outil permet également la déclaration d'actions supplémentaires à exécuter lors des déploiements en production. Pratique si vous utiliser des tasks runner tels que [Grunt](http://gruntjs.com/) ou [Gulp](http://gulpjs.com/).

### Quelques astuces de ninja pour maîtriser Git

Ma première expérience avec Git date de 2014. A l'époque, pour moi, Git était intimidant. Je trouvais toujours des excuses pour ne pas l'utiliser. Je me disais que c'était un outil pour les "vrais" développeurs – trop compliqué pour moi et source d'erreurs. Je préférais tout faire à l'ancienne avec un bon workflow FTP. Heureusement, Git est bien fait et offre un grand nombre de commandes pour faciliter mon quotidien. Voici quelques commandes Git bien pratiques pour rattraper tous types de boulette en dév.

### Git – magic time machine

La commande `git reflog` est votre filet de sécurité : vous ne devriez pas être inquiet qu'une fusion, une rebase, ou une autre action détruise votre travail, car vous pouvez le retrouver à l'aide de cette commande. Ensuite, `git reset` vous permettra de revenir au moment où le code fonctionnait :-).

{% highlight html %}
git reflog
35b271a HEAD@{0}: commit: fixed: typo
751d188 HEAD@{1}: commit: fixed: ext. link
0028aab HEAD@{2}: commit: fixed: issue w/ ext. link on img
cbae5b1 HEAD@{3}: commit: deleted: fluidbox js for lightbox
1910195 HEAD@{4}: commit: fixed: img issue
7139adf HEAD@{5}: commit: updated: extension file
fed2b89 HEAD@{6}: commit: fixed: broken external links
# Commande permettant de voir toutes les modifications que vous avez faites avec Git dans chacune de vos branches !
# Chaque modification à un index HEAD@{index} indiquant l'ID de la modification et le message du commit.
# Trouvez l'index précédent la catastrophe. Puis exécutez la cmd suivante.
git reset HEAD@{index}
# magic time machine
{% endhighlight %}

### Git – modifier le contenu du précédent commit

Vous avez oublié de formater le commit comme indiqué par votre responsable technique. Pas de panique, la commande `git commit --amend` vous aidera à conserver une bonne image auprès de votre boss.
{% highlight html %}
git commit --amend
# Puis Messages vous invitant à changer le texte de votre commit
{% endhighlight %}

Pour plus de commandes magiques, consultez le site [ohshitgit.com](http://ohshitgit.com/) et la [documentation officielle de Git](https://git-scm.com/doc).

## Fluidifiez votre process de développement et automatisez un maximum de tâches

J'applique un principe de base depuis quelques mois qui m'a permis d'améliorer ma productivité. Toute tâche qui me prend plus de 5 min par jour est automatisée. J'ai souhaité tester Plesk pour gérer mon process de développement car il permet de centraliser un grand nombre d'opérations en un unique endroit. Et d'en automatiser certaines.

Que ce soit pour [gérer la sécurité de mes sites WordPress](http://www.magazineduwebdesign.com/conseils/guides/comment-automatiser-la-securite-d-un-site-wordpress/) ou optimiser un workflow Git, Plesk apporte une solution clés en main très appréciable. La mise en place d'un répertoire Git avec Plesk ne prend que quelques minutes. Cela permet d'automatiser partiellement ou en totalité son process de déploiement.

Testez par vous même [Plesk](https://www.plesk.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) et envoyez vos questions directement sur [Twitter](https://twitter.com) avec la mention @MagDuWebdesign.

---

Si vous avez apprécié cet article, vous pourriez être intéressé(e) par :

-  [Comment automatiser la sécurité d'un site WordPress](http://www.magazineduwebdesign.com/conseils/guides/comment-automatiser-la-securite-d-un-site-wordpress/) ;
-  [Intégration continue – développez votre application mobile 200 fois plus vite](http://www.magazineduwebdesign.com/conseils/guides/integration-continue-application-mobile/).

Un grand merci à [Plesk](https://www.plesk.com/?utm_medium=blog&utm_campaign=content&utm_source=magazineduwebdesign) pour avoir sponsorisé la rédaction de cet article. Si vous souhaitez faire connaître vos produits et vos services, consultez la page [Sponsors](http://www.magazineduwebdesign.com/sponsors/).

— [Guillaume du Magazine du Webdesign](https://www.linkedin.com/in/gpalayer).
