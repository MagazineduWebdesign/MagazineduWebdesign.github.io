/*global hljs:false */
/*global Swiper:false */
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
$('#header').headroom();

$(function () {
  $('.gallery a[rel="lightbox"]').fluidbox({
      stackIndex: 100
  });
});
$(document).ready(function () {
  //initialize swiper when document ready  
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,
    grabCursor: true
  });
});