/*global hljs:false */
$(document).foundation({
	topbar : {
	  sticky_class : 'header--fixed',
	  custom_back_text: true, // Set this to false and it will pull the top level link name as the back text
	  back_text: '&larr; Retour', // Define what you want your custom back text to be if custom_back_text: true
	  is_hover: false,
	  mobile_show_parent_link: false, // will copy parent links into dropdowns for mobile navigation
	  scrolltop : false // jump to top when sticky nav menu toggle is clicked
	},
	interchange: {
    named_queries : {
      smallretina : 'only screen and (min-width: 1px) and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: 1px) and (min--moz-device-pixel-ratio: 2), only screen and (min-width: 1px) and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: 1px) and (min-device-pixel-ratio: 2), only screen and (min-width: 1px) and (min-resolution: 192dpi), only screen and (min-width: 1px) and (min-resolution: 2dppx)',
      mediumretina : 'only screen and (min-width: 641px) and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: 641px) and (min--moz-device-pixel-ratio: 2), only screen and (min-width: 641px) and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: 641px) and (min-device-pixel-ratio: 2), only screen and (min-width: 641px) and (min-resolution: 192dpi), only screen and (min-width: 641px) and (min-resolution: 2dppx)',
      largeretina : 'only screen and (min-width: 1025px) and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (min--moz-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: 1025px) and (min-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (min-resolution: 192dpi), only screen and (min-width: 1025px) and (min-resolution: 2dppx)'
    }
  }
});
$('#header').headroom();
$('img').VimeoThumb();
var faviconTag = $('link[rel=icon]'),
		titleTag = $('title');

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      faviconTag.attr('href', '/dogefavicon.png');
      titleTag.text('Wow ! Vous êtes si loin, si loin ! wow !');
    } else {
      faviconTag.attr('href', '/favicon-16x16.png');
      titleTag.text('Trop bon de vous revoir !');
    }
  });
