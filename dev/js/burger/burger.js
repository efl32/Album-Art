var canYouSeeNav = false;

gsap.set("nav", {scaleX: 0, transformOrigin: "50% 50%"});
gsap.set("#navBGContainer", {transformOrigin: "50% 50%", x: "-10%"});

gsap.set(".burgerLines", {transformOrigin: "50%, 50%"});

function hideNav(){
    gsap.set("nav",{display:"none"});
    gsap.set("nav li",{alpha:1});
}
