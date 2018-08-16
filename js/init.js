(function($){
  $(function(){
  
  $('.sidenav').sidenav();
  $('.tabs').tabs({
    swipeable:false
  });
  $('.parallax').parallax({
    responsiveThreshold:2000
  });
  $('.carousel.carousel-slider').carousel({
    fullWidth:true
  });
  $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space
