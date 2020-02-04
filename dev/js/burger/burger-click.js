var linesToArrow = gsap.timeline({paused: true});

linesToArrow.to("#top-line", {duration: .25, rotate: -45, transformOrigin: "100%, 50%", x: -8, y: 2},"linesArrow")
.to("#bottom-line", {duration: .25, rotate: 45, transformOrigin: "100%, 50%", x: -8, y: -2},"linesArrow")
.to("#burgerContainer", {duration: .25, scaleX: -1}, "linesArrow");


$("#burgerContainer").on("click", function(){

    console.log("click");

    if(canYouSeeNav === false){
        linesToArrow.play();
        gsap.to("#homepage", {duration: 0.2, scaleX: 0, paddingTop: 0});

        gsap.to("nav", {duration: 0.2, scaleX: 1, delay: 0.5, display: "flex", position: "fixed"});
        gsap.to("nav ul li", {delay: 0.4, duration: 0.2, x: -10, stagge: 0.2});

        // gsap.to("#homepage", {duration: 0.5, x: "-50%"});
        // gsap.to("#navBGContainer", {duration: 0.5, x: "-50%"});
        // gsap.to("#navBGContainer", {delay: 0.2, duration: 0.5, x: "10%", rotate: 360});



        canYouSeeNav = true;
    }else{
        linesToArrow.reverse();
        gsap.to("#homepage",{delay: 0.2, duration:.3, scaleX:1, paddingTop: 42});
        gsap.to("nav", {duration: 0.2, scaleX: 0, display: "none", onComplete:hideNav});
        canYouSeeNav = false;
    }

});
