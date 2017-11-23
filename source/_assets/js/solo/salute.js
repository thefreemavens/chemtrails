//////////////////////////////////////////////////////////////////
// JS / Main
//

//////////////////////////////////////////////////////////////////
// Window resize
//

// $(window).resize(function(){location.reload();});

//////////////////////////////////////////////////////////////////
// Window scroll
//

$(window).scroll(function () {

  // Homepage background image parallax effect
  var x = $(this).scrollTop();
  var wh = $(window).height();
  
  $("#tfm-background").css("background-position","50% " + parseInt(-x/3.33) + "px");

  // Homepage Menu Icon color change.
  if (x + 80 > wh) {
    $('.tfm-menu-icon-inner').removeClass('light');
  } else {
    $('.tfm-menu-icon-inner').addClass('light');
  }

});


//////////////////////////////////////////////////////////////////
// Ready set go
//

$(document).ready(function(){

  // Home: Trigger front page animations via waypoints
  $('#tfm-app').addClass('tfm-wp-item-default');

  // Home: Scroll to link
  $(".tfm-scroll-link").click(function(event) {
      var theHeight = $(window).height();
        $('html, body').animate({scrollTop: theHeight}, 666);
  });

  // // Home: Collapsible
  // $('.active a.clickable').on("click", function (e) {

  //   $('.current').not(this).removeClass('current').addClass('collapsed').parents('.active').find('.collapsein').slideUp();

  //   $('html,body').animate({
  //       scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2 + 99
  //   }, 600);
   
  //   if ($(this).hasClass('collapsed')) {
  //       // expand the panel
  //       $(this).parents('.active').find('.collapsein').slideDown();
  //       $(this).removeClass('collapsed muted').addClass('current');
  //       $('.collapsed').not(this).addClass('muted');
  //   }
  //   else {
  //       // collapse the panel
  //       $(this).parents('.active').find('.collapsein').slideUp();
  //       $(this).removeClass('current').addClass('collapsed');
  //       $('.collapsed').not(this).removeClass('muted');
  //   }
  // });

});

//////////////////////////////////////////////////////////////////
// Set up WayPoints
//

var $anim = $( '#tfm-app' );
$( '.tfm-wp' ).each( function(i) {
  var $el = $( this ),
    animClassDown = $el.data( 'animateDown' ),
    animClassUp = $el.data( 'animateUp' );

  $el.waypoint( function( direction ) {
    if( direction === 'down' && animClassDown ) {
      $anim.attr('class', 'tfm-wp-item ' + animClassDown);
      // $anim.attr('class', 'ha-header ' + animClassDown);
    }
    else if( direction === 'up' && animClassUp ){
      $anim.attr('class', 'tfm-wp-item ' + animClassUp);
    }
  }, { offset: '100%' } );
});

//////////////////////////////////////////////////////////////////
// Set up Bodymovin
//

var anim_sg;
var elem = document.getElementById('tfm-anim-sg')
var animData = {
    container: elem,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    rendererSettings: {
        progressiveLoad:false
    },
    path: '../assets/json/sg-data-2.json'
};
anim_sg = bodymovin.loadAnimation(animData);
// window.onresize = anim.resize.bind(anim);

var anim_svg;
var elem = document.getElementById('tfm-anim-sg-footer')
var animData = {
    container: elem,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    rendererSettings: {
        progressiveLoad:false
    },
    path: '../assets/json/sg-data.json'
};
anim_svg = bodymovin.loadAnimation(animData);
// window.onresize = anim.resize.bind(anim);

// var anim_svg;
// var elem = document.getElementById('tfm-anim-icon')
// var animData = {
//     container: elem,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: 'assets/json/hex-data.json'
// };
// anim_svg = bodymovin.loadAnimation(animData);
// // window.onresize = anim.resize.bind(anim);

