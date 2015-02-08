/*global postCount:false */
/*global callback:false */
/*jshint -W020 */
$(function() {
  $('.infinite-spinner').css('display', 'none');
  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = $('.infinite-index').children().length,
      loadNewPostsThreshold = 200;
  
  // Load the JSON file containing all URLs
    var urlJson;
      switch($('body').find('.current-page').attr('data-page')) {
        case 'ux':
          urlJson = '/articles_ux.json';
        break;

        case 'wordpress':
          urlJson = '/articles_wordpress.json';
        break;

        case 'collections':
          urlJson = '/collections.json';
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
  
  var loadedPosts = 0;
  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;

    isFetchingPosts = true;
    $('.infinite-spinner').css('display', 'block');
    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    
        postCount = $('.infinite-index').children().length,
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
        
        case 'ux':
          str+='<a href="'+postURL+'" title="'+$(data).find('.headline-post').html()+'"><article class="carte-categorie-article-secondaire" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse">';
          str+='<div class="small-9 columns"><h1 itemprop="headline">'+$(data).find('.headline-post').html()+'</h1></div>';
          str+='<div class="small-3 columns"><img class="right" src="'+$(data).find('.is-img').attr('data-is-img')+'" title="'+$(data).find('.headline-post').html()+'"/></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'wordpress':
          str+='<a href="'+postURL+'" title="'+$(data).find('.headline-post').html()+'">';
          str+='<article class="carte-categorie-article-secondaire" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting"><div class="row collapse"><div class="small-9 columns"><h1 itemprop="headline">'+$(data).find('.headline-post').html()+'</h1></div>';
          str+='<div class="small-3 columns"><img class="right" src="'+$(data).find('.is-img').attr('data-is-img')+'" title="'+$(data).find('.headline-post').html()+'"/></div></div></article></a>';
          $('.section-carte-index-panel').append(str);
          break;

        case 'collections':
          str+='<a href="'+postURL+'" title="'+$(data).find('.headline-collection').html()+'">';
          str+='<article class="collection-index-article" itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting" style="background-image: url('+$(data).find('.is-img').attr('data-is-img')+');"><div class="collection-index-article-shadow"><div class="collection-index-article-content">';
          str+='<h1 class="text-center" itemprop="headline">'+$(data).find('.headline-collection').html()+'</h1>';
          str+='<p class="text-center">'+$(data).find('.desc-collection').html()+'</p></div></div></article></a>';
          $('.collection-index-panel').append(str);
          break;

        case 'briefs':
          // question: gestion de la chronologie d'affichage des items (cf reversed liquid)

          // header item section10
          // cycle de ces balises ouvrantes tous les 10 items
          // ----------------------------
         
          if(dateClean !== $(data).find('.section-brief-header').attr('data-cleaned')) {
            if(dateClean !== '') str+='</div></div></section>';
            strHeader = '';
            strHeader+='<section><header class="row-liste-index">';
            strHeader+='<time class="small-12 columns section-brief-header"><h1 class="section-brief-header-titre">'+$(data).find('.section-brief-header').attr('data-week-day')+'<span class="section-brief-header-baseline">'+$(data).find('.section-brief-header-baseline').html()+'</span></h1></time>';
            strHeader+='</header><div class="row-liste-index"><div class="small-12 columns section-brief-panel date-'+$(data).find('.section-brief-header').attr('data-cleaned')+'"></div></div></section>';
            $('.note-index').append(strHeader);
          }
          
          // ----------------------------------
          // fin header item section10

          // item note
          // ----------------------------------

          if(dateClean !== $(data).find('.section-brief-header').attr('data-cleaned')) {
          str='<article class="note first-note"><div class="row"><div class="small-1 columns note-circle-number">';
          } else {
            str='<article class="note"><div class="row"><div class="small-1 columns note-circle-number">';
          }
          str+='<div class="circle"><div class="circle-content"><!--??? gestion numéro de la note --></div></div></div>';
          str+='<div class="small-11 columns note-border">'+$(data).find('.section-brief-panel').html()+'</div></div></article>';
          $('.date-'+$(data).find('.section-brief-header').attr('data-cleaned')).append(str);
          // ----------------------------------
          // fin item note

          // footer item section10
          // cycle de ces balises fermantes tous les 10 items
          // ------------------------------------------
         
          // ------------------------------------------
          // fin footer item section10
          dateClean = $(data).find('.section-brief-header').attr('data-cleaned');
          
          break;

        default: $('.section-carte-index-panel').append('<h1>'+$(data).find('.headline-post').html()+'</h1>');

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