var canYouSeeNav = false;

gsap.set("#navBG", {transformOrigin: "50% 50%"})

// set lines to rotate over center
gsap.set(".burgerLines", {transformOrigin: "50%, 50%"});

function hideNav(){
    gsap.set("nav",{display:"none"});
    gsap.set("nav li",{alpha:1});
}