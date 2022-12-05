// For Underline animation in navbar
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });

// For Scroll Indicator
$(window).scroll(function() {
  var wintop = $(window).scrollTop(), docheight =

  $(document).height(), winheight = $(window).height();
  var scrolled = (wintop/(docheight-winheight))*100;

  $('.scroll-line').css('width', (scrolled + '%'));
  });


// For navbar movement while scroll For Scroll Indicator taken from http://jsfiddle.net/mdesdev/wdDsk/ also a good resource - https://wicky.nillia.ms/headroom.js/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}