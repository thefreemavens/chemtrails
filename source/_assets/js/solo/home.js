
//////////////////////////////////////////////////////////////////
// Home / Preloader
//

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(111).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  // $('body').delay(350).css({'overflow':'visible'});
})

//////////////////////////////////////////////////////////////////
// Ready Set Go
//

$(document).ready(function(){

  $('.tfm-scroll-top').click(function(){
    $('html, body').animate({scrollTop: '0px'}, 666);
  });

  // collapsible homepage faq show first item
  $('.tfm-collapse-ul li:first-of-type a').removeClass('collapsed').addClass('current');
  $('.tfm-collapse-ul li:first-of-type div').css({display:'block'});

});

// //////////////////////////////////////////////////////////////////
// // Bodymovin /  Flower of Life
// //

// var anim;
// var elem = document.getElementById('tfm-fol')
// var animData = {
//     container: elem,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: '../assets/json/fol-home.json'
// };
// anim = bodymovin.loadAnimation(animData).setSpeed(0.33);


// //////////////////////////////////////////////////////////////////
// // Bodymovin /  Meta 1
// //

// var anim_m1;
// var elem_m1 = document.getElementById('meta1')
// var animData_m1 = {
//     container: elem_m1,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: '../assets/json/meta1.json'
// };
// anim_m1 = bodymovin.loadAnimation(animData_m1).setSpeed(1.2);


// //////////////////////////////////////////////////////////////////
// // Bodymovin /  Meta 2
// //

// var anim_m2;
// var elem_m2 = document.getElementById('meta2')
// var animData_m2 = {
//     container: elem_m2,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: '../assets/json/meta2.json'
// };
// anim_m2 = bodymovin.loadAnimation(animData_m2).setSpeed(1.5);


// //////////////////////////////////////////////////////////////////
// // Bodymovin /  Meta 3
// //

// var anim_m3;
// var elem_m3 = document.getElementById('meta3')
// var animData_m3 = {
//     container: elem_m3,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: '../assets/json/meta3.json'
// };
// anim_m3 = bodymovin.loadAnimation(animData_m3).setSpeed(1.5);


// //////////////////////////////////////////////////////////////////
// // Bodymovin /  Meta 4 = 1
// //

// var anim_m4;
// var elem_m4 = document.getElementById('meta4')
// var animData_m4 = {
//     container: elem_m4,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: '../assets/json/meta1.json'
// };
// anim_m4 = bodymovin.loadAnimation(animData_m4).setSpeed(1.2);


// //////////////////////////////////////////////////////////////////
// // Bodymovin /  Meta 5 = 3
// //

// var anim_m5;
// var elem_m5 = document.getElementById('meta5')
// var animData_m5 = {
//     container: elem_m5,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         progressiveLoad:false
//     },
//     path: '../assets/json/meta3.json'
// };
// anim_m5 = bodymovin.loadAnimation(animData_m5).setSpeed(1.5);




