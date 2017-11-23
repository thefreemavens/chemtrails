//////////////////////////////////////////////////////////////////
// JS / Main
//

//////////////////////////////////////////////////////////////////
// Ready set go
//

$(document).ready(function(){

  // Toggle menu open/close classes
  $('.tfm-menu-icon-inner').click(function(){
    $(this).toggleClass('open');
    $('.tfm-menu').toggleClass('open');
    $('.form-group').toggleClass('open');
  });

  // Close menu with ESC key 
  $(document).keyup(function(e) {
    if ( (e.keyCode == 27) && $('.tfm-menu').is('.open') ) { 
      $('.tfm-menu-icon-inner').removeClass('open');
      $('.tfm-menu').removeClass('open');
    }
  });

  // Home: Collapsible
  $('.active a.clickable').on("click", function (e) {

    $('.current').not(this).removeClass('current').addClass('collapsed').parents('.active').find('.collapsein').slideUp();

    $('html,body').animate({
        scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2 + 33
    }, 600);
   
    if ($(this).hasClass('collapsed')) {
        // expand the panel
        $(this).parents('.active').find('.collapsein').slideDown();
        $(this).removeClass('collapsed muted').addClass('current');
        $('.collapsed').not(this).addClass('muted');
    }
    else {
        // collapse the panel
        $(this).parents('.active').find('.collapsein').slideUp();
        $(this).removeClass('current').addClass('collapsed');
        $('.collapsed').not(this).removeClass('muted');
    }
  });

});