var canYouSeeNav = false;

var navWidth = $("nav").width();
console.log(navWidth);

$( window ).resize(function() {
  navWidth = $("nav").width();
  console.log(navWidth);

});

// set lines to rotate over center
gsap.set(".burgerLines", {transformOrigin: "50%, 50%"});
