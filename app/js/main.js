/*global hljs:false */
$(document).foundation({
	topbar : {
	  sticky_class : 'header--fixed',
	  custom_back_text: true, // Set this to false and it will pull the top level link name as the back text
	  back_text: '&larr; Retour', // Define what you want your custom back text to be if custom_back_text: true
	  is_hover: false,
	  mobile_show_parent_link: false, // will copy parent links into dropdowns for mobile navigation
	  scrolltop : false // jump to top when sticky nav menu toggle is clicked
	}
});
$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.configure({tabReplace: '  '});
    hljs.highlightBlock(block);
  });
});

$('#header').headroom();