$(document).ready(function () {

  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
  })

  $( '.nav-item a' ).on("click", function(){
    $('.navbar-collapse').click();
  });


  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-backround');
      $('.navbar').removeClass('fixed-top');
    }
  })

  $(function(){
    $('a').creep({
      speed: 3000,
      offset: -30
    });
  })



  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $('#back-to-top').addClass('scrollTop');
     
    } else {
      $('#back-to-top').removeClass('scrollTop');
    }
  })


  $("#header, .info").ripples({
    dropRadius: 10,
    perturbance: 0.03,

  });


  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
    // other options
  });

});