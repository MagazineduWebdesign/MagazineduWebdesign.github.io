/*global postCount:false */
/*global callback:false */
/*jshint -W020 */
$(function() {
  $('.infinite-spinner').css('display', 'none');
  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = $('body').find('.js-postcount').length,
      loadNewPostsThreshold = 200;

  // Load the JSON file containing all URLs
    var urlJson;
      switch($('body').find('.current-page').attr('data-page')) {

        // categories
        case 'design':
          urlJson = '/articles-cat_design.json';
        break;

        case 'developpement':
          urlJson = '/articles-cat_developpement.json';
        break;

        case 'fun':
          urlJson = '/articles-cat_fun.json';
        break;

        case 'graphisme':
          urlJson = '/articles-cat_graphisme.json';
        break;

        case 'mobile':
          urlJson = '/articles-cat_mobile.json';
        break;

        case 'ressources':
          urlJson = '/articles-cat_ressources.json';
        break;

        case 'ux-design':
          urlJson = '/articles-cat_ux.json';
        break;

        case 'wordpress':
          urlJson = '/articles-cat_wordpress.json';
        break;

        // inspirations
        case 'ui-sites-web_from-zapier':
          urlJson = '/inspirations-ui-sites-web_index.json';
        break;

        case 'ui-animations':
          urlJson = '/inspirations-ui-animations_index.json';
        break;

        // divers
        case 'collections':
          urlJson = '/collections.json';
        break;

        case 'encyclos':
          urlJson = '/encyclos.json';
        break;

        case 'briefs':
          urlJson = '/briefs.json';
        break;

        default: urlJson = '';

    }


    $.getJSON(urlJson, function(data) {
      postURLs = data.posts;
      // If there aren't any more posts available to load than already visible, disable fetching
      if (postURLs.length <= postsToLoad)
        disableFetching();
    });

  // If there's no spinner, it's not a page where posts should be fetched
  if ($('.infinite-spinner').length < 1)
    shouldFetchPosts = false;

  // Are we close to the end of the page? If we are, load more posts
  $(window).scroll(function(e){
    if (!shouldFetchPosts || isFetchingPosts) return;
    var windowHeight = $(window).height(),
        windowScrollPosition = $(window).scrollTop(),
        bottomScrollPosition = windowHeight + windowScrollPosition,
        documentHeight = $(document).height();

    // If we've scrolled past the loadNewPostsThreshold, fetch posts
    if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
        fetchPosts();
    }
  });


  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;

    isFetchingPosts = true;
    $('.infinite-spinner').css('display', 'block');
    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0;

        postCount = $('body').find('.js-postcount').length,
        callback = function() {
          loadedPosts++;
          var postIndex = postCount + loadedPosts;

          if (postIndex > postURLs.length-1) {
            disableFetching();
            $('.infinite-spinner').css('display', 'none');
            return;
          }

          if (loadedPosts < postsToLoad) {
            fetchPostWithIndex(postIndex, callback);
          } else {
            isFetchingPosts = false;
            $('.infinite-spinner').css('display', 'none');
          }
        };

    fetchPostWithIndex(postCount + loadedPosts, callback);
  }
  var dateClean = '';
  function fetchPostWithIndex(index, callback) {

    var postURL = postURLs[index];
    $.get(postURL, function(data) {
      var poststructure;
      var strHeader = '';
      var str = '';
      switch($('body').find('.current-page').attr('data-page')) {

        // categories
        case 'design':
          str+='<a href="'+postURL+'" title="'+$(data).find('.is-title').html()+'"><article class="carte-article-secondaire js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse">';
          str+='<div class="small-9 columns"><h1 class="carte-article-secondaire-post-title mod-article-two-columns-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><div class="carte-article-secondaire-thumbnail right" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"</div></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'developpement':
          str+='<a href="'+postURL+'" title="'+$(data).find('.is-title').html()+'"><article class="carte-article-secondaire js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse">';
          str+='<div class="small-9 columns"><h1 class="carte-article-secondaire-post-title mod-article-two-columns-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><div class="carte-article-secondaire-thumbnail right" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"</div></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'fun':
          str+='<a href="'+postURL+'" title="'+$(data).find('.is-title').html()+'"><article class="carte-article-secondaire js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse">';
          str+='<div class="small-9 columns"><h1 class="carte-article-secondaire-post-title mod-article-two-columns-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><div class="carte-article-secondaire-thumbnail right" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"</div></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'graphisme':
          str+='<a href="'+postURL+'" title="'+$(data).find('.is-title').html()+'"><article class="carte-article-secondaire js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse">';
          str+='<div class="small-9 columns"><h1 class="carte-article-secondaire-post-title mod-article-two-columns-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><div class="carte-article-secondaire-thumbnail right" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"</div></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'mobile':
          str+='<a href="'+postURL+'" title="'+$(data).find('.is-title').html()+'"><article class="carte-article-secondaire js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse">';
          str+='<div class="small-9 columns"><h1 class="carte-article-secondaire-post-title mod-article-two-columns-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><div class="carte-article-secondaire-thumbnail right" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"</div></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'ressources':
          str+='<a href="'+postURL+'" title="'+$(data).find('.is-title').html()+'"><article class="carte-article-secondaire js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse">';
          str+='<div class="small-9 columns"><h1 class="carte-article-secondaire-post-title mod-article-two-columns-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><div class="carte-article-secondaire-thumbnail right" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"</div></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'ux-design':
          str+='<a href="'+postURL+'" title="'+$(data).find('.is-title').html()+'"><article class="carte-article-secondaire js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse">';
          str+='<div class="small-9 columns"><h1 class="carte-article-secondaire-post-title mod-article-two-columns-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><div class="carte-article-secondaire-thumbnail right" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"</div></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'wordpress':
          str+='<a href="'+postURL+'" title="'+$(data).find('.is-title').html()+'">';
          str+='<article class="carte-article-secondaire js-postcount" itemprop="blogPosts mod-article-two-columns-post-title" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse"><div class="small-9 columns"><h1 class="carte-article-secondaire-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><div class="carte-article-secondaire-thumbnail right" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"</div></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        // inspirations
        case 'ui-sites-web_from-zapier':
          str+='<li><article class="grid-article-card js-postcount" itemscope="" itemtype="http://schema.org/Article" data-equalizer-watch>';
          str+='<a class="grid-article-card-link-wrap" href="'+postURL+'" title="'+$(data).find('.is-title').attr('data-is-title')+'">';
          str+='<div class="row collapse grid-article-card-image"><div class="small-12 columns" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting">';
          str+='<img src="'+$(data).find('.mod-app-screenshot').attr('data-is-img')+'" alt="'+$(data).find('.is-title').attr('data-is-title')+'" width="219" height="106" />';
          str+='</div></div><div class="row collapse"><div class="grid-article-card-info small-12 columns">';
          str+='<h1 class="grid-article-card-title mod-card-w-tag" itemprop="headline">'+$(data).find('.is-title').attr('data-is-title')+'</h1>';
          str+='</div></div></a>';
          str+='<div class="grid-article-card-ctrl">';
          str+='<a class="grid-article-card-ctrl-preview" href="'+$(data).find('.is-url-demo').attr('data-is-url-demo')+'" title="Aperçu – '+$(data).find('.is-title').attr('data-is-title')+'" target="_blank" rel="nofollow">';
          str+='<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" ><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="#FFFFFF"/></svg>';
          str+='</a></div></article></li>';
          $('.is-index-ui-sites-web').append(str);
          break;

        case 'ui-animations':
          str+='<li><article class="grid-article-card js-postcount" itemscope="" itemtype="http://schema.org/Article" data-equalizer-watch>';
          str+='<a class="grid-article-card-link-wrap" href="'+postURL+'" title="'+$(data).find('.is-title').attr('data-is-title')+'">';
          str+='<div class="row collapse grid-article-card-image"><div class="small-12 columns" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting">';
          str+='<img src="'+$(data).find('.mod-app-screenshot').attr('data-is-img')+'" alt="'+$(data).find('.is-title').attr('data-is-title')+'" width="219" height="106" />';
          str+='</div></div><div class="row collapse"><div class="grid-article-card-info small-12 columns">';
          str+='<h1 class="grid-article-card-title mod-card-w-tag" itemprop="headline">'+$(data).find('.is-title').attr('data-is-title')+'</h1>';
          str+='</div></div></a>';
          str+='<div class="grid-article-card-ctrl">';
          str+='<a class="grid-article-card-ctrl-preview" href="'+$(data).find('.is-url-demo').attr('data-is-url-demo')+'" title="Voir source – '+$(data).find('.is-title').attr('data-is-title')+'" target="_blank" rel="nofollow">';
          str+='<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" ><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="#FFFFFF"/></svg>';
          str+='</a></div></article></li>';
          $('.is-index-ui-animations').append(str);
          break;

        // divers
        case 'encyclos':
          str+='<a href="'+postURL+'" title="'+$(data).find('.encyclo-title-def').html()+'">';
          str+='<article class="carte-article-secondaire js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse"><div class="small-9 columns"><h1 class="carte-article-secondaire-post-title" itemprop="headline">'+$(data).find('.is-title').html()+'</h1></div>';
          str+='<div class="small-3 columns"><img class="right" src="'+$(data).find('.is-img').attr('data-is-img')+'" title="'+$(data).find('.encyclo-title-def').html()+'"/></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'collections':
          str+='<a href="'+postURL+'" title="'+$(data).find('.headline-collection').html()+'">';
          str+='<article class="collection-index-article js-postcount" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"><div class="shadow-img"><div class="collection-index-article-content">';
          str+='<h1 class="collection-index-article-content-title text-center" itemprop="headline">'+$(data).find('.headline-collection').html()+'</h1>';
          str+='<p class="text-center">'+$(data).find('.header-liste-content').html()+'</p></div></div></article></a>';
          $('.collection-index-panel').append(str);
          break;

        case 'briefs':
          if(dateClean !== $(data).find('.section-brief-header').attr('data-cleaned')) {
            if(dateClean !== '') str+='</div></div></section>';
            strHeader = '';
            strHeader+='<section><header class="row-liste-index">';
            strHeader+='<time class="small-12 columns text-center section-brief-header"><h1 class="section-brief-header-titre">'+$(data).find('.section-brief-header').attr('data-week-day')+'<span class="section-brief-header-baseline">'+$(data).find('.section-brief-header-baseline').html()+'</span></h1></time>';
            strHeader+='</header><div class="row-liste-index"><div class="small-12 columns section-brief-panel date-'+$(data).find('.section-brief-header').attr('data-cleaned')+'"></div></div></section>';
            $('.note-index').append(strHeader);
          }

          // item note
          // ----------------------------------
          if(dateClean !== $(data).find('.section-brief-header').attr('data-cleaned')) {
          str='<article class="js-postcount note"><div class="row collapse"><div class="small-12 columns">';
          } else {
            str='<article class="js-postcount note"><div class="row collapse"><div class="small-12 columns">';
          }
          str+= $(data).find('.section-brief-panel').html();
          $('.date-'+$(data).find('.section-brief-header').attr('data-cleaned')).append(str);

          dateClean = $(data).find('.section-brief-header').attr('data-cleaned');

          break;

        default: $('.section-carte-index-panel').append('<h1>'+$(data).find('.is-title').html()+'</h1>');
      }
      $(poststructure);
      callback();
    });
  }

  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $('.infinite-spinner').fadeOut();
  }

});
