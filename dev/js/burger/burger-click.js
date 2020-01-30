var linesToArrow = gsap.timeline({paused: true});

linesToArrow.to("#top-line", {duration: .25, rotate: -45, transformOrigin: "100%, 50%", x: -8, y: 2},"linesArrow")
.to("#bottom-line", {duration: .25, rotate: 45, transformOrigin: "100%, 50%", x: -8, y: -2},"linesArrow")
.to("#burgerContainer", {duration: .25, scaleX: -1}, "linesArrow");


$("#burgerContainer").on("click", function(){

    console.log("click");

    if(canYouSeeNav === false){
        linesToArrow.play();
        gsap.to("#navBG", { duration: 0.5, scale: 100, alpha: 0.9});
        gsap.set("nav", { display: "flex"});
        gsap.from("nav li",{duration:0.5, alpha:0, stagger:0.15, delay:0.25, y:50});


        canYouSeeNav = true;
    }else{
        linesToArrow.reverse();
        gsap.to("#navBG",{duration:0.25, scale:1});
        gsap.to("nav li",{duration:0.25, alpha:0, onComplete:hideNav});
        canYouSeeNav = false;
    }

});
